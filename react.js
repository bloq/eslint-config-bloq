'use strict'

module.exports = {
  env: {
    browser: true,
    es2020: true
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    sourceType: 'module'
  },
  rules: {
    'react/jsx-sort-props': 'warn',
    'react/no-unknown-property': 'error',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-hooks/incompatible-library': 'off',
    'react-hooks/refs': 'off',
    'react-hooks/set-state-in-effect': 'off'
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
