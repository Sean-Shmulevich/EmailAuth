import * as server from '../entries/pages/(user-pages)/deals/_page.server.ts.js';

export const index = 20;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(user-pages)/deals/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(user-pages)/deals/+page.server.ts";
export const imports = ["_app/immutable/nodes/20.afdfae09.js","_app/immutable/chunks/index.0a5d0d14.js","_app/immutable/chunks/ArrowUp.svelte_svelte_type_style_lang.3acaaff1.js","_app/immutable/chunks/Wave.e0828500.js","_app/immutable/chunks/navigation.02308eb2.js","_app/immutable/chunks/singletons.9dccc093.js","_app/immutable/chunks/paths.768dd842.js"];
export const stylesheets = ["_app/immutable/assets/20.174b7d2b.css","_app/immutable/assets/ArrowUp.baf5064f.css"];
export const fonts = [];
