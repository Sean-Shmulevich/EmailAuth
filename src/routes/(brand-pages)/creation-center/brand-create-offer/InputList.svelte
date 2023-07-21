<script>
	export let inputs = [{ id: 0, value: '' }];
	export let inputName;
	export let showName;

	function handleInputChange(event, input) {
		input.value = event.target.value;
		inputs = [...inputs];
	}

	function addInput() {
		const lastInput = inputs[inputs.length - 1];
		if (lastInput.value !== '') {
			const newInputId = lastInput.id + 1;
			inputs = [...inputs, { id: newInputId, value: '' }];
		}
	}

	function deleteInput(inputId) {
		if (inputs.length > 1) {
			inputs = inputs.filter((input) => input.id !== inputId);
		}
	}
</script>

<div class="flex flex-col">
	{#each inputs as input, i}
		<div class="flex my-4 space-x-4">
			<p>{showName} {i + 1}</p>
			<input
				class="w-full rounded-md text-black p-2"
				type="text"
				value={input.value}
				on:input={(event) => handleInputChange(event, input)}
			/>
			<button on:click|preventDefault={() => deleteInput(input.id)}>-</button>
		</div>
	{/each}
	{#if inputs.length > 0}
		<input
			type="hidden"
			name={inputName}
			value={JSON.stringify(
				inputs.map((input) => input.value).filter((value) => value.trim() !== '')
			)}
		/>
	{/if}
	<button class="text-xl" on:click|preventDefault={addInput}>+</button>
</div>
