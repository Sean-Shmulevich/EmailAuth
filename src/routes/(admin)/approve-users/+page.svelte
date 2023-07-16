<script>
	import '../../../app.css';
	import { enhance } from '$app/forms';
	/**
	 * @type {any}
	 */
	export let data;
</script>

<h1 class="text-center text-6xl">Admin approve users</h1>

<div class="mx-24 mt-10">

	<a href="/approve-brands">approve brands</a>
	

	{#each data.allUsers as user}
		<div class="bg-white shadow-md p-4 flex items-center justify-between">
			<div>
				<h2 class="text-xl font-bold mb-2">{user.email}</h2>
				<p>Email Verified: {user.email_verified ? 'Yes' : 'No'}</p>
				<p>Admin Verified: {user.admin_verified ? 'Yes' : 'No'}</p>
				<a class="text-blue-500 underline" href="/user-profile/{user.id}">profile link</a>
			</div>
			<form method="post" action="?/verify" use:enhance>
				<input id="email" name="email" disabled value={user.email} /><br />

				<button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded"> Button </button>
			</form>

		</div>
	{/each}
</div>

<style>
</style>
