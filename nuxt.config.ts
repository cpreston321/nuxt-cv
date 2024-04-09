// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  $development: {
    site: {
      name: 'John Doe | Full Stack Engineer',
      description: 'Full Stack Engineer focused on building products with extra attention to detail',
      url: 'http://localhost:3000',
    },
  },

  experimental: {
    inlineRouteRules: true,
  },

  devtools: { enabled: true },

  image: {
    domains: ['avatars.githubusercontent.com', 'gravatar.com'],
    format: ['avif', 'webp'],
  },

  imports: {
    dirs: ['lib'],
    mergeExisting: true,
  },

  modules: [
    "@nuxt/fonts",
    '@nuxt/image',
    '@nuxtjs/seo',
    '@nuxtjs/tailwindcss',
    'radix-vue/nuxt',
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
