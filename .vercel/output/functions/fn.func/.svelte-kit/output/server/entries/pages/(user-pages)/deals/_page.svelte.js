import { c as create_ssr_component, r as each, j as escape, v as validate_component } from "../../../../chunks/index2.js";
console.log("hello ");
const SwipeCard_svelte_svelte_type_style_lang = "";
const css = {
  code: "@import url('https://fonts.googleapis.com/css?family=Open+Sans|Roboto:900');:root{--primary-color:#ff0050;--secondary-color:rgb(246, 244, 250);--background:linear-gradient(white, rgb(246, 244, 250))}#wrapper.svelte-u19nne.svelte-u19nne{display:flex;align-items:center;justify-content:center;width:100%;height:100%;margin-top:3vh}#container.svelte-u19nne.svelte-u19nne{display:flex;width:60vh;height:80vh;overflow:hidden}.background.svelte-u19nne.svelte-u19nne{position:absolute;width:60vh;max-width:100vw;height:80vh}.label.svelte-u19nne.svelte-u19nne{width:100%;text-align:center;position:absolute;bottom:20%;color:rgb(218, 223, 229)}.box.svelte-u19nne.svelte-u19nne{position:absolute;width:60vh;height:80vh;max-width:95vw;margin-left:10px}.boxcontent.svelte-u19nne.svelte-u19nne{position:absolute;width:90%;height:90%;margin:5%;background-color:var(--secondary-color);border-radius:1.5em;overflow:hidden;box-shadow:3px -3px 10px rgba(0, 0, 0, 0.5);cursor:grab;overflow:hidden}.box.svelte-u19nne:last-of-type .boxcontent.svelte-u19nne{width:100%;height:100%;margin:0%}.box.svelte-u19nne img.svelte-u19nne{width:100%;height:100%}.like.svelte-u19nne.svelte-u19nne,.nope.svelte-u19nne.svelte-u19nne{position:absolute;top:35px;border:4px solid gray;padding:7px;border-radius:5px;text-transform:uppercase;font-size:2.5em;font-weight:bold;font-family:'Roboto', sans-serif;opacity:0}.like.svelte-u19nne.svelte-u19nne{left:30px;border-color:green;color:green;transform:rotate(-20deg)}.nope.svelte-u19nne.svelte-u19nne{right:30px;border-color:red;color:red;transform:rotate(20deg)}.info.svelte-u19nne.svelte-u19nne{color:#fff;position:absolute;bottom:0px;left:0px;padding:30px 20px 20px 20px;width:100%;box-sizing:border-box;text-shadow:2px 2px 5px gray;background:linear-gradient(rgba(40, 40, 40, 0), rgba(40, 40, 40, 0.6))}.name.svelte-u19nne.svelte-u19nne{font-size:1.4em;font-weight:bold}.box.svelte-u19nne.svelte-u19nne{margin-bottom:60px}",
  map: null
};
const SwipeCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { offers } = $$props;
  let { currDealIds } = $$props;
  let { refreshCounter } = $$props;
  if ($$props.offers === void 0 && $$bindings.offers && offers !== void 0)
    $$bindings.offers(offers);
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

<div id="wrapper" class="svelte-u19nne"><div id="container" class="svelte-u19nne"><div class="background svelte-u19nne">

			

			<div class="label svelte-u19nne">Made by @app1e.jews</div></div>
		${each(offers, (offer) => {
    return `<div class="box svelte-u19nne"><div class="boxcontent svelte-u19nne">${`<div class="w-full text=center"><p>${escape(offer.id)}</p>
						</div>`}
					${``}
					${``}
					${``}
					<div class="like svelte-u19nne">Like</div>
					<div class="nope svelte-u19nne">Nope</div></div>

				<button class="hover:bg-white rounded-2xl absolute left-0 mt-6 w-10 h-[95%] opacity-20 z-10" style=""></button>
				<button class="hover:bg-white rounded-2xl absolute right-0 mt-6 w-10 h-[95%] opacity-20 z-12" style=""></button>
			</div>`;
  })}</div>
</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let offers = data.nextDeals;
  let refreshCounter = 0;
  let currDealIds = [];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(SwipeCard, "SwipeCard").$$render(
      $$result,
      { refreshCounter, offers, currDealIds },
      {
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
