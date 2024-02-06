<script>
	import { Button, Dropdown, DropdownItem, Chevron, Radio } from 'flowbite-svelte';
	export let data;
	export let form;
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	let statusTypes = ['All','Interested','Confirmed']
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
	let pickedStatus = 'All'
	let pickedSport = 'All';
	let pickedGender = 'All';
	let open = false;
	let genderDropdownOpen = false;
	let statusDropdownOpen = false;

	let currDeal = data.deal;
	if (currDeal.location === '') {
		currDeal.location = 'Virtual';
	}
	let dealImg = 'https://slimecars.com/cardplaceholder.png';
	if (data.dealImage) {
		dealImg = `/api/s3object/${data.dealImage.id}`;
	}

	//let filteredUsers = data.interestedUsers;
	let filteredUsers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18, 19,20]
</script>
<div class="my-5 mx-5 md:mx-11 flex flex-col md:flex-row justify-between items-center">
	<h1 class="text-white text-4xl uppercase font-bold mb-3">Athletes</h1>
	
	<div class="flex">
		<div class="mx-1">
			<Button class="border border-white float-right "><Chevron>Status: {pickedStatus}</Chevron></Button>
			<Dropdown
				bind:open={genderDropdownOpen}
				placement="bottom"
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
		</div>
		<div class="mx-1">
			<Button class="border border-white float-right "><Chevron>Gender: {pickedGender}</Chevron></Button>
			<Dropdown
				bind:open={genderDropdownOpen}
				placement="bottom"
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
		</div>
		<div class="mx-1">
			<Button class="border border-white "><Chevron>Sport: {pickedSport}</Chevron></Button>
			<Dropdown
			bind:open
			placement="bottom"
			class=" bg-gray-700 w-64 h-32 overflow-y-scroll  text-black whitespace-nowrap text-sm z-20"
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
		</Dropdown></div>
	</div>
</div>
<div class="m-10 grid grid-cols-2 md:grid-cols-3  xl:grid-cols-4 gap-10">
	{#each filteredUsers as user}
			<div class = "border border-white rounded-xl overflow-hidden w-auto p-3 flex flex-col">
				<div class="relative">
					<!-- <h1 class="absolute text-yellow-300 font-bold uppercase border-yellow-300 border-solid border-4 rounded-xl right-0 top-0 m-2 p-1">Interested</h1> -->
					<h1 class="absolute text-green-500 font-bold uppercase border-green-500 border-solid border-4 rounded-xl right-0 top-0 m-2 p-1">Confirmed</h1>
					<img class="w-[100%] rounded-xl border" 
					src="https://media.licdn.com/dms/image/D5603AQFHdxROudPQqA/profile-displayphoto-shrink_400_400/0/1706024650924?e=1712793600&v=beta&t=Rt19rMUDfsVYoEGU_TkrRo_6kmGFDm1V54n9hYb7IjQ"
					/>
					
				</div>
				<div class="mx-2 my-5">
					<h1 class="text-white font-bold uppercase text-2xl mb-1">Alex</h1>
					<h1 class="text-gray-400 text-xs uppercase mb-1">University of Arkansas</h1>
					<h1 class="text-gray-400 text-xs uppercase  mb-1">Soccer</h1>
				</div>
				<div class="w-[100%] rounded-md h-12 flex">
					<button class="w-[100%] rounded-md bg-green-500 h-12 text-white font-bold">
						<a class="text-white font-bold" href="/user-profile/{user.id}">View Profile</a>
					</button>

					<!-- {#if data.completed.includes(user) || data.brandFinalized.includes(user)}
					<button 
					on:click={() => {
						goto(`/creation-center/view-contract?deal=${currDeal.id}&user=${user.id}`);
					}}
					class="ml-2 w-[100%] bg-blue-500 text-white rounded capitalize font-bold">View contract</button>
					{/if} -->

				</div>
			</div>
		{:else}
			<p class="mx-auto text-center text-2xl my-10 text-red-500">No interested athletes</p>
		{/each}
</div>
