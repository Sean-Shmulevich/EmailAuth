import * as server from '../entries/pages/admin/approve-users/_page.server.js';

export const index = 20;
export const component = async () => (await import('../entries/pages/admin/approve-users/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/approve-users/+page.server.js";
export const imports = ["_app/immutable/nodes/20.8ff36930.js","_app/immutable/chunks/index.5c233941.js","_app/immutable/chunks/forms.a883d376.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.fc07a0e3.js","_app/immutable/chunks/paths.5af759f7.js"];
export const stylesheets = ["_app/immutable/assets/app.0c694505.css"];
export const fonts = [];
