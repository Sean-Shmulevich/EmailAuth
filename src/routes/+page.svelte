<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	// console.log(data.user);

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

<section class="text-white body-font mx-0 mt-36" style="height:75vh">
	<div class="container mx-auto flex px-5 py-24 items-center justify-center">
		<div class="text-center lg:w-full xl:w-full">
			<h1
				class="text-4xl md:text-6xl lg:text-6xl xl:text-8xl font-bold leading-tight mb-8 text-white"
			>
				The premier matchmaking platform for athletes and brands
			</h1>

			<div style="height:20vh" />
		</div>
	</div>
	<a
		href="#learn-more"
		class="inline-flex absolute w-[40%] left-0 right-0 top-[60vh] mx-auto text-center flex-col-reverse items-center text-gold hover:text-yellow-500"
	>
		<svg
			class="w-5 h-5 ml-2"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
		</svg>
		Learn more about us
	</a>
</section>

<!-- Services -->
<section class="text-gray-600 body-font -mb-40">
	<div class="container px-5 py-24 mx-auto">
		<h1 class="sm:text-3xl text-2xl font-medium title-font text-center text-white mb-20">
			Create, Connect and Manage
			<br class="hidden sm:block" />
		</h1>
		<div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
			<div class="p-4 md:w-1/3 flex">
				<div
					class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4 flex-shrink-0"
				>
					<svg
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						class="w-6 h-6"
						viewBox="0 0 24 24"
					>
						<path d="M22 12h-4l-3 9L9 3l-3 9H2" />
					</svg>
				</div>
				<div class="flex-grow pl-6">
					<h2 class="text-white text-lg title-font font-medium mb-2">Create</h2>
					<p class="leading-8 text-base text-white">
						DapUp enables your brand to customize marketing campaigns curated by data driven
						software designed to maximize your company’s ROI. Each Campaign created on the DapUp
						Platform is pre approved by our team ensuring all NCAA regulatory Compliance is
						maintained. With DapUp, partnerships are made easy.
					</p>
				</div>
			</div>
			<div class="p-4 md:w-1/3 flex">
				<div
					class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4 flex-shrink-0"
				>
					<svg
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						class="w-6 h-6"
						viewBox="0 0 24 24"
					>
						<circle cx="6" cy="6" r="3" />
						<circle cx="6" cy="18" r="3" />
						<path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />
					</svg>
				</div>
				<div class="flex-grow pl-6">
					<h2 class="text-white text-lg title-font font-medium mb-2">Connect</h2>
					<p class="leading-8 text-white text-base">
						DapUp brings the athletes to you. Athletes will express interest in your brand or
						campaign, and DapUp’s technology recommends matches based on profile alignment. Once a
						match is made, your brand can connect directly with your favorite athletes.
					</p>
				</div>
			</div>
			<div class="p-4 md:w-1/3 flex">
				<div
					class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4 flex-shrink-0"
				>
					<svg
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						class="w-6 h-6"
						viewBox="0 0 24 24"
					>
						<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
						<circle cx="12" cy="7" r="4" />
					</svg>
				</div>
				<div class="flex-grow pl-6">
					<h2 class="text-white text-lg title-font font-medium mb-2">Manage</h2>
					<p class="leading-8 text-white text-base">
						Manage all of your athlete marketing campaigns on the DapUp platform. From creating
						offers, to connecting with athletes, to executing contracts, DapUp centralizes all
						aspects of your campaign. Expand your brand, grow your influence, DapUp Your Game.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Statistics -->
