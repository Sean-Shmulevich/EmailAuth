import * as server from '../entries/pages/admin/_page.server.ts.js';

export const index = 18;
export const component = async () => (await import('../entries/pages/admin/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/+page.server.ts";
export const imports = ["_app/immutable/nodes/18.e1790b34.js","_app/immutable/chunks/index.5c233941.js","_app/immutable/chunks/forms.a883d376.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.fc07a0e3.js","_app/immutable/chunks/paths.5af759f7.js"];
export const stylesheets = [];
export const fonts = [];
