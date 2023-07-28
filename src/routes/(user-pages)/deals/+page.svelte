<script>
	import SwipeCard from './SwipeCard.svelte';
	export let data;

	let offers = data.nextDeals;
	import { beforeUpdate, onMount, tick } from 'svelte';
	import { swipe } from './swipe.js';
	import { initializeSwipe } from './swipe.js';

	// swipe(onCardAction);
	let refreshCounter = 0;
	// const userDealDecisions = makeObjects(swipeStatusList, currDealIds);
	//userDealDecisions
	import { afterNavigate } from '$app/navigation';
	afterNavigate(() => {
		window.scrollTo(0, document.body.scrollHeight);
	});
	let userSwipeData = [{ dealId: 'uniqueDealID', decision: 'user-accepted' }];

	let currDealIds = [];
</script>

{#key refreshCounter}
	<SwipeCard bind:refreshCounter bind:offers bind:currDealIds />
{/key}
