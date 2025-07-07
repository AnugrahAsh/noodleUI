"use client"

import { useState } from "react"
import { TrendingUp, Bell, X, Copy, Check } from "lucide-react"

const cardVariants = [
  {
    id: "basic",
    title: "Basic Card",
    description: "A simple card component with shadow",
    component: () => (
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform max-w-sm">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Basic Card</h3>
        <p className="text-gray-600 dark:text-gray-400">
          This is a basic card component with hover effects and smooth transitions.
        </p>
      </div>
    ),
    code: `<div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform">
  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Basic Card</h3>
  <p className="text-gray-600 dark:text-gray-400">
    This is a basic card component with hover effects and smooth transitions.
  </p>
</div>`,
  },
  {
    id: "product",
    title: "Product Card",
    description: "A product showcase card",
    component: () => (
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform max-w-sm">
        <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500"></div>
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Product Card</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Beautiful product showcase card with image placeholder.
          </p>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-gray-900 dark:text-white">$99</span>
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-200 hover:scale-105 transform">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    ),
    code: `<div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform">
  <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500"></div>
  <div className="p-6">
    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Product Card</h3>
    <p className="text-gray-600 dark:text-gray-400 mb-4">Beautiful product showcase card with image placeholder.</p>
    <div className="flex items-center justify-between">
      <span className="text-2xl font-bold text-gray-900 dark:text-white">$99</span>
      <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-200 hover:scale-105 transform">
        Add to Cart
      </button>
    </div>
  </div>
</div>`,
  },
  {
    id: "profile",
    title: "Profile Card",
    description: "A user profile card",
    component: () => (
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform max-w-sm">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
            JD
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">John Doe</h3>
            <p className="text-gray-600 dark:text-gray-400">Software Engineer</p>
          </div>
        </div>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Passionate developer with 5+ years of experience in React and Node.js.
        </p>
        <div className="flex gap-2">
          <button className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-200 hover:scale-105 transform">
            Follow
          </button>
          <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 hover:scale-105 transform">
            Message
          </button>
        </div>
      </div>
    ),
    code: `<div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform">
  <div className="flex items-center gap-4 mb-4">
    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
      JD
    </div>
    <div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">John Doe</h3>
      <p className="text-gray-600 dark:text-gray-400">Software Engineer</p>
    </div>
  </div>
  <p className="text-gray-600 dark:text-gray-400 mb-4">
    Passionate developer with 5+ years of experience in React and Node.js.
  </p>
  <div className="flex gap-2">
    <button className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-200 hover:scale-105 transform">
      Follow
    </button>
    <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 hover:scale-105 transform">
      Message
    </button>
  </div>
</div>`,
  },
  {
    id: "stats",
    title: "Stats Card",
    description: "A statistics display card",
    component: () => (
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform max-w-sm">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Total Sales</h3>
          <TrendingUp className="text-green-500" size={24} />
        </div>
        <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">$12,345</div>
        <div className="flex items-center gap-2 text-sm">
          <span className="text-green-500 font-medium">+12.5%</span>
          <span className="text-gray-600 dark:text-gray-400">from last month</span>
        </div>
      </div>
    ),
    code: `<div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform">
  <div className="flex items-center justify-between mb-4">
    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Total Sales</h3>
    <TrendingUp className="text-green-500" size={24} />
  </div>
  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">$12,345</div>
  <div className="flex items-center gap-2 text-sm">
    <span className="text-green-500 font-medium">+12.5%</span>
    <span className="text-gray-600 dark:text-gray-400">from last month</span>
  </div>
</div>`,
  },
  {
    id: "notification",
    title: "Notification Card",
    description: "A notification message card",
    component: () => (
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform max-w-sm">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center">
            <Bell className="text-blue-600 dark:text-blue-400" size={16} />
          </div>
          <div className="flex-1">
            <h4 className="font-medium text-gray-900 dark:text-white">New Message</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">You have a new message from John Doe</p>
            <span className="text-xs text-gray-500 dark:text-gray-500">2 minutes ago</span>
          </div>
          <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
            <X size={16} />
          </button>
        </div>
      </div>
    ),
    code: `<div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform">
  <div className="flex items-start gap-3">
    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center">
      <Bell className="text-blue-600 dark:text-blue-400" size={16} />
    </div>
    <div className="flex-1">
      <h4 className="font-medium text-gray-900 dark:text-white">New Message</h4>
      <p className="text-sm text-gray-600 dark:text-gray-400">You have a new message from John Doe</p>
      <span className="text-xs text-gray-500 dark:text-gray-500">2 minutes ago</span>
    </div>
    <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
      <X size={16} />
    </button>
  </div>
</div>`,
  },
]

export function CardComponents() {
  const [copied, setCopied] = useState(null)
  const [showCode, setShowCode] = useState({})

  const copyCode = async (code, id) => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(id)
      setTimeout(() => setCopied(null), 2000)
    } catch (err) {
      console.error("Failed to copy: ", err)
    }
  }

  const toggleCode = (id) => {
    setShowCode((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Cards</h1>
        <p className="text-xl text-muted-foreground">
          A collection of card components for displaying content in containers.
        </p>
      </div>

      <div className="grid gap-8">
        {cardVariants.map((variant) => (
          <div key={variant.id} className="border border-border rounded-xl overflow-hidden">
            <div className="p-6 border-b border-border">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold">{variant.title}</h3>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => toggleCode(variant.id)}
                    className="px-3 py-1 text-sm bg-muted hover:bg-accent rounded-lg transition-colors"
                  >
                    {showCode[variant.id] ? "Show Preview" : "Show Code"}
                  </button>
                  {showCode[variant.id] && (
                    <button
                      onClick={() => copyCode(variant.code, variant.id)}
                      className="flex items-center gap-2 px-3 py-1 text-sm bg-muted hover:bg-accent rounded-lg transition-colors"
                    >
                      {copied === variant.id ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
                      {copied === variant.id ? "Copied!" : "Copy"}
                    </button>
                  )}
                </div>
              </div>
              <p className="text-muted-foreground">{variant.description}</p>
            </div>

            {showCode[variant.id] ? (
              <div className="p-4 bg-gray-900 text-gray-100">
                <pre className="text-sm overflow-x-auto">
                  <code>{variant.code}</code>
                </pre>
              </div>
            ) : (
              <div className="p-12 bg-gradient-to-br from-gray-50/50 to-gray-100/50 dark:from-gray-900/50 dark:to-gray-800/50 flex items-center justify-center">
                {variant.component()}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}


