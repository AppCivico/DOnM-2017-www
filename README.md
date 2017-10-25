# DOnM-2017-www

Sistema de acompanhamento da administração municipal de São Paulo na gestão 2017.

## Install dependencies

`npm install` or `yarn`

## Build

### For development

Prepare files: `npm run build:dev` or `yarn run build:dev`.

To turn grid on, before to serve the website, set `NODE_ENV=dev`

Serve with live reload at `localhost:1313`: `hugo server --noHTTPCache=true --ignoreCache --templateMetrics`

To watch changes on assets, use `npm run watch`.

## For production

Don't forget to set environment as `production`.

```
export NODE_ENV=production && npm install && npm test && npm run build:prod && hugo --ignoreCache
```

Or:

```
export NODE_ENV=production && yarn && yarn test && yarn run build:prod && hugo --ignoreCache
```

Move the content of `/public` to site root.

## lint

`npm run lint`

## run tests

`npm test`
