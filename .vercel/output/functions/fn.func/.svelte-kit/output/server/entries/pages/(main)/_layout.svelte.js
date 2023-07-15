import { c as create_ssr_component } from "../../../chunks/index2.js";
/* empty css                   */const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: 'main h1{margin-bottom:0.5rem;width:100%;font-size:1.875rem;line-height:2.25rem;font-weight:600\n}main label{margin-bottom:0.25rem;width:100%;font-size:0.875rem;line-height:1.25rem;font-weight:500\n}main input{margin-top:0.25rem;margin-bottom:0.5rem;width:100%;border-radius:0.25rem;border-width:1px;padding-left:0.5rem;padding-right:0.5rem;padding-top:0.375rem;padding-bottom:0.375rem\n}main input[type="submit"]{margin-bottom:0.5rem;width:100%;cursor:pointer;border-radius:0.25rem;border-width:1px;--tw-bg-opacity:1;background-color:rgb(0 0 0 / var(--tw-bg-opacity));padding-left:0.5rem;padding-right:0.5rem;padding-top:0.375rem;padding-bottom:0.375rem;font-weight:500;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))\n}main p.message{font-size:0.875rem;line-height:1.25rem\n}main p.error{font-size:0.875rem;line-height:1.25rem;--tw-text-opacity:1;color:rgb(248 113 113 / var(--tw-text-opacity))\n}form{margin-top:0.5rem;margin-bottom:0.5rem\n}main form p{font-size:0.875rem;line-height:1.25rem;--tw-text-opacity:1;color:rgb(113 113 122 / var(--tw-text-opacity))\n}',
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<html lang="en"><head><meta charset="utf-8">
		<link rel="icon" type="image/svg+xml" href="/favicon.svg">
		<meta name="viewport" content="width=device-width">
		<title>Demo mailbox</title></head>
	<body><main>${slots.default ? slots.default({}) : ``}</main></body>
</html>`;
});
export {
  Layout as default
};
