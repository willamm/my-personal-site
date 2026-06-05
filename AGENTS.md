# AGENTS.md — my-personal-site

## Stack & Runtime
- Gatsby v5, React 18, Node 18, npm
- styled-components (Babel plugin enabled in `gatsby-config.js`)
- MDX for blog posts

## Commands
- `npm run develop` — local dev server (http://localhost:8000)
- `npm run build` — production build
- `npm run serve` — serve the `public/` dir after build
- `npm run clean` — wipe `.cache/` and `public/`
- `npm run deploy` — deploy via `gatsby-plugin-s3` to S3 bucket `williamm.me`

## Content & Architecture
- **Pages**: `src/pages/` (standard Gatsby file-system routing)
- **Blog posts**: `src/content/posts/*.mdx` with YAML frontmatter (`title`, `slug`)
- **Post template**: `src/templates/post.jsx` renders MDX posts via `gatsby-plugin-mdx`
- **Layout**: `src/components/layout.js` wraps all pages
- **Site metadata**: `src/hooks/useSiteMetadata.js` reads `gatsby-config.js` `siteMetadata`

## Build & Deploy
- CI (`.github/workflows/gatsby.yml`) builds on push to `main` and PR open/reopen
- CI sets `PREFIX_PATHS=true` during build
- CI deploys to AWS S3 bucket `williamm.me` with `aws s3 sync`
- No tests, lint, or typecheck in the repo — do not assume they exist

## Gotchas
- `HitCounter` only fetches from `api.williamm.me` in production (`NODE_ENV === 'production'`). In dev it returns `null` silently.
- `gatsby clean` is sometimes needed after config or plugin changes.
- No `yarn.lock`; use npm exclusively.
