import * as server from '../entries/pages/(brand-pages)/creation-center/view-contract/_page.server.js';

export const index = 12;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(brand-pages)/creation-center/view-contract/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(brand-pages)/creation-center/view-contract/+page.server.js";
export const imports = ["_app/immutable/nodes/12.b624af51.js","_app/immutable/chunks/index.0a5d0d14.js","_app/immutable/chunks/FileDrop.svelte_svelte_type_style_lang.46a8f44d.js","_app/immutable/chunks/stores.40d7a6a5.js","_app/immutable/chunks/singletons.d4c0fd13.js","_app/immutable/chunks/paths.fa1005e7.js"];
export const stylesheets = ["_app/immutable/assets/12.f3fbabb6.css","_app/immutable/assets/Indicator.1d121e74.css","_app/immutable/assets/FileDrop.07e71ab7.css"];
export const fonts = [];
