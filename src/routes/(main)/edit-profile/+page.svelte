<script>
	// @ts-nocheck

	let user = {
		name: '',
		sport: '',
		college: '',
		year: '',
		bio: '',
		image: ''
	};

	const updateProfile = () => {
		// update the profile
		console.log(user);
	};

	import ImageCropper from './ImageCropper.svelte';
	let isModalOpen = false;
</script>

<div
	class="mt-12 bg-gray-900 text-white flex flex-col items-center justify-center space-y-8"
	style="min-height: calc(100vh - 48px);"
>
	<div
		class="profile-card flex flex-col bg-gray-800 shadow overflow-hidden mt-10 rounded-lg max-w-3xl mb-10 w-full p-6"
	>
		<form on:submit|preventDefault={updateProfile} class="w-full">
			<!-- <button on:click={openModal}>Upload and Crop Image</button> -->

			<ImageCropper bind:open={isModalOpen} />

			<div class="mb-4">
				<label class="block text-gray-300 text-sm font-bold mb-2" for="image">
					Main Profile Picture
				</label>
				<p class="text-gray-500 text-xs mb-2">Please upload a profile picture.</p>
				<button
					on:click={() => {
						isModalOpen = true;
					}}>Upload Image</button
				>
			</div>
			<div class="mb-4">
				<label class="block text-gray-300 text-sm font-bold mb-2" for="image">
					Additional Profile Images
				</label>
				<p class="text-gray-500 text-xs mb-2">Please upload a profile picture.</p>
				<div class="grid grid-cols-2 gap-12 p-10">
					<button
						class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
						>Button 1</button
					>
					<button
						class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
						>Button 2</button
					>
					<button
						class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
						>Button 3</button
					>
					<button
						class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
						>Button 4</button
					>
					<button
						class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
						>Button 5</button
					>
					<button
						class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
						>Button 6</button
					>
					<button
						class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
						>Button 7</button
					>
					<button
						class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
						>Button 8</button
					>
				</div>
			</div>
			<div class="mb-4">
				<label class="block text-gray-300 text-sm font-bold mb-2" for="name"> Name </label>
				<p class="text-gray-500 text-xs mb-2">Please enter your full name.</p>
				<input
					class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					id="name"
					type="text"
					placeholder="John Doe"
					bind:value={user.name}
				/>
			</div>
			<div class="mb-4">
				<label class="block text-gray-300 text-sm font-bold mb-2" for="sport"> Sport </label>
				<p class="text-gray-500 text-xs mb-2">What is your primary sport?</p>
				<input
					class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					id="sport"
					type="text"
					placeholder="Basketball"
					bind:value={user.sport}
				/>
			</div>
			<div class="mb-4">
				<label class="block text-gray-300 text-sm font-bold mb-2" for="college"> College </label>
				<p class="text-gray-500 text-xs mb-2">Where did you go to college?</p>
				<input
					class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					id="college"
					type="text"
					placeholder="Harvard University"
					bind:value={user.college}
				/>
			</div>
			<div class="mb-4">
				<label class="block text-gray-300 text-sm font-bold mb-2" for="year"> Year </label>
				<p class="text-gray-500 text-xs mb-2">Which year did you graduate?</p>
				<input
					class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					id="year"
					type="text"
					placeholder="2018"
					bind:value={user.year}
				/>
			</div>
			<div class="mb-4">
				<label class="block text-gray-300 text-sm font-bold mb-2" for="bio"> Bio </label>
				<p class="text-gray-500 text-xs mb-2">Tell us a little about yourself.</p>
				<textarea
					class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					id="bio"
					placeholder="Your bio here"
					bind:value={user.bio}
				/>
			</div>

			<div class="flex items-center justify-between">
				<button
					class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
					type="submit"
				>
					Update Profile
				</button>
			</div>
		</form>
	</div>
</div>

<style>
	.prof-pic-wrapper {
		display: none;
		height: 200px;
		width: 00px;
		position: relative;
		border: solid;
		overflow: hidden;
	}


	.prof-pic {
		position: absolute;
	}
</style>
