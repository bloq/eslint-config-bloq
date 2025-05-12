'use strict'

module.exports = {
  extends: ['plugin:package-json/legacy-recommended'],
  parser: 'jsonc-eslint-parser',
  rules: {
    'package-json/order-properties': 'off',
    'package-json/repository-shorthand': 'warn',
    'package-json/sort-collections': 'off'
  }
}
