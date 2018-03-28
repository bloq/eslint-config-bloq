# eslint-config-bloq

This is Bloq's [ESLint](https://eslint.org) shareable config.

It is based on the ESLint recommended rules, the [JavaScript Standard style](https://standardjs.com/) and an additional set of rules to enforce additional required checks.

## Install

```bash
$ npm i -D eslint-config-bloq eslint eslint-plugin-import eslint-config-standard eslint-plugin-jsdoc eslint-plugin-mocha eslint-plugin-node eslint-plugin-prefer-arrow eslint-plugin-promise eslint-plugin-standard
```

## Configuration

Add this to the ESLint configuration file:

```json
{
  "extends": ["bloq"]
}
```

## License

[MIT License](https://github.com/bloq/eslint-config-bloq/blob/master/LICENSE).
