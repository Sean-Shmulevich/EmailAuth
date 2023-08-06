<script lang="ts">
	// import { fade } from 'svelte/transition';
	import type { PageData } from './$types';
	import AthleteGuide from './AthleteGuide.svelte';
	import BrandGuide from './BrandGuide.svelte';
	let showPolicy = false;

	export let data: PageData;
	let activeInfo = null;
	// console.log(data.user);
	let showImage = true;
	let showImage0 = true;

	// let animation = new Animation();

	// onDestroy(async () => {
	// 	console.log('destroyed');
	// 	await animation.delete();
	// 	await stopAnimation(window);
	// });

	// onMount(async () => {
	// 	console.log(animate.start());
	// 	await animation.start();
	// });
</script>

<!-- <h1>Welcome, user {data.msg}</h1>
<p>Your email is {data.user.email}</p>
<form method="post" use:enhance>
	<input type="submit" value="Sign out" />
</form> -->
{#if showPolicy}
	<div
		class="fixed z-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-black w-[90%] overflow-y-scroll sm:w-[80%] h-[60vh] rounded-xl bg-white p-10"
	>
		<div class="flex flex-row w-full justify-between">
			<p class="text-2xl font-bold">Privacy Policy</p>
			<button
				on:click={() => (showPolicy = false)}
				class="ml-auto text-2xl transform -translate-y-10 translate-x-9 text-red-500 font-extrabold"
			>
				X
			</button>
		</div>
		<br />
		<p>
			DapUp, LLC (“DapUp”, “Company” or “We”) understands the importance of privacy and accordingly,
			treats all information we receive in a responsible manner through compliance with this policy
			(“Privacy Policy”). This Privacy Policy governs the manner in which DapUp collects, uses, and
			discloses information collected from users (each, a “User“ or “You”) of our website
			(http://www.DapUpinfluence.com) (the “Website”) and our platform and its services found
			thereon (the “Platform”). This Privacy Policy applies to the Website, the Platform and any
			email, text and other communications between You and DapUp. Please review this Privacy Policy
			before accessing and using our Website and the Platform.
		</p>
		<br />
		<p>
			By accessing and using the Website and the Platform, or by otherwise providing us with Your
			Personal Information (as defined below), You acknowledge that You understand our Privacy
			Policy and expressly consent to our collection, use and disclosure of Your Personal
			Information in accordance with this Privacy Policy. If You do not agree to the terms of this
			Privacy Policy, please do not use the Website or the Platform. This Privacy Policy may change
			from time to time (see “Modification of This Privacy Policy”). Your continued use of this
			Website or Platform after we make changes is deemed to be acceptance of those changes, so
			please periodically check the Privacy Policy for updates.
		</p>
		<br />
		<p>
			INFORMATION COLLECTED BY US
			<br /><br />
			We collect several types of information from and about Users of our Website and the Platform, including
			the following information:<br /><br />
			Personal Information<br /><br />
			Personal information is data that can be used to identify or contact You personally, including,
			but not limited to, User’s name, address, email address, phone number or demographic information
			(“Personal Information” or “personally identifiable information”). DapUp may collect Personal Information
			from Users in a variety of ways, including, but not limited to, when Users access or use our Website
			or the Platform, register with DapUp, fill out a form, respond to a survey, correspond with DapUp,
			and in connection with other activities, services, features or resources we make available on our
			Website or through our Platform. If You elect to link Your account with a social media site, Your
			User information and other content for that social media account may also be collected. It is always
			Your choice whether or not to provide Personal Information. If You choose not to provide requested
			Personal Information, You may not be able to participate in certain activities or use certain features
			of the Website or the Platform.
			<br /><br />
			Technical Information
			<br /><br />
			We may also collect and use technical data and related information, such as information about Your
			device, system and application software, peripherals and other data related to Your interactions
			with the Platform (“Technical Information”). We may automatically collect Technical Information
			through cookies, flash cookies, web beacons or clear pixels and log files. The information we collect
			from these technologies may include, but is not limited to, Your browser or device type, IP address
			or other numeric codes used to identify a computer or mobile device, operating system, internet
			service provider, the referring web page, the time, frequency and duration of use, and the page
			You request. DapUp does not consider this information to be personally identifiable information.
		</p>
		<br />
		<ul>
			<li>
				Cookies: A cookie is a small data file placed on the hard drive of a User’s computer. Most
				browsers now automatically accept cookies by default, but they can also be set so that all
				or some cookies are rejected automatically or accepted or rejected on a case-by-case basis
				at the User’s option. If User does not wish to have cookies placed on User’s computer or
				wishes to be notified when they are placed, User may set User’s browser to reject cookies or
				notify User of their use. If a User has chosen to disable cookies on his or her browser,
				some of the functionality of the Website or Platform may be lost. Certain services provided
				by DapUp require that cookies be enabled in a User’s browser and cannot be used when cookies
				are disabled.
				<br /><br />
			</li>
			<li>
				Flash Cookies (or Local Shared Objects or “LSOs”): Certain features of our Website and
				Platform may use Flash cookies to collect and store information about Your settings,
				preferences, usage, and navigation to, from and on our Website. Flash cookies are data files
				similar to cookies, except that they can store more complex data.
				<br /><br />
			</li>
			<li>
				Web beacons or clear pixels: Web beacons are small graphic images on a web page or in an
				email that can be used for such things as recording the pages and advertisements that Users
				select, or tracking the performance of email marketing campaigns.
				<br /><br />
			</li>
			<li>
				Log Files: Log files are records of activity created by the computer that delivers the
				webpages requested by the User’s browser. For example, log files may record search terms or
				the link clicked to bring a User to a webpage. Log files also may record information about a
				User’s browser, such as Internet Protocol (“IP”) address, browser type, referring / exit
				pages and URLs, number of clicks, domain names, landing pages, and pages viewed. DapUp does
				not attribute the website demands stored in the log file to specific individual Users.
				<br /><br />
			</li>
			<li>
				Device information: We may collect information about the mobile device or computer used to
				access the Website or Platform, including without limitation the hardware model, operating
				system and version, browser type, unique device identifies and mobile network information.
				<br /><br />
			</li>
			<li>
				Analytics tools: We may also collect analytics data, or use third-party analytics tools, to
				help us measure traffic and usage trends for the Website and the Platform. These tools
				collect information sent by Your browser or mobile device, including, without limitation,
				information such as how often Users visit this site, what pages Users visit when they do so,
				and what other sites Users used prior to coming to this site. We use this information to
				analyze, maintain and improve the Website and Platform.
				<br /><br />
			</li>
		</ul>
		<p>
			Third Party Information<br /><br />
			We may also collect information about You from third parties and from publicly available sources.
			For example, we may receive information about You through social media APIs or otherwise (e.g.
			Facebook, Twitter, Instagram, Pinterest and others). The data we receive is dependent upon Your
			privacy settings with the social network. You should always review, and if necessary, adjust Your
			privacy settings on third-party websites and services before linking or connecting them to our
			Website or Platform.<br /><br />
			INFORMATION YOU VOLUNTARILY DISCLOSE PUBLICLY<br /><br />
			Certain features of the Platform are designed to publicly display or publish information that You
			choose to provide to other Users of the Platform or to other third parties. Public information
			will include the User’s public profile and contain first name, last name, photo, bio, gender and
			country. The details a User provides here will be visible to registered Business’s and agencies
			to the Platform.<br /><br />
			USE OF INFORMATION COLLECTED BY US <br /><br />
			DapUp may use information we collect about You or that You provide to us, including any Personal
			Information, for the following purposes: (1) to operate, maintain and improve our Website and Platform;
			(2) to provide You with information, products or services that You request from us; (3) to process
			Your registration with the Website or Platform; (4) to communicate with You regarding campaigns,
			information, Your account, features, products, services, or oﬀers that we believe may be of interest
			to You; (5) to respond to Your questions or other requests; (6) to provide software updates, product
			support, product enhancements and other services to You related to the Website or Platform; (7)
			to process any payments or changes to Your account information; (8) to conduct user surveys; (9)
			to understand how our Users use the services and resources provided on our Website and Platform;
			(10) to contact You regarding a sweepstakes, contest or promotion in which You have participated;
			(11) for internal business purposes; and (12) for any other purposes disclosed in this Privacy
			Policy at the time You provide Your information.<br /><br />
			SHARING YOUR INFORMATION WITH THIRD-PARTIES<br /><br />
			We do not rent, sell, share or otherwise disclose Your Personal Information to third parties or
			non-aﬃliated companies without Your consent, except in accordance with this Privacy Policy, including
			in the following circumstances: (i) to comply with a legal requirement, judicial proceeding, court
			order, or legal process served on us, (ii) to investigate, prevent, or take action regarding suspected
			or actual illegal activities on or through the Website or Platform such as fraud, identity theft,
			violations of Terms of Use, or infringement of intellectual property rights; (iii) in connection
			with a sale, purchase, merger, joint venture, reorganization, liquidation or dissolution of us;
			(iv) when we believe it is necessary to protect the rights, property, or safety of it or other
			persons; or (v) as otherwise required or permitted by law.<br /><br />
			We may share Personal Information with (i) third-party vendors, consultants and other service providers
			that perform services on our behalf, which may include hosting services, or providing analytics
			services; (ii) with third parties who advertise their products and services on the Website or other
			third -parties who conducts contests or sweepstakes or who may otherwise wish to send You information
			about their products and services. For example, DapUp may offer a discount or contest in conjunction
			with a co-sponsor that may have special offers or promotions that might be of interest to a User.
			In such a case, a User’s Personal Information may be shared with the co-sponsor and their use of
			such User’s Personal Information will be governed by their privacy policy.<br /><br />
			We may also use and share aggregated, non-personal information with third- parties, such as demographic
			information; the number of users who searched for a particular term or clicked on a particular
			advertisement; to better understand how Users engage with the content we are involved with, and
			to assess, improve, and quantify the response to such content. As stated earlier, such aggregated,
			non- personal information does not identify you individually.<br /><br />
			Additionally, Your information may be shared with other Users of the Platform, as needed to provide
			You our services under the Platform. For example, when an Business creates or sends a message,
			the Business’s first name, last name and company will be visible to selected Influencers who respond
			to the campaign. When an Influencer receives a message from an Business and accepts the campaign,
			their blog name and link, URL, first name, last name and social media accounts will be visible
			to Business.<br /><br />
			YOUR RIGHTS AND CHOICES FOR YOUR ACCOUNT INFORMATION AND PERSONAL INFORMATION<br /><br />
			When You sign up for a particular service that requires registration, we ask You to provide Personal
			Information. If we wish use this information in a manner diﬀerent FEC/49697.0001/10198087 than
			the purpose for which it was collected, then we will ask for Your consent prior to such use. If
			we propose to use Personal Information for any purposes other than those described in this Privacy
			Policy and/or in the specific privacy notices, we will oﬀer You an eﬀective way to opt out of the
			use of Personal Information for those other purposes. We will not collect or use sensitive information
			for purposes other than those described in this Privacy Policy and/or in the supplementary privacy
			notices, unless we have obtained Your prior consent. With respect to any Personal Information provided
			by User to DapUp, User shall have the rights to access, correct, delete, and object to its Personal
			Information. Such rights may be exercised by notice in writing sent to DapUp’s registered address
			(as shown at the end of this Privacy Policy) or by e-mail sent to support@dapup.co. Moreover, the
			User may unsubscribe to commercial communications received from DapUp by sending a request to support@dapup.co.
			User can edit User’s account information at any time and/or request their User account to be deleted
			at any time by contacting support@dapup.co; however, please note that User’s identification, billing
			and contact information may remain in DapUp’s records for some period after the deletion.<br
			/><br />
			THIRD-PARTY WEBSITES<br /><br />
			This Privacy Policy applies to DapUp’s Website and Platform only. The Website and Platform may
			contain links to websites and services of various third-parties, including our partners, suppliers,
			Businesss, sponsors, licensors and other third- parties, each of which has its own separate privacy
			and data collection practices. We do not control, recommend or endorse and are not responsible
			for these third- party websites or their content, products, services, privacy policies or data
			collection practices. These linked sites are for Your convenience and You access such third- party
			websites or content at Your own risk.<br /><br />
			PROTECTION OF PERSONAL INFORMATION<br /><br />
			We recognize the trust that our customers put in us to protect their Personal Information. We take
			that responsibility seriously and maintain reasonable and appropriate measures and safeguards to
			help protect User’s Personal Information. Unfortunately, the transmission of information via the
			internet is not completely secure. Although we do our best to protect User’s Personal Information,
			no security system is impenetrable and we cannot guarantee or promise that such information will
			remain secure at all times.<br /><br />
			CHILDREN AND PRIVACY<br /><br />
			Our Website and Platform are not intended for children and we will not request personally identifiable
			information from anyone who we know to be under the age of 18, unless we have obtained verifiable
			parental consent from a parent or guardian. We do not knowingly collect personal information from
			children under 13. If You believe that we may have collected information from a child under the
			age of 13, please contact us at support@dapup.co and we will remove the information. If you are
			a California resident and between the ages of thirteen (13) and eighteen (18), and have registered
			as a User, you may request the removal of Your content or information, by editing your account
			information or by contacting us at support@dapup.co. Please note, however, that removal of Your
			content or information from our Website or Platform does not ensure complete or comprehensive removal
			of the content or information, particularly if the content or information you posted has been copied
			and/or reposted by a third party.<br /><br />
			NOTICE TO CALIFORNIA RESIDENTS<br /><br />

			Pursuant to the California Civil Code Sections 1798.83, Users who are California residents may
			request us to provide to them once a year, free of charge, a list of the third parties to whom
			we disclosed their personal data (if any) for direct marketing purposes in the preceding
			calendar year and the categories of data disclosed to those third parties. California
			residents may contact us to make this request by email at support@dapup.co.<br /><br />
			INTERNATIONAL TRANSFERS<br /><br />
			Your information collected through the Website and Platform may be stored and processed in the
			United States or any other country in which DapUp or its subsidiaries, aﬃliates or service providers
			maintain facilities. If You are located in the European Union or other regions with law governing
			data collection and use that may diﬀer from United States law, please note that we may transfer
			information, including personal information, to a country and jurisdiction that does not have the
			same data protection laws as Your jurisdiction, and You consent to the transfer of information
			to the United States or any other country in which DapUp or its subsidiaries, aﬃliates or service
			providers maintain facilities and the use and disclosure of information about You as described
			in this Privacy Policy.<br /><br />
			MODIFICATION OF THIS PRIVACY POLICY<br /><br />
			DapUp may update this Privacy Policy at any time and from time to time in its sole discretion.
			When we do, we will update the date at the bottom of this page. User agrees that such modification
			shall be eﬀective upon posting on the Website and User will be bound to any modifications when
			User uses the Platform after such modification is posted. It is thus important for Users to frequently
			check this page to ensure that Users stay informed of any updates to our Privacy Policy. Should
			a User not agree with the changes to the Privacy Policy, User’s sole remedy shall be to close User’s
			account and to cease using the Website and Platform.<br /><br />
			CONTACT US<br /><br />
			If User has any questions or suggestions regarding our Privacy Policy, please contact us at:<br
			/><br />

			Email: support@dapup.co <br /> Last modified: 8/4/23
		</p>
	</div>
{/if}

<section
	class="img-section -mb-[150px] sm:mb-[0px] sm:h-[90vh] sm:bg-[url('https://shmul.dev/assets/dapupmainimg.png')] text-white body-font mx-0"
	style="height:95vh; background-size:cover; background-position: center center; "
>
	<div class="container mx-auto flex px-5 py-24 items-center justify-center">
		<div class="text-center mt-[15vh] lg:w-full xl:w-full">
			<h1
				class="text-4xl text-white sm:text-gray-900 -mt-44 sm:mt-0 md:text-6xl lg:text-6xl xl:text-8xl font-bold leading-tight"
				style=""
			>
				The premier matchmaking platform for athletes and brands
			</h1>
		</div>
	</div>
	<img
		class="sm:hidden block mx-auto -mt-[65px] -mb-2"
		src="https://shmul.dev/assets/dapupmainimg.png"
	/>
	<a
		href="#learn-more"
		class="text-white sm:text-black font-extrabold inline-flex w-full mx-auto text-center mt-10 flex-col-reverse items-center hover:text-blue-700"
	>
		<svg
			class="w-5 h-5 ml-2 text-white sm:text-black"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 9-9-9" />
		</svg>
		Learn more about us
	</a>
</section>

<!-- Statistics -->
<section id="learn-more" class="text-gray-600 -mx-20 body-font">
	<div class="mt-5 container px-5 py-24 mx-auto">
		<div class="flex flex-col text-center w-full mb-20">
			<h1 class="sm:text-3xl text-2xl font-extrabold title-font mb-4 text-gold">The DapUp ABC’s</h1>
			<p class="lg:w-2/3 mx-auto leading-relaxed text-base text-white">
				DapUp is driven by 4 main pillars.
				<br />Our mission is simple.
			</p>
		</div>
		<div class="flex flex-wrap -m-4 text-center max-w-[90vw] mx-auto">
			<div class="p-4 md:w-1/4 sm:w-1/2 w-full">
				<div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
					<img
						src="https://shmul.dev/assets/athleteEmpowerment.png"
						alt="athlete empowerment"
						class="w-14 white-icon h-14 mb-3 inline-block"
					/>
					<h2 class="title-font font-medium text-3xl text-gray-300">A</h2>
					<p class=" text-white leading-relaxed">
						<span class="text-gold font-bold text-lg">A</span>thlete Empowerment
					</p>
				</div>
			</div>
			<div class="p-4 md:w-1/4 sm:w-1/2 w-full">
				<div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
					<img
						src="https://shmul.dev/assets/brandAlignment.png"
						alt="brand alignment"
						class="w-14 white-icon h-14 mb-3 inline-block"
					/>

					<h2 class="title-font font-medium text-3xl text-gray-300">B</h2>
					<p class="text-white leading-relaxed">
						<span class="font-bold text-lg text-gold">B</span>rand Alignment
					</p>
				</div>
			</div>
			<div class="p-4 md:w-1/4 sm:w-1/2 w-full">
				<div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
					<img
						src="https://shmul.dev/assets/community.png"
						alt="brand alignment"
						class="w-14 white-icon h-14 mb-3 inline-block"
					/>
					<h2 class="title-font font-medium text-3xl text-gray-300">C</h2>
					<p class="text-white leading-relaxed">
						<span class="font-bold text-lg text-gold">C</span>ommunity Impact
					</p>
				</div>
			</div>
			<div class="p-4 md:w-1/4 sm:w-1/2 w-full">
				<div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
					<img
						src="https://shmul.dev/assets/Data.png"
						alt="data"
						class="w-14 white-icon h-14 mb-3 inline-block"
					/>
					<h2 class="title-font font-medium text-3xl text-gray-300">D</h2>
					<p class="text-white leading-relaxed">
						<span class="font-bold text-lg text-gold">D</span>ata Driven Growth
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="text-gray-600 -mx-20 body-font">
	<div class="mt-5 container px-5 mx-auto">
		<div class="flex flex-col text-center w-full mb-12">
			<h1 class="sm:text-3xl text-2xl font-extrabold title-font mb-4 text-gold">
				How does DapUp work?
			</h1>
		</div>
		<div class="flex flex-wrap -m-4 text-center max-w-[90vw] mx-auto">
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div
				class="p-4 sm:w-1/2 w-full cursor-pointer"
				on:click={() => {
					if (activeInfo === 'brand') {
						activeInfo = null;
					} else {
						activeInfo = 'brand';
					}
				}}
			>
				<div class="border-2 border-gray-200 hover:border-green-500 px-4 py-6 rounded-lg">
					<button class=" w-full text-white leading-relaxed">
						<h2 class="title-font font-medium text-3xl text-gray-100">Brand guide</h2>
					</button>
				</div>
			</div>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div
				class="p-4 sm:w-1/2 w-full cursor-pointer"
				on:click={() => {
					if (activeInfo === 'athlete') {
						activeInfo = null;
					} else {
						activeInfo = 'athlete';
					}
				}}
			>
				<div class="border-2 border-gray-200 hover:border-green-500 px-4 py-6 rounded-lg">
					<button class=" w-full h-full text-white leading-relaxed">
						<h2 class="title-font font-medium text-3xl text-gray-100">Athlete guide</h2>
					</button>
				</div>
			</div>
		</div>
	</div>
</section>

{#if activeInfo === 'brand'}
	<section class="text-gray-600 body-font">
		<BrandGuide />
	</section>
{/if}

{#if activeInfo === 'athlete'}
	<section class="text-gray-600 body-font">
		<AthleteGuide />
	</section>
	<!-- <AthleteGuide /> -->
{/if}
<!-- Just the dropdown back up bottom att the bottom of the component -->
{#if activeInfo !== null}
	<div style="display: grid; place-items: center;">
		<button
			class="h-auto text-center"
			on:click={() => {
				activeInfo = null;
			}}
		>
			<svg
				class="w-10 h-10 mx-auto text-white text-center"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				transform="scale(1, -1)"
				stroke="currentColor"
			>
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
			</svg>
		</button>
	</div>
{/if}
<!-- Steps -->
<section class="text-gray-600 body-font -mt-10">
	<div class="container px-5 py-24 mx-auto flex flex-wrap">
		<div class="flex flex-wrap w-full">
			<div class="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
				<div class="flex relative pb-12">
					<div class="h-full w-10 absolute inset-0 flex items-center justify-center">
						<div class="h-full w-1 bg-gray-200 pointer-events-none" />
					</div>
					<div
						class="flex-shrink-0 w-10 h-10 rounded-full bg-gray-900 border border-white inline-flex items-center justify-center text-white relative z-10"
					>
						<img
							src="https://shmul.dev/assets/customize.png"
							alt="launch"
							class="object-cover w-6 h-6"
						/>
					</div>
					<div class="flex-grow pl-4">
						<h2 class="font-bold title-font text-sm text-gray-200 mb-1 tracking-wider">
							Customize
						</h2>
						<p class="leading-relaxed text-white">
							Design a campaign using templates and recommendations from DapUp. Input athlete
							preferences, price range, dates, and deliverables.
						</p>
					</div>
				</div>
				<div class="flex relative pb-12">
					<div class="h-full w-10 absolute inset-0 flex items-center justify-center">
						<div class="h-full w-1 bg-gray-200 pointer-events-none" />
					</div>
					<div
						class="flex-shrink-0 w-10 h-10 rounded-full bg-gray-900 border border-white inline-flex items-center justify-center text-white relative z-10"
					>
						<img
							src="https://shmul.dev/assets/launch.png"
							alt="launch"
							class="object-cover w-7 h-7 transform translate-x-[-1px] translate-y-[1px]"
						/>
					</div>
					<div class="flex-grow pl-4">
						<h2 class="font-bold title-font text-sm mb-1 tracking-wider text-white">Launch</h2>
						<p class="leading-relaxed text-white">
							Publish campaign and get exposure for your brand in front of NCAA athletes actively
							using DapUp.
						</p>
					</div>
				</div>
				<div class="flex relative pb-12">
					<div class="h-full w-10 absolute inset-0 flex items-center justify-center">
						<div class="h-full w-1 bg-gray-200 pointer-events-none" />
					</div>
					<div
						class="flex-shrink-0 w-10 h-10 rounded-full bg-gray-900 border border-white inline-flex items-center justify-center text-white relative z-10"
					>
						<img
							src="https://shmul.dev/assets/match.png"
							alt="launch"
							class="object-cover w-7 h-7"
						/>
					</div>
					<div class="flex-grow pl-4">
						<h2 class="font-bold title-font text-sm text-white mb-1 tracking-wider">Match</h2>
						<p class="leading-relaxed text-white">
							Team up with athletes from your favorite teams. Choose the athlete you want to DapUp
							and connect with them directly.
						</p>
					</div>
				</div>
				<div class="flex relative pb-12">
					<div class="h-full w-10 absolute inset-0 flex items-center justify-center">
						<div class="h-full w-1 bg-gray-200 pointer-events-none" />
					</div>
					<div
						class="flex-shrink-0 w-10 h-10 rounded-full bg-gray-900 border border-white inline-flex items-center justify-center text-white relative z-10"
					>
						<img
							src="https://shmul.dev/assets/contract.png"
							alt="launch"
							class="object-cover w-6 h-6 transform translate-x-[3px]"
						/>
					</div>
					<div class="flex-grow pl-4">
						<h2 class="font-bold title-font text-sm text-white mb-1 tracking-wider">Contract</h2>
						<p class="leading-relaxed text-white">
							Hire athletes for campaigns and receive contract templates from DapUp to work from.
						</p>
					</div>
				</div>
				<div class="flex relative">
					<div
						class="flex-shrink-0 w-10 h-10 rounded-full bg-gray-900 border border-white inline-flex items-center justify-center text-white relative z-10"
					>
						<svg
							fill="none"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							class="w-5 h-5"
							viewBox="0 0 24 24"
						>
							<path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
							<path d="M22 4L12 14.01l-3-3" />
						</svg>
					</div>
					<div class="flex-grow pl-4">
						<h2 class="font-bold title-font text-sm text-white mb-1 tracking-wider">Manage</h2>
						<p class="leading-relaxed text-white">
							Keep track of all unpublished, active, and completed campaigns in one place.
						</p>
					</div>
				</div>
			</div>
			<img
				class="lg:w-3/5 md:w-1/2 object-contain object-center rounded-lg md:mt-0 mt-12 -mb-20"
				style="transform: scale(0.8) translateY(-90px)"
				src="https://shmul.dev/assets/selfie.png"
				alt="step"
			/>
		</div>
	</div>
</section>
<section class="text-gray-600 -mt-20 body-font mb-20">
	<div class="text-center w-full mb-12">
		<h1 class="sm:text-3xl text-2xl font-extrabold title-font mb-4 text-gold">Meet the team</h1>
	</div>
	<div class="mx-10 flex flex-col md:flex-row justify-center text-center items-center">
		<!-- svelte-ignore a11y-mouse-events-have-key-events -->
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			class="p-2 mb-5 mx-5 text-center bg-transparent rounded-xl border border-white w-full md:w-1/3"
			on:click|preventDefault={() => {
				showImage = !showImage;
			}}
		>
			{#if showImage}
				<div class="lg:mx-[40px] flex justify-center">
					<img src="https://shmul.dev/assets/ayden.png" alt="founder Ayden Owens-Delerme" />
				</div>
			{:else}
				<p class="relative text-left my-[20px] text-gray-200">
					Ayden is a former Arkansas student-athlete, 3x NCAA champion, and a World Championship
					competitor in track and field with a highly monetized NIL portfolio. He possesses a
					Bachelor's degree from the University of Michigan and a Master’s in Business
					Administration with a focus in Entrepreneurship from the Sam M. Walton College of Business
					at the University of Arkansas.<br /><br /> Leveraging his unique experience in college athletics
					before and after NIL’s legalization, Ayden was driven to create DapUp to eliminate the friction
					and ambiguity around brand-athlete partnerships. Ayden’s passion lies at the intersection of
					business and sport, where two industries join to drive the world forward. He is also invested
					in social justice and promoting sports opportunities to underserved communities by providing
					coaching services for youth athletes. Ayden’s mission is to create an equitable and more accessible
					market for NIL allowing all businesses and athletes to benefit.
				</p>
			{/if}
			<p class="text-lg text-white">Ayden Owens-Delerme, MBA</p>
			<p class="text-sm text-white">Founder & Chief Executive Officer <br /> 3x NCAA Champion</p>
			<p
				class="text-[15px] hidden md:block text-right text-gray-500"
				style="transform: translateY(9px)"
			>
				click for more info >
			</p>
			<p
				class="text-[15px] lg:hidden md:hidden text-right text-gray-500"
				style="transform: translateY(9px)"
			>
				tap for more info
			</p>
		</div>
		<div
			class="p-2 mb-5 mx-5 text-center bg-transparent rounded-xl border border-white w-full md:w-1/3"
			on:click|preventDefault={() => {
				showImage0 = !showImage0;
			}}
		>
			{#if showImage0}
				<div class=" lg:mx-[40px] flex justify-center">
					<img src="https://shmul.dev/assets/quintin.png" alt="founder quintin owens" />
				</div>
			{:else}
				<p class="text-left relative h-full my-[102px] text-gray-200">
					Quintin is an entrepreneur, former athlete, and a sales professional at SAE International.
					He holds a breadth of experience in understanding the needs of companies worldwide as he
					ensures they are suited with up-to-date standards for business operation.<br /><br /> As a
					small business operator and founder of an apparel company, Quintin was drawn to DapUp for the
					impact it has on helping brands like his reach the right audience. His objective is to promote
					the growth of businesses at all levels through the DapUp platform.
				</p>
			{/if}
			<p class="text-lg text-white">Quintin Owens</p>
			<p class="text-sm text-white">Chief Sales Officer<br /><br /></p>
			<p
				class="text-[15px] hidden md:block text-right text-gray-500"
				style="transform: translateY(9px)"
			>
				click more info >
			</p>
			<p
				class="text-[15px] lg:hidden md:hidden text-right text-gray-500"
				style="transform: translateY(9px)"
			>
				tap for more info
			</p>
		</div>
		<!-- <div
			class="p-2 mb-5 mx-5 text-center bg-transparent rounded-xl border border-white w-full md:w-1/3"
		>
			<div class="lg:mx-[80px] flex justify-center">
				<img class="" src="https://shmul.dev/assets/quintin.jpg" alt="chief sales officer" />
			</div>
			<p class="text-lg text-white">Quintin Owens</p>
			<p class="text-sm text-white">Chief Sales Officer<br /><br /></p>
			<p class="text-[15px] text-right text-gray-500" style="transform: translateY(9px)">
				hover for more info >
			</p>
		</div> -->
		<!-- <div class="p-4 sm:w-1/2 w-full" /> -->
	</div>
</section>
<section class="bg-gray-900 -mt-5">
	<div class="py-4 lg:py-16 px-4 mx-auto max-w-screen-md">
		<h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gold">Contact Us</h2>
		<p class="mb-8 lg:mb-16 font-light text-center text-gray-300 sm:text-xl">
			Got a technical issue? Want to send feedback? Let us know.
		</p>
		<form method="POST" action="?/contactForm" class="space-y-8">
			<div>
				<label for="email" class="block mb-2 text-sm font-medium text-gray-300">Your email</label>
				<input
					type="email"
					id="email"
					name="email"
					class="shadow-sm bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
					placeholder="name@flowbite.com"
					required
				/>
			</div>
			<div>
				<label for="subject" class="block mb-2 text-sm font-medium text-gray-300">Subject</label>
				<input
					type="text"
					id="subject"
					name="subject"
					class="block p-3 w-full text-sm bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
					placeholder="Let us know how we can help you"
					required
				/>
			</div>
			<div class="sm:col-span-2">
				<label for="message" class="block mb-2 text-sm font-medium text-gray-300"
					>Your message</label
				>
				<textarea
					id="message"
					name="message"
					rows="6"
					class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
					placeholder="Leave a comment..."
				/>
			</div>
			<button
				type="submit"
				class="py-3 px-5 text-sm font-medium text-center bg-blue-600 text-white rounded-lg sm:w-fit border-2 hover:border-2 hover:border-green-500"
				>Send message</button
			>
		</form>
	</div>
</section>

<!-- Footer -->
<footer class="text-gray-600 body-font">
	<!-- <div class="container px-5 py-24 mx-auto"> -->

	<!-- </div> -->
	<div class="bg-gray-800">
		<div class="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
			<a
				class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
			>
				<img src="https://shmul.dev/assets/dapup.png" alt="logo" class="lg:-ml-12 w-[180px] p2" />
				<!-- <span class="ml-3 text-xl">Creative Solutions</span> -->
			</a>
			<p class="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4" />
			<p
				on:click={() => {
					showPolicy = true;
				}}
				class=" text-blue-600 underline sm:ml-auto"
			>
				Privacy policy
			</p>
			<span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
				<a class="text-gray-500">
					<svg
						fill="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						class="w-5 h-5"
						viewBox="0 0 24 24"
					>
						<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
					</svg>
				</a>
				<a class="ml-3 text-gray-500">
					<svg
						fill="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						class="w-5 h-5"
						viewBox="0 0 24 24"
					>
						<path
							d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
						/>
					</svg>
				</a>
				<a class="ml-3 text-gray-500">
					<svg
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						class="w-5 h-5"
						viewBox="0 0 24 24"
					>
						<rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
						<path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
					</svg>
				</a>
				<a class="ml-3 text-gray-500">
					<svg
						fill="currentColor"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="0"
						class="w-5 h-5"
						viewBox="0 0 24 24"
					>
						<path
							stroke="none"
							d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
						/>
						<circle cx="4" cy="4" r="2" stroke="none" />
					</svg>
				</a>
			</span>
		</div>
	</div>
</footer>

<style>
	.text-gold-gradient-title {
		color: #d5ad6d; /*if no support for background-clip*/

		background: linear-gradient(
				to right,
				#b87333,
				#c8a200,
				#c3a604 10%,
				#fffdd0 20%,
				#c8a200 30%,
				#e5c100 40%,
				#fffdd0 50%,
				#c8a200 60%,
				#e5c100 70%,
				#fffdd0 80%,
				#c8a200 90%,
				#b87333 100%
			)
			repeat;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
	.text-gold {
		background: linear-gradient(45deg, #fde586 0%, #c29441 50%, #9b5d0e 100%);
		background-clip: text;
		-webkit-background-clip: text;
		color: transparent;
		letter-spacing: 0.1em;
	}

	@keyframes shine {
		0% {
			background-position: 200% center;
		}
		50% {
			background-position: 0% center;
		}
		100% {
			background-position: 200% center;
		}
	}
	ul {
		list-style-type: disc;
		list-style-position: inside;
		color: black; /* Or whatever color you prefer */
	}
	.white-icon {
		filter: invert(1); /* Inverts the colors, making black white */
	}
	@media (max-width: 768px) {
		/* Adjust the background-size value to control the zoom level on small screens */
		.img-section {
		}
	}
	.gold {
		color: #d5ad6d; /*if no support for background-clip*/
		background: -webkit-linear-gradient(transparent, transparent),
			-webkit-linear-gradient(top, rgba(213, 173, 109, 1) 0%, rgba(213, 173, 109, 1) 26%, rgba(
							226,
							186,
							120,
							1
						)
						35%, rgba(163, 126, 67, 1) 45%, rgba(145, 112, 59, 1) 61%, rgba(213, 173, 109, 1) 100%);
		background: -o-linear-gradient(transparent, transparent);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
</style>
