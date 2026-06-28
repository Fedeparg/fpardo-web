'use client'

import Link from 'next/link'
import { useTranslation } from 'react-i18next'

export default function SextanteProjectView() {
  const { t } = useTranslation()

  return (
    <div className="page">
      <article className="article">

        <div className="article-header-img article-header-img--bleed">
          <img src="/assets/projects/sextante/sextante_logo.webp" alt="Sextante" />
        </div>

        <header className="article-header">
          <p className="article-eyebrow">{t('sextante.eyebrow')}</p>
          <h1 className="article-title">{t('sextante.title')}</h1>
          <p className="article-subtitle">{t('sextante.subtitle')}</p>
        </header>

        <div className="article-body">

          <section className="article-section">
            <h2>{t('sextante.about.heading')}</h2>
            <p>{t('sextante.about.p1')}</p>
            <p>{t('sextante.about.p2')}</p>
            <p>{t('sextante.about.p3')}</p>
            <div className="article-cta-group">
              <a
                href="https://sextante.fpardo.net"
                className="btn btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('sextante.about.cta_visit')}
              </a>
            </div>
          </section>

          <section className="article-section">
            <h2>{t('sextante.mcp.heading')}</h2>
            <p>{t('sextante.mcp.p1')}</p>
            <p>{t('sextante.mcp.p2')}</p>
          </section>

          <section className="article-section">
            <h2>{t('sextante.features.heading')}</h2>
            <p>{t('sextante.features.p1')}</p>
            <div className="article-pub-list">

              <div className="article-pub">
                <span className="article-pub-venue">{t('sextante.features.f1_label')}</span>
                <h3>{t('sextante.features.f1_title')}</h3>
                <p>{t('sextante.features.f1_desc')}</p>
              </div>

              <div className="article-pub">
                <span className="article-pub-venue">{t('sextante.features.f2_label')}</span>
                <h3>{t('sextante.features.f2_title')}</h3>
                <p>{t('sextante.features.f2_desc')}</p>
              </div>

              <div className="article-pub">
                <span className="article-pub-venue">{t('sextante.features.f3_label')}</span>
                <h3>{t('sextante.features.f3_title')}</h3>
                <p>{t('sextante.features.f3_desc')}</p>
              </div>

              <div className="article-pub">
                <span className="article-pub-venue">{t('sextante.features.f4_label')}</span>
                <h3>{t('sextante.features.f4_title')}</h3>
                <p>{t('sextante.features.f4_desc')}</p>
              </div>

            </div>
          </section>

          <section className="article-section">
            <h2>{t('sextante.stack.heading')}</h2>
            <p>{t('sextante.stack.p1')}</p>
            <p>{t('sextante.stack.p2')}</p>
          </section>

        </div>

        <div className="article-footer">
          <Link href="/projects" className="article-back">{t('sextante.back')}</Link>
        </div>

      </article>
    </div>
  )
}
