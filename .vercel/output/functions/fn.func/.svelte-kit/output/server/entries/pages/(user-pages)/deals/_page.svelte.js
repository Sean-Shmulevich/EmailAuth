import { c as create_ssr_component, o as each, i as escape, v as validate_component } from "../../../../chunks/index2.js";
/* empty css                                                        */import { a as afterNavigate } from "../../../../chunks/navigation.js";
const SwipeCard_svelte_svelte_type_style_lang = "";
const css = {
  code: "@import url('https://fonts.googleapis.com/css?family=Open+Sans|Roboto:900');.border-text.svelte-1d0t80n.svelte-1d0t80n{color:white;text-shadow:-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000}.centerAll.svelte-1d0t80n.svelte-1d0t80n{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%)}.interest.svelte-1d0t80n.svelte-1d0t80n{word-wrap:break-word}:root{--primary-color:#ff0050;--secondary-color:rgb(246, 244, 250);--background:linear-gradient(white, rgb(246, 244, 250))}#wrapper.svelte-1d0t80n.svelte-1d0t80n{display:flex;align-items:center;width:100%;height:92vh;margin-top:-3vh}#container.svelte-1d0t80n.svelte-1d0t80n{display:flex;width:47.25vh;height:84vh;overflow:hidden}.background.svelte-1d0t80n.svelte-1d0t80n{position:absolute;width:47.25vh;max-width:100vw;height:84vh}.box.svelte-1d0t80n.svelte-1d0t80n{position:absolute;width:47.25vh;height:84vh;max-width:95vw;margin-left:6px}.boxcontent.svelte-1d0t80n.svelte-1d0t80n{position:absolute;width:90%;height:90%;margin:5%;background-color:var(--secondary-color);border-radius:1.5em;overflow:hidden;box-shadow:3px -3px 10px rgba(0, 0, 0, 0.5);cursor:grab;overflow:hidden}.box.svelte-1d0t80n:last-of-type .boxcontent.svelte-1d0t80n{width:100%;height:100%;margin:0%}.box.svelte-1d0t80n img.svelte-1d0t80n{width:100%;height:100%}.like.svelte-1d0t80n.svelte-1d0t80n,.nope.svelte-1d0t80n.svelte-1d0t80n{position:absolute;top:35px;border:4px solid gray;padding:7px;border-radius:5px;text-transform:uppercase;font-size:2.5em;font-weight:bold;font-family:'Roboto', sans-serif;opacity:0}.like.svelte-1d0t80n.svelte-1d0t80n{left:30px;border-color:green;color:green;transform:rotate(-20deg)}.nope.svelte-1d0t80n.svelte-1d0t80n{right:30px;border-color:red;color:red;transform:rotate(20deg)}.info.svelte-1d0t80n.svelte-1d0t80n{color:#fff;position:absolute;bottom:0px;left:0px;padding:30px 20px 20px 20px;width:100%;box-sizing:border-box;text-shadow:2px 2px 5px gray}.name.svelte-1d0t80n.svelte-1d0t80n{font-size:1.4em;font-weight:bold}",
  map: null
};
const SwipeCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { offers } = $$props;
  if (offers.length < 5) {
    offers.length - 1;
  }
  let { pageNum = 0 } = $$props;
  let { currDealIds } = $$props;
  let { refreshCounter } = $$props;
  if ($$props.offers === void 0 && $$bindings.offers && offers !== void 0)
    $$bindings.offers(offers);
  if ($$props.pageNum === void 0 && $$bindings.pageNum && pageNum !== void 0)
    $$bindings.pageNum(pageNum);
  if ($$props.currDealIds === void 0 && $$bindings.currDealIds && currDealIds !== void 0)
    $$bindings.currDealIds(currDealIds);
  if ($$props.refreshCounter === void 0 && $$bindings.refreshCounter && refreshCounter !== void 0)
    $$bindings.refreshCounter(refreshCounter);
  $$result.css.add(css);
  {
    {
      for (let i = 0; i < offers.length; i++) {
        currDealIds[i] = offers[i].id;
      }
    }
  }
  return `<meta name="viewport" content="width=device-width, initial-scale=1.0">

<div id="wrapper" class="justify-left sm:justify-center -ml-[2px] sm:ml-0 svelte-1d0t80n"><div class="-mb-10 sm:mt-10 sm:mb-5 svelte-1d0t80n" id="container"><div class="background svelte-1d0t80n">${`${offers.length === 0 ? `<div class="text-white border border-white p-5 text-2xl rounded-full centerAll text-center max-w-12 bg-red-500 svelte-1d0t80n">Check back later for more deals
				</div>` : ``}`}</div>
		${each(offers, (offer) => {
    return `<div class="box svelte-1d0t80n"><div class="boxcontent svelte-1d0t80n">${pageNum === 0 ? `${offer.dealImages && offer.dealImages.length !== 0 ? `
							<img class="bg-gray-900 object-contain svelte-1d0t80n" src="${"/api/s3object/" + escape(offer.dealImages[0].id, true)}" alt="Profile">` : `<img class="bg-gray-900 object-contain svelte-1d0t80n" src="https://slimecars.com/assets/cardplaceholder.png" alt="Profile">`}
						<div class="info bg-black bg-opacity-70 rounded-xl svelte-1d0t80n"><div class="name -mt-5 svelte-1d0t80n">${escape(offer.title)}</div>
							${offer.isCampaign ? `<p>${escape(offer.eventType)} event</p>` : ``}
							<div class="interest svelte-1d0t80n">Brand: ${escape(offer.brandName)}</div>
							${JSON.parse(offer.estimatedPayment)["pay"] === "Both" ? `${JSON.parse(offer.estimatedPayment).product !== "" ? `<p>Product: ${escape(JSON.parse(offer.estimatedPayment).product)}</p>` : ``}
								${JSON.parse(offer.estimatedPayment).compSelected !== "Custom" ? `<p>Compensation: ${escape(JSON.parse(offer.estimatedPayment).compSelected)}</p>` : `<p>Compensation: ${escape(JSON.parse(offer.estimatedPayment).customPay)}</p>`}` : `${JSON.parse(offer.estimatedPayment)["pay"] === "Money" ? `${JSON.parse(offer.estimatedPayment).compSelected !== "Custom" ? `<p>Compensation: ${escape(JSON.parse(offer.estimatedPayment).compSelected)}</p>` : `<p>Compensation: ${escape(JSON.parse(offer.estimatedPayment).customPay)}</p>`}` : `${JSON.parse(offer.estimatedPayment)["pay"] === "Product" ? `${JSON.parse(offer.estimatedPayment).product !== "" ? `<p>Product: ${escape(JSON.parse(offer.estimatedPayment).product)}</p>` : ``}` : ``}`}`}
							${each(offer.recommendedDeliverables["set"], (del, i) => {
      return `<li class="">${escape(del.title)} <br>
								</li>`;
    })}
						</div>` : ``}
					${pageNum === 1 ? `<div class="w-full flex flex-col space-y-5 p-5 text-white text-center h-full bg-gray-700"><div class="mb-10 p-2 text-left rounded-xl border border-white w-full"><p class="text-lg underline text-center">Description</p>
								<p>${escape(offer.shortDescription)}</p></div>
							<div class="p-2 rounded-xl border border-white h-20"><p class="text-lg underline text-center">Looking for</p>
								${escape(offer.sportPreference)}</div>
							${!offer.isCampaign ? `<div class="p-2 rounded-xl border border-white h-20">Location: <br>${escape(offer.location)}
									${offer.location === "" ? `Virtual` : ``}
								</div>` : ``}
							<div class="p-2 rounded-xl border border-white h-20">${offer.isCampaign && offer.eventDate ? `Start Date: <br>${escape(offer.eventDate.toString().slice(0, 10))}<br>` : `${!offer.isCampaign && offer.eventDate ? `Date: <br>${escape(offer.eventDate.toString().slice(0, 10))}` : ``}`}</div>
							${offer.isCampaign ? `<div class="p-2 rounded-xl border border-white h-20">End Date: <br>${escape(offer.endDate.toString().slice(0, 10))}
								</div>` : ``}</div>
						
						
						
						` : ``}
					${pageNum === 2 ? `<div class="w-full p-5 text-white text-center h-full bg-gray-700"><div class="text-left w-full"><p class="text-lg underline text-center">Deliverables</p>
								${each(offer.recommendedDeliverables["set"], (del, i) => {
      return `<li class="m-5">${escape(del.title)}: <br>${escape(del.value)}
									</li>`;
    })}</div>
						</div>` : ``}
					
					<div class="like svelte-1d0t80n">Like</div>
					<div class="nope svelte-1d0t80n">Nope</div>

					<div class="absolute top-0 bottom-0 left-0 flex items-center"><button class="w-full h-full px-3 py-3 bg-transparent text-gray-900 border-text text-2xl font-semibold hover:text-gray-300 transition-colors duration-200 svelte-1d0t80n">&lt;
						</button></div>

					<div class="absolute top-0 bottom-0 right-0 flex items-center"><button class="w-full h-full px-3 py-3 bg-transparent text-gray-900 border-text text-2xl font-semibold hover:text-gray-300 transition-colors duration-200 svelte-1d0t80n">&gt;
						</button>
					</div></div>
			</div>`;
  })}</div>
</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let offers = data.nextDeals;
  let pageNum;
  let refreshCounter = 0;
  afterNavigate(() => {
    window.scrollTo(0, document.body.scrollHeight);
  });
  let currDealIds = [];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      {
        if (refreshCounter) {
          pageNum = 0;
        }
      }
    }
    $$rendered = `${validate_component(SwipeCard, "SwipeCard").$$render(
      $$result,
      {
        pageNum,
        refreshCounter,
        offers,
        currDealIds
      },
      {
        pageNum: ($$value) => {
          pageNum = $$value;
          $$settled = false;
        },
        refreshCounter: ($$value) => {
          refreshCounter = $$value;
          $$settled = false;
        },
        offers: ($$value) => {
          offers = $$value;
          $$settled = false;
        },
        currDealIds: ($$value) => {
          currDealIds = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
