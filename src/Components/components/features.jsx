"use client"

import { useState } from "react"
import { Copy, Check, Zap, Shield, Palette, Code, Users, Sparkles } from "lucide-react"

const featureVariants = [
  {
    id: "grid",
    title: "Feature Grid",
    description: "Grid layout showcasing key features with icons",
    component: () => (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {[
          {
            icon: Zap,
            title: "Lightning Fast",
            description: "Optimized for performance with minimal bundle size and maximum speed.",
            color: "text-yellow-500",
            bg: "bg-yellow-50 dark:bg-yellow-950/20",
          },
          {
            icon: Shield,
            title: "Secure by Default",
            description: "Built-in security features and best practices to keep your data safe.",
            color: "text-green-500",
            bg: "bg-green-50 dark:bg-green-950/20",
          },
          {
            icon: Palette,
            title: "Fully Customizable",
            description: "Extensive theming options and CSS variables for complete control.",
            color: "text-purple-500",
            bg: "bg-purple-50 dark:bg-purple-950/20",
          },
          {
            icon: Code,
            title: "Developer Friendly",
            description: "TypeScript support, excellent docs, and great developer experience.",
            color: "text-blue-500",
            bg: "bg-blue-50 dark:bg-blue-950/20",
          },
          {
            icon: Users,
            title: "Team Collaboration",
            description: "Built for teams with sharing, commenting, and version control.",
            color: "text-pink-500",
            bg: "bg-pink-50 dark:bg-pink-950/20",
          },
          {
            icon: Sparkles,
            title: "Premium Quality",
            description: "Production-ready components with beautiful animations.",
            color: "text-indigo-500",
            bg: "bg-indigo-50 dark:bg-indigo-950/20",
          },
        ].map((feature, index) => (
          <div
            key={index}
            className="group p-6 bg-card border border-border rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            <div
              className={`w-12 h-12 ${feature.bg} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
            >
              <feature.icon className={`w-6 h-6 ${feature.color}`} />
            </div>
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    ),
    code: `<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
  {features.map((feature, index) => (
    <div key={index} className="p-6 bg-card border border-border rounded-xl hover:shadow-lg transition-all duration-300">
      <div className={\`w-12 h-12 \${feature.bg} rounded-lg flex items-center justify-center mb-4\`}>
        <feature.icon className={\`w-6 h-6 \${feature.color}\`} />
      </div>
      <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
      <p className="text-muted-foreground">{feature.description}</p>
    </div>
  ))}
</div>`,
  },
  {
    id: "alternating",
    title: "Alternating Layout",
    description: "Features with alternating image and content layout",
    component: () => (
      <div className="space-y-16 max-w-6xl mx-auto">
        {[
          {
            title: "Advanced Analytics",
            description:
              "Get deep insights into your application performance with real-time analytics, custom dashboards, and detailed reporting.",
            image: "📊",
            reverse: false,
          },
          {
            title: "Seamless Integration",
            description: "Connect with your favorite tools and services through our extensive API and webhook system.",
            image: "🔗",
            reverse: true,
          },
          {
            title: "Global Scale",
            description:
              "Deploy worldwide with our global CDN and edge computing infrastructure for lightning-fast performance.",
            image: "🌍",
            reverse: false,
          },
        ].map((feature, index) => (
          <div
            key={index}
            className={`grid md:grid-cols-2 gap-12 items-center ${feature.reverse ? "md:grid-flow-col-dense" : ""}`}
          >
            <div className={feature.reverse ? "md:col-start-2" : ""}>
              <h3 className="text-3xl font-bold mb-4">{feature.title}</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">{feature.description}</p>
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition">
                Learn More
              </button>
            </div>
            <div className={`${feature.reverse ? "md:col-start-1" : ""}`}>
              <div className="w-full h-64 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-950/20 dark:to-purple-950/20 rounded-2xl flex items-center justify-center">
                <span className="text-6xl">{feature.image}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    ),
    code: `<div className="space-y-16">
  {features.map((feature, index) => (
    <div key={index} className={\`grid md:grid-cols-2 gap-12 items-center \${feature.reverse ? 'md:grid-flow-col-dense' : ''}\`}>
      <div className={feature.reverse ? 'md:col-start-2' : ''}>
        <h3 className="text-3xl font-bold mb-4">{feature.title}</h3>
        <p className="text-lg text-muted-foreground mb-6">{feature.description}</p>
        <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg">Learn More</button>
      </div>
      <div className={feature.reverse ? 'md:col-start-1' : ''}>
        <div className="w-full h-64 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center">
          <span className="text-6xl">{feature.image}</span>
        </div>
      </div>
    </div>
  ))}
</div>`,
  },
]

export function FeatureComponents() {
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
        <h1 className="text-4xl font-bold mb-4">Feature Sections</h1>
        <p className="text-xl text-muted-foreground">Showcase your product features with these engaging layouts.</p>
      </div>

      <div className="grid gap-8">
        {featureVariants.map((variant) => (
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
              <div className="p-8">{variant.component()}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}


