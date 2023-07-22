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

export const actions = {
	deleteDeal: async ({ request, params, locals }) => {
		const { user } = await locals.auth.validateUser();
		const form = await request.formData();
		const dealId = form.get('deal-id')?.toString() ?? '';
		console.log('object');
		const deal = await prismaClient.deal.findFirst({
			where: {
				id: dealId,
				authUserId: user.userId
			}
		});
		if (!deal) {
			return fail(500, { message: 'Deal not found' });
		}

		await prismaClient.deal.delete({
			where: {
				id: dealId
			}
		});
		return {
			showModal: false
		};
	}
};
