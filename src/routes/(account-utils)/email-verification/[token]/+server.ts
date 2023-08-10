import { auth, emailVerificationToken } from '$lib/lucia';
import { redirect, fail } from '@sveltejs/kit';

import type { RequestHandler } from './$types';

//TODO make a head request tha validates but does no consume the token
export const HEAD: RequestHandler = async ({ params, locals }) => {
	const tokenParams = params.token;

	try {
		// Dry-run validate the token without actually consuming it.
		const isValid = await emailVerificationToken.validate(tokenParams);

		if (isValid) {
			return { status: 200 };
		} else {
			return { status: 404 }; // Or any other appropriate error status
		}
	} catch (e) {
		console.log(e);
		return { status: 500 };
	}
};

export const GET: RequestHandler = async ({ params, locals }) => {
	const tokenParams = params.token;
	// console.log(params, locals);

	try {
		//Token verify, what does this return ?
		//Does this consume the token?
		const token = await emailVerificationToken.validate(tokenParams);
		console.log(token);

		await auth.invalidateAllUserSessions(token.userId);
		await auth.updateUserAttributes(token.userId, {
			email_verified: true
		});
		const session = await auth.createSession(token.userId);
		locals.auth.setSession(session);
	} catch (e) {
		console.log(e);
		return fail(500, { msg: 'Unable to authenticate' });
	}
	// TODO!
	throw redirect(302, '/');
};
