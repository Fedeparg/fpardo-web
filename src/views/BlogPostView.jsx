'use client'

import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { formatDate, TagList } from '../components/BlogMeta.jsx'

export default function BlogPostView({ post, children }) {
  const { t, i18n } = useTranslation()

  return (
    <div className="page">
      <section className="section">
        <div className="container">
          <div className="blog-post-back">
            <Link href="/blog">{'← '}{t('blog.back')}</Link>
          </div>

          <article className="blog-post">
            <header className="blog-post__header">
              <h1 className="blog-post__title">{post.title}</h1>
              <div className="blog-post__meta">
                {post.date && (
                  <time dateTime={post.date} className="blog-post__date">
                    {t('blog.posted_on')}{' '}
                    {formatDate(post.date, i18n.language)}
                  </time>
                )}
                <TagList tags={post.tags} />
              </div>
            </header>

            {children}
          </article>
        </div>
      </section>
    </div>
  )
}
