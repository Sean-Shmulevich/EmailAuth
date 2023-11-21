import * as universal from '../entries/pages/_layout.ts.js';
import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.33b851fa.js","_app/immutable/chunks/index.0a5d0d14.js","_app/immutable/chunks/forms.f8a6f744.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.e03a3409.js","_app/immutable/chunks/paths.47abb27e.js","_app/immutable/chunks/navigation.361c9081.js","_app/immutable/chunks/Wrapper.443f2850.js","_app/immutable/chunks/DropdownItem.9887f328.js"];
export const stylesheets = ["_app/immutable/assets/app.c60ff190.css","_app/immutable/assets/Indicator.1d121e74.css"];
export const fonts = [];
