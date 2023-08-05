<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';
	import { Button, Dropdown, DropdownItem, Chevron, Radio } from 'flowbite-svelte';
	import DropdownPick from './DropdownPick.svelte';
	import Checkboxes from './Checkboxes.svelte';

	let activeOptions = [];
	let goalActive = [];
	let goals = [
		'Increase brand awareness regionally',
		'Expand reach and exposure',
		'Drive traffic and generate leads',
		'Enhance brand credibility and trust',
		'Connect with Community',
		'Increase social media engagement',
		'Launch and promote new products',
		'Drive conversions and sales',
		'Build brand affinity and loyalty',
		'Create engaging and authentic content',
		'Gain insights and market research',
		'Leverage athlete credibility and trust',
		'Drive product endorsement and sales',
		'Increase brand association with athleticism and performance',
		'Drive In store traffic',
		'Drive event attendance and participation'
	];

	let sports = [
		'any',
		'basketball',
		'baseball (men)',
		'beach volleyball (women)',
		'softball (women)',
		'football (men)',
		'cross country',
		'field hockey (women)',
		'bowling (women)',
		'golf',
		'fencing (coeducational)',
		'lacrosse',
		'soccer',
		'gymnastics',
		'rowing (women)',
		'volleyball',
		'ice hockey',
		'water polo',
		'rifle (coeducational)',
		'tennis',
		'skiing (coeducational)',
		'track and field',
		'swimming and diving',
		'wrestling (men)'
	];

	export let form: ActionData;
	let questions = {
		name: 'What is your company name?',
		location: 'Where is your company located?',
		size: 'Company Size',
		industry: 'What industry is your company in?',
		athlete: 'Has your company sponsored a college athlete before?',
		sportPref: 'What sports do you prefer to sponsor?',
		goals: 'Top 3 goals of athlete marketing'
	};
	const questionKeys = Object.keys(questions);
	let currQuestion = 'name';

	//is it inefficient to send the responses to the profile one at a time?
	//yes it is dont do that
	//this array keeps track of the responses and sends them all at the end
	//I think I would need to call the post function programmatically
	let responses = [];
	let currIndex = 0;

	function questionSubmited(event: Event) {
		const formElement = event.target as HTMLFormElement;
		const formData = new FormData(formElement);
		const fieldValue = formData.get(currQuestion);
		responses[currIndex] = fieldValue;
		// console.log(fieldValue); // Do something with the form data

		// Clear the input
		formElement.reset();

		// Move to the next question

		if (currIndex + 1 < questionKeys.length) {
			currIndex++;
			currQuestion = questionKeys[currIndex];
		} else {
			currIndex++;
			// All questions have been answered, do something with the responses
			// console.log('All questions have been answered:', responses);
		}
	}

	function questionBack(event: Event) {
		if (currIndex - 1 >= 0) {
			currIndex--;
			currQuestion = questionKeys[currIndex];
		} else {
			return;
		}
	}
	let open = false;
	let companySize = [
		'Micro (1-9 employees)',
		'Small (10-49)',
		'Medium (50-249)',
		'Large (250 or more)'
	];
	let sizeSelected = 'Size';
	let hasSponcered = 'Yes';
	// $: {
	// 	console.log(sizeSelected);
	// }
	let placeholders = ['Company Name', 'Location', '', 'Industry'];
	let yesNo = ['Yes', 'No'];
</script>

