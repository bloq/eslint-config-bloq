'use strict'

module.exports = {
  plugins: [
    'prefer-arrow'
  ],
  rules: {
    'no-magic-numbers': ['warn', { ignore: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 16, 1000] }],
    'prefer-arrow/prefer-arrow-functions': ['warn', { disallowPrototype: false, singleReturnOnly: true }]
  }
}
