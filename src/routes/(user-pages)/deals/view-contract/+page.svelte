<script>
	import { io } from '$lib/webSocketConnection.js';
	import { onMount } from 'svelte';
	export let data;

	let textfield = '';
	let username = '';

	let hasContract;
	let contractLink;

	if (data.deal.userDealStatus[0].contractId) {
		hasContract = true;
		contractLink = '/api/s3object/' + data.deal.userDealStatus[0].contractId;
	}

	let messages = [];

	onMount(() => {
		io.on('message', (message) => {
			messages = [...messages, message];
		});
		io.on('name', (name) => {
			username = name;
		});
	});

	function sendMessage() {
		const message = textfield.trim();
		if (!message) return;

		textfield = '';
		io.emit('message', message);
	}
</script>

<div class="h-screen w-screen bg-zinc-800">
	<div class="h-full w-full max-w-md mx-auto bg-zinc-500 flex flex-col">
		<header
			class="px-6 py-4 border-b border-zinc-800 bg-zinc-700 text-white shrink-0 flex items-center justify-between"
		>
			<span class="font-bold text-xl">My Chat app</span>
			<span>{username}</span>
		</header>

		<div class="h-full w-full p-4">
			{#each messages as message}
				<div class="bg-zinc-300 rounded-xl rounded-tl-none px-4 py-3 my-4 w-fit">
					<span class="flex items-center space-between gap-4">
						<b>{message.from}</b>
						<i>{message.time}</i>
					</span>
					{message.message}
				</div>
			{/each}
		</div>

		<form
			action="#"
			on:submit|preventDefault={sendMessage}
			class="px-6 py-4 border-t border-zinc-800 bg-zinc-700 text-white shrink-0 flex items-center"
		>
			<input
				type="text"
				bind:value={textfield}
				placeholder="Type something..."
				class="bg-transparent border-none px-4 py-3 w-full"
			/>
			<button type="submit" class="shrink-0 border border-white rounded-lg px-4 py-3"
				>Send</button
			>
		</form>
	</div>
</div>

<div class="p-10 w-full flex flex-col items-center justify-center">
	<div
		class="w-[90%] flex flex-col items-center sm:flex-row bg-gray-700 p-5 rounded-xl border border-white sm:w-[75%]"
	>
		<p class="text-2xl text-white font-extrabold">Brand Email:</p>
		<a
			href="mailto:{data.deal.authUser.email}"
			class="m-full underline text-right mx-auto sm:ml-auto text-green-500 text-xl"
		>
			{data.deal.authUser.email}
		</a>
	</div>
	<h2 class="font-extrabold text-2xl text-white my-5">Uploaded Contract</h2>
	{#if hasContract}
		<a
			class="text-white text-center font-bold text-xl w-[90%] bg-gray-700 p-5 rounded-xl border border-white sm:w-[75%]"
			href={contractLink}
			target="_blank"
		>
			<!-- This stuff doesnt exist yet when the page is uploaded cause even tho it gets pushed it doesnt come back right away -->
			<span class="underline">
				{data.deal.userDealStatus[0].contract.file_name}
			</span>
		</a>
	{:else}
		<p
			class="text-red-400 text-center font-bold text-xl w-[90%] bg-gray-700 p-5 rounded-xl border border-white sm:w-[75%]"
		>
			No contract uploaded yet get in contact with the brand to Negotiatiate the terms of the
			deal
		</p>
		<p />
	{/if}
</div>
