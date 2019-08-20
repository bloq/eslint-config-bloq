'use strict'

module.exports = {
  env: {
    es6: true
  },
  extends: [
    'eslint:recommended',
    'plugin:jsdoc/recommended',
    'plugin:promise/recommended',
    'plugin:require-path-exists/recommended'
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
    'promise',
    'require-path-exists'
  ],
  rules: {
    'complexity': ['error', 10],
    'consistent-return': 'error',
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
    'prefer-const': 'error',
    'promise/always-return': 'off',
    'promise/catch-or-return': ['error', { allowThen: true }],
    'promise/no-return-wrap': ['error', { allowReject: true }],
    'promise/no-callback-in-promise': 'off',
    'promise/no-nesting': 'off',
    'require-jsdoc': 'off',
    'strict': ['error', 'safe']
  }
}
