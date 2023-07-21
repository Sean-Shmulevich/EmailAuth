<script>
	// checkbox decides which import component to use either single event or campaign
	import ImageCropper from '../ImageCropper.svelte';
	import Checkboxes from './Checkboxes.svelte';
	import Radio from './Radio.svelte';
	import InputList from './InputList.svelte';
	import { enhance } from '$app/forms';
	export let data;
	export let form;

	let eventType;
	let inPersonOrVirtual;
	let singleOrMultiple;
	let mainGoalCheckboxes = [];
	let deliverables = [{ id: 0, value: '' }];

	import { onMount } from 'svelte';

	let presignUrl = '/api/presign';
	let s3 = '/api/s3object';

	let dealImage = '';
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
		form.append('position', '0');
		try {
			await fetch(s3 + '/' + encodeURIComponent(fields.key), { method: 'POST', body: form });
		} catch (error) {
			console.log(error);
			return false;
		}

		return fields.key;
	}
</script>

<div class="bg-gray-900 text-white flex flex-col items-center text-center justify-center space-y-8">
	<h2 class="text-2xl mt-10">Create Offer</h2>
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
		<div class="border rounded-xl mt-5 p-3">
			<p class="text-gray-200 text-xl mb-2">Main Deal Image</p>
			<button
				class="{croppedImage
					? 'nah'
					: ''} text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
				on:click={() => {
					squareInput = false;
					isModalOpen = true;
				}}
				>Upload Image
			</button>
			{#if croppedImage !== null}
				<img src={URL.createObjectURL(croppedImage)} alt="Profile example" class="w-1/2 mx-auto" />
				<button
					on:click={() => {
						croppedImage = null;
						isModalOpen = true;
						//!!!
					}}>Change Image</button
				>
			{/if}
		</div>
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
							class="shadow p-2 appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							placeholder="Enter your sport preference"
						/>
					</div>
				</div>
			</div>
			<div class="border rounded-xl mt-5 p-3">
				<h2 class="text-center text-xl mb-5">Main Goals</h2>
				<Checkboxes
					bind:activeOptions={mainGoalCheckboxes}
					checkboxes={[
						{ label: 'Option 1', value: 'option1', checked: false },
						{ label: 'Option 2', value: 'option2', checked: false },
						{ label: 'Custom goal', value: 'Custom goal', checked: false }
					]}
				/>
				{#if mainGoalCheckboxes.includes('Custom goal')}
					<div class="mb-4 w-1/4 mt-4 mx-auto">
						<label class="text-gray-300 text-sm font-bold mb-2 text-left" for="custom-goal"
							>Custom Goal</label
						>
						<input
							id="custom-goal"
							name="custom-goal"
							type="text"
							class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							placeholder="Enter your custom goal"
						/>
					</div>
				{/if}
			</div>
			<div class="border mt-5 rounded-xl align-left">
				<div class="flex p-5 flex-col sm:flex-row items-center">
					<label
						class="text-gray-300 text-sm font-bold text-left w-fit sm:mr-5 whitespace-nowrap"
						for="estimated-payment">Estimated Payment</label
					>
					<input
						id="estimated-payment"
						name="estimated-payment"
						type="text"
						class="shadow p-2 appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						placeholder="Estimated Pay or Range"
					/>
				</div>
			</div>
			<div class="border mt-5 p-5 rounded-xl align-left">
				<h2 class="text-xl mb-2">Deal Deliverables for athlete</h2>
				<InputList inputs={deliverables} />
			</div>
		{/if}
		{#if eventType === 'Campaign'}
			<h2>Campaign Selected</h2>
		{/if}
	</div>
</div>

<style>
	.nah {
		display: none;
	}
</style>
