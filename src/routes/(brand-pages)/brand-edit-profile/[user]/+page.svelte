<script>
	//TODO - add text limits to the textboxes
	//TODO - file.name is not coming through
	//	its probably becauase of imagecropper.svelte or canvasUtils.js
	//check type of input and make sure it is correct
	// @ts-nocheck
	import ImageCropper from './ImageCropper.svelte';
	import { enhance } from '$app/forms';
	export let data;
	export let form;
	import Delta from 'quill-delta';
	import { onMount } from 'svelte';

	let presignUrl = '/api/presign';
	let s3 = '/api/s3object';

	//dynamically load quill on mount
	let quill;
	let editor;
	let Quill;

	let buttons = [];
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
		name: 'Profile empty',
		location: 'empty',
		industry: 'empty',
		size: 'empty',
		goals: 'empty',
		bio: 'empty'
	};


	// If we don't have the editor yet, we'll save the contents here.
	let pendingContents = null;

	// upload window open or closed 
	let isModalOpen = false;
	//Image after cropping
	let croppedImage = null;
	//basically a parameter to the ImageCropper.svelte component to change the crop aspect ratio and other associated values
	let squareInput = false;

	//the current image being modified in the images object
	let currImage = null;

	//variabe for quill to save the current state of the html content
	let deltaContent = '';


	onMount(async () => {
		if (typeof window !== 'undefined') {
			//import quill
			const module = await import('quill');
			Quill = module.default;

			//set options for quill editor
			quill = new Quill(editor, {
				theme: 'snow'
			});

			// If we have pending contents, set them now.
			quill.on('text-change', function (delta, oldDelta, source) {
				//keep track of user.bio HTML so it can be sent to the db as part of the user object
				user.bio = quill.root.innerHTML;
				//keep track of user.bio delta so it can be sent with quill.setContents(deltaContent)
				deltaContent = quill.getContents();
				// console.log(user.bio);
			});

			//a user profile already exists i.e. the page.server.js found an existing user profile
			if (data.currUserProfile) {
				// console.log(data.currUserProfile);
				//set the user data fields from the fetched data of the user profile from the db
				user = { ...user, ...data.currUserProfile };

				//get the bio html from the db convert it to delta and set the quill editor
				deltaContent = htmlToDelta(data.currUserProfile.bio);
				deltaContent = deltaContent;
				quill.setContents(deltaContent);
			}

			//persist the bio
			// If we have contents that need to be set, set them now.
			if (pendingContents) {
				quill.setContents(pendingContents);
				pendingContents = null; // We've set the contents, so we can clear the pending contents.
			}
		}
	});

	// restore when somebody navigates away from the page 
	export const snapshot = {
		capture: () => {
			return { user, deltaContent };
		},
		restore: (data) => {
			user = data.user;
			//load in delta content from the snapshot
			pendingContents = data.deltaContent;
		}
	};

	//load in the images from the db
	// console.log(data.objects);
	for (let i = 0; i < data.objects.length; i++) {
		let imgNum = data.objects[i].image_number;

		

		// get urls from aws and load them into the images array
		if (imgNum === 0) {
			images['main-image'] = `${s3 + '/' + encodeURIComponent(data.objects[i].id)}`;
		} else if (imgNum <= 8) {
			images[`image${imgNum}`] = `${s3 + '/' + encodeURIComponent(data.objects[i].id)}`;
			//the first one is already in the buttons list
			buttons.push(`image${imgNum}`);
		}
		// console.log(buttons);
	}

	//this code is ran when the clild compnent finishes cropping the image and returns a blob with the cropped image.
	$: if (croppedImage !== null && currImage !== null) {
		//create a temporary blob object in the browser so the crop preview can be displayed
		images[currImage] = URL.createObjectURL(croppedImage);
		// console.log(images);
	}

	// Show the 'uploaded message' or the 'forgot to input message' for 3 seconds
	let showMessage = true;

	$: if (form?.message) {
		setTimeout(() => {
			showMessage = false;
		}, 3000);
		showMessage = true;
	}

	// Convert HTML to Delta helper function
	function htmlToDelta(html) {
		const quill = new Quill(document.createElement('pre'));
		const clipboard = quill.getModule('clipboard');

		// Set the HTML content to the clipboard module
		clipboard.container.innerHTML = html;

		// Get the delta representation of the HTML content
		const delta = clipboard.convert();

		return delta;
	}

	// $: if (form && form.user) {
	// 	user = { ...user, ...form.user };
	// }

	//add new ui button
	const addNewButton = () => {
		if (buttons.length < 8) {
			const currButton = buttons[buttons.length - 1];
			if (images[currButton] === '' || images[currButton] === undefined) {
				return;
			}
			buttons = [...buttons, `image${buttons.length + 1}`];
		}
	};

	//listen to submit image dispatch from child component
	//upload the image only when submit is pressed
	function handleSubmit(event) {
		upload(croppedImage);
		// console.log("run");
		images = { ...images };
		croppedImage = null;
	}

	//upload the file to aws s3	
	async function upload(file) {
		// Get presigned POST URL and form fields
		let { url, fields } = await fetch(`${presignUrl}?fileType=${file.type}`)
			.then((response) => response.json())
			.catch((error) => {
				console.log(error);
				return false;
			});

		// Build a form for the request body
		let form = new FormData();
		Object.keys(fields).forEach((key) => form.append(key, fields[key]));
		form.append('file', file);
		form.append('Content-Type', file.type);

		// Send the POST request
		try {
			await fetch(url, { method: 'POST', body: form });
			images = { ...images };
		} catch (error) {
			console.log(error);
			return false;
		}

		// Save the document in the db using the api
		form = new FormData();
		form.append('objectId', fields.key); // fields.key is same as id
		form.append('fileName', file.name);
		form.append('fileSize', file.size);
		form.append('fileType', file.type);

		//!!!
		//Turn index into a key arry and find the index of the current Image when uploaded
		const keys = Object.keys(images); // convert keys to an array
		const index = keys.indexOf(currImage); // find index of 'age'
		form.append('position', index);
		try {
			await fetch(s3 + '/' + encodeURIComponent(fields.key), { method: 'POST', body: form });
			images = { ...images };
		} catch (error) {
			console.log(error);
			return false;
		}

		return fields.key;
	}
