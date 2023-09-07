import { existsSync, readdirSync } from 'node:fs'
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

      const [scope, name, i] = id.split('/').slice(-3)

      if (scope === 'components' && i === 'index.md') {
        const { demos } = await generateExtraParts(scope, name)
        code = `${code}\n\n${demos}`
      }

      return code
    },
  }
}

const ROOT = resolve(__dirname, '../')

async function generateExtraParts(scope: string, name: string) {
  return {
    demos: generateDomes(scope, name),
  }
}

function generateDomes(scope: string, name: string) {
  const root = join(ROOT, scope, name)
  const dir = join(root, 'demos')

  if (!existsSync(dir)) {
    return
  }

  const files = readdirSync(dir)
    .filter(file => file.endsWith('.vue'))

  if (files.length === 0) {
    return
  }

  const imports: string[] = []
  const content: string[] = []

  while (files.length) {
    const DemoName = `Demo${files.length}`
    const file = files.shift() as string

    const title = file
      .replace('.vue', '')
      .replace(/^\d+\.(\w)/, (_, $1) => $1.toUpperCase())
      .replace(/-(\w)/, ($1, $2) => ` ${$2.toUpperCase()}`)

    imports.push(`import ${DemoName} from './demos/${file}'`)

    content.push(
      `## ${title}`,
      '',
      '<DemoContainer>',
      `  <${DemoName} />`,
      '</DemoContainer>',
      '',
      '::: details Click me to view the code',
      '::: raw',
      '',
      `<<< @/${scope}/${name}/demos/${file}`,
      '',
      ':::',
      '',
    )
  }

  const section = [
    '<script setup lang="ts">',
    ...imports,
    '</script>',
    '',
    ...content,
  ]

  return section.join('\n')
}
