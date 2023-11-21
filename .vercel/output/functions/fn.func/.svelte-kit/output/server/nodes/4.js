import * as server from '../entries/pages/(account-utils)/email-verification/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(account-utils)/email-verification/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(account-utils)/email-verification/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.ee822e2a.js","_app/immutable/chunks/index.0a5d0d14.js","_app/immutable/chunks/forms.84f3cfd1.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.d4c0fd13.js","_app/immutable/chunks/paths.fa1005e7.js","_app/immutable/chunks/navigation.e0febe5d.js"];
export const stylesheets = ["_app/immutable/assets/4.9f7e5119.css"];
export const fonts = [];
