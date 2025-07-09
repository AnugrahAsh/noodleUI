"use client"

import React from "react"

const initialState = {
  theme: "system",
  setTheme: () => null,
}

const ThemeProviderContext = React.createContext(initialState)

export function ThemeProvider({ children, defaultTheme = "system", storageKey = "noodleui-theme", ...props }) {
  const [theme, setTheme] = React.useState(
    () => (typeof window !== "undefined" && localStorage.getItem(storageKey)) || defaultTheme,
  )

  React.useEffect(() => {
    const root = window.document.documentElement
    const body = window.document.body

    root.classList.remove("light", "dark")

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"

      root.classList.add(systemTheme)

      // Force body background with !important to override any CSS classes
      if (systemTheme === "light") {
        body.style.setProperty("background-color", "#ffffff", "important")
        body.style.setProperty("color", "#1f2937", "important")
      } else {
        body.style.setProperty("background-color", "#0f172a", "important")
        body.style.setProperty("color", "#f8fafc", "important")
      }
      return
    }

    root.classList.add(theme)

    // Force body background with !important to override any CSS classes
    if (theme === "light") {
      body.style.setProperty("background-color", "#ffffff", "important")
      body.style.setProperty("color", "#1f2937", "important")
    } else if (theme === "dark") {
      body.style.setProperty("background-color", "#0f172a", "important")
      body.style.setProperty("color", "#f8fafc", "important")
    }
  }, [theme])

  const value = {
    theme,
    setTheme: (theme) => {
      localStorage.setItem(storageKey, theme)
      setTheme(theme)
    },
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = React.useContext(ThemeProviderContext)

  if (context === undefined) throw new Error("useTheme must be used within a ThemeProvider")

  return context
}
