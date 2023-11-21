import { c as create_ssr_component, i as escape } from "../../../../../../chunks/index2.js";
import "devalue";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "#email-content a{--tw-text-opacity:1;color:rgb(99 102 241 / var(--tw-text-opacity))\n}#email-content a:hover{text-decoration-line:underline\n}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="flex place-content-between text-sm"><p class="">To: ${escape(data.email.toAddress)}</p>
	<p class="text-zinc-400">${escape(data.email.dateSent.toLocaleString())}</p></div>
<h1 class="border-b py-2 text-lg font-semibold">${escape(data.email.subject)}</h1>
<p class="mt-4 break-words" id="email-content"><!-- HTML_TAG_START -->${data.email.content}<!-- HTML_TAG_END --></p>
<form method="post" class="mt-6"><input type="submit" value="Delete email" class="cursor-pointer text-sm text-red-400 hover:underline">
</form>`;
});
export {
  Page as default
};
