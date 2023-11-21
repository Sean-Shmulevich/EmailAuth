import * as server from '../entries/pages/(brand-pages)/creation-center/deal/_deal_/_page.server.js';

export const index = 11;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(brand-pages)/creation-center/deal/_deal_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(brand-pages)/creation-center/deal/[deal]/+page.server.js";
export const imports = ["_app/immutable/nodes/11.9e9c2ccf.js","_app/immutable/chunks/index.0a5d0d14.js","_app/immutable/chunks/Wrapper.443f2850.js","_app/immutable/chunks/DropdownItem.9887f328.js","_app/immutable/chunks/Chevron.8783fe36.js","_app/immutable/chunks/forms.f8a6f744.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.e03a3409.js","_app/immutable/chunks/paths.47abb27e.js","_app/immutable/chunks/navigation.361c9081.js"];
export const stylesheets = ["_app/immutable/assets/Indicator.1d121e74.css"];
export const fonts = [];
