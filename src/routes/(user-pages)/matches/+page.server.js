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
	const ongoingDealStatus = await prismaClient.userDealStatus.findMany({
		where: {
			userId: user.userId,
			status: 'user-accepted'
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
	const ongoingDealProfiles = ongoingDealStatus.map((status) => status.deal);
	const completedDealProfiles = completedDealStatus.map((status) => status.deal);
	return { newDealProfiles, ongoingDealProfiles, completedDealProfiles };
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
		const dealStatus = await prismaClient.userDealStatus.update({
			where: {
				userId_dealId: {
					dealId: dealId,
					userId: user.userId
				}
			},
			data: {
				status: 'user-accepted'
			}
		});
		// sendEmail(
		// 	userEmail,
		// 	'A brand is interested in working with you!',
		// 	`Deal info title: ${deal.title} \n Description: ${deal.shortDescription}`
		// );
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
