import { c as create_ssr_component, j as escape } from "../../../../../chunks/index2.js";
import "devalue";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  return `<div class="rounded-xl bg-white px-10 pb-10 mx-6 pt-0 -mt-10 max-w-[800px] mx-auto"><h1 class="p-10">Reset password</h1>
	<form method="post"><label for="new-password">New password</label>
		<p>Password must be at least 8 characters long</p>
		<input id="new-password" name="new-password">
		<input type="submit" value="Reset password"></form>
	${form?.message ? `<p class="error">${escape(form.message)}</p>` : ``}</div>`;
});
export {
  Page as default
};
