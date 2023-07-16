import * as server from '../entries/pages/(user-pages)/user-profile/_user_/_page.server.js';

export const index = 16;
export const component = async () => (await import('../entries/pages/(user-pages)/user-profile/_user_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(user-pages)/user-profile/[user]/+page.server.js";
export const imports = ["_app/immutable/nodes/16.4442b3b2.js","_app/immutable/chunks/index.69d1f051.js"];
export const stylesheets = ["_app/immutable/assets/16.2217d014.css"];
export const fonts = [];
