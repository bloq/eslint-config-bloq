'use strict'

module.exports = {
  env: {
    es6: true
  },
  extends: [
    'eslint:recommended',
    'plugin:jsdoc/recommended',
    'plugin:promise/recommended',
    'plugin:require-path-exists/recommended',
    'standard',
    'prettier'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: false
    },
    ecmaVersion: 2018,
    sourceType: 'script'
  },
  plugins: ['jsdoc', 'prettier', 'promise', 'require-path-exists'],
  rules: {
    'arrow-body-style': ['warn', 'never'],
    'arrow-parens': ['warn', 'as-needed'],
    'complexity': ['warn', 10],
    'consistent-return': 'error',
    'max-len': ['warn', { code: 80, ignoreComments: false, tabWidth: 2 }],
    'max-params': ['warn', 4],
    'no-console': 'error',
    'no-else-return': 'error',
    'no-multi-assign': 'error',
    'no-param-reassign': 'error',
    'no-return-assign': ['error', 'always'],
    'no-shadow': [
      'error',
      { allow: ['err'], builtinGlobals: true, hoist: 'functions' }
    ],
    'no-unused-vars': [
      'error',
      { args: 'after-used', ignoreRestSiblings: true, vars: 'all' }
    ],
    'no-use-before-define': [
      'error',
      { classes: true, functions: true, variables: true }
    ],
    'no-var': 'error',
    'object-shorthand': ['warn', 'always'],
    'prefer-template': 'warn',
    'prettier/prettier': [
      'warn',
      {
        arrowParens: 'avoid',
        quoteProps: 'consistent',
        singleQuote: true,
        semi: false,
        trailingComma: 'none'
      }
    ],
    'promise/always-return': 'off',
    'promise/catch-or-return': ['error', { allowThen: true }],
    'promise/no-return-wrap': ['error', { allowReject: true }],
    'promise/no-callback-in-promise': 'off',
    'promise/no-nesting': 'off',
    'quotes': [
      'warn',
      'single',
      { allowTemplateLiterals: false, avoidEscape: true }
    ],
    'quote-props': ['warn', 'consistent'],
    'require-jsdoc': 'off',
    'strict': ['error', 'safe']
  }
}
