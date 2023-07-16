import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
export const component = async () => (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.f29b2b36.js","_app/immutable/chunks/index.69d1f051.js","_app/immutable/chunks/forms.3b1d15a9.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.9e9d9c63.js","_app/immutable/chunks/paths.b4d18d31.js"];
export const stylesheets = ["_app/immutable/assets/0.04193e64.css","_app/immutable/assets/app.2d54d283.css"];
export const fonts = [];
