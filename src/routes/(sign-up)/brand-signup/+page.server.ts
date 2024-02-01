import { emailRegex } from '$lib/form-submission';
import { fail, redirect } from '@sveltejs/kit';
import { auth, emailVerificationToken } from '$lib/lucia';
import { sendEmailVerificationEmailBrand } from '$lib/email';
import { LuciaError } from 'lucia-auth';
import { Prisma } from '@prisma/client';
import { GIT_BRANCH } from '$env/static/private';

import type { PageServerLoad, Actions } from './$types';
import { prismaClient } from '$lib/db';

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
		//TODO, capture the 'athlete', 'sportPref', and 'goals' currently nothing is being done with this data.
		//Location, industry, size and name are all being added to the brandProfile table.
		const formData = await request.formData();
		const fields = {
			email: formData.get('email')?.toString().toLowerCase() ?? '',
			name: formData.get('name')?.toString() ?? '',
			location: formData.get('location')?.toString() ?? '',
			industry: formData.get('industry')?.toString() ?? '',
			size: formData.get('size')?.toString() ?? '',
			tos: formData.get('terms-of-service')?.toString() ?? '',
			athlete: formData.get('athlete')?.toString() ?? '',
			sportPref: formData.get('sportPref')?.toString() ?? '',
			goals: formData.get('goals')?.toString() ?? ''
		};

		const missingFields = new Map<string, string>();
		const providedFields = new Map<string, string>();

		Object.entries(fields).forEach(([key, value]) => {
			if (value === '' || value === 'undefined') {
				missingFields.set(key, 'Missing');
			} else {
				providedFields.set(key, value);
			}
		});

		if (missingFields.size > 0) {
			return fail(400, {
				message: `Missing fields: ${Array.from(missingFields.keys()).join(', ')}`,
				...Object.fromEntries(providedFields)
			});
		}

		if (fields.email === null || !emailRegex.test(fields.email)) {
			return fail(400, {
				message: 'Invalid email',
				...Object.fromEntries(providedFields)
			});
		}
		const password = formData.get('password');
		const passwordConfirm = formData.get('confirm-password');
		if (password instanceof File || password === null) {
			return fail(400, {
				message: 'Invalid password',
				...Object.fromEntries(providedFields)
			});
		}
		if (password !== passwordConfirm) {
			return fail(400, {
				message: 'Passwords do not match',
				...Object.fromEntries(providedFields)
			});
		}
		const missingProperties = validatePassword(password);
		// dont validate the password on the test branch.
		if (GIT_BRANCH !== 'Test' && missingProperties.length > 0) {
			return fail(400, {
				message: missingProperties.join(', '),
				...Object.fromEntries(providedFields)
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
					name: formData.get('name')?.toString() ?? '',
					email_verified: false,
					admin_verified: false,
					is_admin: false,
					is_brand: true
				}
			});

			const session = await auth.createSession(user.userId);
			locals.auth.setSession(session);
			// Create the BrandProfile
			await prismaClient.brandProfile.create({
				data: {
					user_id: user.userId,
					name: formData.get('name')?.toString() ?? '',
					location: formData.get('location')?.toString() ?? '',
					industry: formData.get('industry')?.toString() ?? '',
					size: formData.get('size')?.toString() ?? '',
					goals: '',
					socialMediaLinks: '',
					bio: ''
				}
			});
			//TODO: some of this data should be saved for dapup admin metrics.
			// const token = await emailVerificationToken.issue(user.userId);
			// await sendEmailVerificationEmailBrand(user.email, token.toString(), url.origin);
		} catch (e) {
			if (e instanceof LuciaError && e.message === 'AUTH_DUPLICATE_KEY_ID') {
				return fail(400, {
					message: 'Email is already taken',
					...Object.fromEntries(providedFields)
				});
			}
			// duplication error
			if (e instanceof Prisma.PrismaClientKnownRequestError && e.code === 'P2002') {
				return fail(400, {
					message: 'Email is already taken',
					...Object.fromEntries(providedFields)
				});
			}
			return fail(500, {
				message: 'An unknown error occurred',
				...Object.fromEntries(providedFields)
			});
		}
	}
};
