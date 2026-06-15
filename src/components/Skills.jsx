import { skillCategories } from '../data/skills.js'
import { toolMeta } from '../data/toolMeta.js'

function SkillBadge({ name }) {
  const meta = toolMeta[name]
  const Icon = meta?.icon

  return (
    <span className="skill-badge">
      {Icon && <Icon size={16} aria-hidden="true" />}
      {name}
    </span>
  )
}

function Skills() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skillCategories.map(category => (
            <div key={category.title} className="skill-category">
              <h3>{category.title}</h3>
              <div className="skill-tags">
                {category.skills.map(skill => (
                  <SkillBadge key={skill} name={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
