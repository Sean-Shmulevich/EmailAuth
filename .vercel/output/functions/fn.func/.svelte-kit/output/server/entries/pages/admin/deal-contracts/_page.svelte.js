import { c as create_ssr_component, o as each, i as escape } from "../../../../chunks/index2.js";
import "devalue";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { form } = $$props;
  let contractDeals = data.deal;
  let noDeals = false;
  if (data && data.status) {
    noDeals = true;
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  return `<div class="flex flex-row justify-center mt-8"><div class="mx-auto text-center rounded-3xl py-4 w-[20%] bg-black text-white"><a class="text-center" href="/admin/approve-users">go to approve users</a></div>
	<div class="mx-auto text-center rounded-3xl py-4 w-[20%] bg-black text-white"><a class="text-center" href="/admin/approve-brands">go to approve brands</a></div></div>
${!noDeals ? `${each(contractDeals, (currDeal) => {
    return `<div class="w-fit mx-auto bg-gray-800 rounded-xl mt-5 p-5 mb-10 pb-5"><h2 class="text-center text-3xl mb-2 text-white">${escape(currDeal.title)}</h2>
			<hr>
			<div class="flex flex-col md:flex-row">${currDeal.dealImages ? `<img class="object-contain mt-5 rounded-2xl mx-auto sm:mx-[unset] h-[500px] w-full" src="${"/api/s3object/" + escape(currDeal.dealImages[0].id, true)}" alt="deal main">` : `<img class="object-contain mt-5 rounded-2xl mx-auto sm:mx-[unset] h-[500px] w-full" src="${"/api/s3object/" + escape(currDeal.dealImages[0].id, true)}" alt="deal main">`}
				<div class="text-white mt-5 w-full flex flex-col min-w-[200px]"><div class="border border-white p-5 text-lg grow rounded-xl">${!currDeal.isCampaign ? `<p>Event Type</p>
							<p class="mb-5">${escape(currDeal.eventType)}</p>` : ``}
						<p>Sport Preference</p>
						<p class="mb-5">${escape(currDeal.sportPreference)}</p>
						<p>Gender Preference: ${escape(currDeal.genderPreference)}</p>
						<br>
						${!currDeal.isCampaign && currDeal.location !== "" ? `<p class="">Location: ${escape(currDeal.location)}</p>` : `${!currDeal.isCampaign && currDeal.location === "" ? `<p>Location</p>
							<p class="">${escape(currDeal.inPersonOrVirtual)}</p>` : ``}`}
						<p class="mt-5">Description: ${escape(currDeal.shortDescription)}</p></div>
					
					
					
					
					
					
					

					<div class="border border-white p-5 text-lg rounded-xl">${currDeal.isCampaign ? `Start Date: ${escape(currDeal.eventDate.toISOString().slice(0, 10))}
							<br>
							End Date: ${escape(currDeal.endDate.toISOString().slice(0, 10))}` : `Date: ${escape(currDeal.eventDate.toISOString().slice(0, 10))}`}
						
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
			${each(currDeal.userDealStatus, (contract) => {
      return `<div class="flex flex-col space-y-5 sm:flex-row justify-between items-center"><a href="${"/api/s3object/" + escape(contract.contract.id, true)}" target="_blank" class="p-3 my-5 text-xl text-white rounded-full bg-gray-600">View Uploaded Contract
					</a>
					<p class="p-3 w-fit rounded-full bg-gray-600 text-white">User email: ${escape(contract.user.email)}</p>
					<a href="${"/user-profile/" + escape(contract.user.id, true)}" class="text-blue-400 underline p-3 w-fit rounded-full bg-gray-600">User profile: ${escape(contract.user.email)}</a>
					${contract.user.profile.phoneNumber ? `<p class="p-3 w-fit rounded-full bg-gray-600 text-white">User phone: ${escape(contract.user.profile.phoneNumber)}
						</p>` : ``}
					${contract.user.profile.venmo ? `<p class="p-3 w-fit rounded-full bg-gray-600 text-white">User Venmo: ${escape(contract.user.profile.venmo)}
						</p>` : ``}
				</div>`;
    })}
			<div class="flex flex-row justify-center items-center"><p class="p-3 mt-5 w-fit rounded-full bg-gray-600 text-white">Brand email: ${escape(currDeal.authUser.email)}
				</p></div>
		</div>`;
  })}` : `<p class="text-3xl text-red-500 text-center my-10">No finalized contracts pending payment</p>`}`;
});
export {
  Page as default
};
