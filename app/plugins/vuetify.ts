import "@mdi/font/css/materialdesignicons.css"

import "vuetify/styles"
import { createVuetify } from "vuetify"
import type { ThemeDefinition } from "vuetify"

const customTheme: ThemeDefinition = {
  dark: false,
}

export default defineNuxtPlugin(app => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: "customTheme",
      themes: { customTheme },
    },
  })
  app.vueApp.use(vuetify)
})
