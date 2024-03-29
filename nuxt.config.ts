import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  srcDir: 'src/',
  components: ['~/src/components'],
  alias: {
    "~": ".src/",
  },
  buildModules: ['@pinia/nuxt'],
})
