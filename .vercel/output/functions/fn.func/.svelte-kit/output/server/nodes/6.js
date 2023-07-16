import * as server from '../entries/pages/(email)/email/_page.server.ts.js';

export const index = 6;
export const component = async () => (await import('../entries/pages/(email)/email/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(email)/email/+page.server.ts";
export const imports = ["_app/immutable/nodes/6.16904362.js","_app/immutable/chunks/index.69d1f051.js","_app/immutable/chunks/paths.b4d18d31.js"];
export const stylesheets = [];
export const fonts = [];
