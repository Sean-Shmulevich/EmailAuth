import { auth, emailVerificationToken } from '$lib/lucia';
import { redirect, fail } from '@sveltejs/kit';

import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ params, locals }) => {
	const tokenParams = params.token;
	console.log(params, locals);

	try {
		const token = await emailVerificationToken.validate(tokenParams);
		await auth.invalidateAllUserSessions(token.userId);
		await auth.updateUserAttributes(token.userId, {
			email_verified: true
		});
		const session = await auth.createSession(token.userId);
		locals.auth.setSession(session);
	} catch (e) {
		console.log(e);
		// return fail(500, { msg: 'Unable to authenticate' });
	}
	throw redirect(302, '/');
};
