import { redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { auth } from '$lib/lucia';
import { prismaClient } from '$lib/db';
import { sendEmail } from '$lib/email';

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
// (emailAddress: string, subject: string, content: string)
export const actions: Actions = {
	logout: async ({ locals, url }) => {
		const session = await locals.auth.validate();
		if (!session) return null;
		await auth.invalidateSession(session.sessionId);
		locals.auth.setSession(null);
	},
	contactForm: async ({ request, url }) => {
		const formData = await request.formData();
		console.log(JSON.stringify(formData));
		const email = (formData.get('email')?.toString() ?? '').toLowerCase();
		const subject = formData.get('subject')?.toString() ?? '';
		const message = formData.get('message')?.toString() ?? '';
		//TODO change this email to support@dapup.co
		sendEmail('info@dapup.co', url.origin, `Request from ${email}, Subject: ${subject}`, message);
	}
};
