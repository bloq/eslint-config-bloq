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
    'no-unused-expressions': 'off',
    'prefer-arrow/prefer-arrow-functions': 'off'
  }
}
