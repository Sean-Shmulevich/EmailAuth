import { prismaClient } from '$lib/db';
import { fail, redirect } from '@sveltejs/kit';
import { auth } from '$lib/lucia';
import { sendEmail } from '$lib/email';

export const load = async ({ url, route, params, locals }) => {
	const { user } = await locals.auth.validateUser();
	const dealId = params.deal;
	const sportPref = url.searchParams.get('sportPref');

	let matchingProfiles;
	matchingProfiles = await prismaClient.$queryRaw`
    SELECT *
    FROM "profile"
    WHERE "sport" = ${sportPref}
    ORDER BY RANDOM()
    LIMIT 2;`;
	if (!matchingProfiles || matchingProfiles.length === 0) {
		matchingProfiles = await prismaClient.$queryRaw`
	  SELECT *
	  FROM "profile"
	  ORDER BY RANDOM()
	  LIMIT 2;
	`;
	}
	if (!user || !user.isBrand || !user.emailVerified || !user.adminVerified) {
		throw redirect(302, '/');
	}
	return { matchingProfiles };
};

export const actions = {
	pickUser: async ({ params, request, locals }) => {
		const { user } = await locals.auth.validateUser();
		const data = await request.formData();
		const userToApprove = data.get('userId')?.toString();
		const userEmail = data.get('user-email')?.toString();
		const paramDealId = params.deal;
		// console.log(params, body, locals);
		if (!user || user.isBrand === false) {
			throw redirect(302, '/');
		}
		const deal = await prismaClient.deal.findUnique({
			where: { id: paramDealId }
		});
		const dealStatus = await prismaClient.userDealStatus.update({
			where: {
				userId_dealId: {
					dealId: paramDealId,
					userId: userToApprove
				}
			},
			data: {
				status: 'brand-accepted'
			}
		});
		sendEmail(
			userEmail,
			'A brand is interested in working with you!',
			`Deal info title: ${deal.title} \n Description: ${deal.shortDescription}`
		);
		if (!dealStatus) {
			throw fail(400, { msg: 'User not found' });
		}
		return {
			status: 'ok'
		};
	}
};
