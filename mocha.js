'use strict'

module.exports = {
  env: {
    mocha: true
  },
  extends: [
    'plugin:mocha/recommended'
  ],
  plugins: [
    'mocha'
  ],
  rules: {
    'mocha/no-skipped-tests': 'warn',
    'no-console': 'warn',
    'no-unused-expressions': 'off',
    'prefer-arrow/prefer-arrow-functions': 'off'
  }
}
