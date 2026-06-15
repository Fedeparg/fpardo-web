import { useTranslation } from 'react-i18next'

const externalIcon = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '4px' }}>
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
)

const pubItems = [
  {
    key: 'thesis',
    href: '/assets/projects/phd/phd_federico_pardo.pdf',
    viewKey: 'publications.view_thesis',
    external: false,
  },
  {
    key: 'interventions',
    href: 'https://ieeexplore.ieee.org/document/11282905',
    viewKey: 'publications.view_pub',
    external: true,
  },
  {
    key: 'audio_review',
    href: 'https://www.mdpi.com/2076-3417/15/12/6911',
    viewKey: 'publications.view_pub',
    external: true,
  },
  {
    key: 'generalizable',
    href: 'https://ieeexplore.ieee.org/document/10670386',
    viewKey: 'publications.view_pub',
    external: true,
  },
  {
    key: 'analytics',
    href: 'https://ieeexplore.ieee.org/document/10398309',
    viewKey: 'publications.view_pub',
    external: true,
  },
  {
    key: 'wooclap',
    href: 'https://ieeexplore.ieee.org/document/10677522',
    viewKey: 'publications.view_pub',
    external: true,
  },
]

function Publications() {
  const { t } = useTranslation()

  return (
    <section id="publications" className="section">
      <div className="container">
        <h2 className="section-title">{t('publications.title')}</h2>

        <div className="publications-header">
          <p className="publications-intro">
            {t('publications.intro')}{' '}
            <a href="https://scholar.google.es/citations?user=Jj6W9GMAAAAJ&hl=es&oi=ao" target="_blank" rel="noopener" className="scholar-link">
              {t('publications.scholar')}
              {externalIcon}
            </a>
          </p>
        </div>

        <div className="publications-list">
          {pubItems.map(({ key, href, viewKey, external }) => (
            <div key={key} className="publication-card">
              <h3>{t(`publications.${key}.title`)}</h3>
              <p className="pub-meta">{t(`publications.${key}.meta`)}</p>
              <p className="pub-description">{t(`publications.${key}.description`)}</p>
              <a
                href={href}
                target="_blank"
                rel="noopener"
                className="pub-link"
                {...(external && { rel: 'noopener noreferrer' })}
              >
                {t(viewKey)}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Publications
