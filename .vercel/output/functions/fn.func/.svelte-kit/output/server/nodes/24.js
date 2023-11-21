import * as server from '../entries/pages/(user-pages)/user-profile/_user_/_page.server.js';

export const index = 24;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(user-pages)/user-profile/_user_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(user-pages)/user-profile/[user]/+page.server.js";
export const imports = ["_app/immutable/nodes/24.8b27683c.js","_app/immutable/chunks/index.0a5d0d14.js"];
export const stylesheets = ["_app/immutable/assets/15.6aec8183.css"];
export const fonts = [];
