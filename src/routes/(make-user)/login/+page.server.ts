import { auth } from '$lib/lucia';
import { emailRegex } from '$lib/form-submission';
import { LuciaError } from 'lucia-auth';
import { fail, redirect } from '@sveltejs/kit';

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
	default: async ({ request, locals }) => {
		const formData = await request.formData();
		const email = (formData.get('email')?.toString() ?? '').toLowerCase();

		const user = await prismaClient.authUser.findUnique({
			where: {
				email: email
			}
		});
		if (!user || user.is_brand || user.is_admin) {
			return fail(400, {
				message: 'wrong login try another one',
				email
			});
		}

		if (email === null || !emailRegex.test(email)) {
			return fail(400, {
				message: 'Incorrect email or password',
				email
			});
		}
		const password = formData.get('password');
		if (password instanceof File || password === null) {
			return fail(400, {
				message: 'Incorrect email or password',
				email
			});
		}
		try {
			const key = await auth.useKey('email', email, password);
			const session = await auth.createSession(key.userId);
			locals.auth.setSession(session);
		} catch (e) {
			if (e instanceof LuciaError && e.message === 'AUTH_INVALID_KEY_ID') {
				return fail(400, {
					message: 'Incorrect email or password',
					email
				});
			}
			if (e instanceof LuciaError && e.message === 'AUTH_INVALID_PASSWORD') {
				return fail(400, {
					message: 'Incorrect email or password',
					email
				});
			}
			console.log(e);
			return fail(400, {
				message: 'An unknown error occurred',
				email
			});
		}
		throw redirect(302, '/');
	}
};
