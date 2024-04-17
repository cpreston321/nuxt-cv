import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const tailwindCSSPath = fileURLToPath(new URL('./assets/css/tailwind.css', import.meta.url))
const tailwindConfig = fileURLToPath(new URL('./tailwind.config.ts', import.meta.url))

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  $development: {
    site: {
      url: 'http://localhost:3000',
    },
  },

  experimental: {
    inlineRouteRules: true,
  },

  imports: {
    dirs: ['lib'],
    mergeExisting: true,
  },

  modules: [
    "@nuxt/fonts",
    '@nuxtjs/seo',
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    'shadcn-nuxt',
    "@vueuse/nuxt"
  ],

  fonts: {
    defaults: {
      weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    }
  },

  ogImage: {
    enabled: false,
  },

  schemaOrg: {
    enabled: false,
  },

  tailwindcss: {
    cssPath: resolve(tailwindCSSPath),
    configPath: resolve(tailwindConfig),
  },

  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: 'Ui',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui',
  },
})
