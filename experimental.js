/* eslint max-len: ["warn", { "code": 132 }] */

'use strict'

module.exports = {
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
  }
}
