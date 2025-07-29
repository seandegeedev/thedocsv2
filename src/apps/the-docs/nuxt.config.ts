// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-29',
  modules: ['@nuxt/eslint', '@nuxt/fonts', '@nuxt/image'],
  nitro: {
    preset: 'bun',
  },
});
