

export const index = 31;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/coming-soon/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/31.8de97f92.js","_app/immutable/chunks/index.0a5d0d14.js"];
export const stylesheets = [];
export const fonts = [];
