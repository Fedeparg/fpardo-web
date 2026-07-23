'use client'

import { FaLinkedin } from 'react-icons/fa'
import { SiGithub, SiX, SiYoutube } from 'react-icons/si'
import { MdEmail } from 'react-icons/md'
import { useTranslation } from 'react-i18next'

const socials = [
  { href: 'mailto:federico.pardog@gmail.com',   icon: MdEmail,    label: 'Email' },
  { href: 'https://linkedin.com/in/federico-pardog', icon: FaLinkedin, label: 'LinkedIn', external: true },
  { href: 'https://github.com/fedeparg',         icon: SiGithub,   label: 'GitHub',   external: true },
  { href: 'https://x.com/fedepardog',            icon: SiX,        label: 'X',        external: true },
  { href: 'https://www.youtube.com/@federicopardog', icon: SiYoutube,  label: 'YouTube',  external: true },
]

function Hero() {
  const { t } = useTranslation()

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-layout">

          <div className="hero-photo">
            <img src="/assets/perfil.jpg" alt={t('hero.photo_alt')} />
          </div>

          <div className="hero-text">
            <h1 className="hero-title">{'Federico Pardo'}</h1>
            <p className="hero-subtitle">{t('hero.subtitle')}</p>
            <p className="hero-description">{t('hero.description')}</p>

            <div className="hero-social">
              {socials.map(({ href, icon: Icon, label, external }) => (
                <a
                  key={label}
                  href={href}
                  className="hero-social-link"
                  aria-label={label}
                  {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>

            <div className="hero-cta">
              <a href="#contact" className="btn btn-primary">{t('hero.cta_contact')}</a>
              <a href="/assets/cv_federico_pardo.pdf" className="btn btn-secondary" download target="_blank" rel="noopener noreferrer">
                {t('hero.cta_cv')}
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero
