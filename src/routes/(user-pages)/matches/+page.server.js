import { auth } from '$lib/lucia';
import { prismaClient } from '$lib/db';
import { fail, redirect } from '@sveltejs/kit';

export const load = async ({ locals }) => {
	const { user } = await locals.auth.validateUser();
	if (!user || !user.emailVerified || !user.adminVerified || user.isBrand) {
		throw redirect(302, '/');
	}
	//TODO PULL IN MORE WITH DIFFERENT STATUS
	const newDealStatus = await prismaClient.userDealStatus.findMany({
		where: {
			userId: user.userId,
			status: 'brand-accepted'
		},
		include: {
			deal: {
				include: {
					dealImages: true,
					authUser: true
				}
			}
		}
	});
	const contractSubmitted = await prismaClient.userDealStatus.findMany({
		where: {
			userId: user.userId,
			status: 'brand-finalized'
		},
		include: {
			deal: {
				include: {
					dealImages: true,
					authUser: true
				}
			}
		}
	});
	const completedDealStatus = await prismaClient.userDealStatus.findMany({
		// TODO should be auth-completed
		where: {
			userId: user.userId,
			status: 'auth-completed'
		},
		include: {
			deal: {
				include: {
					dealImages: true,
					authUser: true
				}
			}
		}
	});
	// console.log(dealStatus);
	const newDealProfiles = newDealStatus.map((status) => status.deal);
	const completedDealProfiles = completedDealStatus.map((status) => status.deal);
	const contractFinalized = contractSubmitted.map((status) => status.deal);
	return {
		newDealProfiles,
		contractFinalized,
		completedDealProfiles,
		userId: user.userId
	};
	// if (dealStatus && dealStatus.length !== 0) {
	// 	const dealProfiles = dealStatus.map((status) => status.deal);

	// 	return { dealProfiles };
	// }
};
export const actions = {
	agree: async ({ params, request, locals }) => {
		const { user } = await locals.auth.validateUser();
		const data = await request.formData();
		// const userEmail = data.get('user-email')?.toString();
		const dealId = data.get('agree-deal')?.toString();
		// console.log(params, body, locals);
		// console.log('here');
		if (!user || user.isBrand || !user.emailVerified || !user.adminVerified) {
			throw redirect(302, '/');
		}
        //TODO: what is the difference between new and ongoing?
        // NEW DEAL - user swiped, and brand wants to work with you.
        // ONGOING DEAL - user has accepted the deal.
            // Waiting for contract
            // Contract approved
            // Ongoing deliverables still
            // Deliverables completed, awaiting payment (admin checks off)
        // COMPLETED DEAL - user has completed the deal, and admin has approved payment has been sent.
	},
	logout: async ({ locals }) => {
		const session = await locals.auth.validate();
		if (!session) return null;
		await auth.invalidateSession(session.sessionId);
		locals.auth.setSession(null);
	}
};
