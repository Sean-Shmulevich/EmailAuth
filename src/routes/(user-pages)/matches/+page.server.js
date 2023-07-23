import { auth } from '$lib/lucia';
import { prismaClient } from '$lib/db';
import { fail, redirect } from '@sveltejs/kit';

export const load = async ({ locals }) => {
	const { user } = await locals.auth.validateUser();
	if (!user || !user.emailVerified || !user.adminVerified || user.isBrand) {
		throw redirect(302, '/');
	}
	//TODO PULL IN MORE WITH DIFFERENT STATUS
	const dealStatus = await prismaClient.userDealStatus.findMany({
		where: {
			userId: user.userId,
			status: 'brand-accepted'
		},
		include: {
			deal: {
				include: {
					dealImages: true
				}
			}
		}
	});
	// console.log(dealStatus);

	if (dealStatus && dealStatus.length !== 0) {
		const dealProfiles = dealStatus.map((status) => status.deal);

		return { dealProfiles };
	}
};
export const actions = {
	logout: async ({ locals }) => {
		const session = await locals.auth.validate();
		if (!session) return null;
		await auth.invalidateSession(session.sessionId);
		locals.auth.setSession(null);
	}
};
