<script>
	//TODO-animation
	// @ts-nocheck

	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';

	let Quill;
	let quill;
	// default image for profiles without any uploaded images yet.
	//TODO change default image
	let defaultImage =
		'https://arkansasrazorbacks.com/wp-content/uploads/2022/10/Ayden-Owens-Delerme-MTR-2022-23.jpg';

	export let data;
	let s3 = '/api/s3object';

	let user = {
		name: 'Profile empty',
		location: 'empty',
		industry: 'empty',
		size: 'empty',
		goals: 'empty',
		bio: 'empty'
	};
	let iconLinks = {
		Instagram: 'https://shmul.dev/assets/instagram.png',
		Twitter: 'https://shmul.dev/assets/twitter.png',
		Facebook: 'https://shmul.dev/assets/facebook.png',
		'Tik Tok': 'https://shmul.dev/assets/tiktok.png',
		Snapchat: 'https://shmul.dev/assets/snapchat.png',
		Linkedin: 'https://shmul.dev/assets/linkedin.png',
		Website: 'https://shmul.dev/assets/website.png'
	};
	// console.log(data.currUserProfile);
	//TODO: implement social media links

	//set the user data to the data from the database from load in +page.server.ts
	user = { ...user, ...data.currUserProfile };
	let loaded = false;

	onMount(async () => {
		if (typeof window !== 'undefined') {
			const module = await import('quill');
			Quill = module.default;
			quill = new Quill(document.createElement('div'));
		}
		if (data.currUserProfile) {
			user.goals = deltaToHtml(data.currUserProfile.goals, quill);
			user.bio = deltaToHtml(data.currUserProfile.bio, quill);
			loaded = true;
			user = user;
		}
	});

	function deltaToHtml(delta, quill) {
		// Set the Quill editor's contents to the Delta
		quill.setContents(JSON.parse(delta));

		// Return the editor's HTML
		return quill.root.innerHTML;
	}

	//index keeps track of the current image in the slidedeck
	let index = 1;
	let images = [defaultImage, defaultImage];

	//start from the first image with 4:3 aspect ratio

	for (let i = 0; i < data.objects.length && data.objects !== []; i++) {
		images[i] = `${s3 + '/' + encodeURIComponent(data.objects[i].id)}`;
	}

	//except edge case if there is no main image posted yet
	//then since the loop below starts from the second image in the objects array we need the first one as well
	// console.log(data.objects)
	// handle empty objects
	// if (data.objects !== [] ) {
	// 	//push the first image to the front of the array
	// 	images.unshift(`${s3 + '/' + encodeURIComponent(data.objects[0].id)}`);
	// }
	let currentImage = images[index];

	//this tries to make the animation right not working
</script>

