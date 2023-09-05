// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import './style.css'
import defaultTheme from 'vitepress/theme'
import { type Theme } from 'vitepress'

import DemoContainer from './components/DemoContainer.vue'

export default <Theme>{
  extends: defaultTheme,
  Layout: () => {
    return h(defaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app }) {
    // ...
    app.component(DemoContainer.name, DemoContainer)
  },
}
