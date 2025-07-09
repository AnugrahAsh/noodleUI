"use client"

import { useState } from "react"
import { Copy, Check, X, Star, Zap } from "lucide-react"

const badgeVariants = [
  {
    id: "basic",
    title: "Basic Badge",
    description: "Simple colored badge with text",
    component: () => (
      <div className="flex items-center gap-2">
        <span className="px-2 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">Primary</span>
        <span className="px-2 py-1 bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400 text-xs font-medium rounded-full">
          Success
        </span>
        <span className="px-2 py-1 bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400 text-xs font-medium rounded-full">
          Warning
        </span>
        <span className="px-2 py-1 bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400 text-xs font-medium rounded-full">
          Error
        </span>
      </div>
    ),
    code: `<span className="px-2 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
  Primary
</span>
<span className="px-2 py-1 bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400 text-xs font-medium rounded-full">
  Success
</span>`,
  },
  {
    id: "with-icon",
    title: "Badge with Icon",
    description: "Badge with leading icon",
    component: () => (
      <div className="flex items-center gap-2">
        <span className="px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400 text-xs font-medium rounded-full flex items-center gap-1">
          <Star size={12} />
          Featured
        </span>
        <span className="px-2 py-1 bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400 text-xs font-medium rounded-full flex items-center gap-1">
          <Zap size={12} />
          Premium
        </span>
      </div>
    ),
    code: `<span className="px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400 text-xs font-medium rounded-full flex items-center gap-1">
  <Star size={12} />
  Featured
</span>`,
  },
  {
    id: "dismissible",
    title: "Dismissible Badge",
    description: "Badge with close button",
    component: () => {
      const [badges, setBadges] = useState([
        { id: 1, text: "React", color: "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400" },
        {
          id: 2,
          text: "TypeScript",
          color: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/20 dark:text-indigo-400",
        },
        { id: 3, text: "Tailwind", color: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900/20 dark:text-cyan-400" },
      ])

      const removeBadge = (id) => {
        setBadges(badges.filter((badge) => badge.id !== id))
      }

      return (
        <div className="flex items-center gap-2 flex-wrap">
          {badges.map((badge) => (
            <span
              key={badge.id}
              className={`px-2 py-1 ${badge.color} text-xs font-medium rounded-full flex items-center gap-1`}
            >
              {badge.text}
              <button
                onClick={() => removeBadge(badge.id)}
                className="hover:bg-black/10 dark:hover:bg-white/10 rounded-full p-0.5 transition-colors"
              >
                <X size={10} />
              </button>
            </span>
          ))}
        </div>
      )
    },
    code: `<span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full flex items-center gap-1">
  React
  <button onClick={() => removeBadge(id)} className="hover:bg-black/10 rounded-full p-0.5">
    <X size={10} />
  </button>
</span>`,
  },
  {
    id: "notification",
    title: "Notification Badge",
    description: "Small notification counter badge",
    component: () => (
      <div className="flex items-center gap-6">
        <div className="relative">
          <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">📧</div>
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
            3
          </span>
        </div>
        <div className="relative">
          <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">🔔</div>
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full" />
        </div>
      </div>
    ),
    code: `<div className="relative">
  <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">📧</div>
  <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
    3
  </span>
</div>`,
  },
  {
    id: "sizes",
    title: "Badge Sizes",
    description: "Different badge sizes",
    component: () => (
      <div className="flex items-center gap-2">
        <span className="px-1.5 py-0.5 bg-primary text-primary-foreground text-xs font-medium rounded">Small</span>
        <span className="px-2 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-md">Medium</span>
        <span className="px-3 py-1.5 bg-primary text-primary-foreground text-base font-medium rounded-lg">Large</span>
      </div>
    ),
    code: `{/* Small */}
<span className="px-1.5 py-0.5 bg-primary text-primary-foreground text-xs font-medium rounded">Small</span>

{/* Medium */}
<span className="px-2 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-md">Medium</span>

{/* Large */}
<span className="px-3 py-1.5 bg-primary text-primary-foreground text-base font-medium rounded-lg">Large</span>`,
  },
]

export function BadgeComponents() {
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
        <h1 className="text-4xl font-bold mb-4">Badges</h1>
        <p className="text-xl text-muted-foreground">Small status indicators and labels for UI elements.</p>
      </div>

      <div className="grid gap-8">
        {badgeVariants.map((variant) => (
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


