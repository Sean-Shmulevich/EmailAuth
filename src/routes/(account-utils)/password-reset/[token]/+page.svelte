<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<div class="rounded-xl bg-white px-10 pb-10 mx-6 pt-0 -mt-10 max-w-[800px] mx-auto">
	<h1 class="p-10">Reset password</h1>
	<form method="post" use:enhance>
		<label for="new-password">New password</label>
		<p>Password must be at least 8 characters long</p>
		<input id="new-password" name="new-password" />
		<input type="submit" value="Reset password" />
	</form>
	{#if form?.message}
		<p class="error">{form.message}</p>
	{/if}
</div>
