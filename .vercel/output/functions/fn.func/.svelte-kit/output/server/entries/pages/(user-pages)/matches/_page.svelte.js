import { c as create_ssr_component, i as escape, o as each, v as validate_component, b as add_attribute } from "../../../../chunks/index2.js";
import "devalue";
/* empty css                                                        */import { d as durationUnitRegex, r as range } from "../../../../chunks/utils.js";
const css = {
  code: ".wrapper.svelte-1vzsw15{position:relative;display:flex;justify-content:center;align-items:center;width:calc(var(--size) * 2.5);height:var(--size);overflow:hidden}.bar.svelte-1vzsw15{position:absolute;top:calc(var(--size) / 10);width:calc(var(--size) / 5);height:calc(var(--size) / 10);margin-top:calc(var(--size) - var(--size) / 10);transform:skewY(0deg);background-color:var(--color);animation:svelte-1vzsw15-motion var(--duration) ease-in-out infinite}.pause-animation.svelte-1vzsw15{animation-play-state:paused}@keyframes svelte-1vzsw15-motion{25%{transform:skewY(25deg)}50%{height:100%;margin-top:0}75%{transform:skewY(-25deg)}}",
  map: null
};
const Wave = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { color = "#FF3E00" } = $$props;
  let { unit = "px" } = $$props;
  let { duration = "1.25s" } = $$props;
  let { size = "60" } = $$props;
  let { pause = false } = $$props;
  let durationUnit = duration.match(durationUnitRegex)?.[0] ?? "s";
  let durationNum = duration.replace(durationUnitRegex, "");
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.unit === void 0 && $$bindings.unit && unit !== void 0)
    $$bindings.unit(unit);
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
    $$bindings.duration(duration);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.pause === void 0 && $$bindings.pause && pause !== void 0)
    $$bindings.pause(pause);
  $$result.css.add(css);
  return `<div class="wrapper svelte-1vzsw15" style="${"--size: " + escape(size, true) + escape(unit, true) + "; --color: " + escape(color, true) + "; --duration: " + escape(duration, true) + ";"}">${each(range(10, 0), (version) => {
    return `<div class="${["bar svelte-1vzsw15", pause ? "pause-animation" : ""].join(" ").trim()}" style="${"left: " + escape(version * (+size / 5 + (+size / 15 - +size / 100)) + unit, true) + "; animation-delay: " + escape(version * (+durationNum / 8.3), true) + escape(durationUnit, true) + ";"}"></div>`;
  })}
</div>`;
});
let defaultImg = "https://slimecars.com/cardplaceholder.png";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { form } = $$props;
  let newDeals;
  let interestedBrands;
  let delId;
  if (data) {
    console.log(data.userId);
    data.completedDealProfiles;
    newDeals = data.newDealProfiles;
    data.ongoingDealProfiles;
    data.contractFinalized;
    interestedBrands = newDeals;
  }
  let loading = false;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  {
    {
      if (form?.status === "ok" && delId !== "" && loading === true) {
        {
          newDeals = newDeals.filter((deal) => deal.id !== delId);
          interestedBrands = interestedBrands.filter((deal) => deal.id !== delId);
        }
        form = null;
        loading = false;
        delId = "";
      }
    }
  }
  return `${loading ? `<div class="fixed top-0 left-0 w-full h-screen flex items-center justify-center z-20 bg-black bg-opacity-50"><div class="transform -translate-x-32 w-20 h-20">
			${validate_component(Wave, "Wave").$$render(
    $$result,
    {
      size: "160",
      color: "#FF3E00",
      unit: "px",
      duration: "6s"
    },
    {},
    {}
  )}</div></div>` : ``}
${``}

<div class="lg:mx-20 mt-10"><div class="flex flex-row -mt-5 w-full sm:w-[60%] mb-5 text-white text-center justify-center mx-auto"><button class="${"" + escape(
    "border-4 border-green-400",
    true
  ) + " bg-gray-800 w-1/3 p-3 rounded-xl text-center mt-10 text-lg"}">New</button>
		<button class="${"" + escape(
    "",
    true
  ) + " bg-gray-800 w-1/3 p-3 rounded-xl text-center mt-10 text-lg"}">Ongoing</button>
		<button class="${"" + escape(
    "",
    true
  ) + " bg-gray-800 w-1/3 p-3 rounded-xl text-center mt-10 text-lg"}">Completed</button></div>
	${interestedBrands.length ? each(interestedBrands, (currDeal, i) => {
    return `${``}
		<div class="w-fit mx-auto bg-gray-800 rounded-xl mb-5 p-5"><h2 class="text-center text-3xl mb-2 text-white">${escape(currDeal.title)}</h2>
			<hr>
			<div class="flex flex-col md:flex-row">${currDeal.dealImages.length !== 0 ? `<img${add_attribute("alt", currDeal.brandName, 0)} class="object-contain mt-5 rounded-2xl mx-auto sm:mx-[unset] h-[500px] w-full" src="${"/api/s3object/" + escape(currDeal.dealImages[0].id, true)}">` : `<img class="mt-5 object-contain rounded-2xl mx-auto sm:mx-[unset] h-[500px] w-full"${add_attribute("src", defaultImg, 0)}>`}
				<div class="text-white mt-5 w-full flex flex-col min-w-[200px]"><div class="border border-white p-5 text-lg rounded-xl">${!currDeal.isCampaign ? `<p>Event Type</p>
							<p class="mb-5">${escape(currDeal.eventType)}</p>` : ``}
						<p>Sport Preference</p>
						<p class="mb-5">${escape(currDeal.sportPreference)}</p>
						<p>Gender Preference: ${escape(currDeal.genderPreference)}</p>
						<br>
						${!currDeal.isCampaign && currDeal.location !== "" ? `<p class="">Location: ${escape(currDeal.location)}</p>` : `${!currDeal.isCampaign && currDeal.location === "" ? `<p>Location</p>
							<p class="">${escape(currDeal.inPersonOrVirtual)}</p>` : ``}`}
						<p class="mt-5">Description: ${escape(currDeal.shortDescription)}</p></div>
					
					
					
					
					
					
					

					<div class="border border-white p-5 text-lg rounded-xl h-full"><p class="mb-5">${currDeal.isCampaign ? `Start Date: ${escape(currDeal.eventDate.toISOString().slice(0, 10))}
								End Date: ${escape(currDeal.endDate.toISOString().slice(0, 10))}` : `Date: ${escape(currDeal.eventDate.toISOString().slice(0, 10))}`}</p>
						
						<p class="mt-5 underline">Compensation</p>
						<p class="mt-5 underline">Compensation</p>
						${JSON.parse(currDeal.estimatedPayment)["pay"] === "Both" ? `${JSON.parse(currDeal.estimatedPayment).product !== "" ? `<p>Product: ${escape(JSON.parse(currDeal.estimatedPayment).product)}</p>` : ``}
							${JSON.parse(currDeal.estimatedPayment).compSelected !== "Custom" ? `<p>Compensation: ${escape(JSON.parse(currDeal.estimatedPayment).compSelected)}</p>` : `<p>Compensation: ${escape(JSON.parse(currDeal.estimatedPayment).customPay)}</p>`}` : `${JSON.parse(currDeal.estimatedPayment)["pay"] === "Money" ? `${JSON.parse(currDeal.estimatedPayment).compSelected !== "Custom" ? `<p>Compensation: ${escape(JSON.parse(currDeal.estimatedPayment).compSelected)}</p>` : `<p>Compensation: ${escape(JSON.parse(currDeal.estimatedPayment).customPay)}</p>`}` : `${JSON.parse(currDeal.estimatedPayment)["pay"] === "Product" ? `${JSON.parse(currDeal.estimatedPayment).product !== "" ? `<p>Product: ${escape(JSON.parse(currDeal.estimatedPayment).product)}</p>` : ``}` : ``}`}`}</div>
				</div></div>
			<div class="w-full -mt-5 py-5"><div class="border border-1 rounded-xl text-white p-5"><p class="text-xl">Deliverables</p>
					<hr class="mb-2">
					<ol>${each(currDeal.recommendedDeliverables["set"], (del) => {
      return `<li class="m-5">${escape(del.title)}: ${escape(del.value)}
							</li>`;
    })}
					</ol></div>
				</div>
			<div class="text-center items-center text-white mx-auto justify-between flex flex-row">${`
					<button class="p-3 whitespace-nowrap border border-white bg-gray-700 min-w-fit w-1/3 rounded-xl">View brand Profile
					</button>
					${`<form class="w-1/3 min-w-fit p-3 whitespace-nowrap border bg-gray-700 rounded-xl border-white" method="POST" action="?/agree"><button name="agree-deal"${add_attribute("value", currDeal.id, 0)} type="submit" class="w-full h-full">Agree to offer
							</button>
						</form>`}
					${``}`}</div>
		</div>`;
  }) : `<p class="text-3xl text-red-500 text-center">Empty</p>`}</div>`;
});
export {
  Page as default
};
