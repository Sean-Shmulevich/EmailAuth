import * as universal from '../entries/pages/_layout.ts.js';
import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.61f77e50.js","_app/immutable/chunks/index.0a5d0d14.js","_app/immutable/chunks/forms.acbd3f11.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.ca0cb1ad.js","_app/immutable/chunks/paths.fe267632.js","_app/immutable/chunks/navigation.60f8ae1a.js","_app/immutable/chunks/Wrapper.443f2850.js","_app/immutable/chunks/DropdownItem.9887f328.js"];
export const stylesheets = ["_app/immutable/assets/app.c60ff190.css","_app/immutable/assets/Indicator.1d121e74.css"];
export const fonts = [];
