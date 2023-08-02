//TODO actions return fail maybe
//take a list of all users that tried to sign up and display a button on the ui to update it on the database.
import { prismaClient } from '$lib/db';
import { Prisma } from '@prisma/client';
import { fail, redirect } from '@sveltejs/kit';
import { auth } from '$lib/lucia';
import { sendEmail } from '$lib/email';

// get a profile by of a specific user by their userID
async function getUserProfile(userId) {
	const profile = await prismaClient.profile.findUnique({
		where: {
			user_id: userId
		}
	});

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
		console.log(formData);
		// let college = formData.get('college')?.toString();
		let industries = formData.get('industries')?.toString() ?? '[]';
		let bio = formData.get('bio')?.toString();
		let socialMedia = formData.get('social-media');
		let venmo = formData.get('venmo')?.toString();
		let goal = formData.get('goal')?.toString();

		if (goal && goal === 'custom') {
			goal = formData.get('goal-custom')?.toString();
		}

		// console.log(formData);
		// If user does not exist, throw an error
		//TODO change this to sveltekit fail
		if (!user) throw new Error('User not found');

		let missingFields = [];
		// if (!sport) missingFields.push('sport');
		// if (!college) missingFields.push('college');
		// if (!year) missingFields.push('year');
		if (!venmo) missingFields.push('venmo');
		if (!bio) missingFields.push('bio');
		if (!socialMedia) missingFields.push('Social media');
		// if (!industries) missingFields.push('Industries of interest');
		if (!goal) missingFields.push('goal');

		if (missingFields.length > 0) {
			return {
				message: `Please fill out the following fields: ${missingFields.join(', ')}`
			};
		}

		// If user exists, create a profile

		const profile = await prismaClient.profile.update({
			where: { user_id: userId },
			data: {
				venmo: venmo,
				socialMedia: JSON.parse(socialMedia),
				industries: JSON.parse(industries),
				goal: goal,
				bio: bio
			}
		});

		// I mean i could just return the profile
		return {
			message: 'Profile updated successfully'
		};
	},
	logout: async ({ locals }) => {
		const session = await locals.auth.validate();
		if (!session) return null;
		await auth.invalidateSession(session.sessionId);
		locals.auth.setSession(null);
	}
};
