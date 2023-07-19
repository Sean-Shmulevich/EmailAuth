<script>
	import SwipeCard from './SwipeCard.svelte';
    export let data;

	let offers = data.nextDeals; 
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
