<script>
	export let data;
	let hasContract;
	let contractLink;

	if (data.deal.userDealStatus[0].contractId) {
		hasContract = true;
		contractLink = '/api/s3object/' + data.deal.userDealStatus[0].contractId;
	}
</script>

<a href={contractLink} target="_blank">
	<!-- This stuff doesnt exist yet when the page is uploaded cause even tho it gets pushed it doesnt come back right away -->
	<li class="underline">
		{data.deal.userDealStatus[0].contract.file_name}
	</li>
</a>
