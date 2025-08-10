// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/styles/main.css'],

  vite: {
    plugins: [tailwindcss()],
  },
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/fonts',
    '@pinia/nuxt',
    '@nuxt/test-utils/module',
    '@vueuse/nuxt',
  ],
  image: {
    format: ['webp'],
    quality: 80,
  },
  fonts: {
    families: [
      {
        name: 'Inter',
        provider: 'google',
        weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      },
      {
        name: 'Work Sans',
        provider: 'google',
        weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      },
    ],
  },
})