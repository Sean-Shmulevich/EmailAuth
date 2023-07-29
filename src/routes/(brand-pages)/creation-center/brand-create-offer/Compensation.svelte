<script>
	import { writable } from 'svelte/store';
	// import Button from './Button.svelte';
	// import Dropdown from './Dropdown.svelte';
	import Radio from './Radio.svelte';
	import { Button, Dropdown, DropdownItem, Chevron } from 'flowbite-svelte';

	let compensationTypes = ['Product', 'Money', 'Both'];
	let priceRanges = ['0-100', '101-200', '201-300', '301-400', '401 and more'];

	export let pay;
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

<Radio options={compensationTypes} bind:selected={pay} inputName="Compensation type" />
