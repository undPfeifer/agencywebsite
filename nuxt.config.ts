export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxt/fonts', '@nuxt/image', '@nuxt/content'],
  content: {
    markdown: {
      components: true
    }
  },
  nitro: {
    prerender: {
      ignore: ['/sitemap.xml'],
      routes: [
        '/', 

      ]
    }
  },
  app: {
    baseURL: process.env.NODE_ENV === 'production' ? '/agencywebsite/' : '/', // 👈 use /a/ only for production

  }
})
