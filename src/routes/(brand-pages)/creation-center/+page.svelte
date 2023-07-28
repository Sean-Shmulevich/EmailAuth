<script>
	import { enhance } from '$app/forms';
	import { Jumper } from 'svelte-loading-spinners';

	export let data;
	export let form;
	let publishedDeals = data.publishedDeals;
	let unpublishedDeals = data.unpublishedDeals;
	let completedDeals = data.completedDeals;
	let currentDealList = publishedDeals;
	let activeButton = 'published';
	let showModal = false;
	let loading = false;
	let nah = false;
	$: {
		// console.log(form);
		if (form?.showModal === false) {
			showModal = false;
			loading = false;
			deleteId = '';
			deleteName = '';
		}
	}

	let dealLink = 'creation-center/deal/';
	$: {
		// console.log(data.publishedDeals[0].dealImages);
		if (activeButton === 'published') {
			dealLink = 'creation-center/deal/';
		} else if (activeButton === 'unpublished') {
			dealLink = 'creation-center/brand-create-offer?dealId=';
		} else {
			dealLink = 'creation-center/deal/';
		}
	}
	// /creation-center/deal/{deal.id}
	//  show all deal data
	//  show all interested athletes
	//  allow picking athletes option to add custom text to email
	//  admin has to be able to see athletes being selected for deals

	// /creation-center/brand-create-offer/edit/{deal.id} pending deals
	let deleteId;
	let deleteName;
</script>

<a
	title="Create a new Deal"
	class="absolute -top-[72px] sm:top-5 right-0 p-5"
	href="/creation-center/brand-create-offer"
>
	<img class="w-14" alt="create deal" src="https://shmul.dev/assets/createDeal.png" />
</a>
{#if showModal}
	<div
		class="p-5 border-4 border-white fixed flex flex-col justify-between left-1/4 w-1/2 bg-gray-800 h-72 rounded-xl"
	>
		<p class="text-white text-center text-xl">Are you sure you want to delete this?</p>
		<p class="text-white text-center text-lg">Deal Name: {deleteName}</p>
		<form class="mx-auto" method="POST" action="?/deleteDeal" use:enhance>
			<input type="hidden" name="deal-id" bind:value={deleteId} />
			<button
				on:click={() => {
					loading = true;
					// nah = true;
					currentDealList = currentDealList.filter((deal) => deal.id !== deleteId);
				}}
				type="submit"
				class="{loading
					? 'nah'
					: ''} bg-green-500 mt-auto mb-10 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
				>Delete</button
			>
			<button
				on:click|preventDefault={() => {
					showModal = false;
				}}
				class="{loading
					? 'nah'
					: ''} bg-green-500 mt-auto mb-10 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
				>Cancel</button
			>
		</form>
		{#if loading}
			<div class="mx-auto">
				<Jumper size="60" color="#FF3E00" unit="px" duration="6s" />
			</div>
		{/if}
	</div>
{/if}

<div class="text-black">
	<div class="flex flex-row -mt-5 w-[80%] lg:w-[40%] text-white text-center justify-center mx-auto">
		<button
			on:click|preventDefault={() => {
				currentDealList = publishedDeals;
				activeButton = 'published';
			}}
			class="w-1/3 p-3 rounded-xl {activeButton === 'published'
				? 'border-4 border-green-400'
				: ''} bg-gray-800 text-center mt-10 text-lg">Active</button
		>
		<button
			on:click|preventDefault={() => {
				currentDealList = unpublishedDeals;
				activeButton = 'unpublished';
			}}
			class="{activeButton === 'unpublished'
				? 'border-4 border-green-400'
				: ''} bg-gray-800 w-1/3 p-3 rounded-xl text-center mt-10 text-lg">Unpublished</button
		>
		<button
			on:click|preventDefault={() => {
				currentDealList = completedDeals;
				activeButton = 'completed';
			}}
			class=" {activeButton === 'completed'
				? 'border-4 border-green-400'
				: ''} bg-gray-800 w-1/3 p-3 rounded-xl text-center mt-10 text-lg">Completed</button
		>
	</div>
	{#each currentDealList as deal}
		<div
			class="bg-gray-700 text-white rounded-xl mb-10 w-[80%] lg:w-[40%] flex flex-col shadow-md p-5 mx-auto"
		>
			<div class="bg-gray-200 w-full sm:w-[60%] mx-auto">
				{#if deal && deal.dealImages && deal.dealImages.length !== 0}
					<img
						src="/api/s3object/{deal.dealImages[0].id}"
						alt="Brand deal to athlete {deal.title}"
						class="w-full h-full object-cover"
					/>
				{:else}
					<img
						src="/api/s3object/1690047383938a750a7168ff2492899697beefcb7dc6e"
						alt="Brand deal to athlete {deal.title}"
						class="w-full h-full object-cover"
					/>
				{/if}
				<!-- You need to implement the Image component yourself -->
			</div>
			<div class="p-8 w-full flex flex-row">
				<div class="w-full">
					<h1 class="font-bold text-xl mb-2">{deal.title}</h1>
					<p class="text-white break-words text-base">Description: {deal.shortDescription}</p>
					<div class="mt-4">
						<div class="flex items-center">
							<div class="text-sm text-white">{deal.sportPreference}</div>
							<div class="ml-3 text-sm text-white">{deal.genderPreference}</div>
						</div>
						<div class="mt-2 flex items-center">
							{#if deal.location !== ''}
								<div class="text-sm text-white">Location: {deal.location}</div>
							{:else}
								<div class="text-sm text-white">Location: {deal.inPersonOrVirtual}</div>
							{/if}
						</div>
						<div class="text-sm text-white">
							Event type: {deal.eventType !== '' ? deal.eventType : 'no event type'}
						</div>
						<div class="text-sm text-white">
							{#if deal.isCampaign}
								Start Date: {deal.eventDate.toISOString().slice(0, 10)}
								End Date: {deal.endDate.toISOString().slice(0, 10)}
							{:else}
								Date: {deal.eventDate.toISOString().slice(0, 10)}
							{/if}
						</div>

						<div class="text-sm text-white">Payment: {deal.estimatedPayment}</div>
						<div class="text-sm text-white">Athletes: {deal.athleteCount}</div>
						<div class="mt-2 flex items-center">
							<div class="text-sm text-white">
								Published: {deal.publishDate.toISOString().slice(0, 10)}
							</div>
						</div>
					</div>
					<div class="w-full text-center">
						<a class="mx-auto" href="{dealLink}{deal.id}">
							<button
								class="bg-green-500 hover:bg-green-700 text-white transform translate-y-5 font-bold py-2 px-4 rounded-full"
							>
								{#if activeButton === 'unpublished'}
									Finish creating deal
								{:else if activeButton === 'completed'}
									View Details
								{:else}
									See user activity
								{/if}
							</button>
						</a>
					</div>
				</div>
			</div>
			{#if activeButton !== 'completed'}
				<button
					on:click|preventDefault={() => {
						showModal = true;
						nah = false;
						deleteName = deal.title;
						deleteId = deal.id;
					}}
					class="ml-auto -mt-14 mr-0 w-fit"
				>
					<img class="w-10" alt="delete deal" src="https://shmul.dev/assets/trash.png" />
				</button>
			{/if}
		</div>
	{:else}
		<p class="text-2xl text-red-600 text-center mt-10">No deals here yet</p>
	{/each}
</div>

<style>
	.nah {
		display: none;
	}
	.centerAll {
		position: absolute;
		left: 50%;
		top: 50%;
		-webkit-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
	}
</style>
