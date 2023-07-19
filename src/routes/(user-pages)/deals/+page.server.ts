import { getEmails } from '$lib/email';
import { prismaClient } from '$lib/db';
import { Prisma } from '@prisma/client';
import type { Actions, PageServerLoad } from './$types';
import { auth } from '$lib/lucia';
import { redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ locals, url }) => {
	const { user } = await locals.auth.validateUser();
	
	console.log(user);
	if(!user || !user.emailVerified || !user.adminVerified || user.isBrand ){
		throw redirect(302, '/');
		// return {msg: 'not authenticated', user: null};
	}
	const deal = await prismaClient.deal.create({
		data: {
			title: 'title1',
			description: 'description1',
			sportPreference: 'Basketball',
			genderPreference: 'Male',
			shortDescription: 'shortDescription1',
			location: 'location1',
			inPersonOrVirtual: 'Virtual',
			dateTime: '2023-07-20T14:48:00.000Z', // an example date time
			duration: '1 hour',
			mainGoal: 'Promotion',
			estimatedPayment: '100$',
			recommendedDeliverables: {
				set: ['deliverable1', 'deliverable2'] // an array of recommended deliverables
			},
			athleteCount: 1,
			singleOrMultiple: 'Single',
			publishDate: new Date(),
			authUserId: user.userId, // the user id
			isCampaign: false
		}
	});

	const nextDeals = await prismaClient.deal.findMany({
		take: 5,
		where: {
			NOT: {
				userDealStatus: {
					some: {
						userId: user.userId
					}
				}
			}
		}
	});

	// const userDealStatus = await prismaClient.userDealStatus.create({
	// 	data: {
	// 		userId: user.userId,
	// 		dealId: deal.id,
	// 		status: 'Pending'
	// 	}
	// });

	console.log(deal.id);
	// const nextDeals = await prismaClient.deal.findMany({take: 5});
	return {nextDeals};
};


export const actions: Actions = {
	logout: async ({ locals }) => {
		const session = await locals.auth.validate();
		if (!session) return null;
		await auth.invalidateSession(session.sessionId);
		locals.auth.setSession(null);
	}
};
