import { toolMeta } from '../data/toolMeta.js'

function ToolTag({ name }) {
  const meta = toolMeta[name]
  const Icon = meta?.icon

  return (
    <a
      href={meta?.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`tool-tag ${Icon ? 'tool-tag--icon' : 'tool-tag--text tag'}`}
      title={name}
      aria-label={name}
    >
      {Icon ? <Icon size={20} /> : name}
    </a>
  )
}

export default ToolTag
