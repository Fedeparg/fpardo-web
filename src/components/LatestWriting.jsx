'use client'

import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { formatDate } from './BlogMeta.jsx'

// `posts` comes from the server page, already sliced. Rendering nothing at all
// beats rendering an empty section header with a "no posts" line under it.
function LatestWriting({ posts = [] }) {
  const { t, i18n } = useTranslation()

  if (posts.length === 0) return null

  return (
    <section className="section writing">
      <div className="container">
        <div className="writing-layout">
          <div className="writing-intro">
            <p className="strip-label">{t('home.writing_label')}</p>
            <p className="writing-intro__text">{t('home.writing_intro')}</p>
            <Link href="/blog" className="strip-link">{t('home.writing_all')}</Link>
          </div>

          <ul className="writing-list">
            {posts.map(post => (
              <li key={post.slug} className="writing-item">
                {post.date && (
                  <time dateTime={post.date} className="writing-item__date">
                    {formatDate(post.date, i18n.language)}
                  </time>
                )}
                <h3 className="writing-item__title">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                {post.excerpt && (
                  <p className="writing-item__excerpt">{post.excerpt}</p>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default LatestWriting
