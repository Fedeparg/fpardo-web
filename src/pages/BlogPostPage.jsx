import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { getBlogPost } from '../lib/notion'
import NotionRenderer from '../components/NotionRenderer'
import { formatDate, TagList } from '../components/BlogMeta'

export default function BlogPostPage() {
  const { slug } = useParams()
  const { t, i18n } = useTranslation()
  const [post, setPost] = useState(null)
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    let ignore = false
    setStatus('loading')
    getBlogPost(slug)
      .then(data => {
        if (ignore) return
        if (!data) { setStatus('notfound'); return }
        setPost(data)
        setStatus('ok')
      })
      .catch(() => { if (!ignore) setStatus('error') })
    return () => { ignore = true }
  }, [slug])

  return (
    <div className="page">
      <section className="section">
        <div className="container">
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
                    <time dateTime={post.date} className="blog-post__date">
                      {t('blog.posted_on')}{' '}
                      {formatDate(post.date, i18n.language)}
                    </time>
                  )}
                  <TagList tags={post.tags} />
                </div>
              </header>

              <NotionRenderer blocks={post.blocks} />
            </article>
          )}
        </div>
      </section>
    </div>
  )
}
