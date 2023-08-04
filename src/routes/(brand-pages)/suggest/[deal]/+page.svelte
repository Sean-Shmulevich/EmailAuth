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
	for (let i = 0; data.images && data.images[1] && i < data.images[1].length; i++) {
		let imgNum = data.images[1][i].image_number;
		images[1][imgNum] = `${s3 + '/' + encodeURIComponent(data.images[1][i].id)}`;
	}
	let iconLinks = {
		Instagram: 'https://shmul.dev/assets/instagram.png',
		Twitter: 'https://shmul.dev/assets/twitter.png',
		Facebook: 'https://shmul.dev/assets/facebook.png',
		'Tik Tok': 'https://shmul.dev/assets/tiktok.png',
		Snapchat: 'https://shmul.dev/assets/snapchat.png',
		Linkedin: 'https://shmul.dev/assets/linkedin.png',
		Website: 'https://shmul.dev/assets/website.png'
	};
	// let update = false;
	// $: {
	// 	update = true;
	// 	afterUpdate(() => {
	// 		update = false;
	// 	});
	// }
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
	<a
		class="p-2 w-full mx-auto bg-yellow-500 rounded-full"
		href="/creation-center/deal/{data.dealId}">See interest on your deal</a
	>
</div>
{#if data.matchingProfiles !== undefined}
	{#each users as user, i}
		<div class="bg-gray-900 my-5 text-white flex flex-col items-center justify-center space-y-8">
			<div
				class="profile-card flex flex-col md:flex-row bg-gray-800 shadow rounded-lg max-w-7xl w-full p-6 overflow-hidden"
			>
				<div class="image w-3/4 md:w-[83%] relative">
					{#if i === 0}
						<img
							src={images[i][index0]}
							alt="Next"
							class="object-cover h-full w-full rounded-lgx"
						/>
					{/if}
					{#if i === 1}
						<img
							src={images[i][index1]}
							alt="Next"
							class="object-cover h-full w-full rounded-lgx"
						/>
					{/if}

					{#if user.socialMedia}
						<div
							data-sveltekit-preload-data="false"
							class="flex flex-row absolute -bottom-5 transform -translate-y-1/2 right-0 rounded-full bg-gray-400 py-1 bg-opacity-60 space-x-2 px-2"
						>
							{#if user.socialMedia['Instagram']}
								<a href={user.socialMedia['Instagram']} target="_blank">
									<img src={iconLinks.Instagram} width="40" height="40" alt="Instagram" />
								</a>
							{/if}

							{#if user.socialMedia['Twitter']}
								<a href={user.socialMedia['Twitter']} target="_blank">
									<img src={iconLinks.Twitter} width="40" height="40" alt="Twitter" />
								</a>
							{/if}

							{#if user.socialMedia['Facebook']}
								<a href={user.socialMedia['Facebook']} target="_blank">
									<img src={iconLinks.Facebook} width="40" height="40" alt="Facebook" />
								</a>
							{/if}

							{#if user.socialMedia['Tik Tok']}
								<a href={user.socialMedia['Tik Tok']} target="_blank">
									<img src={iconLinks['Tik Tok']} width="40" height="40" alt="Tik Tok" />
								</a>
							{/if}

							{#if user.socialMedia['Snapchat']}
								<a href={user.socialMedia['Snapchat']} target="_blank">
									<img src={iconLinks.Snapchat} width="40" height="40" alt="Snapchat" />
								</a>
							{/if}

							{#if user.socialMedia['Linkedin']}
								<a href={user.socialMedia['Linkedin']} target="_blank">
									<img src={iconLinks.Linkedin} width="40" height="40" alt="LinkedIn" />
								</a>
							{/if}

							{#if user.socialMedia['Website']}
								<a href={user.socialMedia['Website']} target="_blank">
									<img src={iconLinks.Website} width="40" height="40" alt="Website" />
								</a>
							{/if}
						</div>
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

				<div class="profile-text mt-5 md:mt-0 md:pl-6 w-full flex flex-col" style="height:inherit">
					<div class="text-5xl my-5 font-medium text-white leading-10">{user.name}</div>
					<div class="mt-5 flex-grow overflow-y-auto overflow-wrap break-word">
						<h4 class="text-lg leading-6 font-medium text-white">Biography</h4>
						<p class="mt-2 text-base text-gray-400">
							{@html user.bio}
						</p>
					</div>
					<div class="border border-white p-2 rounded-xl -mb-2 mt-5 flex flex-col">
						{#if user.industries.length !== 0}
							<div class="flex flex-row items-baseline pt-2 justify-start bottom-0">
								<h4 class="text-lg leading-6 mr-8 font-medium text-white">
									Industries of interest
								</h4>
								<p class="mt-2 text-base text-gray-400">
									{user.industries
										.map((industry) => industry.charAt(0).toUpperCase() + industry.slice(1))
										.join(', ')}
								</p>
							</div>
						{/if}
						<div class="flex flex-row items-baseline pt-2 mb-2 justify-start bottom-0">
							<h4 class="text-lg leading-6 mr-8 font-medium text-white">#1 Goal of NIL</h4>
							<p class="mt-2 text-base text-gray-400">
								{#if user.goal === null}
									empty
								{:else}
									{user.goal}
								{/if}
							</p>
						</div>
					</div>
					<div
						class="flex flex-col sm:flex-row items-start space-y-2 sm:space-y-0 sm:items-center pt-2 justify-start space-x-2 mt-5 bottom-0"
					>
						<div
							class="border p-2 rounded-full flex items-center text-xs ml-[9px] sm:ml-0 sm:text-sm text-gray-400"
						>
							Sport: {user.sport}
						</div>
						<div class="border p-2 rounded-full flex items-center text-xs sm:text-sm text-gray-400">
							{user.college}
						</div>
						<div class="border p-2 rounded-full flex items-center text-xs sm:text-sm text-gray-400">
							Graduation: {user.year}
						</div>
						<div class="border p-2 rounded-full flex items-center text-xs sm:text-sm text-gray-400">
							Hometown: {user.hometown}
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
{:else}
	<p class="text-center text-red-500 text-3xl mt-20">No athletes found</p>
{/if}

<style>
	.centerAll {
		position: absolute;
		left: 50%;
		top: 50%;
		-webkit-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
	}
	.hidden {
		opacity: 0;
		transition: opacity 0.5s ease-in-out;
		position: absolute;
		top: 0;
	}

	.show {
		opacity: 1;
	}

	.info-container {
		border-top: 1px solid gray;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.info-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		font-size: 1.25rem;
		border-right: 1px solid gray;
		padding: 0 1rem;
		flex-grow: 1;
		flex-basis: 0;
	}

	.info-item:last-child {
		border-right: none;
	}

	.info-item svg {
		height: 32px;
		width: 32px;
		margin-top: 8px;
		margin-bottom: 3px;
	}

	@media (max-width: 950px) {
		.profile-card {
			flex-direction: column;
			width: 80%;
		}
		.image {
			width: 100%;
		}
		.profile-text {
			margin-top: 0px;
			padding-left: 6px;
			width: 100%;
		}
	}
</style>
