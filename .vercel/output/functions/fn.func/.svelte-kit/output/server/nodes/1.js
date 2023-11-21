

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.459b0f58.js","_app/immutable/chunks/index.0a5d0d14.js","_app/immutable/chunks/stores.7a8be736.js","_app/immutable/chunks/singletons.0f375cda.js","_app/immutable/chunks/paths.c4150d2d.js"];
export const stylesheets = [];
export const fonts = [];
