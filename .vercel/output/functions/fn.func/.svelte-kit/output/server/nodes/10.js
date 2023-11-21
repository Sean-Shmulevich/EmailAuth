import * as server from '../entries/pages/(brand-pages)/creation-center/brand-create-offer/_page.server.js';

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(brand-pages)/creation-center/brand-create-offer/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(brand-pages)/creation-center/brand-create-offer/+page.server.js";
export const imports = ["_app/immutable/nodes/10.50042e9b.js","_app/immutable/chunks/index.0a5d0d14.js","_app/immutable/chunks/ImageCropper.3b1e2d59.js","_app/immutable/chunks/Cropper.7348cff3.js","_app/immutable/chunks/FileDrop.svelte_svelte_type_style_lang.46a8f44d.js","_app/immutable/chunks/paths.47abb27e.js","_app/immutable/chunks/Wrapper.443f2850.js","_app/immutable/chunks/DropdownItem.9887f328.js","_app/immutable/chunks/Chevron.8783fe36.js","_app/immutable/chunks/ArrowUp.svelte_svelte_type_style_lang.3acaaff1.js","_app/immutable/chunks/Wave.e0828500.js","_app/immutable/chunks/forms.f8a6f744.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.e03a3409.js","_app/immutable/chunks/navigation.361c9081.js","_app/immutable/chunks/Radio.389dafbc.js"];
export const stylesheets = ["_app/immutable/assets/10.ffba0468.css","_app/immutable/assets/Indicator.1d121e74.css","_app/immutable/assets/ImageCropper.c32f7f22.css","_app/immutable/assets/Cropper.4c0c1aa0.css","_app/immutable/assets/FileDrop.07e71ab7.css","_app/immutable/assets/ArrowUp.baf5064f.css"];
export const fonts = [];
