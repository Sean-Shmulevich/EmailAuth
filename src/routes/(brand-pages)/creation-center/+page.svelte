<script>
	export let data;
	let publishedDeals = data.publishedDeals;
	let unpublishedDeals = data.unpublishedDeals;
	let completedDeals = data.completedDeals;
	let currentDealList = publishedDeals;
	let activeButton = 'published';
	// /creation-center/deal/{deal.id}
	//  show all deal data
	//  show all interested athletes
	//  allow picking athletes option to add custom text to email
	//  admin has to be able to see athletes being selected for deals

	// /creation-center/brand-create-offer/edit/{deal.id} pending deals
</script>

<a
	title="Create a new Deal"
	class="absolute -top-[72px] sm:top-5 right-0 p-5"
	href="/creation-center/brand-create-offer"
>
	<img class="w-14" src="https://cdn-icons-png.flaticon.com/512/8070/8070671.png" />
</a>
<div class="text-black">
	<div class="flex flex-row -mt-5 w-[80%] lg:w-[40%] text-white text-center justify-center mx-auto">
		<button
			on:click|preventDefault={() => {
				currentDealList = publishedDeals;
				activeButton = 'published';
			}}
			class="w-1/3 p-3 rounded-xl {activeButton === 'published'
				? 'border-4 border-green-400'
				: ''} bg-gray-800 text-center mt-10 text-lg">Active</button
		>
		<button
			on:click|preventDefault={() => {
				currentDealList = unpublishedDeals;
				activeButton = 'unpublished';
			}}
			class="{activeButton === 'unpublished'
				? 'border-4 border-green-400'
				: ''} bg-gray-800 w-1/3 p-3 rounded-xl text-center mt-10 text-lg">Unpublished</button
		>
		<button
			on:click|preventDefault={() => {
				currentDealList = completedDeals;
				activeButton = 'completed';
			}}
			class=" {activeButton === 'completed'
				? 'border-4 border-green-400'
				: ''} bg-gray-800 w-1/3 p-3 rounded-xl text-center mt-10 text-lg">Completed</button
		>
	</div>
	{#each currentDealList as deal}
		<div class="bg-white rounded-xl mb-10 w-[80%] lg:w-[40%] flex flex-col shadow-md p-5 mx-auto">
			<div class="bg-gray-200 w-full sm:w-[60%] mx-auto">
				<img
					src={'https://visafoto.com/img/docs/zz_30x40.jpg'}
					alt={deal.title}
					class="w-full h-full object-cover"
				/>
				<!-- You need to implement the Image component yourself -->
			</div>
			<div class="p-8 w-full flex flex-row">
				<div class="w-1/2">
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
				<div class="w-1/2 text-center">
					<a class="mx-auto" href="/creation-center/brand-create-offer?dealId={deal.id}">
						<button
							class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
						>
							View activity
						</button>
					</a>
				</div>
			</div>
			{#if activeButton !== 'completed'}
				<button class="ml-auto -mt-14 mr-0 w-fit">
					<img
						class="w-10"
						src="https://w7.pngwing.com/pngs/616/37/png-transparent-trash-can-illustration-computer-icons-icon-design-delete-button-miscellaneous-text-rectangle.png"
					/>
				</button>
			{/if}
		</div>
	{/each}
</div>

<style>
</style>
