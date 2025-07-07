"use client"

import { useState } from "react"
import { Heart, Loader, Check, Plus, Copy } from "lucide-react"

const buttonVariants = [
  {
    id: "primary",
    title: "Primary Button",
    description: "A primary action button with hover effects",
    component: () => (
      <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg transform">
        Primary Button
      </button>
    ),
    code: `<button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg transform">
  Primary Button
</button>`,
  },
  {
    id: "secondary",
    title: "Secondary Button",
    description: "A secondary action button with border",
    component: () => (
      <button className="px-6 py-3 border-2 border-gray-300 hover:border-gray-400 text-gray-700 dark:text-gray-300 rounded-lg font-medium transition-all duration-200 hover:scale-105 transform">
        Secondary Button
      </button>
    ),
    code: `<button className="px-6 py-3 border-2 border-gray-300 hover:border-gray-400 text-gray-700 dark:text-gray-300 rounded-lg font-medium transition-all duration-200 hover:scale-105 transform">
  Secondary Button
</button>`,
  },
  {
    id: "gradient",
    title: "Gradient Button",
    description: "A colorful gradient button",
    component: () => (
      <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-lg font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg transform">
        Gradient Button
      </button>
    ),
    code: `<button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-lg font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg transform">
  Gradient Button
</button>`,
  },
  {
    id: "outlined",
    title: "Outlined Button",
    description: "A button with outline style",
    component: () => (
      <button className="px-6 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-lg font-medium transition-all duration-200 hover:scale-105 transform">
        Outlined Button
      </button>
    ),
    code: `<button className="px-6 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-lg font-medium transition-all duration-200 hover:scale-105 transform">
  Outlined Button
</button>`,
  },
  {
    id: "ghost",
    title: "Ghost Button",
    description: "A subtle ghost button",
    component: () => (
      <button className="px-6 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-gray-100 dark:hover:bg-gray-800 rounded-lg font-medium transition-all duration-200 hover:scale-105 transform">
        Ghost Button
      </button>
    ),
    code: `<button className="px-6 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-gray-100 dark:hover:bg-gray-800 rounded-lg font-medium transition-all duration-200 hover:scale-105 transform">
  Ghost Button
</button>`,
  },
  {
    id: "icon",
    title: "Icon Button",
    description: "A circular button with icon",
    component: () => (
      <button className="p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all duration-200 hover:scale-110 hover:shadow-lg transform">
        <Heart size={20} />
      </button>
    ),
    code: `<button className="p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all duration-200 hover:scale-110 hover:shadow-lg transform">
  <Heart size={20} />
</button>`,
  },
  {
    id: "loading",
    title: "Loading Button",
    description: "A button with loading state",
    component: () => (
      <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium flex items-center gap-2 cursor-not-allowed opacity-75">
        <Loader className="animate-spin" size={16} />
        Loading...
      </button>
    ),
    code: `<button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium flex items-center gap-2 cursor-not-allowed opacity-75">
  <Loader className="animate-spin" size={16} />
  Loading...
</button>`,
  },
  {
    id: "success",
    title: "Success Button",
    description: "A success state button",
    component: () => (
      <button className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg transform flex items-center gap-2">
        <Check size={16} />
        Success
      </button>
    ),
    code: `<button className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg transform flex items-center gap-2">
  <Check size={16} />
  Success
</button>`,
  },
  {
    id: "danger",
    title: "Danger Button",
    description: "A danger/destructive action button",
    component: () => (
      <button className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg transform">
        Danger Button
      </button>
    ),
    code: `<button className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg transform">
  Danger Button
</button>`,
  },
  {
    id: "floating",
    title: "Floating Action Button",
    description: "A floating action button",
    component: () => (
      <button className="fixed bottom-6 right-6 p-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 transform">
        <Plus size={24} />
      </button>
    ),
    code: `<button className="fixed bottom-6 right-6 p-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 transform">
  <Plus size={24} />
</button>`,
  },
]

export function ButtonComponents() {
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
        <h1 className="text-4xl font-bold mb-4">Buttons</h1>
        <p className="text-xl text-muted-foreground">
          A collection of button components with different styles and states.
        </p>
      </div>

      <div className="grid gap-8">
        {buttonVariants.map((variant) => (
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

