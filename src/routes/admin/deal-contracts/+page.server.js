import { prismaClient } from '$lib/db';
import { sendEmail } from '$lib/email';
import { fail, redirect } from '@sveltejs/kit';
import { auth } from '$lib/lucia';

export const load = async ({ params, locals }) => {
	const { user } = await locals.auth.validateUser();
	if (!user || !user.isAdmin) {
		throw redirect(302, '/');
	}
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
	if (dealsWithContracts.length === 0) {
		return {
			status: 'no active contracts'
		};
	}
	return {
		deal: dealsWithContracts
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
