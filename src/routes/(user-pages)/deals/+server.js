import { json } from '@sveltejs/kit';

import { prismaClient } from '$lib/db';
import { auth } from '$lib/lucia';
import { error } from '@sveltejs/kit';

export async function GET({ locals }) {
	const { user } = await locals.auth.validateUser();

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

	if (!nextDeals) {
		return json('no deals found');
	}
	return json('hello world');
}

export async function POST({ request, locals }) {
	const { user } = await locals.auth.validateUser();
	//set 5 userDealStatus objects for the current user

	const nextDeals = await prismaClient.deal.findMany({
		take: 5,

	});

	if (!nextDeals) {
		return json('no deals found');
	}
	return json(nextDeals);
}
