import * as server from '../entries/pages/(account-utils)/email-verification/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(account-utils)/email-verification/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(account-utils)/email-verification/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.5a91fd14.js","_app/immutable/chunks/index.0a5d0d14.js","_app/immutable/chunks/forms.acbd3f11.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.ca0cb1ad.js","_app/immutable/chunks/paths.fe267632.js","_app/immutable/chunks/navigation.60f8ae1a.js"];
export const stylesheets = ["_app/immutable/assets/4.9f7e5119.css"];
export const fonts = [];
