import { prismaClient } from '$lib/db';
import { fail, redirect } from '@sveltejs/kit';

export const load = async ({ params, locals }) => {
	const { user } = await locals.auth.validateUser();

	if (!user || !user.isBrand || !user.emailVerified || !user.adminVerified) {
		throw redirect(302, '/');
	}
	const publishedDeals = await prismaClient.deal.findMany({
		where: {
			authUserId: user.userId,
			active: 'active'
		}
	});
	const unpublishedDeals = await prismaClient.deal.findMany({
		where: {
			authUserId: user.userId,
			active: 'pending'
		}
	});
	const completedDeals = await prismaClient.deal.findMany({
		where: {
			authUserId: user.userId,
			active: 'completed'
		}
	});
	return {
		publishedDeals,
		unpublishedDeals,
		completedDeals
	};
};
