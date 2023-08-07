<script>
	import { Dropzone } from 'flowbite-svelte';
	export let data;
	import FileDrop from 'filedrop-svelte';
	let files;
	let options = {};
	import { page } from '$app/stores';
	import NILQuickFacts from '$lib/assets/NILQuickFacts.pdf';
	import SponsorshipAgreement from '$lib/assets/ExampleNILSponsorshipAgreementDapUp.pdf';
	import SampleExclusiveNIL from '$lib/assets/SampleExclusiveNILDapUp.pdf';
	import SampleNonExclusiveNIL from '$lib/assets/SampleNonExclusiveNILDapUp.pdf';
	let s3 = '/api/s3object';

	let currFile;
	let modal = false;

	const url = $page.url;

	let value = [];
	let athlete = data.deal.userDealStatus[0].user;

	function formatFileSize(size) {
		if (size < 1024) return size + ' B';
		size /= 1024;
		if (size < 1024) return size.toFixed(2) + ' KB';
		size /= 1024;
		if (size < 1024) return size.toFixed(2) + ' MB';
		size /= 1024;
		return size.toFixed(2) + ' GB';
	}
	console.log(data.deal);
	let presignUrl = '/api/presign';

	let hasContract = false;
	let contractLink;
	async function upload(file) {
		console.log(file);
		// Get presigned POST URL and form fields
		let { url, fields } = await fetch(`${presignUrl}?fileType=${file.type}`)
			.then((response) => response.json())
			.catch((error) => {
				console.log(error);
				return false;
			});

		// Build a form for the request body
		let form = new FormData();
		Object.keys(fields).forEach((key) => form.append(key, fields[key]));
		form.append('file', file);
		form.append('Content-Type', file.type);

		// Send the POST request
		try {
			await fetch(url, { method: 'POST', body: form });
			files = { ...files };
		} catch (error) {
			console.log(error);
			return false;
		}

		// Save the document in the db using the api
		form = new FormData();
		form.append('objectId', fields.key); // fields.key is same as id
		form.append('fileName', file.name);
		form.append('fileSize', file.size);
		form.append('fileType', file.type);
		form.append('deal_id', data.deal.id);
		form.append('athlete_id', data.deal.userDealStatus[0].userId);

		//!!!
		//Turn index into a key arry and find the index of the current Image when uploaded
		const keys = Object.keys(files); // convert keys to an array
		try {
			await fetch(s3 + '/' + encodeURIComponent(fields.key), { method: 'POST', body: form });
			files = { ...files };
		} catch (error) {
			console.log(error);
			return false;
		}

		return fields.key;
	}

	if (data.deal.userDealStatus[0].contractId) {
		hasContract = true;
		contractLink = '/api/s3object/' + data.deal.userDealStatus[0].contractId;
	}
</script>

