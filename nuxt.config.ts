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
      // ensure all dynamic routes with content are prerendered
      routes: [
        '/', 
        // add other paths if needed, or
        // consider using `crawl: true` if you want Nitro to auto-detect routes
      ]
    }
  },
  app: {
    baseURL: process.env.NODE_ENV === 'production' ? '/agencywebsite/' : '/', // 👈 use /a/ only for production
    // I suggest removing buildAssetsDir unless you have a specific reason
    // buildAssetsDir: 'tryagain/'
  }
})
