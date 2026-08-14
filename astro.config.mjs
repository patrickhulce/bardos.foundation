// @ts-check
import {defineConfig} from 'astro/config'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  site: 'https://bardosfoundation.org',
  integrations: [sitemap(), tailwind()],
})
