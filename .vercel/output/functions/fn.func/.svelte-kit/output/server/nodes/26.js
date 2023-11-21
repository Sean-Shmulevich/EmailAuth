import * as server from '../entries/pages/admin/(email)/email/_page.server.ts.js';

export const index = 26;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/(email)/email/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/(email)/email/+page.server.ts";
export const imports = ["_app/immutable/nodes/26.1c5c4780.js","_app/immutable/chunks/index.0a5d0d14.js","_app/immutable/chunks/paths.47abb27e.js"];
export const stylesheets = [];
export const fonts = [];
