<script lang="ts">
	import { enhance } from '$app/forms';
	import { onMount } from 'svelte';
	import type { ActionData, PageData } from './$types';

	export let data: PageData;
	export let form: ActionData;
	let currToken;
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
	$: {
		if (form && form.textSent) {
			setTimeout(() => {
				showMessage = false;
			}, 10000);
		}
	}

	//The timestamp should set after sending the first email or password request
	//it is then set to the server
	onMount(() => {
		//if there is no timestamp in localStorage.
		//set a timeStamp of now
	});

	function getTimeStampText() {
		if (window !== undefined) {
			return localStorage.getTimeStampText('sendTimeText');
		}
		return '';
	}
	//the first time they pick it set a timestamp
	//send that timestamp to the server
</script>

<div class="rounded-xl bg-white px-10 pb-10 pt-0 -mt-10 max-w-[800px] mx-auto">
	<h1 class="pt-10">Verify Your account</h1>
	<h2 class="mt-5">Send verification email</h2>
	<form action="?/sendEmail" method="post" use:enhance>
		<input type="submit" value="Resend email" />
	</form>
	<h2 class="mt-5">Send verification text</h2>
	<form
		on:submit={() => {
			localStorage.setItem('sendTimeText', Date.now().toString());
		}}
		action="?/sendText"
		method="post"
		use:enhance
	>
		<input type="hidden" name="lastSentText" value={getTimeStampText()} />
		<input type="tel" id="phone" name="phone" placeholder="267-321-9999" bind:value={phoneNumber} />
		<input type="submit" value="Resend text" />
	</form>
	{#if form?.textSent && showMessage}
		<p class="error">{form.textSent}</p>
	{/if}
	<p>Please check your inbox ({data.user.email}) for a verification email</p>
	<p class="text-red-500">Be sure to check your spam if you do not receive the email</p>

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
