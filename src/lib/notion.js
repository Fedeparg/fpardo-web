import { cache } from 'react'

const DATABASE_ID = '381dba46313e801f8798e5b76ab4e1f8'
const NOTION_API = 'https://api.notion.com/v1'

// Server-side only: the token never reaches the browser. Always fetch fresh
// (no-store) so Notion's signed image URLs do not go stale, which also makes
// the blog routes render dynamically at request time.
async function notionFetch(path, options = {}) {
  const res = await fetch(`${NOTION_API}/${path}`, {
    ...options,
    cache: 'no-store',
    headers: {
      Authorization: `Bearer ${process.env.NOTION_TOKEN}`,
      'Notion-Version': '2022-06-28',
      'Content-Type': 'application/json',
      ...options.headers,
    },
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

function coverUrl(page) {
  if (!page.cover) return null
  return page.cover.type === 'external'
    ? page.cover.external?.url ?? null
    : page.cover.file?.url ?? null
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
    excerpt: page.properties.Excerpt?.rich_text?.[0]?.plain_text ?? '',
    cover: coverUrl(page),
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
  return data.results.map(mapPageMeta)
}

// Wrapped in React cache so generateMetadata and the page component share a
// single Notion request per render instead of fetching the post twice.
export const getBlogPost = cache(async slug => {
  const data = await notionFetch(`databases/${DATABASE_ID}/query`, {
    method: 'POST',
    body: JSON.stringify({
      filter: { property: 'Published', checkbox: { equals: true } },
    }),
  })
  const page = data.results.find(p => mapPageMeta(p).slug === slug)
  if (!page) return null

  const blocks = await notionFetch(`blocks/${page.id}/children`)
  return {
    ...mapPageMeta(page),
    blocks: blocks.results,
  }
})
