<script>
	import { enhance } from '$app/forms';
	export let data;
	export let form;
	let showModal = false;
	let brandEmail;
	import { Wave } from 'svelte-loading-spinners';

	let activeButton = 'new';
	let completedDeals;
	let newDeals;
	let ongoingDeals;
	let interestedBrands;
	let delId;
	if (data) {
		completedDeals = data.completedDealProfiles;
		newDeals = data.newDealProfiles;
		ongoingDeals = data.ongoingDealProfiles;
		interestedBrands = newDeals;
	}
	let loading = false;
	$: {
		if (form?.status === 'ok' && delId !== '' && loading === true) {
			interestedBrands = interestedBrands.filter((deal) => deal.id !== delId);
			form = null;
			loading = false;
			delId = '';
		}
	}

	let defaultImg = '/api/s3object/1690047383938a750a7168ff2492899697beefcb7dc6e';
</script>

{#if loading}
	<div
		class="fixed top-0 left-0 w-full h-screen flex items-center justify-center z-20 bg-black bg-opacity-50"
	>
		<div class=" transform -translate-x-32 w-20 h-20">
			<!-- Replace this with your loader component -->
			<Wave size="160" color="#FF3E00" unit="px" duration="6s" />
		</div>
	</div>
{/if}
{#if showModal}
	<div
		class="fixed top-0 left-0 w-full h-screen flex items-center justify-center z-20 bg-black bg-opacity-50"
	>
		<div class="w-72 h-30 p-5 bg-gray-700 text-white">
			<p>Brand Email: {brandEmail}</p>
			<button
				class="p-2 bg-green-700 rounded-full text-center mx-auto"
				on:click={() => {
					showModal = false;
				}}>Ok</button
			>
		</div>
	</div>
{/if}
<div
	class="flex flex-row -mt-5 w-[80%] sm:w-[60%] mb-5 text-white text-center justify-center mx-auto"
>
	<button
		on:click|preventDefault={() => {
			activeButton = 'new';
			interestedBrands = newDeals;
		}}
		class=" {activeButton === 'new'
			? 'border-4 border-green-400'
			: ''} bg-gray-800 w-1/3 p-3 rounded-xl text-center mt-10 text-lg">New</button
	>
	<button
		on:click|preventDefault={() => {
			activeButton = 'ongoing';
			interestedBrands = ongoingDeals;
		}}
		class=" {activeButton === 'ongoing'
			? 'border-4 border-green-400'
			: ''} bg-gray-800 w-1/3 p-3 rounded-xl text-center mt-10 text-lg">Ongoing</button
	>
	<button
		on:click|preventDefault={() => {
			// currentDealList = completedDeals;
			activeButton = 'completed';
			interestedBrands = completedDeals;
		}}
		class="  {activeButton === 'completed'
			? 'border-4 border-green-400'
			: ''} bg-gray-800 w-1/3 p-3 rounded-xl text-center mt-10 text-lg">Completed</button
	>
