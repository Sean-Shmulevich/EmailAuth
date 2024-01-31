<script>
	import { enhance } from '$app/forms';
	import { Jumper } from 'svelte-loading-spinners';

	export let data;
	export let form;
	console.log(data.publishedDeals);
	let publishedDeals = data.publishedDeals;
	let unpublishedDeals = data.unpublishedDeals;
	let completedDeals = data.completedDeals;
	let currentDealList = publishedDeals;
	let activeButton = 'published';
	let showModal = false;
	let showModalComplete = false;
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
		if (form?.showModalComplete === false) {
			showModalComplete = false;
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
	// let paymentType;
	// let product;
	// let payment;

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
	class="absolute transform scale-75 sm:scale-100 -right-4 top-4 sm:top-5 sm:-right-5 p-5"
	href="/creation-center/brand-create-offer"
>
	<img
		class="w-14 mr-0 transform translate-x-[10px]"
		alt="create deal"
		src="https://slimecars.com/assets/createDeal.png"
	/>
	<p class="hidden sm:block text-white text-center text-xs mr-2">Create Offer</p>
	<p class="sm:hidden block text-white text-center text-xs -mr-3">Create</p>
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
{#if showModalComplete}
	<div
		class="p-5 border-4 border-white fixed flex flex-col justify-between left-1/4 w-1/2 bg-gray-800 h-72 rounded-xl"
	>
		<p class="text-white text-center text-xl">
			Are you sure you want to stop showing this offer, pending contracts will not be affected
		</p>
		<p class="text-white text-center text-lg">Deal Name: {deleteName}</p>
		<form class="mx-auto" method="POST" action="?/endDeal" use:enhance>
			<input type="hidden" name="deal-id" bind:value={deleteId} />
			<button
				on:click={() => {
					loading = true;
					// nah = true;
					const deletedDeal =
						currentDealList.find((deal) => deal.id === deleteId) ||
						publishedDeals.find((deal) => deal.id === deleteId);
					currentDealList = currentDealList.filter((deal) => deal.id !== deleteId);
					publishedDeals = publishedDeals.filter((deal) => deal.id !== deleteId);
					completedDeals = [...completedDeals, deletedDeal];
				}}
				type="submit"
				class="{loading
					? 'nah'
					: ''} bg-green-500 mt-auto mb-10 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
				>End offer</button
			>
			<button
				on:click|preventDefault={() => {
					showModalComplete = false;
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
				: ''} bg-gray-800 text-center mt-10 text-sm sm:text-lg">Active</button
		>
		<button
			on:click|preventDefault={() => {
				currentDealList = unpublishedDeals;
				activeButton = 'unpublished';
			}}
			class="{activeButton === 'unpublished'
				? 'border-4 border-green-400'
				: ''} bg-gray-800 w-1/3 p-3 rounded-xl text-center mt-10 text-sm sm:text-lg"
			>Unpublished</button
		>
		<button
			on:click|preventDefault={() => {
				currentDealList = completedDeals;
				activeButton = 'completed';
			}}
			class=" {activeButton === 'completed'
				? 'border-4 border-green-400'
				: ''} bg-gray-800 w-1/3 p-3 rounded-xl text-center mt-10 text-sm sm:text-lg"
			>Completed</button
		>
	</div>
	{#each currentDealList as deal}
		<div
			class="bg-gray-700 text-white rounded-xl w-[85%] lg:w-[40%] flex flex-col sm:flex-row shadow-md p-5 mx-auto my-5"
		>
			<div class="bg-gray-200 w-full sm:w-[60%] mx-auto rounded-lg overflow-hidden">
				{#if deal && deal.dealImages && deal.dealImages.length !== 0}
					<img
						src="/api/s3object/{deal.dealImages[0].id}"
						alt="Brand deal to athlete {deal.title}"
						class="w-full h-full aspect-square object-cover object-center"
					/>
				{:else}
					<img
						src="https://slimecars.com/assets/cardplaceholder.png"
						alt="Brand deal to athlete {deal.title}"
						class="w-full h-full object-cover"
					/>
				{/if}
				<!-- You need to implement the Image component yourself -->
			</div>
			<div class=" py-4 w-full flex flex-row">
				<div class="w-full">
					<div class="flex justify-between items-center">
						<h1 class="font-bold text-2xl mb-2 text-center uppercase">{deal.title}</h1>
						<div class="text-sm text-gray-400 ">
							<!-- Published: {deal.publishDate.toISOString().slice(0, 10)} -->
							2 days ago
						</div>
					</div>
					<!-- {#if deal.isCampaign}
						<p class="font-bold">Campaign</p>
					{:else}
						<p class="font-bold">Single Event</p>
					{/if} -->
					<div class="flex text-xs justify-between mt-2 mb-4">
						<p class="rounded-lg border-2 p-1 border-green-500 font-bold text-green-500 ">{deal.sportPreference}</p>
						<p class="rounded-lg border-2 p-1 border-green-500 font-bold text-green-500">{deal.genderPreference}</p>
						<p class="rounded-lg border-2 p-1 border-green-500 font-bold text-green-500">{JSON.parse(deal.estimatedPayment).compSelected}</p>
						<p class="rounded-lg border-2 p-1 border-green-500 font-bold text-green-500">{deal.athleteCount} Athlete</p>
					</div>
					<!-- <p class="text-sm text-center rounded-lg mb-4 border-2 py-1">{deal.sportPreference} | {deal.genderPreference} | {JSON.parse(deal.estimatedPayment).compSelected} | {deal.athleteCount} Athelete</p> -->
					<p class="text-sm text-white break-words ">
						<span class="font-bold">Description: </span>
							<!-- {deal.shortDescription} -->
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta nesciunt iure reiciendis at eaque? Debitis incidunt vel repellat! Aliquam quam asperiores, modi quo consequatur doloribus reprehenderit error debitis sapiente deserunt.
						
					</p>
			
					<div class="mt-7">
						<!-- <div class="flex items-center">
							<div class="text-sm text-white">Sport Preference: {deal.sportPreference}</div>
							<div class="ml-3 text-sm text-white">Gender Preference: {deal.genderPreference}</div>
						</div> -->
						<div class="flex justify-between my-2">
							<div class="flex items-center">
							{#if !deal.isCampaign}
								{#if deal.location !== ''}
									<div class="text-sm text-white">Location {deal.location}</div>
								{:else}
									<div class=" text-white">
										<svg xmlns="http://www.w3.org/2000/svg" class="h-4 fill-gray-400 mr-1" viewBox="0 0 384 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
										</div>
									<span class="text-xs text-gray-400">{deal.inPersonOrVirtual}</span>
								{/if}
							{/if}
						</div>

						{#if !deal.isCampaign}
						<div class="flex items-center">
							<div class="text-sm text-white">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-4 fill-gray-400 mr-1" viewBox="0 0 384 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M192 0c-41.8 0-77.4 26.7-90.5 64H64C28.7 64 0 92.7 0 128V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H282.5C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM72 272a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm104-16H304c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16s7.2-16 16-16zM72 368a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm88 0c0-8.8 7.2-16 16-16H304c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16z"/></svg>							
							</div>
							<span class="text-xs text-gray-400">{deal.eventType !== '' ? deal.eventType : 'no event type'}</span>
						</div>
						{/if}
						<div class="flex items-center">
							<div class="text-sm ">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-4 fill-gray-400 mr-1" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z"/></svg>
							
							</div>
							<div class="text-xs text-gray-400 ">
								{#if deal.isCampaign}
									{deal.eventDate.toISOString().slice(0, 10)}-{deal.endDate.toISOString().slice(0, 10)}
								{:else}
									{deal.eventDate.toISOString().slice(0, 10)}
								{/if}
							</div>
						</div></div>
						
						

						<!-- <p class="mt-5 underline">Compensation</p>
						{#if JSON.parse(deal.estimatedPayment)['pay'] === 'Both'}
							{#if JSON.parse(deal.estimatedPayment).product !== ''}
								<p>Product: {JSON.parse(deal.estimatedPayment).product}</p>
							{/if}
							{#if JSON.parse(deal.estimatedPayment).compSelected !== 'Custom'}
								<p>Compensation: {JSON.parse(deal.estimatedPayment).compSelected}</p>
							{:else}
								<p>Compensation: {JSON.parse(deal.estimatedPayment).customPay}</p>
							{/if}
						{:else if JSON.parse(deal.estimatedPayment)['pay'] === 'Money'}
							{#if JSON.parse(deal.estimatedPayment).compSelected !== 'Custom'}
								<p>Compensation: {JSON.parse(deal.estimatedPayment).compSelected}</p>
							{:else}
								<p>Compensation: {JSON.parse(deal.estimatedPayment).customPay}</p>
							{/if}
						{:else if JSON.parse(deal.estimatedPayment)['pay'] === 'Product'}
							{#if JSON.parse(deal.estimatedPayment).product !== ''}
								<p>Product: {JSON.parse(deal.estimatedPayment).product}</p>
							{/if}
						{/if} -->
						<!-- <div class="text-sm text-white mt-5">Athletes: {deal.athleteCount}</div> -->
					
					</div>
					<div class="w-full text-center hidden"><!--added hidden-->
						<a class="mx-auto" href="{dealLink}{deal.id}">
							<button
								class="bg-green-500 hover:bg-green-700 text-white  transform translate-y-5 font-bold p-2 rounded-full"
							>
								{#if activeButton === 'unpublished'}
									Finish creating deal
								{:else if activeButton === 'completed'}
									View Details
								{:else if activeButton === 'published'}
									See user activity
								{/if}
							</button>
						</a>
					</div>
				</div>
			</div>
			{#if activeButton !== 'completed' && activeButton !== 'unpublished'}
				<!-- <button
					on:click|preventDefault={() => {
						showModalComplete = true;
						nah = false;
						deleteName = deal.title;
						deleteId = deal.id;
					}}
					class="bg-yellow-300 text-black p-2 rounded-full mr-auto transform -translate-y-3"
				>
					End offer
				</button> -->
				<div class="mt-2 flex flex-row justify-between">

				
				<button
						class="border-2 border-green-500 hover:bg-green-700 text-green-500 font-bold p-2 rounded-full uppercase text-sm"
					>
					<a class="mx-auto" href="{dealLink}{deal.id}">
						{#if activeButton === 'unpublished'}
							Finish creating deal
						{:else if activeButton === 'completed'}
							View Details
						{:else if activeButton === 'published'}
							See user activity
						{/if}
					</a>
					</button>
				<button
					on:click|preventDefault={() => {
						showModal = true;
						nah = false;
						deleteName = deal.title;
						deleteId = deal.id;
					}}
					class=""
				>
					<img class="w-8" alt="delete deal" src="https://slimecars.com/assets/trash.png" />
				</button>
			</div>
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
