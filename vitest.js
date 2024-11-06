'use strict'

module.exports = {
  extends: ['plugin:@vitest/legacy-recommended'],
  plugins: ['@vitest'],
  rules: {
    // equivalent to mocha/no-exclusive-tests
    '@vitest/no-focused-tests': 'error',
    // equivalent to mocha/no-setup-in-describe
    '@vitest/require-hook': 'warn',
    // equivalent to mocha/no-skipped-tests
    '@vitest/no-disabled-tests': 'error',
    'no-unused-expressions': 'off',
    'node/no-unpublished-require': 'warn',
    'prefer-arrow/prefer-arrow-functions': 'off'
  }
}
