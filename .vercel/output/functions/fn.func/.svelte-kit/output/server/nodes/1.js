

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.e27329ed.js","_app/immutable/chunks/index.0a5d0d14.js","_app/immutable/chunks/stores.3e89387b.js","_app/immutable/chunks/singletons.9dccc093.js","_app/immutable/chunks/paths.768dd842.js"];
export const stylesheets = [];
export const fonts = [];
