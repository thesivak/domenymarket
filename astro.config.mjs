// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://domenymarket.cz',
  // base: '/domenymarket', // Uncomment for GitHub Pages preview
  vite: {
    plugins: [tailwindcss()]
  }
});