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
  Settings,
  MessageSquare,
  Wand2,
  Bot,
  Component,
  Paintbrush,
  Type,
  ImageIcon,
  Play,
  Copy,
  Check,
} from "lucide-react"
import { allComponents } from "../data/components"
import { ComponentBrowser } from "../Components/ComponentBrowser"

const Documentation = () => {
  // THEME STATE (independent, like Landing page)
  const [darkMode, setDarkMode] = useState(true)
  const toggleTheme = () => {
    setDarkMode((d) => !d)
    // Update localStorage and document class
    if (!darkMode) {
      localStorage.setItem("theme", "dark")
      document.documentElement.classList.add("dark")
      document.documentElement.style.colorScheme = "dark"
    } else {
      localStorage.setItem("theme", "light")
      document.documentElement.classList.remove("dark")
      document.documentElement.style.colorScheme = "light"
    }
  }

  useEffect(() => {
    // Initialize theme from localStorage or system preference
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setDarkMode(true)
      document.documentElement.classList.add("dark")
      document.documentElement.style.colorScheme = "dark"
    } else {
      setDarkMode(false)
      document.documentElement.classList.remove("dark")
      document.documentElement.style.colorScheme = "light"
    }
  }, [])

  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [activeSection, setActiveSection] = useState("introduction")
  const [copied, setCopied] = useState("")
  const [expandedSections, setExpandedSections] = useState([
    "getting-started",
    "premium-components",
    "chatbot-ui",
    "basic-components",
    "backgrounds",
    "text-animations",
  ])
  const [activeComponent, setActiveComponent] = useState(null)
  const [selectedVariant, setSelectedVariant] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [viewMode, setViewMode] = useState("grid")
  const [currentComponentIndex, setCurrentComponentIndex] = useState(0)

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

  const categories = [
    "all",
    "premium",
    "chatbots",
    "backgrounds",
    "text-animations",
    "buttons",
    "cards",
    "forms",
    "navbars",
    "modals",
    "charts",
    "loading",
    "avatars",
    "badges",
  ]

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
        { id: "adding-components", title: "Adding Custom Components", type: "page" },
        { id: "theming", title: "Theming", type: "page" },
        { id: "dark-mode", title: "Dark Mode", type: "page" },
        { id: "cli", title: "CLI", type: "page" },
        { id: "typescript", title: "TypeScript", type: "page" },
      ],
    },
    {
      id: "premium-components",
      title: "Premium Components",
      icon: Wand2,
      badge: "New",
      items: [
        { id: "premium", title: "All Premium", type: "category" },
        { id: "hero-sections", title: "Hero Sections", type: "page" },
        { id: "pricing-tables", title: "Pricing Tables", type: "page" },
        { id: "testimonials", title: "Testimonials", type: "page" },
        { id: "feature-sections", title: "Feature Sections", type: "page" },
        { id: "stats-sections", title: "Stats & Metrics", type: "page" },
        { id: "cta-sections", title: "Call to Action", type: "page" },
        { id: "team-sections", title: "Team Sections", type: "page" },
        { id: "gallery-sections", title: "Gallery & Portfolio", type: "page" },
      ],
    },
    {
      id: "chatbot-ui",
      title: "Chatbot UI",
      icon: Bot,
      badge: "Featured",
      items: [
        { id: "chatbots", title: "All Chatbots", type: "category" },
        { id: "ai-assistants", title: "AI Assistants", type: "page" },
        { id: "customer-support", title: "Customer Support", type: "page" },
        { id: "voice-chat", title: "Voice Chat", type: "page" },
        { id: "minimizable-chat", title: "Minimizable Chat", type: "page" },
        { id: "floating-chat", title: "Floating Chat", type: "page" },
        { id: "chat-widgets", title: "Chat Widgets", type: "page" },
      ],
    },
    {
      id: "backgrounds",
      title: "Backgrounds",
      icon: ImageIcon,
      badge: "Popular",
      items: [
        { id: "backgrounds", title: "All Backgrounds", type: "category" },
        { id: "gradient-bg", title: "Gradient Backgrounds", type: "page" },
        { id: "animated-bg", title: "Animated Backgrounds", type: "page" },
        { id: "particle-bg", title: "Particle Effects", type: "page" },
        { id: "geometric-bg", title: "Geometric Patterns", type: "page" },
        { id: "aurora-bg", title: "Aurora Effects", type: "page" },
        { id: "mesh-bg", title: "Mesh Gradients", type: "page" },
      ],
    },
    {
      id: "text-animations",
      title: "Text Animations",
      icon: Type,
      badge: "Hot",
      items: [
        { id: "text-animations", title: "All Text Animations", type: "category" },
        { id: "typewriter", title: "Typewriter Effect", type: "page" },
        { id: "slip-text", title: "Slip Text", type: "page" },
        { id: "glitch-text", title: "Glitch Effect", type: "page" },
        { id: "wave-text", title: "Wave Animation", type: "page" },
        { id: "gradient-text", title: "Gradient Text", type: "page" },
        { id: "morphing-text", title: "Morphing Text", type: "page" },
      ],
    },
    {
      id: "basic-components",
      title: "Basic Components",
      icon: Component,
      items: [
        { id: "buttons", title: "Buttons", type: "category" },
        { id: "cards", title: "Cards", type: "category" },
        { id: "forms", title: "Forms", type: "category" },
        { id: "navbars", title: "Navigation", type: "category" },
        { id: "modals", title: "Modals", type: "category" },
        { id: "charts", title: "Charts", type: "category" },
        { id: "loading", title: "Loading", type: "category" },
        { id: "avatars", title: "Avatars", type: "category" },
        { id: "badges", title: "Badges", type: "category" },
      ],
    },
    {
      id: "animations",
      title: "Animations",
      icon: Play,
      items: [
        { id: "micro-interactions", title: "Micro Interactions", type: "page" },
        { id: "page-transitions", title: "Page Transitions", type: "page" },
        { id: "hover-effects", title: "Hover Effects", type: "page" },
        { id: "loading-animations", title: "Loading Animations", type: "page" },
      ],
    },
    {
      id: "customization",
      title: "Customization",
      icon: Paintbrush,
      items: [
        { id: "styling", title: "Custom Styling", type: "page" },
        { id: "variants", title: "Creating Variants", type: "page" },
        { id: "themes", title: "Custom Themes", type: "page" },
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
                  : selectedCategory === "premium"
                    ? "Premium Components"
                    : selectedCategory === "chatbots"
                      ? "Chatbot UI Components"
                      : selectedCategory === "backgrounds"
                        ? "Background Components"
                        : selectedCategory === "text-animations"
                          ? "Text Animation Components"
                          : selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                {selectedCategory === "all"
                  ? "Explore our complete collection of UI components"
                  : selectedCategory === "premium"
                    ? "Beautiful, production-ready components with advanced animations"
                    : selectedCategory === "chatbots"
                      ? "Interactive chatbot interfaces with micro-interactions"
                      : selectedCategory === "backgrounds"
                        ? "Stunning background effects and patterns"
                        : selectedCategory === "text-animations"
                          ? "Dynamic text effects and animations"
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
                      {category === "all"
                        ? "All Categories"
                        : category === "premium"
                          ? "Premium Components"
                          : category === "chatbots"
                            ? "Chatbot UI"
                            : category === "text-animations"
                              ? "Text Animations"
                              : category.charAt(0).toUpperCase() + category.slice(1)}
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
          <div className="space-y-12">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Introduction</h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Beautiful, accessible React components for modern web applications and chat interfaces.
              </p>
            </div>

            {/* Hero Card */}
            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-8 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">Welcome to NoodleUI</h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg mb-4">
                    A modern React component library with five distinct categories: Premium components like ReactBits,
                    interactive chatbot UI components, stunning backgrounds, dynamic text animations, and essential
                    basic components. Built with Tailwind CSS and designed for the future of human-AI interaction.
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    NoodleUI provides 300+ carefully crafted components with built-in accessibility, dark mode support,
                    and micro-interactions that bring your interfaces to life.
                  </p>
                </div>
              </div>
            </div>

            {/* Component Tiers */}
            <section className="py-16">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-light mb-6">Five Categories of Excellence</h2>
                <p className="text-xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
                  From premium showcase components to animated backgrounds, we've got everything you need.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {/* Premium Components */}
                <div className="group p-8 border border-gray-200 dark:border-gray-800 rounded-3xl bg-gradient-to-br from-purple-500/5 to-transparent hover:from-purple-500/10 transition-all duration-300 hover:shadow-xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                      <Wand2 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Premium Components</h3>
                      <span className="text-xs bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 px-2 py-1 rounded-full">
                        Like ReactBits
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Beautiful, production-ready components with advanced animations, hero sections, pricing tables, and
                    feature showcases that make your site stand out.
                  </p>
                  <button
                    onClick={() => {
                      setActiveComponent("components")
                      setSelectedCategory("premium")
                    }}
                    className="text-purple-600 dark:text-purple-400 font-medium hover:underline"
                  >
                    Explore Premium →
                  </button>
                </div>

                {/* Chatbot UI */}
                <div className="group p-8 border border-gray-200 dark:border-gray-800 rounded-3xl bg-gradient-to-br from-blue-500/5 to-transparent hover:from-blue-500/10 transition-all duration-300 hover:shadow-xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                      <Bot className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Chatbot UI</h3>
                      <span className="text-xs bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 px-2 py-1 rounded-full">
                        Interactive
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Working chatbot interfaces with micro-interactions, minimize features, floating widgets, and AI
                    assistant designs. Just pass parameters and you're done.
                  </p>
                  <button
                    onClick={() => {
                      setActiveComponent("components")
                      setSelectedCategory("chatbots")
                    }}
                    className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
                  >
                    Explore Chatbots →
                  </button>
                </div>

                {/* Backgrounds */}
                <div className="group p-8 border border-gray-200 dark:border-gray-800 rounded-3xl bg-gradient-to-br from-emerald-500/5 to-transparent hover:from-emerald-500/10 transition-all duration-300 hover:shadow-xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
                      <ImageIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Backgrounds</h3>
                      <span className="text-xs bg-emerald-100 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 px-2 py-1 rounded-full">
                        Stunning
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Mesmerizing background effects including aurora, particle systems, geometric patterns, and animated
                    gradients that captivate your users.
                  </p>
                  <button
                    onClick={() => {
                      setActiveComponent("components")
                      setSelectedCategory("backgrounds")
                    }}
                    className="text-emerald-600 dark:text-emerald-400 font-medium hover:underline"
                  >
                    Explore Backgrounds →
                  </button>
                </div>

                {/* Text Animations */}
                <div className="group p-8 border border-gray-200 dark:border-gray-800 rounded-3xl bg-gradient-to-br from-orange-500/5 to-transparent hover:from-orange-500/10 transition-all duration-300 hover:shadow-xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                      <Type className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Text Animations</h3>
                      <span className="text-xs bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 px-2 py-1 rounded-full">
                        Dynamic
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Eye-catching text effects including typewriter, glitch, wave, morphing, and gradient animations that
                    bring your content to life.
                  </p>
                  <button
                    onClick={() => {
                      setActiveComponent("components")
                      setSelectedCategory("text-animations")
                    }}
                    className="text-orange-600 dark:text-orange-400 font-medium hover:underline"
                  >
                    Explore Text Animations →
                  </button>
                </div>

                {/* Basic Components */}
                <div className="group p-8 border border-gray-200 dark:border-gray-800 rounded-3xl bg-gradient-to-br from-green-500/5 to-transparent hover:from-green-500/10 transition-all duration-300 hover:shadow-xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                      <Component className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Basic Components</h3>
                      <span className="text-xs bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400 px-2 py-1 rounded-full">
                        Essential
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Essential UI building blocks - buttons, cards, forms, navigation, modals, and more. The foundation
                    of every great interface.
                  </p>
                  <button
                    onClick={() => {
                      setActiveComponent("components")
                      setSelectedCategory("buttons")
                    }}
                    className="text-green-600 dark:text-green-400 font-medium hover:underline"
                  >
                    Explore Basics →
                  </button>
                </div>
              </div>
            </section>

            {/* Features Grid */}
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">Why Choose NoodleUI?</h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: Zap,
                    title: "Lightning Fast",
                    description: "Optimized components with minimal bundle size and maximum performance.",
                    color: "yellow",
                  },
                  {
                    icon: Code,
                    title: "Developer Experience",
                    description: "Built with TypeScript, comprehensive docs, and excellent IntelliSense support.",
                    color: "blue",
                  },
                  {
                    icon: MessageSquare,
                    title: "Chat-First Design",
                    description: "Specialized components for conversational interfaces and AI interactions.",
                    color: "green",
                  },
                  {
                    icon: Settings,
                    title: "Fully Accessible",
                    description: "WCAG 2.1 compliant with keyboard navigation and screen reader support.",
                    color: "purple",
                  },
                  {
                    icon: Palette,
                    title: "Themeable",
                    description: "Extensive customization options with CSS variables and design tokens.",
                    color: "pink",
                  },
                  {
                    icon: Layers,
                    title: "Composable",
                    description: "Mix and match components to create unique interfaces for your needs.",
                    color: "indigo",
                  },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="group border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  >
                    <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8">
              {[
                { label: "Components", value: "300+" },
                { label: "Downloads", value: "100K+" },
                { label: "GitHub Stars", value: "5K+" },
                { label: "Contributors", value: "50+" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Next Steps */}
            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/10 dark:to-purple-900/10">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">Ready to Get Started?</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">
                Join thousands of developers building the future of conversational interfaces.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => {
                    setActiveComponent("components")
                    setSelectedCategory("premium")
                  }}
                  className="flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg text-sm font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                >
                  <span>Browse Premium Components</span>
                  <ArrowRight size={16} />
                </button>
                <a
                  href="https://github.com/AnugrahAsh/noodleUI.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                >
                  <Github size={16} />
                  <span>View on GitHub</span>
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

      default:
        return (
          <div className="text-center py-12">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Coming Soon</h1>
            <p className="text-gray-600 dark:text-gray-400">This section is under development.</p>
          </div>
        )
    }
  }

  return (
    <div
      className={`${darkMode ? "bg-black text-white" : "bg-white text-black"} transition-colors duration-500 min-h-screen`}
    >
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
              className={`fixed lg:sticky top-32 left-0 h-[calc(100vh-8rem)] w-72 bg-white dark:bg-gray-950 border-r border-gray-200 dark:border-gray-800 z-40 transform transition-transform duration-300 ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
            >
              <div className="p-6 h-full overflow-y-auto sidebar-scroll">
                <div className="space-y-2">
                  {sidebarItems.map((section) => (
                    <div key={section.id}>
                      <button
                        onClick={() => toggleSection(section.id)}
                        className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors group"
                      >
                        <div className="flex items-center gap-3">
                          <section.icon
                            size={16}
                            className="text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-100"
                          />
                          <span>{section.title}</span>
                          {section.badge && (
                            <span
                              className={`text-xs px-2 py-0.5 rounded-full ${
                                section.badge === "New"
                                  ? "bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400"
                                  : section.badge === "Featured"
                                    ? "bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                                    : section.badge === "Popular"
                                      ? "bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400"
                                      : section.badge === "Hot"
                                        ? "bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400"
                                        : "bg-gray-100 dark:bg-gray-900/20 text-gray-600 dark:text-gray-400"
                              }`}
                            >
                              {section.badge}
                            </span>
                          )}
                        </div>
                        <ChevronDown
                          size={14}
                          className={`transform transition-transform text-gray-400 ${expandedSections.includes(section.id) ? "rotate-180" : ""}`}
                        />
                      </button>

                      {expandedSections.includes(section.id) && (
                        <div className="ml-6 mt-1 space-y-1 border-l border-gray-200 dark:border-gray-800 pl-4">
                          {section.items.map((item) => (
                            <button
                              key={item.id}
                              onClick={() => handleSidebarClick(item)}
                              className={`w-full text-left px-3 py-2 text-sm rounded-lg transition-colors ${
                                (activeSection === item.id) ||
                                (activeComponent === "components" && selectedCategory === item.id)
                                  ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-medium border-l-2 border-blue-600 dark:border-blue-400 -ml-4 pl-6"
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
            <main className="flex-1 lg:ml-0 min-w-0">
              <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-8">
                  <span>Docs</span>
                  <ChevronRight size={14} />
                  <span>{activeComponent === "components" ? "Components" : "Getting Started"}</span>
                  {activeComponent === "components" && selectedCategory !== "all" && (
                    <>
                      <ChevronRight size={14} />
                      <span className="text-gray-900 dark:text-gray-100 capitalize">
                        {selectedCategory === "premium"
                          ? "Premium"
                          : selectedCategory === "chatbots"
                            ? "Chatbot UI"
                            : selectedCategory === "text-animations"
                              ? "Text Animations"
                              : selectedCategory}
                      </span>
                    </>
                  )}
                </div>

                {/* Content */}
                <div className="w-full">{renderContent()}</div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Documentation
