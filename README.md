# eslint-config-bloq

This is Bloq's [ESLint](https://eslint.org) shareable config.

It is based on the ESLint recommended rules, the [JavaScript Standard style](https://standardjs.com/) and an additional set of rules to enforce additional required checks.

## Install

```bash
$ npm install --save-dev eslint eslint-config-bloq eslint-config-standard eslint-plugin-import eslint-plugin-jsdoc eslint-plugin-mocha eslint-plugin-node eslint-plugin-prefer-arrow eslint-plugin-promise eslint-plugin-standard
```

## Configuration

Add this to the ESLint configuration file:

```json
{
  "extends": ["bloq"]
}
```

## License

MIT License
