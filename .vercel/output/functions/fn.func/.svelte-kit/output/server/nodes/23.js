import * as server from '../entries/pages/(user-pages)/matches/_page.server.js';

export const index = 23;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(user-pages)/matches/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(user-pages)/matches/+page.server.js";
export const imports = ["_app/immutable/nodes/23.cd50c0cb.js","_app/immutable/chunks/index.0a5d0d14.js","_app/immutable/chunks/forms.169ec8e8.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.9dccc093.js","_app/immutable/chunks/paths.768dd842.js","_app/immutable/chunks/navigation.02308eb2.js","_app/immutable/chunks/ArrowUp.svelte_svelte_type_style_lang.3acaaff1.js","_app/immutable/chunks/Wave.e0828500.js"];
export const stylesheets = ["_app/immutable/assets/ArrowUp.baf5064f.css"];
export const fonts = [];
