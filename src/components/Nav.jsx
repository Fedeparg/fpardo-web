import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

function LangToggle() {
  const { i18n } = useTranslation()
  const isEs = i18n.language.startsWith('es')

  function toggle() {
    const next = isEs ? 'en' : 'es'
    i18n.changeLanguage(next)
    localStorage.setItem('lang', next)
  }

  return (
    <button
      className="lang-toggle"
      onClick={toggle}
      aria-label={isEs ? 'Switch to English' : 'Cambiar a español'}
    >
      <span className={isEs ? 'lang-flag--inactive' : 'lang-flag--active'}>{'🇬🇧'}</span>
      <span className={isEs ? 'lang-flag--active' : 'lang-flag--inactive'}>{'🇪🇸'}</span>
    </button>
  )
}

function HamburgerIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <line x1="3" y1="6" x2="19" y2="6" />
      <line x1="3" y1="11" x2="19" y2="11" />
      <line x1="3" y1="16" x2="19" y2="16" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <line x1="5" y1="5" x2="17" y2="17" />
      <line x1="17" y1="5" x2="5" y2="17" />
    </svg>
  )
}

function Nav() {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  useEffect(() => {
    if (!isOpen) return
    function handleKey(e) {
      if (e.key === 'Escape') setIsOpen(false)
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [isOpen])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  useEffect(() => {
    let timer
    function handleResize() {
      document.body.classList.add('no-transitions')
      clearTimeout(timer)
      timer = setTimeout(() => document.body.classList.remove('no-transitions'), 200)
    }
    window.addEventListener('resize', handleResize, { passive: true })
    return () => { window.removeEventListener('resize', handleResize); clearTimeout(timer) }
  }, [])

  function close() { setIsOpen(false) }
  function toggle() { setIsOpen(o => !o) }

  return (
    <>
      <nav className={`nav${isOpen ? ' nav--open' : ''}`}>
        <div className="container">
          <Link to="/" className="logo">{'FP'}</Link>

          <div className="nav-right">
            <div className="nav-links" id="nav-menu">
              <NavLink to="/about" onClick={close}>{t('nav.about')}</NavLink>
              <NavLink to="/projects" onClick={close}>{t('nav.projects')}</NavLink>
              <NavLink to="/publications" onClick={close}>{t('nav.publications')}</NavLink>
              <NavLink to="/blog" onClick={close}>{t('nav.blog')}</NavLink>
            </div>

            <div className="nav-end">
              <LangToggle />
              <button
                className="hamburger"
                onClick={toggle}
                aria-label={isOpen ? t('nav.close_menu') : t('nav.open_menu')}
                aria-expanded={isOpen}
                aria-controls="nav-menu"
              >
                {isOpen ? <CloseIcon /> : <HamburgerIcon />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className="nav-backdrop" onClick={close} aria-hidden="true" />
      )}
    </>
  )
}

export default Nav
