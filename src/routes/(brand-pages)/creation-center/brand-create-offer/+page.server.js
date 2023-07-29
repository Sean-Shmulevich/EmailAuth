import { prismaClient } from '$lib/db';
import { Prisma } from '@prisma/client';
import { fail, redirect } from '@sveltejs/kit';
import { auth } from '$lib/lucia';
import { sendEmail } from '$lib/email';

export const load = async ({ url, locals }) => {
	const { user } = await locals.auth.validateUser();

	if (!user || !user.isBrand || !user.emailVerified || !user.adminVerified) {
		throw redirect(302, '/');
	}
	// console.log('biutch');
	//this means that the page is being called with and existing pending deal
	if (url.searchParams.get('dealId')) {
		const deal = await prismaClient.deal.findFirst({
			where: {
				id: url.searchParams.get('dealId'),
				active: 'pending'
			},
			include: {
				dealImages: true
			}
		});
		if (!deal) {
			throw redirect(302, `/suggest/${url.searchParams.get('dealId')}?sportPref=null`);
		}
		return {
			deal
		};
	}
	// how do I set the deal image because I first need to
	// create the deal so that I have the deal id somehow have to
	// run upload/fetch aws route from actions
};
export const actions = {
	makeDeal: async ({ url, request, locals }) => {
		const { user } = await locals.auth.validateUser();
		const formData = await request.formData();
		console.log(formData);

		let publish = 'pending';
		// formData.get('deal-submit') && formData.get('deal-submit').toString() === "publish"
		if (formData.get('deal-submit') && formData.get('deal-submit').toString() === 'publish') {
			publish = 'active';
		}
		// console.log(publish);
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
		let endDate = null;
		if (formData.get('end-date')) {
			endDate = new Date(formData.get('end-date')?.toString());
		}
		// const mainGoals = JSON.parse(formData.get('goals')?.toString() ?? '[]');
		// const customGoals = JSON.parse(formData.get('custom-goals')?.toString() ?? '[]');
		// Combine the main goals and custom goals into a single array

		// const allGoals = [...mainGoals, ...customGoals];
		const requiredFields = [
			'deal-title',
			'short-description',
			// 'event-type',
			'sport-preference',
			'gender-preference',
			'in-person-or-virtual',
			'event-date',
			'estimated-payment',
			// 'number-of-athletes',
			'single-or-multiple',
			'is-campaign'
		];
		console.log(formData.get('single-or-multiple') === false);
		if (publish === 'active') {
			for (const field of requiredFields) {
				if (!formData.get(field)) {
					console.log('field' + field);
					// Return fail if any of the required fields are not filled
					// return fail(500, { message: 'All fields must be filled' });
				}
			}
		}
		const data = {
			title: formData.get('deal-title')?.toString() ?? '',
			active: publish,
			shortDescription: formData.get('short-description')?.toString() ?? '',
			eventType: eventType,
			sportPreference: formData.get('sport-preference')?.toString() ?? '',
			genderPreference: formData.get('gender-preference')?.toString() ?? '',
			location: formData.get('deal-location')?.toString() ?? '',
			inPersonOrVirtual: formData.get('in-person-or-virtual')?.toString() ?? '',
			endDate: endDate,
			eventDate: new Date(formData.get('event-date')?.toString()),
			// goals: {
			// 	set: allGoals
			// },
			estimatedPayment: formData.get('estimated-payment')?.toString() ?? '',
			recommendedDeliverables: {
				set: JSON.parse(formData.get('deliverables')?.toString() ?? '[]') // an array of recommended deliverables
			},
			athleteCount: parseInt(formData.get('number-of-athletes')?.toString() ?? '1'),
			singleOrMultiple: formData.get('single-or-multiple')?.toString() ?? '',
			publishDate: new Date(),
			authUserId: user.userId, // the user id
			isCampaign: formData.get('is-campaign')?.toString() === 'Campaign'
		};

		let deal;
		// console.log(url.searchParams);
		//the page was called with pre-existing data
		if (formData.get('deal-id')) {
			// console.log('here');
			deal = await prismaClient.deal.update({
				where: {
					id: formData.get('deal-id').toString()
				},
				data: data
			});
			// console.log(deal.active);
			return { dealId: deal.id, noPublish: deal.active === 'pending' };
		} else {
			deal = await prismaClient.deal.create({ data: data });
			return { dealId: deal.id, noPublish: deal.active === 'pending' };
		}

		// Access the croppedImage file by its name

		// Continue with the rest of your code...
	}
};
