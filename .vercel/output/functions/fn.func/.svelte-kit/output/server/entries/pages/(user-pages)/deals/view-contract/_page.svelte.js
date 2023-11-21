import { c as create_ssr_component, i as escape, b as add_attribute } from "../../../../../chunks/index2.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let hasContract;
  let contractLink;
  if (data.deal.userDealStatus[0].contractId) {
    hasContract = true;
    contractLink = "/api/s3object/" + data.deal.userDealStatus[0].contractId;
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="p-10 w-full flex flex-col items-center justify-center"><div class="w-[90%] flex flex-col items-center sm:flex-row bg-gray-700 p-5 rounded-xl border border-white sm:w-[75%]"><p class="text-2xl text-white font-extrabold">Brand Email:</p>
		<a href="${"mailto:" + escape(data.deal.authUser.email, true)}" class="m-full underline text-right mx-auto sm:ml-auto text-green-500 text-xl">${escape(data.deal.authUser.email)}</a></div>
	<h2 class="font-extrabold text-2xl text-white my-5">Uploaded Contract</h2>
	${hasContract ? `<a class="text-white text-center font-bold text-xl w-[90%] bg-gray-700 p-5 rounded-xl border border-white sm:w-[75%]"${add_attribute("href", contractLink, 0)} target="_blank">
			<span class="underline">${escape(data.deal.userDealStatus[0].contract.file_name)}</span></a>` : `<p class="text-red-400 text-center font-bold text-xl w-[90%] bg-gray-700 p-5 rounded-xl border border-white sm:w-[75%]">No contract uploaded yet get in contact with the brand to Negotiatiate the terms of the deal
		</p>
		<p></p>`}</div>`;
});
export {
  Page as default
};
