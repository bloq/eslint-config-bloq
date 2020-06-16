'use strict'

module.exports = {
  env: {
    mocha: true
  },
  extends: ['plugin:mocha/recommended'],
  plugins: ['mocha'],
  rules: {
    'jsdoc/require-jsdoc': 'off',
    'mocha/no-setup-in-describe': 'warn',
    'mocha/no-skipped-tests': 'warn',
    'no-console': 'warn',
    'no-unused-expressions': 'off',
    'node/no-unpublished-require': 'off',
    'prefer-arrow/prefer-arrow-functions': 'off'
  }
}
