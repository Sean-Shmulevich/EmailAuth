<script lang="ts">
	import '../app.css';
	import { enhance } from '$app/forms';
	import type { PageData } from './(make-user)/$types';
	import { onMount, onDestroy } from 'svelte';
	import { Button, Dropdown, DropdownItem, Chevron, Avatar } from 'flowbite-svelte';

	export let data: PageData;
</script>

<html lang="en">
	<head>
		<meta charset="utf-8" />
		<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
		<meta name="viewport" content="width=device-width" />
		<title>Demo mailbox</title>
	</head>
	<body>
		<header class="w-full body-font bg-blue-300 fixed">
			<div class="container sticky mx-auto flex flex-wrap pt-5 flex-col md:flex-row items-center">
				<!-- svelte-ignore a11y-missing-attribute -->
				<a class="flex title-font font-mediums items-center text-white mb-4 md:mb-0" style="margin-top:-18px">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						class="w-10 h-10 text-white p-2 bg-blue-500 rounded-full"
						viewBox="0 0 24 24"
					>
						<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
					</svg>
					<span class="ml-3 text-3xl gold">DapUp</span>
				</a>
				<nav class="md:ml-auto flex flex-wrap items-center text-base justify-center" style="margin-bottom:18px">
					{#if data.msg === 'not authenticated'}
						<span class="mr-6 text-gray-300">Login/Sign Up: </span>
						<a
							href="/login"
							class="mr-10 hover:bg-gray-300 hover:text-gray-500 bg-gray-500 text-white font-semibold inline-flex items-center mr-5 px-4 py-2 rounded-full bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30"
						>
							Athletes
						</a>

						<a
							href="login"
							class="hover:text-gray-500 hover:bg-gray-300 bg-gray-500 text-white font-semibold inline-flex items-center px-4 py-2 rounded-full bg-grey-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30"
						>
							Brands
						</a>
						<!-- if data.msg === 'email authenticated' -->
					{:else}
						<Button pill class="bg-black !p-1" id="avatar_with_name">
							<Avatar
								src="https://arkansasrazorbacks.com/wp-content/uploads/2021/12/Ayden-Owens-MTR-2021-22.jpg"
								class="mr-2"
							/>
							{data.user.email}
						</Button>
						<Dropdown inline triggeredBy="#avatar_with_name">
							<div slot="header" class="px-4 py-2 bg-blue-500">
								{#if data.msg === 'email authenticated'}
									<span class="block text-sm text-gray-900"> Waiting on verification </span>
								{/if}
							</div>

							<DropdownItem class="text-center" href="/user-profile/{data.user.userId}"
								>View Profile</DropdownItem
							>
							<DropdownItem class="text-center" href="/edit-profile/{data.user.userId}"
								>Edit Profile</DropdownItem
							>
							{#if data.msg === 'fully authenticated'}
								<h1>hello user is admin authenticated</h1>
							{/if}
							<form action="?/logout" method="post" use:enhance>
								<DropdownItem type="submit" slot="footer">Sign out</DropdownItem>
							</form>
						</Dropdown>
					{/if}
				</nav>
			</div>
		</header>
		<main>
			<slot />
		</main>
	</body>
</html>

<style lang="postcss">
	:global(main h1) {
		@apply mb-2 w-full text-3xl font-semibold;
	}
	:global(main label) {
		@apply mb-1 w-full text-sm font-medium;
	}
	:global(main input) {
		@apply my-1 mb-2 w-full rounded border px-2 py-1.5;
	}
	:global(main input[type='submit']) {
		@apply mb-2 w-full cursor-pointer rounded border bg-black px-2 py-1.5 font-medium text-white;
	}
	:global(main p.message) {
		@apply text-sm;
	}
	:global(main p.error) {
		@apply text-sm text-red-400;
	}
	/* :global(main a) {
		@apply mx-auto block w-fit text-indigo-500  hover:underline;
	} */
	:global(form) {
		@apply my-2;
	}
	:global(main form p) {
		@apply text-sm text-zinc-500;
	}
</style>
