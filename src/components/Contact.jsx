import { useState } from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { SiGithub } from 'react-icons/si'
import { MdEmail } from 'react-icons/md'
import { useTranslation } from 'react-i18next'

function Contact() {
  const { t } = useTranslation()
  const [status, setStatus] = useState('idle')

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')

    try {
      const response = await fetch(e.target.action, {
        method: 'POST',
        body: new FormData(e.target),
        headers: { Accept: 'application/json' },
      })

      if (!response.ok) throw new Error()

      setStatus('success')
      e.target.reset()
    } catch {
      setStatus('error')
    } finally {
      setTimeout(() => setStatus('idle'), 3000)
    }
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">{t('contact.title')}</h2>
        <div className="contact-content">

          <div className="contact-info">
            <p>{t('contact.intro')}</p>
            <div className="contact-links">
              <a href="mailto:federico.pardog@gmail.com" className="contact-link">
                <MdEmail size={20} />
                {'federico.pardog@gmail.com'}
              </a>
              <a href="https://linkedin.com/in/federico-pardog" className="contact-link" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={20} />
                {t('contact.linkedin')}
              </a>
              <a href="https://github.com/fedeparg" className="contact-link" target="_blank" rel="noopener noreferrer">
                <SiGithub size={20} />
                {t('contact.github')}
              </a>
            </div>
          </div>

          <form
            className="contact-form"
            action="https://formspree.io/f/xkovgbvl"
            method="POST"
            onSubmit={handleSubmit}
          >
            <input type="text" name="name" placeholder={t('contact.form.name')} required />
            <input type="email" name="email" placeholder={t('contact.form.email')} required />
            <textarea name="message" placeholder={t('contact.form.message')} rows="5" required />
            <button
              type="submit"
              className="btn btn-primary"
              disabled={status === 'sending'}
            >
              {t(`contact.form.submit_${status}`)}
            </button>
          </form>

        </div>
      </div>
    </section>
  )
}

export default Contact
