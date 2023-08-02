<script>
	// A radio with a value custom.
	let goal;
	let option = '';
	let interests = [
		'grow personal network',
		'increase career opportunities',
		'make money',
		'increase social media footprint',
		'connect with community',
		'custom'
	];
	export let selected;
	let custom;
	if (selected !== null && !interests.includes(selected)) {
		custom = selected;
		selected = 'custom';
	}
	function onChange(event) {
		selected = event.currentTarget.value;
	}
</script>

<div class="">
	{#each interests as option}
		<label class="my-4 flex items-center w-full justify-center'}">
			<input
				class="form-radio h-4 text-blue-500"
				checked={selected === option}
				on:change={onChange}
				type="radio"
				name="goal"
				value={option}
			/>
			<span class="ml-3 mr-5">{option}</span>
		</label>
	{/each}
</div>
{#if (selected && selected === 'custom') || (selected !== null && !interests.includes(selected))}
	<div class="mt-5">
		<label class="text-gray-300 text-sm font-bold mb-4 text-center" for="event-type"
			>Custom goal</label
		>
		<input
			id="goal-custom"
			name="goal-custom"
			type="text"
			bind:value={custom}
			class="mx-5 shadow appearance-none border rounded mt-2 mb-5 w-[90%] py-2 px-3 text-white bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
			placeholder="ex: personal network growth"
		/>
	</div>
{/if}
