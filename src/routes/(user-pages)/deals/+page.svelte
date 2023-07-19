<script>
	import SwipeCard from './SwipeCard.svelte';

	let offers = [
		{
			id: 'DealID',
			title: 'Deal Title',
			description: 'Deal Description',
			sportPreference: 'Sport Preference',
			genderPreference: 'Male',
			shortDescription: 'Campaign Short Description',
			inPersonOrVirtual: 'In Person or Virtual',
			location: 'iowa',
			dateTime: '2021-10-10',
			duration: '1 hour',
			mainGoal: 'main goal',
			estimatedPayment: '100',
			recommendedDeliverables: ['deliverable1', 'deliverable2'],
			athleteCount: 1,
			singleOrMultiple: 'single',
			publishDate: 'DateTime.now()',
			isCampaign: true
		},
		{
			id: 'DealID0',
			title: 'Deal Title',
			description: 'Deal Description',
			sportPreference: 'Sport Preference',
			genderPreference: 'Male',
			shortDescription: 'Campaign Short Description',
			inPersonOrVirtual: 'In Person or Virtual',
			location: 'iowa',
			dateTime: '2021-10-10',
			duration: '1 hour',
			mainGoal: 'main goal',
			estimatedPayment: '100',
			recommendedDeliverables: ['deliverable1', 'deliverable2'],
			athleteCount: 1,
			singleOrMultiple: 'single',
			publishDate: 'DateTime.now()',
			isCampaign: true
		},
		{
			id: 'DealID1',
			title: 'Deal Title',
			description: 'Deal Description',
			sportPreference: 'Sport Preference',
			genderPreference: 'Male',
			shortDescription: 'Campaign Short Description',
			inPersonOrVirtual: 'In Person or Virtual',
			location: 'iowa',
			dateTime: '2021-10-10',
			duration: '1 hour',
			mainGoal: 'main goal',
			estimatedPayment: '100',
			recommendedDeliverables: ['deliverable1', 'deliverable2'],
			athleteCount: 1,
			singleOrMultiple: 'single',
			publishDate: 'DateTime.now()',
			isCampaign: true
		},
		{
			id: 'DealID3',
			title: 'Deal Title',
			description: 'Deal Description',
			sportPreference: 'Sport Preference',
			genderPreference: 'Male',
			shortDescription: 'Campaign Short Description',
			inPersonOrVirtual: 'In Person or Virtual',
			location: 'iowa',
			dateTime: '2021-10-10',
			duration: '1 hour',
			mainGoal: 'main goal',
			estimatedPayment: '100',
			recommendedDeliverables: ['deliverable1', 'deliverable2'],
			athleteCount: 1,
			singleOrMultiple: 'single',
			publishDate: 'DateTime.now()',
			isCampaign: true
		},
		{
			id: 'DealID5',
			title: 'Deal Title',
			description: 'Deal Description',
			sportPreference: 'Sport Preference',
			genderPreference: 'Male',
			shortDescription: 'Campaign Short Description',
			inPersonOrVirtual: 'In Person or Virtual',
			location: 'iowa',
			dateTime: '2021-10-10',
			duration: '1 hour',
			mainGoal: 'main goal',
			estimatedPayment: '100',
			recommendedDeliverables: ['deliverable1', 'deliverable2'],
			athleteCount: 1,
			singleOrMultiple: 'single',
			publishDate: 'DateTime.now()',
			isCampaign: true
		}
	];
	import { onMount, tick } from 'svelte';
	import { swipe } from './swipe.js';
	import { initializeSwipe } from './swipe.js';

	// swipe(onCardAction);
    let refreshCounter = 0;
	// const userDealDecisions = makeObjects(swipeStatusList, currDealIds);
	//userDealDecisions




	async function roll() {
		const response = await fetch('/deals');
		console.log(await response.json());
	}

	let userSwipeData = [{ dealId: 'uniqueDealID', decision: 'user-accepted' }];

	let currDealIds = [];
</script>

{#key refreshCounter}
    <SwipeCard bind:refreshCounter bind:offers bind:currDealIds />
{/key}
