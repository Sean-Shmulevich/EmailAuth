import { emailRegex } from '$lib/form-submission';
import { fail, redirect } from '@sveltejs/kit';
import { auth, emailVerificationToken } from '$lib/lucia';
import { sendEmailVerificationEmail } from '$lib/email';
import { LuciaError } from 'lucia-auth';
import { Prisma } from '@prisma/client';

import type { PageServerLoad, Actions } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	const { user } = await locals.auth.validateUser();
	if (user) {
		if (!user.emailVerified) throw redirect(302, '/email-verification');
		throw redirect(302, '/');
	}
};

export const actions: Actions = {
	default: async ({ request, locals }) => {
		const formData = await request.formData();
		const email = formData.get('email')?.toString() ?? '';
		const name = formData.get('name')?.toString() ?? '';
		const phoneNumber = formData.get('phone-number')?.toString() ?? '';
		if (email === null || !emailRegex.test(email)) {
			return fail(400, {
				message: 'Invalid email',
				email,
				name,
				phoneNumber
			});
		}
		const password = formData.get('password');
		if (password instanceof File || password === null || password.length < 8) {
			return fail(400, {
				message: 'Invalid password',
				email,
				name,
				phoneNumber
			});
		}
		try {
			const user = await auth.createUser({
				primaryKey: {
					providerId: 'email',
					providerUserId: email,
					password
				},
				attributes: {
					email,
					name,
					phoneNumber,
					email_verified: false,
					admin_verified: false,
					is_admin: false,
					is_brand: false
				}
			});
			const session = await auth.createSession(user.userId);
			locals.auth.setSession(session);
			const token = await emailVerificationToken.issue(user.userId);
			await sendEmailVerificationEmail(user.email, token.toString());
		} catch (e) {
			if (e instanceof LuciaError && e.message === 'AUTH_DUPLICATE_KEY_ID') {
				return fail(400, {
					message: 'Email is already taken',
					email,
					name,
					phoneNumber
				});
			}
			// duplication error
			if (e instanceof Prisma.PrismaClientKnownRequestError && e.code === 'P2002') {
				return fail(400, {
					message: 'Email is already taken',
					email,
					name,
					phoneNumber
				});
			}
			return fail(500, {
				message: 'An unknown error occurred',
				email,
				name,
				phoneNumber
			});
		}
	}
};
