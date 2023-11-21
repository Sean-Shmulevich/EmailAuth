import * as server from '../entries/pages/(brand-pages)/suggest/_deal_/_page.server.js';

export const index = 15;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(brand-pages)/suggest/_deal_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(brand-pages)/suggest/[deal]/+page.server.js";
export const imports = ["_app/immutable/nodes/15.06a914be.js","_app/immutable/chunks/index.0a5d0d14.js"];
export const stylesheets = ["_app/immutable/assets/15.6aec8183.css"];
export const fonts = [];
