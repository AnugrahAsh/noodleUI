"use client"

import { useState } from "react"
import { Copy, Check } from "lucide-react"

const backgroundVariants = [
  {
    id: "aurora",
    title: "Aurora Background",
    description: "Mesmerizing northern lights effect with animated colors",
    component: () => (
      <div className="relative w-full h-80 bg-black overflow-hidden rounded-2xl">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-400/30 via-blue-500/20 to-purple-600/30 animate-pulse" />
          <div
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-pink-400/20 via-transparent to-cyan-400/20 animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-bl from-yellow-400/10 via-transparent to-indigo-500/20 animate-pulse"
            style={{ animationDelay: "2s" }}
          />
        </div>

        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${1 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white">
            <h3 className="text-2xl font-bold mb-2">Aurora Background</h3>
            <p className="text-white/70">Mesmerizing northern lights effect</p>
          </div>
        </div>
      </div>
    ),
    code: `<div className="relative w-full h-80 bg-black overflow-hidden rounded-2xl">
  <div className="absolute inset-0">
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-400/30 via-blue-500/20 to-purple-600/30 animate-pulse" />
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-pink-400/20 via-transparent to-cyan-400/20 animate-pulse" style={{ animationDelay: '1s' }} />
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-bl from-yellow-400/10 via-transparent to-indigo-500/20 animate-pulse" style={{ animationDelay: '2s' }} />
  </div>
  
  {/* Stars */}
  <div className="absolute inset-0">
    {[...Array(50)].map((_, i) => (
      <div key={i} className="absolute w-1 h-1 bg-white rounded-full animate-pulse" style={{ left: \`\${Math.random() * 100}%\`, top: \`\${Math.random() * 100}%\`, animationDelay: \`\${Math.random() * 3}s\` }} />
    ))}
  </div>
</div>`,
  },
  {
    id: "mesh",
    title: "Mesh Gradient",
    description: "Smooth color transitions with mesh effect",
    component: () => (
      <div className="relative w-full h-80 overflow-hidden rounded-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600" />
        <div className="absolute inset-0 bg-gradient-to-tl from-yellow-400 via-transparent to-cyan-400 opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-tr from-green-400 via-transparent to-blue-500 opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse" />

        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white">
            <h3 className="text-2xl font-bold mb-2">Mesh Gradient</h3>
            <p className="text-white/70">Smooth color transitions</p>
          </div>
        </div>
      </div>
    ),
    code: `<div className="relative w-full h-80 overflow-hidden rounded-2xl">
  <div className="absolute inset-0 bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600" />
  <div className="absolute inset-0 bg-gradient-to-tl from-yellow-400 via-transparent to-cyan-400 opacity-70" />
  <div className="absolute inset-0 bg-gradient-to-tr from-green-400 via-transparent to-blue-500 opacity-50" />
  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse" />
</div>`,
  },
  {
    id: "geometric",
    title: "Geometric Patterns",
    description: "Abstract geometric shapes with grid overlay",
    component: () => (
      <div className="relative w-full h-80 bg-gradient-to-br from-purple-900 to-indigo-900 overflow-hidden rounded-2xl">
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-4 h-4 border border-white/20 rotate-45 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>

        <div className="absolute inset-0 opacity-20">
          <div className="grid grid-cols-8 grid-rows-8 h-full w-full">
            {[...Array(64)].map((_, i) => (
              <div key={i} className="border border-white/10" />
            ))}
          </div>
        </div>

        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white">
            <h3 className="text-2xl font-bold mb-2">Geometric Patterns</h3>
            <p className="text-white/70">Abstract geometric design</p>
          </div>
        </div>
      </div>
    ),
    code: `<div className="relative w-full h-80 bg-gradient-to-br from-purple-900 to-indigo-900 overflow-hidden rounded-2xl">
  {/* Geometric shapes */}
  <div className="absolute inset-0">
    {[...Array(20)].map((_, i) => (
      <div key={i} className="absolute w-4 h-4 border border-white/20 rotate-45 animate-pulse" style={{ left: \`\${Math.random() * 100}%\`, top: \`\${Math.random() * 100}%\`, animationDelay: \`\${Math.random() * 5}s\` }} />
    ))}
  </div>
  
  {/* Grid overlay */}
  <div className="absolute inset-0 opacity-20">
    <div className="grid grid-cols-8 grid-rows-8 h-full w-full">
      {[...Array(64)].map((_, i) => (
        <div key={i} className="border border-white/10" />
      ))}
    </div>
  </div>
</div>`,
  },
  {
    id: "particles",
    title: "Particle Network",
    description: "Connected particle system with floating elements",
    component: () => (
      <div className="relative w-full h-80 bg-gradient-to-br from-gray-900 to-black overflow-hidden rounded-2xl">
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-400/60 rounded-full animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>

        <svg className="absolute inset-0 w-full h-full">
          {[...Array(15)].map((_, i) => (
            <line
              key={i}
              x1={`${Math.random() * 100}%`}
              y1={`${Math.random() * 100}%`}
              x2={`${Math.random() * 100}%`}
              y2={`${Math.random() * 100}%`}
              stroke="rgba(59, 130, 246, 0.3)"
              strokeWidth="1"
              className="animate-pulse"
              style={{ animationDelay: `${Math.random() * 2}s` }}
            />
          ))}
        </svg>

        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white">
            <h3 className="text-2xl font-bold mb-2">Particle Network</h3>
            <p className="text-white/70">Connected particle system</p>
          </div>
        </div>
      </div>
    ),
    code: `<div className="relative w-full h-80 bg-gradient-to-br from-gray-900 to-black overflow-hidden rounded-2xl">
  {/* Floating particles */}
  <div className="absolute inset-0">
    {[...Array(30)].map((_, i) => (
      <div key={i} className="absolute w-2 h-2 bg-blue-400/60 rounded-full animate-bounce" style={{ left: \`\${Math.random() * 100}%\`, top: \`\${Math.random() * 100}%\`, animationDelay: \`\${Math.random() * 5}s\` }} />
    ))}
  </div>
  
  {/* Connecting lines */}
  <svg className="absolute inset-0 w-full h-full">
    {[...Array(15)].map((_, i) => (
      <line key={i} x1={\`\${Math.random() * 100}%\`} y1={\`\${Math.random() * 100}%\`} x2={\`\${Math.random() * 100}%\`} y2={\`\${Math.random() * 100}%\`} stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1" className="animate-pulse" />
    ))}
  </svg>
</div>`,
  },
  {
    id: "waves",
    title: "Wave Animation",
    description: "Flowing wave patterns with SVG animations",
    component: () => (
      <div className="relative w-full h-80 bg-gradient-to-b from-blue-400 to-blue-600 overflow-hidden rounded-2xl">
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1200 120" className="w-full h-32">
            <path
              d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z"
              fill="rgba(255,255,255,0.1)"
              className="animate-pulse"
            />
          </svg>
        </div>

        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1200 120" className="w-full h-24">
            <path
              d="M0,80 C300,20 900,100 1200,40 L1200,120 L0,120 Z"
              fill="rgba(255,255,255,0.2)"
              className="animate-pulse"
              style={{ animationDelay: "1s" }}
            />
          </svg>
        </div>

        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white">
            <h3 className="text-2xl font-bold mb-2">Wave Animation</h3>
            <p className="text-white/70">Flowing wave patterns</p>
          </div>
        </div>
      </div>
    ),
    code: `<div className="relative w-full h-80 bg-gradient-to-b from-blue-400 to-blue-600 overflow-hidden rounded-2xl">
  {/* Animated waves */}
  <div className="absolute bottom-0 left-0 w-full">
    <svg viewBox="0 0 1200 120" className="w-full h-32">
      <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z" fill="rgba(255,255,255,0.1)" className="animate-pulse" />
    </svg>
  </div>
  
  <div className="absolute bottom-0 left-0 w-full">
    <svg viewBox="0 0 1200 120" className="w-full h-24">
      <path d="M0,80 C300,20 900,100 1200,40 L1200,120 L0,120 Z" fill="rgba(255,255,255,0.2)" className="animate-pulse" style={{ animationDelay: "1s" }} />
    </svg>
  </div>
</div>`,
  },
]

export function BackgroundComponents() {
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
        <h1 className="text-4xl font-bold mb-4">Background Effects</h1>
        <p className="text-xl text-muted-foreground">
          Stunning background components with animations and visual effects.
        </p>
      </div>

      <div className="grid gap-8">
        {backgroundVariants.map((variant) => (
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


