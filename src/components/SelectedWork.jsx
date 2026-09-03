'use client'

import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { projects } from '../data/projects.js'
import ToolTag from './ToolTag.jsx'

// The landing shows every project as a card. /projects keeps the long form
// with full descriptions; this is the glance version.
function SelectedWork() {
  const { t } = useTranslation()

  return (
    <section className="section section-alt work">
      <div className="container">
        <div className="strip-header">
          <p className="strip-label">{t('home.work_label')}</p>
          <Link href="/projects" className="strip-link">{t('home.work_all')}</Link>
        </div>

        <div className="work-grid">
          {projects.map(project => (
            <article key={project.id} className="work-card">
              <Link href={project.path} className="work-card__visual">
                <img
                  src={project.cover}
                  alt={t(project.titleKey)}
                  className={project.framedCover === false ? 'work-card__img work-card__img--bleed' : 'work-card__img'}
                />
              </Link>
              <div className="work-card__body">
                <p className="work-card__meta">
                  {t(project.categoryKey)} · {t(project.periodKey)}
                </p>
                <h3 className="work-card__title">
                  <Link href={project.path}>{t(project.titleKey)}</Link>
                </h3>
                <p className="work-card__excerpt">{t(project.descriptionKey)}</p>
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <ToolTag key={tag} name={tag} />
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SelectedWork
