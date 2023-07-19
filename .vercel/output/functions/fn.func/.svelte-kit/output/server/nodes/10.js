import * as server from '../entries/pages/(email)/email/_email_id_/_page.server.ts.js';

export const index = 10;
export const component = async () => (await import('../entries/pages/(email)/email/_email_id_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(email)/email/[email_id]/+page.server.ts";
export const imports = ["_app/immutable/nodes/10.5ae9a585.js","_app/immutable/chunks/index.5c233941.js","_app/immutable/chunks/forms.a883d376.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.fc07a0e3.js","_app/immutable/chunks/paths.5af759f7.js"];
export const stylesheets = ["_app/immutable/assets/10.fa19ac6f.css"];
export const fonts = [];
