<script lang="ts">
	import { enhance } from '$app/forms';
	import { onMount } from 'svelte';
	import type { ActionData, PageData } from './$types';

	export let data: PageData;
	export let form: ActionData;
	let currToken;
	let code;
	//TODO implement wait time for sending user email
	// Implementation considerations
	// Stores || LocalStorage.
	//Is there a before refresh handler?

	//Send email.
	//Set timer in this file lockVariables in localstorage
	//After 2 minutes clear localstorage
	//if refresh
	//		Either start over timer or set value to current value of timer (IDK how option two would work logistically in terms of grabbing the current count)
	//Dont allow submitting the form until 2 minutes is up

	//Create A phone number input allow to pick email or text verification
	let phoneNumber;
	let showMessage = true;
	let emailMsg;
	let message = true;
	$: {
		if (textMsg) {
			setTimeout(() => {
				showMessage = false;
			}, 10000);
			showMessage = true;
		}
		if (form && form.emailSent) {
			setTimeout(() => {
				message = false;
			}, 8000);
			message = true;
		}
	}

	//The timestamp should set after sending the first email or password request
	//it is then set to the server

	//the first time they pick it set a timestamp
	//send that timestamp to the server
	let textMsg;
</script>

<div class="rounded-xl bg-white px-10 pb-10 pt-0 -mt-10 max-w-[800px] mx-auto">
	<h1 class="pt-10">Verify Your account</h1>
	<h2 class="mt-5">Send verification email</h2>
	<form action="?/sendEmail" method="post" use:enhance>
		<input type="submit" value="Send email" />
		{#if form?.emailSent && message}
			<p class="error">{form.emailSent}</p>
			<p>Please check your inbox ({data.user.email}) for a verification email</p>
			<p class="text-red-500">Be sure to check your spam if you do not receive the email</p>
		{/if}
	</form>
	<h1 class="text-center">OR</h1>
	<h2 class="mt-5">Send verification text</h2>
	<form
		on:submit={async (event) => {
			let borm = new FormData();
			const timeStamp = localStorage.getItem('sendTimeText');
			if (timeStamp) {
				//Maybe reset the lockconst now = Date.now();
				const now = Date.now();
				const elapsedTime = now - parseInt(timeStamp);
				console.log(elapsedTime);

				if (elapsedTime < 60 * 1000) {
					borm.append('lock', 'exist');
				} else {
					localStorage.removeItem('sendTimeText');
				}
			} else {
				localStorage.setItem('sendTimeText', Date.now().toString());
			}

			// Append the required fields to the form

			borm.append('phoneNumber', phoneNumber);

			try {
				// Send the data to the specified endpoint
				let response = await fetch('?/sendText', {
					method: 'POST',
					body: borm
				});

				// Handle the response if needed (e.g., convert to JSON)
				let result = await response.json();

				textMsg = JSON.parse(result.data)[1];

				return result;
			} catch (error) {
				console.log(error);
				return false;
			}
		}}
	>
		<input type="tel" id="phone" name="phone" placeholder="267-321-9999" bind:value={phoneNumber} />
		<input type="submit" value="Send verification text" />
	</form>
	{#if textMsg && showMessage}
		<p class="error">{textMsg}</p>
	{/if}
	<form action="?/validateCode" method="post" use:enhance>
		<input type="text" name="token" />
		<input type="submit" value="Input SMS verification code" />
		<p>Case sensitive</p>
		{#if form?.emailSent && message}
			<p class="error">{form.emailSent}</p>
		{/if}
	</form>

	{#if form?.message}
		<p class="error">{form.message}</p>
	{/if}
</div>

<style lang="postcss">
	h1 {
		/* TODO this styles could be problematic */
		@apply lg:mt-20 md:mt-24 sm:mt-28 mt-32  mb-2 w-full text-3xl font-semibold;
	}
	label {
		@apply mb-1 w-full text-sm font-medium;
	}
	input {
		@apply my-1 mb-2 w-full rounded border px-2 py-1.5;
	}
	input[type='submit'] {
		@apply mb-2 w-full cursor-pointer rounded border bg-black px-2 py-1.5 font-medium text-white;
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
		@apply text-sm text-zinc-500;
	}
</style>
