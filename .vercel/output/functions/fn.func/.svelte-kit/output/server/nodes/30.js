import * as server from '../entries/pages/admin/deal-contracts/_page.server.js';

export const index = 30;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/deal-contracts/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/deal-contracts/+page.server.js";
export const imports = ["_app/immutable/nodes/30.80701edc.js","_app/immutable/chunks/index.0a5d0d14.js","_app/immutable/chunks/paths.fa1005e7.js"];
export const stylesheets = [];
export const fonts = [];
