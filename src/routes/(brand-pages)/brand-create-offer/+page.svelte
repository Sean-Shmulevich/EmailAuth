<script>
	// checkbox decides which import component to use either single event or campaign
	import ImageCropper from '../ImageCropper.svelte';
	import Radio from './Radio.svelte';
	import { enhance } from '$app/forms';
	export let data;
	export let form;

	import { onMount } from 'svelte';

	let presignUrl = '/api/presign';
	let s3 = '/api/s3object';

	// upload window open or closed
	let isModalOpen = false;
	//Image after cropping
	let croppedImage = null;
	//basically a parameter to the ImageCropper.svelte component to change the crop aspect ratio and other associated values
	let squareInput = false;

	//the current image being modified in the images object
	let currImage = null;

	//choose event type radio or custom input box
	//  Hidden input box unless the user picks custom
	function handleSubmit(event) {
		upload(croppedImage);
		// console.log("run");
		images = { ...images };
		croppedImage = null;
	}
	let radioValue;

	const options = [
		{
			value: 'green',
			label: 'Bulbasaur'
		},
		{
			value: 'red',
			label: 'Charmander'
		},
		{
			value: 'blue',
			label: 'Squirtle'
		}
	];

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
			<ImageCropper
				on:cropSubmit={handleSubmit}
				bind:croppedImage
				bind:square={squareInput}
				bind:open={isModalOpen}
			/>
			<Radio
				{options}
				fontSize={16}
				legend="Select a starter Pokemon"
				bind:userSelected={radioValue}
			/>
			<p>
				{radioValue} is selected
			</p>
		</form>
	</div>
</div>

<style>
</style>
