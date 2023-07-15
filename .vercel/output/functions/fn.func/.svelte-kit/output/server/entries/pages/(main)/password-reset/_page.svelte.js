import { c as create_ssr_component, f as add_attribute, e as escape } from "../../../../chunks/index2.js";
import "devalue";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  return `<h1>Reset password</h1>
<form method="post"><label for="email">Email</label>
	<input id="email" name="email"${add_attribute("value", form?.email ?? "", 0)}>
	<input type="submit" value="Send email"></form>
${form?.message ? `<p class="error">${escape(form.message)}</p>` : ``}
${form?.success ? `<p class="message">A verification email was sent to your inbox</p>` : ``}`;
});
export {
  Page as default
};
