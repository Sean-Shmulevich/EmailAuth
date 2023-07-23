<script>
	// checkbox decides which import component to use either single event or campaign
	import ImageCropper from '../../ImageCropper.svelte';
	import Checkboxes from './Checkboxes.svelte';
	import Radio from './Radio.svelte';
	import InputList from './InputList.svelte';
	import { enhance } from '$app/forms';
	let endDate = new Date().toISOString().slice(0, 10);
	let dateToday = new Date().toISOString().slice(0, 10);
	console.log(dateToday);
	export let data;
	export let form;
	let selected;

	let eventCampaignOrSingle;
	let inPersonOrVirtual;
	let genderPreference;
	let singleOrMultiple;
	let eventType;
	let mainGoalCheckboxes = [];
	let deliverables = [{ id: 0, value: '' }];
	let customGoals = [{ id: 0, value: '' }];
	let pageNum = 0;
	let title;
	let shortDescription;
	let eventTypeCustom;
	let location;
	let athNum;
	let sportPref;
	let pay;

	const options = [
		['Single Event', 'Campaign'],
		['In Person', 'Virtual'],
		['Single Athlete', 'Multiple Athletes'],
		['Male', 'Female', 'Any gender'],
		['In person appearance', 'Social media post', 'shoutout', 'autograph', 'custom']
	];
	let checkboxes = [
		{ label: 'Option 1', value: 'option1', checked: false },
		{ label: 'Option 2', value: 'option2', checked: false },
		{ label: 'Custom goal', value: 'Custom goal', checked: false }
	];
	// $: {
	if (data.deal) {
		pageNum = 2;
		let deal = data.deal;
		title = deal.title;
		let isCampaign = 'Campaign';
		if (!deal.isCampaign) {
			isCampaign = 'Single Event';
		}
		eventCampaignOrSingle = isCampaign;
		shortDescription = deal.shortDescription;
		endDate = deal.endDate.toISOString().slice(0, 10);
		eventType = deal.eventType;
		if (!options[4].includes(deal.eventType)) {
			eventType = 'custom';
			eventTypeCustom = deal.eventType;
		}
		inPersonOrVirtual = deal.inPersonOrVirtual;

		if (deal.inPersonOrVirtual === 'inPerson') {
			location = deal.location;
		}
		singleOrMultiple = deal.singleOrMultiple;
		if (deal.singleOrMultiple === 'multiple') {
			athNum = deal.athleteCount;
		}
		genderPreference = deal.genderPreference;
		sportPref = deal.sportPreference;
		pay = deal.estimatedPayment;
		let goals = deal.goals;
		let custGoals = [];
		for (let i = 0; i < checkboxes.length; i++) {
			if (goals.includes(checkboxes[i].value)) {
				checkboxes[i].checked = true;
			} else {
				if (goals[i] !== 'Custom goal') {
					custGoals.push({ id: i, value: goals[i] });
				}
			}
		}
		if (goals.length !== 0) {
			customGoals = custGoals;
		}
		let del = [];
		for (let i = 0; i < deal.recommendedDeliverables.length; i++) {
			del.push({ id: i, value: deal.recommendedDeliverables[i] });
		}
		if (deal.recommendedDeliverables.length !== 0) {
			deliverables = del;
		}
	}
	// }

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
	//this will exeecute when the form is submitted and when the image is changed
	//(when it is changed on crop not on submit)
	$: {
		if (form && form.dealId && croppedImage !== null) {
			console.log('here');
			upload(croppedImage, form.dealId);
		}
	}
	let radioValue;

	async function upload(file, dealId) {
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
		form.append('deal_id', dealId);

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

<ImageCropper bind:croppedImage bind:square={squareInput} bind:open={isModalOpen} />
<div class="bg-gray-900 text-white flex flex-col items-center text-center justify-center space-y-8">
	<h2 class="text-2xl mt-10">Create Offer</h2>
	<div
		class="profile-card flex flex-col bg-gray-800 shadow overflow-hidden mt-10 rounded-lg max-w-5xl w-[80%] mb-10 p-6"
	>
		<form
			method="POST"
			action="?/makeDeal"
			use:enhance={() => {
				return async ({ update }) => {
					await update({ reset: false });
				};
			}}
			class="w-full"
		>
			<Radio
				inputName={'is-campaign'}
				bind:selected={eventCampaignOrSingle}
				options={options[0]}
				flexDirection="row"
			/>
			{#if eventCampaignOrSingle}
				<div class="border my-5 p-5 rounded-xl">
					<h2 class="mb-4 items-left text-left">Event type:</h2>
					<Radio
						justify={'left'}
						inputName="event-type"
						bind:selected={eventType}
						options={options[4]}
					/>
					{#if eventType && eventType === 'custom'}
						<div class="mt-5">
							<label class="text-gray-300 text-sm font-bold mb-2 text-center" for="event-type"
								>Custom Event Type</label
							>
							<input
								id="event-type-custom"
								name="event-type-custom"
								type="text"
								bind:value={eventTypeCustom}
								class="mx-5 shadow appearance-none border rounded mb-5 w-[90%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								placeholder="ex: Social Media Post"
							/>
						</div>
					{/if}
				</div>
				<div class="border p-2 rounded-xl mt-4 align-left">
					<h2 class="mt-4">Deal title</h2>
					<input
						id="deal-title"
						name="deal-title"
						bind:value={title}
						type="text"
						class="mx-5 shadow appearance-none border rounded mb-5 w-[90%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						placeholder="ex: Social Media Post"
					/>

					<label class="block text-white text-lg font-bold mb-2" for="message"
						>Short description of your event</label
					>
					<textarea
						id="short-description"
						name="short-description"
						rows="5"
						bind:value={shortDescription}
						class="mx-5 shadow appearance-none border rounded mb-5 w-[90%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						placeholder="ex: Join us for a night of fun and games!"
					/>
					<div class="mb-5">
						<h2 class="mb-2" />
						<input
							class="text-black text-center max-w-[90%] w-72"
							type="date"
							id="end-date"
							name="end-date"
							min={dateToday}
							bind:value={endDate}
						/>
					</div>
					<div class="border my-5 rounded-xl p-3">
						<p class="text-gray-200 text-xl mb-2">Main Deal Image</p>
						<button
							class="{croppedImage
								? 'nah'
								: ''} text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
							on:click|preventDefault={() => {
								squareInput = false;
								isModalOpen = true;
							}}
							>Upload Image
						</button>
						{#if croppedImage !== null}
							<img
								src={URL.createObjectURL(croppedImage)}
								alt="Profile example"
								class="w-1/2 mx-auto"
							/>
							<button
								on:click|preventDefault={() => {
									croppedImage = null;
									isModalOpen = true;
									//!!!
								}}>Change Image</button
							>
						{/if}
					</div>
				</div>
				{#if pageNum >= 1}
					<div class="border mt-5 rounded-xl p-3">
						<div class="p-2">
							<h2 class="mb-4 text-left">Event in person or virtual:</h2>
							<Radio
								inputName={'in-person-or-virtual'}
								bind:selected={inPersonOrVirtual}
								options={options[1]}
								flexDirection="row"
							/>
							{#if inPersonOrVirtual && inPersonOrVirtual === 'In Person'}
								<h2 class="mt-4">Deal location</h2>
								<input
									id="deal-location"
									name="deal-location"
									type="text"
									bind:value={location}
									class="mx-5 shadow appearance-none border rounded mb-5 w-[90%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
									placeholder="ex: Peterson Events Center"
								/>
							{/if}
							<hr class="mt-2" />
						</div>

						<div class="mb-5">
							<h2 class="mb-4 text-left">Single or multiple athletes:</h2>
							<Radio
								inputName={'single-or-multiple'}
								bind:selected={singleOrMultiple}
								options={options[2]}
								flexDirection="row"
							/>
							{#if singleOrMultiple === 'Multiple Athletes'}
								<div class="mb-4 w-32 mx-auto">
									<label
										class="text-gray-300 text-sm font-bold mb-2 text-left"
										for="number-of-athletes">Number of Athletes</label
									>
									<input
										id="number-of-athletes"
										name="number-of-athletes"
										type="number"
										bind:value={athNum}
										min="0"
										class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
										placeholder="#Athletes"
									/>
								</div>
							{/if}
							<hr class="mt-2" />
						</div>
						<div class="mb-2">
							<h2 class="mb-4 text-left">Gender preference:</h2>
							<Radio
								inputName={'gender-preference'}
								bind:selected={genderPreference}
								options={options[3]}
								flexDirection="row"
							/>
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
									bind:value={sportPref}
									class="shadow p-2 appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
									placeholder="Enter your sport preference"
								/>
							</div>
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
									bind:value={pay}
									class="shadow p-2 appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
									placeholder="Estimated Pay or Range"
								/>
							</div>
						</div>
					</div>
				{/if}

				{#if pageNum >= 2}
					<div class="border rounded-xl mt-5 p-3">
						<div class="border rounded-xl mt-5 p-3">
							<h2 class="text-center text-xl mb-5">Main Goals</h2>
							<Checkboxes
								bind:activeOptions={mainGoalCheckboxes}
								checkboxName={'goals'}
								bind:checkboxes
							/>
							{#if (data && data.deal && data.deal.goals.includes('Custom goal')) || mainGoalCheckboxes.includes('Custom goal')}
								<InputList
									inputName={'custom-goals'}
									showName={'Custom Goal'}
									inputs={customGoals}
								/>
							{/if}
						</div>

						<div class="border mt-5 p-5 rounded-xl align-left">
							<h2 class="text-xl mb-2">Deal Deliverables for athlete</h2>
							<InputList
								inputName={'deliverables'}
								showName={'Deliverable'}
								inputs={deliverables}
							/>
						</div>
					</div>
					<div class="text-right mr-auto mt-5">
						<button
							class="rounded-full p-5 bg-green-800"
							name="deal-submit"
							value="publish"
							type="submit">Publish Deal</button
						>
						<button
							class="rounded-full p-5 bg-red-800"
							name="deal-submit"
							value="no-publish"
							type="submit">Save for later</button
						>
					</div>
				{/if}
				{#if pageNum <= 1}
					<button
						class="bg-green-600 p-3 mt-4 rounded-full w-fit"
						on:click|preventDefault={() => {
							pageNum += 1;
							pageNum = pageNum;
							console.log(pageNum);
						}}>Continue Deal</button
					>
				{/if}
			{/if}
			{#if data && data.deal}
				<input type="hidden" name="deal-id" value={data.deal.id} />
			{/if}
		</form>
	</div>
</div>

<style>
	.nah {
		display: none;
	}
</style>
