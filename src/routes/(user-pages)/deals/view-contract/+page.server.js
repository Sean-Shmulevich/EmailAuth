import { prismaClient } from '$lib/db';
import { fail, redirect } from '@sveltejs/kit';
import { auth } from '$lib/lucia';

export const load = async ({ params, locals, url }) => {
	const { user } = await locals.auth.validateUser();
	// get userID and deal ID params
	const athleteId = url.searchParams.get('user');
	const dealId = url.searchParams.get('deal');
	// console.log('athleteId', url.searchParams);
	if (!user || !user.emailVerified || !user.adminVerified) {
		throw redirect(302, '/');
	}
	const deal = await prismaClient.deal.findUnique({
		where: {
			id: dealId
		},
		include: {
			authUser: true,
			userDealStatus: {
				where: {
					userId: athleteId
				},
				include: {
					contract: true
				}
			}
		}
	});
	if (!deal) {
		throw redirect(302, '/');
	}
	return {
		deal
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
