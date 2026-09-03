import { SEO } from '../lib/seo.js'

const SITE_URL = SEO.SITE_URL

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
