import { type BuildEntry, defineBuildConfig } from 'unbuild'

const entry: BuildEntry = {
  builder: 'mkdist',
  input: './components',
  pattern: ['!_template', '!**/demos'], // ignores
}

export default defineBuildConfig({
  entries: [
    // *.css
    { ...entry, pattern: ['**/*.css', ...entry.pattern], loaders: ['sass'] },

    // *.vue -> *.vue
    // to avoid `<script lang='ts'>` -> `<script>`, only use `vue` loader for *.vue
    { ...entry, pattern: ['**/*.vue', ...entry.pattern], loaders: ['vue'] },

    // *.ts -> *.js & *.mjs
    { ...entry, format: 'cjs', pattern: ['**/*.ts', ...entry.pattern], loaders: ['js'] },
    { ...entry, format: 'esm', pattern: ['**/*.ts', ...entry.pattern], loaders: ['js'] },
  ],
  clean: true,
  declaration: true,
  externals: ['vue', '@iconify/vue'],
})