</div>
{#each interestedBrands as currDeal}
	<div class="w-fit mx-auto bg-gray-800 rounded-xl mb-5 p-5">
		<h2 class="text-center text-3xl mb-2 text-white">{currDeal.title}</h2>
		<hr />
		<div class="flex flex-col md:flex-row">
			{#if currDeal.dealImages.length !== 0}
				<img
					class="mt-5 rounded-2xl mx-auto sm:mx-[unset] h-[500px] w-[400px]"
					src="/api/s3object/{currDeal.dealImages[0].id}"
				/>
			{:else}
				<img class="mt-5 rounded-2xl mx-auto sm:mx-[unset] h-[500px] w-[400px]" src={defaultImg} />
			{/if}
			<div class="text-white mt-5 w-full md:w-[25%] min-w-[300px]">
				<div class="border border-white p-5 text-lg rounded-xl">
					<p>Event Type</p>
					<p class="mb-5">{currDeal.eventType}</p>
					<p>Sport Preference</p>
					<p class="mb-5">{currDeal.sportPreference}</p>
					<p>Gender Preference:</p>
					<p>{currDeal.genderPreference}</p>
				</div>
				<!-- <p>{currDeal.shortDescription}</p> -->
				<!-- <p>{currDeal.endDate}</p> -->
				<!-- <p>{currDeal.publishDate}</p> -->
				<!-- <p>{currDeal.isCampaign}</p> -->
				<!-- <p>{currDeal.singleOrMultiple}</p> -->
				<!-- <p>{currDeal.athleteCount}</p> -->
				<!-- <p>{currDeal.}</p> -->

				<div class="border border-white p-5 text-lg rounded-xl">
					<p>Location</p>
					{#if currDeal.location !== ''}
						<p class="mb-5">{currDeal.location}</p>
					{:else}
						<p class="mb-5">{currDeal.inPersonOrVirtual}</p>
					{/if}

					<p class="mb-5">
						{#if currDeal.isCampaign}
							Start Date: {currDeal.eventDate.toISOString().slice(0, 10)}
							End Date: {currDeal.endDate.toISOString().slice(0, 10)}
						{:else}
							Date: {currDeal.eventDate.toISOString().slice(0, 10)}
						{/if}
					</p>
					<!-- <p>End Date</p>
					<p class="mb-5">
						{new Date(currDeal.endDate).toLocaleDateString('en-GB', {
							day: 'numeric',
							month: 'short',
							year: 'numeric'
						})}
					</p> -->
					<p class="mt-5 underline">Compensation</p>
					{#if JSON.parse(currDeal.estimatedPayment)['pay'] === 'Both'}
						<p>Product: {JSON.parse(currDeal.estimatedPayment).product}</p>
						<p>Money: {JSON.parse(currDeal.estimatedPayment).compSelected}</p>
					{:else if JSON.parse(currDeal.estimatedPayment)['pay'] === 'Money'}
						<p>Money: {JSON.parse(currDeal.estimatedPayment).compSelected}</p>
					{:else if JSON.parse(currDeal.estimatedPayment)['pay'] === 'Product'}
						<p>Product {JSON.parse(currDeal.estimatedPayment).product}</p>
					{/if}
				</div>
			</div>
		</div>
		<div class="w-full -mt-5 py-5">
			<div class="border border-1 rounded-xl text-white p-5">
				<p class="text-xl">Deliverables</p>
				<hr class="mb-2" />
				<ol>
					{#each currDeal.recommendedDeliverables['set'] as del}
						<li class="m-5">
							{del.title}: {del.value}
						</li>
					{/each}
				</ol>
			</div>
			<!-- <div class="border border-1 rounded-xl text-white p-5">
				<p class="text-xl">Goals</p>
				<hr class="mb-2" />
				{#each currDeal.goals as goal}
					<p>{goal}</p>
				{/each}
			</div> -->
		</div>
		<div class="text-center text-white mx-auto flex flex-row">
			{#if activeButton !== 'completed'}
				<button
					on:click={() => {
						showModal = true;
						brandEmail = currDeal.authUser.email;
					}}
					class="p-3i border border-white bg-gray-700 w-1/3 rounded-xl"
				>
					Contact Brand
				</button>
				<a
					href="/brand-profile/{currDeal.authUserId}"
					class="p-3 border border-white bg-gray-700 w-1/3 rounded-xl"
				>
					View Profile
				</a>
				{#if activeButton === 'new'}
					<form
						class="w-1/3 border bg-gray-700 rounded-xl border-white"
						method="POST"
						use:enhance
						action="?/agree"
					>
						<button
							on:click={() => {
								delId = currDeal.id;
								loading = true;
							}}
							name="agree-deal"
							value={currDeal.id}
							type="submit"
							class="w-full h-full"
						>
							Agree to offer
						</button>
					</form>
				{/if}
				{#if activeButton === 'ongoing'}
					<button class="p-3 border border-white bg-gray-700 w-1/3 rounded-xl">
						View Contract
					</button>
				{/if}
			{:else}
				<button class="p-3 border mx-auto border-white bg-gray-700 w-1/3 rounded-xl">
					View Contract
				</button>
			{/if}
		</div>
	</div>
{:else}
	<p class=" text-3xl text-red-500 text-center">Sorry no deals here :(</p>
{/each}
