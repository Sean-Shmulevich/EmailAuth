import * as server from '../entries/pages/(account-utils)/password-reset/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(account-utils)/password-reset/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(account-utils)/password-reset/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.bb411199.js","_app/immutable/chunks/index.0a5d0d14.js","_app/immutable/chunks/forms.84f3cfd1.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.d4c0fd13.js","_app/immutable/chunks/paths.fa1005e7.js","_app/immutable/chunks/navigation.e0febe5d.js"];
export const stylesheets = ["_app/immutable/assets/5.373eaa85.css"];
export const fonts = [];
