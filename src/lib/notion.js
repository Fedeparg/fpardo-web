const DATABASE_ID = '381dba46313e801f8798e5b76ab4e1f8'

async function notionFetch(path, options = {}) {
  const res = await fetch(`/api/notion/${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  })
  if (!res.ok) throw new Error(`Notion API error: ${res.status}`)
  return res.json()
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
    id: page.id,
    title: page.properties.Title?.title?.[0]?.plain_text ?? '',
    slug: page.properties.Slug?.rich_text?.[0]?.plain_text ?? '',
    date: page.properties.Date?.date?.start ?? null,
    tags: page.properties.Tags?.multi_select?.map(t => t.name) ?? [],
    excerpt: page.properties.Excerpt?.rich_text?.[0]?.plain_text ?? '',
  }))
}

export async function getBlogPost(slug) {
  const data = await notionFetch(`databases/${DATABASE_ID}/query`, {
    method: 'POST',
    body: JSON.stringify({
      filter: {
        and: [
          { property: 'Published', checkbox: { equals: true } },
          { property: 'Slug', rich_text: { equals: slug } },
        ],
      },
    }),
  })
  const page = data.results[0]
  if (!page) return null

  const blocks = await notionFetch(`blocks/${page.id}/children`)
  return {
    id: page.id,
    title: page.properties.Title?.title?.[0]?.plain_text ?? '',
    slug: page.properties.Slug?.rich_text?.[0]?.plain_text ?? '',
    date: page.properties.Date?.date?.start ?? null,
    tags: page.properties.Tags?.multi_select?.map(t => t.name) ?? [],
    blocks: blocks.results,
  }
}
