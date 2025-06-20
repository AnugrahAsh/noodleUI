"use client"
import { useState, useEffect } from "react"
import { Moon, Sun, Github, Layers } from "lucide-react"


const Navbar = ({ darkMode, toggleTheme }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleScroll = () => setScrollY(window.scrollY)

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <>
      <header className="fixed top-6 left-1/2 transform -translate-x-1/2 flex justify-between items-center px-8 py-4 w-[95%] max-w-7xl bg-white/10 dark:bg-black/20 backdrop-blur-xl rounded-2xl shadow-2xl z-40 border border-white/10">
        <a href="/" className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
            <Layers className="w-4 h-4 text-white" />
          </div>
          <h1 className="text-2xl font-light tracking-tight">
            Noodle<span className="text-blue-400 font-medium">UI</span>
          </h1>
        </a>
        <div className="flex items-center gap-3">
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#features" className="hover:text-blue-400 transition-colors">
              Features
            </a>
            <a href="#examples" className="hover:text-blue-400 transition-colors">
              Examples
            </a>
            <a href="/docs" className="hover:text-blue-400 transition-colors">
              Docs
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/AnugrahAsh/noodleUI.git"
              target="_blank"
              className="p-2.5 rounded-xl border border-gray-600/30 hover:bg-gray-200/50 dark:hover:bg-gray-800/50 transition-all duration-200 hover:scale-105"
              rel="noopener noreferrer"
            >
              <Github size={16} />
            </a>
            <button
              onClick={toggleTheme}
              className="rounded-xl p-2.5 border border-gray-600/30 hover:bg-gray-200/50 dark:hover:bg-gray-800/50 transition-all duration-200 hover:scale-105"
            >
              {darkMode ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar
