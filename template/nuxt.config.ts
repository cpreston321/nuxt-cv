// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: ['@cpreston321/nuxt-cv'],

  site: {
    name: 'John Doe | Full Stack Product Engineer & Technical Lead',
    description: 'Full Stack Product Engineer & Technical Lead, focused on enriching the product and developer experience.',
    url: 'https://cv.johndoe.com',
  },
})
