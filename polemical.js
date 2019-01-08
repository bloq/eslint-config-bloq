/* eslint max-len: ["warn", { "code": 132 }] */

'use strict'

module.exports = {
  plugins: [
    'prefer-arrow'
  ],
  rules: {
    'max-len': ['warn', { code: 80, tabWidth: 2, ignoreComments: false }],
    'no-magic-numbers': ['warn', { ignore: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 16] }],
    'prefer-arrow/prefer-arrow-functions': ['warn', { disallowPrototype: false, singleReturnOnly: true }]
  }
}
