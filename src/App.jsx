import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import { Analytics } from "@vercel/analytics/next"
import LandingPage from './Components/LandingPage'
import Documentation from './Components/Documentation'

function App() {
  const [darkMode, setDarkMode] = useState(true)

  const toggleTheme = () => setDarkMode(!darkMode)

  // Apply theme to document element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage darkMode={darkMode} toggleTheme={toggleTheme} />} />
      <Route path="/docs" element={<Documentation darkMode={darkMode} toggleTheme={toggleTheme} />} />
    </Routes>
    </BrowserRouter>
    <Analytics />
    </>
  )
}

export default App