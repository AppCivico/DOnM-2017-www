# DOnM-2017-www

Sistema de acompanhamento da administração municipal de São Paulo na gestão 2017.

## Install dependencies

`npm install` or `yarn`

## Build

### For development

Prepare files: `npm run build:dev` or `yarn run build:dev`.

To turn grid on, before to serve the website, set `NODE_ENV=development`

Serve with live reload at `localhost:1313`: `hugo server --noHTTPCache=true --ignoreCache --templateMetricsHints`

To watch changes on assets, use `npm run watch`.

## For production

Don't forget to set environment as `production`.

```
export NODE_ENV=production && npm install && npm test && npm run build:prod && hugo --cleanDestinationDir --ignoreCache
```

Or:

```
export NODE_ENV=production && yarn && yarn test && yarn run build:prod && hugo --cleanDestinationDir --ignoreCache
```

Move the content of `/public` to site root.

## lint

`npm run lint`

## run tests

`npm test`

## Images sizes

Used images sizes.

### Footer

- smallest size: 320px × 876px
- for viewport `>=480px`: 480px × 824px
- for viewport `>=640px`: 640px × 680px
- for viewport `>=768px`: 768px × 680px
- for viewport `>=1024px`: 1024px × 566px
- for viewport `>=1280px`: 1280px × 542px
- for viewport `>=1600px`: 1600px × 542px

### Topics

- smallest size: 320px × 480px, with space for text at top
- for viewport `>=480px`: 432px × 408px, with space for text at top right
- for viewport `>=640px`: 592px × 408px, with space for text at top right
- for viewport `>=768px`: 720px × 264px, with space for text at right
- for viewport `>=1024px`: 176px × 672px, with space for text at middle
- for viewport `>=1280px`: 207px × 634px, with space for text at middle

### 404

- smallest size: 320px × 213px
- for viewport `>=480px`: 480px × 277px
- for viewport `>=640px`: 640px × 352px
- for viewport `>=768px`: 768px × 421px
- for viewport `>=1024px`: 1024px × 576px
- for viewport `>=1280px`: 1280px × 771px
- for viewport `>=1600px`: 1600px × 908px
