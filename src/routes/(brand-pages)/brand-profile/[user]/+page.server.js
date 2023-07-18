//take a list of all users that tried to sign up and display a button on the ui to update it on the database.
import { prismaClient } from '$lib/db';
import { Prisma } from '@prisma/client';
import { fail, redirect } from '@sveltejs/kit';
import { auth } from '$lib/lucia';
import { sendEmail } from '$lib/email';

async function getUserProfile(userId) {
	const profile = await prismaClient.brandProfile.findUnique({
		where: {
			user_id: userId
		}
	});

	if (!profile) {
		return false;
	}

	return profile;
}



export const load = async ({ params, locals }) => {
	const { user } = await locals.auth.validateUser();

	const paramUserId = params.user;

	// console.log(user);

	// user.isAdmin===false ||
	//any users of the app that are logged in can see anybodys profile
	// if a user is not email verified then they should not be able to see any profiles
	// if (!user || !user.emailVerified) {
	// 	throw redirect(302, '/');
	// }

	const objects = await prismaClient.object.findMany({
		where: {
			userId: paramUserId
		},
		orderBy: {
			image_number: 'asc'
		}
	});

	// console.log("objects",objects);
	//should users be able to see other peoples profiles or should it just be buisnesses and the admin?
	//well if I dont directly link to the users it will be fine how it is now but I still need to query the information

	const currUserProfile = await getUserProfile(paramUserId);

	// //the current user is the same as the one
	// if(user.userId === paramUserId)

	//the user profile has not been created yet
	return {
		currUserProfile: currUserProfile || null,
		objects: objects || null
	};
};

export const actions = {
	logout: async ({ locals }) => {
		const session = await locals.auth.validate();
		if (!session) return null;
		await auth.invalidateSession(session.sessionId);
		locals.auth.setSession(null);
		throw redirect(302, '/');
	}
};

