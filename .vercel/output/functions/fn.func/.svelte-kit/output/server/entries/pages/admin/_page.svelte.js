import { c as create_ssr_component, b as add_attribute, i as escape } from "../../../chunks/index2.js";
import "devalue";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "h1.svelte-r87ebd{margin-top:8rem;margin-bottom:0.5rem;width:100%;font-size:1.875rem;line-height:2.25rem;font-weight:600}@media(min-width: 640px){h1.svelte-r87ebd{margin-top:7rem}}@media(min-width: 768px){h1.svelte-r87ebd{margin-top:6rem}}@media(min-width: 1024px){h1.svelte-r87ebd{margin-top:5rem}}label.svelte-r87ebd{margin-bottom:0.25rem;width:100%;font-size:0.875rem;line-height:1.25rem;font-weight:500}input.svelte-r87ebd{margin-top:0.25rem;margin-bottom:0.5rem;width:100%;border-radius:0.25rem;border-width:1px;padding-left:0.5rem;padding-right:0.5rem;padding-top:0.375rem;padding-bottom:0.375rem}input[type='submit'].svelte-r87ebd{margin-bottom:0.5rem;width:100%;cursor:pointer;border-radius:0.25rem;border-width:1px;--tw-bg-opacity:1;background-color:rgb(0 0 0 / var(--tw-bg-opacity));padding-left:0.5rem;padding-right:0.5rem;padding-top:0.375rem;padding-bottom:0.375rem;font-weight:500;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}p.error.svelte-r87ebd{font-size:0.875rem;line-height:1.25rem;--tw-text-opacity:1;color:rgb(248 113 113 / var(--tw-text-opacity))}form.svelte-r87ebd{margin-top:0.5rem;margin-bottom:0.5rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  $$result.css.add(css);
  return `<div class="rounded-xl bg-white px-10 pb-10 mx-6 pt-0 max-w-[800px] mx-auto"><h1 class="pt-10 svelte-r87ebd">Admin Sign in</h1>
	<form method="post" class="svelte-r87ebd"><label for="email" class="svelte-r87ebd">Email</label><br>
		<input id="email" name="email"${add_attribute("value", form?.email ?? "", 0)} class="svelte-r87ebd"><br>
		<label for="password" class="svelte-r87ebd">Password</label>
		<input id="password" name="password" type="password" class="svelte-r87ebd"><br>
		<input type="submit" value="Continue" class="svelte-r87ebd"></form>
	${form?.message ? `<p class="error svelte-r87ebd">${escape(form.message)}</p>` : ``}
	<a href="/password-reset">Forgot password?</a>
</div>`;
});
export {
  Page as default
};
