import * as server from '../entries/pages/(email)/email/_page.server.ts.js';

export const index = 9;
export const component = async () => (await import('../entries/pages/(email)/email/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(email)/email/+page.server.ts";
export const imports = ["_app/immutable/nodes/9.41ea161d.js","_app/immutable/chunks/index.5c233941.js","_app/immutable/chunks/paths.5af759f7.js"];
export const stylesheets = [];
export const fonts = [];
