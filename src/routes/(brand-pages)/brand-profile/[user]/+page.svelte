<script>
	//TODO-animation
	// @ts-nocheck

	import { fade } from 'svelte/transition';
	import { afterUpdate } from 'svelte';

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
	console.log(data.currUserProfile);
	//TODO: implement social media links

	//set the user data to the data from the database from load in +page.server.ts
	user = { ...user, ...data.currUserProfile };

	//index keeps track of the current image in the slidedeck
	let index = 0;
	let images = [defaultImage];

	//start from the first image
	for (let i = 0; i < data.objects.length-1; i++) {
		images[i] = `${s3 + '/' + encodeURIComponent(data.objects[i+1].id)}`;
	}
	console.log(images);
	let currentImage = images[index];

	//this tries to make the animation right not working
</script>

<div class=" text-white mt-10 flex flex-col items-center">
	<div class="profile-card w-full flex flex-col md:flex-row bg-gray-800 shadow rounded-lg max-w-7xl p-6">
		<div class="image w-3/4 md:min-w-[400px] md:w-[43%] relative">
			<img
				src={currentImage}
				alt="Current image"
				class="justify-center items-center object-cover h-full  max-h-[90vh]  w-full rounded-lg"
			/>
			<div class="absolute top-1/2 transform -translate-y-1/2 left-3">
				
				<button
					class="bg-transparent text-white text-4xl font-semibold hover:text-gray-300 transition-colors duration-200"
					on:click={() => {
						index--;
						if (index < 0) {
							index = images.length - 1;
						}
						currentImage = images[index];
					}}
				>
					&lt;
				</button>
			</div>

			<div class="absolute top-1/2 transform -translate-y-1/2 right-3">
				<button
					class="bg-transparent text-white text-4xl font-semibold hover:text-gray-300 transition-colors duration-200"
					on:click={() => {
						index++;
						if (index >= images.length) {
							index = 0;
						}
						currentImage = images[index];
					}}
				>
					&gt;
				</button>
			</div>

			<div
				class="absolute bottom-3 flex justify-center w-full space-x-8"
				style="transform: translateX(-6px)"
			>
				{#each images as image, i (image)}
					<button
						class="h-2 w-2 bg-black rounded-full opacity-50 transform focus:outline-none {index ===
						i
							? 'scale-150 opacity-100'
							: ''}"
						on:click={() => (index = i)}
						disabled
					/>
				{/each}
			</div>
		</div>

		<div class="profile-text mt-5 md:mt-0 md:pl-6 md:w-[57%] flex flex-col" style="height:inherit">
			<h2 class="text-6xl mb-2 -mt-4">{user.name}</h2>
			<div class="flex-grow mb-2 border border-red-100 rounded-xl block w-full h-fit p-5">
				<h4 class="text-lg leading-6 font-medium text-white">Biography</h4>
				<p class="mt-2 text-base break-words text-gray-400">{@html user.bio}</p>
			</div>
			<div class="flex-grow mb-2 border border-red-100 rounded-xl block w-full h-fit p-5">
				<h4 class="text-lg leading-6 font-medium text-white">Company goals</h4>
				<p class="mt-2 text-base break-words text-gray-400">{@html user.goals}</p>
			</div>
			<!-- <div class="overflow-y-auto overflow-wrap break-word">
			</div> -->
			<!-- <div class="flex flex-col mt-5">

			</div> -->
		</div>
	</div>

	<div class="w-full px-6 lg:px-0 max-w-7xl min-h-40 flex mb-8 mt-5 md:flex-row flex-col">
		<div class=" md:w-[30%] w-full rounded-xl p-5 pl-8 border border-white mr-10">
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
		</div>
	</div>
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
