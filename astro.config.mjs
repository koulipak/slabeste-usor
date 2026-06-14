// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // IMPORTANT: schimbă cu domeniul real înainte de publicare.
  // E folosit pentru canonical, OpenGraph, JSON-LD și sitemap.
  site: 'https://www.slabeste-usor.ro',
  integrations: [sitemap()],
});
