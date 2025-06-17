"use client"

import { useState } from "react"
import { ChevronRight } from "lucide-react"

export const SimpleAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const items = [
    {
      title: "What is NoodleUI?",
      content:
        "NoodleUI is a modern React component library focused on beautiful, minimal design and exceptional user experience.",
    },
    {
      title: "How do I get started?",
      content:
        "Simply install the package with npm install noodleui and start importing components into your React application.",
    },
    {
      title: "Is it free to use?",
      content: "Yes! NoodleUI is completely open source and free to use in both personal and commercial projects.",
    },
  ]

  return (
    <div className="space-y-4 max-w-2xl">
      {items.map((item, index) => (
        <div key={index} className="border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors"
          >
            <span className="font-medium">{item.title}</span>
            <ChevronRight className={`w-5 h-5 transition-transform ${openIndex === index ? "rotate-90" : ""}`} />
          </button>
          {openIndex === index && (
            <div className="px-6 pb-4 text-gray-600 dark:text-gray-400 animate-in slide-in-from-top-2 duration-200">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export const GlowAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const items = [
    {
      title: "Design Philosophy",
      content:
        "We believe in minimal design that doesn't compromise on functionality. Every component is crafted with intention.",
    },
    {
      title: "Performance First",
      content:
        "Built with performance in mind, our components are optimized for speed and bundle size without sacrificing features.",
    },
    {
      title: "Developer Experience",
      content: "TypeScript-first approach with excellent IntelliSense support and comprehensive documentation.",
    },
  ]

  return (
    <div className="space-y-3 max-w-2xl">
      {items.map((item, index) => (
        <div
          key={index}
          className={`border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden transition-all duration-300 ${
            openIndex === index ? "shadow-lg shadow-blue-500/10 border-blue-500/30" : ""
          }`}
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-colors"
          >
            <span className="font-medium text-lg">{item.title}</span>
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                openIndex === index ? "bg-blue-500 text-white rotate-90" : "bg-gray-100 dark:bg-gray-800"
              }`}
            >
              <ChevronRight className="w-4 h-4" />
            </div>
          </button>
          {openIndex === index && (
            <div className="px-6 pb-5 text-gray-600 dark:text-gray-400 animate-in slide-in-from-top-2 duration-300">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
