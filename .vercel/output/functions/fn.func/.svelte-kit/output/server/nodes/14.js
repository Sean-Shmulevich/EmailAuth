import * as server from '../entries/pages/(main)/user-profile/_user_/_page.server.js';

export const index = 14;
export const component = async () => (await import('../entries/pages/(main)/user-profile/_user_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(main)/user-profile/[user]/+page.server.js";
export const imports = ["_app/immutable/nodes/14.c21f9470.js","_app/immutable/chunks/index.6e2e1d93.js"];
export const stylesheets = ["_app/immutable/assets/14.2217d014.css"];
export const fonts = [];
