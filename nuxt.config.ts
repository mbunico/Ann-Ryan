// https://nuxt.com/docs/api/configuration/nuxt-config
// import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Anne & Ryan',
      meta: [
        { name: 'description', content: 'Join us for our special day! RSVP for Anne & Ryan\'s wedding celebration.' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;600&display=swap' }
      ]
    }
  },

  components: {
    global: true,
    dirs: ['~/components']
  },

  modules: ['@nuxt/icon']
})