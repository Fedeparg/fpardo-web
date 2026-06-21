'use client'

import Link from 'next/link'
import { useTranslation } from 'react-i18next'

export default function NotFoundView() {
  const { t } = useTranslation()

  return (
    <div className="page">
      <section className="section">
        <div className="container notfound">
          <h1 className="section-title">{t('notfound.title')}</h1>
          <p>{t('notfound.message')}</p>
          <Link href="/" className="btn btn-primary">{t('notfound.home')}</Link>
        </div>
      </section>
    </div>
  )
}
