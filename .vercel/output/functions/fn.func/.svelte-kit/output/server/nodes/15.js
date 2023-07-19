import * as server from '../entries/pages/(user-pages)/deals/_page.server.ts.js';

export const index = 15;
export const component = async () => (await import('../entries/pages/(user-pages)/deals/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(user-pages)/deals/+page.server.ts";
export const imports = ["_app/immutable/nodes/15.fd2f0dbf.js","_app/immutable/chunks/index.5c233941.js"];
export const stylesheets = ["_app/immutable/assets/15.3d9a2632.css"];
export const fonts = [];
