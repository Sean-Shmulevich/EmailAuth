import * as server from '../entries/pages/admin/approve-users/_page.server.js';

export const index = 29;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/approve-users/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/approve-users/+page.server.js";
export const imports = ["_app/immutable/nodes/29.f48caec5.js","_app/immutable/chunks/index.0a5d0d14.js","_app/immutable/chunks/forms.acbd3f11.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.ca0cb1ad.js","_app/immutable/chunks/paths.fe267632.js","_app/immutable/chunks/navigation.60f8ae1a.js"];
export const stylesheets = ["_app/immutable/assets/app.c60ff190.css"];
export const fonts = [];
