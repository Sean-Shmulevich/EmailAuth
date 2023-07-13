// @ts-nocheck
//take a list of all users that tried to sign up and display a button on the ui to update it on the database.
import { prismaClient } from '$lib/db';
import { Prisma } from '@prisma/client';
import { fail, redirect } from '@sveltejs/kit';
import { auth } from '$lib/lucia';
import { sendEmail } from '$lib/email';

async function getUser(userId) {
	const user = await prismaClient.authUser.findUnique({
		where: {
			id: userId
		}
	});

	return user;
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
	console.log(user);

	// user.isAdmin===false ||
	//do not allow edit access to anybody except the user whos profile it is.
	if (!user || user.userId !== paramUserId) {
		throw redirect(302, '/');
	}
	//should users be able to see other peoples profiles or should it just be buisnesses and the admin?
	//well if I dont directly link to the users it will be fine how it is now but I still need to query the information

	const currUser = await getUser(paramUserId);
	return {
		currUser,
		objects
	};
};

async function verifyUser(email) {
	const updatedUser = await prismaClient.authUser.update({
		where: {
			email: email
		},
		data: {
			admin_verified: true
		}
	});
	sendEmail(
		email,
		'Your account has been verified',
		'Your account has been verified by the admin. You can now login to your account.'
	);
	return updatedUser;
}

// const authUser = await prismaClient.authUser.findUnique({
//     where: {
//       email: email,
//     },
// });
export const actions = {
	verify: async ({ request, locals }) => {
		const formData = await request.formData();
		const email = formData.get('email')?.toString() ?? '';
		if (email === null /* ||    !emailRegex.test(email) */) {
			console.log('email is null or not valid');
		}
		try {
			verifyUser(email);
			//edit user
			// await sendEmailVerificationEmail(user.email, token.toString());
		} catch (e) {
			if (e instanceof Prisma.PrismaClientKnownRequestError && e.code === 'P2002') {
				return fail(400, {
					message: 'Email is already taken',
					email
				});
			}
			return fail(500, {
				message: 'An unknown error occurred',
				email
			});
		}
	},
	logout: async ({ locals }) => {
		const session = await locals.auth.validate();
		if (!session) return null;
		await auth.invalidateSession(session.sessionId);
		locals.auth.setSession(null);
	}
};
