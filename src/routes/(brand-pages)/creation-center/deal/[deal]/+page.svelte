<script>
	import { Button, Dropdown, DropdownItem, Chevron, Radio } from 'flowbite-svelte';
	export let data;
	export let form;
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	// console.log(data.userDeals);
	let genderTypes = ['All', 'Male', 'Female'];
	const sportTypes = [
		'All',
		'Baseball',
		'Basketball',
		'Bowling',
		'Cross country',
		'Fencing',
		'Field hockey',
		'Football',
		'Golf',
		'Gymnastics',
		'Ice hockey',
		'Lacrosse',
		'Rifle',
		'Rowing',
		'Skiing',
		'Soccer',
		'Softball',
		'Swimming & Diving',
		'Tennis',
		'Track & field (indoor)',
		'Track & field (outdoor)',
		'Volleyball (indoor)',
		'Volleyball (beach)',
		'Water polo',
		'Wrestling'
	];
	let pickedSport = 'All';
	let pickedGender = 'All';
	let open = false;
	let genderDropdownOpen = false;

	let currDeal = data.deal;
	if (currDeal.location === '') {
		currDeal.location = 'Virtual';
	}
	let dealImg = 'https://slimecars.com/cardplaceholder.png';
	if (data.dealImage) {
		dealImg = `/api/s3object/${data.dealImage.id}`;
	}
	let filteredUsers = data.interestedUsers;
	// console.log(currDeal.recommendedDeliverables['set']);
</script>

