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
- `bloq/vitest`

## Note on code formatting

The base rules are focused in identifying code patterns that are or could lead to common errors.
Enforcing code styles should be mainly done with tools like [Prettier](https://prettier.io), adding it to the end of any `extends` array to ensure the conflicting rules are deactivated:

```json
{
  "extends": ["bloq", "bloq/node", "prettier"]
}
```

## Release process

After creating the a feature branch and committing the changes, add a commit to update the package version:

```sh
npm version $VERSION # Use major|minor|parch as needed
git push --set-upstream origin $BRANCH
```

Once the commits are pushed, [open a PR](https://github.com/bloq/eslint-config-bloq/pulls).

Then, when the PR is approved, merge the changes locally, apply and push a version tag if needed:

```sh
git checkout master
git merge --ff $BRANCH
TAG=v$(jq --raw-output '.version' <package.json); git tag --list $TAG | grep --quiet "^$TAG$" || git tag --sign --message="" $TAG
git push --follow-tags
```

Finally, [create a release](https://github.com/bloq/eslint-config-bloq/releases) to trigger the publication to NPM.
