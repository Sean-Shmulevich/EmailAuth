<script>
	import SwipeCard from './SwipeCard.svelte';
	import DealPage from './DealPage.svelte';
	export let data;

	let offers = data.nextDeals;
	import { beforeUpdate, onMount, tick } from 'svelte';
	import { swipe } from './swipe.js';
	import { initializeSwipe } from './swipe.js';
	let pageNum;

	// swipe(onCardAction);
	let refreshCounter = 0;
	// const userDealDecisions = makeObjects(swipeStatusList, currDealIds);
	//userDealDecisions
	import { afterNavigate } from '$app/navigation';
	afterNavigate(() => {
		window.scrollTo(0, document.body.scrollHeight);
	});

	let currDealIds = [];
	//TODO this code might break the whole thing
	$: {
		if (refreshCounter) {
			pageNum = 0;
		}
	}
	console.log(offers);
</script>

{#key refreshCounter}
	<SwipeCard bind:pageNum bind:refreshCounter bind:offers bind:currDealIds />
{/key}
