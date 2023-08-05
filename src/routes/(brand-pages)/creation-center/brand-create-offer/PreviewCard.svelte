<script>
	let pageNum = 0;
	export let croppedImage;
	export let showPreview;
	export let title;
	export let eventType;
	export let shortDescription;
	export let sportPreference;
	export let location;
	export let inPersonOrVirtual;
	export let estimatedPayment;
	export let endDate;
	export let eventTypeCustom;
	export let eventDate;
	export let isCampaign;
	export let recommendedDeliverables;
	export let brandName;
	export let currImage;
	// export let checkGoals;
	// export let customGoals;
	// let goals = [...checkGoals, ...customGoals];
	$: {
		// console.log(reccomenedDeliverables);
	}
</script>

<div class={showPreview ? '' : 'nah'}>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<h2
		on:click={() => {
			showPreview = false;
		}}
		class={'text-3xl mt-4 text-center underline text-white'}
	>
		Go back to create offer
	</h2>
	<div id="wrapper">
		<div id="container">
			<div class=" box -mt-24">
				<div class="boxcontent">
					{#if pageNum === 0}
						{#if croppedImage}
							<img src={URL.createObjectURL(croppedImage)} alt="Profile" />
						{:else if currImage}
							<img src={currImage} alt="Profile" />
						{:else}
							<img src="https://shmul.dev/assets/cardplaceholder.png" alt="Profile" />
						{/if}
						<div class="info bg-black bg-opacity-70 rounded-xl">
							<div class="name -mt-5">{title}</div>
							{#if isCampaign === 'Single Event'}
								{#if eventTypeCustom}
									<p>{eventTypeCustom} event</p>
								{:else}
									<p>{eventType} event</p>
								{/if}
							{/if}
							<div class="interest">Brand: {brandName}</div>
							{#if estimatedPayment}
								{#if JSON.parse(estimatedPayment)['pay'] === 'Both'}
									<p>Product: {JSON.parse(estimatedPayment).product}</p>
									<p>Compensation: {JSON.parse(estimatedPayment).compSelected}</p>
								{:else if JSON.parse(estimatedPayment)['pay'] === 'Money'}
									<p>Compensation: {JSON.parse(estimatedPayment).compSelected}</p>
								{:else if JSON.parse(estimatedPayment)['pay'] === 'Product'}
									<p>Product {JSON.parse(estimatedPayment).product}</p>
								{/if}
							{/if}
							{#if recommendedDeliverables}
								{#each recommendedDeliverables as del, i}
									{#if del.title !== '' && del.value !== ''}
										<li class="">
											{del.title} <br />
										</li>
									{/if}
								{/each}
							{/if}
						</div>
					{/if}
					{#if pageNum === 1}
						<div
							class="w-full flex flex-col space-y-5 p-5 text-white text-center h-full bg-gray-700"
						>
							<div class="mb-10 p-2 text-left rounded-xl border border-white w-full">
								<p class="text-lg underline text-center">Description</p>
								<p>{shortDescription}</p>
							</div>
							<div class="p-2 rounded-xl border border-white h-20">
								{#if sportPreference && sportPreference !== 'undefined'}
									Looking for: <br />{sportPreference}
								{/if}
							</div>
							{#if !isCampaign}
								<div class="p-2 rounded-xl border border-white h-20">
									Location: <br />{location}
									{#if location === ''}
										Virtual
									{/if}
								</div>
							{/if}
							<div class="p-2 rounded-xl border border-white h-20">
								{#if isCampaign && eventDate}
									Start Date: <br />{eventDate.toString().slice(0, 10)}<br />
								{:else if !isCampaign && eventDate}
									Date: <br />{eventDate.toString().slice(0, 10)}
								{/if}
							</div>
							{#if isCampaign}
								<div class="p-2 rounded-xl border border-white h-20">
									End Date: <br />{endDate.toString().slice(0, 10)}
								</div>
							{/if}
						</div>
					{/if}
					{#if pageNum === 2}
						<div class="w-full p-5 text-white text-center h-full bg-gray-700">
							<div class="text-left w-full">
								<p class="text-lg underline text-center">Deliverables</p>
								{#if recommendedDeliverables}
									{#each recommendedDeliverables as del, i}
										{#if del.title !== '' && del.value !== ''}
											<li class="m-5">
												{del.title}: <br />{del.value}
											</li>
										{/if}
									{/each}
								{/if}
							</div>
						</div>
					{/if}
					<div class="like">Like</div>
					<div class="nope">Nope</div>
				</div>

				<button
					class="hover:bg-white rounded-2xl absolute left-0 mt-6 w-10 h-[95%] opacity-20"
					style=""
					on:click={() => {
						pageNum = pageNum - 1;
						if (pageNum < 0) {
							pageNum = 2;
						}
					}}
				/>
				<button
					class="hover:bg-white rounded-2xl absolute right-0 mt-6 w-10 h-[95%] opacity-20"
					style=""
					on:click={() => {
						pageNum = pageNum + 1;
						if (pageNum > 2) {
							pageNum = 0;
						}
					}}
				/>
			</div>
		</div>
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css?family=Open+Sans|Roboto:900');

	.nah {
		display: none;
	}
	.centerAll {
		position: absolute;
		left: 50%;
		-webkit-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
	}
	.interest {
		word-wrap: break-word;
	}
	:root {
		--primary-color: #ff0050;
		--secondary-color: rgb(246, 244, 250);
		--background: linear-gradient(white, rgb(246, 244, 250));
	}

	#wrapper {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		/* !!!! */
		margin-top: 3vh;
	}

	#container {
		display: flex;
		width: 60vh;
		height: 80vh;
		overflow: hidden;
	}

	.background {
		position: absolute;
		width: 60vh;
		max-width: 100vw;
		height: 80vh;
	}

	#select {
		width: auto;
		height: 200px;
	}

	.background svg {
		fill: lighten(var(--primary-color), 40%);
		stroke: var(--primary-color);
		stroke-width: 2px;
	}

	.label {
		width: 100%;
		text-align: center;
		position: absolute;
		bottom: 20%;
		color: rgb(218, 223, 229);
	}

	.box {
		position: absolute;
		transform: translateY(100px);
		width: 60vh;
		height: 80vh;
		max-width: 95vw;
	}

	.boxcontent {
		position: absolute;
		width: 90%;
		height: 90%;
		margin: 5%;
		background-color: var(--secondary-color);
		border-radius: 1.5em;
		overflow: hidden;
		box-shadow: 3px -3px 10px rgba(0, 0, 0, 0.5);
		cursor: grab;
		overflow: hidden;
	}
	.box:last-of-type .boxcontent {
		width: 100%;
		height: 100%;
		margin: 0%;
	}

	.box img {
		width: 100%;
		height: 100%;
	}
	.like,
	.nope {
		position: absolute;
		top: 35px;
		border: 4px solid gray;
		padding: 7px;
		border-radius: 5px;
		text-transform: uppercase;
		font-size: 2.5em;
		font-weight: bold;
		font-family: 'Roboto', sans-serif;
		opacity: 0;
	}
	.like {
		left: 30px;
		border-color: green;
		color: green;
		transform: rotate(-20deg);
	}
	.nope {
		right: 30px;
		border-color: red;
		color: red;
		transform: rotate(20deg);
	}
	.info {
		color: #fff;
		position: absolute;
		bottom: 0px;
		left: 0px;
		padding: 30px 20px 20px 20px;
		width: 100%;
		box-sizing: border-box;
		text-shadow: 2px 2px 5px gray;
		/* background: linear-gradient(rgba(40, 40, 40, 0), rgba(40, 40, 40, 0.6)); */
	}
	.name {
		font-size: 1.4em;
		font-weight: bold;
	}

	.container {
		width: 350px;
		height: 590px;

		border-radius: 1.5em;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		background-color: black;
		box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
		box-shadow: inset 1px 1px 0.12px rgba(255, 255, 255, 0.4), 1px 1px 3px rgba(0, 0, 0, 0.1);
		border: 1px solid rgba(255, 255, 255, 0.18);
	}

	.container .header__container {
		display: flex;
		align-items: center;
		padding: 16px;
		justify-content: space-between;
	}

	.container .header__container .img-user svg {
		height: 24px;
		fill: #c2c6cd;
	}

	.container .header__container .img-tinder svg {
		height: 24px;
		transform: scale(1.2);
	}

	.container .header__container .img-chat svg {
		height: 24px;
		fill: #c2c6cd;
	}

	.btns {
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		margin: auto;
		height: 2.5%;
		display: flex;
		align-items: center;
		justify-content: center;
		min-width: 300px;
		max-width: 355px;
	}
	.btns img {
		width: 80px;
	}

	.svg-button {
		background: none;
		border: none;
		padding: 0;
		cursor: pointer;
	}

	/* .overlay {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background: rgba(0, 0, 0, 0.5);
		visibility: hidden;
		opacity: 0;
		transition: opacity 200ms;
		z-index: 9999;
	} */

	.popup {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		padding: 20px;
		background: #fff;
		opacity: 0.9;
		border: 1px solid #666;
		width: 300px;
		box-shadow: 0 0 50px rgba(0, 0, 0, 0.5);
		z-index: 99999;
		border-radius: 10px;
	}

	.overlay.light {
		background: rgba(255, 255, 255, 0.5);
	}

	.popup h2 {
		margin-top: 0;
		color: #666;
	}

	.popup .close {
		position: absolute;
		top: 10px;
		right: 10px;
		font-size: 24px;
		font-weight: bold;
		text-decoration: none;
		color: #666;
	}

	.popup .content {
		max-height: 400px;
		overflow: auto;
	}

	.popup p {
		margin: 0 0 1em;
	}

	.overlay:target {
		visibility: visible;
		opacity: 1;
	}

	.box {
		margin-bottom: 60px; /* Increase the margin to make space for the modal */
	}
</style>
