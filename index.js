'use strict'

module.exports = {
  env: {
    es6: true
  },
  extends: [
    'eslint:recommended',
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 2015,
    sourceType: 'script'
  },
  rules: {
    'arrow-body-style': ['error', 'never'],
    'arrow-parens': ['error', 'as-needed'],
    'complexity': ['error', 5],
    'no-shadow': ['error', { builtinGlobals: true }],
    'no-unused-vars': ['error', { args: 'after-used', ignoreRestSiblings: true, vars: 'all' }],
    'no-use-before-define': ['error', { classes: true, functions: true, variables: true }],
    'no-var': 'error',
    'prefer-const': 'error',
    'prefer-template': 'error',
    'quote-props': ['error', 'consistent-as-needed'],
    'strict': ['error', 'safe']
  }
}
