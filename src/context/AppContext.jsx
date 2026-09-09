import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { translations } from '../i18n.js'

const AppContext = createContext(null)

function readStored(key, fallback) {
  try {
    return localStorage.getItem(key) || fallback
  } catch {
    return fallback
  }
}

export function AppProvider({ children }) {
  const [theme, setTheme] = useState(() => readStored('ags-theme', 'light'))
  const [lang, setLang] = useState(() => readStored('ags-lang', 'en'))

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    document.documentElement.lang = lang
    localStorage.setItem('ags-theme', theme)
  }, [theme])

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = 'ltr'
    localStorage.setItem('ags-lang', lang)
  }, [lang])

  const t = translations[lang] || translations.en

  const value = useMemo(
    () => ({
      theme,
      lang,
      t,
      toggleTheme: () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light')),
      setLang,
    }),
    [theme, lang, t],
  )

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used inside AppProvider')
  return ctx
}
