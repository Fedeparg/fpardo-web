'use client'

import { useEffect } from 'react'
import { I18nextProvider } from 'react-i18next'
import i18n from '../i18n.js'

export default function Providers({ children }) {
  useEffect(() => {
    const saved = localStorage.getItem('lang')
    if (saved && saved !== i18n.language) {
      i18n.changeLanguage(saved)
    }
    document.documentElement.lang = i18n.language
  }, [])

  useEffect(() => {
    const onChange = lng => { document.documentElement.lang = lng }
    i18n.on('languageChanged', onChange)
    return () => i18n.off('languageChanged', onChange)
  }, [])

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
}
