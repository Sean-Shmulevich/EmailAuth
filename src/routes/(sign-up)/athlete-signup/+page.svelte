<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';
	import SportRadio from './SportRadio.svelte';
    import Radio from './Radio.svelte';
    import TOS from './TOS.svelte';
    import SignUpForm from '../SignUpForm.svelte';

	export let form: ActionData;
	let genderPreference;
	let showTOS = false;
	let sportPref;
	$: {
		if (form && form.sport) {
			sportPref = form.sport;
		}
	}
</script>

{#if showTOS}
    <div
        class="centerAll border border-black w-[90%] overflow-y-scroll sm:w-[80%] h-[60vh] rounded-xl bg-white z-10 p-10"
        >
        <TOS bind:showTOS />
    </div>
{/if}

<!-- the signupform by default creates a form with the "email" and "password" inputs already in the form -->
<SignUpForm formTitle="Create an athlete account" bind:form bind:showTOS>

    <label for="name">Full Name</label><br />
    <input class="w-full" id="name" name="name" value={form?.name ?? ''} /><br />

    <label for="university">University</label><br />
    <input class="w-full" id="university" name="university" value={form?.university ?? ''} /><br />

    <label for="sport">Sport</label><br />
    <SportRadio bind:sportPref /><br />

    <label for="gender-preference">Gender</label><br />
    <Radio
        inputName={'gender-preference'}
        bind:selected={genderPreference}
        options={['Male', 'Female']}
        flexDirection="row"
    />

</SignUpForm>

<style lang="postcss">
	.centerAll {
		position: absolute;
		left: 50%;
		top: 50%;
		-webkit-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
	}
	h1 {
		/* TODO this styles could be problematic */
		@apply lg:mt-20 md:mt-24 sm:mt-28 mt-32  mb-2 w-full text-3xl font-semibold;
	}
	label {
		@apply mb-1 w-full text-sm font-medium;
	}
	input {
		@apply my-1 mb-2 rounded border px-2 py-1.5;
	}
	input[type='checkbox'] {
		@apply my-1 mb-2 rounded border px-2 py-1.5;
	}
	input[type='submit'] {
		@apply mb-2 w-full cursor-pointer rounded border bg-black px-2 py-1.5 font-medium text-white;
	}
	p.message {
		@apply text-sm;
	}
	p.error {
		@apply text-sm text-red-400;
	}
	/* :global(main a) {
		@apply mx-auto block w-fit text-indigo-500  hover:underline;
	} */
	form {
		@apply my-2;
	}
	form p {
		@apply text-sm text-zinc-500;
	}
</style>
