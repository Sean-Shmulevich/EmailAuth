<script>
	import Cropper from 'svelte-easy-crop';
	import getCroppedImg from './canvasUtils';
	import { filedrop } from 'filedrop-svelte';
	import { invalidateAll } from '$app/navigation';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	let crop = { x: 0, y: 0 };
	let zoom = 1;
	let image, fileinput, pixelCrop;

	let files = [];

	export let open;
	export let croppedImage;

	function cropSubmit() {
		dispatch('cropSubmit', {
			text: 'cropSubmitted',
			file: croppedImage
		});
	}

	export let square;
	let aspect;
	let width;
	let height;
	export let mobile = false;
	//this reactive block Im not sure if it needs to be in the block
	$: {
		if (square) {
			aspect = 1;
			width = 300;
			height = 300;
			aspect = aspect;
			width = width;
			height = height;
		} else {
			aspect = 3 / 4;
			width = 300;
			height = 400;
			aspect = aspect;
			width = width;
			height = height;
		}
		if (mobile) {
			aspect = 9 / 16;
			width = 225;
			height = 400;
			aspect = aspect;
			width = width;
			height = height;
		}
	}

	let profilePicture, style;

	function previewCrop(e) {
		pixelCrop = e.detail.pixels;
		const { x, y, width } = e.detail.pixels;
		const scale = 200 / width;
		profilePicture.style = `margin: ${-y * scale}px 0 0 ${-x * scale}px; width: ${
			profilePicture.naturalWidth * scale
		}px;`;
	}
	function onFileSelected(e) {
		let imageFile = e.target.files[0];
		let reader = new FileReader();
		reader.onload = (e) => {
			image = e.target.result;
		};
		reader.readAsDataURL(imageFile);
	}

	function reset() {
		croppedImage = null;
		image = null;
	}
</script>

<div
	class="fixed inset-1/2 w-3/4 h-3/4 bg-gray-500 rounded-xl p-10 transform -translate-x-1/2 -translate-y-1/2 overflow-y-scroll z-10 {!open
		? 'nah'
		: ''} border-2 border-white flex flex-col items-center justify-center"
>
	<div class="flex justify-between w-full mb-5">
		<h2 class="font-bold text-2xl text-center w-full">Image Upload</h2>
		<button
			type="button"
			on:click|preventDefault={() => {
				open = !open;
				reset();
			}}
			class="btn close-button"
		>
			<p class="text-2xl hover:text-red-700 text-black font-bold">X</p>
		</button>
	</div>
	{#if !image}
		<h2 class="font-bold text-xl mb-3">Upload a picture for cropping?</h2>
		<input
			type="file"
			accept=".jpg, .jpeg, .png"
			on:change|preventDefault={(e) => onFileSelected(e)}
			bind:this={fileinput}
			class="input"
		/>
	{:else}
		<div style="position: relative; width: 100%; height: 300px;">
			<Cropper {image} bind:crop bind:zoom on:cropcomplete={previewCrop} {aspect} />
		</div>
		<h2 class="font-bold text-xl mb-3">Preview</h2>
		<div class="prof-pic-wrapper" style="height: {width}px; width: {height}px;">
			<img bind:this={profilePicture} class="prof-pic" src={image} alt="Profile example" {style} />
		</div>
		{#if croppedImage}
			<h2 class="font-bold text-xl mb-3">Cropped Output</h2>
			<!-- URL.createObjectURL(croppedImage) turns the file type into a temporary blob that can be seen right away -->
			<img
				src={URL.createObjectURL(croppedImage)}
				style="width:{width}px;height:{height}px"
				alt="Cropped profile"
			/><br />
			<button
				type="button"
				on:click|preventDefault={() => {
					cropSubmit();
					// console.log(croppedImage);
					// croppedImage = null;
					image = null;
					square = false;
					open = !open;
				}}
				class="btn">Submit</button
			>
		{:else}
			<br /><button
				type="button"
				on:click|preventDefault={async () => {
					croppedImage = await getCroppedImg(image, pixelCrop);
				}}
				class="btn">Crop!</button
			>
		{/if}
		<button
			type="button"
			on:click|preventDefault={() => {
				reset();
			}}
			class="btn">Start Over</button
		>
	{/if}
</div>

<style>
	.prof-pic-wrapper {
		display: none;
		position: relative;
		border: solid;
		overflow: hidden;
	}

	.prof-pic {
		position: absolute;
	}
	.nah {
		display: none;
	}
	.input {
		background-color: #222;
		border: none;
		color: #fff;
		padding: 1em;
		width: 100%;
		border-radius: 0.25rem;
		margin-bottom: 1rem;
		font-size: 1.2rem;
	}
	.input:focus {
		outline: none;
		box-shadow: 0 0 0 3px rgba(46, 184, 0, 0.5);
	}
	.btn {
		background: linear-gradient(90deg, rgba(46, 184, 0, 1) 0%, rgba(46, 163, 192, 1) 100%);
		color: white;
		border: none;
		padding: 10px 20px;
		border-radius: 5px;
		font-size: 1.2rem;
		cursor: pointer;
		margin-top: 1rem;
		margin-bottom: 1rem;
		transition: background 0.5s ease;
	}
	.btn:hover {
		background: linear-gradient(90deg, rgba(46, 184, 0, 1) 50%, rgba(46, 163, 192, 1) 50%);
	}
	.close-button {
		position: absolute;
		top: 10px;
		right: 10px;
		padding: 0;
		margin: 0;
		background: transparent;
	}
</style>
