"use client"

import { useState } from "react"
import { ExternalLink } from "lucide-react"

export const Sidebar = ({ isOpen, activeSection, onSectionChange }) => {
  const [expandedSections, setExpandedSections] = useState(["getting-started", "components"])

  const toggleSection = (section) => {
    setExpandedSections((prev) =>
      prev.includes(section)
        ? prev.filter((s) => s !== section)
        : [...prev, section]
    )
  }

  const menuItems = [
    {
      title: "Get Started",
      id: "getting-started",
      items: [
        { id: "introduction", title: "Introduction" },
        { id: "installation", title: "Installation" },
        { id: "components-json", title: "components.json" },
        { id: "theming", title: "Theming" },
        { id: "dark-mode", title: "Dark mode" },
        { id: "cli", title: "CLI" },
        { id: "monorepo", title: "Monorepo" },
        { id: "open-in-v0", title: "Open in v0", external: true },
        { id: "javascript", title: "JavaScript" },
      ],
    },
    {
      title: "Blocks",
      id: "blocks",
      items: [
        { id: "figma", title: "Figma" },
        { id: "changelog", title: "Changelog" },
        { id: "legacy-docs", title: "Legacy Docs" },
      ],
    },
    {
      title: "Components",
      id: "components",
      items: [
        { id: "accordion", title: "Accordion" },
        { id: "alert", title: "Alert" },
        { id: "alert-dialog", title: "Alert Dialog" },
        { id: "aspect-ratio", title: "Aspect Ratio" },
        { id: "avatar", title: "Avatar" },
        { id: "badge", title: "Badge" },
        { id: "breadcrumb", title: "Breadcrumb" },
        { id: "button", title: "Button" },
        { id: "calendar", title: "Calendar" },
        { id: "card", title: "Card" },
        { id: "carousel", title: "Carousel" },
        { id: "chart", title: "Chart" },
      ],
    },
  ]

  return (
    <aside
      className={`fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className="relative overflow-hidden h-full py-6 pr-6 lg:py-8">
        <div className="h-full w-full rounded-[inherit]">
          <div className="relative h-full overflow-hidden">
            <div className="h-full w-full">
              <div className="pb-4">
                <div className="space-y-2">
                  {menuItems.map((section, sectionIndex) => (
                    <div key={sectionIndex}>
                      <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold text-gray-900 dark:text-gray-100">
                        {section.title}
                      </h4>
                      <div className="grid grid-flow-row auto-rows-max text-sm">
                        {section.items.map((item) => (
                          <a
                            key={item.id}
                            href={`#${item.id}`}
                            onClick={(e) => {
                              e.preventDefault()
                              onSectionChange(item.id)
                            }}
                            className={`group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline ${
                              item.active || activeSection === item.id
                                ? "font-medium text-foreground text-gray-900 dark:text-gray-100"
                                : "text-muted-foreground text-gray-600 dark:text-gray-400"
                            }`}
                          >
                            {item.title}
                            {item.external && <ExternalLink className="ml-2 h-3 w-3" />}
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}
