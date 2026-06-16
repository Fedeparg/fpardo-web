import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { getBlogPosts } from '../lib/notion'
import { formatDate, TagList } from '../components/BlogMeta'

export default function BlogPage() {
  const { t, i18n } = useTranslation()
  const [posts, setPosts] = useState([])
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    getBlogPosts()
      .then(data => { setPosts(data); setStatus('ok') })
      .catch(() => setStatus('error'))
  }, [])

  return (
    <main className="page-container">
      <section className="section">
        <h1 className="section-title">{t('blog.title')}</h1>

        {status === 'loading' && (
          <p className="blog-status">{t('blog.loading')}</p>
        )}

        {status === 'error' && (
          <p className="blog-status blog-status--error">{t('blog.error')}</p>
        )}

        {status === 'ok' && posts.length === 0 && (
          <p className="blog-status">{t('blog.empty')}</p>
        )}

        {status === 'ok' && posts.length > 0 && (
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
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                {post.excerpt && (
                  <p className="blog-card__excerpt">{post.excerpt}</p>
                )}
                <Link to={`/blog/${post.slug}`} className="blog-card__read-more">
                  {t('blog.read_more')}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  )
}
