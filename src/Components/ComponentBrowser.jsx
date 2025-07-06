"use client"

import { useState } from "react"
import {
  ChevronLeft,
  ChevronRight,
  Copy,
  Check,
  Code,
  Eye,
  Maximize2,
  Heart,
  ChevronDown,
  Search,
} from "lucide-react"

export const ComponentBrowser = ({ components, currentIndex, onIndexChange, viewMode }) => {
  const [showCode, setShowCode] = useState(false)
  const [copied, setCopied] = useState(false)
  const [favorites, setFavorites] = useState([])
  const [selectedVariant, setSelectedVariant] = useState(0)
  const [variantDropdownOpen, setVariantDropdownOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const currentComponent = components[currentIndex]

  const componentGroups = components.reduce((groups, component) => {
    const baseTitle = component.title.split(" ")[0]
    if (!groups[baseTitle]) {
      groups[baseTitle] = []
    }
    groups[baseTitle].push(component)
    return groups
  }, {})

  const currentGroup = currentComponent
    ? componentGroups[currentComponent.title.split(" ")[0]] || [currentComponent]
    : []

  const copyCode = async () => {
    if (currentComponent) {
      await navigator.clipboard.writeText(currentComponent.code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const toggleFavorite = (id) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]))
  }

  const nextComponent = () => {
    onIndexChange((currentIndex + 1) % components.length)
    setSelectedVariant(0)
  }

  const prevComponent = () => {
    onIndexChange(currentIndex === 0 ? components.length - 1 : currentIndex - 1)
    setSelectedVariant(0)
  }

  const filteredComponents = components.filter((component) => {
    const matchesSearch =
      component.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      component.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      component.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

    return matchesSearch
  })

  if (!currentComponent) return null

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search components..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-900"
          />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center justify-center sm:justify-start gap-4">
          <button
            onClick={prevComponent}
            disabled={components.length <= 1}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="text-center">
            <h2 className="text-xl font-semibold mb-1">{currentComponent.title}</h2>
            <p className="text-sm text-gray-500">
              {currentIndex + 1} of {components.length} components
            </p>
          </div>

          <button
            onClick={nextComponent}
            disabled={components.length <= 1}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        <div className="flex items-center justify-center gap-2">
          {currentGroup.length > 1 && (
            <div className="relative">
              <button
                onClick={() => setVariantDropdownOpen(!variantDropdownOpen)}
                className="flex items-center gap-2 px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                <span className="text-sm font-medium">
                  {currentGroup[selectedVariant]?.title || currentComponent.title}
                </span>
                <ChevronDown
                  size={14}
                  className={`transform transition-transform ${variantDropdownOpen ? "rotate-180" : ""}`}
                />
              </button>

              {variantDropdownOpen && (
                <div className="absolute top-full mt-2 right-0 w-64 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-10 animate-in slide-in-from-top-2 duration-200">
                  <div className="p-2">
                    {currentGroup.map((variant, index) => (
                      <button
                        key={variant.id}
                        onClick={() => {
                          setSelectedVariant(index)
                          onIndexChange(components.indexOf(variant))
                          setVariantDropdownOpen(false)
                        }}
                        className={`w-full text-left px-3 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors rounded-md ${
                          variant.id === currentComponent.id
                            ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                            : ""
                        }`}
                      >
                        <div className="font-medium">{variant.title}</div>
                        <div className="text-gray-500 dark:text-gray-400 text-xs truncate">{variant.description}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          <button
            onClick={() => toggleFavorite(currentComponent.id)}
            className={`p-2 rounded-lg transition-all duration-200 hover:scale-105 ${
              favorites.includes(currentComponent.id)
                ? "bg-red-50 dark:bg-red-900/20 text-red-500"
                : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
          >
            <Heart size={16} className={favorites.includes(currentComponent.id) ? "fill-current" : ""} />
          </button>

          <button
            onClick={() => setShowCode(!showCode)}
            className={`p-2 rounded-lg transition-all duration-200 hover:scale-105 ${
              showCode
                ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
          >
            <Code size={16} />
          </button>

          <button
            onClick={copyCode}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 hover:scale-105"
          >
            {copied ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
          </button>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
        <div className="flex items-center gap-1 px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-xs">
        </div>

        {currentComponent.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full text-xs"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-lg">
        <div className="p-4 border-b border-gray-200 dark:border-gray-800">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-medium mb-1">{currentComponent.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{currentComponent.description}</p>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                <Eye size={14} />
              </button>
              <button className="p-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                <Maximize2 size={14} />
              </button>
            </div>
          </div>
        </div>

        <div className="p-12 bg-gradient-to-br from-gray-50/50 to-gray-100/50 dark:from-gray-900/50 dark:to-gray-800/50 flex items-center justify-center min-h-[400px]">
          <div className="transform transition-all duration-300 hover:scale-105 flex items-center justify-center">
            {currentComponent.component()}
          </div>
        </div>

        {showCode && (
          <div className="border-t border-gray-200 dark:border-gray-800">
            <div className="p-4 bg-gray-900 text-gray-100">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium">Component Code</span>
                <button
                  onClick={copyCode}
                  className="flex items-center gap-2 px-3 py-1 bg-gray-800 hover:bg-gray-700 rounded-md text-sm transition-all duration-200 hover:scale-105"
                >
                  {copied ? <Check size={12} className="text-green-400" /> : <Copy size={12} />}
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>
              <pre className="text-sm overflow-x-auto">
                <code>{currentComponent.code}</code>
              </pre>
            </div>
          </div>
        )}
      </div>

      <div
        className={`grid gap-4 ${
          viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" : "grid-cols-1"
        }`}
      >
        {filteredComponents.map((component, index) => (
          <button
            key={component.id}
            onClick={() => onIndexChange(components.indexOf(component))}
            className={`p-4 rounded-lg border transition-all duration-200 text-left hover:scale-105 ${
              component.id === currentComponent.id
                ? "border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-900/20 shadow-lg"
                : "border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50"
            }`}
          >
            <div className="flex items-start justify-between mb-2">
              <h4 className="font-medium text-sm truncate flex-1">{component.title}</h4>
              <div className="flex items-center gap-1 ml-2">
              </div>
            </div>
            <p className="text-xs text-gray-500 line-clamp-2 mb-2">{component.description}</p>
            <div className="flex items-center justify-between">
              <div className="flex gap-1">
                {component.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </button>
        ))}
      </div>

      {filteredComponents.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="w-6 h-6 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">No components found</h3>
          <p className="text-gray-500 dark:text-gray-400">Try adjusting your search.</p>
        </div>
      )}
    </div>
  )
}
