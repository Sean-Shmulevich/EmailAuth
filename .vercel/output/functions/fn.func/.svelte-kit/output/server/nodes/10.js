import * as server from '../entries/pages/(main)/login/_page.server.ts.js';

export const index = 10;
export const component = async () => (await import('../entries/pages/(main)/login/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(main)/login/+page.server.ts";
export const imports = ["_app/immutable/nodes/10.e9c421ef.js","_app/immutable/chunks/index.6e2e1d93.js","_app/immutable/chunks/forms.b0509e59.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.beceb609.js","_app/immutable/chunks/paths.38067e25.js"];
export const stylesheets = [];
export const fonts = [];
