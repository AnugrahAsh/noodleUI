"use client"

import { useState } from "react"
import { Copy, Check, Code } from "lucide-react"

export const ComponentPreview = ({ title, description, component, code }) => {
  const [showCode, setShowCode] = useState(false)
  const [copied, setCopied] = useState(false)

  const copyCode = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden">
      <div className="p-6 border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-medium mb-2">{title}</h3>
            <p className="text-gray-600 dark:text-gray-400">{description}</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={copyCode}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              title="Copy code"
            >
              {copied ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
            </button>
            <button
              onClick={() => setShowCode(!showCode)}
              className={`p-2 rounded-lg transition-colors ${
                showCode
                  ? "bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                  : "hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
              title="View code"
            >
              <Code size={16} />
            </button>
          </div>
        </div>
      </div>

      <div className="p-8 bg-gray-50/50 dark:bg-gray-900/50 flex items-center justify-center min-h-[200px]">
        {component}
      </div>

      {showCode && (
        <div className="border-t border-gray-200 dark:border-gray-800">
          <pre className="p-6 text-sm overflow-x-auto bg-gray-900 text-gray-100">
            <code>{code}</code>
          </pre>
        </div>
      )}
    </div>
  )
}
