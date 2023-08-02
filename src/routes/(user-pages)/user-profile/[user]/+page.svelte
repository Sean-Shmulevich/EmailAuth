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
		goal: 'empty',
		industries: ['empty'],
		socialMedia: {},
		hometown: 'empty',
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
	//set the user data to the data from the database from load in +page.server.ts
	user = { ...user, ...data.currUserProfile };
	// console.log(user);
	user.name = data.name;

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

<div class="mt-[30px] lg:p-5 bg-gray-900 text-white flex flex-col items-center justify-center">
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
					class="bg-transparent text-gray-900 text-4xl font-semibold hover:text-gray-300 transition-colors duration-200"
					on:click={switchImage}
					disabled={transitioning}
				>
					&lt;
				</button>
			</div>

			<div class="absolute top-1/2 transform -translate-y-1/2 right-3">
				<button
					class="bg-transparent text-gray-900 text-4xl font-semibold hover:text-gray-300 transition-colors duration-200"
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
			<div class="text-5xl my-5 font-medium text-white leading-10">{user.name}</div>
			<div class="mt-5 flex-grow overflow-y-auto overflow-wrap break-word">
				<h4 class="text-lg leading-6 font-medium text-white">Biography</h4>
				<p class="mt-2 text-base text-gray-400">
					{@html user.bio}
				</p>
			</div>
			<div class="border border-white p-2 rounded-xl -mb-2 mt-5 flex flex-col">
				<div class="flex flex-row items-baseline pt-2 justify-start bottom-0">
					<h4 class="text-lg leading-6 mr-8 font-medium text-white">Industries of interest</h4>
					<p class="mt-2 text-base text-gray-400">
						{user.industries
							.map((industry) => industry.charAt(0).toUpperCase() + industry.slice(1))
							.join(', ')}
					</p>
				</div>
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
