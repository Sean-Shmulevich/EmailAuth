import { prismaClient } from '$lib/db';
import { fail, redirect } from '@sveltejs/kit';
import { auth } from '$lib/lucia';

export const load = async ({ params, locals }) => {
	const { user } = await locals.auth.validateUser();

	if (!user || !user.isBrand || !user.emailVerified || !user.adminVerified) {
		throw redirect(302, '/');
	}
	const publishedDeals = await prismaClient.deal.findMany({
		where: {
			authUserId: user.userId,
			active: 'active'
		},
		include: {
			dealImages: true
		},
		orderBy: {
			publishDate: 'desc'
		}
	});
	const unpublishedDeals = await prismaClient.deal.findMany({
		where: {
			authUserId: user.userId,
			active: 'pending'
		},
		include: {
			dealImages: true
		},
		orderBy: {
			publishDate: 'desc'
		}
	});
	const completedDeals = await prismaClient.deal.findMany({
		where: {
			authUserId: user.userId,
			active: 'completed'
		},
		include: {
			dealImages: true
		},
		orderBy: {
			publishDate: 'desc'
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
		// console.log('object');
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
	},
	endDeal: async ({ request, params, locals }) => {
		//TODO security  check
		const { user } = await locals.auth.validateUser();
		const form = await request.formData();
		const dealId = form.get('deal-id')?.toString() ?? '';
		const updatedDeal = await prismaClient.deal.update({
			where: {
				id: dealId // replace dealId with the specific ID of the deal you want to update
			},
			data: {
				active: 'completed' // replace "newStatus" with the desired status value
			}
		});
		return {
			showModalComplete: false
		};
	},
	logout: async ({ locals }) => {
		const session = await locals.auth.validate();
		if (!session) return null;
		await auth.invalidateSession(session.sessionId);
		locals.auth.setSession(null);
	}
};
