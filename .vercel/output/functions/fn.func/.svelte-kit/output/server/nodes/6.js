import * as server from '../entries/pages/(account-utils)/password-reset/_token_/_page.server.ts.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(account-utils)/password-reset/_token_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(account-utils)/password-reset/[token]/+page.server.ts";
export const imports = ["_app/immutable/nodes/6.22a0ceeb.js","_app/immutable/chunks/index.0a5d0d14.js","_app/immutable/chunks/forms.acbd3f11.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.ca0cb1ad.js","_app/immutable/chunks/paths.fe267632.js","_app/immutable/chunks/navigation.60f8ae1a.js"];
export const stylesheets = ["_app/immutable/assets/6.5b6184d2.css"];
export const fonts = [];
