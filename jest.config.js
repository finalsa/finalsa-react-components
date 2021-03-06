// jest.config.js
// Sync object
/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  verbose: true
}
const { defaults } = require('jest-config')

module.exports = config

// Or async function
module.exports = async () => {
  return {
    verbose: true,
    moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx']
  }
}
