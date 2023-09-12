import { addComponentsDir, createResolver, defineNuxtModule } from '@nuxt/kit'

declare module '@nuxt/schema' { }

export default defineNuxtModule({
  meta: {
    name: '@leex/components',
  },
  async setup(_options, _nuxt) {
    const { resolve } = createResolver(import.meta.url)
    const runtimeDir = resolve('.')

    // Components
    addComponentsDir({
      path: runtimeDir,
      watch: false,
      extensions: ['.vue'],
    })
  },
})
