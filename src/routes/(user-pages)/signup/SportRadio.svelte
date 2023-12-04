<script>
	import { Button, Dropdown, DropdownItem, Chevron, Radio } from 'flowbite-svelte';
	export let sportPref;
	const sportsNames = [
		'Baseball',
		'Basketball',
		'Bowling',
		'Cross country',
		'Fencing',
		'Field hockey',
		'Football',
		'Golf',
		'Gymnastics',
		'Ice hockey',
		'Lacrosse',
		'Rifle',
		'Rowing',
		'Skiing',
		'Soccer',
		'Softball',
		'Swimming & Diving',
		'Tennis',
		'Track & field (indoor)',
		'Track & field (outdoor)',
		'Volleyball (indoor)',
		'Volleyball (beach)',
		'Water polo',
		'Wrestling'
	];
	let open = false;
</script>

<div class="flex flex-row rounded-xl items-center">
	<Button class="bg-white text-black"><Chevron>What is your primary sport?</Chevron></Button>
	<Dropdown
		bind:open
		class="bg-white w-54 h-32 overflow-y-scroll text-left whitespace-nowrap space-y-3 text-sm"
	>
		{#each sportsNames as sportName}
			<Radio
				on:click={() => (open = false)}
				class="text-black ml-2 mt-2"
				name="sport-preference"
				bind:group={sportPref}
				value={sportName}>{sportName}</Radio
			>
		{/each}
		<div class="h-2 w-full" />
	</Dropdown>
	{#if sportPref}
		<div class="ml-10">{sportPref}</div>
	{/if}
</div>
<input type="hidden" name="sport-preference" value={sportPref} />
