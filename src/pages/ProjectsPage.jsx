import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { projects } from '../data/projects.js'
import ToolTag from '../components/ToolTag.jsx'

function ProjectsPage() {
  const { t } = useTranslation()

  return (
    <div className="page">
      <section className="section">
        <div className="container">
          <h2 className="section-title">{t('projects.title')}</h2>
          <div className="projects-list">

            {projects.map(project => (
              <div key={project.id} className="project-card">
                <Link to={project.path} className="project-visual">
                  <img src={project.cover} alt={t(project.titleKey)} className="project-cover-img" />
                </Link>
                <div className="project-info">
                  <p className="project-category">{t(project.categoryKey)} · {t(project.periodKey)}</p>
                  <Link to={project.path} className="project-title-link">
                    <h3 className="project-title">{t(project.titleKey)}</h3>
                  </Link>
                  <p className="project-description">{t(project.descriptionKey)}</p>
                  <div className="project-tags">
                    {project.tags.map(tag => (
                      <ToolTag key={tag} name={tag} />
                    ))}
                  </div>
                  <Link to={project.path} className="btn btn-secondary project-cta">{t('projects.view')}</Link>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>
    </div>
  )
}

export default ProjectsPage
