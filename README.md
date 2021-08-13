# eslint-config-bloq

This is Bloq's [ESLint](https://eslint.org) shareable config.

It is based on the ESLint recommended rules and other well-known plugins and configs.

## Install

```sh
npm install --save-dev eslint eslint-config-bloq
```

## Configuration

Add this to the ESLint configuration file:

```json
{
  "extends": ["bloq"]
}
```

Additional rule sets are available: `bloq/node`, `bloq/next` and `bloq/mocha`.

## Note on code formatting

This package is focused on identifying code patterns that are or lead to common errors.
It is not intended to deal with code formatting and coding styles (even when a few rules may still be enabled).

## License

MIT
