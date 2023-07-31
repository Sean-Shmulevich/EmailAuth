<script>
	export let data;
	export let form;
	import { enhance } from '$app/forms';
	// console.log(data.userDeals);

	let currDeal = data.deal;
	if (currDeal.location === '') {
		currDeal.location = 'Virtual';
	}
	let dealImg = '/api/s3object/1690047383938a750a7168ff2492899697beefcb7dc6e';
	if (data.dealImage) {
		dealImg = `/api/s3object/${data.dealImage.id}`;
	}
	// console.log(currDeal.recommendedDeliverables['set']);
</script>

<!-- <p class="text-white">{JSON.stringify(data.dealImage)}</p> -->
<div class="w-fit mx-auto bg-gray-800 rounded-xl mt-5 p-5 mb-10 pb-5 overflow-y-auto">
	<h2 class="text-center text-3xl mb-2 text-white">{currDeal.title}</h2>
	<hr />
	<div class="flex flex-col md:flex-row">
		<img
			class="mt-5 rounded-2xl mx-auto sm:mx-[unset] h-[500px] w-[400px]"
			src={dealImg}
			alt="deal main {data.dealImage}"
		/>
		<div class="text-white mt-5 w-full md:w-[25%] flex flex-col min-w-[300px]">
			<div class="border border-white p-5 text-lg grow rounded-xl">
				{#if !currDeal.isCampaign}
					<p>Event Type</p>
					<p class="mb-5">{currDeal.eventType}</p>
				{/if}
				<p>Sport Preference</p>
				<p class="mb-5">{currDeal.sportPreference}</p>
				<p>Gender Preference: {currDeal.genderPreference}</p>
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
</div>
<div class="mx-20 mt-10">
	<h2 class="text-2xl text-white text-center">User Confirmed</h2>
	<hr class="mt-2" />
	{#each data.readyUsers as user}
		<div
			class="my-5 text-white border border-white rounded-xl bg-gray-800 shadow-md p-4 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between"
		>
			<div>
				<h2 class="text-xl font-bold mb-2">{user.name}</h2>
				<a class="text-blue-500 underline" href="/user-profile/{user.id}">profile link</a>
			</div>
			<form class="" method="post" action="?/verify" use:enhance>
				<input id="email" name="email" hidden value={user.email} />

				<button type="submit" class="p-2 bg-blue-500 text-white rounded"
					>View/Edit deal contract</button
				>
			</form>
		</div>
	{:else}
		<p class="mx-auto text-center text-2xl my-10 text-red-500">No confirmed users yet</p>
	{/each}
</div>
<div class="mx-20 mt-10">
	<h2 class="text-2xl text-white text-center">Waiting for confirmation from user</h2>
	<hr class="mt-2" />
	{#each data.confirmedUsers as user}
		<div
			class="my-5 text-white border border-white rounded-xl bg-gray-800 shadow-md p-4 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between"
		>
			<div>
				<h2 class="text-xl font-bold mb-2">{user.name}</h2>
				<a class="text-blue-500 underline" href="/user-profile/{user.id}">profile link</a>
			</div>
			<form class="" method="post" action="?/verify" use:enhance>
				<input id="email" name="email" hidden value={user.email} />

				<button type="submit" class="p-2 bg-blue-500 text-white rounded"
					>View/Edit deal contract</button
				>
			</form>
		</div>
	{:else}
		<p class="mx-auto text-center text-2xl my-10 text-red-500">No approved users</p>
	{/each}
</div>

<!-- show a deal and interesed users-->
<div class="mx-20 mt-10">
	<h2 class="text-2xl text-white text-center">Interested Athtletes</h2>
	<hr class="mt-2" />
	{#each data.interestedUsers as user}
		<div
			class="my-5 text-white border border-white rounded-xl bg-gray-800 shadow-md p-4 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between"
		>
			<div>
				<h2 class="text-xl font-bold mb-2">{user.name}</h2>
				<a class="text-blue-500 underline" href="/user-profile/{user.id}">profile link</a>
			</div>
			<form method="post" action="?/pickUser" use:enhance>
				<input id="userId" name="userId" hidden value={user.id} />
				<input id="user-email" name="user-email" hidden value={user.email} />

				<button type="submit" class="p-2 bg-blue-500 text-white rounded">
					Work with this athlete</button
				>
			</form>
		</div>
	{:else}
		<p class="mx-auto text-center text-2xl my-10 text-red-500">No interested athletes</p>
	{/each}
</div>
