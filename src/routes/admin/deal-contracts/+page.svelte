<script>
	export let data;
	export let form;
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	let dealImg = 'https://slimecars.com/cardplaceholder.png';

	let contractDeals = data.deal;
	console.log(data);
	let noDeals = false;
	if (data && data.status) {
		noDeals = true;
	}

	console.log(contractDeals[0].dealImages);
</script>

{#if !noDeals}
	{#each data.deal as currDeal}
		<div class="w-fit mx-auto bg-gray-800 rounded-xl mt-5 p-5 mb-10 pb-5">
			<h2 class="text-center text-3xl mb-2 text-white">{currDeal.title}</h2>
			<hr />
			<div class="flex flex-col md:flex-row">
				{#if currDeal.dealImages}
					<img
						class="object-contain mt-5 rounded-2xl mx-auto sm:mx-[unset] h-[500px] w-full"
						src="/api/s3object/{currDeal.dealImages[0]?.id}"
						alt="deal main"
					/>
				{:else}
					<img
						class="object-contain mt-5 rounded-2xl mx-auto sm:mx-[unset] h-[500px] w-full"
						src="/https://slimecars.com/assets/cardplaceholder.png"
						alt="deal main"
					/>
				{/if}
				<div class="text-white mt-5 w-full flex flex-col min-w-[200px]">
					<div class="border border-white p-5 text-lg grow rounded-xl">
						{#if !currDeal.isCampaign}
							<p>Event Type</p>
							<p class="mb-5">{currDeal.eventType}</p>
						{/if}
						<p>Sport Preference</p>
						<p class="mb-5">{currDeal.sportPreference}</p>
						<p>Gender Preference: {currDeal.genderPreference}</p>
						<br />
						{#if !currDeal.isCampaign && currDeal.location !== ''}
							<p class="">Location: {currDeal.location}</p>
						{:else if !currDeal.isCampaign && currDeal.location === ''}
							<p>Location</p>
							<p class="">{currDeal.inPersonOrVirtual}</p>
						{/if}
						<p class="mt-5">Description: {currDeal.shortDescription}</p>
					</div>
					<!-- <p>{currDeal.shortDescription}</p> -->
					<!-- <p>{currDeal.endDate}</p> -->
					<!-- <p>{currDeal.publishDate}</p> -->
					<!-- <p>{currDeal.isCampaign}</p> -->
					<!-- <p>{currDeal.singleOrMultiple}</p> -->
					<!-- <p>{currDeal.athleteCount}</p> -->
					<!-- <p>{currDeal.}</p> -->

					<div class="border border-white p-5 text-lg rounded-xl">
						{#if currDeal.isCampaign}
							Start Date: {currDeal.eventDate.toISOString().slice(0, 10)}
							<br />
							End Date: {currDeal.endDate.toISOString().slice(0, 10)}
						{:else}
							Date: {currDeal.eventDate.toISOString().slice(0, 10)}
						{/if}
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
							{#if JSON.parse(currDeal.estimatedPayment).product !== ''}
								<p>Product: {JSON.parse(currDeal.estimatedPayment).product}</p>
							{/if}
							{#if JSON.parse(currDeal.estimatedPayment).compSelected !== 'Custom'}
								<p>Compensation: {JSON.parse(currDeal.estimatedPayment).compSelected}</p>
							{:else}
								<p>Compensation: {JSON.parse(currDeal.estimatedPayment).customPay}</p>
							{/if}
						{:else if JSON.parse(currDeal.estimatedPayment)['pay'] === 'Money'}
							{#if JSON.parse(currDeal.estimatedPayment).compSelected !== 'Custom'}
								<p>Compensation: {JSON.parse(currDeal.estimatedPayment).compSelected}</p>
							{:else}
								<p>Compensation: {JSON.parse(currDeal.estimatedPayment).customPay}</p>
							{/if}
						{:else if JSON.parse(currDeal.estimatedPayment)['pay'] === 'Product'}
							{#if JSON.parse(currDeal.estimatedPayment).product !== ''}
								<p>Product: {JSON.parse(currDeal.estimatedPayment).product}</p>
							{/if}
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
			{#each currDeal.userDealStatus as contract}
				<div class="flex flex-col space-y-5 sm:flex-row justify-between items-center">
					<a
						href="/api/s3object/{contract.contractId}"
						target="_blank"
						class="p-3 my-5 text-xl text-white rounded-full bg-gray-600"
					>
						View Uploaded Contract
					</a>
					<p class="p-3 w-fit rounded-full bg-gray-600 text-white">
						User email: {contract.user?.email}
					</p>
					<a
						href="/user-profile/{contract.user?.id}"
						class="text-blue-400 underline p-3 w-fit rounded-full bg-gray-600"
					>
						User profile: {contract.user?.email}
					</a>
					{#if contract.user.profile.phoneNumber}
						<p class="p-3 w-fit rounded-full bg-gray-600 text-white">
							User phone: {contract.user?.profile.phoneNumber}
						</p>
					{/if}
					{#if contract.user?.profile.venmo}
						<p class="p-3 w-fit rounded-full bg-gray-600 text-white">
							User Venmo: {contract.user?.profile.venmo}
						</p>
					{/if}
				</div>
			{/each}
			<div class="flex flex-row justify-center items-center">
				<p class="p-3 mt-5 w-fit rounded-full bg-gray-600 text-white">
					Brand email: {currDeal.authUser.email}
				</p>
			</div>
		</div>
	{/each}
{:else}
	<p class="text-3xl text-red-500 text-center my-10">No finalized contracts pending payment</p>
{/if}
