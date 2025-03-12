import vuetify, { transformAssetUrls } from "vite-plugin-vuetify"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  future: { compatibilityVersion: 4 },
  devtools: { enabled: true },

  typescript: { shim: false },

  build: { transpile: ["vuetify"] },

  modules: [
    "@nuxt/eslint",
    "nuxt-viewport",
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", config => {
        // @ts-ignore
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
  ],

  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },

  viewport: {
    breakpoints: {
      desktop: 640,
      mobile: 0,
    },
    defaultBreakpoints: {
      desktop: "desktop",
      mobile: "mobile",
    },
    fallbackBreakpoint: "desktop",
    feature: "minWidth",
  },
})
