"use client"
import { useState, useEffect } from "react"
import { Moon, Sun, Github, Layers, Menu, X, Star } from "lucide-react"
import { Link } from "react-router-dom"

const Navbar = ({ darkMode, toggleTheme }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [githubStars, setGithubStars] = useState(null)

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

  useEffect(() => {
    // Fetch GitHub stars
    const fetchGithubStars = async () => {
      try {
        const response = await fetch("https://api.github.com/repos/AnugrahAsh/noodleUI")
        const data = await response.json()
        setGithubStars(data.stargazers_count)
      } catch (error) {
        console.error("Failed to fetch GitHub stars:", error)
        setGithubStars("5K+") // Fallback
      }
    }

    fetchGithubStars()
  }, [])

  return (
    <>
      <header className="fixed top-6 left-1/2 transform -translate-x-1/2 flex justify-between items-center px-8 py-4 w-[95%] max-w-7xl bg-white/10 dark:bg-black/20 backdrop-blur-xl rounded-2xl shadow-2xl z-40 border border-white/10">
        <Link to="/" className="flex items-center gap-3">
  <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
    <Layers className="w-4 h-4 text-white" />
  </div>
  <h1 className="text-2xl font-light tracking-tight">
    Noodle<span className="text-blue-400 font-medium">UI</span>
  </h1>
</Link>


        <div className="flex items-center gap-3">
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#features" className="hover:text-blue-400 transition-colors">
              Features
            </a>
            <a href="#examples" className="hover:text-blue-400 transition-colors">
              Examples
            </a>
            <Link to="/docs" className="hover:text-blue-400 transition-colors">
              Docs
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="https://github.com/AnugrahAsh/noodleUI.git"
              target="_blank"
              className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl border border-gray-600/30 hover:bg-gray-200/50 dark:hover:bg-gray-800/50 transition-all duration-200 hover:scale-105"
              rel="noopener noreferrer"
            >
              <Github size={16} />
              <Star size={14} />
              <span className="text-sm">{githubStars || "..."}</span>
            </a>

            <a
              href="https://github.com/AnugrahAsh/noodleUI.git"
              target="_blank"
              className="sm:hidden p-2.5 rounded-xl border border-gray-600/30 hover:bg-gray-200/50 dark:hover:bg-gray-800/50 transition-all duration-200 hover:scale-105"
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

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 rounded-xl border border-gray-600/30 hover:bg-gray-200/50 dark:hover:bg-gray-800/50 transition-all duration-200"
            >
              {mobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed top-24 left-1/2 transform -translate-x-1/2 w-[90%] max-w-sm bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 p-6">
            <nav className="space-y-4">
              <a
                href="#features"
                className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#examples"
                className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Examples
              </a>
              <Link
                to="/docs"
                className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Docs
              </Link>
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <a
                  href="https://github.com/AnugrahAsh/noodleUI.git"
                  target="_blank"
                  className="flex items-center gap-2 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Github size={16} />
                  <Star size={14} />
                  <span>GitHub ({githubStars || "..."})</span>
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar


