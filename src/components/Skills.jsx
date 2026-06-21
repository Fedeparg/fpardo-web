'use client'

import { useTranslation } from 'react-i18next'
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
  const { t } = useTranslation()

  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">{t('skills.title')}</h2>
        <div className="skills-grid">
          {skillCategories.map(category => (
            <div key={category.titleKey} className="skill-category">
              <h3>{t(category.titleKey)}</h3>
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
