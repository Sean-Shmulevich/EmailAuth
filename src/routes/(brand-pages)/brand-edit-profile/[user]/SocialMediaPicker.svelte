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
		'Twitter',
		'Facebook',
		'Tik Tok',
		'Snapchat',
		'Linkedin',
		'Website'
	];
	export let links;
	//social media link map

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
	if (links !== undefined) {
		for (let key in links) {
			pickedTypes = [...pickedTypes, key];
		}
	}
	// $: {
	// 	if (links !== undefined) {
	// 		for (let key in links) {
	// 			console.log(key);
	// 			pickedTypes = [...pickedTypes, key];
	// 		}
	// 	}
	// }
	function handleValueChange(event, input) {
		let url = event.target.value;

		links[input] = url;
		links = { ...links };
		console.log(links);
	}

	function deleteInput(input) {
		if (pickedTypes.length > 0) {
			delete links[input];
			pickedTypes = pickedTypes.filter((item) => item !== input);
		}
	}
</script>

<Button class="border border-white "
	><Chevron>Pick 3 social media links to add to your profile</Chevron></Button
>
<Dropdown
	bind:open
	placement="top"
	class=" w-64 h-32 bg-white overflow-y-scroll overflow-x-hidden text-black  text-left whitespace-nowrap text-sm"
>
	{#each socialMediaTypes as socialMedia}
		<DropdownItem
			on:click={() => {
				open = false;
				if (pickedTypes.length < 3 && !pickedTypes.includes(socialMedia)) {
					pickedTypes = [...pickedTypes, socialMedia];
				} else if (pickedTypes.length === 3) {
					message =
						'you have already picked 3 different types of social media delete one in order to replace it';
				} else {
					message = 'you have already picked this social media type';
				}
			}}
			class="text-black ml-2 mt-2"
			bind:group={socialMedia}
			value={socialMedia}>{socialMedia}</DropdownItem
		>
	{/each}
	<div class="h-2 w-full" />
</Dropdown>
{#each pickedTypes as input, i}
	<div class="flex flex-col justify-center items-center sm:flex-row my-4 space-x-4">
		<p class="w-[20%]">{input}</p>

		<div class="flex w-full sm:w-[80%] flex-row">
			<input
				class="bg-gray-700 rounded-md text-white w-full p-2 mr-5"
				on:input={(event) => handleValueChange(event, input)}
				placeholder="https://www.socialmedia.com/my-profile-link"
				value={links == undefined || links[input] === undefined ? '' : links[input]}
			/>
			<button on:click|preventDefault={() => deleteInput(input)}>-</button>
		</div>
	</div>
{/each}
{#if pickedTypes.length > 0}
	<input type="hidden" name="social-media" value={JSON.stringify(links)} />
{/if}

{#if message !== null}
	<p class="text-red-500 text-lg text-center">{message}</p>
{/if}
