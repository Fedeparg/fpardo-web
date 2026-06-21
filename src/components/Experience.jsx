'use client'

import { useTranslation } from 'react-i18next'
import { experienceItems } from '../data/experience.js'

function Experience() {
  const { t } = useTranslation()

  return (
    <section id="experience" className="section section-alt">
      <div className="container">
        <h2 className="section-title">{t('experience.title')}</h2>
        <div className="timeline">

          {experienceItems.map(({ key, logoSrc, logoAlt }) => (
            <div key={key} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <div>
                    <h3>{t(`experience.${key}.role`)}</h3>
                    <p className="timeline-meta">{t(`experience.${key}.meta`)}</p>
                  </div>
                  <div className="timeline-logo-wrap">
                    <img
                      className="timeline-logo"
                      src={logoSrc}
                      alt={logoAlt}
                    />
                  </div>
                </div>
                <p>{t(`experience.${key}.description`)}</p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Experience
