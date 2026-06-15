# Federico Pardo - Personal Website

Minimalist personal website showcasing AI research and engineering work.

## Tech Stack

- Vite + React
- Self-hosted infrastructure (Docker + Nginx reverse proxy)
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
# Open http://localhost:5173
```

## Build

```bash
npm run build
# Output in dist/
```

## Project Structure

```
fpardo-web/
├── index.html              # Vite entry point
├── vite.config.js
├── package.json
├── src/
│   ├── main.jsx            # React root
│   ├── index.css           # Global styles
│   ├── App.jsx             # Root component
│   └── components/
│       ├── Nav.jsx
│       ├── Hero.jsx
│       ├── About.jsx
│       ├── Experience.jsx
│       ├── Publications.jsx
│       ├── Contact.jsx
│       └── Footer.jsx
├── assets/
│   ├── perfil.jpg
│   ├── cv_federico_pardo.pdf
│   └── phd_federico_pardo.pdf
└── phd.html                # Static page served at phd.fpardo.net
```

## License

Personal project.

---

**Live Site:** https://fpardo.net
**Contact:** federico.pardog@gmail.com
