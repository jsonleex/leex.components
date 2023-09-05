import { existsSync } from 'node:fs'
import { join, resolve } from 'node:path'
import { type Plugin } from 'vite'

export function DocumentationHelper(): Plugin {
  return {
    name: 'markdown-transform',
    enforce: 'pre',
    async transform(code, id) {
      if (!id.match(/\.md\b/)) {
        return null
      }

      const [scope, name] = id.split('/').slice(-3)
      const { demo } = await generateExtraParts(scope, name)

      // TODO: auto insert demo
      code = code.replace('<!-- @demo -->', demo ?? '')

      return code
    },
  }
}

const ROOT = resolve(__dirname, '../')
const GITHUB_PREFIX = 'https://github.com/jsonleex/leex.components/blob/main/'

async function generateExtraParts(scope: string, name: string) {
  const GITHUB_URI = `${GITHUB_PREFIX}${scope}/${name}`
  const dirname = join(ROOT, scope, name)

  const demo = generateDomeSection(dirname, GITHUB_URI)

  return {
    demo,
  }
}

function generateDomeSection(dir: string, baseURI: string) {
  const path = ['demo.vue', 'demo.client.vue'].find(file => existsSync(join(dir, file)))

  if (!path) return

  return [
    '## Demo',
    '',
    '<script setup>',
    '  import { defineAsyncComponent } from \'vue\'',
    `  const Demo = defineAsyncComponent(() => import('./${path}'))`,
    '</script>',
    '',
    '<DemoContainer>',
    `  <p class="demo-source-link"><a href="${baseURI}/${path}" target="_blank">source</a></p>`,
    '  <Demo />',
    '</DemoContainer>',
  ].join('\n')
}
