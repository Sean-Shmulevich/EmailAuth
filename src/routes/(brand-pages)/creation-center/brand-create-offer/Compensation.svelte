<script>
	import { writable } from 'svelte/store';
	// import Button from './Button.svelte';
	// import Dropdown from './Dropdown.svelte';
	import Radio from './Radio.svelte';
	import { Button, Dropdown, DropdownItem, Chevron } from 'flowbite-svelte';
	let priceRanges = ['$20-100', '$100-500', '$500-1000', '$1000+', 'Custom'];

	let compensationTypes = ['Money', 'Product', 'Both'];

	export let pay;
	export let eventCampaignOrSingle;
	let compSelected = 'Price range';
	let open = false;
	let product = '';
	let customPay = '';
	export let jsonData;
	$: {
		if (compSelected !== 'Custom') {
			jsonData = JSON.stringify({ pay, compSelected, product });
		} else {
			jsonData = JSON.stringify({ pay, compSelected, customPay });
		}
		console.log(jsonData);
		if (eventCampaignOrSingle === 'Campaign') {
			priceRanges = ['$100-500', '$500-1000', '$1000-5000', '$5000+', 'Custom'];
		} else {
			priceRanges = ['$20-100', '$100-500', '$500-1000', '$1000+', 'Custom'];
		}
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
<Radio
	options={compensationTypes}
	justify="left"
	bind:selected={pay}
	inputName="Compensation type"
/>
{#if pay === 'Product' || pay === 'Both'}
	<p class="text-left text-xl text-white mt-5">Product</p>
	<input
		bind:value={product}
		type="text"
		class="mx-5 shadow appearance-none border rounded mb-5 w-[90%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
		placeholder="Nike Jordan 1 Retro High OG 'University Blue'"
	/>
{/if}

{#if pay === 'Money' || pay === 'Both'}
	<Button class="w-full text-left bg-gray-700 border border-white mb-2"
		><Chevron>{compSelected}</Chevron></Button
	>
	<Dropdown bind:open placement="top">
		{#each priceRanges as comp}
			<DropdownItem
				class="text-white"
				on:click={(e) => {
					compSelected = comp;
					open = false;
				}}>{comp}</DropdownItem
			>
		{/each}
	</Dropdown>
{/if}

{#if compSelected === 'Custom'}
	<label
		class="text-gray-300 text-sm font-bold text-left w-fit sm:mr-5 whitespace-nowrap"
		for="estimated-payment">Custom Payment</label
	>
	<input
		id="estimated-payment"
		name="estimated-payment"
		type="text"
		bind:value={customPay}
		class="shadow p-2 appearance-none border rounded m-2 w-3/4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
		placeholder="Estimated Pay or Range"
	/>
{/if}

<!-- Hidden Input -->
<input type="hidden" bind:value={jsonData} name="estimated-payment" />
