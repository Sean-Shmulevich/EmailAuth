import { c as create_ssr_component, b as add_attribute, o as each, i as escape } from "../../../../../chunks/index2.js";
import "devalue";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div><form><label for="query" class="text-medium text-sm">Search by mailbox</label>
		<div class="flex gap-x-2"><input id="query" name="q" class="w-full rounded border px-2 placeholder:text-zinc-400" placeholder="user@example.com"${add_attribute("value", data.emailAddressQuery, 0)}>
			<input type="submit" value="Search" class="rounded bg-black px-4 py-1 font-medium text-white hover:cursor-pointer"></div></form></div>
<div class="my-4 grid grid-cols-1 divide-y">${data.emails.length < 1 ? `<p class="my-2 text-center text-zinc-500">No emails were found</p>` : ``}
	${each(data.emails, (email) => {
    return `<div class="py-4"><div class="flex place-content-between text-sm"><p>To: ${escape(email.toAddress)}</p>
				<p class="text-zinc-400">${escape(email.dateSent.toLocaleString())}</p></div>
			<a class="mt-2 font-medium hover:underline"${add_attribute("href", `/admin/email/${email.emailId}`, 0)}>${escape(email.subject)}</a>
		</div>`;
  })}</div>`;
});
export {
  Page as default
};
