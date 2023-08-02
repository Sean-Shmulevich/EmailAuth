import { emailRegex } from '$lib/form-submission';
import { fail, redirect } from '@sveltejs/kit';
import { auth, emailVerificationToken } from '$lib/lucia';
import { sendEmailVerificationEmail } from '$lib/email';
import { LuciaError } from 'lucia-auth';
import { Prisma } from '@prisma/client';
import { prismaClient } from '$lib/db';

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
		const email = (formData.get('email')?.toString() ?? '').toLowerCase() ?? '';
		const name = formData.get('name')?.toString() ?? '';
		const phoneNumber = formData.get('phone-number')?.toString() ?? '';
		const uni = formData.get('university')?.toString() ?? '';
		const sport = formData.get('sport-preference')?.toString() ?? '';
		const gender = formData.get('gender-preference')?.toString() ?? '';
		const hometown = formData.get('hometown')?.toString() ?? '';
		const graduation = formData.get('graduation')?.toString() ?? '';

		// Check for missing fields
		const missingFields: string[] = [];
		if (!email) missingFields.push('email');
		if (!name) missingFields.push('name');
		if (!phoneNumber) missingFields.push('phone-number');
		if (!uni) missingFields.push('university');
		if (!sport) missingFields.push('sport-preference');
		if (!gender) missingFields.push('gender-preference');
		if (!hometown) missingFields.push('hometown');
		if (!graduation) missingFields.push('graduation');

		if (missingFields.length > 0) {
			return fail(400, {
				message: `Missing fields: ${missingFields.join(', ')}`,
				email,
				name,
				phoneNumber,
				uni,
				sport,
				gender,
				hometown,
				graduation
			});
		}

		if (email === null || !emailRegex.test(email)) {
			return fail(400, {
				message: 'Invalid email',
				email,
				name,
				phoneNumber,
				uni,
				sport,
				gender,
				hometown,
				graduation
			});
		}
		const password = formData.get('password');
		if (password instanceof File || password === null || password.length < 8) {
			return fail(400, {
				message: 'Invalid password',
				email,
				name,
				phoneNumber,
				uni,
				sport,
				gender,
				hometown,
				graduation
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
			await prismaClient.profile.create({
				data: {
					sport: sport,
					college: uni,
					year: graduation,
					bio: '',
					user_id: user.userId,
					gender,
					hometown
				}
			});
			const session = await auth.createSession(user.userId);
			locals.auth.setSession(session);

			const token = await emailVerificationToken.issue(user.userId);
			await sendEmailVerificationEmail(user.email, token.toString());
		} catch (e) {
			console.log(e);
			if (e instanceof LuciaError && e.message === 'AUTH_DUPLICATE_KEY_ID') {
				return fail(400, {
					message: 'Email is already taken',
					email,
					name,
					phoneNumber,
					uni,
					sport,
					gender,
					hometown,
					graduation
				});
			}
			// duplication error
			if (e instanceof Prisma.PrismaClientKnownRequestError && e.code === 'P2002') {
				return fail(400, {
					message: 'Email is already taken',
					email,
					name,
					phoneNumber,
					uni,
					sport,
					gender,
					hometown,
					graduation
				});
			}
			return fail(500, {
				message: 'An unknown error occurred',
				email,
				name,
				phoneNumber,
				uni,
				sport,
				gender,
				hometown,
				graduation
			});
		}
	}
};
