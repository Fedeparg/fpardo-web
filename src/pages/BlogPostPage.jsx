import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { getBlogPost } from '../lib/notion'
import NotionRenderer from '../components/NotionRenderer'

export default function BlogPostPage() {
  const { slug } = useParams()
  const { t } = useTranslation()
  const [post, setPost] = useState(null)
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    getBlogPost(slug)
      .then(data => {
        if (!data) { setStatus('notfound'); return }
        setPost(data)
        setStatus('ok')
      })
      .catch(() => setStatus('error'))
  }, [slug])

  return (
    <main className="page-container">
      <div className="blog-post-back">
        <Link to="/blog">{'← '}{t('blog.back')}</Link>
      </div>

      {status === 'loading' && (
        <p className="blog-status">{t('blog.loading')}</p>
      )}

      {(status === 'error' || status === 'notfound') && (
        <p className="blog-status blog-status--error">{t('blog.error')}</p>
      )}

      {status === 'ok' && post && (
        <article className="blog-post">
          <header className="blog-post__header">
            <h1 className="blog-post__title">{post.title}</h1>
            <div className="blog-post__meta">
              {post.date && (
                <time dateTime={post.date} className="blog-card__date">
                  {t('blog.posted_on')}{' '}
                  {new Date(post.date).toLocaleDateString('en-GB', {
                    year: 'numeric', month: 'long', day: 'numeric',
                  })}
                </time>
              )}
              {post.tags.length > 0 && (
                <ul className="blog-card__tags" aria-label={t('blog.tags_label')}>
                  {post.tags.map(tag => (
                    <li key={tag} className="tag">{tag}</li>
                  ))}
                </ul>
              )}
            </div>
          </header>

          <NotionRenderer blocks={post.blocks} />
        </article>
      )}
    </main>
  )
}
