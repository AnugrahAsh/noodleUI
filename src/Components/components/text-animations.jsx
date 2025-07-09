"use client"

import { useState, useEffect } from "react"
import { Copy, Check } from "lucide-react"

const textAnimationVariants = [
  {
    id: "typewriter",
    title: "Typewriter Effect",
    description: "Text appears character by character",
    component: () => {
      const [text, setText] = useState("")
      const fullText = "Hello, I'm a typewriter effect!"

      useEffect(() => {
        let index = 0
        const timer = setInterval(() => {
          setText(fullText.slice(0, index))
          index++
          if (index > fullText.length) {
            index = 0
          }
        }, 100)

        return () => clearInterval(timer)
      }, [])

      return (
        <div className="text-2xl font-mono">
          {text}
          <span className="animate-pulse">|</span>
        </div>
      )
    },
    code: `const [text, setText] = useState("")
const fullText = "Hello, I'm a typewriter effect!"

useEffect(() => {
  let index = 0
  const timer = setInterval(() => {
    setText(fullText.slice(0, index))
    index++
    if (index > fullText.length) index = 0
  }, 100)
  return () => clearInterval(timer)
}, [])

return (
  <div className="text-2xl font-mono">
    {text}<span className="animate-pulse">|</span>
  </div>
)`,
  },
  {
    id: "fade-in-up",
    title: "Fade In Up",
    description: "Text slides up while fading in",
    component: () => (
      <div className="space-y-4">
        {["Welcome to", "Our Amazing", "Platform"].map((text, index) => (
          <div
            key={index}
            className="text-3xl font-bold opacity-0 translate-y-4 animate-[fadeInUp_0.6s_ease-out_forwards]"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            {text}
          </div>
        ))}
        <style jsx>{`
          @keyframes fadeInUp {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </div>
    ),
    code: `{texts.map((text, index) => (
  <div
    key={index}
    className="text-3xl font-bold opacity-0 translate-y-4 animate-[fadeInUp_0.6s_ease-out_forwards]"
    style={{ animationDelay: \`\${index * 0.2}s\` }}
  >
    {text}
  </div>
))}

/* CSS */
@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}`,
  },
  {
    id: "gradient-text",
    title: "Animated Gradient Text",
    description: "Text with moving gradient background",
    component: () => (
      <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradientShift_3s_ease-in-out_infinite]">
        Gradient Animation
        <style jsx>{`
          @keyframes gradientShift {
            0%, 100% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
          }
        `}</style>
      </div>
    ),
    code: `<div className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradientShift_3s_ease-in-out_infinite]">
  Gradient Animation
</div>

/* CSS */
@keyframes gradientShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}`,
  },
  {
    id: "wave-text",
    title: "Wave Text",
    description: "Letters animate in a wave pattern",
    component: () => (
      <div className="text-3xl font-bold flex">
        {"WAVE EFFECT".split("").map((char, index) => (
          <span
            key={index}
            className="inline-block animate-[wave_2s_ease-in-out_infinite]"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
        <style jsx>{`
          @keyframes wave {
            0%, 40%, 100% {
              transform: translateY(0);
            }
            20% {
              transform: translateY(-10px);
            }
          }
        `}</style>
      </div>
    ),
    code: `<div className="text-3xl font-bold flex">
  {"WAVE EFFECT".split("").map((char, index) => (
    <span
      key={index}
      className="inline-block animate-[wave_2s_ease-in-out_infinite]"
      style={{ animationDelay: \`\${index * 0.1}s\` }}
    >
      {char === " " ? "\\u00A0" : char}
    </span>
  ))}
</div>

/* CSS */
@keyframes wave {
  0%, 40%, 100% { transform: translateY(0); }
  20% { transform: translateY(-10px); }
}`,
  },
  {
    id: "glitch",
    title: "Glitch Effect",
    description: "Cyberpunk-style glitch text animation",
    component: () => (
      <div className="relative text-4xl font-bold text-white">
        <span className="relative z-10">GLITCH</span>
        <span className="absolute top-0 left-0 text-red-500 animate-[glitch1_0.5s_infinite_linear_alternate-reverse] clip-path-[inset(40%_0_61%_0)]">
          GLITCH
        </span>
        <span className="absolute top-0 left-0 text-blue-500 animate-[glitch2_0.5s_infinite_linear_alternate-reverse] clip-path-[inset(65%_0_12%_0)]">
          GLITCH
        </span>
        <style jsx>{`
          @keyframes glitch1 {
            0% { transform: translate(0); }
            20% { transform: translate(-2px, 2px); }
            40% { transform: translate(-2px, -2px); }
            60% { transform: translate(2px, 2px); }
            80% { transform: translate(2px, -2px); }
            100% { transform: translate(0); }
          }
          @keyframes glitch2 {
            0% { transform: translate(0); }
            20% { transform: translate(2px, -2px); }
            40% { transform: translate(2px, 2px); }
            60% { transform: translate(-2px, -2px); }
            80% { transform: translate(-2px, 2px); }
            100% { transform: translate(0); }
          }
        `}</style>
      </div>
    ),
    code: `<div className="relative text-4xl font-bold text-white">
  <span className="relative z-10">GLITCH</span>
  <span className="absolute top-0 left-0 text-red-500 animate-[glitch1_0.5s_infinite_linear_alternate-reverse]">
    GLITCH
  </span>
  <span className="absolute top-0 left-0 text-blue-500 animate-[glitch2_0.5s_infinite_linear_alternate-reverse]">
    GLITCH
  </span>
</div>

/* CSS */
@keyframes glitch1 {
  0% { transform: translate(0); }
  20% { transform: translate(-2px, 2px); }
  /* ... more keyframes */
}`,
  },
]

export function TextAnimationComponents() {
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
        <h1 className="text-4xl font-bold mb-4">Text Animations</h1>
        <p className="text-xl text-muted-foreground">
          Dynamic text effects and animations to make your content stand out.
        </p>
      </div>

      <div className="grid gap-8">
        {textAnimationVariants.map((variant) => (
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
              <div className="p-12 
bg-white dark:bg-transparent flex items-center justify-center min-h-[200px]">
                {variant.component()}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}


