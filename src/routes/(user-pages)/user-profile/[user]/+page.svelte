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
		sport: 'empty',
		college: 'empty',
		year: 'empty',
		bio: 'empty'
	};
	//set the user data to the data from the database from load in +page.server.ts
	user = { ...user, ...data.currUserProfile };

	//index keeps track of the current image in the slidedeck
	let index = 0;
	let images = [defaultImage];

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

<div class="mt-[30px] bg-gray-900 text-white flex flex-col items-center justify-center space-y-8">
	<div
		class="profile-card flex flex-col md:flex-row bg-gray-800 shadow rounded-lg max-w-7xl w-full p-6 overflow-hidden"
	>
		<div class="image w-3/4 md:w-[83%] relative">
			{#if update}
				{#if transitioning}
					<img
						src={currentImage}
						alt="Current image"
						class="object-cover h-full w-full rounded-lgx"
					/>
					<img src={nextImage} alt="Next image" class="object-cover h-full w-full rounded-lgx" />
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

		<div class="profile-text mt-5 md:mt-0 md:pl-6 w-full flex flex-col" style="height:inherit">
			<div class="text-5xl my-5 leading-6 font-medium text-white">{user.name}</div>
			<div class="mt-5 flex-grow overflow-y-auto overflow-wrap break-word">
				<h4 class="text-lg leading-6 font-medium text-white">Biography</h4>
				<p class="mt-2 text-base text-gray-400">
					{@html user.bio}
				</p>
			</div>
			<div class="flex flex-row items-center pt-2 justify-between mt-5 bottom-0">
				<div
					class="min-h-10 border rounded-full p-4 flex items-center text-sm leading-5 text-gray-400"
				>
					Sport: {user.sport}
				</div>
				<div
					class="border rounded-full p-4 flex items-center text-sm text-center leading-5 text-gray-400"
				>
					{user.college}
				</div>
				<div class="border p-4 rounded-full flex items-center text-sm leading-5 text-gray-400">
					Graduation: {user.year}
				</div>
			</div>
		</div>
	</div>
</div>

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
