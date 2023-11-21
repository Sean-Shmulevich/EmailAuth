import { c as create_ssr_component, i as escape, b as add_attribute, o as each, v as validate_component } from "../../../../../../chunks/index2.js";
import { B as Button, D as Dropdown } from "../../../../../../chunks/Wrapper.js";
/* empty css                                                                */import { D as DropdownItem } from "../../../../../../chunks/DropdownItem.js";
import { C as Chevron } from "../../../../../../chunks/Chevron.js";
import "devalue";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { form } = $$props;
  let genderTypes = ["All", "Male", "Female"];
  const sportTypes = [
    "All",
    "Baseball",
    "Basketball",
    "Bowling",
    "Cross country",
    "Fencing",
    "Field hockey",
    "Football",
    "Golf",
    "Gymnastics",
    "Ice hockey",
    "Lacrosse",
    "Rifle",
    "Rowing",
    "Skiing",
    "Soccer",
    "Softball",
    "Swimming & Diving",
    "Tennis",
    "Track & field (indoor)",
    "Track & field (outdoor)",
    "Volleyball (indoor)",
    "Volleyball (beach)",
    "Water polo",
    "Wrestling"
  ];
  let pickedSport = "All";
  let pickedGender = "All";
  let open = false;
  let genderDropdownOpen = false;
  let currDeal = data.deal;
  if (currDeal.location === "") {
    currDeal.location = "Virtual";
  }
  let dealImg = "https://slimecars.com/cardplaceholder.png";
  if (data.dealImage) {
    dealImg = `/api/s3object/${data.dealImage.id}`;
  }
  let filteredUsers = data.interestedUsers;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `
<div class="mb-52 mx-3 sm:mx-20"><div class="w-fit mx-auto bg-gray-800 rounded-xl mt-5 p-5 mb-10 pb-5"><h2 class="text-center text-3xl mb-2 text-white">${escape(currDeal.title)}</h2>
		<hr>
		<div class="flex flex-col md:flex-row"><img class="object-contain mt-5 rounded-2xl mx-auto sm:mx-[unset] h-[500px] w-full"${add_attribute("src", dealImg, 0)} alt="${"deal main " + escape(data.dealImage, true)}">
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
						${JSON.parse(currDeal.estimatedPayment).compSelected !== "Custom" ? `<p>Compensation: ${escape(JSON.parse(currDeal.estimatedPayment).compSelected)}</p>` : `<p>Compensation: ${escape(JSON.parse(currDeal.estimatedPayment).customPay)}</p>`}` : `${JSON.parse(currDeal.estimatedPayment)["pay"] === "Money" ? `${JSON.parse(currDeal.estimatedPayment).compSelected !== "Custom" ? `<p>Compensation: ${escape(JSON.parse(currDeal.estimatedPayment).compSelected)}</p>` : `<p>Compensation: ${escape(JSON.parse(currDeal.estimatedPayment).customPay)}</p>`}` : `${JSON.parse(currDeal.estimatedPayment)["pay"] === "Product" ? `${JSON.parse(currDeal.estimatedPayment).product !== "" ? `<p>Product: ${escape(JSON.parse(currDeal.estimatedPayment).product)}</p>` : ``}` : ``}`}`}</div></div></div>
		<div class="w-full -mt-5 py-5"><div class="border border-1 rounded-xl text-white p-5"><p class="text-xl">Deliverables</p>
				<hr class="mb-2">
				<ol>${each(currDeal.recommendedDeliverables["set"], (del) => {
      return `<li class="m-5">${escape(del.title)}: ${escape(del.value)}
						</li>`;
    })}</ol></div>
			</div></div>
	<div class="mx-20 mt-10"><h2 class="text-2xl text-white text-center">Completed Deal</h2>
		<hr class="mt-2">
		${data.completed.length ? each(data.completed, (user) => {
      return `<div class="my-5 text-white border border-white rounded-xl bg-gray-800 shadow-md p-4 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between"><div><h2 class="text-xl font-bold mb-2">${escape(user.name)}</h2>
					<a class="text-blue-500 underline" href="${"/user-profile/" + escape(user.id, true)}">profile link</a></div>
				<button class="p-2 bg-blue-500 text-white rounded">View deal contract</button>
				
			</div>`;
    }) : `<p class="mx-auto text-center text-2xl my-10 text-red-500">No approved users</p>`}</div>
	<div class="mx-20 mt-10"><h2 class="text-2xl text-white text-center">Contract finalized awaitng payment</h2>
		<hr class="mt-2">
		${data.brandFinalized.length ? each(data.brandFinalized, (user) => {
      return `<div class="my-5 text-white border border-white rounded-xl bg-gray-800 shadow-md p-4 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between"><div><h2 class="text-xl font-bold mb-2">${escape(user.name)}</h2>
					<a class="text-blue-500 underline" href="${"/user-profile/" + escape(user.id, true)}">profile link</a></div>
				<button class="p-2 bg-blue-500 text-white rounded">View deal contract</button>
				
			</div>`;
    }) : `<p class="mx-auto text-center text-2xl my-10 text-red-500">No approved users</p>`}</div>
	<div class="mx-20 mt-10"><h2 class="text-2xl text-white text-center">User Confirmed</h2>
		<hr class="mt-2">
		${data.readyUsers.length ? each(data.readyUsers, (user) => {
      return `<div class="my-5 text-white border border-white rounded-xl bg-gray-800 shadow-md p-4 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between"><div><h2 class="text-xl font-bold mb-2">${escape(user.name)}</h2>
					<a class="text-blue-500 underline" href="${"/user-profile/" + escape(user.id, true)}">profile link</a></div>
				<button class="p-2 bg-blue-500 text-white rounded">View/Edit deal contract</button>
			</div>`;
    }) : `<p class="mx-auto text-center text-2xl my-10 text-red-500">No confirmed users yet</p>`}</div>
	<div class="mx-20 mt-10"><h2 class="text-2xl text-white text-center">Waiting for confirmation from user</h2>
		<hr class="mt-2">
		${data.confirmedUsers.length ? each(data.confirmedUsers, (user) => {
      return `<div class="my-5 text-white border border-white rounded-xl bg-gray-800 shadow-md p-4 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between"><div><h2 class="text-xl font-bold mb-2">${escape(user.name)}</h2>
					<a class="text-blue-500 underline" href="${"/user-profile/" + escape(user.id, true)}">profile link</a></div>
				
			</div>`;
    }) : `<p class="mx-auto text-center text-2xl my-10 text-red-500">No approved users</p>`}</div>

	
	<div class="mx-20 mt-10"><h2 class="text-2xl text-white text-center">Interested Athtletes</h2>
		<hr class="mt-2">
		<div class="flex mt-4 items-center justify-around"><div>${validate_component(Button, "Button").$$render($$result, { class: "border border-white " }, {}, {
      default: () => {
        return `${validate_component(Chevron, "Chevron").$$render($$result, {}, {}, {
          default: () => {
            return `Filter Sport`;
          }
        })}`;
      }
    })}
				${validate_component(Dropdown, "Dropdown").$$render(
      $$result,
      {
        placement: "top",
        class: " bg-gray-700 w-64 h-32 overflow-y-scroll overflow-x-hidden text-black  text-left whitespace-nowrap text-sm",
        open
      },
      {
        open: ($$value) => {
          open = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${each(sportTypes, (sport) => {
            return `${validate_component(DropdownItem, "DropdownItem").$$render(
              $$result,
              {
                class: "text-white ml-2 mt-2",
                value: sport,
                group: sport
              },
              {
                group: ($$value) => {
                  sport = $$value;
                  $$settled = false;
                }
              },
              {
                default: () => {
                  return `${escape(sport)}`;
                }
              }
            )}`;
          })}
					<div class="h-2 w-full"></div>`;
        }
      }
    )}
				<p class="mx-5 text-white text-bold text-xl">Sport: ${escape(pickedSport)}</p></div>
			<div>${validate_component(Button, "Button").$$render(
      $$result,
      {
        class: "border border-white float-right "
      },
      {},
      {
        default: () => {
          return `${validate_component(Chevron, "Chevron").$$render($$result, {}, {}, {
            default: () => {
              return `Filter Gender`;
            }
          })}`;
        }
      }
    )}
				${validate_component(Dropdown, "Dropdown").$$render(
      $$result,
      {
        placement: "top",
        class: " bg-gray-700 w-64 h-32 overflow-y-scroll overflow-x-hidden text-black  text-left whitespace-nowrap text-sm",
        open: genderDropdownOpen
      },
      {
        open: ($$value) => {
          genderDropdownOpen = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${each(genderTypes, (gender) => {
            return `${validate_component(DropdownItem, "DropdownItem").$$render(
              $$result,
              {
                class: "text-white ml-2 mt-2",
                value: gender,
                group: gender
              },
              {
                group: ($$value) => {
                  gender = $$value;
                  $$settled = false;
                }
              },
              {
                default: () => {
                  return `${escape(gender)}`;
                }
              }
            )}`;
          })}
					<div class="h-2 w-full"></div>`;
        }
      }
    )}
				<p class="mx-5 text-white text-bold text-xl">Gender: ${escape(pickedGender)}</p></div></div>
		${filteredUsers.length ? each(filteredUsers, (user) => {
      return `<div class="my-5 text-white border border-white rounded-xl bg-gray-800 shadow-md p-4 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between"><div><h2 class="text-xl font-bold mb-2">${escape(user.name)}</h2>
					<a class="text-blue-500 underline" href="${"/user-profile/" + escape(user.id, true)}">profile link</a></div>
				<form method="post" action="?/pickUser"><input id="userId" name="userId" hidden${add_attribute("value", user.id, 0)}>
					<input id="user-email" name="user-email" hidden${add_attribute("value", user.email, 0)}>

					<button type="submit" class="p-2 bg-blue-500 text-white rounded">Work with this athlete</button></form>
			</div>`;
    }) : `<p class="mx-auto text-center text-2xl my-10 text-red-500">No interested athletes</p>`}</div></div>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
