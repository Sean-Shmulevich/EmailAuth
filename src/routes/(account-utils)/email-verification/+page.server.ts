import { sendEmailVerificationEmail, sendEmailVerificationEmailBrand } from '$lib/email';
import { emailVerificationToken } from '$lib/lucia';
import { fail, redirect } from '@sveltejs/kit';
import { post } from '$lib/text';

import type { Actions, PageServerLoad } from './$types';

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
			//TODO dont allow a ton of requests in a row here.
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
	},
	sendText: async ({ locals, url, request }) => {
		const { user } = await locals.auth.validateUser();

		const phoneNumber = await (await request.formData()).get('phone');
		const timeStamp = await (await request.formData()).get('lastSentText');
		console.log(phoneNumber);

		if (!phoneNumber) {
			return fail(401, {
				textSent: 'Please input a valid phone number'
			});
		}
		if (!user || user.emailVerified) {
			return fail(401, {
				message: 'Unauthorized'
			});
		}
		try {
			const token = await emailVerificationToken.issue(user.userId);
			//TODO dont allow a ton of requests in a row here.
			if (!user.isBrand) {
				await post('+1' + phoneNumber, token);
				return {
					textSent: 'Text Sent please wait upto a minute'
				};
			} else {
				await post('+1' + phoneNumber, token);
				return {
					textSent: 'Text Sent please wait upto a minute'
				};
			}
		} catch (e) {
			console.log(e);
			return fail(500, {
				message: 'An unknown error occurred'
			});
		}
	}
};
