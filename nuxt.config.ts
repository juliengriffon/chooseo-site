
export default defineNuxtConfig({
  ssr: false,
  
  dev: process.env.NODE_ENV !== 'production',

  app: {
  },

  components: true,

  css: [
    '~/assets/css/main.css',
    '~/assets/css/anim.css',
    '~/assets/css/navbar.css'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  publicRuntimeConfig: {
    API_URL: process.env.API_URL,
    API_VERSION: process.env.API_VERSION,
    WEBSITE_SECRET: process.env.WEBSITE_SECRET,
    PROJECT_SECRET: process.env.PROJECT_SECRET
  }
})
