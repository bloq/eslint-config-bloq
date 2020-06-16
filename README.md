# eslint-config-bloq

This is Bloq's [ESLint](https://eslint.org) shareable config.

It is based on the ESLint recommended rules, the [JavaScript Standard style](https://standardjs.com/), [Prettier](https://prettier.io) and an additional set of rules to enforce Bloq's style.

## Install

```bash
npm install --save-dev eslint eslint-config-bloq
```

## Configuration

Add this to the ESLint configuration file:

```json
{
  "extends": [
    "bloq"
  ]
}
```

Additional rule sets are available: `node`, `mocha` and `react` (which requires `eslint-plugin-react`).

## License

MIT
