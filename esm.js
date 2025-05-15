'use strict'

module.exports = {
  parserOptions: {
    ecmaFeatures: {
      modules: true
    },
    sourceType: 'module'
  },
  plugins: ['import'],
  rules: {
    'import/order': [
      'warn',
      {
        'alphabetize': { caseInsensitive: true, order: 'asc' },
        'groups': [['builtin', 'external'], ['internal', 'parent'], 'sibling'],
        'newlines-between': 'always'
      }
    ],
    'sort-imports': 'off'
  }
}
