<script>
	import { Dropzone } from 'flowbite-svelte';
	export let data;
	import FileDrop from 'filedrop-svelte';
	let files;
	let options = {};
	import { page } from '$app/stores';
	let s3 = '/api/s3object';

	const url = $page.url;

	let value = [];

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

		console.log('fields.key: https://localhost:5173/api/s3object/' + fields.key);
		return fields.key;
	}
</script>

<div class="text-white p-10">
	<div class="flex flex-row w-full justify-center mb-10">
		<div class="w-40 p-4 mr-2 bg-gray-700 border rounded-xl border-white">
			<img class="mb-5 w-[80%] mx-auto" src="https://shmul.dev/assets/contract.png" />
		</div>
		<div class="w-40 p-4 border mx-2 bg-gray-700 rounded-xl border-white">
			<img class="mb-5 w-[80%] mx-auto" src="https://shmul.dev/assets/contract.png" />
		</div>
		<div class="w-40 p-4 border ml-2 rounded-xl bg-gray-700 border-white">
			<img class="mb-5 w-[80%] mx-auto" src="https://shmul.dev/assets/contract.png" />
		</div>
	</div>
	<FileDrop
		accept=".pdf"
		on:filedrop={(e) => {
			files = e.detail.files;
			upload(files.accepted[0]);
		}}
	/>
	{#if files}
		<h3>Accepted files</h3>
		<ul>
			{#each files.accepted as file}
				<li>{file.name} - {formatFileSize(file.size)}</li>
			{/each}
		</ul>
		<h3>Rejected files</h3>
		<ul>
			{#each files.rejected as rejected}
				<li>{rejected.file.name} - {rejected.error.message}</li>
			{/each}
		</ul>
	{/if}
</div>