</script>

<!-- Include Quill's CSS on your page -->
<link href="https://cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet" />
<div class="bg-gray-900 text-white flex flex-col items-center text-center justify-center space-y-8">
	<h2 class="text-2xl mt-10">Edit Profile</h2>
	<div
		class="profile-card flex flex-col bg-gray-800 shadow overflow-hidden mt-10 rounded-lg max-w-5xl mb-10 w-full p-6"
	>
		<form
			method="POST"
			action="?/update"
			use:enhance={() => {
				return async ({ update }) => {
					await update({ reset: false });
				};
			}}
			class="w-full"
		>
			<!-- <button on:click={openModal}>Upload and Crop Image</button> -->

			<ImageCropper
				on:cropSubmit={handleSubmit}
				bind:croppedImage
				bind:square={squareInput}
				bind:open={isModalOpen}
			/>

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
							//!!!
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
				<label class="block text-gray-300 text-sm font-bold mb-2" for="sport">Company Size</label>
				<p class="text-gray-500 text-xs mb-2">What is your companies approximate size</p>
				<input
					class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					id="size"
					name="size"
					type="text"
					placeholder="1-10"
					bind:value={user.size}
				/>
			</div>


			<div class="mb-4">
				<label class="block text-gray-300 text-sm font-bold mb-2" for="bio"> Bio </label>
				<p class="text-gray-500 text-xs mb-2">Tell us a little about yourself.</p>
				<!-- JANKY way of getting the user.bio into form data -->
				<input
					class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					style="display: none;"
					name="bio"
					id="bio"
					type="text"
					bind:value={user.bio}
				/>
				<div
					bind:this={editor}
					class="shadow appearance-none border z-0 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none bg-white focus:shadow-outline"
				>
					{deltaContent}
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
		{#if form?.message && showMessage}
			<p class="error">{form.message}</p>
		{/if}
	</div>
</div>

<style>
	.nah {
		display: none;
	}
</style>
