import * as server from '../entries/pages/admin/approve-brands/_page.server.js';

export const index = 28;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/approve-brands/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/approve-brands/+page.server.js";
export const imports = ["_app/immutable/nodes/28.8ba06d95.js","_app/immutable/chunks/index.0a5d0d14.js","_app/immutable/chunks/forms.84f3cfd1.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.d4c0fd13.js","_app/immutable/chunks/paths.fa1005e7.js","_app/immutable/chunks/navigation.e0febe5d.js"];
export const stylesheets = ["_app/immutable/assets/app.c60ff190.css"];
export const fonts = [];
