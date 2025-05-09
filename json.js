'use strict'

module.exports = {
  extends: ['plugin:jsonc/base'],
  ignorePatterns: ['package.json', 'package-lock.json'],
  rules: {
    'jsonc/sort-keys': [
      'warn',
      {
        order: {
          natural: true,
          type: 'asc'
        },
        pathPattern: '.*'
      }
    ]
  }
}
