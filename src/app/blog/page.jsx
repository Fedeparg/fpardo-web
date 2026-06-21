import BlogListView from '../../views/BlogListView.jsx'
import { getBlogPosts } from '../../lib/notion.js'

export const dynamic = 'force-dynamic'

const DESCRIPTION = 'Writing by Federico Pardo on AI engineering, research, and building systems.'

export const metadata = {
  title: 'Blog',
  description: DESCRIPTION,
  openGraph: { title: 'Blog · Federico Pardo', description: DESCRIPTION },
}

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
