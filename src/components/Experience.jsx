import { useTranslation } from 'react-i18next'

function Experience() {
  const { t } = useTranslation()

  return (
    <section id="experience" className="section section-alt">
      <div className="container">
        <h2 className="section-title">{t('experience.title')}</h2>
        <div className="timeline">

          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <div className="timeline-header">
                <div>
                  <h3>{t('experience.umu.role')}</h3>
                  <p className="timeline-meta">{t('experience.umu.meta')}</p>
                </div>
                <div className="timeline-logo-wrap">
                  <img
                    className="timeline-logo"
                    src="/assets/logos/umu.png"
                    alt="University of Murcia"
                  />
                </div>
              </div>
              <p>{t('experience.umu.description')}</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <div className="timeline-header">
                <div>
                  <h3>{t('experience.webhelp.role')}</h3>
                  <p className="timeline-meta">{t('experience.webhelp.meta')}</p>
                </div>
                <div className="timeline-logo-wrap">
                  <img
                    className="timeline-logo"
                    src="/assets/logos/google-cloud.svg"
                    alt="Google Cloud"
                  />
                </div>
              </div>
              <p>{t('experience.webhelp.description')}</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <div className="timeline-header">
                <div>
                  <h3>{t('experience.centic.role')}</h3>
                  <p className="timeline-meta">{t('experience.centic.meta')}</p>
                </div>
                <div className="timeline-logo-wrap">
                  <img
                    className="timeline-logo"
                    src="/assets/logos/centic.png"
                    alt="CENTIC"
                  />
                </div>
              </div>
              <p>{t('experience.centic.description')}</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Experience
