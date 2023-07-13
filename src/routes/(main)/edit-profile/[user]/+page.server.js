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

	return profile;
}

export const load = async ({ params, locals }) => {
	const { user } = await locals.auth.validateUser();

	const objects = await prismaClient.object.findMany({
		where: {
			userId: user.userId
		},
		orderBy: {
			image_number: 'asc'
		}
	});

	const paramUserId = params.user;
	// console.log(user);

	// user.isAdmin===false ||
	//do not allow edit access to anybody except the user whos profile it is.
	if (!user || user.userId !== paramUserId) {
		throw redirect(302, '/');
	}
	//should users be able to see other peoples profiles or should it just be buisnesses and the admin?
	//well if I dont directly link to the users it will be fine how it is now but I still need to query the information

	const currUserProfile = await getUserProfile(paramUserId);
	return {
		currUserProfile,
		objects
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
		let name = formData.get('name');
		let sport = formData.get('sport');
		let college = formData.get('college');
		let year = formData.get('year');
		let bio = formData.get('bio');

		console.log(formData);
		// If user does not exist, throw an error
		//TODO change this to sveltekit fail
		if (!user) throw new Error('User not found');

		let missingFields = [];
		if (!name) missingFields.push('name');
		if (!sport) missingFields.push('sport');
		if (!college) missingFields.push('college');
		if (!year) missingFields.push('year');
		if (!bio) missingFields.push('bio');

		if (missingFields.length) {
			return {
				message: `Please fill out the following fields: ${missingFields.join(', ')}`,
				user: { name, sport, college, year, bio }
			};
		}

		// If user exists, create a profile
		const profile = await prismaClient.profile.upsert({
			where: { user_id: userId },
			create: {
				name: name,
				sport: sport,
				college: college,
				year: year,
				bio: bio,
				user_id: userId
			},
			update: {
				name: name,
				sport: sport,
				college: college,
				year: year,
				bio: bio
			}
		});

		return {
			message: 'Profile updated successfully',
			user: { name, sport, college, year, bio }
		};
	},
	logout: async ({ locals }) => {
		const session = await locals.auth.validate();
		if (!session) return null;
		await auth.invalidateSession(session.sessionId);
		locals.auth.setSession(null);
	}
};
