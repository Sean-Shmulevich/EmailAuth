import { c as create_ssr_component, j as escape } from "../../../../../chunks/index2.js";
import "devalue";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  return `<h1>Reset password</h1>
<form method="post"><label for="new-password">New password</label>
	<p>Password must be at least 8 characters long</p>
	<input id="new-password" name="new-password">
	<input type="submit" value="Reset password"></form>
${form?.message ? `<p class="error">${escape(form.message)}</p>` : ``}`;
});
export {
  Page as default
};
