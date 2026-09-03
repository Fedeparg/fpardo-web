'use client'

import { useTranslation } from 'react-i18next'
import { educationItems } from '../data/education.js'

// Deliberately the last section on /about: the degrees matter less than the
// work above them, so they close the page instead of opening it.
function Education() {
  const { t } = useTranslation()

  return (
    <section id="education" className="section section-alt">
      <div className="container">
        <h2 className="section-title">{t('education.title')}</h2>
        <ul className="education-list">
          {educationItems.map(({ key }) => (
            <li key={key} className="education-item">
              <p className="education-item__period">{t(`education.${key}.period`)}</p>
              <div>
                <h3 className="education-item__degree">{t(`education.${key}.degree`)}</h3>
                <p className="education-item__school">{t(`education.${key}.school`)}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Education
