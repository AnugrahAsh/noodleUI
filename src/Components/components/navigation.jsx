"use client"

import { useState } from "react"
import { Home, User, Settings, Bell, Layers, ChevronRight, Copy, Check } from "lucide-react"

const navigationVariants = [
  {
    id: "horizontal",
    title: "Horizontal Navbar",
    description: "Responsive top navigation bar with brand, links and CTA",
    component: () => (
      <nav className="w-full bg-background border border-border rounded-xl shadow-md">
        <div className="px-6 py-4 flex items-center justify-between">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Layers size={16} className="text-white" />
            </div>
            <span className="font-bold tracking-tight text-lg">NoodleUI</span>
          </div>

          {/* Links */}
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-foreground transition">
              Home
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition">
              Features
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition">
              Docs
            </a>
          </div>

          {/* CTA */}
          <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm hover:opacity-90 transition">
            Get Started
          </button>
        </div>
      </nav>
    ),
    code: `<nav className="w-full bg-background border border-border rounded-xl shadow-md">
  <div className="px-6 py-4 flex items-center justify-between">
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
        <Layers size={16} className="text-white" />
      </div>
      <span className="font-bold tracking-tight text-lg">NoodleUI</span>
    </div>
    <div className="hidden md:flex items-center gap-6 text-sm">
      <a href="#" className="text-muted-foreground hover:text-foreground transition">Home</a>
      <a href="#" className="text-muted-foreground hover:text-foreground transition">Features</a>
      <a href="#" className="text-muted-foreground hover:text-foreground transition">Docs</a>
    </div>
    <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm">Get Started</button>
  </div>
</nav>`,
  },
  {
    id: "sidebar",
    title: "Sidebar Navigation",
    description: "Vertical sidebar navigation for dashboards",
    component: () => (
      <aside className="w-64 bg-background border border-border rounded-xl p-4 shadow-md">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <Layers size={16} className="text-white" />
          </div>
          <span className="font-bold">Dashboard</span>
        </div>
        <nav className="space-y-1 text-sm">
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 text-primary font-medium">
            <Home size={14} />
            Overview
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-muted transition">
            <User size={14} />
            Profile
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-muted transition">
            <Settings size={14} />
            Settings
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-muted transition">
            <Bell size={14} />
            Notifications
          </a>
        </nav>
      </aside>
    ),
    code: `<aside className="w-64 bg-background border border-border rounded-xl p-4">
  <div className="flex items-center gap-2 mb-6">
    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
      <Layers size={16} className="text-white" />
    </div>
    <span className="font-bold">Dashboard</span>
  </div>
  <nav className="space-y-1 text-sm">
    <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 text-primary font-medium">
      <Home size={14} /> Overview
    </a>
    <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-muted transition">
      <User size={14} /> Profile
    </a>
    <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-muted transition">
      <Settings size={14} /> Settings
    </a>
    <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-muted transition">
      <Bell size={14} /> Notifications
    </a>
  </nav>
</aside>`,
  },
  {
    id: "breadcrumb",
    title: "Breadcrumb Header",
    description: "Simple breadcrumb navigation for inner pages",
    component: () => (
      <div className="flex items-center gap-2 text-sm">
        <a href="#" className="text-muted-foreground hover:underline">
          Dashboard
        </a>
        <ChevronRight size={14} />
        <a href="#" className="text-muted-foreground hover:underline">
          Projects
        </a>
        <ChevronRight size={14} />
        <span className="font-medium text-foreground">Project A</span>
      </div>
    ),
    code: `<div className="flex items-center gap-2 text-sm">
  <a href="#" className="text-muted-foreground hover:underline">Dashboard</a>
  <ChevronRight size={14} />
  <a href="#" className="text-muted-foreground hover:underline">Projects</a>
  <ChevronRight size={14} />
  <span className="font-medium text-foreground">Project A</span>
</div>`,
  },
]

export function NavigationComponents() {
  const [copied, setCopied] = useState(null)
  const [showCode, setShowCode] = useState({})

  const copyCode = async (code, id) => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(id)
      setTimeout(() => setCopied(null), 1500)
    } catch {
      /* ignore */
    }
  }

  const toggleCode = (id) => {
    setShowCode((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Navigation</h1>
        <p className="text-xl text-muted-foreground">Common navigation patterns for websites and dashboards.</p>
      </div>

      <div className="grid gap-8">
        {navigationVariants.map((variant) => (
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
              <div className="p-8 bg-gradient-to-br from-gray-50/50 to-gray-100/50 dark:from-gray-900/50 dark:to-gray-800/50 flex justify-center">
                {variant.component()}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}