<!-- <p class="text-white">{JSON.stringify(data.dealImage)}</p> -->
<div class=" mb-52 mx-3 sm:mx-20">
	<div class="w-fit mx-auto bg-gray-800 rounded-xl mt-5 p-5 mb-10 pb-5">
		<h2 class="text-center text-3xl mb-2 text-white">{currDeal.title}</h2>
		<hr />
		<div class="flex flex-col md:flex-row">
			<img
				class="object-contain mt-5 rounded-2xl mx-auto sm:mx-[unset] h-[500px] w-full"
				src={dealImg}
				alt="deal main {data.dealImage}"
			/>
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
	</div>
	<div class="mx-20 mt-10">
		<h2 class="text-2xl text-white text-center">Completed Deal</h2>
		<hr class="mt-2" />
		{#each data.completed as user}
			<div
				class="my-5 text-white border border-white rounded-xl bg-gray-800 shadow-md p-4 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between"
			>
				<div>
					<h2 class="text-xl font-bold mb-2">{user.name}</h2>
					<a class="text-blue-500 underline" href="/user-profile/{user.id}">profile link</a>
				</div>
				<button
					on:click={() => {
						goto(`/creation-center/view-contract?deal=${currDeal.id}&user=${user.id}`);
					}}
					class="p-2 bg-blue-500 text-white rounded">View deal contract</button
				>
				<!-- TODO get rid of this here -->
			</div>
		{:else}
			<p class="mx-auto text-center text-2xl my-10 text-red-500">No approved users</p>
		{/each}
	</div>
	<div class="mx-20 mt-10">
		<h2 class="text-2xl text-white text-center">Contract finalized awaitng payment</h2>
		<hr class="mt-2" />
		{#each data.brandFinalized as user}
			<div
				class="my-5 text-white border border-white rounded-xl bg-gray-800 shadow-md p-4 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between"
			>
				<div>
					<h2 class="text-xl font-bold mb-2">{user.name}</h2>
					<a class="text-blue-500 underline" href="/user-profile/{user.id}">profile link</a>
				</div>
				<button
					on:click={() => {
						goto(`/creation-center/view-contract?deal=${currDeal.id}&user=${user.id}`);
					}}
					class="p-2 bg-blue-500 text-white rounded">View deal contract</button
				>
				<!-- TODO get rid of this here -->
			</div>
		{:else}
			<p class="mx-auto text-center text-2xl my-10 text-red-500">No approved users</p>
		{/each}
	</div>
	<div class="mx-20 mt-10">
		<h2 class="text-2xl text-white text-center">Chosen athletes</h2>
		<hr class="mt-2" />
		{#each data.confirmedUsers as user}
			<div
				class="my-5 text-white border border-white rounded-xl bg-gray-800 shadow-md p-4 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between"
			>
				<div>
					<h2 class="text-xl font-bold mb-2">{user.name}</h2>
					<a class="text-blue-500 underline" href="/user-profile/{user.id}">profile link</a>
				</div>
				<!-- TODO get rid of this here -->
			</div>
		{:else}
			<p class="mx-auto text-center text-2xl my-10 text-red-500">No approved users</p>
		{/each}
	</div>

	<!-- show a deal and interesed users-->
	<div class="mx-20 mt-10">
		<h2 class="text-2xl text-white text-center">Interested Athtletes</h2>
		<hr class="mt-2" />
		<div class="flex mt-4 items-center justify-around">
			<div>
				<Button class="border border-white "><Chevron>Filter Sport</Chevron></Button>
				<Dropdown
					bind:open
					placement="top"
					class=" bg-gray-700 w-64 h-32 overflow-y-scroll overflow-x-hidden text-black  text-left whitespace-nowrap text-sm"
				>
					{#each sportTypes as sport}
						<DropdownItem
							on:click={() => {
								open = false;
								pickedSport = sport;
								if (pickedSport !== 'All' && pickedGender !== 'All') {
									filteredUsers = data.interestedUsers.filter(
										(i) => i.profile.gender === pickedGender && i.profile.sport === pickedSport
									);
									filteredUsers = filteredUsers;
								} else if (pickedSport !== 'All') {
									filteredUsers = data.interestedUsers.filter(
										(i) => i.profile.sport === pickedSport
									);
									filteredUsers = filteredUsers;
								} else if (pickedGender !== 'All') {
									filteredUsers = data.interestedUsers.filter(
										(i) => i.profile.gender === pickedGender
									);
									filteredUsers = filteredUsers;
								} else {
									filteredUsers = data.interestedUsers;
								}
							}}
							class="text-white ml-2 mt-2"
							bind:group={sport}
							value={sport}>{sport}</DropdownItem
						>
					{/each}
					<div class="h-2 w-full" />
				</Dropdown>
				<p class="mx-5 text-white text-bold text-xl">Sport: {pickedSport}</p>
			</div>
			<div>
				<Button class="border border-white float-right "><Chevron>Filter Gender</Chevron></Button>
				<Dropdown
					bind:open={genderDropdownOpen}
					placement="top"
					class=" bg-gray-700 w-64 h-32 overflow-y-scroll overflow-x-hidden text-black  text-left whitespace-nowrap text-sm"
				>
					{#each genderTypes as gender}
						<DropdownItem
							on:click={() => {
								genderDropdownOpen = false;
								pickedGender = gender;
								if (pickedSport !== 'All' && pickedGender !== 'All') {
									filteredUsers = data.interestedUsers.filter(
										(i) => i.profile.gender === pickedGender && i.profile.sport === pickedSport
									);
									filteredUsers = filteredUsers;
								} else if (pickedSport !== 'All') {
									filteredUsers = data.interestedUsers.filter(
										(i) => i.profile.sport === pickedSport
									);
									filteredUsers = filteredUsers;
								} else if (pickedGender !== 'All') {
									filteredUsers = data.interestedUsers.filter(
										(i) => i.profile.gender === pickedGender
									);
									filteredUsers = filteredUsers;
								} else {
									filteredUsers = data.interestedUsers;
								}
							}}
							class="text-white ml-2 mt-2"
							bind:group={gender}
							value={gender}>{gender}</DropdownItem
						>
					{/each}
					<div class="h-2 w-full" />
				</Dropdown>
				<p class="mx-5 text-white text-bold text-xl">Gender: {pickedGender}</p>
			</div>
		</div>
		{#each filteredUsers as user}
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
</div>
