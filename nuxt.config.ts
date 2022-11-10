// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    "@nuxtjs/color-mode",
    '@nuxtjs/tailwindcss'
  ],
  tailwindcss: {
    // add '~tailwind.config` alias
    exposeConfig: true
  },
  colorMode: {
    classSuffix: ""
  },
  css: [
    '@/assets/css/tailwind.css',
  ],
})
