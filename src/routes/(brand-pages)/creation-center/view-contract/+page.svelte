<script>
	import { Dropzone } from 'flowbite-svelte';
	export let data;
	import FileDrop from 'filedrop-svelte';
	let files;
	let options = {};

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
	let presignUrl = '/api/presign';
	async function upload(file) {
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
</script>

<div class="text-white p-10">
	<FileDrop accept=".pdf" on:filedrop={(e) => (files = e.detail.files)} />
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
<!-- <Dropzone
	id="dropzone"
	bind:files
	accept="pdf"
	on:drop={dropHandle}
	on:dragover={(event) => {
		event.preventDefault();
	}}
	on:change={handleChange}
>
	<svg
		aria-hidden="true"
		class="mb-3 w-10 h-10 text-gray-400"
		fill="none"
		stroke="currentColor"
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
		><path
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
		/></svg
	>
	{#if value.length === 0}
		<p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
			<span class="font-semibold">Click to upload</span> or drag and drop
		</p>
		<p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
	{:else}
		<p>{showFiles(value)}</p>
	{/if}
</Dropzone> -->
