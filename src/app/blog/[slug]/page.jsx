import { notFound } from 'next/navigation'
import BlogPostView from '../../../views/BlogPostView.jsx'
import PostBody from '../../../components/PostBody.jsx'
import { getBlogPost, getBlogPosts, DEFAULT_LOCALE } from '../../../lib/posts.js'
import { SEO } from '../../../lib/seo.js'

// Everything is prerendered at build time, and the content directory does not
// travel into the standalone runtime. Without this, an unknown slug would try to
// read from disk in production and fail with a 500 instead of a 404.
export const dynamicParams = false

export function generateStaticParams() {
  return getBlogPosts(DEFAULT_LOCALE).map(post => ({ slug: post.slug }))
}

export function generateMetadata({ params }) {
  const post = getBlogPost(params.slug)
  if (!post) return { title: 'Blog' }

  const description = post.excerpt || undefined
  // Relative paths are resolved against metadataBase from the root layout.
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
    // Hand-serialised, so metadataBase does not apply and the cover has to be
    // made absolute here.
    image: post.cover ? new URL(post.cover, SITE_URL).toString() : undefined,
    url: `${SITE_URL}/blog/${post.slug}`,
    author: { '@type': 'Person', name: 'Federico Pardo', url: SITE_URL },
  }
}

export default function BlogPostPage({ params }) {
  const post = getBlogPost(params.slug)
  if (!post) notFound()

  const { source, ...meta } = post
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd(post)) }}
      />
      <BlogPostView post={meta}>
        <PostBody source={source} lang={meta.locale} />
      </BlogPostView>
    </>
  )
}
