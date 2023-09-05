import { type Plugin } from 'vue'
import * as components from './components'

export * from './button'

const xComponents: Plugin = {
  install(app) {
    Object.entries(components).forEach(([name, component]) => {
      app.component(name, component)
    })
  },
}

export default xComponents
