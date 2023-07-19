import { c as create_ssr_component, r as each, j as escape, g as add_attribute } from "../../../../chunks/index2.js";
/* empty css                      */import "devalue";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="bg-white rounded-xl mx-auto -mt-14 max-w-[90%] px-10 pb-10 w-[85%] mb-12"><h1 class="text-center pt-10 text-6xl">Admin approve users</h1>

<div class="mt-10"><div class="mx-auto mb-10 text-center rounded-3xl py-4 w-[20%] bg-black text-white"><a class="text-center" href="/admin/approve-brands">go to approve brands</a></div>

	<h2 class="text-4xl text-center">Users waiting for approval</h2>
	${data.allUsers.length === 0 ? `<div class="p-5 my-4 mx-auto text-center rounded-xl w-48 bg-gray-400"><p class="text-2xl">No users waiting for approval</p></div>` : ``}

	${each(data.allUsers, (user) => {
    return `<div class="bg-white shadow-md p-4 flex items-center justify-between"><div><h2 class="text-xl font-bold mb-2">${escape(user.email)}</h2>
				<p>Email Verified: ${escape(user.email_verified ? "Yes" : "No")}</p>
				<p>Admin Verified: ${escape(user.admin_verified ? "Yes" : "No")}</p>
				<a class="text-blue-500 underline" href="${"/user-profile/" + escape(user.id, true)}">profile link</a></div>
			<form method="post" action="?/verify"><input id="email" name="email" hidden${add_attribute("value", user.email, 0)}>

				<button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded">Button </button></form>
		</div>`;
  })}
	<h2 class="text-4xl text-center">Approved Users</h2>
	${each(data.approvedUsers, (user) => {
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
