

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/(email)/email/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.c7612fe0.js","_app/immutable/chunks/index.0a5d0d14.js"];
export const stylesheets = [];
export const fonts = [];
