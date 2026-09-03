import { getBlogPosts } from '../lib/posts.js'
import { SEO } from '../lib/seo.js'

const SITE_URL = SEO.SITE_URL

export default function sitemap() {
  const staticPaths = ['', '/about', '/projects', '/projects/sextante', '/projects/phd', '/publications', '/blog']
  const staticRoutes = staticPaths.map(path => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: path === '' ? 1 : 0.7,
  }))

  const postRoutes = getBlogPosts().map(post => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [...staticRoutes, ...postRoutes]
}
