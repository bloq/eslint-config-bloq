'use strict'

module.exports = {
  extends: ['plugin:markdownlint/recommended'],
  parser: 'eslint-plugin-markdownlint/parser',
  rules: {
    'markdownlint/md013': 'off',
    'markdownlint/md034': 'warn'
  }
}
