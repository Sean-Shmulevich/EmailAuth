import { c as create_ssr_component, g as add_attribute, j as escape } from "../../../../chunks/index2.js";
import "devalue";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  return `<div class="rounded-xl bg-white px-10 pb-10 mx-6 pt-0 -mt-10 max-w-[800px] mx-auto"><h1 class="pt-10">Athlete Sign in</h1>
	<form method="post"><label for="email">Email</label><br>
		<input id="email" name="email"${add_attribute("value", form?.email ?? "", 0)}><br>
		<label for="password">Password</label>
		<input id="password" name="password" type="password"><br>
		<input type="submit" value="Continue"></form>
	${form?.message ? `<p class="error">${escape(form.message)}</p>` : ``}
	<a href="/password-reset">Forgot password?</a>
	<a href="/signup">Create an account</a></div>`;
});
export {
  Page as default
};
