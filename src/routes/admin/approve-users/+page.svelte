<script>
	import '../../../app.css';
	import { enhance } from '$app/forms';
	/**
	 * @type {any}
	 */
	export let data;
</script>

<div class="bg-white rounded-xl mx-auto mt-10 max-w-[90%] px-10 pb-10 w-[85%] mb-12">
	<h1 class="text-center pt-10 text-6xl">Admin approve users</h1>

	<div class="mt-10">
		<div class="mx-auto mb-10 text-center rounded-3xl py-4 w-[20%] bg-black text-white">
			<a class="text-center" href="/admin/approve-brands">go to approve brands</a>
		</div>
		<div class="mx-auto mb-10 text-center rounded-3xl py-4 w-[20%] bg-black text-white">
			<a class="text-center" href="/admin/deal-contracts">View deal contracts</a>
		</div>

		<h2 class="text-4xl text-center">Users waiting for approval</h2>
		{#if data.allUsers.length === 0}
			<div class="p-5 my-4 mx-auto text-center rounded-xl w-48 bg-gray-400">
				<p class="text-2xl">No users waiting for approval</p>
			</div>
		{/if}

		{#each data.allUsers as user}
			<div class="bg-white shadow-md p-4 flex items-center justify-between">
				<div>
					<h2 class="text-xl font-bold mb-2">{user.email}</h2>
					<p>Email Verified: {user.email_verified ? 'Yes' : 'No'}</p>
					<p>Admin Verified: {user.admin_verified ? 'Yes' : 'No'}</p>
					<a class="text-blue-500 underline" href="/user-profile/{user.id}">profile link</a>
				</div>
				<form method="post" action="?/verify" use:enhance>
					<input id="email" name="email" hidden value={user.email} />

					<button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded"> Button </button>
				</form>
			</div>
		{/each}
		<h2 class="text-4xl text-center">Approved Users</h2>
		{#each data.approvedUsers as user}
			<div class="bg-white shadow-md p-4 flex items-center justify-between">
				<div>
					<h2 class="text-xl font-bold mb-2">{user.email}</h2>
					<p>Email Verified: {user.email_verified ? 'Yes' : 'No'}</p>
					<p>Admin Verified: {user.admin_verified ? 'Yes' : 'No'}</p>
					<a class="text-blue-500 underline" href="/user-profile/{user.id}">profile link</a>
				</div>
			</div>
		{/each}
	</div>
</div>
