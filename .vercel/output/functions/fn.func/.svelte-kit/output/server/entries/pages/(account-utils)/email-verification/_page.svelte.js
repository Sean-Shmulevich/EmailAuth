import { c as create_ssr_component, j as escape } from "../../../../chunks/index2.js";
import "devalue";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { form } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  return `<div class="rounded-xl bg-white px-10 pb-10 mx-6 pt-0 -mt-10 max-w-[800px] mx-auto"><h1 class="pt-10">Email verification</h1>
	<p>Please check your inbox (${escape(data.user.email)}) for a verification email</p>
	<h2>Resend verification email</h2>
	<form method="post"><input type="submit" value="Resend email"></form>

	${form?.message ? `<p class="error">${escape(form.message)}</p>` : ``}</div>`;
});
export {
  Page as default
};
