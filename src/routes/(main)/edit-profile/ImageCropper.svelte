<script>
	import Cropper from 'svelte-easy-crop';
	import getCroppedImg from './canvasUtils';
	import { filedrop } from 'filedrop-svelte';
	import { invalidateAll } from '$app/navigation';

	let crop = { x: 0, y: 0 };
	let zoom = 1;
	let image, fileinput, pixelCrop;

	let files = [];

	export let open;
	export let croppedImage;

	export let square;
	let aspect;
	let width;
	let height;
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
	}

	let profilePicture, style;

	async function cropImage() {
		croppedImage = await getCroppedImg(image, pixelCrop);
	}

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
	class="fixed inset-1/2 w-3/4 h-3/4 bg-gray-500 rounded-xl p-10 transform -translate-x-1/2 -translate-y-1/2 overflow-y-scroll {!open
		? 'nah'
		: ''} border-2 border-white"
>
	<div class="flex justify-between -mt-5 mb-5">
		<h2 class="font-bold text-xl">image upload</h2>
		<button
			type="button"
			on:click={() => {
				open = !open;
				reset();
			}}
		>
			<p class="text-2xl hover:text-red-700 text-black font-bold -mr-8 -mt-4">X</p>
		</button>
	</div>
	{#if !image}
		<h2>Upload a picture for cropping?</h2>
		<input
			type="file"
			accept=".jpg, .jpeg, .png"
			on:change={(e) => onFileSelected(e)}
			bind:this={fileinput}
		/>
	{:else}
		<h2>svelte-easy-crop</h2>
		<div style="position: relative; width: 100%; height: 300px;">
			<Cropper {image} bind:crop bind:zoom on:cropcomplete={previewCrop} {aspect} />
		</div>
		<h2>Preview</h2>
		<div class="prof-pic-wrapper" style="height: {width}px; width: {height}px;">
			<img bind:this={profilePicture} class="prof-pic" src={image} alt="Profile example" {style} />
		</div>
		{#if croppedImage}
			<h2>Cropped Output</h2>
			<img src={croppedImage} style="width:{width}px;height:{height}px" alt="Cropped profile" /><br
			/>
			<button
				type="button"
				on:click={() => {
					reset();
					console.log(croppedImage);
					croppedImage = null;
					image = null;
					square = false;
					open = !open;
				}}>Submit</button
			>
		{:else}
			<br /><button
				type="button"
				on:click={async () => {
					croppedImage = await getCroppedImg(image, pixelCrop);
				}}>Crop!</button
			>
		{/if}
		<button
			type="button"
			on:click={() => {
				reset();
			}}>Start over?</button
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
</style>
