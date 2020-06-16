'use strict'

module.exports = {
  env: {
    browser: true
  },
  extends: ['plugin:import/recommended', 'plugin:react/recommended'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true
    },
    sourceType: 'module'
  },
  plugins: ['import', 'react-hooks'],
  rules: {
    'arrow-body-style': ['warn', 'as-needed'],
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react/boolean-prop-naming': ['warn'],
    'react/button-has-type': ['warn'],
    'react/jsx-no-duplicate-props': ['error'],
    'react/no-typos': ['error'],
    'react/no-unused-prop-types': ['warn'],
    'react/react-in-jsx-scope': 'off'
  },
  settings: {
    react: {
      pragma: 'React',
      version: '16.12.0'
    }
  }
}
