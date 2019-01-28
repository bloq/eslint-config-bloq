'use strict'

module.exports = {
  env: {
    es6: true
  },
  extends: [
    'eslint:recommended',
    'plugin:jsdoc/recommended',
    'plugin:promise/recommended',
    'standard'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: false
    },
    ecmaVersion: 2018,
    sourceType: 'script'
  },
  plugins: [
    'jsdoc',
    'promise'
  ],
  rules: {
    'arrow-body-style': ['error', 'never'],
    'arrow-parens': ['error', 'as-needed'],
    'complexity': ['error', 10],
    'consistent-return': 'error',
    'max-len': ['warn', { code: 80, ignoreComments: false, tabWidth: 2 }],
    'max-params': ['error', 4],
    'no-alert': 'error',
    'no-buffer-constructor': 'error',
    'no-else-return': 'error',
    'no-multi-assign': 'error',
    'no-negated-condition': 'error',
    'no-param-reassign': 'error',
    'no-shadow': ['error', { allow: ['err'], builtinGlobals: true, hoist: 'functions' }],
    'no-unused-vars': ['error', { args: 'after-used', ignoreRestSiblings: true, vars: 'all' }],
    'no-use-before-define': ['error', { classes: true, functions: true, variables: true }],
    'no-var': 'error',
    'object-shorthand': ['error', 'always'],
    'prefer-const': 'error',
    'prefer-template': 'error',
    'promise/always-return': 'off',
    'promise/no-callback-in-promise': 'off',
    'promise/no-nesting': 'off',
    'quote-props': ['error', 'consistent-as-needed'],
    'quotes': ['error', 'single', { allowTemplateLiterals: false, avoidEscape: true }],
    'strict': ['error', 'safe']
  }
}
