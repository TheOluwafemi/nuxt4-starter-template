// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/styles/tailwind.css'],

  vite: {
    plugins: [tailwindcss()],
  },
  modules: ['@nuxt/eslint', '@nuxt/image'],
  image: {
    format: ['webp'],
    quality: 80
  },
})
