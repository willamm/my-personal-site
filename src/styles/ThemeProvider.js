// ABOUTME: React context and provider for dark mode state management
// ABOUTME: Wraps styled-components ThemeProvider and exposes theme + toggle function

import React, { createContext, useContext, useEffect, useState } from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './theme'

const ThemeContext = createContext({
  isDark: false,
  toggleDarkMode: () => {},
})

export function useThemeContext() {
  return useContext(ThemeContext)
}

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const dataTheme =
      typeof window !== 'undefined'
        ? document.documentElement.getAttribute('data-theme')
        : null
    if (dataTheme === 'dark') {
      setIsDark(true)
      syncHtmlStyles(true)
    } else if (dataTheme === 'light') {
      setIsDark(false)
      syncHtmlStyles(false)
    } else {
      const saved = typeof window !== 'undefined' ? localStorage.getItem('theme') : null
      if (saved === 'dark') {
        setIsDark(true)
        syncHtmlStyles(true)
      } else if (saved === 'light') {
        setIsDark(false)
        syncHtmlStyles(false)
      } else {
        const prefersDark =
          typeof window !== 'undefined' &&
          window.matchMedia('(prefers-color-scheme: dark)').matches
        setIsDark(prefersDark)
        syncHtmlStyles(prefersDark)
      }
    }

    // Clear inline styles after hydration so CSS custom properties take over
    const html = document.documentElement
    const body = document.body
    html.style.backgroundColor = ''
    html.style.color = ''
    if (body) {
      body.style.backgroundColor = ''
      body.style.color = ''
    }
  }, [])

  const toggleDarkMode = () => {
    setIsDark((prev) => {
      const next = !prev
      if (typeof window !== 'undefined') {
        localStorage.setItem('theme', next ? 'dark' : 'light')
        document.documentElement.setAttribute('data-theme', next ? 'dark' : 'light')
        syncHtmlStyles(next)
      }
      return next
    })
  }

  const theme = isDark ? darkTheme : lightTheme

  return (
    <ThemeContext.Provider value={{ isDark, toggleDarkMode }}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  )
}

function syncHtmlStyles(isDark) {
  if (typeof window === 'undefined') return
  const bg = isDark ? '#0f172a' : '#ffffff'
  const text = isDark ? '#f8fafc' : '#0f172a'
  const html = document.documentElement
  const body = document.body
  html.style.backgroundColor = bg
  html.style.color = text
  if (body) {
    body.style.backgroundColor = bg
    body.style.color = text
  }
}
