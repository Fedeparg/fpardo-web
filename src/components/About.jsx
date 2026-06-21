'use client'

import { useTranslation, Trans } from 'react-i18next'

function About() {
  const { t } = useTranslation()

  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">{t('about.title')}</h2>
        <div className="about-content">
          <div className="about-image">
            <img src="/assets/perfil.jpg" alt="Federico Pardo" className="profile-img" />
          </div>
          <div className="about-text">
            <p>
              <Trans i18nKey="about.p1" />
            </p>
            <p>{t('about.p2')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
