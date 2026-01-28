// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://domenymarket.cz',
  // base: '/domenymarket', // Only for GitHub Pages without custom domain
  vite: {
    plugins: [tailwindcss()]
  }
});