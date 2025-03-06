import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	optimizeDeps:{
		force:true
	},
	build:{
		assetsDir:'assets'
	},
	server:{
		port:5177
	}
});
