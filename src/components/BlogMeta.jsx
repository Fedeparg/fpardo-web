'use client'

import { useTranslation } from 'react-i18next'

const LOCALE_MAP = { en: 'en-GB', es: 'es-ES' }

export function formatDate(dateStr, language) {
  const locale = LOCALE_MAP[language] ?? 'en-GB'
  // Format in UTC so the server render and the client hydration agree
  // regardless of their respective timezones (the value is a date, not a time).
  return new Date(dateStr).toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  })
}

export function TagList({ tags }) {
  const { t } = useTranslation()
  if (!tags.length) return null
  return (
    <ul className="blog-card__tags" aria-label={t('blog.tags_label')}>
      {tags.map(tag => (
        <li key={tag} className="tag">{tag}</li>
      ))}
    </ul>
  )
}
