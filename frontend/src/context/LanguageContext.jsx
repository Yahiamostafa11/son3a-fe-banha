import { createContext, useContext, useState, useEffect } from 'react'
import { translations } from './translations'

const LanguageContext = createContext()

export const LanguageProvider = ({ children }) => {
  const [locale, setLocale] = useState(() => {
    return localStorage.getItem('bu_locale') || 'ar'
  })

  useEffect(() => {
    // Save to local storage
    localStorage.setItem('bu_locale', locale)
    // Dynamic document layout direction and language update
    document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = locale
  }, [locale])

  const t = (key) => {
    if (!translations[locale] || !translations[locale][key]) {
      // Fallback to key if not translated
      return key
    }
    return translations[locale][key]
  }

  const toggleLanguage = () => {
    setLocale((prev) => (prev === 'ar' ? 'en' : 'ar'))
  }

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
