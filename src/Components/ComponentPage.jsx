"use client"

import { useState } from "react"
import { Copy, Check, Eye, Code, ChevronDown, Star, Zap } from "lucide-react"

// Button Component Variants
const ButtonVariants = {
  primary: () => (
    <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl">
      Primary Button
    </button>
  ),
  gradient: () => (
    <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-lg font-medium transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl">
      Gradient Button
    </button>
  ),
  outline: () => (
    <button className="px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-500 hover:text-blue-500 rounded-lg font-medium transition-all duration-200 hover:scale-105">
      Outline Button
    </button>
  ),
  ghost: () => (
    <button className="px-6 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg font-medium transition-all duration-200 hover:scale-105">
      Ghost Button
    </button>
  ),
  icon: () => (
    <button className="flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-all duration-200 hover:scale-105 shadow-lg">
      <Zap size={18} />
      Icon Button
    </button>
  ),
  floating: () => (
    <button className="w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-200 hover:scale-110 flex items-center justify-center">
      <Star size={20} />
    </button>
  ),
}

const componentData = {
  button: {
    title: "Button",
    description: "A collection of button components with different styles and interactions.",
    variants: [
      {
        name: "Primary",
        description: "The main call-to-action button with solid background.",
        component: ButtonVariants.primary,
        code: `<button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl">
  Primary Button
</button>`,
        props: "variant='primary'",
      },
      {
        name: "Gradient",
        description: "Eye-catching gradient button for special actions.",
        component: ButtonVariants.gradient,
        code: `<button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-lg font-medium transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl">
  Gradient Button
</button>`,
        props: "variant='gradient'",
      },
      {
        name: "Outline",
        description: "Subtle button with border, perfect for secondary actions.",
        component: ButtonVariants.outline,
        code: `<button className="px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-500 hover:text-blue-500 rounded-lg font-medium transition-all duration-200 hover:scale-105">
  Outline Button
</button>`,
        props: "variant='outline'",
      },
      {
        name: "Ghost",
        description: "Minimal button with no background, great for subtle interactions.",
        component: ButtonVariants.ghost,
        code: `<button className="px-6 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg font-medium transition-all duration-200 hover:scale-105">
  Ghost Button
</button>`,
        props: "variant='ghost'",
      },
      {
        name: "Icon",
        description: "Button with icon and text for enhanced visual communication.",
        component: ButtonVariants.icon,
        code: `<button className="flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-all duration-200 hover:scale-105 shadow-lg">
  <Zap size={18} />
  Icon Button
</button>`,
        props: "variant='icon' icon={<Zap />}",
      },
      {
        name: "Floating",
        description: "Circular floating action button for primary quick actions.",
        component: ButtonVariants.floating,
        code: `<button className="w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-200 hover:scale-110 flex items-center justify-center">
  <Star size={20} />
</button>`,
        props: "variant='floating' icon={<Star />}",
      },
    ],
    installation: `npm install noodleui`,
    import: `import { Button } from 'noodleui'`,
    usage: `<Button variant="primary">Click me</Button>`,
  },
}

