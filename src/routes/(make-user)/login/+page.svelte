<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<div class="rounded-xl bg-white px-10 pb-10 mx-6 pt-0 -mt-10 max-w-[800px] mx-auto">
	<h1 class="pt-10">Athlete Sign in</h1>
	<form method="post" use:enhance>
		<label for="email">Email</label><br />
		<input id="email" name="email" value={form?.email ?? ''} /><br />
		<label for="password">Password</label>
		<input id="password" name="password" type="password" /><br />
		<input type="submit" value="Continue" />
	</form>
	{#if form?.message}
		<p class="error">{form.message}</p>
	{/if}
	<a class="text-blue-600 underline" href="/signup">Create an account</a><br />
	<a class="underline" href="/password-reset">Forgot password?</a>
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
