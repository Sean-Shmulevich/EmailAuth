import { sendEmailVerificationEmail, sendEmailVerificationEmailBrand } from '$lib/email';
import { emailVerificationToken } from '$lib/lucia';
import { fail, redirect } from '@sveltejs/kit';

import type { Actions, PageServerLoad } from './$types';
import { ElasticBeanstalk } from 'aws-sdk';
import { createHash } from 'crypto';

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
	sendEmail: async ({ locals, url }) => {
		const { user } = await locals.auth.validateUser();
		if (!user || user.emailVerified) {
			return fail(401, {
				message: 'Unauthorized'
			});
		}
		try {
			const token = await emailVerificationToken.issue(user.userId);
			const hash = createHash('md5').update(token.toString()).digest('hex');
			const bigNumber = parseInt(hash, 16);
			const numericToken = bigNumber % 1000000;
			console.log(numericToken);
			if (!user.isBrand) {
				await sendEmailVerificationEmail(user.email, token.toString(), url.origin);
			} else {
				await sendEmailVerificationEmailBrand(user.email, token.toString(), url.origin);
			}
		} catch (e) {
			console.log(e);
			return fail(500, {
				message: 'An unknown error occurred'
			});
		}
	}
};
