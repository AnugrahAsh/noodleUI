"use client"

import { useState, useEffect } from "react"
import {
  Moon,
  Sun,
  Github,
  Search,
  Menu,
  X,
  ChevronRight,
  Copy,
  Check,
  Sparkles,
  Layers,
  ArrowRight,
  ChevronDown,
  Grid,
  List,
  Book,
  Palette,
  Zap,
  Code,
  Package,
  Settings,
  MessageSquare,
} from "lucide-react"
import { allComponents } from "../data/components"
import { ComponentBrowser } from "../Components/ComponentBrowser"

const Documentation = () => {
  const [darkMode, setDarkMode] = useState(true)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [activeSection, setActiveSection] = useState("introduction")
  const [copied, setCopied] = useState("")
  const [expandedSections, setExpandedSections] = useState(["getting-started", "components", "chat-interfaces"])
  const [activeComponent, setActiveComponent] = useState(null)
  const [selectedVariant, setSelectedVariant] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [viewMode, setViewMode] = useState("grid")
  const [currentComponentIndex, setCurrentComponentIndex] = useState(0)

  const toggleTheme = () => setDarkMode(!darkMode)

  const toggleSection = (section) => {
    setExpandedSections((prev) => (prev.includes(section) ? prev.filter((s) => s !== section) : [...prev, section]))
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        setSearchOpen(true)
      }
      if (e.key === "Escape") {
        setSearchOpen(false)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  const copyCode = async (code, id) => {
    await navigator.clipboard.writeText(code)
    setCopied(id)
    setTimeout(() => setCopied(""), 2000)
  }

  const categories = ["all", "buttons", "cards", "forms", "navbars", "modals", "chatbots", "charts"]

  const filteredComponents = allComponents.filter(
    (component) => selectedCategory === "all" || component.category === selectedCategory,
  )

  const sidebarItems = [
    {
      id: "getting-started",
      title: "Getting Started",
      icon: Book,
      items: [
        { id: "introduction", title: "Introduction", type: "page" },
        { id: "installation", title: "Installation", type: "page" },
        { id: "quick-start", title: "Quick Start", type: "page" },
        { id: "theming", title: "Theming", type: "page" },
        { id: "dark-mode", title: "Dark Mode", type: "page" },
        { id: "cli", title: "CLI", type: "page" },
        { id: "typescript", title: "TypeScript", type: "page" },
      ],
    },
    {
      id: "components",
      title: "Components",
      icon: Package,
      items: [
        { id: "buttons", title: "Buttons", type: "category" },
        { id: "cards", title: "Cards", type: "category" },
        { id: "forms", title: "Forms", type: "category" },
        { id: "navbars", title: "Navigation", type: "category" },
        { id: "modals", title: "Modals", type: "category" },
        { id: "charts", title: "Charts", type: "category" },
      ],
    },
    {
      id: "chat-interfaces",
      title: "Chat Interfaces",
      icon: MessageSquare,
      items: [
        { id: "chatbots", title: "Chat Components", type: "category" },
        { id: "chat-examples", title: "Chat Examples", type: "page" },
        { id: "ai-integration", title: "AI Integration", type: "page" },
      ],
    },
    {
      id: "customization",
      title: "Customization",
      icon: Palette,
      items: [
        { id: "styling", title: "Custom Styling", type: "page" },
        { id: "variants", title: "Creating Variants", type: "page" },
        { id: "animations", title: "Animations", type: "page" },
      ],
    },
  ]

  const handleSidebarClick = (item) => {
    if (item.type === "category") {
      setActiveComponent("components")
      setSelectedCategory(item.id)
      setActiveSection("components")
    } else {
      setActiveSection(item.id)
      setActiveComponent(null)
    }
    setSidebarOpen(false)
  }

  const renderContent = () => {
    if (activeComponent === "components") {
      return (
        <div className="space-y-8">
          {/* Components Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                {selectedCategory === "all"
                  ? "All Components"
                  : selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                {selectedCategory === "all"
                  ? "Explore our complete collection of UI components"
                  : `Beautiful ${selectedCategory} components with multiple variants`}
              </p>
            </div>

            <div className="flex items-center gap-3">
              {/* Category Filter */}
              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="appearance-none bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category === "all" ? "All Categories" : category.charAt(0).toUpperCase() + category.slice(1)}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center border border-gray-200 dark:border-gray-700 rounded-lg p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-1.5 rounded-md transition-colors ${
                    viewMode === "grid"
                      ? "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                      : "text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                  }`}
                >
                  <Grid size={16} />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-1.5 rounded-md transition-colors ${
                    viewMode === "list"
                      ? "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                      : "text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                  }`}
                >
                  <List size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Component Browser */}
          {filteredComponents.length > 0 ? (
            <ComponentBrowser
              components={filteredComponents}
              currentIndex={currentComponentIndex}
              onIndexChange={setCurrentComponentIndex}
              viewMode={viewMode}
            />
          ) : (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-6 h-6 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">No components found</h3>
              <p className="text-gray-500 dark:text-gray-400">Try selecting a different category.</p>
            </div>
          )}
        </div>
      )
    }

    // Content for different sections
    switch (activeSection) {
      case "introduction":
        return (
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Introduction</h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Beautiful, accessible React components for modern web applications and chat interfaces.
              </p>
            </div>

            {/* Hero Card */}
            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Welcome to NoodleUI</h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    A modern React component library focused on chat interfaces and conversational UI. Built with
                    Tailwind CSS and designed for the future of human-AI interaction.
                  </p>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Features</h2>

              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    icon: Zap,
                    title: "Beautiful Design",
                    description: "Carefully crafted components with modern aesthetics.",
                  },
                  {
                    icon: Code,
                    title: "TypeScript Support",
                    description: "Built with TypeScript for excellent developer experience.",
                  },
                  {
                    icon: MessageSquare,
                    title: "Chat-First",
                    description: "Specialized components for conversational interfaces.",
                  },
                  {
                    icon: Settings,
                    title: "Accessible",
                    description: "Built with accessibility in mind from the ground up.",
                  },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <feature.icon className="w-5 h-5 text-blue-500" />
                      <h3 className="font-medium text-gray-900 dark:text-white">{feature.title}</h3>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Next Steps */}
            <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Next Steps</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Ready to start building? Explore our component library.
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => {
                    setActiveComponent("components")
                    setSelectedCategory("all")
                  }}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-lg text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
                >
                  <span>Browse Components</span>
                  <ArrowRight size={14} />
                </button>
                <a
                  href="https://github.com/AnugrahAsh/noodleUI.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  <Github size={14} />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
        )

      case "installation":
        return (
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Installation</h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Get started with NoodleUI in your React project.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Package Manager</h2>

                <div className="space-y-4">
                  <div className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden">
                    <div className="flex items-center justify-between px-4 py-3 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">npm</span>
                      <button
                        onClick={() => copyCode("npm install noodleui", "npm")}
                        className="flex items-center gap-2 px-2 py-1 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                      >
                        {copied === "npm" ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
                        {copied === "npm" ? "Copied" : "Copy"}
                      </button>
                    </div>
                    <div className="p-4 bg-gray-900 text-gray-100">
                      <code className="text-sm">npm install noodleui</code>
                    </div>
                  </div>

                  <div className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden">
                    <div className="flex items-center justify-between px-4 py-3 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">yarn</span>
                      <button
                        onClick={() => copyCode("yarn add noodleui", "yarn")}
                        className="flex items-center gap-2 px-2 py-1 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                      >
                        {copied === "yarn" ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
                        {copied === "yarn" ? "Copied" : "Copy"}
                      </button>
                    </div>
                    <div className="p-4 bg-gray-900 text-gray-100">
                      <code className="text-sm">yarn add noodleui</code>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Setup</h2>

                <div className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-3 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Import CSS</span>
                    <button
                      onClick={() => copyCode("import 'noodleui/dist/index.css'", "css")}
                      className="flex items-center gap-2 px-2 py-1 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                    >
                      {copied === "css" ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
                      {copied === "css" ? "Copied" : "Copy"}
                    </button>
                  </div>
                  <div className="p-4 bg-gray-900 text-gray-100">
                    <code className="text-sm">import 'noodleui/dist/index.css'</code>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )

      case "quick-start":
        return (
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Quick Start</h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">Get up and running with NoodleUI in minutes.</p>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Basic Usage</h2>

                <div className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-3 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">React Component</span>
                    <button
                      onClick={() =>
                        copyCode(
                          `import { Button, Card } from 'noodleui'

function App() {
  return (
    <Card>
      <h1>Hello NoodleUI!</h1>
      <Button variant="primary">
        Get Started
      </Button>
    </Card>
  )
}`,
                          "basic",
                        )
                      }
                      className="flex items-center gap-2 px-2 py-1 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                    >
                      {copied === "basic" ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
                      {copied === "basic" ? "Copied" : "Copy"}
                    </button>
                  </div>
                  <div className="p-4 bg-gray-900 text-gray-100">
                    <pre className="text-sm">
                      <code>{`import { Button, Card } from 'noodleui'

function App() {
  return (
    <Card>
      <h1>Hello NoodleUI!</h1>
      <Button variant="primary">
        Get Started
      </Button>
    </Card>
  )
}`}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )

      case "theming":
        return (
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Theming</h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Customize the look and feel of your components.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">CSS Variables</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  NoodleUI uses CSS variables for theming. You can override these in your CSS:
                </p>

                <div className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-3 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">CSS Variables</span>
                    <button
                      onClick={() =>
                        copyCode(
                          `:root {
  --noodle-primary: #3b82f6;
  --noodle-secondary: #6b7280;
  --noodle-success: #10b981;
  --noodle-danger: #ef4444;
  --noodle-warning: #f59e0b;
  --noodle-border-radius: 0.5rem;
}`,
                          "theme",
                        )
                      }
                      className="flex items-center gap-2 px-2 py-1 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                    >
                      {copied === "theme" ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
                      {copied === "theme" ? "Copied" : "Copy"}
                    </button>
                  </div>
                  <div className="p-4 bg-gray-900 text-gray-100">
                    <pre className="text-sm">
                      <code>{`:root {
  --noodle-primary: #3b82f6;
  --noodle-secondary: #6b7280;
  --noodle-success: #10b981;
  --noodle-danger: #ef4444;
  --noodle-warning: #f59e0b;
  --noodle-border-radius: 0.5rem;
}`}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )

      case "dark-mode":
        return (
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Dark Mode</h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Built-in dark mode support with automatic theme switching.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Automatic Detection</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  NoodleUI automatically detects your system's dark mode preference and applies the appropriate theme.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Manual Toggle</h2>

                <div className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-3 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Theme Toggle</span>
                    <button
                      onClick={() =>
                        copyCode(
                          `import { ThemeProvider, useTheme } from 'noodleui'

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  
  return (
    <button onClick={toggleTheme}>
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  )
}`,
                          "toggle",
                        )
                      }
                      className="flex items-center gap-2 px-2 py-1 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                    >
                      {copied === "toggle" ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
                      {copied === "toggle" ? "Copied" : "Copy"}
                    </button>
                  </div>
                  <div className="p-4 bg-gray-900 text-gray-100">
                    <pre className="text-sm">
                      <code>{`import { ThemeProvider, useTheme } from 'noodleui'

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  
  return (
    <button onClick={toggleTheme}>
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  )
}`}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )

      case "cli":
        return (
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">CLI</h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Command line interface for scaffolding and managing NoodleUI projects.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Installation</h2>

                <div className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-3 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Global Install</span>
                    <button
                      onClick={() => copyCode("npm install -g @noodleui/cli", "cli-install")}
                      className="flex items-center gap-2 px-2 py-1 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                    >
                      {copied === "cli-install" ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
                      {copied === "cli-install" ? "Copied" : "Copy"}
                    </button>
                  </div>
                  <div className="p-4 bg-gray-900 text-gray-100">
                    <code className="text-sm">npm install -g @noodleui/cli</code>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Commands</h2>

                <div className="space-y-4">
                  <div className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden">
                    <div className="px-4 py-3 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Create new project</span>
                    </div>
                    <div className="p-4 bg-gray-900 text-gray-100">
                      <code className="text-sm">noodleui create my-app</code>
                    </div>
                  </div>

                  <div className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden">
                    <div className="px-4 py-3 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Add component</span>
                    </div>
                    <div className="p-4 bg-gray-900 text-gray-100">
                      <code className="text-sm">noodleui add button</code>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )

      case "typescript":
        return (
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">TypeScript</h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Full TypeScript support with comprehensive type definitions.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Type Definitions</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  All components come with complete TypeScript definitions for better development experience.
                </p>

                <div className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-3 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Button Props</span>
                    <button
                      onClick={() =>
                        copyCode(
                          `interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  loading?: boolean
  children: React.ReactNode
  onClick?: () => void
}`,
                          "types",
                        )
                      }
                      className="flex items-center gap-2 px-2 py-1 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                    >
                      {copied === "types" ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
                      {copied === "types" ? "Copied" : "Copy"}
                    </button>
                  </div>
                  <div className="p-4 bg-gray-900 text-gray-100">
                    <pre className="text-sm">
                      <code>{`interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  loading?: boolean
  children: React.ReactNode
  onClick?: () => void
}`}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )

      case "chat-examples":
        return (
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Chat Examples</h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Real-world examples of chat interfaces built with NoodleUI.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Customer Support Chat</h2>

                <div className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-3 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Support Chat Component</span>
                    <button
                      onClick={() =>
                        copyCode(
                          `import { ChatBubble, ChatInput, Avatar } from 'noodleui'

function SupportChat() {
  return (
    <div className="chat-container">
      <ChatBubble 
        avatar={<Avatar src="/support.jpg" />}
        message="Hi! How can I help you today?"
        timestamp="2:30 PM"
        sender="support"
      />
      <ChatInput 
        placeholder="Type your message..."
        onSend={handleSend}
      />
    </div>
  )
}`,
                          "support-chat",
                        )
                      }
                      className="flex items-center gap-2 px-2 py-1 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                    >
                      {copied === "support-chat" ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
                      {copied === "support-chat" ? "Copied" : "Copy"}
                    </button>
                  </div>
                  <div className="p-4 bg-gray-900 text-gray-100">
                    <pre className="text-sm">
                      <code>{`import { ChatBubble, ChatInput, Avatar } from 'noodleui'

function SupportChat() {
  return (
    <div className="chat-container">
      <ChatBubble 
        avatar={<Avatar src="/support.jpg" />}
        message="Hi! How can I help you today?"
        timestamp="2:30 PM"
        sender="support"
      />
      <ChatInput 
        placeholder="Type your message..."
        onSend={handleSend}
      />
    </div>
  )
}`}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )

      case "ai-integration":
        return (
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">AI Integration</h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Integrate AI models and chatbots with NoodleUI components.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">OpenAI Integration</h2>

                <div className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-3 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">AI Chat Bot</span>
                    <button
                      onClick={() =>
                        copyCode(
                          `import { ChatBot, useAI } from 'noodleui'

function AIChatBot() {
  const { sendMessage, messages, loading } = useAI({
    apiKey: process.env.OPENAI_API_KEY,
    model: 'gpt-3.5-turbo'
  })

  return (
    <ChatBot
      messages={messages}
      onSend={sendMessage}
      loading={loading}
      placeholder="Ask me anything..."
    />
  )
}`,
                          "ai-chat",
                        )
                      }
                      className="flex items-center gap-2 px-2 py-1 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                    >
                      {copied === "ai-chat" ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
                      {copied === "ai-chat" ? "Copied" : "Copy"}
                    </button>
                  </div>
                  <div className="p-4 bg-gray-900 text-gray-100">
                    <pre className="text-sm">
                      <code>{`import { ChatBot, useAI } from 'noodleui'

function AIChatBot() {
  const { sendMessage, messages, loading } = useAI({
    apiKey: process.env.OPENAI_API_KEY,
    model: 'gpt-3.5-turbo'
  })

  return (
    <ChatBot
      messages={messages}
      onSend={sendMessage}
      loading={loading}
      placeholder="Ask me anything..."
    />
  )
}`}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )

      case "styling":
        return (
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Custom Styling</h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Learn how to customize and style NoodleUI components.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">CSS Classes</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">Override default styles using CSS classes:</p>

                <div className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-3 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Custom Button</span>
                    <button
                      onClick={() =>
                        copyCode(
                          `.custom-button {
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  border: none;
  border-radius: 25px;
  padding: 12px 24px;
  color: white;
  font-weight: 600;
  transition: transform 0.2s;
}

.custom-button:hover {
  transform: translateY(-2px);
}`,
                          "custom-style",
                        )
                      }
                      className="flex items-center gap-2 px-2 py-1 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                    >
                      {copied === "custom-style" ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
                      {copied === "custom-style" ? "Copied" : "Copy"}
                    </button>
                  </div>
                  <div className="p-4 bg-gray-900 text-gray-100">
                    <pre className="text-sm">
                      <code>{`.custom-button {
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  border: none;
  border-radius: 25px;
  padding: 12px 24px;
  color: white;
  font-weight: 600;
  transition: transform 0.2s;
}

.custom-button:hover {
  transform: translateY(-2px);
}`}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )

      case "variants":
        return (
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Creating Variants</h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">Learn how to create custom component variants.</p>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Button Variants</h2>

                <div className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-3 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Custom Variant</span>
                    <button
                      onClick={() =>
                        copyCode(
                          `const buttonVariants = {
  neon: 'bg-gradient-to-r from-pink-500 to-violet-500 text-white shadow-lg shadow-pink-500/25',
  glass: 'bg-white/10 backdrop-blur-md border border-white/20 text-white',
  retro: 'bg-yellow-400 text-black font-bold border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
}

<Button variant="neon">Neon Button</Button>`,
                          "variants",
                        )
                      }
                      className="flex items-center gap-2 px-2 py-1 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                    >
                      {copied === "variants" ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
                      {copied === "variants" ? "Copied" : "Copy"}
                    </button>
                  </div>
                  <div className="p-4 bg-gray-900 text-gray-100">
                    <pre className="text-sm">
                      <code>{`const buttonVariants = {
  neon: 'bg-gradient-to-r from-pink-500 to-violet-500 text-white shadow-lg shadow-pink-500/25',
  glass: 'bg-white/10 backdrop-blur-md border border-white/20 text-white',
  retro: 'bg-yellow-400 text-black font-bold border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
}

<Button variant="neon">Neon Button</Button>`}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )

      case "animations":
        return (
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Animations</h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Add smooth animations and transitions to your components.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">CSS Animations</h2>

                <div className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-3 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Bounce Animation</span>
                    <button
                      onClick={() =>
                        copyCode(
                          `@keyframes bounce {
  0%, 20%, 53%, 80%, 100% {
    transform: translate3d(0,0,0);
  }
  40%, 43% {
    transform: translate3d(0, -30px, 0);
  }
  70% {
    transform: translate3d(0, -15px, 0);
  }
  90% {
    transform: translate3d(0, -4px, 0);
  }
}

.bounce {
  animation: bounce 1s ease-in-out;
}`,
                          "animations",
                        )
                      }
                      className="flex items-center gap-2 px-2 py-1 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                    >
                      {copied === "animations" ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
                      {copied === "animations" ? "Copied" : "Copy"}
                    </button>
                  </div>
                  <div className="p-4 bg-gray-900 text-gray-100">
                    <pre className="text-sm">
                      <code>{`@keyframes bounce {
  0%, 20%, 53%, 80%, 100% {
    transform: translate3d(0,0,0);
  }
  40%, 43% {
    transform: translate3d(0, -30px, 0);
  }
  70% {
    transform: translate3d(0, -15px, 0);
  }
  90% {
    transform: translate3d(0, -4px, 0);
  }
}

.bounce {
  animation: bounce 1s ease-in-out;
}`}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )

      default:
        return (
          <div className="text-center py-12">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Page Not Found</h1>
            <p className="text-gray-600 dark:text-gray-400">The requested documentation page could not be found.</p>
          </div>
        )
    }
  }

  return (
    <div className={`${darkMode ? "dark" : ""} min-h-screen transition-all duration-500`}>
      <div className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 min-h-screen">
        {/* Enhanced Navbar */}
        <header className="fixed top-6 left-1/2 transform -translate-x-1/2 flex justify-between items-center px-8 py-4 w-[95%] max-w-7xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl shadow-2xl z-50 border border-gray-200/50 dark:border-gray-700/50">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
              <Layers className="w-4 h-4 text-white" />
            </div>
            <h1 className="text-2xl font-light tracking-tight text-gray-900 dark:text-white">
              Noodle<span className="text-blue-400 font-medium">UI</span>
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setSearchOpen(true)}
              className="hidden md:flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-xl text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200"
            >
              <Search size={14} />
              <span>Search docs...</span>
              <kbd className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded text-xs">⌘K</kbd>
            </button>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setSearchOpen(true)}
                className="md:hidden p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
              >
                <Search size={16} />
              </button>

              <a
                href="https://github.com/AnugrahAsh/noodleUI.git"
                target="_blank"
                className="p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 hover:scale-105"
                rel="noopener noreferrer"
              >
                <Github size={16} />
              </a>

              <button
                onClick={toggleTheme}
                className="rounded-xl p-2.5 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 hover:scale-105"
              >
                {darkMode ? <Sun size={16} /> : <Moon size={16} />}
              </button>

              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
              >
                <Menu size={16} />
              </button>
            </div>
          </div>
        </header>

        {/* Search Modal */}
        {searchOpen && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center pt-32">
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 w-full max-w-2xl mx-4 animate-in slide-in-from-top-4 duration-200">
              <div className="flex items-center gap-3 p-4 border-b border-gray-200 dark:border-gray-700">
                <Search className="w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search documentation..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 bg-transparent outline-none text-gray-900 dark:text-gray-100 placeholder-gray-500"
                  autoFocus
                />
                <button
                  onClick={() => setSearchOpen(false)}
                  className="p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <X size={16} />
                </button>
              </div>
              <div className="p-4 max-h-96 overflow-y-auto">
                <div className="space-y-2">
                  {allComponents
                    .filter((component) => component.title.toLowerCase().includes(searchQuery.toLowerCase()))
                    .map((component) => (
                      <button
                        key={component.id}
                        onClick={() => {
                          setActiveComponent("components")
                          setSelectedCategory(component.category)
                          setCurrentComponentIndex(allComponents.indexOf(component))
                          setSearchOpen(false)
                        }}
                        className="w-full text-left p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                      >
                        <div className="font-medium text-gray-900 dark:text-gray-100">{component.title}</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">{component.description}</div>
                      </button>
                    ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Main Layout */}
        <div className="pt-32">
          <div className="container mx-auto max-w-7xl flex">
            {/* Sidebar */}
            <aside
              className={`fixed lg:sticky top-32 left-0 h-[calc(100vh-8rem)] w-64 bg-white dark:bg-gray-950 border-r border-gray-200 dark:border-gray-800 z-40 transform transition-transform duration-300 ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
            >
              <div className="p-6 h-full overflow-y-auto">
                <div className="space-y-1">
                  {sidebarItems.map((section) => (
                    <div key={section.id}>
                      <button
                        onClick={() => toggleSection(section.id)}
                        className="flex items-center justify-between w-full px-2 py-1.5 text-sm font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                      >
                        <div className="flex items-center gap-2">
                          <section.icon size={16} />
                          <span>{section.title}</span>
                        </div>
                        <ChevronDown
                          size={14}
                          className={`transform transition-transform ${expandedSections.includes(section.id) ? "rotate-180" : ""}`}
                        />
                      </button>

                      {expandedSections.includes(section.id) && (
                        <div className="ml-6 mt-1 space-y-0.5">
                          {section.items.map((item) => (
                            <button
                              key={item.id}
                              onClick={() => handleSidebarClick(item)}
                              className={`w-full text-left px-2 py-1.5 text-sm rounded-md transition-colors ${
                                (activeSection === item.id) ||
                                (activeComponent === "components" && selectedCategory === item.id)
                                  ? "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 font-medium"
                                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                              }`}
                            >
                              {item.title}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </aside>

            {/* Mobile Sidebar Overlay */}
            {sidebarOpen && (
              <div className="fixed inset-0 bg-black/50 z-30 lg:hidden" onClick={() => setSidebarOpen(false)} />
            )}

            {/* Main Content */}
            <main className="flex-1 lg:ml-64 min-w-0">
              <div className="max-w-6xl mx-auto px-6 py-8">
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-8">
                  <span>Docs</span>
                  <ChevronRight size={14} />
                  <span>{activeComponent === "components" ? "Components" : "Getting Started"}</span>
                  {activeComponent === "components" && selectedCategory !== "all" && (
                    <>
                      <ChevronRight size={14} />
                      <span className="text-gray-900 dark:text-gray-100 capitalize">{selectedCategory}</span>
                    </>
                  )}
                </div>

                {/* Content */}
                {renderContent()}
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Documentation
