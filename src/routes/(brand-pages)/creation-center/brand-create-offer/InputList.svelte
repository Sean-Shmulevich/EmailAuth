<script>
	export let inputs = [{ id: 0, value: '', title: '' }];
	export let inputName;
	export let titleName;
	export let showName;

	function handleValueChange(event, input) {
		input.value = event.target.value;
		inputs = [...inputs];
	}

	function handleTitleChange(event, input) {
		input.title = event.target.value;
		inputs = [...inputs];
	}

	function addInput() {
		const lastInput = inputs[inputs.length - 1];
		if (lastInput.value !== '' && lastInput.title !== '') {
			const newInputId = lastInput.id + 1;
			inputs = [...inputs, { id: newInputId, value: '', title: '' }];
		}
	}

	function deleteInput(inputId) {
		if (inputs.length > 1) {
			inputs = inputs.filter((input) => input.id !== inputId);
			inputs = [...inputs];
		}
	}
</script>

<div class="flex flex-col">
	{#each inputs as input, i}
		<div class="flex flex-col sm:flex-row space-y-4 my-4 space-x-4">
			<p>{showName} {i + 1}</p>

			<input
				class="w-40 rounded-md text-black p-2"
				type="text"
				value={input.title}
				on:input={(event) => handleTitleChange(event, input)}
				placeholder="Enter title"
			/>

			<textarea
				class="w-full rounded-md text-black p-2"
				value={input.value}
				on:input={(event) => handleValueChange(event, input)}
				placeholder="Enter deliverable"
			/>
			<button class="text-xl font-extrabold" on:click|preventDefault={() => deleteInput(input.id)}
				>-</button
			>
		</div>
	{/each}
	{#if inputs.length > 0}
		<input
			type="hidden"
			name={inputName}
			value={JSON.stringify(
				inputs
					.map((input) => ({ value: input.value, title: input.title }))
					.filter((input) => input.value.trim() !== '' && input.title.trim() !== '')
			)}
		/>
	{/if}
	<button class="text-xl font-extrabold" on:click|preventDefault={addInput}>+</button>
</div>
