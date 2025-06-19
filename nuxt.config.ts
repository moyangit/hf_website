// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/i18n', '@nuxtjs/tailwindcss'],
  tailwindcss: {
    // cssPath: ['~/assets/css/tailwind.css', { injectPosition: 0 }],
    configPath: 'tailwind.config.ts',
    exposeConfig: false,
    config: {},
    viewer: true,
  },
  plugins: ['~/plugins/wow.client.ts', '~/plugins/swiper.client.ts'],
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  i18n: {
    locales: [
      { code: 'zh', language: 'zh-CN', file: 'zh.json', name: '中文' },
      { code: 'de', language: 'de-DE', file: 'de.json', name: 'Deutsch' },
      { code: 'en', language: 'en-US', file: 'en.json', name: 'English' },
      { code: 'fr', language: 'fr-FR', file: 'fr.json', name: 'Français' },
      { code: 'it', language: 'it-IT', file: 'it.json', name: 'Italiano' }
    ],
    defaultLocale: 'zh',
    strategy: 'prefix_and_default',
    langDir: 'locales/',
    vueI18n: './i18n.config.ts',
    customRoutes: 'config',
    pages: {
    },
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root'
    }
  }
  
})
