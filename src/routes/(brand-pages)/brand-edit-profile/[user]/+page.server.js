//TODO actions return fail maybe
//take a list of all users that tried to sign up and display a button on the ui to update it on the database.
import { prismaClient } from '$lib/db';
import { Prisma } from '@prisma/client';
import { fail, redirect } from '@sveltejs/kit';
import { auth } from '$lib/lucia';
import { sendEmail } from '$lib/email';

// get a profile by of a specific user by their userID
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

// load images assicated with a specific user by the user id of the current page user
// load them in ascending order
export const load = async ({ params, locals }) => {
	//current app user
	const { user } = await locals.auth.validateUser();

	//the id of the user in the search route
	//chat gpt told me that userID should be both unique and non sensitive
	const paramUserId = params.user;
	// console.log(user);

	// user.isAdmin===false ||
	//throw redirect if there is no user or if the user is not the same as the user in the url/search route
	// console.log(user);
	if (!user || user.userId !== paramUserId || !user.emailVerified) {
		throw redirect(302, '/');
	}

	//load in user objects
	const objects = await prismaClient.object.findMany({
		where: {
			userId: user.userId
		},
		orderBy: {
			image_number: 'asc'
		}
	});

	//get user profile
	//i could use either paramUserId or user.userId because
	//the 'if statement' above makes sure that they are the same
	const currUserProfile = await getUserProfile(paramUserId);

	// console.log(currUserProfile,objects);

	//objects is an empty array if there is nothing in it
	return {
		currUserProfile: currUserProfile || null,
		objects: objects
	};
};

// const authUser = await prismaClient.authUser.findUnique({
//     where: {
//       email: email,
//     },
// });
export const actions = {
	// default: async ({ request, locals }) => {

	// }
	update: async ({ request, locals }) => {
		const { user } = await locals.auth.validateUser();

		let userId = user.userId;
		const formData = await request.formData();
		let size = formData.get('size')?.toString();
		let bio = formData.get('bio')?.toString();
		let goals = formData.get('goals')?.toString();

		let socialMediaLinks = formData.get('social-media')?.toString();

		// console.log(socialLinks);
		// If user does not exist, throw an error
		//TODO change this to sveltekit fail
		if (!user) throw new Error('User not found');

		let missingFields = [];
		if (!size) missingFields.push('size');
		// if (!sport) missingFields.push('');
		if (!bio) missingFields.push('bio');
		if (!goals) missingFields.push('goals');
		if (!socialMediaLinks) missingFields.push('add at least one social media link');

		if (missingFields.length) {
			return {
				message: `Please fill out the following fields: ${missingFields.join(', ')}`,
				user: { size, bio, goals }
			};
		}

		// If user exists, create a profile
		const profile = await prismaClient.brandProfile.update({
			where: { user_id: userId },
			data: {
				size: size,
				bio: bio,
				goals: goals,
				user_id: userId,
				socialMediaLinks: JSON.parse(socialMediaLinks)
			}
		});

		// I mean i could just return the profile
		return {
			message: 'Profile updated successfully',
			user: { size, bio, goals }
		};
	},
	logout: async ({ locals }) => {
		const session = await locals.auth.validate();
		if (!session) return null;
		await auth.invalidateSession(session.sessionId);
		locals.auth.setSession(null);
	}
};
