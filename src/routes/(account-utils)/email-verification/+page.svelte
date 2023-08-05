<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData, PageData } from './$types';

	export let data: PageData;
	export let form: ActionData;
	let currToken;
</script>

<div class="rounded-xl bg-white px-10 pb-10 mx-6 pt-0 -mt-10 max-w-[800px] mx-auto">
	<h1 class="pt-10">Email verification</h1>
	<p>Please check your inbox ({data.user.email}) for a verification email</p>
	<p>Be sure to check your spam if you do not receive the email</p>
	<h2>Resend verification email</h2>
	<form action="?/sendEmail" method="post" use:enhance>
		<input type="submit" value="Resend email" />
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