<div class="flex justify-center pt-10 mx-auto h-[85vh]">
	<div
		class="w-[90%] overflow-hidden sm:w-[60%] border border-white h-fit bg-gray-700 p-4 rounded-xl"
	>
		{#if currIndex < questionKeys.length}
			<h2 class="text-center text-5xl mb-4 text-white">{questions[currQuestion]}</h2>
			<hr />
			<form class="" on:submit|preventDefault={questionSubmited}>
				<!-- <input type="hidden" name="hiddenField" value="someValue" /> -->
				{#if currIndex !== 2 && currIndex !== 4 && currIndex !== 5 && currIndex !== 6}
					<input
						class="w-full bg-gray-700 text-white rounded-xl"
						placeholder={placeholders[currIndex]}
						id={currQuestion}
						name={currQuestion}
						value={responses[Object.keys(questions).indexOf(currQuestion)] ?? ''}
					/>
				{:else if currIndex === 2}
					<Button class="w-full text-center bg-gray-700 border border-white mb-2"
						><Chevron>{sizeSelected}</Chevron></Button
					>
					<Dropdown bind:open class="bg-gray-700">
						{#each companySize as size}
							<DropdownItem
								class="text-white"
								on:click={(e) => {
									open = false;
									sizeSelected = size;
								}}>{size}</DropdownItem
							>
						{/each}
					</Dropdown>
				{:else if currIndex === 4}
					<Button class="w-full text-center bg-gray-700 border border-white mb-2"
						><Chevron>{hasSponcered}</Chevron></Button
					>
					<Dropdown class="bg-gray-700" bind:open>
						{#each yesNo as answer}
							<DropdownItem
								class="text-white"
								on:click={(e) => {
									open = false;
									hasSponcered = answer;
								}}>{answer}</DropdownItem
							>
						{/each}
					</Dropdown>
				{:else if currIndex === 5}
					<DropdownPick dropdownName="Choose up to 3 sports" dropdownTypes={sports} />
				{:else}
					<DropdownPick dropdownName="Choose upto 3 goals" dropdownTypes={goals} />
					<!-- <Checkboxes bind:checkboxes={goalBoxes} bind:activeOptions={goalActive} /> -->
				{/if}
				<br />
				<input
					class="float-right mt-3 rounded-full"
					on:click={() => {
						questionSubmited;
					}}
					type="submit"
					value="Continue"
				/>
				<button
					class="text-left mt-1 border border-white rounded-full bg-black p-2 text-white"
					on:click|preventDefault={questionBack}>Back</button
				>
			</form>
		{/if}

		{#if currIndex === questionKeys.length}
			<h2 class="text-center text-white text-5xl mb-4">Set Email and Password</h2>
			<hr />
			<form method="POST" use:enhance>
				<!-- enumerate through the values created in the slideshow to create the brand profile when creating the account -->
				<input type="hidden" name="size" bind:value={sizeSelected} />
				{#each questionKeys as question, index}
					<input type="hidden" name={question} value={responses[index]} />
				{/each}
				<label class="w-full text-white" for="email">Email</label><br />
				<input
					class="w-full text-white bg-gray-700 rounded-xl border border-white"
					id="email"
					name="email"
					value={form?.email ?? ''}
				/><br />
				<label class="w-full text-white" for="password">Password</label>
				<p>Password should be at least 8 characters long</p>
				<input
					class="text-white w-full bg-gray-700 rounded-xl border border-white"
					id="password"
					name="password"
					type="password"
				/><br />
				<input class="rounded-full border border-white" type="submit" value="Submit" />
			</form>
		{/if}
		{#if form?.message}
			<p class="error">{form.message}</p>
		{/if}
		<!-- Content goes here -->
	</div>
</div>

<!-- <h1>Create an account</h1>
<form method="post" use:enhance>
	<label for="email">Email</label><br />
	<input id="email" name="email" value={form?.email ?? ""} /><br />
	<label for="password">Password</label>
	<p>Password should be at least 8 characters long</p>
	<input id="password" name="password" type="password" /><br />

	<input type="submit" value="Continue" />
</form>
{#if form?.message}
	<p class="error">{form.message}</p>
{/if}
<a href="/brand-login">Sign in</a> -->
<style lang="postcss">
	.centerAll {
		position: absolute;
		left: 50%;
		top: 50%;
		-webkit-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
	}
	h1 {
		/* TODO this styles could be problematic */
		@apply lg:mt-20 md:mt-24 sm:mt-28 mt-32  mb-2 w-full text-3xl font-semibold;
	}
	label {
		@apply mb-1 w-full text-sm font-medium;
	}
	input {
		@apply my-1 mb-2 border px-2 py-1.5;
	}
	input[type='submit'] {
		@apply mb-2 cursor-pointer border bg-black px-2 py-1.5 font-medium text-white;
	}
	p.message {
		@apply text-sm;
	}
	p.error {
		@apply text-sm text-red-400;
	}
	/* :global(main a) {
		@apply mx-auto block w-fit text-indigo-500  hover:underline;
	} */
	form {
		@apply my-2;
	}
	form p {
		@apply text-sm text-gray-400;
	}
</style>
