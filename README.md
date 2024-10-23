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
- `bloq/typescript`

## Note on code formatting

The base rules are focused in identifying code patterns that are or could lead to common errors.
Enforcing code styles should be mainly done with tools like [Prettier](https://prettier.io), adding it to the end of any `extends` array to ensure the conflicting rules are deactivated:

```json
{
  "extends": ["bloq", "bloq/node", "prettier"]
}
```

## Release process

Create a feature branch, commit and push the changes, and open a PR:

```sh
git checkout -b $BRANCH
# Commit the changes
npm version $VERSION # Use major|minor|parch
git push -u origin $BRANCH
# Open a PR
```

Once the PR is approved, merge the changes locally, apply and push a version tag, and create a release:

```sh
git checkout master
git merge --ff $BRANCH
git tag -s -m "" v$(jq -r '.version' <package.json)
git push --follow-tags
# Create a new release
```
