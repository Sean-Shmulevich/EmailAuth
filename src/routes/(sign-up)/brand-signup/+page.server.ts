import { emailRegex } from '$lib/form-submission';
import { fail, redirect } from '@sveltejs/kit';
import { auth, emailVerificationToken } from '$lib/lucia';
import { sendEmailVerificationEmailBrand } from '$lib/email';
import { LuciaError } from 'lucia-auth';
import { Prisma } from '@prisma/client';

import type { PageServerLoad, Actions } from './$types';
import { prismaClient } from '$lib/db';

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
		const email = (formData.get('email')?.toString() ?? '').toLowerCase();
		const tos = formData.get('terms-of-service')?.toString();
		const name = formData.get('name')?.toString();
		const location = formData.get('location')?.toString();
		const industry = formData.get('industry')?.toString();
		const size = formData.get('size')?.toString();

		const athlete = formData.get('athlete')?.toString();
		const sportPref = formData.get('sportPref')?.toString();
		const goals = formData.get('goals')?.toString();

		const missingFields: string[] = [];

		if (!name) missingFields.push('Name');
		if (!email) missingFields.push('Email');
		// if (!phoneNumber) missingFields.push('phone-number');
		if (!location) missingFields.push('Location');
		if (!industry) missingFields.push('Industry');
		if (!size) missingFields.push('Size');
		if (!tos) missingFields.push('You must agree to our terms of service');

		if (missingFields.length > 0) {
			return fail(400, {
				message: `Missing fields: ${missingFields.join(', ')}`,
				email,
				name,
				location,
				industry,
				size,
				athlete,
				sportPref,
				goals
			});
		}

		if (email === null || !emailRegex.test(email)) {
			return fail(400, {
				message: 'Invalid email',
				email,
				name,
				location,
				industry,
				size,
				athlete,
				sportPref,
				goals
			});
		}
		const password = formData.get('password');
		if (password instanceof File || password === null || password.length < 8) {
			return fail(400, {
				message: 'Invalid password',
				email,
				name,
				location,
				industry,
				size,
				athlete,
				sportPref,
				goals
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
					email,
					name,
					location,
					industry,
					size,
					athlete,
					sportPref,
					goals
				});
			}
			// duplication error
			if (e instanceof Prisma.PrismaClientKnownRequestError && e.code === 'P2002') {
				return fail(400, {
					message: 'Email is already taken',
					email,
					name,
					location,
					industry,
					size,
					athlete,
					sportPref,
					goals
				});
			}
			return fail(500, {
				message: 'An unknown error occurred',
				email,
				name,
				location,
				industry,
				size,
				athlete,
				sportPref,
				goals
			});
		}
	}
};
