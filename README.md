# Federico Pardo - Personal Website

Minimalist personal website showcasing AI research and engineering work.

## Tech Stack

- Next.js (App Router) + React
- Blog written in MDX, stored in the repo and prerendered at build time
- Self-hosted infrastructure (Docker, Nginx Proxy Manager reverse proxy)
- Formspree for contact form

## Local Development

```bash
# Clone repository
git clone https://github.com/fedeparg/fpardo-web.git
cd fpardo-web

# Install dependencies
npm install

# Start dev server
npm run dev
# Open http://localhost:3000
```

## Build

```bash
npm run build   # runs eslint + vitest, then next build
npm start       # serves the production build on http://localhost:3000
```

## Writing a post

Posts are MDX files in `src/content/blog/en/`. The filename is the URL, so
`my-post.mdx` is served at `/blog/my-post`.

```mdx
---
title: 'My post'
date: '2026-09-03'
excerpt: 'One or two lines, used for the listing and the social preview.'
tags:
  - engineering
cover: /assets/blog/my-post/cover.webp
draft: false
---

Body in Markdown, plus the components below.
```

`title`, `date` and `excerpt` are required. `tags`, `cover` and `draft` are optional.
Set `draft: true` while writing: drafts show up in `npm run dev` but are excluded from
the production build. Images go in `public/assets/blog/<slug>/`.

Available components inside a post:

| Component | Usage |
| --- | --- |
| `<Figure>` | `<Figure src="/assets/blog/x/y.webp" alt="..." caption="..." />` |
| `<YouTube>` | `<YouTube id="videoId" title="..." />` |

Tables, task lists and strikethrough work via remark-gfm. `src/content/blog/en/mdx-kitchen-sink.mdx`
is a permanent draft that exercises every supported element.

Two MDX gotchas: a bare `<` opens JSX and a bare `{` opens an expression, so escape them
as `\<` and `\{` in prose. The build fails with the exact line if you forget.

`npm test` validates the frontmatter of every post, drafts included, so a broken date,
an unknown key or a cover pointing at a missing file breaks the build rather than the site.

## Project Structure

```
fpardo-web/
├── next.config.js          # Next.js config (standalone output)
├── package.json
├── src/
│   ├── i18n.js             # react-i18next setup (EN/ES)
│   ├── index.css           # Global styles
│   ├── app/                # App Router: layout, providers and routes
│   │   ├── layout.jsx
│   │   ├── page.jsx        # Home
│   │   ├── about/
│   │   ├── projects/
│   │   ├── publications/
│   │   └── blog/           # Blog routes, prerendered with Open Graph metadata
│   ├── content/blog/en/    # Blog posts as MDX files
│   ├── views/              # Page-level client compositions
│   ├── components/         # Nav, Hero, Footer, PostBody, mdx/, ...
│   ├── data/               # Static data (projects, experience, skills, ...)
│   ├── lib/posts.js        # Reads and validates the MDX posts
│   ├── lib/seo.js          # Shared metadata helper
│   ├── __tests__/          # Vitest suites (i18n parity, post frontmatter)
│   └── locales/            # en.json / es.json
└── public/assets/          # Images and project files
```

## License

Personal project.

---

**Live Site:** https://fpardo.net
**Contact:** federico.pardog@gmail.com
