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

    root.classList.remove("light", "dark")

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"

      root.classList.add(systemTheme)
      return
    }

    root.classList.add(theme)
  }, [theme])

  const value = {
    theme,
    setTheme: (theme) => {
      localStorage.setItem(storageKey, theme)
      setTheme(theme)
    },
  }

  return React.createElement(ThemeProviderContext.Provider, { ...props, value }, children)
}

export const useTheme = () => {
  const context = React.useContext(ThemeProviderContext)

  if (context === undefined) throw new Error("useTheme must be used within a ThemeProvider")

  return context
}


