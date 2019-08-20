'use strict'

module.exports = {
  extends: [
    'standard',
    './base.js'
  ],
  rules: {
    'arrow-body-style': ['error', 'never'],
    'arrow-parens': ['error', 'as-needed'],
    'max-len': ['warn', { code: 80, ignoreComments: false, tabWidth: 2 }],
    'object-shorthand': ['error', 'always'],
    'prefer-template': 'error',
    'quote-props': ['error', 'consistent-as-needed'],
    'quotes': ['error', 'single', { allowTemplateLiterals: false, avoidEscape: true }]
  }
}
