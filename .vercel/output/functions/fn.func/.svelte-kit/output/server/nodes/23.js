import * as server from '../entries/pages/(user-pages)/matches/_page.server.js';

export const index = 23;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(user-pages)/matches/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(user-pages)/matches/+page.server.js";
export const imports = ["_app/immutable/nodes/23.361a9dd2.js","_app/immutable/chunks/index.0a5d0d14.js","_app/immutable/chunks/forms.84f3cfd1.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.d4c0fd13.js","_app/immutable/chunks/paths.fa1005e7.js","_app/immutable/chunks/navigation.e0febe5d.js","_app/immutable/chunks/ArrowUp.svelte_svelte_type_style_lang.3acaaff1.js","_app/immutable/chunks/Wave.e0828500.js"];
export const stylesheets = ["_app/immutable/assets/ArrowUp.baf5064f.css"];
export const fonts = [];
