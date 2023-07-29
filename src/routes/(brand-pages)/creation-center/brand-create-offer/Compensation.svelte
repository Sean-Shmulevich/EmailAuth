<script>
	import { writable } from 'svelte/store';
	// import Button from './Button.svelte';
	// import Dropdown from './Dropdown.svelte';
	import Radio from './Radio.svelte';
	import { Button, Dropdown, DropdownItem, Chevron } from 'flowbite-svelte';

	let compensationTypes = ['Product', 'Money', 'Both'];
	let priceRanges = ['0-100', '101-200', '201-300', '301-400', '401 and more'];

	export let pay;
	let compSelected = 'Price range';
	let open = false;
	let product = '';
	let jsonData;
	$: {
		jsonData = JSON.stringify({ pay, compSelected, product });
	}
</script>

<!-- <div class="flex p-5 flex-col sm:flex-row items-center">
	<label
		class="text-gray-300 text-sm font-bold text-left w-fit sm:mr-5 whitespace-nowrap"
		for="estimated-payment">Estimated Payment</label
	>
	<input
		id="estimated-payment"
		name="estimated-payment"
		type="text"
		bind:value={$pay}
		class="shadow p-2 appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
		placeholder="Estimated Pay or Range"
	/>
</div> -->
<p>Compensation Type</p>
<Radio options={compensationTypes} bind:selected={pay} inputName="Compensation type" />
{#if pay === 'Product' || pay === 'Both'}
	<input
		bind:value={product}
		type="text"
		class="mx-5 mt-5 shadow appearance-none border rounded mb-5 w-[90%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
		placeholder="Nike Jordan 1 Retro High OG 'University Blue'"
	/>
{/if}

{#if pay === 'Money' || pay === 'Both'}
	<Button class="w-full text-center bg-gray-700 border border-white mb-2"
		><Chevron>{compSelected}</Chevron></Button
	>
	<Dropdown bind:open>
		{#each priceRanges as comp}
			<DropdownItem
				on:click={(e) => {
					compSelected = comp;
					open = false;
				}}>{comp}</DropdownItem
			>
		{/each}
	</Dropdown>
{/if}

<!-- Hidden Input -->
<input type="hidden" bind:value={jsonData} name="estimated-payment" />
