/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import '../styles/default.scss'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/features/theme/#javascript
const customLight = {
  dark: false,
  colors: {
    primary: '#2847F1',
  },
  variables: {
    'theme-on-surface': '#2847F1',
  },
}

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'customLight',
    themes: {
      customLight,
    }
  },
  defaults: {

    VBtn: {
      color: 'primary',
      variant: 'text',
      rounded: false,
      class: "text-lowercase"
    },
  }
})
