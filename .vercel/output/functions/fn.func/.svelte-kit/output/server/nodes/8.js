import * as server from '../entries/pages/(brand-pages)/brand-profile/_user_/_page.server.js';

export const index = 8;
export const component = async () => (await import('../entries/pages/(brand-pages)/brand-profile/_user_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(brand-pages)/brand-profile/[user]/+page.server.js";
export const imports = ["_app/immutable/nodes/8.a6698afa.js","_app/immutable/chunks/preload-helper.41c905a7.js","_app/immutable/chunks/index.5c233941.js"];
export const stylesheets = ["_app/immutable/assets/8.57839469.css"];
export const fonts = [];
