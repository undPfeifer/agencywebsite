export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxt/fonts', '@nuxt/image', '@nuxt/content'],
  content: {
    markdown: {
      // enable custom components in markdown
      components: true
    }
  }, // <- Added missing comma here
  nitro: {
    prerender: {
      ignore: ['/sitemap.xml']
    }
  },
  app: {
    baseURL: '/agency/', // Replace with your actual repo name
    buildAssetsDir: 'tryagain/'
  }
})