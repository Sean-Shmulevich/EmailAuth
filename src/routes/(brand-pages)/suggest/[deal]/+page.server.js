import { prismaClient } from '$lib/db';
import { fail, redirect } from '@sveltejs/kit';
import { auth } from '$lib/lucia';

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
    LIMIT 2;
  	`;
	if (!matchingProfiles || matchingProfiles.length === 0) {
		matchingProfiles = await prismaClient.$queryRaw`
	  SELECT *
	  FROM "profile"
	  ORDER BY RANDOM()
	  LIMIT 2;
	`;
	}
	console.log(params.deal);
	if (!user || !user.isBrand || !user.emailVerified || !user.adminVerified) {
		throw redirect(302, '/');
	}
	return { matchingProfiles };
};