{#if modal}
	<div
		class="centerAll w-[80%] sm:w-[40%] text-white p-5 rounded-xl border border-white text-lg bg-gray-700"
	>
		<button
			on:click={() => {
				modal = false;
			}}
			class="text-red-500 font-extrabold text-xl absolute right-2 top-1">X</button
		>
		<p class="text-red-500">
			Finialized contracts cannot be resubmitted make sure you have sucessfully agreed on the terms
			of the deal with the athlete
		</p>

		<button
			on:click|once={async () => {
				let id = await upload(currFile);
				contractLink = '/api/s3object/' + id;
				hasContract = true;
				modal = false;
			}}
			type="submit"
			class="p-2 bg-green-500 mt-5 rounded-full">Submit Contract</button
		>
	</div>
{/if}
<div class="text-white p-10">
	<h1 class="text-center font-extrabold -mt-8 text-4xl">
		Contract for {data.deal.userDealStatus[0].user.name}
	</h1>
	<h1 class="text-center font-extrabold text-gray-400 mb-10 text-2xl">
		Deal Title: {data.deal.title}
	</h1>
	<h1 class="text-center font-extrabold text-2xl mb-2">Contract templates</h1>
	<div class="flex flex-row w-full justify-center mb-10 space-x-0 sm:space-x-5">
		<a
			class="w-40 p-4 bg-gray-700 border rounded-xl border-white"
			href={NILQuickFacts}
			target="_blank"
		>
			<img class="mb-5 w-[10vw] mx-auto" src="https://shmul.dev/assets/contract.png" />
			<p class="text-center">NIL quick facts</p>
		</a>
		<a
			class="w-40 p-4 bg-gray-700 border rounded-xl border-white"
			href={SponsorshipAgreement}
			target="_blank"
		>
			<img class="mb-5 w-[10vw] mx-auto" src="https://shmul.dev/assets/contract.png" />
			<p class="text-center">Sponsorship agreement</p>
		</a>
		<a
			class="w-40 p-4 bg-gray-700 border rounded-xl border-white"
			href={SampleExclusiveNIL}
			target="_blank"
		>
			<img class="mb-5 w-[10vw] mx-auto" src="https://shmul.dev/assets/contract.png" />
			<p class="text-center">Exclusive NIL</p>
		</a>
		<a
			class="w-40 p-4 bg-gray-700 border rounded-xl border-white"
			href={SampleNonExclusiveNIL}
			target="_blank"
		>
			<img class="mb-5 w-[10vw] mx-auto" src="https://shmul.dev/assets/contract.png" />
			<p class="text-center">Non Exclusive NIL</p>
		</a>
	</div>
	<h1 class="text-center font-extrabold mt-10 text-4xl">Athlete Contact Info</h1>
	<div
		class="w-[85%] md:w-[60%] flex flex-col sm:flex-row justify-between space-y-5 sm:space-y-0 my-10 mx-auto items-center"
	>
		<p class="p-5 border border-white text-sm md:text-lg bg-gray-700 rounded-full">
			{athlete.email}
		</p>
		<p class="p-5 border border-white text-sm md:text-lg bg-gray-700 rounded-full">
			{athlete.profile.phoneNumber}
		</p>
		<a
			href="/user-profile/{athlete.id}"
			target="_blank"
			class="p-5 border border-white text-sm md:text-lg bg-gray-700 rounded-full"
		>
			View Profile
		</a>
	</div>
	{#if !hasContract}
		<div class="w-full">
			<h1 class="text-center font-extrabold my-10 text-4xl">Upload finalized contract</h1>
			<div class="w-full sm:w-1/2 mx-auto">
				<FileDrop
					accept=".pdf"
					on:filedrop={(e) => {
						let allFiles = [...e.detail.files.accepted, ...e.detail.files.rejected];
						if (allFiles.length > 1) {
							alert('Please upload only one file');
							return;
						}
						// here i need to know if theres already a file
						if (currFile) {
							alert('You already uploaded a file');
							return;
						}
						files = e.detail.files;
						currFile = files.accepted[0];
						// upload(files.accepted[0]);
					}}
				/>
			</div>
		</div>
	{/if}
	<div class="w-full sm:w-1/2 mx-auto">
		{#if files || hasContract}
			{#if !hasContract}
				<h3 class="text-green-500">Accepted files</h3>
			{:else}
				<h3 class="text-green-500">Finalized Contract</h3>
			{/if}
			<ul class="text-white rounded-xl bg-gray-700 p-3 flex flex-row items-center justify-between">
				{#if data.deal.userDealStatus[0].contractId}
					<a href={contractLink} target="_blank">
						<!-- This stuff doesnt exist yet when the page is uploaded cause even tho it gets pushed it doesnt come back right away -->
						<li class="underline">
							{data.deal.userDealStatus[0].contract.file_name} - {formatFileSize(
								data.deal.userDealStatus[0].contract.file_size
							)}
						</li>
					</a>
				{:else}
					<li>{currFile.name} - {formatFileSize(currFile.size)}</li>
					<button
						on:click={() => {
							currFile = undefined;
							files = undefined;
						}}
					>
						<img class="w-10 h-10" src="https://shmul.dev/assets/trash.png" />
					</button>
				{/if}
			</ul>
			{#if !hasContract && files.rejected.length > 0}
				<h3 class="text-red-500">Rejected files</h3>
				<ul class="text-white">
					{#each files.rejected as rejected}
						<li>{rejected.file.name} - {rejected.error.message}</li>
					{/each}
				</ul>
			{/if}
		{/if}
		{#if !contractLink && currFile}
			<button
				on:click={() => {
					modal = true;
				}}
				class="bg-blue-500 rounded-xl text-white p-3 float-right mt-5 mb-10"
				>Send finalized contract</button
			>
		{/if}
	</div>
</div>

<style>
	.centerAll {
		position: fixed;
		left: 50%;
		top: 50%;
		-webkit-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
	}
</style>