<section class="text-gray-600 -mx-20 body-font">
	<div class="container px-5 py-24 mx-auto">
		<div class="flex flex-col text-center w-full mb-20">
			<h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">The DapUp ABC’s</h1>
			<p class="lg:w-2/3 mx-auto leading-relaxed text-base text-white">
				DapUp is driven by 4 main pillars.
				<br />Our mission is simple.
			</p>
		</div>
		<div class="flex flex-wrap -m-4 text-center max-w-[90vw] mx-auto">
			<div class="p-4 md:w-1/4 sm:w-1/2 w-full">
				<div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
					<svg
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						class="text-blue-500 w-12 h-12 mb-3 inline-block"
						viewBox="0 0 24 24"
					>
						<path d="M8 17l4 4 4-4m-4-5v9" />
						<path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29" />
					</svg>
					<h2 class="title-font font-medium text-3xl text-gray-300">A</h2>
					<p class=" text-white leading-relaxed">
						<span class="text-red-500 font-bold text-md">A</span>thlete Empowerment
					</p>
				</div>
			</div>
			<div class="p-4 md:w-1/4 sm:w-1/2 w-full">
				<div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
					<svg
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						class="text-blue-500 w-12 h-12 mb-3 inline-block"
						viewBox="0 0 24 24"
					>
						<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
						<circle cx="9" cy="7" r="4" />
						<path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75" />
					</svg>
					<h2 class="title-font font-medium text-3xl text-gray-300">B</h2>
					<p class="text-white leading-relaxed">
						<span class="font-bold text-md text-red-500">B</span>rand Alignment
					</p>
				</div>
			</div>
			<div class="p-4 md:w-1/4 sm:w-1/2 w-full">
				<div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
					<svg
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						class="text-blue-500 w-12 h-12 mb-3 inline-block"
						viewBox="0 0 24 24"
					>
						<path d="M3 18v-6a9 9 0 0118 0v6" />
						<path
							d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"
						/>
					</svg>
					<h2 class="title-font font-medium text-3xl text-gray-300">C</h2>
					<p class="text-white leading-relaxed">
						<span class="font-bold text-md text-red-500">C</span>ommunity Impact
					</p>
				</div>
			</div>
			<div class="p-4 md:w-1/4 sm:w-1/2 w-full">
				<div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
					<svg
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						class="text-blue-500 w-12 h-12 mb-3 inline-block"
						viewBox="0 0 24 24"
					>
						<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
					</svg>
					<h2 class="title-font font-medium text-3xl text-gray-300">D</h2>
					<p class="text-white leading-relaxed">
						<span class="font-bold text-md text-red-500">D</span>ata Driven Growth
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

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
						class="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 inline-flex items-center justify-center text-white relative z-10"
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
							<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
						</svg>
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
						class="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 inline-flex items-center justify-center text-white relative z-10"
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
							<path d="M22 12h-4l-3 9L9 3l-3 9H2" />
						</svg>
					</div>
					<div class="flex-grow pl-4">
						<h2 class="font-bold title-font text-sm mb-1 tracking-wider text-white">Launch</h2>
						<p class="leading-relaxed text-white">
							Publish campaign locally or nationally. Get exposure for your brand in front of
							athletes all over the NCAA actively using DapUp.
						</p>
					</div>
				</div>
				<div class="flex relative pb-12">
					<div class="h-full w-10 absolute inset-0 flex items-center justify-center">
						<div class="h-full w-1 bg-gray-200 pointer-events-none" />
					</div>
					<div
						class="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 inline-flex items-center justify-center text-white relative z-10"
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
							<circle cx="12" cy="5" r="3" />
							<path d="M12 22V8M5 12H2a10 10 0 0020 0h-3" />
						</svg>
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
						class="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 inline-flex items-center justify-center text-white relative z-10"
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
							<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
							<circle cx="12" cy="7" r="4" />
						</svg>
					</div>
					<div class="flex-grow pl-4">
						<h2 class="font-bold title-font text-sm text-white mb-1 tracking-wider">Contract</h2>
						<p class="leading-relaxed text-white">
							Hire athletes for campaigns in a rule compliant and legal manner. Sign transparent
							contracts within the app.
						</p>
					</div>
				</div>
				<div class="flex relative">
					<div
						class="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 inline-flex items-center justify-center text-white relative z-10"
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
							Get notified when athletes complete deliverables. Track campaign progress in one
							place.
						</p>
					</div>
				</div>
			</div>
			<img
				class="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12"
				src="https://source.unsplash.com/featured?team"
				alt="step"
			/>
		</div>
	</div>
</section>

<!-- Testinomials -->
<!-- <section class="text-gray-600 body-font">
	<div class="container px-5 py-24 mx-auto">
		<h1 class="text-3xl font-medium title-font text-white mb-12 text-center">Testimonials</h1>
		<div class="flex flex-wrap -m-4">
			<div class="p-4 md:w-1/2 w-full">
				<div class="h-full bg-gray-700 p-8 rounded">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						class="block w-5 h-5 text-gray-400 mb-4"
						viewBox="0 0 975.036 975.036"
					>
						<path
							d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"
						/>
					</svg>
					<p class="leading-relaxed mb-6 text-white">
						We've been trying to put together a functional website since I began my practice in
						April of 2012. I am happy to say we finally hired the Creative Solutions team and
						they've worked closely with us throughout the process, staying on task, on target, and
						on budget. I also appreciate their quick and courteous responses. I highly recommend
						their service!
					</p>
					<a class="inline-flex items-center">
						<img
							alt="testimonial"
							src="https://source.unsplash.com/featured?person"
							class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
						/>
						<span class="flex-grow flex flex-col pl-4">
							<span class="title-font font-medium text-white">CMO</span>
							<span class="text-white text-sm">Leading Medical Care Company</span>
						</span>
					</a>
				</div>
			</div>
			<div class="p-4 md:w-1/2 w-full">
				<div class="h-full bg-gray-700 p-8 rounded">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						class="block w-5 h-5 text-gray-400 mb-4"
						viewBox="0 0 975.036 975.036"
					>
						<path
							d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"
						/>
					</svg>
					<p class="leading-relaxed text-white mb-6">
						I am really impressed by the quality of services I received from Creative Solutions
						Solutions. You were right on schedule, charged reasonable prices, were professional and
						courteous in dealings, and delivered items well before time. I have got a good
						e-commerce site for my products. My revenue has increased because of Creative Solutions
						and I will definitely use your services again.
					</p>
					<a class="inline-flex items-center text-white">
						<img
							alt="testimonial"
							src="https://source.unsplash.com/featured?user"
							class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
						/>
						<span class="flex-grow flex flex-col pl-4">
							<span class="title-font font-medium text-gray-900">General Manager</span>
							<span class="text-gray-500 text-sm">Leading System Integrator</span>
						</span>
					</a>
				</div>
			</div>
		</div>
	</div>
