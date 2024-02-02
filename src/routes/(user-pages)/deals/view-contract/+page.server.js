import { prismaClient } from '$lib/db';
import { fail, redirect } from '@sveltejs/kit';
import { auth } from '$lib/lucia';
// src/hooks.server.ts
import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public';
import { createSupabaseServerClient } from '@supabase/auth-helpers-sveltekit';

// After an action runs, the page will be re-rendered (unless a redirect or an unexpected error occurs), with the action's return value available to the page as the form prop. This means that your page's load functions will run after the action completes.

// Note that handle runs before the action is invoked, and does not rerun before the load functions. This means that if, for example, you use handle to populate event.locals based on a cookie, you must update event.locals when you set or delete the cookie in an action:
export const handle = async ({ event, resolve }) => {
	event.locals.supabase = createSupabaseServerClient({
		supabaseUrl: PUBLIC_SUPABASE_URL,
		supabaseKey: PUBLIC_SUPABASE_ANON_KEY,
		event
	});

	/**
	 * A convenience helper so we can just call await getSession() instead const { data: { session } } = await supabase.auth.getSession()
	 */
	event.locals.getSession = async () => {
		const {
			data: { session }
		} = await event.locals.supabase.auth.getSession();
		return session;
	};

	return resolve(event, {
		filterSerializedResponseHeaders(name) {
			return name === 'content-range';
		}
	});
};
export const load = async ({ params, locals, url }) => {
	const { user } = await locals.auth.validateUser();
	// get userID and deal ID params
	const athleteId = url.searchParams.get('user');
	const dealId = url.searchParams.get('deal');
	// console.log('athleteId', url.searchParams);
	if (!user || !user.emailVerified || !user.adminVerified) {
		throw redirect(302, '/');
	}
	const deal = await prismaClient.deal.findUnique({
		where: {
			id: dealId
		},
		include: {
			authUser: true,
			userDealStatus: {
				where: {
					userId: athleteId
				},
				include: {
					contract: true
				}
			}
		}
	});
	if (!deal) {
		throw redirect(302, '/');
	}
	return {
		deal
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
