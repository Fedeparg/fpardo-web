import BlogListView from '../../views/BlogListView.jsx'
import { getBlogPosts } from '../../lib/notion.js'
import { pageMetadata } from '../../lib/seo.js'

export const dynamic = 'force-dynamic'

const DESCRIPTION = 'Writing by Federico Pardo on AI engineering, research, and building systems.'

export const metadata = pageMetadata({ title: 'Blog', description: DESCRIPTION, path: '/blog' })

export default async function BlogPage() {
  let posts = []
  let error = false
  try {
    posts = await getBlogPosts()
  } catch {
    error = true
  }
  return <BlogListView posts={posts} error={error} />
}
