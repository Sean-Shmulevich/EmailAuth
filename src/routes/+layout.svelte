<script lang="ts">
	import '../app.css';
	import { enhance } from '$app/forms';
	import type { PageData } from './$types';
	// import { onMount, onDestroy } from 'svelte';
	import { Button, Dropdown, DropdownItem, Chevron, Avatar } from 'flowbite-svelte';
	// let logo = null;

	import { goto } from '$app/navigation';
	// import { onMount } from 'svelte';
	export let data: PageData;
</script>

<body class="bg-gray-900 overflow-x-hidden font-sans" style="touch-action: manipulation;">
	<!-- TODO make it fixed if we want it to be sticky -->
	<header class="w-full body-font bg-gray-800">
		<div class="container sticky mx-auto flex pt-5 flex-row justify-center items-center">
			<!-- svelte-ignore a11y-missing-attribute -->
			<a
				href="/"
				class="flex title-font font-mediums items-center text-white mb-4 md:mb-0"
				style="margin-top:-18px"
			>
				<img
					class=" transform scale-80 sm:mr-6 md:mr-0 mt-3 md:mt-0 sm:scale-100 w-40"
					src={'https://slimecars.com/assets/dapuplogo.png'}
				/>
				<!-- <img
					class=" w-14 mt-4 mr-5 ml-2 md:hidden"
					src={'https://slimecars.com/assets/dapupsmall.png'}
				/> -->
				<!-- <span class="ml-3 text-3xl gold">DapUp</span> -->
			</a>
			<nav
				class="md:ml-auto block items-center text-base justify-center z-[100]"
				style="margin-bottom:18px"
			>
				{#if data.msg === 'not authenticated'}
					<!-- <span class="mr-6 text-white">Login/Sign Up: </span> -->
					<a
						href="/login"
						class="hover:text-yellow-500 text-sm sm:text-lg hover:bg-gray-800 bg-gray-500 text-white font-semibold inline-flex items-center mr-0 sm:mr-5 px-2 sm:px-4 py-2 rounded-full bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30"
					>
						Athlete login
					</a>

					<!-- TODO COMING SOON /brand-login-->
					<a
						href="/brand-login"
						class="hover:text-yellow-500 text-sm sm:text-lg hover:bg-gray-800 bg-gray-500 text-white font-semibold inline-flex items-center px-2 sm:px-4 py-2 rounded-full bg-grey-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30"
					>
						Brand login
					</a>
					<!-- if data.msg === 'email authenticated' -->
				{:else}
					<Button
						pill
						class="h-full w-full bg-gray-700 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-70 border border-gray-100
						text-white !p-1"
						id="avatar_with_name"
					>
						<Avatar src={data.profilePicture} />
						<p class="pl-1">{data.user.name}</p>
						<svg
							class="mx-1 sm:mx-2"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<!-- Top Line -->
							<rect x="3" y="4.5" width="18" height="1.5" rx="0.75" fill="currentColor" />
							<!-- Middle Line -->
							<rect x="3" y="11" width="18" height="1.5" rx="0.75" fill="currentColor" />
							<!-- Bottom Line -->
							<rect x="3" y="17.5" width="18" height="1.5" rx="0.75" fill="currentColor" />
						</svg>
					</Button>
				{/if}
			</nav>
		</div>
		<div class="z-10 relative">
			{#if data.msg !== 'not authenticated'}
				<Dropdown class="z-12 text-white bg-gray-700 rounded-lg" triggeredBy="#avatar_with_name">
					{#if data.msg === 'email authenticated'}
						<div class="px-4 py-2 bg-red-700">
							<span class="block text-sm text-white"> Waiting on verification </span>
						</div>
					{/if}

					{#if !data.user.isBrand}
						{#if data.msg === 'fully authenticated'}
							<DropdownItem class="hover:bg-gray-600 text-center" href="/deals"
								>Discover</DropdownItem
							>
							<DropdownItem class="hover:bg-gray-600 text-center" href="/matches"
								>Matches</DropdownItem
							>
						{/if}
						<DropdownItem
							class="hover:bg-gray-600 text-center"
							href="/user-profile/{data.user.userId}">View Profile</DropdownItem
						>
						<DropdownItem
							class="hover:bg-gray-600 text-center"
							href="/edit-profile/{data.user.userId}">Edit Profile</DropdownItem
						>
					{:else}
						<DropdownItem
							class="hover:bg-gray-600 text-center"
							href="/brand-profile/{data.user.userId}">View Profile</DropdownItem
						>
						<DropdownItem
							class="hover:bg-gray-600 text-center"
							href="/brand-edit-profile/{data.user.userId}">Edit Profile</DropdownItem
						>

						{#if data.msg === 'fully authenticated'}
							<!-- <DropdownItem  class="hover:bg-gray-600 text-center" href="/brand-create-offer"
									>Create Deal</DropdownItem
								> -->
							<DropdownItem class="hover:bg-gray-600 text-center" href="/creation-center"
								>Creation Center</DropdownItem
							>
						{:else}
							<DropdownItem class="hover:bg-gray-600 text-center" href="/creation-center-clone"
								>Creation Center</DropdownItem
							>
							<DropdownItem
								class=" text-center hover:bg-blue-500 bg-blue-500"
								target="_blank"
								href="https://buy.stripe.com/7sI8zt13w9zwclWdQS">Purchase Subscription</DropdownItem
							>
						{/if}
					{/if}

					<form action="?/logout" class="text-center mx-auto" method="post" use:enhance>
						<DropdownItem class="text-center hover:bg-gray-600 " type="submit" slot="footer"
							>Sign out</DropdownItem
						>
					</form>
				</Dropdown>
			{/if}
		</div>
	</header>
	<main class="relative">
		<slot />
	</main>
</body>

<!-- 
<style lang="postcss">
	(main h1) {
		/* TODO this styles could be problematic */
		@apply lg:mt-20 md:mt-24 sm:mt-28 mt-32  mb-2 w-full text-3xl font-semibold;
	}
	(main label) {
		@apply mb-1 w-full text-sm font-medium;
	}
	(main input) {
		@apply my-1 mb-2 w-full rounded border px-2 py-1.5;
	}
	(main input[type='submit']) {
		@apply mb-2 w-full cursor-pointer rounded border bg-black px-2 py-1.5 font-medium text-white;
	}
	(main p.message) {
		@apply text-sm;
	}
	(main p.error) {
		@apply text-sm text-red-400;
	}
	/* :global(main a) {
		@apply mx-auto block w-fit text-indigo-500  hover:underline;
	} */
	(form) {
		@apply my-2;
	}
	(main form p) {
		@apply text-sm text-zinc-500;
	}
</style> -->

<style>
	.gold {
		background: radial-gradient(
				ellipse farthest-corner at right bottom,
				#fedb37 0%,
				#fdb931 8%,
				#9f7928 30%,
				#8a6e2f 40%,
				transparent 80%
			),
			radial-gradient(
				ellipse farthest-corner at left top,
				#ffffff 0%,
				#ffffac 8%,
				#d1b464 25%,
				#5d4a1f 62.5%,
				#5d4a1f 100%
			);
	}
</style>
