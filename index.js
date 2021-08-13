'use strict'

module.exports = {
  env: {
    es2020: true
  },
  extends: ['eslint:recommended', 'plugin:promise/recommended'],
  plugins: ['prefer-arrow', 'promise'],
  rules: {
    'camelcase': 'warn',
    'complexity': ['warn', 10], // https://github.com/eslint/eslint/issues/4808
    'consistent-return': 'warn',
    'max-params': ['warn', 4],
    'new-cap': 'warn',
    'no-alert': 'warn',
    'no-console': 'warn',
    'no-else-return': 'warn',
    'no-multi-assign': 'error',
    'no-param-reassign': 'warn',
    'no-return-assign': 'warn',
    'no-shadow': 'warn',
    'no-unused-vars': 'error',
    'no-use-before-define': 'error',
    'no-var': 'error',
    'object-shorthand': 'warn',
    'prefer-arrow/prefer-arrow-functions': [
      'warn',
      { disallowPrototype: false, singleReturnOnly: true }
    ],
    'prefer-template': 'warn',
    'promise/always-return': 'off',
    'promise/catch-or-return': ['error', { allowFinally: true }],
    'quotes': [
      'warn',
      'single',
      { allowTemplateLiterals: false, avoidEscape: true }
    ],
    'require-jsdoc': 'off',
    'strict': ['error', 'safe']
  }
}
