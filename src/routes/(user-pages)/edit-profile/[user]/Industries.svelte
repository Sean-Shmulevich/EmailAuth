<script>
	import { Button, Dropdown, DropdownItem, Chevron, Radio } from 'flowbite-svelte';
	let industryTypes = [
		'real estate',
		'modeling',
		'marketing',
		'retail',
		'food and beverage',
		'supply chain',
		'music',
		'entrepreneurship',
		'apparel',
		'tech',
		'law',
		'medicine',
		'gaming',
		'fitness',
		'sports',
		'NFTs',
		'crypto',
		'buisness',
		'health and wellness',
		'fashion',
		'engineering'
	];
	export let pickedTypes;
	// if (pickedTypes.length !== 0) {
	// 	for (let key in pickedTypes) {
	// 		pickedTypes = [...pickedTypes, key];
	// 	}
	// }
	let message = null;
	let open = false;
	$: {
		if (message !== null) {
			setTimeout(() => {
				message = null;
			}, 3000);
		}
	}
	function deleteInput(input) {
		if (pickedTypes.length > 0) {
			pickedTypes = pickedTypes.filter((item) => item !== input);
		}
	}
</script>

<Button class="border border-white "><Chevron>Pick top 3 industries of interest</Chevron></Button>
<Dropdown
	bind:open
	placement="top"
	class=" w-64 h-32 bg-white overflow-y-scroll overflow-x-hidden text-black  text-left whitespace-nowrap text-sm"
>
	{#each industryTypes as industry}
		<DropdownItem
			on:click={() => {
				open = false;
				if (pickedTypes.length < 3 && !pickedTypes.includes(industry)) {
					pickedTypes = [...pickedTypes, industry];
				} else if (pickedTypes.length === 3) {
					message =
						'you have already picked 3 different types of industries delete one in order to replace it';
				} else {
					message = 'you have already picked this industry';
				}
			}}
			class="text-black ml-2 mt-2"
			value={industry}>{industry}</DropdownItem
		>
	{/each}
	<div class="h-2 w-full" />
</Dropdown>
{#each pickedTypes as input, i}
	<div class="flex justify-center items-center sm:flex-row my-4">
		<div class="flex bg-gray-700 rounded-xl w-full flex-row">
			<p class="p-2 text-bold mr-10 text-center">{input}</p>
		</div>
		<button class="p-2 font-bold" on:click|preventDefault={() => deleteInput(input)}>-</button>
	</div>
{/each}
{#if pickedTypes.length > 0}
	<input type="hidden" name="industries" value={JSON.stringify(pickedTypes)} />
{/if}

{#if message !== null}
	<p class="text-red-500 text-lg text-center">{message}</p>
{/if}
