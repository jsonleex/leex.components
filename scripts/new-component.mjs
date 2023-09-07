/* eslint-disable n/prefer-global/process */
import { resolve } from 'node:path'
import { existsSync, mkdirSync, readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs'
import logger from 'consola'
import { camelize, capitalize } from '@vue/shared'

const componentName = process.argv[2] ?? (await logger.prompt('What is the name of the component?'))

if (!componentName) {
  logger.error('You must provide a name for the component')
  process.exit(1)
}

if (!/^[a-z][a-z0-9-]*$/.test(componentName)) {
  logger.error('The component name must be kebab-case')
  process.exit(1)
}

const output = resolve(process.cwd(), 'components', componentName)
const template = resolve(process.cwd(), 'components', '_template')

if (existsSync(output)) {
  logger.error(`The component "${componentName}" already exists`)
  process.exit(1)
}

logger.start(`Creating component "${componentName}"`)

mkdirSync(output)

function getAllFiles(path, files = []) {
  for (const file of readdirSync(path)) {
    const filepath = resolve(path, file)
    files.push(filepath)

    if (statSync(filepath).isDirectory()) {
      getAllFiles(filepath, files)
    }
  }
  return files
}

const files = getAllFiles(template)

for (const file of files) {
  const path = resolve(template, file)

  const filename = file
    .replace('button', componentName)
    .replace('_template', componentName)

  const target = resolve(output, filename)

  logger.info(`+ ${target}`)

  if (statSync(path).isDirectory()) {
    mkdirSync(target)
  }
  else {
    const content = readFileSync(path, { encoding: 'utf-8' })
    const result = content
      .replace(/button/g, componentName)
      .replace(/Button/g, capitalize(camelize(componentName)))

    writeFileSync(target, result)
  }
}

logger.success(`Component "${componentName}" created`)
