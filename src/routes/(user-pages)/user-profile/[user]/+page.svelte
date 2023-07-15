<script>
	//TODO-animation
	// @ts-nocheck

	import { fade } from 'svelte/transition';
	import { afterUpdate } from 'svelte';

	// default image for profiles without any uploaded images yet.
	//TODO change default image
	let defaultImage = "https://arkansasrazorbacks.com/wp-content/uploads/2022/10/Ayden-Owens-Delerme-MTR-2022-23.jpg";

	export let data;
	let s3 = '/api/s3object';

	let user = {
		name: 'Profile empty',
		sport: 'empty',
		college: 'empty',
		year: 'empty',
		bio: 'empty',
	};
	//set the user data to the data from the database from load in +page.server.ts
	user = { ...user, ...data.currUserProfile };

	//index keeps track of the current image in the slidedeck
	let index = 0;
	let images = [ defaultImage ];

	for (let i = 0; i < data.objects.length; i++) {
		let imgNum = data.objects[i].image_number;
		images[imgNum] = `${s3 + '/' + encodeURIComponent(data.objects[i].id)}`;
	}

	let currentImage = images[index];
	let nextImage = null;
	let transitioning = false;

	const transitionDuration = 500;
	const transitionDelay = 100;

	const switchImage = () => {
		if (transitioning) return;

		nextImage = images[(index + 1) % images.length];
		index = (index + 1) % images.length;

		transitioning = true;

		setTimeout(() => {
			currentImage = nextImage;
			nextImage = null;
		}, transitionDuration);

		setTimeout(() => {
			transitioning = false;
		}, transitionDuration + transitionDelay);
	};

	//this tries to make the animation right not working

	let update = false;
	$: {
		update = true;
		afterUpdate(() => {
			update = false;
		});
	}
</script>

<div
	class="bg-gray-900 text-white flex flex-col items-center justify-center space-y-8"
	style="min-height: 100vh;"
>
	<div
		class="profile-card flex flex-col md:flex-row bg-gray-800 shadow rounded-lg max-w-7xl w-full p-6 overflow-hidden"
	>
		<div class="image w-3/4 md:w-[43%] relative">
			{#if update}
				{#if transitioning}
					<img
						src={currentImage}
						alt="Current image"
						class="object-cover h-full w-full rounded-lgx"
					/>
					<img
						src={nextImage}
						alt="Next image"
						class="object-cover h-full w-full rounded-lgx"
					/>
				{:else}
					<img
						src={currentImage}
						alt="Current image"
						class="object-cover h-full w-full rounded-lgx"
					/>
				{/if}
			{:else}
				<img
					src={currentImage}
					alt="Current image"
					class="object-cover h-full w-full rounded-lgx"
				/>
			{/if}

			<div class="absolute top-1/2 transform -translate-y-1/2 left-3">
				<button
					class="bg-transparent text-white text-4xl font-semibold hover:text-gray-300 transition-colors duration-200"
					on:click={switchImage}
					disabled={transitioning}
				>
					&lt;
				</button>
			</div>

			<div class="absolute top-1/2 transform -translate-y-1/2 right-3">
				<button
					class="bg-transparent text-white text-4xl font-semibold hover:text-gray-300 transition-colors duration-200"
					on:click={switchImage}
					disabled={transitioning}
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

		<div
			class="profile-text mt-5 md:mt-0 md:pl-6 w-full md:w-1/2 flex flex-col"
			style="height:inherit"
		>
			<div class="text-5xl my-5 leading-6 font-medium text-white">{user.name}</div>
			<div class="mt-5 flex-grow overflow-y-auto overflow-wrap break-word">
				<h4 class="text-lg leading-6 font-medium text-white">Biography</h4>
				<p class="mt-2 text-base text-gray-400">
					{@html user.bio}
				</p>
			</div>
			<div class="flex flex-row items-center justify-between mt-5 bottom-0 info-container">
				<div class="flex items-center text-sm leading-5 text-gray-400 info-item">
					<svg class="flex-shrink-0 mr-1.5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
						<path
							fill-rule="evenodd"
							d="M13 7H7v6h6V7zM5 5h10a1 1 0 011 1v8a1 1 0 01-1 1H5a1 1 0 01-1-1V6a1 1 0 011-1zm1 2a1 1 0 00-1 1v6a1 1 0 001 1h8a1 1 0 001-1V8a1 1 0 00-1-1H6zm2 1a1 1 0 011-1h2a1 1 0 110 2H9v1h1.5a1 1 0 110 2H9v1a1 1 0 11-2 0v-1H6.5a1 1 0 110-2H8v-1H7.5a1 1 0 010-2H9V9z"
							clip-rule="evenodd"
						/>
					</svg>
					{user.sport}
				</div>
				<div class="flex items-center text-sm text-center leading-5 text-gray-400 info-item">
					<svg class="flex-shrink-0 mr-1.5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
						<path
							fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 00-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 10.586V6z"
							clip-rule="evenodd"
						/>
					</svg>
					{user.college}
				</div>
				<div class="flex items-center text-sm leading-5 text-gray-400 info-item">
					<svg class="flex-shrink-0 mr-1.5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
						<path
							fill-rule="evenodd"
							d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 00-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 10.586V6z"
							clip-rule="evenodd"
						/>
					</svg>
					{user.year}
				</div>
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
