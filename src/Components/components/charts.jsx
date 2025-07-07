"use client"

import { useState } from "react"
import { Copy, Check, TrendingUp } from "lucide-react"

const chartVariants = [
  {
    id: "bar-chart",
    title: "Bar Chart",
    description: "Simple bar chart with hover effects",
    component: () => (
      <div className="w-full max-w-md bg-card border border-border rounded-xl p-6">
        <h3 className="text-lg font-semibold mb-4">Monthly Sales</h3>
        <div className="space-y-3">
          {[
            { label: "Jan", value: 80, color: "bg-blue-500" },
            { label: "Feb", value: 65, color: "bg-green-500" },
            { label: "Mar", value: 90, color: "bg-purple-500" },
            { label: "Apr", value: 45, color: "bg-orange-500" },
            { label: "May", value: 75, color: "bg-pink-500" },
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <span className="w-8 text-sm text-muted-foreground">{item.label}</span>
              <div className="flex-1 bg-muted rounded-full h-6 relative overflow-hidden">
                <div
                  className={`${item.color} h-full rounded-full transition-all duration-500 hover:opacity-80`}
                  style={{ width: `${item.value}%` }}
                />
              </div>
              <span className="w-8 text-sm font-medium">{item.value}%</span>
            </div>
          ))}
        </div>
      </div>
    ),
    code: `<div className="w-full max-w-md bg-card border border-border rounded-xl p-6">
  <h3 className="text-lg font-semibold mb-4">Monthly Sales</h3>
  <div className="space-y-3">
    {data.map((item, index) => (
      <div key={index} className="flex items-center gap-3">
        <span className="w-8 text-sm text-muted-foreground">{item.label}</span>
        <div className="flex-1 bg-muted rounded-full h-6 relative overflow-hidden">
          <div className={\`\${item.color} h-full rounded-full transition-all duration-500\`} style={{ width: \`\${item.value}%\` }} />
        </div>
        <span className="w-8 text-sm font-medium">{item.value}%</span>
      </div>
    ))}
  </div>
</div>`,
  },
  {
    id: "line-chart",
    title: "Line Chart",
    description: "SVG line chart with data points",
    component: () => (
      <div className="w-full max-w-md bg-card border border-border rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Revenue Trend</h3>
          <div className="flex items-center gap-1 text-green-500">
            <TrendingUp size={16} />
            <span className="text-sm font-medium">+12.5%</span>
          </div>
        </div>
        <div className="h-32 relative">
          <svg className="w-full h-full" viewBox="0 0 300 100">
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0.3" />
                <stop offset="100%" stopColor="rgb(59, 130, 246)" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M 0 80 L 60 60 L 120 40 L 180 30 L 240 20 L 300 10"
              stroke="rgb(59, 130, 246)"
              strokeWidth="2"
              fill="none"
            />
            <path d="M 0 80 L 60 60 L 120 40 L 180 30 L 240 20 L 300 10 L 300 100 L 0 100 Z" fill="url(#gradient)" />
            {[0, 60, 120, 180, 240, 300].map((x, i) => (
              <circle
                key={i}
                cx={x}
                cy={[80, 60, 40, 30, 20, 10][i]}
                r="3"
                fill="rgb(59, 130, 246)"
                className="hover:r-4 transition-all"
              />
            ))}
          </svg>
        </div>
        <div className="flex justify-between text-xs text-muted-foreground mt-2">
          <span>Jan</span>
          <span>Feb</span>
          <span>Mar</span>
          <span>Apr</span>
          <span>May</span>
          <span>Jun</span>
        </div>
      </div>
    ),
    code: `<svg className="w-full h-full" viewBox="0 0 300 100">
  <path d="M 0 80 L 60 60 L 120 40 L 180 30 L 240 20 L 300 10" stroke="rgb(59, 130, 246)" strokeWidth="2" fill="none" />
  {points.map((point, i) => (
    <circle key={i} cx={point.x} cy={point.y} r="3" fill="rgb(59, 130, 246)" />
  ))}
</svg>`,
  },
  {
    id: "donut-chart",
    title: "Donut Chart",
    description: "Circular progress chart with center text",
    component: () => (
      <div className="w-full max-w-md bg-card border border-border rounded-xl p-6">
        <h3 className="text-lg font-semibold mb-4">Project Progress</h3>
        <div className="flex items-center justify-center">
          <div className="relative w-32 h-32">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="40" stroke="rgb(229, 231, 235)" strokeWidth="8" fill="none" />
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="rgb(59, 130, 246)"
                strokeWidth="8"
                fill="none"
                strokeDasharray={`${2 * Math.PI * 40 * 0.75} ${2 * Math.PI * 40}`}
                strokeLinecap="round"
                className="transition-all duration-1000"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-2xl font-bold">75%</div>
                <div className="text-xs text-muted-foreground">Complete</div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 space-y-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full" />
              <span>Completed</span>
            </div>
            <span className="font-medium">75%</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-gray-300 rounded-full" />
              <span>Remaining</span>
            </div>
            <span className="font-medium">25%</span>
          </div>
        </div>
      </div>
    ),
    code: `<svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="40" stroke="rgb(229, 231, 235)" strokeWidth="8" fill="none" />
  <circle cx="50" cy="50" r="40" stroke="rgb(59, 130, 246)" strokeWidth="8" fill="none" strokeDasharray={\`\${circumference * percentage}\`} />
</svg>`,
  },
]

export function ChartComponents() {
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
        <h1 className="text-4xl font-bold mb-4">Charts</h1>
        <p className="text-xl text-muted-foreground">
          Data visualization components for displaying metrics and analytics.
        </p>
      </div>

      <div className="grid gap-8">
        {chartVariants.map((variant) => (
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


