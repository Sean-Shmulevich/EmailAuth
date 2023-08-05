<script>
	// import { load } from '../../proxy+page.server.js';
	import { swipe } from './swipe.js';
	import { onMount, tick } from 'svelte';
	import { Wave } from 'svelte-loading-spinners';

	//the 5 offers that are visible at a time
	export let offers;
	let isLoading = false;

	let MAX_SWIPE_COUNT = 4;
	if (offers.length < 5) {
		MAX_SWIPE_COUNT = offers.length - 1;
	}
	//how many swipes before refetching the next data
	//TODO if 5 items are not fetched the update will not trigger

	//the status of the last 5 swipes
	let swipeStatusList = [];
	//the number page of the current deal
	export let pageNum = 0;

	//the ids of the current 5 items
	export let currDealIds;
	//key for +page.svelte to reload component
	export let refreshCounter;
	//make sure to run when offers changes
	$: {
		for (let i = 0; i < offers.length; i++) {
			currDealIds[i] = offers[i].id;
		}
	}
	//when onCardAction is called and offers changes
	//since offers is linked to +page.svelte it will be saved there
	//and when the component is reloaded it will be set to
	//the new offers that were fetched at the end of the previous offers

	let onCardAction = async (status) => {
		swipeStatusList.push(status); // Ad the swipe status to the list
		pageNum = 0;
		console.log(swipeStatusList, swipeStatusList.length - 1);
		if (swipeStatusList.length - 1 === MAX_SWIPE_COUNT) {
			//fetch the next five deals with a post request to /deals
			let objArr = [];
			for (let i = 0; i < currDealIds.length; i++) {
				let obj = { dealId: currDealIds[i], decision: swipeStatusList[i] };
				objArr.push(obj);
			}
			//post array of the past 5 decisions to /deals POST
			swipeStatusList = [];
			currDealIds = [];
			// console.log(objArr);
			let nextDeals = await add(JSON.stringify(objArr));
			isLoading = false;
			// swipe(onCardAction);
			//!!! this makes it more seamless by loading in the last deal and running
			//TODO check for invalid json
			//this code one before it gets there.
			if (nextDeals.length < 5) {
				MAX_SWIPE_COUNT = nextDeals.length - 1;
			}
			offers = [...nextDeals];
			refreshCounter += 1;

			//request the next 5 deals set offers and make sure the swipeCardComponent updates
			//reset the swipeStatusList and the currDealIds
			//set offers to the new offers
		}
	};
	onMount(async () => {
		swipe(onCardAction);
	});
	async function add(swipeData) {
		isLoading = true;
		const response = await fetch('/deals', {
			method: 'POST',
			body: swipeData,
			headers: {
				'content-type': 'application/json'
			}
		});

		return await response.json();
	}
</script>

<meta name="viewport" content="width=device-width, initial-scale=1.0" />

