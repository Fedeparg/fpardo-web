'use client'

import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { EMAIL } from '../data/socials.js'

function Hero() {
  const { t } = useTranslation()

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-layout">

          <div className="hero-text">
            <p className="hero-eyebrow rise rise--1">{t('hero.eyebrow')}</p>
            <h1 className="hero-title rise rise--2">{t('hero.title')}</h1>
            <p className="hero-description rise rise--3">{t('hero.description')}</p>

            <div className="hero-cta rise rise--4">
              <a href={`mailto:${EMAIL}`} className="btn btn-primary">
                {t('hero.cta_contact')}
              </a>
              <Link href="/about" className="btn btn-secondary">
                {t('hero.cta_cv')}
              </Link>
            </div>
          </div>

          <div className="hero-photo rise rise--3">
            <img src="/assets/perfil.jpg" alt={t('hero.photo_alt')} />
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero
