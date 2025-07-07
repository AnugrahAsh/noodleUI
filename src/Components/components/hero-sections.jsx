"use client"

import { useState } from "react"
import { Copy, Check, ArrowRight, Play, Star, Sparkles } from "lucide-react"

const heroVariants = [
  {
    id: "centered",
    title: "Centered Hero",
    description: "Classic centered hero with CTA buttons",
    component: () => (
      <div className="text-center py-20 px-6 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-2xl">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-sm text-blue-600 dark:text-blue-400 mb-6">
          <Sparkles size={16} />
          <span>Introducing v2.0</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Build Amazing
          <br />
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            User Interfaces
          </span>
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Create beautiful, responsive web applications with our comprehensive component library and design system.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-medium hover:opacity-90 transition flex items-center gap-2">
            Get Started
            <ArrowRight size={16} />
          </button>
          <button className="px-8 py-4 border border-border rounded-xl font-medium hover:bg-accent transition flex items-center gap-2">
            <Play size={16} />
            Watch Demo
          </button>
        </div>
      </div>
    ),
    code: `<div className="text-center py-20 px-6">
  <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full text-sm text-blue-600 mb-6">
    <Sparkles size={16} />
    <span>Introducing v2.0</span>
  </div>
  <h1 className="text-4xl md:text-6xl font-bold mb-6">
    Build Amazing<br />
    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">User Interfaces</span>
  </h1>
  <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
    Create beautiful, responsive web applications with our comprehensive component library.
  </p>
  <div className="flex gap-4 justify-center">
    <button className="px-8 py-4 bg-primary text-primary-foreground rounded-xl">Get Started</button>
    <button className="px-8 py-4 border border-border rounded-xl">Watch Demo</button>
  </div>
</div>`,
  },
  {
    id: "split",
    title: "Split Hero",
    description: "Hero with content on left and visual on right",
    component: () => (
      <div className="grid md:grid-cols-2 gap-12 items-center py-20 px-6 bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-950/20 dark:to-pink-950/20 rounded-2xl">
        <div>
          <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 mb-4">
            <Star size={16} />
            <span className="text-sm font-medium">Trusted by 10,000+ developers</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            The Future of
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Web Development
            </span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Build faster, ship sooner, and create better user experiences with our modern development tools and
            components.
          </p>
          <div className="flex gap-4">
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition">
              Start Building
            </button>
            <button className="px-6 py-3 text-muted-foreground hover:text-foreground transition">Learn More →</button>
          </div>
        </div>
        <div className="relative">
          <div className="w-full h-64 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center">
            <div className="text-white text-center">
              <div className="text-4xl mb-2">🚀</div>
              <div className="text-lg font-semibold">Your Product Here</div>
            </div>
          </div>
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce">
            <span className="text-2xl">✨</span>
          </div>
        </div>
      </div>
    ),
    code: `<div className="grid md:grid-cols-2 gap-12 items-center py-20 px-6">
  <div>
    <h1 className="text-4xl md:text-5xl font-bold mb-6">
      The Future of<br />
      <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Web Development</span>
    </h1>
    <p className="text-lg text-muted-foreground mb-8">Build faster, ship sooner, and create better user experiences.</p>
    <div className="flex gap-4">
      <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg">Start Building</button>
      <button className="px-6 py-3 text-muted-foreground hover:text-foreground">Learn More →</button>
    </div>
  </div>
  <div className="relative">
    <div className="w-full h-64 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center">
      <div className="text-white text-center">
        <div className="text-4xl mb-2">🚀</div>
        <div className="text-lg font-semibold">Your Product Here</div>
      </div>
    </div>
  </div>
</div>`,
  },
  {
    id: "minimal",
    title: "Minimal Hero",
    description: "Clean and minimal hero section",
    component: () => (
      <div className="text-center py-24 px-6">
        <h1 className="text-5xl md:text-7xl font-light mb-8 tracking-tight">
          Simple.
          <br />
          <span className="font-bold">Powerful.</span>
          <br />
          <span className="text-muted-foreground">Beautiful.</span>
        </h1>
        <p className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto">
          Everything you need to build modern web applications, nothing you don't.
        </p>
        <button className="px-8 py-4 bg-foreground text-background rounded-full font-medium hover:opacity-90 transition">
          Get Started Today
        </button>
      </div>
    ),
    code: `<div className="text-center py-24 px-6">
  <h1 className="text-5xl md:text-7xl font-light mb-8 tracking-tight">
    Simple.<br />
    <span className="font-bold">Powerful.</span><br />
    <span className="text-muted-foreground">Beautiful.</span>
  </h1>
  <p className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto">
    Everything you need to build modern web applications, nothing you don't.
  </p>
  <button className="px-8 py-4 bg-foreground text-background rounded-full font-medium">
    Get Started Today
  </button>
</div>`,
  },
]

export function HeroComponents() {
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
        <h1 className="text-4xl font-bold mb-4">Hero Sections</h1>
        <p className="text-xl text-muted-foreground">Eye-catching hero sections to make a great first impression.</p>
      </div>

      <div className="grid gap-8">
        {heroVariants.map((variant) => (
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
              <div className="p-6">{variant.component()}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

