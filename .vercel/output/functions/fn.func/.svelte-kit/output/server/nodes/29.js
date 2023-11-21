import * as server from '../entries/pages/admin/approve-users/_page.server.js';

export const index = 29;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/approve-users/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/approve-users/+page.server.js";
export const imports = ["_app/immutable/nodes/29.711c7826.js","_app/immutable/chunks/index.0a5d0d14.js","_app/immutable/chunks/forms.f8a6f744.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.e03a3409.js","_app/immutable/chunks/paths.47abb27e.js","_app/immutable/chunks/navigation.361c9081.js"];
export const stylesheets = ["_app/immutable/assets/app.c60ff190.css"];
export const fonts = [];
