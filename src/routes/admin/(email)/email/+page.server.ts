import { getEmails } from '$lib/email';
import type { PageServerLoad } from './$types';
import { fail, redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ locals, url }) => {
	const { user } = await locals.auth.validateUser();
	if (user.isAdmin === false) {
		throw redirect(302, '/');
	}
	const emailAddressQuery = url.searchParams.get('q') ?? '';
	const emails = await getEmails(emailAddressQuery);
	return {
		emails,
		emailAddressQuery
	};
};
