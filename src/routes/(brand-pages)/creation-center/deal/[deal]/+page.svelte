<script>
	export let data;
	export let form;
	// console.log(data.userDeals);

	let currDeal = data.deal;
	if (currDeal.location === '') {
		currDeal.location = 'No location set';
	}
	let dealImg = 'https://localhost:5173/api/s3object/1690047383938a750a7168ff2492899697beefcb7dc6e';
	if (data.dealImage) {
		dealImg = `/api/s3object/${data.dealImage.id}`;
	}
</script>

<!-- <p class="text-white">{JSON.stringify(data.dealImage)}</p> -->
<div class="w-[90%] mx-auto bg-gray-800 rounded-xl mt-5 p-5">
	<h2 class="text-center text-3xl mb-2 text-white">{currDeal.title}</h2>
	<hr />
	<p>{currDeal.eventType}</p>
	<p>{currDeal.sportPreference}</p>
	<p>{currDeal.genderPreference}</p>
	<!-- <p>{currDeal.shortDescription}</p> -->
	<!-- <p>{currDeal.endDate}</p> -->
	<!-- <p>{currDeal.publishDate}</p> -->
	<!-- <p>{currDeal.isCampaign}</p> -->
	<!-- <p>{currDeal.isCampaign}</p> -->
	{#if currDeal.location !== ''}
		<p>location: {currDeal.location}</p>
	{:else}
		<p>location {currDeal.inPersonOrVirtual}</p>
	{/if}
	<p>{currDeal.endDate}</p>
	{#each currDeal.goals as goal}
		<p>{goal}</p>
	{/each}
	<p>{currDeal.estimatedPayment}</p>
	{#each currDeal.recommendedDeliverables as dels}
		<p>{dels}</p>
	{/each}

	<img class="mt-5 rounded-2xl w-[20%]" src={dealImg} alt="deal main {data.dealImage}" />
</div>

<!-- show a deal and interesed users-->
