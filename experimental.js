/* eslint max-len: ["warn", { "code": 132 }] */

'use strict'

module.exports = {
  rules: {
    'consistent-return': 'warn',
    'max-len': ['warn', { code: 80, tabWidth: 2, ignoreComments: false }],
    'no-else-return': 'warn',
    'no-magic-numbers': ['warn', { ignore: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 16] }],
    'no-multi-assign': 'warn',
    'no-negated-condition': 'warn',
    'no-param-reassign': 'warn'
  }
}
