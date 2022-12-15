'use strict'

module.exports = {
  env: {
    mocha: true
  },
  extends: ['plugin:mocha/recommended'],
  plugins: ['mocha', 'prefer-arrow'],
  rules: {
    'mocha/no-exclusive-tests': 'error',
    'mocha/no-setup-in-describe': 'warn',
    'mocha/no-skipped-tests': 'warn',
    'no-unused-expressions': 'off',
    'node/no-unpublished-require': 'warn',
    'prefer-arrow/prefer-arrow-functions': 'off'
  },
  settings: {
    node: {
      allowModules: ['chai']
    }
  }
}
