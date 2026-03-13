// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://pricing.sumannaba.in',
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  },
  build: {
    assets: '_astro'
  }
});