export const ComponentPage = ({
  componentId,
  selectedVariant,
  onVariantChange,
  onCopy,
  copied,
}) => {
  const [showCode, setShowCode] = useState(false)
  const [variantDropdownOpen, setVariantDropdownOpen] = useState(false)

  const data = componentData[componentId]
  if (!data) return <div>Component not found</div>

  const currentVariant = data.variants[selectedVariant]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">{data.title}</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">{data.description}</p>
      </div>

      {/* Quick Install */}
      <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 bg-gray-50/50 dark:bg-gray-900/50">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex-1">
            <h3 className="font-medium text-gray-900 dark:text-white mb-1">Quick Install</h3>
            <code className="text-sm text-gray-600 dark:text-gray-400">{data.installation}</code>
          </div>
          <button
            onClick={() => onCopy(data.installation, "install")}
            className="flex items-center gap-2 px-3 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {copied === "install" ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
            {copied === "install" ? "Copied" : "Copy"}
          </button>
        </div>
      </div>

      {/* Variant Selector */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Variants</h2>
          <div className="relative">
            <button
              onClick={() => setVariantDropdownOpen(!variantDropdownOpen)}
              className="flex items-center gap-2 px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              <span className="text-sm font-medium">{currentVariant.name}</span>
              <ChevronDown
                size={14}
                className={`transform transition-transform ${variantDropdownOpen ? "rotate-180" : ""}`}
              />
            </button>

            {variantDropdownOpen && (
              <div className="absolute top-full mt-2 right-0 w-48 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-10">
                {data.variants.map((variant, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      onVariantChange(index)
                      setVariantDropdownOpen(false)
                    }}
                    className={`w-full text-left px-4 py-3 text-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors first:rounded-t-lg last:rounded-b-lg ${
                      index === selectedVariant ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400" : ""
                    }`}
                  >
                    <div className="font-medium">{variant.name}</div>
                    <div className="text-gray-500 dark:text-gray-400 text-xs">{variant.description}</div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Current Variant Info */}
        <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4">
          <h3 className="font-medium text-gray-900 dark:text-white mb-2">{currentVariant.name}</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{currentVariant.description}</p>

          {/* Component Preview */}
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Preview</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowCode(!showCode)}
                  className={`p-1.5 rounded-md transition-colors ${
                    showCode
                      ? "bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                      : "hover:bg-gray-200 dark:hover:bg-gray-700"
                  }`}
                >
                  <Code size={14} />
                </button>
                <button className="p-1.5 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                  <Eye size={14} />
                </button>
              </div>
            </div>

            <div className="p-8 bg-white dark:bg-gray-950 flex items-center justify-center min-h-[200px]">
              {currentVariant.component()}
            </div>

            {showCode && (
              <div className="border-t border-gray-200 dark:border-gray-800">
                <div className="flex items-center justify-between px-4 py-3 bg-gray-50 dark:bg-gray-900">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Code</span>
                  <button
                    onClick={() => onCopy(currentVariant.code, `variant-${selectedVariant}`)}
                    className="flex items-center gap-2 px-2 py-1 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                  >
                    {copied === `variant-${selectedVariant}` ? (
                      <Check size={14} className="text-green-500" />
                    ) : (
                      <Copy size={14} />
                    )}
                    {copied === `variant-${selectedVariant}` ? "Copied" : "Copy"}
                  </button>
                </div>
                <div className="p-4 bg-gray-900 text-gray-100">
                  <pre className="text-sm overflow-x-auto">
                    <code>{currentVariant.code}</code>
                  </pre>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Usage */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Usage</h2>

        <div className="space-y-4">
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Import</span>
              <button
                onClick={() => onCopy(data.import, "import")}
                className="flex items-center gap-2 px-2 py-1 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
              >
                {copied === "import" ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
                {copied === "import" ? "Copied" : "Copy"}
              </button>
            </div>
            <div className="p-4 bg-gray-900 text-gray-100">
              <code className="text-sm">{data.import}</code>
            </div>
          </div>

          <div className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Basic Usage</span>
              <button
                onClick={() => onCopy(data.usage, "usage")}
                className="flex items-center gap-2 px-2 py-1 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
              >
                {copied === "usage" ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
                {copied === "usage" ? "Copied" : "Copy"}
              </button>
            </div>
            <div className="p-4 bg-gray-900 text-gray-100">
              <code className="text-sm">{data.usage}</code>
            </div>
          </div>
        </div>
      </div>

      {/* Props */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Props</h2>
        <div className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden">
          <div className="px-4 py-3 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Current Variant Props</span>
          </div>
          <div className="p-4">
            <code className="text-sm text-blue-600 dark:text-blue-400">{currentVariant.props}</code>
          </div>
        </div>
      </div>

      {/* All Variants Grid */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">All Variants</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.variants.map((variant, index) => (
            <button
              key={index}
              onClick={() => onVariantChange(index)}
              className={`p-4 border rounded-lg text-left transition-all duration-200 hover:scale-105 ${
                index === selectedVariant
                  ? "border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-900/20"
                  : "border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700"
              }`}
            >
              <div className="flex items-center justify-center mb-3 min-h-[80px]">{variant.component()}</div>
              <h3 className="font-medium text-gray-900 dark:text-white mb-1">{variant.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{variant.description}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
