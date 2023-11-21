import * as server from '../entries/pages/admin/approve-users/_page.server.js';

export const index = 29;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/approve-users/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/approve-users/+page.server.js";
export const imports = ["_app/immutable/nodes/29.1a082ae5.js","_app/immutable/chunks/index.0a5d0d14.js","_app/immutable/chunks/forms.c872ce3b.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.0f375cda.js","_app/immutable/chunks/paths.c4150d2d.js","_app/immutable/chunks/navigation.da060d94.js"];
export const stylesheets = ["_app/immutable/assets/app.c60ff190.css"];
export const fonts = [];
