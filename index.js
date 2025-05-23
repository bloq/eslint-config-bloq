'use strict'

module.exports = {
  env: {
    es2020: true
  },
  extends: ['eslint:recommended', 'plugin:promise/recommended'],
  ignorePatterns: ['node_modules', '!.*'], // https://github.com/eslint/eslint/issues/10341#issuecomment-468548031
  plugins: ['prefer-arrow', 'promise', 'sort-destructure-keys'],
  rules: {
    'arrow-body-style': ['warn', 'never'],
    'camelcase': 'warn',
    'complexity': ['warn', 10], // https://github.com/eslint/eslint/issues/4808
    'consistent-return': 'warn',
    'curly': ['warn', 'all'],
    'max-params': ['warn', 4],
    'new-cap': ['warn', { capIsNewExceptionPattern: '^Big$' }],
    'no-alert': 'warn',
    'no-console': 'warn',
    'no-else-return': 'warn',
    'no-multi-assign': 'error',
    'no-param-reassign': 'warn',
    'no-return-assign': 'warn',
    'no-shadow': 'warn',
    'no-unused-vars': ['error', { ignoreRestSiblings: true }],
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
    'promise/no-nesting': 'off',
    'quotes': [
      'warn',
      'single',
      { allowTemplateLiterals: false, avoidEscape: true }
    ],
    'require-jsdoc': 'off',
    'sort-destructure-keys/sort-destructure-keys': [
      'warn',
      { caseSensitive: false }
    ],
    'sort-keys': ['warn', 'asc', { caseSensitive: false, natural: true }],
    'strict': ['error', 'safe']
  }
}
