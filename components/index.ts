import './styles/colors.css'
import './styles/variables.css'

import { type Plugin } from 'vue'
import * as components from './components'

export * from './icon'
export * from './button'
export * from './flex'

const xComponents: Plugin = {
  install(app) {
    Object.entries(components).forEach(([name, component]) => {
      app.component(name, component)
    })
  },
}

export default xComponents
