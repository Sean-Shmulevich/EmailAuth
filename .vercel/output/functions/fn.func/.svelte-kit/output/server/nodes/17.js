import * as server from '../entries/pages/(user-pages)/user-profile/_user_/_page.server.js';

export const index = 17;
export const component = async () => (await import('../entries/pages/(user-pages)/user-profile/_user_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(user-pages)/user-profile/[user]/+page.server.js";
export const imports = ["_app/immutable/nodes/17.9f9ba6e6.js","_app/immutable/chunks/index.5c233941.js"];
export const stylesheets = ["_app/immutable/assets/17.2217d014.css"];
export const fonts = [];
