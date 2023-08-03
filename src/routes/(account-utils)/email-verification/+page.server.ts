import { sendEmailVerificationEmail, sendEmailVerificationEmailBrand } from '$lib/email';
import { emailVerificationToken } from '$lib/lucia';
import { fail, redirect } from '@sveltejs/kit';

import type { Actions, PageServerLoad } from './$types';
import { ElasticBeanstalk } from 'aws-sdk';

export const load: PageServerLoad = async ({ locals }) => {
	const { user } = await locals.auth.validateUser();

	if (!user) {
		throw redirect(302, '/login');
	}
	if (user.emailVerified) {
		throw redirect(302, '/');
	}
	return {
		user
	};
};

export const actions: Actions = {
	default: async ({ locals }) => {
		const { user } = await locals.auth.validateUser();
		if (!user || user.emailVerified) {
			return fail(401, {
				message: 'Unauthorized'
			});
		}
		try {
			const token = await emailVerificationToken.issue(user.userId);
			const checksum = [...token.toString()].reduce((acc, char) => acc + char.charCodeAt(0), 0);
			const numericToken = checksum % 1000000; // limit to 6 digits
			if (!user.isBrand) {
				await sendEmailVerificationEmail(user.email, numericToken.toString());
			} else {
				await sendEmailVerificationEmailBrand(user.email, token.toString());
			}
		} catch (e) {
			console.log(e);
			return fail(500, {
				message: 'An unknown error occurred'
			});
		}
	}
};
