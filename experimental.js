/* eslint max-len: ["warn", { "code": 132 }] */

'use strict'

module.exports = {
  extends: [
    'plugin:promise/recommended'
  ],
  plugins: [
    'prefer-arrow'
  ],
  rules: {
    'consistent-return': 'warn',
    'max-len': ['warn', { code: 80, tabWidth: 2, ignoreComments: false }],
    'no-else-return': 'warn',
    'no-multi-assign': 'warn',
    'no-negated-condition': 'warn',
    'no-param-reassign': 'warn',
    'promise/always-return': 'off',
    'promise/no-callback-in-promise': 'off',
    'promise/no-nesting': 'off'
  }
}
