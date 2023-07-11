import { redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { auth } from '$lib/lucia';
import { prismaClient } from '$lib/db';

export const load: PageServerLoad = async ({ locals }) => {
	const { user } = await locals.auth.validateUser();

	if (!user) {
		throw redirect(302, '/login');
	}
	if (user.isAdmin) {
		throw redirect(302, '/approve-users');
	}
	if (!user.emailVerified) {
		throw redirect(302, '/email-verification');
	}

	//only run this if the user is logged in and not the admin
	const objects = await prismaClient.object.findMany();

	for (const object of objects) {
		object.created = shortDate(object.created);
	}

	if (!user.adminVerified) {
		return {
			msg: 'still waiting on approval',
			user,
			objects
		};
	}
	return {
		msg: 'fully authenticated',
		user,
		objects
	};
};

function shortDate(date) {
	//takes ISO date format and returns yyyy-mm-dd
	if (!date) {
		return null;
	}
	date = new Date(date);
	let day = date.getDate();
	let month = date.getMonth() + 1; // January = 0 because JS is weird
	const year = date.getFullYear();
	if (day < 10) day = '0' + day;
	if (month < 10) month = '0' + month;
	return year + '-' + month + '-' + day;
}

export const actions: Actions = {
	default: async ({ locals }) => {
		const session = await locals.auth.validate();
		if (!session) return null;
		await auth.invalidateSession(session.sessionId);
		locals.auth.setSession(null);
	}
};
