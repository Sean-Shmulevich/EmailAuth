import { sendEmailVerificationEmail, sendEmailVerificationEmailBrand } from '$lib/email';
import { auth, emailVerificationToken } from '$lib/lucia';
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
	sendEmail: async ({ request, locals, url }) => {
		const { user } = await locals.auth.validateUser();
		const formData = await request.formData();
		const lock = await formData.get('lock');

		if (lock === 'exist') {
			return fail(401, {
				textSent: 'Please wait 1 minute before resending the text'
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
				await sendEmailVerificationEmail(user.email, token.toString(), url.origin);
			} else {
				await sendEmailVerificationEmailBrand(user.email, token.toString(), url.origin);
			}
			return {
				emailSent: 'Email Sent'
			};
		} catch (e) {
			console.log(e);
			return fail(500, {
				message: 'An unknown error occurred'
			});
		}
	},
	validateCode: async ({ locals, url, request }) => {
		const formData = await request.formData();
		const tokenData = await formData.get('token');
		// console.log(params, locals);
		console.log(tokenData);

		try {
			//Token verify, what does this return ?
			//Does this consume the token?
			const token = await emailVerificationToken.validate(tokenData.toString());
			console.log(token);

			await auth.invalidateAllUserSessions(token.userId);
			await auth.updateUserAttributes(token.userId, {
				email_verified: true
			});
			const session = await auth.createSession(token.userId);
			locals.auth.setSession(session);
		} catch (e) {
			console.log(e);
			return fail(401, { message: 'Invalid Code' });
		}
		// TODO!
		throw redirect(302, '/');
	},
	sendText: async ({ locals, url, request }) => {
		const { user } = await locals.auth.validateUser();

		const formData = await request.formData();
		let phoneNumber = await formData.get('phoneNumber').toString();
		const lock = await formData.get('lock');

		if (phoneNumber === 'undefined' || !phoneNumber) {
			return fail(401, {
				textSent: 'Please input a valid phone number'
			});
		}
		phoneNumber = phoneNumber.replace(/-/g, '');
		console.log(phoneNumber);
		if (lock === 'exist') {
			return fail(401, {
				textSent: 'Please wait 1 minute before resending the text'
			});
		}
		if (!user || user.emailVerified) {
			return fail(401, {
				message: 'Expired session try again'
			});
		}
		try {
			const token = await emailVerificationToken.issue(user.userId);
			//TODO dont allow a ton of requests in a row here.
			if (!user.isBrand) {
				await post('+1' + phoneNumber, token);
				return {
					textSent: 'Text Sent please wait up to a minute'
				};
			} else {
				await post('+1' + phoneNumber, token);
				return {
					textSent: 'Text Sent please wait up to a minute'
				};
			}
		} catch (e) {
			console.log(e);
			return fail(500, {
				message: 'Expired session try again'
			});
		}
	}
};
