// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
  ],
  tailwindcss: {
    // add '~tailwind.config` alias
    exposeConfig: true
  },
  build: {
    transpile: ['@headlessui/vue'],
  },
  colorMode: {
    classSuffix: ""
  },
  css: [
    '@/assets/css/tailwind.css',
  ],
})
