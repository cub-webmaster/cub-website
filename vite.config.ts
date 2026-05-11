import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { resolve } from 'path';
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
	plugins: [sveltekit(), tailwindcss()],
	resolve: {
        alias: {
            "$components": resolve("./src/components/"),
            "$data": resolve("./src/data/")
        }
    },

});
