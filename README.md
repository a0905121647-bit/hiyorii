# 日和・五行

Japanese-language brand website for Hiyori pet supplements and treats.

## Features
- Responsive editorial homepage and five-element interactive collection
- Eight product detail pages, searchable/filterable catalogue
- Browser-local favorites and three-product comparison
- Brand story, three editorial articles, store design concept
- Japanese FAQ, shopping guide, news and release-status information
- Keyboard-accessible Radix controls, reduced-motion support, Japanese metadata

## Operational scope
Products and store images are concepts; prices, formulations, doses and opening details are not yet provided. The site transparently marks products as preparing for release. No checkout, payment, order or appointment collection is enabled. Favorites and comparison remain local to the browser. The five element names do not imply clinical indications.

## Development
Use the existing pnpm lockfile and Sites build workflow. No secrets belong in source.

## Validation
TypeScript and production build pass. Required raster assets are served locally. Browser QA and supported WebMCP runtime validation have not been performed in this environment.

## Railway deployment

Railway uses the root Dockerfile and railway.json. The image builds with
`pnpm run build:railway` and runs the Next.js standalone Node server as the
non-root node user. It binds to 0.0.0.0 and accepts Railway's PORT variable.
No database, payment credentials, or login provider is required.

Validation: production Next.js build and TypeScript check passed. The standalone
server returned HTTP 200 for the home page, collection, product detail, journal
article, space, FAQ, hero image, and bundled CSS/JS assets. Docker image execution
and Railway deployment remain unverified until a GitHub source repo is connected.

The current catalogue is a prelaunch brand website; checkout is not enabled.
