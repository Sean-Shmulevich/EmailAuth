<script lang="ts">
	import { enhance } from '$app/forms';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div>
	<form>
		<label for="query" class="text-medium text-sm">Search by mailbox</label>
		<div class="flex gap-x-2">
			<input
				id="query"
				name="q"
				class="w-full rounded border px-2 placeholder:text-zinc-400"
				placeholder="user@example.com"
				value={data.emailAddressQuery}
			/>
			<input
				type="submit"
				value="Search"
				class="rounded bg-black px-4 py-1 font-medium text-white hover:cursor-pointer"
			/>
		</div>
	</form>
</div>
<div class="my-4 grid grid-cols-1 divide-y">
	{#if data.emails.length < 1}
		<p class="my-2 text-center text-zinc-500">No emails were found</p>
	{/if}
	{#each data.emails as email}
		<div class="py-4">
			<div class="flex place-content-between text-sm">
				<p>To: {email.toAddress}</p>
				<p class="text-zinc-400">{email.dateSent.toLocaleString()}</p>
			</div>
			<a class="mt-2 font-medium hover:underline" href={`/admin/email/${email.emailId}`}>
				{email.subject}
			</a>
		</div>
	{/each}
</div>
