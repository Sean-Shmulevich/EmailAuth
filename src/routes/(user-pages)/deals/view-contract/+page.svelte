<script>
	export let data;
	let hasContract;
	let contractLink;

	if (data.deal.userDealStatus[0].contractId) {
		hasContract = true;
		contractLink = '/api/s3object/' + data.deal.userDealStatus[0].contractId;
	}
</script>

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
			No contract uploaded yet get in contact with the brand to Negotiatiate the terms of the deal
		</p>
		<p />
	{/if}
</div>
