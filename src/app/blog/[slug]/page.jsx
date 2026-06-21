import { notFound } from 'next/navigation'
import BlogPostView from '../../../views/BlogPostView.jsx'
import NotionRenderer from '../../../components/NotionRenderer.jsx'
import { getBlogPost } from '../../../lib/notion.js'

export const dynamic = 'force-dynamic'

export async function generateMetadata({ params }) {
  const post = await getBlogPost(params.slug)
  if (!post) return { title: 'Blog' }

  const description = post.excerpt || undefined
  const images = post.cover ? [post.cover] : undefined

  return {
    title: post.title,
    description,
    openGraph: {
      type: 'article',
      title: post.title,
      description,
      url: `/blog/${post.slug}`,
      publishedTime: post.date ?? undefined,
      images,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description,
      images,
    },
  }
}

export default async function BlogPostPage({ params }) {
  const post = await getBlogPost(params.slug)
  if (!post) notFound()

  const { blocks, ...meta } = post
  return (
    <BlogPostView post={meta}>
      <NotionRenderer blocks={blocks} />
    </BlogPostView>
  )
}
