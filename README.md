# Federico Pardo - Personal Website

Minimalist personal website showcasing AI research and engineering work.

## Tech Stack

- Next.js (App Router) + React
- Blog powered by Notion as a headless CMS (fetched server-side)
- Self-hosted infrastructure (Docker, Nginx Proxy Manager reverse proxy)
- Formspree for contact form

## Local Development

```bash
# Clone repository
git clone https://github.com/fedeparg/fpardo-web.git
cd fpardo-web

# Install dependencies
npm install

# Provide the Notion integration token used by the blog
cp .env.example .env.local
# then edit .env.local and set NOTION_TOKEN=...

# Start dev server
npm run dev
# Open http://localhost:3000
```

## Build

```bash
npm run build   # runs eslint + vitest, then next build
npm start       # serves the production build on http://localhost:3000
```

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
│   │   └── blog/           # Server-rendered blog with Notion + Open Graph
│   ├── views/              # Page-level client compositions
│   ├── components/         # Nav, Hero, Footer, NotionRenderer, ...
│   ├── data/               # Static data (projects, experience, skills, ...)
│   ├── lib/notion.js       # Server-side Notion data layer
│   └── locales/            # en.json / es.json
├── public/assets/          # Images, CV, project files
└── phd.html                # Static page served at phd.fpardo.net
```

## License

Personal project.

---

**Live Site:** https://fpardo.net
**Contact:** federico.pardog@gmail.com
