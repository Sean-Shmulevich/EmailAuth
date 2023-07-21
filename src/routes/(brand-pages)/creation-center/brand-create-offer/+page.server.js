import { prismaClient } from '$lib/db';
import { Prisma } from '@prisma/client';
import { fail, redirect } from '@sveltejs/kit';
import { auth } from '$lib/lucia';
import { sendEmail } from '$lib/email';

export const load = async ({ params, locals }) => {
	const { user } = await locals.auth.validateUser();

	if (!user || !user.isBrand || !user.emailVerified || !user.adminVerified) {
		throw redirect(302, '/');
	}
	// how do I set the deal image because I first need to
	// create the deal so that I have the deal id somehow have to
	// run upload/fetch aws route from actions
};
export const actions = {
	makeDeal: async ({ request, locals }) => {
		const { user } = await locals.auth.validateUser();
		const formData = await request.formData();
		console.log(formData);

		let publish = 'pending';
		// formData.get('deal-submit') && formData.get('deal-submit').toString() === "publish"
		if (formData.get('deal-submit') && formData.get('deal-submit').toString() === 'publish') {
			publish = 'active';
		}
		// TODO return fail if the minimum inputs are not added
		// TODO return fail under different circumstances if the deal is going no-publish
		// TODO return fail if the user is not a brand
		// optional fields
		//	Custom event type 'event-type-custom'
		//	Deal location 'deal-location'
		//  number of athletes 'number-of-athletes'
		//  custom goals custom-goals
		// Parse the main goals and custom goals from the form data

		// console.log(formData.get('end-date'));
		let eventType = formData.get('event-type')?.toString() ?? '';
		if (formData.get('event-type-custom')) {
			eventType = formData.get('event-type-custom')?.toString() ?? '';
		}

		const mainGoals = JSON.parse(formData.get('goals')?.toString() ?? '[]');
		const customGoals = JSON.parse(formData.get('custom-goals')?.toString() ?? '[]');
		// Combine the main goals and custom goals into a single array
		const allGoals = [...mainGoals, ...customGoals];
		const deal = await prismaClient.deal.create({
			data: {
				title: formData.get('deal-title')?.toString() ?? '',
				active: publish,
				shortDescription: formData.get('short-description')?.toString() ?? '',
				eventType: eventType,
				sportPreference: formData.get('sport-preference')?.toString() ?? '',
				genderPreference: formData.get('gender-preference')?.toString() ?? '',
				location: formData.get('deal-location')?.toString() ?? '',
				inPersonOrVirtual: formData.get('in-person-or-virtual')?.toString() ?? '',
				endDate: new Date(formData.get('end-date')?.toString()),
				goals: {
					set: allGoals
				},
				estimatedPayment: formData.get('estimated-payment')?.toString() ?? '',
				recommendedDeliverables: {
					set: JSON.parse(formData.get('deliverables')?.toString() ?? '[]') // an array of recommended deliverables
				},
				athleteCount: parseInt(formData.get('number-of-athletes')?.toString() ?? '1'),
				singleOrMultiple: formData.get('single-or-multiple')?.toString() ?? '',
				publishDate: new Date(),
				authUserId: user.userId, // the user id
				isCampaign: formData.get('is-campaign')?.toString() === 'Campaign'
			}
		});
		return { dealId: deal.id };
		// Access the croppedImage file by its name

		// Continue with the rest of your code...
	}
};
