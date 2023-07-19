<script>
	import { swipe } from './swipe.js';
	import { onMount, tick } from 'svelte';

	//the 5 offers that are visible at a time
	export let offers;

	//how many swipes before refetching the next data
	//TODO if 5 items are not fetched the update will not trigger
	let MAX_SWIPE_COUNT = 4;
	//the status of the last 5 swipes
	let swipeStatusList = [];
	//the number page of the current deal
	let pageNum = 0;

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
			console.log(objArr);
			let nextDeals = await add(JSON.stringify(objArr));
			// swipe(onCardAction);
			//!!! this makes it more seamless by loading in the last deal and running
			//this code one before it gets there.
			console.log(nextDeals)
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
		const response = await fetch('/deals', {
			method: 'POST',
			body: swipeData,
			headers: {
				'content-type': 'application/json'
			}
		});

		return await response.json();
	}
	function makeObjects(decisionArr, dealIdArr) {
		let objArr = [];
		for (let i = 0; i < decisionArr.length; i++) {
			let obj = { dealId: dealIdArr[i], decision: decisionArr[i] };
			objArr.push(obj);
		}
		return objArr;
	}
</script>

<meta name="viewport" content="width=device-width, initial-scale=1.0" />

<div id="wrapper">
	<div id="container">
		<div class="background">
			<!-- Элемент где был кружок  -->

			<!--  Элемент  -->

			<div class="label">Made by @app1e.jews</div>
		</div>
		{#each offers as offer}
			<div class="box">
				<div class="boxcontent">
					{#if pageNum === 0}
						<div class="w-full text=center">
							<p>{offer.id}</p>
						</div>
					{/if}
					{#if pageNum === 1}
						<img
							src="https://www.3dwiggle.com/wp-content/uploads/2016/06/hiroshi-yoshinaga-wired-lathyrus-blog-3dwiggle-1.gif"
							alt="Profile picture"
						/>

						<div class="info">
							<div class="name">Влад, 20</div>
							<div class="interest">1 Common Interest</div>
						</div>
					{/if}
					{#if pageNum === 2}
						<img
							src="https://www.3dwiggle.com/wp-content/uploads/2016/06/hiroshi-yoshinaga-wired-lathyrus-blog-3dwiggle-1.gif"
							alt="Profile picture"
						/>
						<div class="info">
							<div class="name">Влад, 20</div>
							<div class="interest">2 Common Interest</div>
						</div>
					{/if}
					{#if pageNum === 3}
						<img
							src="https://www.3dwiggle.com/wp-content/uploads/2016/06/hiroshi-yoshinaga-wired-lathyrus-blog-3dwiggle-1.gif"
							alt="Profile picture"
						/>
						<div class="info">
							<div class="name">Влад, 20</div>
							<div class="interest">3 Common Interest</div>
						</div>
					{/if}
					<div class="like">Like</div>
					<div class="nope">Nope</div>
				</div>

				<button
					class="hover:bg-white rounded-2xl absolute left-0 mt-6 w-10 h-[95%] opacity-20 z-10"
					style=""
					on:click={() => {
						pageNum = pageNum - 1;
						if (pageNum <= 0) {
							pageNum = 3;
						}
					}}
				/>
				<button
					class="hover:bg-white rounded-2xl absolute right-0 mt-6 w-10 h-[95%] opacity-20 z-12"
					style=""
					on:click={() => {
						pageNum = pageNum + 1;
						if (pageNum > 3) {
							pageNum = 0;
						}
					}}
				/>
			</div>
		{/each}
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css?family=Open+Sans|Roboto:900');

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
		height: 100%;
		/* !!!! */
		margin-top: 3vh;
	}

	#container {
		display: flex;
		width: 60vh;
		height: 80vh;
		overflow: hidden;
	}

	.background {
		position: absolute;
		width: 60vh;
		max-width: 100vw;
		height: 80vh;
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
		width: 60vh;
		height: 80vh;
		max-width: 95vw;
		margin-left: 10px;
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
		background: linear-gradient(rgba(40, 40, 40, 0), rgba(40, 40, 40, 0.6));
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

	.box {
		margin-bottom: 60px; /* Increase the margin to make space for the modal */
	}
</style>
