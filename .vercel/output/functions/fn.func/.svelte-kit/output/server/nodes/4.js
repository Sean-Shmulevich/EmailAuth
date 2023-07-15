import * as server from '../entries/pages/(admin)/approve-users/_page.server.js';

export const index = 4;
export const component = async () => (await import('../entries/pages/(admin)/approve-users/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(admin)/approve-users/+page.server.js";
export const imports = ["_app/immutable/nodes/4.587d0c5e.js","_app/immutable/chunks/index.6e2e1d93.js","_app/immutable/chunks/forms.b0509e59.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.beceb609.js","_app/immutable/chunks/paths.38067e25.js"];
export const stylesheets = ["_app/immutable/assets/app.248b078d.css"];
export const fonts = [];
