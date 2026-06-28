export const projects = [
  {
    id: 'sextante',
    titleKey: 'projects.sextante.title',
    categoryKey: 'projects.sextante.category',
    periodKey: 'projects.sextante.period',
    descriptionKey: 'projects.sextante.description',
    cover: '/assets/projects/sextante/sextante_logo.webp',
    // La portada es una captura del hero (a sangre); sin el marco cremita de las portadas-logo.
    framedCover: false,
    tags: ['Next.js', 'NestJS', 'TypeScript', 'PostgreSQL', 'Drizzle', 'Docker', 'MCP', 'OAuth 2.1'],
    path: '/projects/sextante',
  },
  {
    id: 'phd',
    titleKey: 'projects.phd.title',
    categoryKey: 'projects.phd.category',
    periodKey: 'projects.phd.period',
    descriptionKey: 'projects.phd.description',
    cover: '/assets/projects/phd/movisound_logo.webp',
    // Portada-logo sobre marco cremita (object-fit: contain con fondo y padding).
    framedCover: true,
    tags: ['Python', 'FastAPI', 'Docker', 'Celery', 'Whisper', 'BERT', 'SHAP', 'FAISS'],
    path: '/projects/phd',
  },
]
