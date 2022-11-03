import { defineNuxtConfig } from 'nuxt/config'
// import { resolve } from 'path'


// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxt/content'],
  content: {
    //   sources: [{
    //     name: 'examples',
    //     // prefix: '/fa', // All contents inside this source will be prefixed with `/fa`
    //     driver: 'fs',
    //     // ...driverOptions
    //     base: resolve('../examples') // Path for source directory
    //   }],
    //   ignores: ["\.*.py", "\.*.ipynb", "\.*.txt"]
  }
})
