import { NavLink, Link } from 'react-router-dom'
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

function Nav() {
  const { t } = useTranslation()

  return (
    <nav className="nav">
      <div className="container">
        <Link to="/" className="logo">{'FP'}</Link>
        <div className="nav-links">
          <NavLink to="/about">{t('nav.about')}</NavLink>
          <NavLink to="/projects">{t('nav.projects')}</NavLink>
          <NavLink to="/publications">{t('nav.publications')}</NavLink>
          <LangToggle />
        </div>
      </div>
    </nav>
  )
}

export default Nav
