import { toolMeta } from '../data/toolMeta.js'

function ToolTag({ name }) {
  const meta = toolMeta[name]
  const url = meta?.url

  if (meta?.icon) {
    const Icon = meta.icon
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="tool-tag tool-tag--icon"
        title={name}
        aria-label={name}
      >
        <Icon size={20} />
      </a>
    )
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="tool-tag tool-tag--text tag"
      title={name}
    >
      {name}
    </a>
  )
}

export default ToolTag
