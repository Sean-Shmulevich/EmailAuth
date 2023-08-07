//take a list of all users that tried to sign up and display a button on the ui to update it on the database.
import { prismaClient } from '$lib/db';
import { Prisma } from '@prisma/client';
import { fail, redirect } from '@sveltejs/kit';
import { auth } from '$lib/lucia';
import { sendEmail } from '$lib/email';

async function getAllBrands() {
	const brands = await prismaClient.authUser.findMany({
		where: {
			is_admin: false,
			is_brand: true,
			email_verified: true,
			admin_verified: false
		}
	});

	return brands;
}

async function getApprovedBrands() {
	const users = await prismaClient.authUser.findMany({
		where: {
			is_admin: false,
			is_brand: false,
			email_verified: true,
			admin_verified: true
		}
	});

	return users;
}

export const load = async ({ locals }) => {
	const { user } = await locals.auth.validateUser();

	if (!user || !user.isAdmin) {
		throw redirect(302, '/');
	}

	const allBrands = await getAllBrands();
	const approvedBrands = getApprovedBrands();
	return {
		allBrands,
		approvedBrands
	};
};

async function verifyUser(email, rootUrl) {
	const updatedUser = await prismaClient.authUser.update({
		where: {
			email: email
		},
		data: {
			admin_verified: true
		}
	});
	//I think this is impossible to happen but safe
	// if (!updatedUser) {
	// return fail(400, { 'user not found': email });
	// }
	sendEmail(
		email,
		rootUrl,
		'Congratulations! Your DapUp Account is Verified and Approved!',

		`
		We are thrilled to inform you that your DapUp account has been successfully verified and approved!
		<br/><br/>
		Welcome to the DapUp community, where college athletes and brands create winning partnerships.
		<br/><br/>
		As you log on to DapUp, prepare to discover example offerings from potential local companies, 
		even those not on our platform yet. We encourage you to explore these survey offers and swipe on them to help us 
		fine-tune your future feeds with more accurate and personalized content. 
		<br/>
		Your active participation will shape a tailored and rewarding experience for you on DapUp! 
		<br/><br/>

 
		You can now launch NIL deals, connect with athletes, and DapUp Your Game! 
		<br/><br/>
		Best regards,<br/>
		DapUp Team`
	);
	return updatedUser;
}

// const authUser = await prismaClient.authUser.findUnique({
//     where: {
//       email: email,
//     },
// });
export const actions = {
	verify: async ({ request, locals, url }) => {
		//TODO verify user post request here
		const formData = await request.formData();
		const email = formData.get('email')?.toString() ?? '';
		if (email === null /* ||    !emailRegex.test(email) */) {
			console.log('email is null or not valid');
		}
		try {
			verifyUser(email, url.origin);
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
