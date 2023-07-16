<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';
	import Slideshow from './Slideshow.svelte';

	export let form: ActionData;
	let questions = {
		name: 'What is your company name?',
		location: 'Where is your company located?',
		industry: 'What industry is your company in?',
		size: 'How many employees does your company have?',
		goals: "What are your company's goals?"
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
			console.log('All questions have been answered:', responses);
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
</script>

<div class="flex w-full bg-gray-900 justify-center items-center h-screen">
	<div class="w-[80%] bg-gray-500 p-4 h-2/3 lg:h-1/2 rounded-xl">

		{#if currIndex < questionKeys.length}
			<h2 class="text-center text-5xl mb-4">{questions[currQuestion]}</h2>
			<hr />
			<form on:submit|preventDefault={questionSubmited}>
				<!-- <input type="hidden" name="hiddenField" value="someValue" /> -->
				<input
					id={currQuestion}
					name={currQuestion}
					value={responses[Object.keys(questions).indexOf(currQuestion)] ?? ''}
				/><br />
				<input type="submit" value="Continue" />
				<button on:click|preventDefault={questionBack}>Back</button>
			</form>
		{/if}

		{#if currIndex === questionKeys.length}
			<h2 class="text-center text-5xl mb-4">Set Email and Password</h2>
			<hr />
			<form method="POST" use:enhance>
				<!-- enumerate through the values created in the slideshow to create the brand profile when creating the account -->
				{#each questionKeys as question, index}
					<input type="hidden" name={question} value={responses[index]} />	
				{/each}
				<input type="hidden" name="hiddenField" value="someValue" />
				<label for="email">Email</label><br />
				<input id="email" name="email" value={form?.email ?? ''} /><br />
				<label for="password">Password</label>
				<p>Password should be at least 8 characters long</p>
				<input id="password" name="password" type="password" /><br />
				<input type="submit" value="Continue" />
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
