import { c as create_ssr_component, i as escape, b as add_attribute } from "../../../../chunks/index2.js";
import "devalue";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "h1.svelte-r87ebd.svelte-r87ebd{margin-top:8rem;margin-bottom:0.5rem;width:100%;font-size:1.875rem;line-height:2.25rem;font-weight:600}@media(min-width: 640px){h1.svelte-r87ebd.svelte-r87ebd{margin-top:7rem}}@media(min-width: 768px){h1.svelte-r87ebd.svelte-r87ebd{margin-top:6rem}}@media(min-width: 1024px){h1.svelte-r87ebd.svelte-r87ebd{margin-top:5rem}}input.svelte-r87ebd.svelte-r87ebd{margin-top:0.25rem;margin-bottom:0.5rem;width:100%;border-radius:0.25rem;border-width:1px;padding-left:0.5rem;padding-right:0.5rem;padding-top:0.375rem;padding-bottom:0.375rem}input[type='submit'].svelte-r87ebd.svelte-r87ebd{margin-bottom:0.5rem;width:100%;cursor:pointer;border-radius:0.25rem;border-width:1px;--tw-bg-opacity:1;background-color:rgb(0 0 0 / var(--tw-bg-opacity));padding-left:0.5rem;padding-right:0.5rem;padding-top:0.375rem;padding-bottom:0.375rem;font-weight:500;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}p.error.svelte-r87ebd.svelte-r87ebd{font-size:0.875rem;line-height:1.25rem;--tw-text-opacity:1;color:rgb(248 113 113 / var(--tw-text-opacity))}form.svelte-r87ebd.svelte-r87ebd{margin-top:0.5rem;margin-bottom:0.5rem}form.svelte-r87ebd p.svelte-r87ebd{font-size:0.875rem;line-height:1.25rem;--tw-text-opacity:1;color:rgb(113 113 122 / var(--tw-text-opacity))}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { form } = $$props;
  let phoneNumber;
  let message = true;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  $$result.css.add(css);
  {
    {
      if (form && form.emailSent) {
        setTimeout(
          () => {
            message = false;
          },
          8e3
        );
        message = true;
      }
    }
  }
  return `<div class="rounded-xl bg-white px-10 pb-10 pt-0 -mt-10 max-w-[800px] mx-auto"><h1 class="pt-10 svelte-r87ebd">Verify Your account</h1>
	<h2 class="mt-5">Send verification email</h2>
	<form action="?/sendEmail" method="post" class="svelte-r87ebd"><input type="submit" value="Send email" class="svelte-r87ebd">
		${form?.emailSent && message ? `<p class="error svelte-r87ebd">${escape(form.emailSent)}</p>
			<p class="svelte-r87ebd">Please check your inbox (${escape(data.user.email)}) for a verification email</p>
			<p class="text-red-500 svelte-r87ebd">Be sure to check your spam if you do not receive the email</p>` : ``}</form>
	<h1 class="text-center svelte-r87ebd">OR</h1>
	<h2 class="mt-5">Send verification text</h2>
	<form class="svelte-r87ebd"><input type="tel" id="phone" name="phone" placeholder="267-321-9999" class="svelte-r87ebd"${add_attribute("value", phoneNumber, 0)}>
		<input type="submit" value="Send verification text" class="svelte-r87ebd"></form>
	${``}
	<form action="?/validateCode" method="post" class="svelte-r87ebd"><input type="text" name="token" class="svelte-r87ebd">
		<input type="submit" value="Input SMS verification code" class="svelte-r87ebd">
		<p class="svelte-r87ebd">Case sensitive</p>
		${form?.emailSent && message ? `<p class="error svelte-r87ebd">${escape(form.emailSent)}</p>` : ``}</form>

	${form?.message ? `<p class="error svelte-r87ebd">${escape(form.message)}</p>` : ``}
</div>`;
});
export {
  Page as default
};
