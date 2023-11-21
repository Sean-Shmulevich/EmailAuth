

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.9541fa90.js","_app/immutable/chunks/index.0a5d0d14.js","_app/immutable/chunks/stores.811a781e.js","_app/immutable/chunks/singletons.ca0cb1ad.js","_app/immutable/chunks/paths.fe267632.js"];
export const stylesheets = [];
export const fonts = [];