</section> -->

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

<!-- DROPZONE -->
<!-- <div use:filedrop={filedropOptions} on:filedrop={(e) => { handleDrop(e) }} class="mx-6 my-6 rounded-md bg-white border-2 border-dashed border-gray-600 px-20 pt-10 pb-10">
    <div class="mt-1 flex justify-center ">
        <div class="mt-1 flex justify-center ">
            <div class="space-y-1 text-center">
                <svg class="mx-auto h-12 w-12 text-gray-600" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <div class="flex text-sm text-gray-600">
                    <label for="file-upload" class="relative cursor-pointer rounded-md font-medium text-falconblue">
                        <span>Upload a file</span>
                    </label>
                    <p class="pl-1">or drag and drop</p>
                </div>
                <p class="text-xs text-gray-500">MSG, PDF, DOC etc up to 50MB</p>
            </div>
        </div>
    </div>
</div> -->

<!-- IN-PROGRESS FILE LIST -->
<!-- {#if files.length != 0}
<div class="px-4 py-5 mb-4">
    <div class="font-medium">Pending Documents</div>
    <ul class="divide-y divide-gray-300 rounded-md border border-gray-300">
        {#each files as file, i}
        <li class="flex items-center justify-between py-3 pl-3 pr-4">
            <div class="flex w-0 flex-1 items-center"> -->
<!-- Heroicon name: mini/paper-clip -->
<!-- <svg class="h-5 w-5 flex-shrink-0 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z" clip-rule="evenodd" />
                </svg>
                <span class="ml-2 w-0 flex-1 truncate">{file.name}</span>
            </div>
            <div role="status">
                <svg aria-hidden="true" class="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-300 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                </svg>
            </div>
        </li>
        {/each}
    </ul>
</div>
{/if} -->

<!-- UPLOADED FILE LIST -->
<!-- <div class="px-4 py-5 mb-4 sm:col-span-2" data-sveltekit-preload-data="off">
    {#if objects.length != 0}
    <div class="font-medium">Saved Documents</div>
    <ul class="divide-y divide-gray-300 rounded-md border border-gray-300">
        {#each objects as object, i}
        <li class="flex items-center justify-between py-3 pl-3 pr-4">
            <div class="flex w-0 flex-1 items-center"> -->
<!-- Heroicon name: mini/paper-clip -->
<!-- <svg class="h-5 w-5 flex-shrink-0 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z" clip-rule="evenodd" />
                </svg>
                <span class="ml-2 w-0 flex-1 truncate">
                    <a href="{s3 + '/' + encodeURIComponent(object.id)}">
                    {object.file_name}
                    </a>
                </span>
            </div>
            <div class="ml-4 flex-shrink-0">{object.created}</div>
        </li>
        {/each}
    </ul>
    {:else}
    No documents saved yet
    {/if}
</div> -->

<style>
	.border-gold {
		font-weight: bold;
		background-image: linear-gradient(
			to right,
			#cb9b51 22%,
			#f6e27a 45%,
			#f6f2c0 50%,
			#f6e27a 55%,
			#cb9b51 78%,
			#e8c40d 100%
		);
		color: #0e0e0f;
	}
	.gold {
		font-weight: bold;
		background-image: linear-gradient(
			to right,
			#cb9b51 22%,
			#f6e27a 45%,
			#f6f2c0 50%,
			#f6e27a 55%,
			#cb9b51 78%,
			#e8c40d 100%
		);
		color: transparent;
		-webkit-background-clip: text;
	}
	.gold_text {
		background: linear-gradient(
			to bottom,
			#cfc09f 22%,
			#634f2c 24%,
			#cfc09f 26%,
			#cfc09f 27%,
			#ffecb3 40%,
			#3a2c0f 78%
		);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		color: #fff;
		font-family: 'Playfair Display', serif;
		position: relative;
		text-transform: uppercase;
		font-size: 2rem;
		margin: 0;
		font-weight: 400;
	}

	.gold_text:after {
		background: none;
		content: attr(data-heading);
		left: 0;
		top: 0;
		z-index: -1;
		position: absolute;
		text-shadow: -1px 0 1px #c6bb9f, 0 1px 1px #c6bb9f, 5px 5px 10px rgba(0, 0, 0, 0.4),
			-5px -5px 10px rgba(0, 0, 0, 0.4);
	}
</style>
