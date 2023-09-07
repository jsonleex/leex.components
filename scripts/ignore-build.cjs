/* eslint-disable n/prefer-global/process */
const message = process.env.VERCEL_GIT_COMMIT_MESSAGE
console.log('🤖 - Commit with ', message)

if (message.startsWith('chore: release')) {
  console.log('✅ - Build can proceed')
  process.exit(1)
}
else {
  console.log('🛑 - Build cancelled')
  process.exit(0)
}
