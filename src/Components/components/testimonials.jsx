"use client"

import { useState } from "react"
import { Copy, Check, Star, Quote } from "lucide-react"

const testimonialVariants = [
  {
    id: "cards",
    title: "Testimonial Cards",
    description: "Grid of testimonial cards with ratings",
    component: () => (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {[
          {
            name: "Sarah Johnson",
            role: "Product Manager",
            company: "TechCorp",
            avatar: "SJ",
            rating: 5,
            text: "This component library has transformed how we build our products. The quality and attention to detail is outstanding.",
          },
          {
            name: "Michael Chen",
            role: "Lead Developer",
            company: "StartupXYZ",
            avatar: "MC",
            rating: 5,
            text: "Amazing developer experience and beautiful components. Our team productivity has increased significantly.",
          },
          {
            name: "Emily Rodriguez",
            role: "Design Director",
            company: "Creative Agency",
            avatar: "ER",
            rating: 5,
            text: "The design system is incredibly well thought out. It's both flexible and consistent across all our projects.",
          },
        ].map((testimonial, index) => (
          <div key={index} className="p-6 bg-card border border-border rounded-xl">
            <div className="flex items-center gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} size={16} className="text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">"{testimonial.text}"</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                {testimonial.avatar}
              </div>
              <div>
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.role} at {testimonial.company}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    ),
    code: `<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
  {testimonials.map((testimonial, index) => (
    <div key={index} className="p-6 bg-card border border-border rounded-xl">
      <div className="flex items-center gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} size={16} className="text-yellow-400 fill-current" />
        ))}
      </div>
      <p className="text-muted-foreground mb-6">"{testimonial.text}"</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
          {testimonial.avatar}
        </div>
        <div>
          <div className="font-semibold">{testimonial.name}</div>
          <div className="text-sm text-muted-foreground">{testimonial.role} at {testimonial.company}</div>
        </div>
      </div>
    </div>
  ))}
</div>`,
  },
  {
    id: "featured",
    title: "Featured Testimonial",
    description: "Large featured testimonial with quote styling",
    component: () => (
      <div className="max-w-4xl mx-auto text-center">
        <Quote size={48} className="text-primary mx-auto mb-6 opacity-20" />
        <blockquote className="text-2xl md:text-3xl font-light leading-relaxed mb-8">
          "NoodleUI has completely revolutionized our development process. The components are not only beautiful but
          incredibly well-engineered. Our team can now focus on building features instead of wrestling with UI code."
        </blockquote>
        <div className="flex items-center justify-center gap-4">
          <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
            DK
          </div>
          <div className="text-left">
            <div className="font-semibold text-lg">David Kim</div>
            <div className="text-muted-foreground">CTO, InnovateTech</div>
            <div className="flex items-center gap-1 mt-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="text-yellow-400 fill-current" />
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
    code: `<div className="max-w-4xl mx-auto text-center">
  <Quote size={48} className="text-primary mx-auto mb-6 opacity-20" />
  <blockquote className="text-2xl md:text-3xl font-light leading-relaxed mb-8">
    "NoodleUI has completely revolutionized our development process..."
  </blockquote>
  <div className="flex items-center justify-center gap-4">
    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
      DK
    </div>
    <div className="text-left">
      <div className="font-semibold text-lg">David Kim</div>
      <div className="text-muted-foreground">CTO, InnovateTech</div>
      <div className="flex items-center gap-1 mt-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={14} className="text-yellow-400 fill-current" />
        ))}
      </div>
    </div>
  </div>
</div>`,
  },
]

export function TestimonialComponents() {
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
        <h1 className="text-4xl font-bold mb-4">Testimonials</h1>
        <p className="text-xl text-muted-foreground">Social proof components to build trust and credibility.</p>
      </div>

      <div className="grid gap-8">
        {testimonialVariants.map((variant) => (
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


