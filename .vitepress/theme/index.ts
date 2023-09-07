// https://vitepress.dev/guide/custom-theme
import { type Theme } from 'vitepress'
import defaultTheme from 'vitepress/theme'

import './styles/variables.css'
import './styles/overrides.css'

import DemoContainer from './components/DemoContainer.vue'

export default <Theme>{
  extends: defaultTheme,
  enhanceApp({ app }) {
    app.component(DemoContainer.name, DemoContainer)
  },
}
