import { getBlogPosts } from '../lib/notion.js'
import { SEO } from '../lib/seo.js'

const SITE_URL = SEO.SITE_URL

// Generated at request time so blog posts come from live Notion data.
export const dynamic = 'force-dynamic'

export default async function sitemap() {
  const staticPaths = ['', '/about', '/projects', '/projects/sextante', '/projects/phd', '/publications', '/blog']
  const staticRoutes = staticPaths.map(path => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: path === '' ? 1 : 0.7,
  }))

  let posts = []
  try {
    posts = await getBlogPosts()
  } catch {
    posts = []
  }
  const postRoutes = posts
    .filter(post => post.slug)
    .map(post => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: post.date ? new Date(post.date) : new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    }))

  return [...staticRoutes, ...postRoutes]
}