<div id="wrapper">
	<div class="-mb-10 sm:mt-10 sm:mb-5" id="container">
		<div class="background">
			{#if isLoading}
				<div class="centerAll">
					<Wave size="160" color="#FF3E00" unit="px" duration="3s" />
				</div>
			{:else if offers.length === 0}
				<div
					class="text-white border border-white p-5 text-2xl rounded-full centerAll text-center max-w-12 bg-red-500"
				>
					Check back later for more deals
				</div>
			{/if}
		</div>
		{#each offers as offer}
			<div class="box">
				<div class="boxcontent">
					{#if pageNum === 0}
						{#if offer.dealImages && offer.dealImages.length !== 0}
							<!-- TODO object contain vs object cover -->
							<img
								class="bg-gray-900 object-contain"
								src="/api/s3object/{offer.dealImages[0].id}"
								alt="Profile"
							/>
						{:else}
							<img
								class="bg-gray-900 object-contain"
								src="https://shmul.dev/assets/cardplaceholder.png"
								alt="Profile"
							/>
						{/if}
						<div class="info bg-black bg-opacity-70 rounded-xl">
							<div class="name -mt-5">{offer.title}</div>
							{#if offer.isCampaign}
								<p>{offer.eventType} event</p>
							{/if}
							<div class="interest">Brand: {offer.brandName}</div>
							{#if JSON.parse(offer.estimatedPayment)['pay'] === 'Both'}
								<p>Product: {JSON.parse(offer.estimatedPayment).product}</p>
								<p>Compensation: {JSON.parse(offer.estimatedPayment).compSelected}</p>
							{:else if JSON.parse(offer.estimatedPayment)['pay'] === 'Money'}
								<p>Compensation: {JSON.parse(offer.estimatedPayment).compSelected}</p>
							{:else if JSON.parse(offer.estimatedPayment)['pay'] === 'Product'}
								<p>Product {JSON.parse(offer.estimatedPayment).product}</p>
							{/if}
							{#each offer.recommendedDeliverables['set'] as del, i}
								<li class="">
									{del.title} <br />
								</li>
							{/each}
						</div>
					{/if}
					{#if pageNum === 1}
						<div
							class="w-full flex flex-col space-y-5 p-5 text-white text-center h-full bg-gray-700"
						>
							<div class="mb-10 p-2 text-left rounded-xl border border-white w-full">
								<p class="text-lg underline text-center">Description</p>
								<p>{offer.shortDescription}</p>
							</div>
							<div class="p-2 rounded-xl border border-white h-20">
								Looking for: <br />{offer.sportPreference} players
							</div>
							{#if !offer.isCampaign}
								<div class="p-2 rounded-xl border border-white h-20">
									Location: <br />{offer.location}
									{#if offer.location === ''}
										Virtual
									{/if}
								</div>
							{/if}
							<div class="p-2 rounded-xl border border-white h-20">
								{#if offer.isCampaign && offer.eventDate}
									Start Date: <br />{offer.eventDate.toString().slice(0, 10)}<br />
								{:else if !offer.isCampaign && offer.eventDate}
									Date: <br />{offer.eventDate.toString().slice(0, 10)}
								{/if}
							</div>
							{#if offer.isCampaign}
								<div class="p-2 rounded-xl border border-white h-20">
									End Date: <br />{offer.endDate.toString().slice(0, 10)}
								</div>
							{/if}
						</div>
						<!-- <div class="w-full p-5 text-white text-center h-full bg-gray-700">
								<div class="flex flex-col mt-4 h-[65%]">
								<div class="flex-grow mb-4 w-full text-center border rounded-xl border-white p-4">
									<p class="mb-2">Deliverables</p>
									<hr class="mb-2" />
								</div> -->
						<!-- <div class="flex-grow w-full text-center border rounded-xl border-white p-4">
									<p class="mb-2">Goals</p>
									<hr />
									{#each offer.goals as goal, i}
										<p class="text-left">{i + 1}. {goal}</p>
									{/each}
								</div> -->
						<!-- </div> -->
						<!-- </div> -->
					{/if}
					{#if pageNum === 2}
						<div class="w-full p-5 text-white text-center h-full bg-gray-700">
							<div class="text-left w-full">
								<p class="text-lg underline text-center">Deliverables</p>
								{#each offer.recommendedDeliverables['set'] as del, i}
									<li class="m-5">
										{del.title}: <br />{del.value}
									</li>
								{/each}
							</div>
						</div>
					{/if}
					<!-- {#if pageNum === 3}
						<img
							src="https://www.3dwiggle.com/wp-content/uploads/2016/06/hiroshi-yoshinaga-wired-lathyrus-blog-3dwiggle-1.gif"
							alt="Profile picture"
						/>
						<div class="info">
							<div class="name">Влад, 20</div>
							<div class="interest">3 Common Interest</div>
						</div>
					{/if}  -->
					<div class="like">Like</div>
					<div class="nope">Nope</div>

					<div class="absolute top-0 bottom-0 left-0 flex items-center">
						<button
							class="w-full h-full px-3 py-3 bg-transparent text-gray-900 border-text text-2xl font-semibold hover:text-gray-300 transition-colors duration-200"
							on:click|preventDefault={() => {
								pageNum = pageNum - 1;
								if (pageNum < 0) {
									pageNum = 2;
								}
							}}
							on:touchstart|preventDefault|capture={() => {
								pageNum = pageNum - 1;
								if (pageNum < 0) {
									pageNum = 2;
								}
							}}
						>
							&lt;
						</button>
					</div>

					<div class="absolute top-0 bottom-0 right-0 flex items-center">
						<button
							on:touchstart|preventDefault|capture={() => {
								pageNum = pageNum + 1;
								if (pageNum > 2) {
									pageNum = 0;
								}
							}}
							on:click|preventDefault={() => {
								pageNum = pageNum + 1;
								if (pageNum > 2) {
									pageNum = 0;
								}
							}}
							class="w-full h-full px-3 py-3 bg-transparent text-gray-900 border-text text-2xl font-semibold hover:text-gray-300 transition-colors duration-200"
						>
							&gt;
						</button>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css?family=Open+Sans|Roboto:900');

	.border-text {
		color: white;
		text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
	}
	.centerAll {
		position: absolute;
		left: 50%;
		top: 50%;
		-webkit-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
	}
	.interest {
		word-wrap: break-word;
	}
	:root {
		--primary-color: #ff0050;
		--secondary-color: rgb(246, 244, 250);
		--background: linear-gradient(white, rgb(246, 244, 250));
	}

	#wrapper {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 92vh;
		/* !!!! */
		margin-top: -3vh;
	}

	#container {
		display: flex;
		width: 47.25vh;
		height: 84vh;
		overflow: hidden;
	}

	.background {
		position: absolute;
		width: 47.25vh;
		max-width: 100vw;
		height: 84vh;
	}

	#select {
		width: auto;
		height: 200px;
	}

	.background svg {
		fill: lighten(var(--primary-color), 40%);
		stroke: var(--primary-color);
		stroke-width: 2px;
	}

	.label {
		width: 100%;
		text-align: center;
		position: absolute;
		bottom: 20%;
		color: rgb(218, 223, 229);
	}

	.box {
		position: absolute;
		width: 47.25vh;
		height: 84vh;
		max-width: 95vw;
		margin-left: 6px;
	}

	.boxcontent {
		position: absolute;
		width: 90%;
		height: 90%;
		margin: 5%;
		background-color: var(--secondary-color);
		border-radius: 1.5em;
		overflow: hidden;
		box-shadow: 3px -3px 10px rgba(0, 0, 0, 0.5);
		cursor: grab;
		overflow: hidden;
	}
	.box:last-of-type .boxcontent {
		width: 100%;
		height: 100%;
		margin: 0%;
	}

	.box img {
		width: 100%;
		height: 100%;
	}
	.like,
	.nope {
		position: absolute;
		top: 35px;
		border: 4px solid gray;
		padding: 7px;
		border-radius: 5px;
		text-transform: uppercase;
		font-size: 2.5em;
		font-weight: bold;
		font-family: 'Roboto', sans-serif;
		opacity: 0;
	}
	.like {
		left: 30px;
		border-color: green;
		color: green;
		transform: rotate(-20deg);
	}
	.nope {
		right: 30px;
		border-color: red;
		color: red;
		transform: rotate(20deg);
	}
	.info {
		color: #fff;
		position: absolute;
		bottom: 0px;
		left: 0px;
		padding: 30px 20px 20px 20px;
		width: 100%;
		box-sizing: border-box;
		text-shadow: 2px 2px 5px gray;
		/* background: linear-gradient(rgba(40, 40, 40, 0), rgba(40, 40, 40, 0.6)); */
	}
	.name {
		font-size: 1.4em;
		font-weight: bold;
	}

	.container {
		width: 350px;
		height: 590px;

		border-radius: 1.5em;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		background-color: black;
		box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
		box-shadow: inset 1px 1px 0.12px rgba(255, 255, 255, 0.4), 1px 1px 3px rgba(0, 0, 0, 0.1);
		border: 1px solid rgba(255, 255, 255, 0.18);
	}

	.container .header__container {
		display: flex;
		align-items: center;
		padding: 16px;
		justify-content: space-between;
	}

	.container .header__container .img-user svg {
		height: 24px;
		fill: #c2c6cd;
	}

	.container .header__container .img-tinder svg {
		height: 24px;
		transform: scale(1.2);
	}

	.container .header__container .img-chat svg {
		height: 24px;
		fill: #c2c6cd;
	}

	.btns {
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		margin: auto;
		height: 2.5%;
		display: flex;
		align-items: center;
		justify-content: center;
		min-width: 300px;
		max-width: 355px;
	}
	.btns img {
		width: 80px;
	}

	.svg-button {
		background: none;
		border: none;
		padding: 0;
		cursor: pointer;
	}

	/* .overlay {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background: rgba(0, 0, 0, 0.5);
		visibility: hidden;
		opacity: 0;
		transition: opacity 200ms;
		z-index: 9999;
	} */

	.popup {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		padding: 20px;
		background: #fff;
		opacity: 0.9;
		border: 1px solid #666;
		width: 300px;
		box-shadow: 0 0 50px rgba(0, 0, 0, 0.5);
		z-index: 99999;
		border-radius: 10px;
	}

	.overlay.light {
		background: rgba(255, 255, 255, 0.5);
	}

	.popup h2 {
		margin-top: 0;
		color: #666;
	}

	.popup .close {
		position: absolute;
		top: 10px;
		right: 10px;
		font-size: 24px;
		font-weight: bold;
		text-decoration: none;
		color: #666;
	}

	.popup .content {
		max-height: 400px;
		overflow: auto;
	}

	.popup p {
		margin: 0 0 1em;
	}

	.overlay:target {
		visibility: visible;
		opacity: 1;
	}
</style>
