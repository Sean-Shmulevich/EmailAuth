import * as server from '../entries/pages/(email)/email/_page.server.ts.js';

export const index = 5;
export const component = async () => (await import('../entries/pages/(email)/email/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(email)/email/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.a3687a1b.js","_app/immutable/chunks/index.6e2e1d93.js","_app/immutable/chunks/paths.38067e25.js"];
export const stylesheets = [];
export const fonts = [];
