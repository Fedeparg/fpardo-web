import { useTranslation } from 'react-i18next'

function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="footer">
      <div className="container">
        <p>{t('footer.copyright', { year: new Date().getFullYear() })}</p>
        <p className="footer-note">
          {t('footer.hosted')}
          {' · '}
          <a href="https://github.com/fedeparg/fpardo-web" target="_blank" rel="noopener">
            {t('footer.source')}
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
