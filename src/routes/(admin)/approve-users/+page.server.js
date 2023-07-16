//take a list of all users that tried to sign up and display a button on the ui to update it on the database.
import { prismaClient } from '$lib/db';
import { Prisma } from '@prisma/client';
import { fail, redirect } from '@sveltejs/kit';
import { auth } from '$lib/lucia';
import { sendEmail } from '$lib/email';

async function getAllUsers() {
	const users = await prismaClient.authUser.findMany({
		where: {
			is_admin: false, 
            is_brand: false,
			email_verified: true,
			admin_verified: false
		}
	});

	return users;
}

export const load = async ({ locals }) => {
	const { user } = await locals.auth.validateUser();

	if (!user || !user.isAdmin) {
		throw redirect(302, '/');
	}

	const allUsers = getAllUsers();
	return {
		allUsers
	};
};

async function verifyUser(email) {
	const updatedUser = await prismaClient.authUser.update({
		where: {
			email: email,
		},
		data: {
			admin_verified: true
		}
	});
	//I think this is impossible to happen but safe
	if (!updatedUser) {
		return fail(400, { 'user not found': email });
	}
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
