import BlogListView from '../../views/BlogListView.jsx'
import { getBlogPosts } from '../../lib/posts.js'
import { pageMetadata } from '../../lib/seo.js'

const DESCRIPTION = 'Writing by Federico Pardo on AI engineering, research, and building systems.'

export const metadata = pageMetadata({ title: 'Blog', description: DESCRIPTION, path: '/blog' })

export default function BlogPage() {
  return <BlogListView posts={getBlogPosts()} />
}
