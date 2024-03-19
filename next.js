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
    'import/order': [
      'warn',
      {
        'alphabetize': { caseInsensitive: true, order: 'asc' },
        'groups': [['builtin', 'external'], ['internal', 'parent'], 'sibling'],
        'newlines-between': 'always'
      }
    ],
    'react/jsx-sort-props': 'warn',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'sort-imports': 'off'
  }
}
