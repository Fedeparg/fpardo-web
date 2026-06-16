function RichText({ richText = [] }) {
  return richText.map((t, i) => {
    let content = t.plain_text
    if (t.annotations?.bold) content = <strong key={i}>{content}</strong>
    if (t.annotations?.italic) content = <em key={i}>{content}</em>
    if (t.annotations?.code) content = <code key={i}>{content}</code>
    if (t.annotations?.strikethrough) content = <s key={i}>{content}</s>
    if (t.href) return <a key={i} href={t.href} target="_blank" rel="noopener noreferrer">{content}</a>
    return <span key={i}>{content}</span>
  })
}

function Block({ block }) {
  switch (block.type) {
    case 'paragraph':
      return <p><RichText richText={block.paragraph.rich_text} /></p>

    case 'heading_1':
      return <h1><RichText richText={block.heading_1.rich_text} /></h1>

    case 'heading_2':
      return <h2><RichText richText={block.heading_2.rich_text} /></h2>

    case 'heading_3':
      return <h3><RichText richText={block.heading_3.rich_text} /></h3>

    case 'bulleted_list_item':
      return <li><RichText richText={block.bulleted_list_item.rich_text} /></li>

    case 'numbered_list_item':
      return <li><RichText richText={block.numbered_list_item.rich_text} /></li>

    case 'code':
      return (
        <pre data-language={block.code.language}>
          <code><RichText richText={block.code.rich_text} /></code>
        </pre>
      )

    case 'quote':
      return <blockquote><RichText richText={block.quote.rich_text} /></blockquote>

    case 'divider':
      return <hr />

    case 'image': {
      const url = block.image.type === 'external'
        ? block.image.external.url
        : block.image.file.url
      const caption = block.image.caption?.[0]?.plain_text ?? ''
      return (
        <figure>
          <img src={url} alt={caption} loading="lazy" />
          {caption && <figcaption>{caption}</figcaption>}
        </figure>
      )
    }

    default:
      return null
  }
}

export default function NotionRenderer({ blocks = [] }) {
  const elements = []
  let listItems = []
  let listType = null

  const flushList = () => {
    if (listItems.length === 0) return
    const Tag = listType === 'bulleted_list_item' ? 'ul' : 'ol'
    elements.push(<Tag key={`list-${elements.length}`}>{listItems}</Tag>)
    listItems = []
    listType = null
  }

  blocks.forEach((block, i) => {
    const isList = block.type === 'bulleted_list_item' || block.type === 'numbered_list_item'

    if (isList) {
      if (listType && listType !== block.type) flushList()
      listType = block.type
      listItems.push(<Block key={block.id ?? i} block={block} />)
    } else {
      flushList()
      elements.push(<Block key={block.id ?? i} block={block} />)
    }
  })

  flushList()
  return <div className="notion-content">{elements}</div>
}
