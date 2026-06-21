import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locales/en.json'
import es from './locales/es.json'

// Initialise with a fixed default language so server and first client render
// match (no access to localStorage here). The persisted language is applied
// after mount in Providers to avoid hydration mismatches.
if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: { translation: en },
      es: { translation: es },
    },
  })
}

export default i18n
