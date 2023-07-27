<script>
	import { Button, Dropdown, DropdownItem, Chevron, Radio } from 'flowbite-svelte';
	//event type specify or all event types
	//multiple dropdowns per event type

	//displatch action dropdown item picked and update deliverables
	//  from +page.svelte
	//or bind it to deliverables = [{id:0, value: ""}]
	//and update the bound varible
	export let eventType;
	export let deliverables;
	export let eventCampaignOrSingle;
	import DelData from './DelData.js';
	let placement = 'top';
	console.log(DelData);
	let eventTypeParsed;
	let dropdownOpen = false;
	$: {
		if (eventType) {
			eventTypeParsed = eventType.toLowerCase().replace(/\s+/g, '_');
		}
	}
	let dropdownOpenArr = new Array(Object.entries(DelData).length).fill(false);
	console.log(dropdownOpenArr);
</script>

{#if eventCampaignOrSingle === 'Campaign'}
	{#each Object.entries(DelData) as [eType, dels], i}
		<Button><Chevron>{eType}</Chevron></Button>
		<Dropdown bind:open={dropdownOpenArr[i]} {placement} class="overflow-y-scroll h-52">
			{#each dels as deliverable}
				<DropdownItem
					on:click={() => {
						dropdownOpenArr[i] = false;
						let lastInput = deliverables.length - 1;
						if (deliverables[lastInput].value === '' && lastInput === 0) {
							deliverables[lastInput] = { id: 0, value: deliverable.value };
						} else {
							deliverables = [
								...deliverables,
								{ id: deliverables.length, value: deliverable.value }
							];
						}
					}}
				>
					<p class="font-bold">{deliverable.name}</p>
					<p>{deliverable.value}</p>
				</DropdownItem>
				<hr class="text-black" />
			{/each}
		</Dropdown>
		<!-- <br /> -->
	{/each}
{:else if eventType}
	<Button><Chevron>{eventType}</Chevron></Button>
	<Dropdown {placement} bind:open={dropdownOpen} class="overflow-y-scroll h-52">
		{#each DelData[eventTypeParsed] as del}
			<DropdownItem
				on:click={() => {
					dropdownOpen = false;
					let lastInput = deliverables.length - 1;
					if (deliverables[lastInput].value === '' && lastInput === 0) {
						deliverables[lastInput] = { id: 0, value: del.value };
					} else {
						deliverables = [...deliverables, { id: deliverables.length, value: del.value }];
					}
				}}
			>
				<p class="font-bold">{del.name}</p>
				<p>{del.value}</p>
			</DropdownItem>
			<hr class="text-black" />
		{/each}
	</Dropdown>
{/if}
