<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<div class="rounded-xl bg-white px-10 pb-10 mx-6 pt-0 -mt-10 max-w-[800px] mx-auto">
	<h1 class="pt-10">Admin Sign in</h1>
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
	<a href="/password-reset">Forgot password?</a>
</div>
