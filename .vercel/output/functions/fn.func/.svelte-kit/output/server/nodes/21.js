import * as server from '../entries/pages/(user-pages)/deals/view-contract/_page.server.js';

export const index = 21;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(user-pages)/deals/view-contract/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(user-pages)/deals/view-contract/+page.server.js";
export const imports = ["_app/immutable/nodes/21.8652e297.js","_app/immutable/chunks/index.0a5d0d14.js"];
export const stylesheets = [];
export const fonts = [];
