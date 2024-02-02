import { emailRegex } from '$lib/form-submission';
import { fail, redirect } from '@sveltejs/kit';
import { auth, emailVerificationToken } from '$lib/lucia';
import { sendEmailVerificationEmail } from '$lib/email';
import { LuciaError } from 'lucia-auth';
import { Prisma } from '@prisma/client';
import { prismaClient } from '$lib/db';
import { GIT_BRANCH } from '$env/static/private';

// TODO: reduce the repetition of passing back the form data for many different scenarios
// TODO: reduce the repetition of code in this file and src/routes/(sign-up)/brand-signup/+page.server.ts

import type { PageServerLoad, Actions } from './$types';

function validatePassword(pass: string) {
	const missingProperties = [];

	if (pass.length < 8) {
		missingProperties.push('Password must be at least 8 characters long');
		return missingProperties;
	}
	if (pass.length > 32) {
		missingProperties.push('Password can be maximum 32 characters long');
		return missingProperties;
	}
	missingProperties.push('Password must contain');
	//match a number
	if (!pass.match('.*\\d.*')) missingProperties.push('a number');
	//match a lowercase letter
	if (!pass.match('.*[a-z].*')) missingProperties.push('at least one lowercase letter');
	//match an uppercase letter
	if (!pass.match('.*[A-Z].*')) missingProperties.push('at least one uppercase letter');
	//match a special character
	if (!pass.match('.*[*.!@#$%^&(){}[]:";\'<>,.?/~`_+-=|\\].*'))
		missingProperties.push('at least one symbol');

	return missingProperties;
}
export const load: PageServerLoad = async ({ locals }) => {
	const { user } = await locals.auth.validateUser();
	if (user) {
		if (!user.emailVerified) throw redirect(302, '/email-verification');
		throw redirect(302, '/');
	}
};

export const actions: Actions = {
	default: async ({ request, locals, url }) => {
		const formData = await request.formData();
		const fields = {
			email: formData.get('email')?.toString().toLowerCase() ?? '',
			name: formData.get('name')?.toString() ?? '',
			// 'Phone Number': formData.get('phone-number')?.toString() ?? '',
			uni: formData.get('university')?.toString() ?? '',
			sport: formData.get('sport-preference')?.toString() ?? '',
			gender: formData.get('gender-preference')?.toString() ?? '',
			'Agree to our terms of service': formData.get('terms-of-service')?.toString() ?? ''
			// 'Hometown': formData.get('hometown')?.toString() ?? '',
			// 'Graduation Year': formData.get('graduation')?.toString() ?? '',
		};

		// Check for missing fields
		const missingFields = new Map<string, string>();
		const notMissingFields = new Map<string, string>();

		Object.entries(fields).forEach(([key, value]) => {
			if (value === '' || value === 'undefined') {
				missingFields.set(key, value);
			} else {
				notMissingFields.set(key, value);
			}
		});

		if (missingFields.size > 0) {
			return fail(400, {
				message: `Missing fields: ${Array.from(missingFields.keys()).join(', ')}`,
				...Object.fromEntries(notMissingFields)
			});
		}

		if (fields.email === null || !emailRegex.test(fields.email)) {
			return fail(400, {
				message: 'Invalid email',
				...Object.fromEntries(notMissingFields)
			});
		}
		const password = formData.get('password');
		const passwordConfirm = formData.get('confirm-password');
		if (password instanceof File || password === null) {
			return fail(400, {
				message: 'Invalid password',
				...Object.fromEntries(notMissingFields)
			});
		}
		//valid password but not matching with confirm password.
		if (password !== passwordConfirm) {
			return fail(400, {
				message: 'Passwords do not match',
				...Object.fromEntries(notMissingFields)
			});
		}
		const missingProperties = validatePassword(password);
		// dont validate the password on the test branch.
		if (GIT_BRANCH !== 'Test' && missingProperties.length > 0) {
			return fail(400, {
				message: missingProperties.join(', '),
				...Object.fromEntries(notMissingFields)
			});
		}
		try {
			const user = await auth.createUser({
				primaryKey: {
					providerId: 'email',
					providerUserId: fields.email,
					password
				},
				attributes: {
					email: fields.email,
					name: fields.name,
					email_verified: false,
					admin_verified: false,
					is_admin: false,
					is_brand: false
				}
			});
			await prismaClient.profile.create({
				data: {
					sport: fields.sport,
					college: fields.uni,
					bio: '',
					user_id: user.userId,
					gender: fields.gender
				}
			});
			const session = await auth.createSession(user.userId);
			locals.auth.setSession(session);

			// const token = await emailVerificationToken.issue(user.userId);
			// await sendEmailVerificationEmail(user.email, token.toString(), url.origin);
		} catch (e) {
			if (e instanceof LuciaError && e.message === 'AUTH_DUPLICATE_KEY_ID') {
				return fail(400, {
					message: 'Email is already taken',
					...Object.fromEntries(notMissingFields)
				});
			}
			// duplication error
			if (e instanceof Prisma.PrismaClientKnownRequestError && e.code === 'P2002') {
				return fail(400, {
					message: 'Email is already taken',
					...Object.fromEntries(notMissingFields)
				});
			}
			return fail(500, {
				message: 'An unknown error occurred',
				...Object.fromEntries(notMissingFields)
			});
		}
	}
};