<div class=" text-white mt-10 flex flex-col items-center">
	<div
		class="profile-card w-full flex flex-col md:flex-row bg-gray-800 shadow rounded-lg max-w-7xl p-6"
	>
		<div class="image w-3/4 md:min-w-[400px] md:w-[43%] relative">
			<img
				src={currentImage}
				alt="Current image"
				class="justify-center items-center object-cover h-full max-h-[90vh] w-full rounded-lg"
			/>
			<div class="absolute top-1/2 transform -translate-y-1/2 left-3">
				<button
					class="bg-transparent text-white text-4xl font-semibold hover:text-gray-300 transition-colors duration-200"
					on:click={() => {
						index--;
						if (index < 1) {
							index = images.length - 1;
						}
						currentImage = images[index];
					}}
				>
					&lt;
				</button>
			</div>
			{#if user.socialMediaLinks}
				<div
					data-sveltekit-preload-data="false"
					class="flex flex-row absolute -bottom-5 transform -translate-y-1/2 right-0 rounded-full bg-gray-400 py-1 bg-opacity-60 space-x-2 px-2"
				>
					{#if user.socialMediaLinks['Instagram']}
						<a href={user.socialMediaLinks['Instagram']} target="_blank">
							<img src={iconLinks.Instagram} width="40" height="40" alt="Instagram" />
						</a>
					{/if}

					{#if user.socialMediaLinks['Twitter']}
						<a href={user.socialMediaLinks['Twitter']} target="_blank">
							<img src={iconLinks.Twitter} width="40" height="40" alt="Twitter" />
						</a>
					{/if}

					{#if user.socialMediaLinks['Facebook']}
						<a href={user.socialMediaLinks['Facebook']} target="_blank">
							<img src={iconLinks.Facebook} width="40" height="40" alt="Facebook" />
						</a>
					{/if}

					{#if user.socialMediaLinks['Tik Tok']}
						<a href={user.socialMediaLinks['Tik Tok']} target="_blank">
							<img src={iconLinks['Tik Tok']} width="40" height="40" alt="Tik Tok" />
						</a>
					{/if}

					{#if user.socialMediaLinks['Snapchat']}
						<a href={user.socialMediaLinks['Snapchat']} target="_blank">
							<img src={iconLinks.Snapchat} width="40" height="40" alt="Snapchat" />
						</a>
					{/if}

					{#if user.socialMediaLinks['Linkedin']}
						<a href={user.socialMediaLinks['Linkedin']} target="_blank">
							<img src={iconLinks.Linkedin} width="40" height="40" alt="LinkedIn" />
						</a>
					{/if}

					{#if user.socialMediaLinks['Website']}
						<a href={user.socialMediaLinks['Website']} target="_blank">
							<img src={iconLinks.Website} width="40" height="40" alt="Website" />
						</a>
					{/if}
				</div>
			{/if}
			<div class="absolute top-1/2 transform -translate-y-1/2 right-3">
				<button
					class="bg-transparent text-white text-4xl font-semibold hover:text-gray-300 transition-colors duration-200"
					on:click={() => {
						index++;
						if (index >= images.length) {
							index = 1;
						}
						currentImage = images[index];
					}}
				>
					&gt;
				</button>
			</div>
		</div>

		<div class="profile-text mt-5 md:mt-0 md:pl-6 md:w-[57%] flex flex-col" style="height:inherit">
			<h2 class="text-6xl mb-2 -mt-4">{user.name}</h2>
			<div class="flex-grow mb-2 border border-red-100 rounded-xl block w-full h-fit p-5">
				<h4 class="text-lg leading-6 font-medium text-white">Biography</h4>
				{#if loaded}
					<p class="mt-2 text-base break-words text-gray-400">{@html user.bio}</p>
				{/if}
			</div>
			<div class="flex-grow mb-2 border border-red-100 rounded-xl block w-full h-fit p-5">
				<h4 class="text-lg leading-6 font-medium text-white">Company goals</h4>
				{#if loaded}
					<p class="mt-2 text-base break-words text-gray-400">{@html user.goals}</p>
				{/if}
			</div>

			<div class="text-sm leading-5 text-gray-400">
				<ul class="list-disc ml-4 text-lg">
					<li><span class="font-semibold">Location:</span> {user.location}</li>
					<li><span class="font-semibold">Industry:</span> {user.industry}</li>
					<li><span class="font-semibold">Size:</span> {user.size}</li>
				</ul>
			</div>
			<!-- <div class="overflow-y-auto overflow-wrap break-word">
			</div> -->
			<!-- <div class="flex flex-col mt-5">

			</div> -->
		</div>
	</div>

	<!-- <div class="w-full px-6 lg:px-0 max-w-7xl min-h-40 flex mb-8 mt-5 md:flex-row flex-col">
		<div class=" md:w-[100%] mx-10 w-full rounded-xl p-5 pl-8 border border-white mr-10">
			<div class="text-sm leading-5 text-gray-400">
				<ul class="list-disc ml-4 text-lg">
					<li><span class="font-semibold">Location:</span> {user.location}</li>
					<li><span class="font-semibold">Industry:</span> {user.industry}</li>
					<li><span class="font-semibold">Size:</span> {user.size}</li>
				</ul>
			</div>
		</div>
		<div class="md:w-[70%] w-full rounded-xl p-5 pl-8 border border-white">
			<div class="text-sm leading-5 text-gray-400">
				<ul class="list-disc ml-4 text-lg">
					<li><span class="font-semibold">Location:</span> {user.location}</li>
					<li><span class="font-semibold">Industry:</span> {user.industry}</li>
					<li><span class="font-semibold">Size:</span> {user.size}</li>
				</ul>
			</div>
		</div> -->
	<!-- </div> -->
</div>

<style>
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
		position: absolute;
		bottom: 1.5rem;
		right: 1.5rem;
	}

	.info-container ul {
		margin-top: 0.5rem;
		padding-left: 1rem;
	}

	.info-container li {
		margin-bottom: 0.5rem;
	}

	@media (max-width: 950px) {
		.profile-card {
			flex-direction: column;
			width: 90%;
		}
		.image {
			min-width: 100%;
		}
		.profile-text {
			margin-top: 20px;
			padding-left: 6px;
			width: 100%;
		}
	}
</style>
