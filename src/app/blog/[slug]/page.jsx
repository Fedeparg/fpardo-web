import { notFound } from 'next/navigation'
import BlogPostView from '../../../views/BlogPostView.jsx'
import NotionRenderer from '../../../components/NotionRenderer.jsx'
import { getBlogPost } from '../../../lib/notion.js'
import { SEO } from '../../../lib/seo.js'

export const dynamic = 'force-dynamic'

export async function generateMetadata({ params }) {
  const post = await getBlogPost(params.slug)
  if (!post) return { title: 'Blog' }

  const description = post.excerpt || undefined
  const images = post.cover ? [post.cover] : ['/opengraph-image']

  return {
    title: post.title,
    description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: 'article',
      siteName: 'Federico Pardo',
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

const SITE_URL = SEO.SITE_URL

function articleJsonLd(post) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt || undefined,
    datePublished: post.date || undefined,
    image: post.cover || undefined,
    url: `${SITE_URL}/blog/${post.slug}`,
    author: { '@type': 'Person', name: 'Federico Pardo', url: SITE_URL },
  }
}

export default async function BlogPostPage({ params }) {
  const post = await getBlogPost(params.slug)
  if (!post) notFound()

  const { blocks, ...meta } = post
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd(post)) }}
      />
      <BlogPostView post={meta}>
        <NotionRenderer blocks={blocks} />
      </BlogPostView>
    </>
  )
}
