'use strict'

module.exports = {
  env: {
    mocha: true
  },
  extends: ['plugin:mocha/recommended'],
  plugins: ['mocha'],
  rules: {
    'mocha/no-setup-in-describe': 'warn',
    'mocha/no-skipped-tests': 'warn',
    'no-unused-expressions': 'off',
    'node/no-unpublished-require': 'warn'
  },
  settings: {
    node: {
      allowModules: ['chai']
    }
  }
}
