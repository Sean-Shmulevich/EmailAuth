import { c as create_ssr_component, d as each, e as escape, f as add_attribute } from "../../../../chunks/index2.js";
/* empty css                      */import "devalue";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<h1 class="text-center text-6xl">Admin approve users</h1>

<div class="mx-24 mt-10"><form method="post" action="?/logout"><input type="submit" value="Sign out"></form>
	


	${each(data.allUsers, (user) => {
    return `<div class="bg-white shadow-md p-4 flex items-center justify-between"><div><h2 class="text-xl font-bold mb-2">${escape(user.email)}</h2>
				<p>Email Verified: ${escape(user.email_verified ? "Yes" : "No")}</p>
				<p>Admin Verified: ${escape(user.admin_verified ? "Yes" : "No")}</p>
				<a class="text-blue-500 underline" href="${"/user-profile/" + escape(user.id, true)}">profile link</a></div>
			<form method="post" action="?/verify"><input id="email" name="email"${add_attribute("value", user.email, 0)}><br>

				<button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded">Button </button></form>

		</div>`;
  })}
</div>`;
});
export {
  Page as default
};
