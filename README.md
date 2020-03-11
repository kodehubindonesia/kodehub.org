## Tools

- yarn: NPM client.
- Lerna: Multiple packages management tool.
- TypeScript(frontend): `^3.8.2`.

## Workspaces

Using [yarn workspace feature](https://yarnpkg.com/en/docs/workspaces), configure the following files:

- /package.json

Append the `workspaces` key.

```json
{
  "private": true,
  "workspaces": ["packages/*"]
}
```

- lerna.json

Set `npmClient` `"yarn"` and turn `useWorkspaces` on.

```json
{
  ...
  "packages": ["packages/*"],
  "npmClient": "yarn",
  "useWorkspaces": true,
}
```

## Usage

- To install all dependencies on the packages use `yarn install` or `npx lerna bootstrap`
- Start development use `yarn dev`
- Start development with logging use `yarn kodehub`
- Start local production use `yarn start`
- Testing use `yarn test`

## Dependencies Between Packages

### [kodehub-backend]

**Configs**

File configs is located on `packages/kodehub-backend/src/app/configs.js`

- App port default: 8080
- Grphql server path default: /graphql

### [kodehub-frontend]

- App port default: 3000

## TODO
**Backend**
- [ ] CI (wip)
- [ ] Bookmark & testing
- [ ] Post & testing
- [ ] Post Comment & testing
- [ ] Post Reactions & testing (Like, Bookmark)
- [ ] Post Tags
- [ ] User Connections (User follower & following)
- [ ] User Following tag
- [ ] User Projects
- [ ] User Points
- [ ] User Badges
**Frontend**
- [ ] Add server express / polka
- [ ] CI
