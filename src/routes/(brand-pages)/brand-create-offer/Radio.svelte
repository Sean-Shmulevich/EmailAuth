<script>
	// based on suggestions from:
	// Sami Keijonen https://webdesign.tutsplus.com/tutorials/how-to-make-custom-accessible-checkboxes-and-radio-buttons--cms-32074
	// and Inclusive Components by Heydon Pickering https://inclusive-components.design/toggle-button/

	export let options;
	export let userSelected = options[0].value;
	export let fontSize = 16;
	export let flexDirection = 'column';

	export let selected;

	function onChange(event) {
		selected = event.currentTarget.value;
	}
</script>

<div class="flex justify-center {flexDirection !== 'row' ? 'flex-col' : 'flex-row '}">
	{#each options as option}
		<label class="flex items-center justify-center space-x-2">
			<input
				class="form-radio h-4 w-4 text-blue-500"
				checked={selected === option}
				on:change={onChange}
				type="radio"
				name={option}
				value={option}
			/>
			<span>{option}</span>
		</label>
	{/each}
</div>

<style>
</style>
