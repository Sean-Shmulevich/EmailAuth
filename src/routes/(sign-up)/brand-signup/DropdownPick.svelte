<script>
	import { Button, Dropdown, DropdownItem, Chevron, Radio } from 'flowbite-svelte';
	export let dropdownTypes;
	export let formInputName;
	let pickedTypes = [];
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
	export let dropdownName;
</script>

<Button class="mt-2 text-black border-4 border-gray w-full "
	><Chevron>{dropdownName}</Chevron></Button
>
<Dropdown
	bind:open
	class="w-fit rounded-lg h-48 bg-white overflow-y-scroll overflow-x-hidden text-left whitespace-nowrap text-sm"
>
	{#each dropdownTypes as industry}
		<DropdownItem
			on:click={() => {
				open = false;
				if (pickedTypes.length < 3 && !pickedTypes.includes(industry)) {
					pickedTypes = [...pickedTypes, industry];
				} else if (pickedTypes.length === 3) {
					message =
						'you have already picked 3 different options delete one in order to replace it';
				} else {
					message = 'you have already picked this option';
				}
			}}
			class="text-black w-full bg-white hover:bg-gray-200 ml-2 mt-2"
			value={industry}>{industry}</DropdownItem
		>
	{/each}
	<div class="h-2 w-full" />
</Dropdown>
{#each pickedTypes as input, i}
	<div class="flex justify-center text-black bg-white w-full sm:flex-row my-4">
		<p class="p-2">{i + 1}.</p>

		<div
			class="border-2 rounded-lg w-full flex {i === 0 && 'border-green-600'} {i === 1 &&
				'border-blue-600'} {i === 2 && 'border-red-600'} "
		>
			<div class="flex rounded-xl w-full">
				<p class="p-2 text-bold mr-10 text-center">{input}</p>
			</div>
			<button class="p-2 font-extrabold" on:click|preventDefault={() => deleteInput(input)}>
				<img
					class="w-5 min-w-[15px] filter invert"
					alt="delete deal"
					src="https://slimecars.com/assets/trash.png"
				/>
			</button>
		</div>
	</div>
{/each}
{#if pickedTypes.length > 0}
	<input type="hidden" name={formInputName} value={JSON.stringify(pickedTypes)} />
{/if}

{#if message !== null}
	<p class="text-red-500 text-sm text-center">{message}</p>
{/if}
