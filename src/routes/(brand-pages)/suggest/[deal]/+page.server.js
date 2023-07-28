import { prismaClient } from '$lib/db';
import { fail, redirect } from '@sveltejs/kit';
import { auth } from '$lib/lucia';
import { sendEmail } from '$lib/email';

export const load = async ({ url, route, params, locals }) => {
	const { user } = await locals.auth.validateUser();
	const dealId = params.deal;
	const sportPref = url.searchParams.get('sportPref');

	let matchingProfiles;
	if (!user || !user.isBrand || !user.emailVerified || !user.adminVerified) {
		throw redirect(302, '/');
	}
	matchingProfiles = await prismaClient.$queryRaw`
    SELECT *
    FROM "profile"
    WHERE "sport" = ${sportPref}
    ORDER BY RANDOM()
    LIMIT 2;`;
	if (matchingProfiles.length === 0) {
		matchingProfiles = await prismaClient.$queryRaw`
			SELECT *
			FROM "profile"
			ORDER BY RANDOM()
			LIMIT 2;
		`;
	}
	let images = [];
	let names = [];
	for (let i = 0; matchingProfiles && i < matchingProfiles.length; i++) {
		const id = matchingProfiles[i].user_id;
		const imageList = await prismaClient.authUser.findUnique({
			where: { id: id },
			include: {
				object: true
			}
		});
		images[i] = imageList.object;
		names[i] = imageList.name;
	}
	// console.log('Matching Profiles ' + (await matchingProfiles));
	if (matchingProfiles.length !== 0) {
		return { matchingProfiles, images, names, dealId };
	} else {
		return { dealId };
	}
};

export const actions = {
	pickUser: async ({ params, request, locals }) => {
		const { user } = await locals.auth.validateUser();
		const data = await request.formData();
		const userToApprove = data.get('userId')?.toString();
		const paramDealId = params.deal;
		// console.log(params, body, locals);
		if (!user || user.isBrand === false) {
			throw redirect(302, '/');
		}
		const userToWorkWith = await prismaClient.authUser.findUnique({ where: { id: userToApprove } });
		// console.log(userToWorkWith.email);
		const deal = await prismaClient.deal.findUnique({
			where: { id: paramDealId }
		});
		const dealStatus = await prismaClient.userDealStatus.upsert({
			where: {
				userId_dealId: {
					dealId: paramDealId,
					userId: userToApprove
				}
			},
			create: {
				userId: userToApprove,
				dealId: paramDealId,
				status: 'brand-accepted'
			},
			update: {
				status: 'brand-accepted'
			}
		});
		sendEmail(
			userToWorkWith.email,
			'A brand is interested in working with you!',
			`Deal info title: ${deal.title} \n Description: ${deal.shortDescription}`
		);
		if (!dealStatus) {
			throw fail(400, { msg: 'User not found' });
		}
		throw redirect(302, '/creation-center');
	}
};
