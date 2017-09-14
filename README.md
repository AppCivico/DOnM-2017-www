# DOnM-2017-www
Sistema de acompanhamento da administração municipal de São Paulo na gestão 2017.

## Install dependencies

`npm install` or `yarn`

## Build

### For development

Prepare files: `npm run build:dev` or `yarn run build:dev`.

Serve with hot reload at `localhost:1313`: `hugo server`

## For production

Don't forget to set environment as `production`.

```
NODE_ENV='production` && npm test && npm run build:prod && hugo
```

Or:

```
NODE_ENV='production` && yarn test && yarn run build:prod && hugo
```

Move the content of `/public` to site root.

## lint

`npm run lint`

## run tests

`npm test`
