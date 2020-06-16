'use strict'

module.exports = {
  env: {
    browser: false,
    node: true
  },
  extends: ['plugin:node/recommended'],
  plugins: ['node'],
  rules: {
    'no-alert': 'error'
  }
}
