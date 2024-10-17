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

Additional rule sets are available:

- `bloq/jsdoc`
- `bloq/markdown`
- `bloq/mocha`
- `bloq/next`
- `bloq/node`

## Note on code formatting

The base rules are focused in identifying code patterns that are or could lead to common errors.
Enforcing code styles should be mainly done with tools like [Prettier](https://prettier.io), adding it to the end of any `extends` array to ensure the conflicting rules are deactivated:

```json
{
  "extends": ["bloq", "bloq/node", "prettier"]
}
```
