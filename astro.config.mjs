// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  integrations: [mdx()],
  image: {
    domains: ["assets-for-gh-pages.gb-lon-1.linodeobjects.com"]
  }
});