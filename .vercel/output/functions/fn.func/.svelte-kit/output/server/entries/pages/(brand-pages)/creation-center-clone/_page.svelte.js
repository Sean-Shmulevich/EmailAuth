import { c as create_ssr_component, i as escape, b as add_attribute, v as validate_component, o as each } from "../../../../chunks/index2.js";
import "devalue";
/* empty css                                                        */import { J as Jumper } from "../../../../chunks/Jumper.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".nah.svelte-136o1cm{display:none}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { form } = $$props;
  let publishedDeals = data.publishedDeals;
  data.unpublishedDeals;
  data.completedDeals;
  let currentDealList = publishedDeals;
  let showModal = false;
  let showModalComplete = false;
  let loading = false;
  let dealLink = "creation-center/deal/";
  let deleteId;
  let deleteName;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  $$result.css.add(css);
  {
    {
      if (form?.showModal === false) {
        showModal = false;
        loading = false;
        deleteId = "";
        deleteName = "";
      }
      if (form?.showModalComplete === false) {
        showModalComplete = false;
        loading = false;
        deleteId = "";
        deleteName = "";
      }
    }
  }
  {
    {
      {
        dealLink = "creation-center/deal/";
      }
    }
  }
  return `<a title="Create a new Deal" class="absolute transform scale-75 sm:scale-100 -right-4 top-4 sm:top-5 sm:-right-5 p-5" href="/creation-center-clone/brand-create-offer"><img class="w-14 mr-0 transform translate-x-[10px]" alt="create deal" src="https://slimecars.com/assets/createDeal.png">
	<p class="hidden sm:block text-white text-center text-xs mr-2">Create Offer</p>
	<p class="sm:hidden block text-white text-center text-xs -mr-3">Create</p></a>
${showModal ? `<div class="p-5 border-4 border-white fixed flex flex-col justify-between left-1/4 w-1/2 bg-gray-800 h-72 rounded-xl"><p class="text-white text-center text-xl">Are you sure you want to delete this?</p>
		<p class="text-white text-center text-lg">Deal Name: ${escape(deleteName)}</p>
		<form class="mx-auto" method="POST" action="?/deleteDeal"><input type="hidden" name="deal-id"${add_attribute("value", deleteId, 0)}>
			<button type="submit" class="${escape(loading ? "nah" : "", true) + " bg-green-500 mt-auto mb-10 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full svelte-136o1cm"}">Delete</button>
			<button class="${escape(loading ? "nah" : "", true) + " bg-green-500 mt-auto mb-10 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full svelte-136o1cm"}">Cancel</button></form>
		${loading ? `<div class="mx-auto">${validate_component(Jumper, "Jumper").$$render(
    $$result,
    {
      size: "60",
      color: "#FF3E00",
      unit: "px",
      duration: "6s"
    },
    {},
    {}
  )}</div>` : ``}</div>` : ``}
${showModalComplete ? `<div class="p-5 border-4 border-white fixed flex flex-col justify-between left-1/4 w-1/2 bg-gray-800 h-72 rounded-xl"><p class="text-white text-center text-xl">Are you sure you want to stop showing this offer, pending contracts will not be affected
		</p>
		<p class="text-white text-center text-lg">Deal Name: ${escape(deleteName)}</p>
		<form class="mx-auto" method="POST" action="?/endDeal"><input type="hidden" name="deal-id"${add_attribute("value", deleteId, 0)}>
			<button type="submit" class="${escape(loading ? "nah" : "", true) + " bg-green-500 mt-auto mb-10 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full svelte-136o1cm"}">End offer</button>
			<button class="${escape(loading ? "nah" : "", true) + " bg-green-500 mt-auto mb-10 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full svelte-136o1cm"}">Cancel</button></form>
		${loading ? `<div class="mx-auto">${validate_component(Jumper, "Jumper").$$render(
    $$result,
    {
      size: "60",
      color: "#FF3E00",
      unit: "px",
      duration: "6s"
    },
    {},
    {}
  )}</div>` : ``}</div>` : ``}

<div class="text-black min-h-[90vh]"><div class="flex flex-row -mt-5 w-[80%] lg:w-[40%] text-white text-center justify-center mx-auto"><button class="${"w-1/3 p-3 rounded-xl " + escape(
    "border-4 border-green-400",
    true
  ) + " bg-gray-800 text-center mt-10 text-sm sm:text-lg"}">Active</button>
		<button class="${escape(
    "",
    true
  ) + " bg-gray-800 w-1/3 p-3 rounded-xl text-center mt-10 text-sm sm:text-lg"}">Unpublished</button>
		<button class="${"" + escape(
    "",
    true
  ) + " bg-gray-800 w-1/3 p-3 rounded-xl text-center mt-10 text-sm sm:text-lg"}">Completed</button></div>
	${currentDealList.length ? each(currentDealList, (deal) => {
    return `<div class="bg-gray-700 text-white rounded-xl mb-10 w-[80%] lg:w-[40%] flex flex-col shadow-md p-5 mx-auto"><div class="bg-gray-200 w-full sm:w-[60%] mx-auto">${deal && deal.dealImages && deal.dealImages.length !== 0 ? `<img src="${"/api/s3object/" + escape(deal.dealImages[0].id, true)}" alt="${"Brand deal to athlete " + escape(deal.title, true)}" class="w-full h-full object-cover">` : `<img src="https://slimecars.com/assets/cardplaceholder.png" alt="${"Brand deal to athlete " + escape(deal.title, true)}" class="w-full h-full object-cover">`}
				</div>
			<div class="p-8 w-full flex flex-row"><div class="w-full"><h1 class="font-bold text-xl mb-2">${escape(deal.title)}</h1>
					${deal.isCampaign ? `<p class="font-bold">Campaign</p>` : `<p class="font-bold">Single Event</p>`}
					<p class="text-white break-words text-base">Description: ${escape(deal.shortDescription)}</p>
					<div class="mt-4"><div class="flex items-center"><div class="text-sm text-white">Sport Preference: ${escape(deal.sportPreference)}</div>
							<div class="ml-3 text-sm text-white">Gender Preference: ${escape(deal.genderPreference)}</div></div>
						<div class="mt-2 flex items-center">${!deal.isCampaign ? `${deal.location !== "" ? `<div class="text-sm text-white">Location: ${escape(deal.location)}</div>` : `<div class="text-sm text-white">Location: ${escape(deal.inPersonOrVirtual)}</div>`}` : ``}</div>

						${!deal.isCampaign ? `<div class="text-sm text-white">Event type: ${escape(deal.eventType !== "" ? deal.eventType : "no event type")}
							</div>` : ``}
						<div class="text-sm text-white">${deal.isCampaign ? `Start Date: ${escape(deal.eventDate.toISOString().slice(0, 10))}
								End Date: ${escape(deal.endDate.toISOString().slice(0, 10))}` : `Date: ${escape(deal.eventDate.toISOString().slice(0, 10))}`}</div>

						<p class="mt-5 underline">Compensation</p>
						${JSON.parse(deal.estimatedPayment)["pay"] === "Both" ? `${JSON.parse(deal.estimatedPayment).product !== "" ? `<p>Product: ${escape(JSON.parse(deal.estimatedPayment).product)}</p>` : ``}
							${JSON.parse(deal.estimatedPayment).compSelected !== "Custom" ? `<p>Compensation: ${escape(JSON.parse(deal.estimatedPayment).compSelected)}</p>` : `<p>Compensation: ${escape(JSON.parse(deal.estimatedPayment).customPay)}</p>`}` : `${JSON.parse(deal.estimatedPayment)["pay"] === "Money" ? `${JSON.parse(deal.estimatedPayment).compSelected !== "Custom" ? `<p>Compensation: ${escape(JSON.parse(deal.estimatedPayment).compSelected)}</p>` : `<p>Compensation: ${escape(JSON.parse(deal.estimatedPayment).customPay)}</p>`}` : `${JSON.parse(deal.estimatedPayment)["pay"] === "Product" ? `${JSON.parse(deal.estimatedPayment).product !== "" ? `<p>Product: ${escape(JSON.parse(deal.estimatedPayment).product)}</p>` : ``}` : ``}`}`}
						<div class="text-sm text-white mt-5">Athletes: ${escape(deal.athleteCount)}</div>
						<div class="flex items-center"><div class="text-sm text-white">Published: ${escape(deal.publishDate.toISOString().slice(0, 10))}</div>
						</div></div>
					<div class="w-full text-center"><a class="mx-auto" href="${escape(dealLink, true) + escape(deal.id, true)}"><button class="bg-green-500 hover:bg-green-700 text-white transform translate-y-5 font-bold p-2 rounded-full">${`${`${`See user activity`}`}`}</button>
						</a></div>
				</div></div>
			${`<button class="bg-yellow-300 text-black p-2 rounded-full mr-auto transform -translate-y-3">End offer
				</button>
				<button class="ml-auto -mt-14 mr-0 w-fit"><img class="w-10" alt="delete deal" src="https://slimecars.com/assets/trash.png">
				</button>`}
		</div>`;
  }) : `<p class="text-2xl text-red-600 text-center mt-10">No deals here yet</p>`}
</div>`;
});
export {
  Page as default
};
