<!-- src/routes/admin/+layout.svelte -->
<script>
	export let data;
	console.log(data.showLayout);
</script>

{#if data.showLayout === undefined}
	<div class="bg-white rounded-xl mx-auto mt-10 max-w-[90%] px-10 pb-10 w-[85%] mb-12">
		<h1 class="text-center pt-10 text-6xl">{data.title}</h1>

		<div class="mt-10 flex flex-row">
			{#each data.links as link}
				<div class="mx-auto mb-10 text-center rounded-3xl py-4 w-[20%] bg-black text-white">
					<a class="text-center" href={link.link}>{link.title}</a>
				</div>
			{/each}
		</div>
	</div>
{/if}
<slot />
