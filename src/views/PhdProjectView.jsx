'use client'

import Link from 'next/link'
import { useTranslation } from 'react-i18next'

export default function PhdProjectView() {
  const { t } = useTranslation()

  return (
    <div className="page">
      <article className="article">

        <div className="article-header-img">
          <img src="/assets/projects/phd/movisound_logo.webp" alt="MoviSound" />
        </div>

        <header className="article-header">
          <p className="article-eyebrow">{t('phd.eyebrow')}</p>
          <h1 className="article-title">{t('phd.title')}</h1>
          <p className="article-subtitle">{t('phd.subtitle')}</p>
        </header>

        <div className="article-body">

          <section className="article-section">
            <h2>{t('phd.about.heading')}</h2>
            <p>{t('phd.about.p1')}</p>
            <p>{t('phd.about.p2')}</p>
            <p>{t('phd.about.p3')}</p>
            <div className="article-cta-group">
              <a
                href="/assets/projects/phd/phd_federico_pardo.pdf"
                className="btn btn-secondary"
                target="_blank"
                rel="noopener"
              >
                {t('phd.about.cta_thesis')}
              </a>
              <a
                href="https://github.com/Fedeparg/movisound"
                className="btn btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('phd.about.cta_github')}
              </a>
            </div>
          </section>

          <section className="article-section">
            <h2>{t('phd.architecture.heading')}</h2>
            <p>{t('phd.architecture.p1')}</p>
            <div className="article-img-block">
              <img
                src="/assets/projects/phd/movisound_arch_hd.webp"
                alt={t('phd.architecture.caption')}
              />
              <p className="article-img-caption">{t('phd.architecture.caption')}</p>
            </div>
          </section>

          <section className="article-section">
            <h2>{t('phd.demo.heading')}</h2>
            <p>{t('phd.demo.p1')}</p>
            <div className="video-wrapper">
              <iframe
                src="https://www.youtube.com/embed/emgGZ3vdSgg"
                title={t('phd.demo.heading')}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </section>

          <section className="article-section">
            <h2>{t('phd.pubs.heading')}</h2>
            <p>{t('phd.pubs.p1')}</p>
            <div className="article-pub-list">

              <div className="article-pub">
                <span className="article-pub-venue">{t('phd.pubs.paper1_venue')}</span>
                <h3>{t('phd.pubs.paper1_title')}</h3>
                <a href="https://www.mdpi.com/2076-3417/15/12/6911" target="_blank" rel="noopener" className="pub-link">
                  {t('phd.pubs.view_pub')}
                </a>
              </div>

              <div className="article-pub">
                <span className="article-pub-venue">{t('phd.pubs.paper2_venue')}</span>
                <h3>{t('phd.pubs.paper2_title')}</h3>
                <a href="https://ieeexplore.ieee.org/document/10670386" target="_blank" rel="noopener" className="pub-link">
                  {t('phd.pubs.view_pub')}
                </a>
              </div>

              <div className="article-pub">
                <span className="article-pub-venue">{t('phd.pubs.paper3_venue')}</span>
                <h3>{t('phd.pubs.paper3_title')}</h3>
                <a href="https://ieeexplore.ieee.org/document/11282905" target="_blank" rel="noopener" className="pub-link">
                  {t('phd.pubs.view_pub')}
                </a>
              </div>

            </div>
          </section>

        </div>

        <div className="article-footer">
          <Link href="/projects" className="article-back">{t('phd.back')}</Link>
        </div>

      </article>
    </div>
  )
}
