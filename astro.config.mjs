import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://zzzoptimizer.top',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});
