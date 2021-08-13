'use strict'

module.exports = {
  extends: ['next'],
  ignorePatterns: ['out'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true
    },
    sourceType: 'module'
  },
  rules: {
    'react/jsx-sort-props': 'warn',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'sort-imports': [
      'warn',
      {
        allowSeparatedGroups: true
      }
    ]
  }
}
