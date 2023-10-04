import { auth } from '$lib/lucia';
import { error, type Handle, type HandleFetch } from '@sveltejs/kit';
import middleware from './middleware';


export const handle: Handle = async ({ event, resolve }) => {
	event.locals.auth = auth.handleRequest(event);
	const checkRate = await middleware(event.request);
	const response = await resolve(event);

	if (checkRate === "rate-exceeded") {

		throw error(
			429,
			`Too many requests. Please try again in ${5} seconds.`
		);
	}


	return response;
};
