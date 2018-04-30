/* eslint max-len: ["warn", { "code": 132 }] */

'use strict'

module.exports = {
  rules: {
    'no-magic-numbers': ['warn', { ignore: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 16] }],
    'prefer-arrow/prefer-arrow-functions': ['warn', { disallowPrototype: false, singleReturnOnly: true }]
  }
}
