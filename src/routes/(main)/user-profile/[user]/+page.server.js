// @ts-nocheck
//take a list of all users that tried to sign up and display a button on the ui to update it on the database.
import { prismaClient } from '$lib/db';
import { Prisma } from '@prisma/client';
import { fail, redirect } from '@sveltejs/kit';
import { auth } from '$lib/lucia';
import { sendEmail } from '$lib/email';

async function getUserProfile(userId) {
	const profile = await prismaClient.profile.findUnique({
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
	if (!user) {
		throw redirect(302, '/');
	}

	const objects = await prismaClient.object.findMany({
		where: {
			userId: paramUserId
		},
		orderBy: {
			image_number: 'asc'
		}
	});
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

// const authUser = await prismaClient.authUser.findUnique({
//     where: {
//       email: email,
//     },
// });
