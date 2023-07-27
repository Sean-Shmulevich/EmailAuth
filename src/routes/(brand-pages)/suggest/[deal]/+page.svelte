<script>
	import { afterUpdate } from 'svelte';
	export let data;
	// console.log(data.images);
	let user1;
	let user2;
	let suggestedUsers;
	let defaultImage =
		'https://arkansasrazorbacks.com/wp-content/uploads/2022/10/Ayden-Owens-Delerme-MTR-2022-23.jpg';

	let s3 = '/api/s3object';

	let users = [];
	//set the user data to the data from the database from load in +page.server.ts
	if (data && data.matchingProfiles) {
		user1 = data.matchingProfiles[0];
		users[0] = { ...users[0], ...user1 };
		// console.log(data.matchingProfiles);
		if (data.matchingProfiles.length > 1) {
			user2 = data.matchingProfiles[1];
			users[1] = { ...users[1], ...user2 };
		}
		suggestedUsers = data.matchingProfiles;
	}
	// console.log(users);
	let index0 = 0;
	let index1 = 0;
	let images = [[], []];
	for (let i = 0; data.images && i < data.images[0].length; i++) {
		let imgNum = data.images[0][i].image_number;
		images[0][imgNum] = `${s3 + '/' + encodeURIComponent(data.images[0][i].id)}`;
	}
	for (let i = 0; data.images[1] && i < data.images[1].length; i++) {
		let imgNum = data.images[1][i].image_number;
		images[1][imgNum] = `${s3 + '/' + encodeURIComponent(data.images[1][i].id)}`;
	}

	let update = false;
	$: {
		update = true;
		afterUpdate(() => {
			update = false;
		});
	}
	// 	model Profile {
	//   user_id   String    @id
	//   name      String
	//   sport     String
	//   college   String
	//   year      String
	//   bio       String
	//   auth_user AuthUser? @relation(fields: [user_id], references: [id], onDelete: Cascade)

	//   @@map("profile")
	// }
</script>

<!-- Show the athlete reccomendations and options to approve -->
<!-- just dump their full profiles on this page basically  -->
<!-- post request must contain email and userId -->
<h2 class="text-xl text-center text-white mt-5 mb-5">
	Your deal has been launched pick one of our recommended athletes or wait for your deal to generate
	interest
</h2>
<h2 class="text-3xl text-center text-white mt-5 mb-5">Suggested Athletes</h2>
<div class="w-full text-center">
	<a class="p-2 w-full mx-auto bg-red-500 rounded-full" href="/creation-center"
		>Go back to creation center</a
	>
</div>
{#each users as user, i}
	<div class="bg-gray-900 my-5 text-white flex flex-col items-center justify-center space-y-8">
		<div
			class="profile-card flex flex-col md:flex-row bg-gray-800 shadow rounded-lg max-w-7xl w-full p-6 overflow-hidden"
		>
			<div class="image w-3/4 md:w-[43%] mx-auto md:mx-0 relative">
				{#if i === 0}
					<img src={images[i][index0]} alt="Next" class="object-cover h-full w-full rounded-lgx" />
				{/if}
				{#if i === 1}
					<img src={images[i][index1]} alt="Next" class="object-cover h-full w-full rounded-lgx" />
				{/if}

				<div class="absolute top-1/2 transform -translate-y-1/2 left-3">
					<button
						class="bg-transparent text-white text-4xl font-semibold hover:text-gray-300 transition-colors duration-200"
						on:click={() => {
							if (i === 0 && index0 > 0) {
								index0--;
							}
							if (i === 1 && index1 > 0) {
								index1--;
							}
						}}
					>
						&lt;
					</button>
				</div>

				<div class="absolute top-1/2 transform -translate-y-1/2 right-3">
					<button
						class="bg-transparent text-white text-4xl font-semibold hover:text-gray-300 transition-colors duration-200"
						on:click={() => {
							if (i === 0 && index0 < images[i].length - 1) {
								index0++;
							}
							if (i === 1 && index1 < images[i].length - 1) {
								index1++;
							}
						}}
					>
						&gt;
					</button>
				</div>
			</div>

			<div
				class="profile-text mt-5 md:mt-0 md:pl-6 w-full md:w-1/2 flex flex-col"
				style="height:inherit"
			>
				<div class="text-5xl my-5 leading-6 font-medium text-white">{data.names[i]}</div>
				<div class="mt-5 flex-grow overflow-y-auto overflow-wrap break-word">
					<h4 class="text-lg leading-6 font-medium text-white">Biography</h4>
					<p class="mt-2 text-base text-gray-400">
						{@html user.bio}
					</p>
				</div>
				<div class="flex flex-row items-center justify-between mt-5 bottom-0 info-container">
					<div class="flex items-center text-sm leading-5 text-gray-400 info-item">
						{user.sport}
					</div>
					<div class="flex items-center text-sm text-center leading-5 text-gray-400 info-item">
						{user.college}
					</div>
					<div class="flex items-center text-sm leading-5 text-gray-400 info-item">
						{user.year}
					</div>
				</div>
			</div>
		</div>
	</div>
	<form class="mx-auto text-center mb-5" method="POST" action="?/pickUser">
		<input type="hidden" name="userId" value={user.user_id} />
		<button class="text-center rounded-full p-2 bg-green-400" type="submit"
			>Work with this athlete</button
		>
	</form>
{/each}
