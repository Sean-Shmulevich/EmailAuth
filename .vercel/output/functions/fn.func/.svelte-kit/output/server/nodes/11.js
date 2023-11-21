import * as server from '../entries/pages/(brand-pages)/creation-center/deal/_deal_/_page.server.js';

export const index = 11;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(brand-pages)/creation-center/deal/_deal_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(brand-pages)/creation-center/deal/[deal]/+page.server.js";
export const imports = ["_app/immutable/nodes/11.fa43bd16.js","_app/immutable/chunks/index.0a5d0d14.js","_app/immutable/chunks/Wrapper.443f2850.js","_app/immutable/chunks/DropdownItem.9887f328.js","_app/immutable/chunks/Chevron.8783fe36.js","_app/immutable/chunks/forms.acbd3f11.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.ca0cb1ad.js","_app/immutable/chunks/paths.fe267632.js","_app/immutable/chunks/navigation.60f8ae1a.js"];
export const stylesheets = ["_app/immutable/assets/Indicator.1d121e74.css"];
export const fonts = [];
