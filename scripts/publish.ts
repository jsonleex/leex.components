import { execSync } from 'node:child_process'
import { name, version } from '../package.json'

execSync('npm run build')

let command = 'npm publish --access public'

if (version.includes('beta')) {
  command += ' --tag beta'
}

execSync(command, { stdio: 'inherit' })

console.log(`Published ${name}@${version}`)
