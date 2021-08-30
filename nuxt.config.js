import theme from '@nuxt/content-theme-docs'

export default theme({
  /*
   ** You can extend the nuxt configuration
   ** Doc: https://content.nuxtjs.org/themes-docs#nuxtconfigjs
   */
  docs: {
    primaryColor: '#0786ff'
  },

  components: {
    dirs: [
      '~/components',
      '~/components/global/app',
      '~/components/global/icons',
      '~/components/global/markdown'
    ]
  },
  // i18n
  // i18n: {
  //   locales: () => [{
  //     code: 'fr',
  //     iso: 'fr-FR',
  //     file: 'fr-FR.js',
  //     name: 'Français'
  //   }, {
  //     code: 'en',
  //     iso: 'en-US',
  //     file: 'en-US.js',
  //     name: 'English'
  //   }],
  //   defaultLocale: 'en'
  // },

  content: {
    // Disable for security reason on CodeSandBox
    liveEdit: true,
    markdown: {
      rehypePlugins: ['~/plugins/rehype-content-image.js']
    }
  },

  modules: ['@nuxtjs/gtm'],

  gtm: {
    id: 'GTM-K4XN9CR' // Used as fallback if no runtime config is provided
  },

  publicRuntimeConfig: {
    gtm: {
      id: process.env.GOOGLE_TAG_MANAGER_ID
    }
  }
})
