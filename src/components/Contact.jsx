'use client'

import { useTranslation } from 'react-i18next'
import { EMAIL, socials } from '../data/socials.js'

function Contact() {
  const { t } = useTranslation()

  return (
    <section id="contact" className="section section-alt contact">
      <div className="container">
        <div className="contact-layout">

          <div className="contact-pitch">
            <h2 className="contact-title">{t('contact.title')}</h2>
            <p className="contact-intro">{t('contact.intro')}</p>
            <a href={`mailto:${EMAIL}`} className="btn btn-primary contact-email">
              {EMAIL}
            </a>
          </div>

          <div>
            <p className="strip-label">{t('contact.elsewhere')}</p>
            <ul className="social-list">
              {socials.map(({ id, label, handle, href, icon: Icon }) => (
                <li key={id}>
                  <a
                    href={href}
                    className="social-row"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="social-row__name">
                      <Icon size={18} aria-hidden="true" />
                      {label}
                    </span>
                    <span className="social-row__handle">{handle}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact
