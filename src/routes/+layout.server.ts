import type { PageServerLoad } from './$types';


export const load: PageServerLoad = async ({ locals }) => {
	const { user } = await locals.auth.validateUser();

	//if there is no user return nothing to the frontend
	//if there is a user that is email verified but not admin verified return the user the menu will allow uers to edit profile and logout only
	//if there is a user that is email verified and admin verified return the user the menu will allow users to edit profile, logout, and view deals, and past offers
	if (!user || !user.emailVerified) {
		return { msg: 'not authenticated', user: null };
	}
	if (!user.adminVerified) {
		//if the code execution comes here then the user is definitely logged in and email verified but not admin verified
		return {
			msg: 'email authenticated',
			// !!! returning user might be dangerous
			user
		};
	}
	return {
		msg: 'fully authenticated',
		user
	};
};

// export const actions: Actions = {
// 	logout: async ({ locals }) => {
// 		const session = await locals.auth.validate();
// 		if (!session) return null;
// 		await auth.invalidateSession(session.sessionId);
// 		locals.auth.setSession(null);
// 	}
// };
