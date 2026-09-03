import { describe, it, expect } from 'vitest'
import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import { LOCALES, SLUG_PATTERN, FRONTMATTER_KEYS, listPostFiles, toIsoDay } from '../lib/posts.js'

const PUBLIC_DIR = path.join(process.cwd(), 'public')
const REQUIRED_FIELDS = ['title', 'date', 'excerpt']

// listPostFiles includes drafts, so a broken draft fails here rather than on
// the day it is published.
const posts = LOCALES.flatMap(locale =>
  listPostFiles(locale).map(entry => {
    const { data, content } = matter(fs.readFileSync(entry.file, 'utf8'))
    return { ...entry, data, content }
  })
)

function label(post) {
  return `${post.locale}/${post.slug}.mdx`
}

function isBlank(value) {
  return typeof value !== 'string' || value.trim() === ''
}

describe('blog post frontmatter', () => {
  it('filenames are valid slugs', () => {
    const invalid = posts.filter(p => !SLUG_PATTERN.test(p.slug)).map(label)
    expect(invalid, `Filenames that are not lowercase hyphenated slugs:\n  ${invalid.join('\n  ')}`).toHaveLength(0)
  })

  it('slugs are unique within a locale', () => {
    const seen = new Set()
    const duplicates = posts
      .filter(p => {
        const key = `${p.locale}/${p.slug}`
        if (seen.has(key)) return true
        seen.add(key)
        return false
      })
      .map(label)
    expect(duplicates, `Duplicate slugs:\n  ${duplicates.join('\n  ')}`).toHaveLength(0)
  })

  it('required fields are present and non-blank', () => {
    const missing = posts.flatMap(p =>
      REQUIRED_FIELDS.filter(field => field === 'date' ? p.data.date == null : isBlank(p.data[field]))
        .map(field => `${label(p)} → ${field}`)
    )
    expect(missing, `Missing or blank required frontmatter:\n  ${missing.join('\n  ')}`).toHaveLength(0)
  })

  it('frontmatter has no unknown keys', () => {
    const unknown = posts.flatMap(p =>
      Object.keys(p.data)
        .filter(key => !FRONTMATTER_KEYS.includes(key))
        .map(key => `${label(p)} → ${key}`)
    )
    expect(unknown, `Unknown frontmatter keys (a typo in "draft" would publish a draft):\n  ${unknown.join('\n  ')}`).toHaveLength(0)
  })

  it('dates normalise to an ISO day', () => {
    const invalid = posts.filter(p => toIsoDay(p.data.date) === null).map(label)
    expect(invalid, `Dates that are not a YYYY-MM-DD day:\n  ${invalid.join('\n  ')}`).toHaveLength(0)
  })

  it('tags is an array of non-blank strings', () => {
    const invalid = posts
      .filter(p => p.data.tags !== undefined && (!Array.isArray(p.data.tags) || p.data.tags.some(isBlank)))
      .map(label)
    expect(invalid, `Invalid tags:\n  ${invalid.join('\n  ')}`).toHaveLength(0)
  })

  it('draft is a boolean when present', () => {
    const invalid = posts
      .filter(p => p.data.draft !== undefined && typeof p.data.draft !== 'boolean')
      .map(label)
    expect(invalid, `Non-boolean draft flags:\n  ${invalid.join('\n  ')}`).toHaveLength(0)
  })

  it('cover paths are site-absolute and exist in public/', () => {
    const broken = posts
      .filter(p => p.data.cover !== undefined)
      .filter(p => {
        const cover = p.data.cover
        if (typeof cover !== 'string' || !cover.startsWith('/')) return true
        return !fs.existsSync(path.join(PUBLIC_DIR, cover))
      })
      .map(label)
    expect(broken, `Covers that are not site-absolute or missing from public/:\n  ${broken.join('\n  ')}`).toHaveLength(0)
  })

  it('post bodies are not empty', () => {
    const empty = posts.filter(p => p.content.trim() === '').map(label)
    expect(empty, `Posts with an empty body:\n  ${empty.join('\n  ')}`).toHaveLength(0)
  })
})
