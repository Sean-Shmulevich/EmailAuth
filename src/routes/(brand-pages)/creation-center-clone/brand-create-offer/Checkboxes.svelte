<script>
	export let checkboxes = [];
	export let activeOptions = [];
	export let checkboxName;

	function handleCheckboxChange(event, checkbox) {
		const { checked, value } = event.target;

		if (checked) {
			activeOptions = [...activeOptions, value];
		} else {
			activeOptions = activeOptions.filter((option) => option !== value);
		}

		checkbox.checked = checked;
	}
</script>

<div class="boxgrid">
	{#each checkboxes as checkbox}
		<label style="word-wrap: nowrap;">
			<input
				type="checkbox"
				class="mx-5"
				bind:checked={checkbox.checked}
				value={checkbox.value}
				on:change={(event) => handleCheckboxChange(event, checkbox)}
			/>
			{checkbox.label}
		</label>
	{/each}
	{#if activeOptions.length > 0}
		<input type="hidden" name={checkboxName} value={JSON.stringify(activeOptions)} />
	{/if}
</div>

<style>
	.boxgrid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-gap: 10px;
	}
</style>
