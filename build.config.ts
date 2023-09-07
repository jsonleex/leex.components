import { type BuildEntry, defineBuildConfig } from 'unbuild'

const entry: BuildEntry = {
  builder: 'mkdist',
  input: './components',
  pattern: ['**/*.{ts,vue,css}', '!_template', '!**/demos'],
}

export default defineBuildConfig({
  entries: [
    { ...entry, format: 'esm' },
    { ...entry, format: 'cjs' },
  ],
  clean: true,
  declaration: true,
  externals: ['vue', '@iconify/vue'],
})
