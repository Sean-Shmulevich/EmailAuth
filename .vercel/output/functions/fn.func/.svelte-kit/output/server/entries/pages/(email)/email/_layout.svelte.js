import { c as create_ssr_component } from "../../../../chunks/index2.js";
/* empty css                      */const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `
<html lang="en" data-sveltekit-preload-data="tap"><head><meta charset="utf-8">
		<link rel="icon" type="image/svg+xml" href="/favicon.svg">
		<meta name="viewport" content="width=device-width">
		<title>Demo mailbox</title></head>
	<body><header class="fixed top-0 w-full px-4 py-4"><a href="/email" class="text-xl font-semibold">Mailbox</a></header>
		<main class="mx-auto max-w-sm py-16 px-4">${slots.default ? slots.default({}) : ``}</main></body></html>`;
});
export {
  Layout as default
};
