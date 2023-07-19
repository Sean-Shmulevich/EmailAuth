import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
export const component = async () => (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.d408a75a.js","_app/immutable/chunks/index.5c233941.js","_app/immutable/chunks/forms.a883d376.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.fc07a0e3.js","_app/immutable/chunks/paths.5af759f7.js"];
export const stylesheets = ["_app/immutable/assets/0.04193e64.css","_app/immutable/assets/app.0c694505.css"];
export const fonts = [];
