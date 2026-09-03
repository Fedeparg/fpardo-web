import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'

export const DEFAULT_LOCALE = 'en'
export const LOCALES = ['en', 'es']
export const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/
export const FRONTMATTER_KEYS = ['title', 'date', 'excerpt', 'tags', 'cover', 'draft']

const CONTENT_DIR = path.join(process.cwd(), 'src', 'content', 'blog')

// Drafts stay visible while writing (and under vitest, so the frontmatter test
// validates them too) but never reach a production build.
const INCLUDE_DRAFTS = process.env.NODE_ENV !== 'production'

// YAML parses an unquoted `date: 2026-02-14` into a Date object rather than a
// string, which would reach <time dateTime> and the JSON-LD with a time
// component. Collapse both shapes into the plain ISO day.
export function toIsoDay(value) {
  if (value instanceof Date && !Number.isNaN(value.getTime())) {
    return value.toISOString().slice(0, 10)
  }
  if (typeof value === 'string' && /^\d{4}-\d{2}-\d{2}/.test(value)) {
    return value.slice(0, 10)
  }
  return null
}

export function normalizePost(data, { slug, locale }) {
  return {
    slug,
    locale,
    title: typeof data.title === 'string' ? data.title : '',
    date: toIsoDay(data.date),
    excerpt: typeof data.excerpt === 'string' ? data.excerpt : '',
    tags: Array.isArray(data.tags) ? data.tags.filter(tag => typeof tag === 'string') : [],
    cover: typeof data.cover === 'string' ? data.cover : null,
    draft: data.draft === true,
  }
}

// Every post on disk regardless of draft state, so the frontmatter test catches
// a broken draft before it is ever published.
export function listPostFiles(locale = DEFAULT_LOCALE) {
  const dir = path.join(CONTENT_DIR, locale)
  if (!fs.existsSync(dir)) return []
  return fs
    .readdirSync(dir)
    .filter(name => name.endsWith('.mdx'))
    .map(name => ({ locale, slug: name.slice(0, -'.mdx'.length), file: path.join(dir, name) }))
}

function readPost(locale, slug) {
  // The slug comes straight from the URL, so this is also what stops a request
  // from escaping the content directory.
  if (!SLUG_PATTERN.test(slug)) return null
  const file = path.join(CONTENT_DIR, locale, `${slug}.mdx`)
  if (!fs.existsSync(file)) return null
  const { data, content } = matter(fs.readFileSync(file, 'utf8'))
  return { meta: normalizePost(data, { slug, locale }), source: content }
}

export function getBlogPosts(locale = DEFAULT_LOCALE) {
  return listPostFiles(locale)
    .map(({ slug }) => readPost(locale, slug))
    .filter(entry => entry && (INCLUDE_DRAFTS || !entry.meta.draft))
    .map(entry => entry.meta)
    .sort((a, b) => (b.date ?? '').localeCompare(a.date ?? ''))
}

export function getBlogPost(slug, locale = DEFAULT_LOCALE) {
  const entry = readPost(locale, slug)
  if (!entry || (!INCLUDE_DRAFTS && entry.meta.draft)) return null
  return { ...entry.meta, source: entry.source }
}
