<script>
	import { Button, Dropdown, DropdownItem, Chevron, Radio } from 'flowbite-svelte';
	// First create a dropdown with different social media types
	// then I need to put the current active social media types in a json list
	// allow deletion
	// put icon and name and after that input text box for link
	// keep the active social media icons in a hidden json form submit field
	// dont allow more then 3
	// send a message when there is more then 3

	let socialMediaTypes = [
		'Instagram',
		'LinkedIn',
		'Website',
		'Twitter',
		'Facebook',
		'MySpace',
		'Doordash'
	];
	let mediaType;
	let open = false;
	let pickedTypes = [];
	let message = null;
	//once message equals something only show it for a few seconds
	$: {
		if (message !== null) {
			setTimeout(() => {
				message = null;
			}, 3000);
		}
	}
</script>

<Button><Chevron>Pick 3 social media links to add to your profile</Chevron></Button>
<Dropdown
	bind:open
	placement="top"
	class="w-64 h-32 bg-white overflow-y-scroll text-black  text-left whitespace-nowrap space-y-3 text-sm"
>
	{#each socialMediaTypes as socialMedia}
		<Radio
			on:click={() => {
				open = false;
				if (pickedTypes.length < 3) {
					pickedTypes = [...pickedTypes, socialMedia];
				} else {
					message =
						'you have already picked 3 different types of social media delete one in order to replace it';
				}
			}}
			class="text-black ml-2 mt-2"
			name="social-media"
			bind:group={socialMedia}
			value={socialMedia}>{socialMedia}</Radio
		>
	{/each}
	<div class="h-2 w-full" />
</Dropdown>

{#if message !== null}
	<p class="text-red-500 text-lg text-center">{message}</p>
{/if}
