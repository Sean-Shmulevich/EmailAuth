import { prismaClient } from '$lib/db';
import { sendEmail } from '$lib/email';
import { fail, redirect } from '@sveltejs/kit';
import { auth } from '$lib/lucia';

let deal;

export const load = async ({ params, locals }) => {
	const { user } = await locals.auth.validateUser();
	const paramDealId = params.deal;
	if (
		!user ||
		user.emailVerified === false ||
		user.adminVerified === false ||
		user.isBrand === false
	) {
		throw redirect(302, '/');
	}
	deal = await prismaClient.deal.findUnique({
		where: { id: paramDealId }
	});
	const interestedUsersData = await prismaClient.userDealStatus.findMany({
		where: {
			dealId: paramDealId,
			status: 'pending'
		},
		include: {
			user: true
		}
	});
	const confirmedUserData = await prismaClient.userDealStatus.findMany({
		where: {
			dealId: paramDealId,
			status: 'brand-accepted'
		},
		include: {
			user: true
		}
	});
	const readyUserData = await prismaClient.userDealStatus.findMany({
		where: {
			dealId: paramDealId,
			status: 'user-accepted'
		},
		include: {
			user: true
		}
	});
	const dealImage = await prismaClient.dealImages.findFirst({
		where: {
			dealId: paramDealId
		}
	});
	const interestedUsers = interestedUsersData.map((userData) => userData.user);
	const confirmedUsers = confirmedUserData.map((userData) => userData.user);
	const readyUsers = readyUserData.map((userData) => userData.user);
	return {
		deal,
		interestedUsers,
		confirmedUsers,
		readyUsers,
		dealImage
	};
};

export const actions = {
	pickUser: async ({ params, request, locals }) => {
		const { user } = await locals.auth.validateUser();
		const data = await request.formData();
		const userToApprove = data.get('userId')?.toString();
		const userEmail = data.get('user-email')?.toString();
		const paramDealId = params.deal;
		// console.log(deal);
		// console.log(params, body, locals);
		if (!user || user.isBrand === false) {
			throw redirect(302, '/');
		}
		const dealStatus = await prismaClient.userDealStatus.update({
			where: {
				userId_dealId: {
					dealId: paramDealId,
					userId: userToApprove
				}
			},
			data: {
				status: 'brand-accepted'
			}
		});
		sendEmail(
			userEmail,
			'A brand is interested in working with you!',
			`Deal info title: ${deal.title} \n Description: ${deal.shortDescription}`
		);
		if (!dealStatus) {
			throw fail(400, { msg: 'User not found' });
		}
		return {
			status: 'ok'
		};
	},
	logout: async ({ locals }) => {
		const session = await locals.auth.validate();
		if (!session) return null;
		await auth.invalidateSession(session.sessionId);
		locals.auth.setSession(null);
	}
};
