"use client"

import { useState } from "react"
import { Copy, Check, User } from "lucide-react"

const avatarVariants = [
  {
    id: "basic",
    title: "Basic Avatar",
    description: "Simple circular avatar with initials",
    component: () => (
      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
        JD
      </div>
    ),
    code: `<div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
  JD
</div>`,
  },
  {
    id: "image",
    title: "Image Avatar",
    description: "Avatar with profile image",
    component: () => (
      <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-border">
        <div className="w-full h-full bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center">
          <User className="w-6 h-6 text-white" />
        </div>
      </div>
    ),
    code: `<div className="w-12 h-12 rounded-full overflow-hidden border-2 border-border">
  <img src="/avatar.jpg" alt="User" className="w-full h-full object-cover" />
</div>`,
  },
  {
    id: "status",
    title: "Avatar with Status",
    description: "Avatar with online status indicator",
    component: () => (
      <div className="relative">
        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
          AB
        </div>
        <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-green-500 border-2 border-background rounded-full" />
      </div>
    ),
    code: `<div className="relative">
  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
    AB
  </div>
  <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-green-500 border-2 border-background rounded-full" />
</div>`,
  },
  {
    id: "group",
    title: "Avatar Group",
    description: "Overlapping group of avatars",
    component: () => (
      <div className="flex -space-x-2">
        <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center text-white font-semibold border-2 border-background">
          A
        </div>
        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold border-2 border-background">
          B
        </div>
        <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center text-white font-semibold border-2 border-background">
          C
        </div>
        <div className="w-10 h-10 bg-muted border-2 border-background rounded-full flex items-center justify-center text-muted-foreground font-semibold text-sm">
          +5
        </div>
      </div>
    ),
    code: `<div className="flex -space-x-2">
  <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center text-white font-semibold border-2 border-background">A</div>
  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold border-2 border-background">B</div>
  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center text-white font-semibold border-2 border-background">C</div>
  <div className="w-10 h-10 bg-muted border-2 border-background rounded-full flex items-center justify-center text-muted-foreground font-semibold text-sm">+5</div>
</div>`,
  },
  {
    id: "sizes",
    title: "Avatar Sizes",
    description: "Different avatar sizes",
    component: () => (
      <div className="flex items-center gap-4">
        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-xs">
          S
        </div>
        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
          M
        </div>
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
          L
        </div>
        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-lg">
          XL
        </div>
      </div>
    ),
    code: `{/* Small */}
<div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-xs">S</div>

{/* Medium */}
<div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">M</div>

{/* Large */}
<div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">L</div>

{/* Extra Large */}
<div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-lg">XL</div>`,
  },
]

export function AvatarComponents() {
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
        <h1 className="text-4xl font-bold mb-4">Avatars</h1>
        <p className="text-xl text-muted-foreground">User avatar components in various styles and sizes.</p>
      </div>

      <div className="grid gap-8">
        {avatarVariants.map((variant) => (
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


