<script lang="ts">
	import { enhance } from '$app/forms';

	import type { ActionData } from './$types';
	import { Button, Dropdown, DropdownItem, Chevron, Radio } from 'flowbite-svelte';
	import DropdownPick from './DropdownPick.svelte';
	import SignUpForm from '../SignUpForm.svelte';
	import Checkboxes from './Checkboxes.svelte';
	import Tos from './Tos.svelte';

	let activeOptions = [];
	let goalActive = [];
	let showTOS;
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
	let openPickSize = false;

	let companySize = [
		'Micro (1-9 employees)',
		'Small (10-49)',
		'Medium (50-249)',
		'Large (250 or more)'
	];
	let sizeSelected = 'Size';
	let hasSponsored = 'Yes';
	// $: {
	// 	console.log(sizeSelected);
	// }
	let yesNo = ['Yes', 'No'];
</script>

{#if showTOS}
	<div
		class="centerAll border border-green-500 w-[90%] overflow-y-scroll sm:w-[80%] h-[60vh] rounded-xl bg-white z-10 p-10"
	>
		<Tos bind:showTOS />
	</div>
{/if}

<SignUpForm formTitle="Create an brand account" bind:form bind:showTOS>
	<label for="name">Company name</label><br />
	<input class="w-full" name="name" value={form?.name ?? ''} />

	<label for="location">Company location</label><br />
	<input
		class="w-full"
		name="location"
		placeholder="Pittsburgh PA"
		value={form?.location ?? ''}
	/>

	<label for="industry">Which industry does your company specialize in</label><br />
	<input placeholder="Sportswear" class="w-full" name="industry" value={form?.industry ?? ''} />

	<hr class="w-full bg-black mt-3 mb-5 color-black h-1 rounded-xl" />

	<label for="size">Company size</label><br />
	<Button class="w-full border-4 text-black mt-1 border-gray"
		><Chevron>{sizeSelected}</Chevron></Button
	>

	<Dropdown bind:open={openPickSize} class="bg-white rounded text-black">
		{#each companySize as size}
			<DropdownItem
				class="bg-white hover:bg-gray-200"
				on:click={() => {
					openPickSize = false;
					sizeSelected = size;
				}}>{size}</DropdownItem
			>
		{/each}
	</Dropdown>
	<input type="hidden" name="size" bind:value={sizeSelected} />

	<label for="athlete">Has your company sponsored a college athlete before?</label><br />
	<Button class="w-full border-4 text-black mt-1 border-gray"
		><Chevron>{hasSponsored}</Chevron></Button
	>

	<Dropdown class="bg-white rounded text-black" bind:open>
		{#each yesNo as answer}
			<DropdownItem
				class="bg-white hover-bg-gray-200"
				on:click={() => {
					open = false;
					//sponsored
					hasSponsored = answer;
				}}>{answer}</DropdownItem
			>
		{/each}
	</Dropdown>
	<input type="hidden" name="athlete" bind:value={hasSponsored} />

	<hr class="w-full bg-black my-5 color-black h-1 rounded-xl" />

	<label for="athlete">Which sports are you more likely to sponsor?</label><br />
	<div class="text-black">
		<DropdownPick
			formInputName="sportPref"
			dropdownName="Choose up-to 3 sports"
			dropdownTypes={sports}
		/>
	</div>
	<div>
		<label for="athlete">Top 3 goals of athlete marketing</label><br />
		<DropdownPick
			formInputName="goals"
			dropdownName="Choose up-to 3 goals"
			dropdownTypes={goals}
		/>
	</div>
	<hr class="w-full bg-black my-5 color-black h-1 rounded-xl" />
</SignUpForm>

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
	label {
		@apply mb-1 w-full text-sm font-medium;
	}
	input {
		@apply my-1 mb-2 rounded border-4 px-2 py-1.5;
	}
	input[type='checkbox'] {
		@apply my-1 mb-2 rounded border-4 px-2 py-1.5;
	}
</style>
