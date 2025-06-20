"use client"

import { useState, useEffect } from "react"
import LandingPage from "./Pages/Landing"

export default function Home() {
  const [darkMode, setDarkMode] = useState(true)

  const toggleTheme = () => {
    setDarkMode((prev) => !prev)
  }

  useEffect(() => {
    // Apply theme to document
    if (darkMode) {
      document.documentElement.classList.add("dark")
      document.documentElement.style.colorScheme = "dark"
    } else {
      document.documentElement.classList.remove("dark")
      document.documentElement.style.colorScheme = "light"
    }
  }, [darkMode])

  return <LandingPage darkMode={darkMode} toggleTheme={toggleTheme} />
}
