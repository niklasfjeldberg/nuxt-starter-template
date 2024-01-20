export default defineNuxtConfig({
  devtools: { enabled: process.env.NODE_ENV === 'development' },
  ssr: true,
  modules: [
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxtjs/google-fonts',
    '@nuxtjs/eslint-module',
    '@nuxt/test-utils/module',
  ],
  image: {},
  ui: {},
  tailwindcss: {
    viewer: false,
  },
  typescript: {
    strict: true,
    typeCheck: false,
  },
  eslint: {
    lintOnStart: false,
  },
  googleFonts: {
    families: {
      Inter: true,
    },
  },
  colorMode: {
    preference: 'light',
  },
  runtimeConfig: {
    public: {
      indexSite: process.env.INDEX_SITE === 'true' || false,
      host: process.env.PUBLIC_HOST,
      protocol: process.env.PROTOCOL || 'https://',
    },
  },
});
