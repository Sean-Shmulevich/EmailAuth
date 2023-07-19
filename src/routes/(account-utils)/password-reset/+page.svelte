<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<div class="rounded-xl bg-white px-10 pb-10 mx-6 pt-0 -mt-10 max-w-[800px] mx-auto">
	<h1 class="pt-10">Reset password</h1>
	<form method="post" use:enhance>
		<label for="email">Email</label>
		<input id="email" name="email" value={form?.email ?? ''} />
		<input type="submit" value="Send email" />
	</form>
	{#if form?.message}
		<p class="error">{form.message}</p>
	{/if}
	{#if form?.success}
		<p class="message">A verification email was sent to your inbox</p>
	{/if}
</div>
