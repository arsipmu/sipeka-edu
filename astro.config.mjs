// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://arsipmu.github.io',
  base: '/sipeka-edu',
  output: 'static',
  trailingSlash: 'ignore',
});
