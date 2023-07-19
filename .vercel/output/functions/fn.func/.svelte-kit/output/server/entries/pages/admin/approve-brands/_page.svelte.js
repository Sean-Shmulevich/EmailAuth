import { c as create_ssr_component, r as each, j as escape, g as add_attribute } from "../../../../chunks/index2.js";
/* empty css                      */import "devalue";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="bg-white rounded-xl mx-auto -mt-14 max-w-[90%] px-10 pb-10 w-[85%] mb-12"><h1 class="text-center text-6xl">Admin approve brands</h1>

	<div class="mt-10"><div class="mx-auto mb-10 text-center rounded-3xl py-4 w-[20%] bg-black text-white"><a class="text-center" href="/admin/approve-users">go to approve users</a></div>

		<h2 class="text-4xl text-center">Brands waiting for approval</h2>
		${data.allBrands.length === 0 ? `<div class="p-5 my-4 mx-auto text-center rounded-xl w-48 bg-gray-400"><p class="text-2xl">No brands waiting for approval</p></div>` : ``}
		${each(data.allBrands, (user) => {
    return `<div class="bg-white shadow-md p-4 flex items-center justify-between"><div><h2 class="text-xl font-bold mb-2">${escape(user.email)}</h2>
					<p>Email Verified: ${escape(user.email_verified ? "Yes" : "No")}</p>
					<p>Admin Verified: ${escape(user.admin_verified ? "Yes" : "No")}</p>
					
					<a class="text-blue-500 underline" href="${"/user-profile/" + escape(user.id, true)}">profile link</a></div>
				<form method="post" action="?/verify"><input id="email" name="email" hidden${add_attribute("value", user.email, 0)}><br>

					<button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded">Button </button></form>
			</div>`;
  })}

		<h2 class="text-4xl text-center">Approved Brands</h2>
		${each(data.approvedBrands, (user) => {
    return `<div class="bg-white shadow-md p-4 flex items-center justify-between"><div><h2 class="text-xl font-bold mb-2">${escape(user.email)}</h2>
					<p>Email Verified: ${escape(user.email_verified ? "Yes" : "No")}</p>
					<p>Admin Verified: ${escape(user.admin_verified ? "Yes" : "No")}</p>
					<a class="text-blue-500 underline" href="${"/user-profile/" + escape(user.id, true)}">profile link</a></div>
			</div>`;
  })}</div></div>`;
});
export {
  Page as default
};
