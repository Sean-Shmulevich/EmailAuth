<script>
	export let data;
	let publishedDeals = data.publishedDeals;
	let unpublishedDeals = data.unpublishedDeals;
	let completedDeals = data.completedDeals;
	let currentDealList = publishedDeals;
</script>

<div class="text-black">
	<div class="flex flex-row space-x-5 text-center justify-center w-full mx-auto">
		<button
			on:click|preventDefault={() => (currentDealList = publishedDeals)}
			class="text-white w-40 p-5 rounded-xl bg-red-800 text-center mt-10 text-xl">Active</button
		>
		<button
			on:click|preventDefault={() => (currentDealList = unpublishedDeals)}
			class="text-white w-40 p-5 rounded-xl bg-red-800 text-center mt-10 text-xl"
			>Unpublished</button
		>
		<button
			on:click|preventDefault={() => (currentDealList = completedDeals)}
			class="text-white w-40 p-5 rounded-xl bg-red-800 text-center mt-10 text-xl">Completed</button
		>
		<a
			class="text-white w-40 p-5 rounded-xl bg-red-800 text-center mt-10 text-xl"
			href="/creation-center/brand-create-offer"
		>
			create new offer
		</a>
	</div>
	{#each currentDealList as deal}
		<div class="bg-white rounded-xl my-10 w-[80%] md:w-[50%] flex flex-col shadow-md p-5 mx-auto">
			<div class="bg-gray-200 w-full sm:w-[60%] mx-auto">
				<img
					src={'https://visafoto.com/img/docs/zz_30x40.jpg'}
					alt={deal.title}
					class="w-full h-full object-cover"
				/>
				<!-- You need to implement the Image component yourself -->
			</div>
			<div class="p-8 w-3/4">
				<h1 class="font-bold text-xl mb-2">{deal.title}</h1>
				<p class="text-gray-700 text-base">Description: {deal.shortDescription}</p>
				<div class="mt-4">
					<div class="flex items-center">
						<div class="text-sm text-gray-500">{deal.sportPreference}</div>
						<div class="ml-3 text-sm text-gray-500">{deal.genderPreference}</div>
					</div>
					<div class="mt-2 flex items-center">
						<div class="text-sm text-gray-500">{deal.location}</div>
						<div class="ml-3 text-sm text-gray-500">{deal.inPersonOrVirtual}</div>
					</div>
					<div class="text-sm text-gray-500">
						Event type: {deal.eventType !== '' ? deal.eventType : 'no event type'}
					</div>
					<div class="text-sm text-gray-500">
						End Date: {deal.endDate.toISOString().slice(0, 10)}
					</div>
					<div class="text-sm text-gray-500">Payment: {deal.estimatedPayment}</div>
					<div class="text-sm text-gray-500">Athletes: {deal.athleteCount}</div>
					<div class="mt-2 flex items-center">
						<div class="text-sm text-gray-500">
							Published: {deal.publishDate.toISOString().slice(0, 10)}
						</div>
					</div>
				</div>
			</div>
		</div>
	{/each}
</div>

<style>
</style>
