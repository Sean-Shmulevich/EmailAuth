import { prismaClient } from '$lib/db';
import { fail, redirect } from '@sveltejs/kit';
import { auth } from '$lib/lucia';

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
	const deal = await prismaClient.deal.findUnique({
		where: { id: paramDealId }
	});
	const userDeals = await prismaClient.userDealStatus.findMany({
		where: {
			dealId: paramDealId,
			status: 'pending'
		}
	});
	const dealImage = await prismaClient.dealImages.findFirst({
		where: {
			dealId: paramDealId
		}
	});
	return {
		deal,
		userDeals,
		dealImage
	};
};

export const actions = {
	logout: async ({ locals }) => {
		const session = await locals.auth.validate();
		if (!session) return null;
		await auth.invalidateSession(session.sessionId);
		locals.auth.setSession(null);
	}
};
