"use client"

import { useState } from "react"
import { Copy, Check, Loader } from "lucide-react"

const loadingVariants = [
  {
    id: "spinner",
    title: "Spinner",
    description: "Classic rotating spinner loader",
    component: () => (
      <div className="flex items-center justify-center p-8">
        <Loader className="w-8 h-8 animate-spin text-primary" />
      </div>
    ),
    code: `<Loader className="w-8 h-8 animate-spin text-primary" />`,
  },
  {
    id: "dots",
    title: "Bouncing Dots",
    description: "Three dots with staggered bounce animation",
    component: () => (
      <div className="flex items-center justify-center p-8">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-primary rounded-full animate-bounce" />
          <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0.1s" }} />
          <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
        </div>
      </div>
    ),
    code: `<div className="flex space-x-2">
  <div className="w-3 h-3 bg-primary rounded-full animate-bounce" />
  <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0.1s" }} />
  <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
</div>`,
  },
  {
    id: "pulse",
    title: "Pulse Loader",
    description: "Expanding circle with pulse effect",
    component: () => (
      <div className="flex items-center justify-center p-8">
        <div className="relative">
          <div className="w-8 h-8 bg-primary rounded-full animate-ping absolute" />
          <div className="w-8 h-8 bg-primary rounded-full" />
        </div>
      </div>
    ),
    code: `<div className="relative">
  <div className="w-8 h-8 bg-primary rounded-full animate-ping absolute" />
  <div className="w-8 h-8 bg-primary rounded-full" />
</div>`,
  },
  {
    id: "skeleton",
    title: "Skeleton Loader",
    description: "Content placeholder with shimmer effect",
    component: () => (
      <div className="w-full max-w-sm bg-card border border-border rounded-xl p-6">
        <div className="animate-pulse">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-12 h-12 bg-muted rounded-full" />
            <div className="space-y-2 flex-1">
              <div className="h-4 bg-muted rounded w-3/4" />
              <div className="h-3 bg-muted rounded w-1/2" />
            </div>
          </div>
          <div className="space-y-3">
            <div className="h-4 bg-muted rounded" />
            <div className="h-4 bg-muted rounded w-5/6" />
            <div className="h-4 bg-muted rounded w-4/6" />
          </div>
        </div>
      </div>
    ),
    code: `<div className="animate-pulse">
  <div className="flex items-center space-x-4 mb-4">
    <div className="w-12 h-12 bg-muted rounded-full" />
    <div className="space-y-2 flex-1">
      <div className="h-4 bg-muted rounded w-3/4" />
      <div className="h-3 bg-muted rounded w-1/2" />
    </div>
  </div>
  <div className="space-y-3">
    <div className="h-4 bg-muted rounded" />
    <div className="h-4 bg-muted rounded w-5/6" />
    <div className="h-4 bg-muted rounded w-4/6" />
  </div>
</div>`,
  },
  {
    id: "progress",
    title: "Progress Bar",
    description: "Animated progress bar with percentage",
    component: () => {
      const [progress, setProgress] = useState(65)
      return (
        <div className="w-full max-w-sm space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Loading...</span>
            <span className="text-sm text-muted-foreground">{progress}%</span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div
              className="bg-primary h-2 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )
    },
    code: `<div className="w-full bg-muted rounded-full h-2">
  <div className="bg-primary h-2 rounded-full transition-all duration-500" style={{ width: \`\${progress}%\` }} />
</div>`,
  },
  {
    id: "bars",
    title: "Loading Bars",
    description: "Multiple bars with wave animation",
    component: () => (
      <div className="flex items-center justify-center p-8">
        <div className="flex space-x-1">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-1 h-8 bg-primary rounded-full animate-pulse"
              style={{
                animationDelay: `${i * 0.1}s`,
                animationDuration: "1s",
              }}
            />
          ))}
        </div>
      </div>
    ),
    code: `<div className="flex space-x-1">
  {[...Array(5)].map((_, i) => (
    <div key={i} className="w-1 h-8 bg-primary rounded-full animate-pulse" style={{ animationDelay: \`\${i * 0.1}s\` }} />
  ))}
</div>`,
  },
]

export function LoadingComponents() {
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
        <h1 className="text-4xl font-bold mb-4">Loading</h1>
        <p className="text-xl text-muted-foreground">
          Loading states and skeleton components for better user experience.
        </p>
      </div>

      <div className="grid gap-8">
        {loadingVariants.map((variant) => (
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
              <div className="p-12 
bg-white dark:bg-transparent flex items-center justify-center">
                {variant.component()}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

