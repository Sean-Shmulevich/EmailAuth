import * as server from '../entries/pages/_page.server.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/3.72578cd5.js","_app/immutable/chunks/index.0a5d0d14.js"];
export const stylesheets = ["_app/immutable/assets/3.19d2684f.css"];
export const fonts = [];
