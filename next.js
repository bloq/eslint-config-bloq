'use strict'

module.exports = {
  extends: ['next'],
  ignorePatterns: ['.next', 'out'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true
    },
    sourceType: 'module'
  },
  rules: {
    // This rule will be removed in the next major version. Use 'bloq/esm' instead.
    'import/order': [
      'warn',
      {
        'alphabetize': { caseInsensitive: true, order: 'asc' },
        'groups': [['builtin', 'external'], ['internal', 'parent'], 'sibling'],
        'newlines-between': 'always'
      }
    ],
    'react/jsx-sort-props': 'warn',
    'react/no-unknown-property': 'error',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    // This rule will be removed in the next major version. Use 'bloq/esm' instead.
    'sort-imports': 'off'
  }
}
