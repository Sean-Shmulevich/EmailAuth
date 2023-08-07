import { json } from '@sveltejs/kit';

import { prismaClient } from '$lib/db';
import { auth } from '$lib/lucia';
import { error } from '@sveltejs/kit';

export async function GET({ locals }) {
	const { user } = await locals.auth.validateUser();

	const nextDeals = await prismaClient.deal.findMany({
		take: 5,
		where: {
			active: 'active',
			NOT: {
				userDealStatus: {
					some: {
						userId: user.userId
					}
				}
			}
		},
		include: {
			dealImages: true
		}
	});

	return json(nextDeals);
}

export async function POST({ request, locals }) {
	const { user } = await locals.auth.validateUser();
	//set 5 userDealStatus objects for the current user
	let userSwipeData = await request.json();
	// console.log(await request.json());
	for (let i = 0; i < userSwipeData.length; i++) {
		await prismaClient.userDealStatus.create({
			data: {
				userId: user.userId,
				dealId: userSwipeData[i].dealId,
				status: userSwipeData[i].decision
			}
		});
	}

	//TODO: what if it is less then 5
	// const nextDeals = await prismaClient.deal.findMany({
	// 	take: 5,
	// 	where: {
	// 		active: 'active',
	// 		NOT: {
	// 			userDealStatus: {
	// 				some: {
	// 					userId: user.userId
	// 				}
	// 			}
	// 		}
	// 	}
	// });

	// if (!nextDeals || nextDeals.length === 0) {
	// 	return json('no deals found');
	// }
	return json('suceess');
}
