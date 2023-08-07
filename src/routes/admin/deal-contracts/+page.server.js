import { prismaClient } from '$lib/db';
import { sendEmail } from '$lib/email';
import { fail, redirect } from '@sveltejs/kit';
import { auth } from '$lib/lucia';

export const load = async ({ params, locals }) => {
	const dealsWithContracts = await prismaClient.deal.findMany({
		where: {
			userDealStatus: {
				some: {
					contractId: {
						not: null
					}
				}
			}
		},
		include: {
			dealImages: true,
			authUser: true,
			userDealStatus: {
				include: {
					contract: true,
					user: {
						include: {
							profile: true
						}
					}
				}
			}
		}
	});
	console.log('helloooo', dealsWithContracts);
	if (dealsWithContracts.length === 0) {
		return {
			status: 'no active contracts'
		};
	}
	return {
		deal: dealsWithContracts
	};
};
