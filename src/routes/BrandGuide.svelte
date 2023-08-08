<script>
	let links = [];

	for (let i = 1; i <= 17; i++) {
		links.push(`https://shmul.dev/assets/brandGuide${i}.jpg`);
	}
	const brandGuideSteps = [
		'Visit [www.dapup.co](http://www.dapup.co), click “Brand Login” in the top right, then “Create an account”. Fill out the required fields, agree to the DapUp terms of service, and click “Continue.”',
		'Complete the brief questionnaire to assist DapUp in making your experience more personalized. Click Continue.',
		'A verification email will be sent to the email address you provided. Click the link to verify your email. Then login using your email and password. Click “Continue.”',
		'In the top right corner, click on your brand’s name. A drop down will appear stating “Waiting on verification.” In order for DapUp to verify your account, you must click “Edit Profile” and provide further details.',
		'Click “Edit Profile” and provide profile images, a short bio, social media links, and additional information which athletes will be able to view upon matching.',
		'After filling out all required fields, click “Update Profile.”',
		'Click “View Profile” to visit your profile page. This will be viewable to athletes.',
		'Soon after updating your profile, DapUp will be able to verify your account. Once verified, you will receive an email confirming your verification. You can then click “Creation Center” to customize new deals and opportunities.',
		'Click the create a new offer icon in the top right corner to create a post.',
		'Input offer details and click “Continue Deal”',
		'Upon reaching deliverables, select the category your brand falls under and see the recommended deliverable ideas for you to choose from and edit further.',
		'Click “Show Preview” to see how your offer will look on athletes’ feeds.',
		'Tap the right arrow to see further details of the offer. When you are satisfied, click “Go back to create offer” and click “Publish Deal”. Your offer will now be active and shown on Athletes feeds.',
		'After hitting publish, DapUp will immediately suggest two athletes based on potential match strength for you to select from. Click “Work with this athlete” if you wish to do so. If you wish to wait for athletes to express interest on your deal click “See interest on your deal.”',
		'Athletes will see your offer on their feeds and swipe to express/deny interest. Any athlete interested in working with you for this campaign will be shown in “Interested athletes.” Click on their profile link to explore athletes and select “Work with this athlete” if satisfied. Athlete will be notified of a match, and if he/she confirms, athlete will move to “User Confirmed,” so you can proceed to the contract phase.',
		'You can manage all campaigns - active, unpublished, and completed by visiting the “Creation center”',
		'To view user activity on each deal click “See User Activity”',
		'During the contract phase, you will be provided the contact details of athletes in order to finalize and execute the contract. Upon execution, the brand is required to upload a signed contract back into the DapUp platform for our records- to oversee conflicts of interest, compliance, and payment. DapUp will invoice brand for the value of the deal which is payable to the athlete plus a 10% administrative fee payable to DapUp.'
	];
</script>

<div class="w-full mt-10 flex flex-col space-y-5">
	{#each links as link, i}
		<div>
			<p class="text-center text-gold text-xl font-extrabold transform translate-y-[-10px]">
				{i + 1}
			</p>
			<p class="text-white w-[90%] -mb-3 sm:w-1/2 mx-auto">{brandGuideSteps[i]}</p>
			<img src={link} class="mt-5 w-[90%] sm:w-1/2 mx-auto w-1/2" alt="athlete guide image" />
		</div>
		{#if links.length - 1 === i}
			<!-- <hr class="w-[90%] sm:w-1/2 mx-auto" style="margin-top: -21px" /> -->
			<hr class="w-[90%] sm:w-1/2 mx-auto" />
		{:else}
			<hr class="w-[90%] sm:w-1/2 mx-auto" />
		{/if}
	{/each}
</div>

<p class="text-center text-gold text-xl mt-5 mb-3 font-extrabold">17</p>
<p class="text-white w-[90%] mb-5 sm:w-1/2 mx-auto">
	{brandGuideSteps[brandGuideSteps.length - 1]}
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
