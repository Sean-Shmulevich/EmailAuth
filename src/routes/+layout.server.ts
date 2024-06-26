import type { PageServerLoad } from './$types';
import { prismaClient } from '$lib/db';

export const load: PageServerLoad = async ({ locals, url }) => {
	const { user } = await locals.auth.validateUser();
	//default profile picture
	let profilePicture = `https://slimecars.com/assets/dapupprofile.png`;

	//if there is no user return nothing to the frontend
	//if there is a user that is email verified but not admin verified return the user the menu will allow uers to edit profile and logout only
	//if there is a user that is email verified and admin verified return the user the menu will allow users to edit profile, logout, and view deals, and past offers
	if (!user || !user.emailVerified) {
		return { msg: 'not authenticated', user: null };
	}
	const profilePictureData = await prismaClient.object.findFirst({
		where: {
			userId: user.userId,
			image_number: 0
		}
	});
	if (profilePictureData && profilePictureData.id) {
		profilePicture = `/api/s3object/${profilePictureData.id}`;
	}
	if (!user.adminVerified) {
		//if the code execution comes here then the user is definitely logged in and email verified but not admin verified
		return {
			msg: 'email authenticated',
			profilePicture,
			// !!! returning user might be dangerous
			user
		};
	}
	return {
		msg: 'fully authenticated',
		profilePicture,
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
