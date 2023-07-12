<script>
	// @ts-nocheck

	let images = {
		'main-image': '',
		image1: '',
		image2: '',
		image3: '',
		image4: '',
		image5: '',
		image6: '',
		image7: '',
		image8: ''
	};

	let user = {
		name: '',
		sport: '',
		college: '',
		year: '',
		bio: '',
		image: ''
	};

	let quill;
	let editor;
	let pendingContents = null;

	export const snapshot../$types.js = {
		capture: () => {
			return user;
		},
		restore: (data) => {
			user = data;
			pendingContents = user.bio;
		}
	};

	const updateProfile = () => {
		// update the profile
		console.log(user);
	};

	import ImageCropper from './ImageCropper.svelte';

	let isModalOpen = false;
	let croppedImage = null;

	let currImage = null;

	//this code is ran when the clild compnent finishes cropping the image and returns a blob with the cropped image.
	$: if (croppedImage !== null && currImage !== null) {
		images[currImage] = croppedImage;
		console.log(images);
	}

	let buttons = ['image1'];

	const addNewButton = () => {
		if (buttons.length < 8) {
			const currButton = buttons[buttons.length - 1];
			if (images[currButton] === '') {
				return;
			}
			buttons = [...buttons, `image${buttons.length + 1}`];
		}
	};

	let squareInput = false;

	let Quill;
	import { onMount } from 'svelte';

	//variabe for quill to save the current state of the html content
	let htmlContent = '';


	onMount(async () => {
		if (typeof window !== 'undefined') {
			const module = await import('quill');
			Quill = module.default;

			quill = new Quill(editor, {
				theme: 'snow'
			});

			quill.on('text-change', function (delta, oldDelta, source) {
				user.bio = quill.getContents();
				htmlContent = quill.root.innerHTML;
				console.log(htmlContent);
			});

			// If we have contents that need to be set, set them now.
			if (pendingContents) {
				quill.setContents(pendingContents);
				pendingContents = null; // We've set the contents, so we can clear the pending contents.
			}
		}
	});
</script>

<!-- Include Quill's CSS on your page -->
<link href="https://cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet" />
<div
	class="mt-12 bg-gray-900 text-white flex flex-col items-center text-center justify-center space-y-8"
	style="min-height: calc(100vh - 48px);"
>
	<h2 class="text-2xl mt-10">Edit Profile</h2>
	<div
		class="profile-card flex flex-col bg-gray-800 shadow overflow-hidden mt-10 rounded-lg max-w-5xl mb-10 w-full p-6"
	>
		<form method="POST" on:submit|preventDefault={updateProfile} class="w-full">
			<!-- <button on:click={openModal}>Upload and Crop Image</button> -->

			<ImageCropper bind:croppedImage bind:square={squareInput} bind:open={isModalOpen} />

			<div class="mb-4">
				<label class="block text-gray-300 text-sm font-bold mb-2" for="image">
					Main Profile Picture
				</label>
				<p class="text-gray-500 text-xs mb-2">Please upload a profile picture.</p>
				<button
					class="{images['main-image'] !== ''
						? 'nah'
						: ''} text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
					on:click={() => {
						squareInput = true;
						isModalOpen = true;
						currImage = 'main-image';
					}}
					>Upload Image
				</button>
				{#if images['main-image'] !== ''}
					<h2 class="text-2xl">Main Image</h2>
					<img src={images['main-image']} alt="Profile example" class="w-1/2 mx-auto" />
					<button
						on:click={() => {
							images['main-image'] = '';
							isModalOpen = true;
							squareInput = true;
							currImage = 'main-image';
						}}>Change Image</button
					>
				{/if}
			</div>
			<div class="mb-4">
				<label class="block text-gray-300 text-sm font-bold mb-2" for="image">
					Additional Profile Images
				</label>
				<p class="text-gray-500 text-xs mb-2">Please upload a profile picture.</p>
				<div class="space-y-4 p-10">
					{#each buttons as button (button)}
						<button
							disabled={images[button] !== ''}
							class="{images[button] !== ''
								? 'nah'
								: ''} text-white w-full bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
							on:click={() => {
								isModalOpen = true;
								currImage = button;
							}}
							>Upload {button.charAt(0).toUpperCase() +
								button.slice(1, button.length - 1) +
								' ' +
								button.slice(button.length - 1)}</button
						>
						{#if images[button] !== ''}
							<h2 class="text-2xl">
								{button.charAt(0).toUpperCase() +
									button.slice(1, button.length - 1) +
									' ' +
									button.slice(button.length - 1)}
							</h2>
							<img src={images[button]} alt="Profile example" class="w-1/2 mx-auto" />
							<button
								on:click={() => {
									images[button] = '';
									isModalOpen = true;
									currImage = button;
								}}>Change Image</button
							>
						{/if}
					{/each}
					{#if buttons.length < 8}
						<button
							class="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300"
							on:click={addNewButton}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								class="h-5 w-5 inline-flex"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M12 4v16m8-8H4"
								/>
							</svg>
							Add
						</button>
					{/if}
				</div>
			</div>
			<div class="mb-4">
				<label class="block text-gray-300 text-sm font-bold mb-2" for="name"> Name </label>
				<p class="text-gray-500 text-xs mb-2">Please enter your full name.</p>
				<input
					class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					id="name"
					type="text"
					placeholder="John Doe"
					bind:value={user.name}
				/>
			</div>
			<div class="mb-4">
				<label class="block text-gray-300 text-sm font-bold mb-2" for="sport"> Sport </label>
				<p class="text-gray-500 text-xs mb-2">What is your primary sport?</p>
				<input
					class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					id="sport"
					type="text"
					placeholder="Basketball"
					bind:value={user.sport}
				/>
			</div>
			<div class="mb-4">
				<label class="block text-gray-300 text-sm font-bold mb-2" for="college"> College </label>
				<p class="text-gray-500 text-xs mb-2">Where did you go to college?</p>
				<input
					class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					id="college"
					type="text"
					placeholder="Harvard University"
					bind:value={user.college}
				/>
			</div>
			<div class="mb-4">
				<label class="block text-gray-300 text-sm font-bold mb-2" for="year"> Year </label>
				<p class="text-gray-500 text-xs mb-2">Which year did you graduate?</p>
				<input
					class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					id="year"
					type="text"
					placeholder="2018"
					bind:value={user.year}
				/>
			</div>
			<div class="mb-4">
				<label class="block text-gray-300 text-sm font-bold mb-2" for="bio"> Bio </label>
				<p class="text-gray-500 text-xs mb-2">Tell us a little about yourself.</p>
				<div
					id="bio"
					bind:this={editor}
					class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none bg-white focus:shadow-outline"
				>
					{user.bio}
				</div>
			</div>

			<div class="flex items-center justify-between">
				<button
					class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
					type="submit"
				>
					Update Profile
				</button>
			</div>
		</form>
	</div>
</div>

<style>
	.nah {
		display: none;
	}
</style>
