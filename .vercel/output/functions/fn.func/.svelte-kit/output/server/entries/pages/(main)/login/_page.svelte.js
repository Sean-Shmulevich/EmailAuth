import { c as create_ssr_component, f as add_attribute, e as escape } from "../../../../chunks/index2.js";
import "devalue";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  return `<h1>Sign in</h1>
<form method="post"><label for="email">Email</label><br>
	<input id="email" name="email"${add_attribute("value", form?.email ?? "", 0)}><br>
	<label for="password">Password</label>
	<input id="password" name="password" type="password"><br>
	<input type="submit" value="Continue"></form>
${form?.message ? `<p class="error">${escape(form.message)}</p>` : ``}
<a href="/password-reset">Forgot password?</a>
<a href="/signup">Create an account</a>`;
});
export {
  Page as default
};
