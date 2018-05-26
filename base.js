/* eslint max-len: ["warn", { "code": 132 }] */

'use strict'

module.exports = {
  env: {
    es6: true
  },
  extends: [
    'eslint:recommended',
    'plugin:jsdoc/recommended',
    'standard'
  ],
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: false,
      jsx: false
    },
    ecmaVersion: 2015,
    sourceType: 'script'
  },
  plugins: [
    'jsdoc'
  ],
  rules: {
    'arrow-body-style': ['error', 'never'],
    'arrow-parens': ['error', 'as-needed'],
    'complexity': ['error', 5],
    'max-params': ['error', 3],
    'no-alert': 'error',
    'no-buffer-constructor': 'error',
    'no-shadow': ['error', { builtinGlobals: true, hoist: 'functions' }],
    'no-unused-vars': ['error', { args: 'after-used', ignoreRestSiblings: true, vars: 'all' }],
    'no-use-before-define': ['error', { classes: true, functions: true, variables: true }],
    'no-var': 'error',
    'object-curly-spacing': ['warn', 'always'],
    'object-shorthand': ['error', 'always'],
    'prefer-const': 'error',
    'prefer-template': 'error',
    'quote-props': ['error', 'consistent-as-needed'],
    'quotes': ['error', 'single', { avoidEscape: true, allowTemplateLiterals: false }],
    'strict': ['error', 'safe']
  }
}
