import { defineConfig } from 'vite'
import { DocumentationHelper } from './plugins/documentation'

export default defineConfig({
  resolve: {
    alias: { '@leex/components': './components/index.ts' },
  },
  plugins: [
    DocumentationHelper(),
  ],
})
