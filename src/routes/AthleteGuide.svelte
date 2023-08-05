<script>
	let links = [];

	for (let i = 1; i <= 12; i++) {
		links.push(`https://shmul.dev/assets/athleteGuide${i}.jpeg`);
	}
	const athleteGuideSteps = [
		'Visit www.dapup.co, click “Athlete Login” in the top right, then “Create an account”. Fill out the required fields, agree to the DapUp terms of service, and click “Continue.”',
		'A verification email will be sent to the email address you provided. Click the link to verify your email. Then login using your email and password. Click “Continue.”',
		'In the top right corner, click on your email. A drop down will appear stating “Waiting on verification.” In order for DapUp to verify your account, you must click “Edit Profile” and provide further details.',
		'Click “Edit Profile” and provide profile images, your venmo, social media links, and additional information.',
		'After filling out all required fields, click “Update Profile.”',
		'Click “View Profile” to visit your profile page. This will be viewable to brands.',
		'Soon after updating your profile, DapUp will be able to verify your account. Once verified, you will receive an email confirming your verification. You can then click “Discover” to explore a feed of active deals and opportunities.',
		'When evaluating an offer, tap the far right of the offer card to see further details.',
		'Tap on the far right of the offer card again to view deliverables.',
		'If you are pleased with the offer then swipe right. If not swipe left.',
		'To view new matches, click on email in top right corner then “Matches” from the dropdown menu. If a brand matches with you and selects you for a campaign, that offer will be located here.',
		'Click “Contact Brand” or “View Profile” if you need further details on the offer before accepting. Then Click “Agree to offer” if you wish to perform this campaign. Agreeing to the offer is not binding. The brand will be in contact to finalize specifics of the contract and offer.',
		'DapUp will send your payment via Venmo according to the details of the fully executed contract (whether it be one time/monthly/etc) submitted to DapUp by the brand.'
	];
</script>

<div class="w-full mt-10 flex flex-col space-y-5">
	{#each links as link, i}
		<div>
			<p class="text-center text-gold text-xl font-extrabold transform translate-y-[-10px]">
				{i + 1}
			</p>
			<p class="text-white w-[90%] -mb-3 sm:w-1/2 mx-auto">{athleteGuideSteps[i]}</p>
			<img src={link} class="my-5 w-[90%] sm:w-1/2 mx-auto w-1/2" alt="athlete guide image" />
		</div>
		{#if links.length - 1 === i}
			<!-- <hr class="w-[90%] sm:w-1/2 mx-auto" style="margin-top: -21px" /> -->
			<hr class="w-[90%] sm:w-1/2 mx-auto" />
		{:else}
			<hr class="w-[90%] sm:w-1/2 mx-auto" />
		{/if}
	{/each}
</div>

<p class="text-center text-gold text-xl mt-5 mb-3 font-extrabold">13</p>
<p class="text-white w-[90%] mb-5 sm:w-1/2 mx-auto">
	{athleteGuideSteps[athleteGuideSteps.length - 1]}
</p>
<hr class="w-[90%] sm:w-1/2 mx-auto" />

<style>
	.text-gold {
		background: linear-gradient(45deg, #fde586 0%, #c29441 50%, #9b5d0e 100%);
		background-clip: text;
		-webkit-background-clip: text;
		color: transparent;
		letter-spacing: 0.1em;
	}
</style>
