const DATABASE_ID = '381dba46313e801f8798e5b76ab4e1f8'

async function notionFetch(path, options = {}) {
  const res = await fetch(`/api/notion/${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  })
  if (!res.ok) throw new Error(`Notion API error: ${res.status}`)
  return res.json()
}

function slugify(title) {
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
}

function mapPageMeta(page) {
  const title = page.properties.Title?.title?.[0]?.plain_text ?? ''
  const slug = page.properties.Slug?.rich_text?.[0]?.plain_text || slugify(title)
  return {
    id: page.id,
    title,
    slug,
    date: page.properties.Date?.date?.start ?? null,
    tags: page.properties.Tags?.multi_select?.map(t => t.name) ?? [],
  }
}

export async function getBlogPosts() {
  const data = await notionFetch(`databases/${DATABASE_ID}/query`, {
    method: 'POST',
    body: JSON.stringify({
      filter: { property: 'Published', checkbox: { equals: true } },
      sorts: [{ property: 'Date', direction: 'descending' }],
    }),
  })
  return data.results.map(page => ({
    ...mapPageMeta(page),
    excerpt: page.properties.Excerpt?.rich_text?.[0]?.plain_text ?? '',
  }))
}

export async function getBlogPost(slug) {
  const data = await notionFetch(`databases/${DATABASE_ID}/query`, {
    method: 'POST',
    body: JSON.stringify({
      filter: { property: 'Published', checkbox: { equals: true } },
    }),
  })
  const page = data.results.find(p => {
    const meta = mapPageMeta(p)
    return meta.slug === slug
  })
  if (!page) return null

  const blocks = await notionFetch(`blocks/${page.id}/children`)
  return {
    ...mapPageMeta(page),
    blocks: blocks.results,
  }
}
