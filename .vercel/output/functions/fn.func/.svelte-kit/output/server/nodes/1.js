

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.6d1c94bf.js","_app/immutable/chunks/index.0a5d0d14.js","_app/immutable/chunks/stores.a77699c2.js","_app/immutable/chunks/singletons.e03a3409.js","_app/immutable/chunks/paths.47abb27e.js"];
export const stylesheets = [];
export const fonts = [];
