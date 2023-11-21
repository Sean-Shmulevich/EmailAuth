import * as server from '../entries/pages/(brand-pages)/brand-profile/_user_/_page.server.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(brand-pages)/brand-profile/_user_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(brand-pages)/brand-profile/[user]/+page.server.js";
export const imports = ["_app/immutable/nodes/8.34fc7aa7.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/index.0a5d0d14.js"];
export const stylesheets = ["_app/immutable/assets/8.57839469.css"];
export const fonts = [];
