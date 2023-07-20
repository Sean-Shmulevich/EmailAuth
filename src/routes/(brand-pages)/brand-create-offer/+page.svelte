<script>
	// checkbox decides which import component to use either single event or campaign
	import ImageCropper from '../ImageCropper.svelte';
	import Radio from './Radio.svelte';
	import { enhance } from '$app/forms';
	export let data;
	export let form;

	let eventType;
	let inPersonOrVirtual;
	let singleOrMultiple;

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
		// images = { ...images };
		croppedImage = null;
	}
	let radioValue;

	const options = [
		['Single Event', 'Campaign'],
		['In Person', 'Virtual'],
		['Single Athlete', 'Multiple Athletes']
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
		class="profile-card flex flex-col bg-gray-800 shadow overflow-hidden mt-10 rounded-lg max-w-5xl w-[80%] mb-10 p-6"
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
		</form>
		<Radio bind:selected={eventType} options={options[0]} flexDirection="row" />
		{#if eventType === 'Single Event'}
			<h2 class="mt-4">Single Event Selected</h2>
			<div>
				<label class="block text-gray-400 text-sm font-bold mb-2" for="message"
					>Short description of your event</label
				>
				<textarea
					id="short-description"
					name="short-description"
					rows="5"
					class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					placeholder="ex: Join us for a night of fun and games!"
				/>
				<div class="border my-5 rounded-xl p-3">
					<Radio bind:selected={inPersonOrVirtual} options={options[1]} flexDirection="row" />
					{#if inPersonOrVirtual}
						<h2>{inPersonOrVirtual}</h2>
					{/if}
				</div>

				<div class="border rounded-xl p-3">
					<Radio bind:selected={singleOrMultiple} options={options[2]} flexDirection="row" />
					{#if singleOrMultiple === 'Multiple Athletes'}
						<div class="mb-4 w-32 mx-auto">
							<label class="text-gray-300 text-sm font-bold mb-2 text-left" for="number-of-athletes"
								>Number of Athletes</label
							>
							<input
								id="number-of-athletes"
								name="number-of-athletes"
								type="number"
								min="0"
								class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								placeholder="#Athletes"
							/>
						</div>
					{/if}
				</div>

				<div class="border mt-5 rounded-xl align-left">
					<div class="flex p-5 flex-col sm:flex-row items-center">
						<label
							class="text-gray-300 text-sm font-bold text-left w-fit sm:mr-5 whitespace-nowrap"
							for="sport-preference">Sport Preference</label
						>
						<input
							id="sport-preference"
							name="sport-preference"
							type="text"
							class="shadow appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							placeholder="Enter your sport preference"
						/>
					</div>
				</div>
			</div>
		{/if}
		{#if eventType === 'Campaign'}
			<h2>Campaign Selected</h2>
		{/if}
	</div>
</div>

<style>
</style>
