import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { webSocketServer } from './webSocket.js';

import basicSsl from '@vitejs/plugin-basic-ssl';

export default defineConfig({
	server: {
		port: 3000
	},
	preview: {
		port: 3000
	},

	plugins: [sveltekit(), basicSsl(), webSocketServer]
});
