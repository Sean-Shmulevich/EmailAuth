import { redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { auth } from '$lib/lucia';
import { prismaClient } from '$lib/db';

export const load: PageServerLoad = async ({ locals }) => {
	const { user } = await locals.auth.validateUser();

	//if there is no user return nothing to the frontend
	//if there is a user that is email verified but not admin verified return the user the menu will allow uers to edit profile and logout only
	//if there is a user that is email verified and admin verified return the user the menu will allow users to edit profile, logout, and view deals, and past offers
	if (!user) {
		return { msg: 'not authenticated', user: null };
	}
	if (user.isAdmin) {
		throw redirect(302, '/admin/approve-users');
	}

	//if the user is here it means they tried to create an account but their are not emailVerified yet and they cant do anything
	if (!user.emailVerified) {
		throw redirect(302, '/email-verification');
	}

	//only run this if the user is logged in and not the admin
	// for (const object of objects) {
	// 	object.created = shortDate(object.created);
	// }

	if (!user.adminVerified) {
		//if the code execution comes here then the user is definitely logged in and email verified but not admin verified
		return {
			msg: 'email authenticated',
			user
		};
	}
	return {
		msg: 'fully authenticated',
		user
	};
};

export const actions: Actions = {
	logout: async ({ locals }) => {
		const session = await locals.auth.validate();
		if (!session) return null;
		await auth.invalidateSession(session.sessionId);
		locals.auth.setSession(null);
	}
};
