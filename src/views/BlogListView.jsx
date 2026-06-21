'use client'

import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { formatDate, TagList } from '../components/BlogMeta.jsx'

export default function BlogListView({ posts, error }) {
  const { t, i18n } = useTranslation()

  return (
    <div className="page">
      <section className="section">
        <div className="container">
          <h2 className="section-title">{t('blog.title')}</h2>

          {error && (
            <p className="blog-status blog-status--error">{t('blog.error')}</p>
          )}

          {!error && posts.length === 0 && (
            <p className="blog-status">{t('blog.empty')}</p>
          )}

          {!error && posts.length > 0 && (
            <ul className="blog-list">
              {posts.map(post => (
                <li key={post.id} className="blog-card">
                  <div className="blog-card__meta">
                    {post.date && (
                      <time dateTime={post.date} className="blog-card__date">
                        {formatDate(post.date, i18n.language)}
                      </time>
                    )}
                    <TagList tags={post.tags} />
                  </div>
                  <h2 className="blog-card__title">
                    {post.slug
                      ? <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      : post.title}
                  </h2>
                  {post.excerpt && (
                    <p className="blog-card__excerpt">{post.excerpt}</p>
                  )}
                  {post.slug && (
                    <Link href={`/blog/${post.slug}`} className="blog-card__read-more">
                      {t('blog.read_more')}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </div>
  )
}
