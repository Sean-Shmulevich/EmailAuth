

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.d6b945fd.js","_app/immutable/chunks/index.0a5d0d14.js","_app/immutable/chunks/stores.40d7a6a5.js","_app/immutable/chunks/singletons.d4c0fd13.js","_app/immutable/chunks/paths.fa1005e7.js"];
export const stylesheets = [];
export const fonts = [];
