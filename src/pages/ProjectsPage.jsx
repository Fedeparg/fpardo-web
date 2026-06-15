import { Link } from 'react-router-dom'
import { projects } from '../data/projects.js'
import ToolTag from '../components/ToolTag.jsx'

function ProjectsPage() {
  return (
    <div className="page">
      <section className="section">
        <div className="container">
          <h2 className="section-title">Projects</h2>
          <div className="projects-list">

            {projects.map(project => (
              <div key={project.id} className="project-card">
                <Link to={project.path} className="project-visual">
                  <img src={project.cover} alt={project.title} className="project-cover-img" />
                </Link>
                <div className="project-info">
                  <p className="project-category">{project.category} · {project.period}</p>
                  <Link to={project.path} className="project-title-link">
                    <h3 className="project-title">{project.title}</h3>
                  </Link>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map(tag => (
                      <ToolTag key={tag} name={tag} />
                    ))}
                  </div>
                  <Link to={project.path} className="btn btn-secondary project-cta">View Project →</Link>
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
