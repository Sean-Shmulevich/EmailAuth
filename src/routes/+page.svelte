<script lang="ts">
	import type { PageData } from './$types';
	import AthleteGuide from './AthleteGuide.svelte';
	import BrandGuide from './BrandGuide.svelte';

	export let data: PageData;
	let activeInfo = null;
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
<section
	class="text-white body-font mx-0"
	style="height:75vh; background-image: url('https://shmul.dev/assets/dapupmain.jpeg'); background-size: cover; background-position: center center"
>
	<div class="container mx-auto flex px-5 py-24 items-center justify-center">
		<div class="text-center lg:w-full xl:w-full">
			<h1
				class="text-4xl mt-24 md:text-6xl lg:text-6xl xl:text-8xl font-bold leading-tight mb-8"
				style="text-shadow: 0 0 5px black;"
			>
				The premier matchmaking platform for athletes and brands
			</h1>
		</div>
	</div>
	<a
		href="#learn-more"
		class="inline-flex absolute w-[40%] left-0 right-0 top-[60vh] mx-auto text-center flex-col-reverse items-center hover:text-yellow-500"
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

<!-- Statistics -->
<section id="learn-more" class="text-gray-600 -mx-20 body-font">
	<div class="mt-5 container px-5 py-24 mx-auto">
		<div class="flex flex-col text-center w-full mb-20">
			<h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gold">The DapUp ABC’s</h1>
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
			<h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gold">
				How does DapUp work?
			</h1>
		</div>
		<div class="flex flex-wrap -m-4 text-center max-w-[90vw] mx-auto">
			<div class="p-4 sm:w-1/2 w-full">
				<div class="border-2 border-gray-200 hover:border-green-500 px-4 py-6 rounded-lg">
					<button
						on:click={() => {
							if (activeInfo === 'brand') {
								activeInfo = null;
							} else {
								activeInfo = 'brand';
							}
						}}
						class=" w-full text-white leading-relaxed"
					>
						<h2 class="title-font font-medium text-3xl text-gray-100">Brand guide</h2>
					</button>
				</div>
			</div>
			<div class="p-4 sm:w-1/2 w-full">
				<div class="border-2 border-gray-200 hover:border-green-500 px-4 py-6 rounded-lg">
					<button
						on:click={() => {
							if (activeInfo === 'athlete') {
								activeInfo = null;
							} else {
								activeInfo = 'athlete';
							}
						}}
						class=" w-full h-full text-white leading-relaxed"
					>
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
				src="https://shmul.dev/assets/dappingup.jpeg"
				alt="step"
			/>
		</div>
	</div>
</section>
<section class="text-gray-600 body-font mb-20 flex flex-col">
	<div class="mt-5 container px-5 mx-auto">
		<div class="flex flex-col text-center w-full mb-12">
			<h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gold">Meet the team</h1>
		</div>
		<div class="flex flex-col sm:flex-row flex-wrap justify-center text-center mx-auto">
			<div
				class="p-4 mb-5 mx-5 text-center bg-transparent rounded-xl border border-white w-full md:w-1/3"
			>
				<div class="flex justify-center">
					<img
						src="https://pbs.twimg.com/profile_images/1580783698080833538/knk3o2Lm_400x400.jpg"
						alt="founder Ayden Owens-Delerme"
					/>
				</div>
				<p class="text-lg text-white">Ayden Owens-Delerme</p>
				<p class="text-sm text-white">Short description overview thing</p>
				<p class="text-[10px] text-right text-gray-500" style="transform: translateY(9px)">
					hover for more info >
				</p>
			</div>
			<div
				class="p-4 mb-5 mx-5 text-center bg-transparent rounded-xl border border-white w-full md:w-1/3"
			>
				<div class="flex justify-center">
					<img
						src="https://pbs.twimg.com/profile_images/1580783698080833538/knk3o2Lm_400x400.jpg"
						alt="founder Ayden Owens-Delerme"
					/>
				</div>
				<p class="text-lg text-white">Ayden Owens-Delerme</p>
				<p class="text-sm text-white">Short description overview thing</p>
				<p class="text-[10px] text-right text-gray-500" style="transform: translateY(9px)">
					hover for more info >
				</p>
			</div>
			<!-- <div class="p-4 sm:w-1/2 w-full" /> -->
		</div>
	</div>
</section>
<section class="bg-gray-900 -mt-5">
	<div class="py-4 lg:py-16 px-4 mx-auto max-w-screen-md">
		<h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gold">Contact Us</h2>
		<p class="mb-8 lg:mb-16 font-light text-center text-gray-300 dark:te-gray-400 sm:text-xl">
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
	.white-icon {
		filter: invert(1); /* Inverts the colors, making black white */
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
