import { getEmails } from '$lib/email';
import type { PageServerLoad } from './$types';
import { prismaClient } from '$lib/db';
import { Prisma } from '@prisma/client';

export const load: PageServerLoad = async ({ locals, url }) => {
	const { user } = await locals.auth.validateUser();
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

	const userDealStatus = await prismaClient.userDealStatus.create({
		data: {
			userId: user.userId,
			dealId: deal.id,
			status: 'Pending'
		}
	});

	console.log(deal.id);
};
