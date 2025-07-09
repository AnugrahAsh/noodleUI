"use client"

import { useState } from "react"
import { Copy, Check, Send, Bot, User, Mic, Paperclip, MoreVertical } from "lucide-react"

const chatbotVariants = [
  {
    id: "simple-chat",
    title: "Simple Chat Interface",
    description: "Basic chat UI with messages and input",
    component: () => {
      const [messages, setMessages] = useState([
        { id: 1, text: "Hello! How can I help you today?", sender: "bot", time: "10:30 AM" },
        { id: 2, text: "I need help with my account", sender: "user", time: "10:31 AM" },
        {
          id: 3,
          text: "I'd be happy to help you with your account. What specific issue are you experiencing?",
          sender: "bot",
          time: "10:31 AM",
        },
      ])
      const [input, setInput] = useState("")

      const sendMessage = () => {
        if (input.trim()) {
          setMessages([
            ...messages,
            {
              id: messages.length + 1,
              text: input,
              sender: "user",
              time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
            },
          ])
          setInput("")
        }
      }

      return (
        <div className="w-full max-w-md mx-auto bg-card border border-border rounded-2xl overflow-hidden">
          {/* Header */}
          <div className="p-4 border-b border-border bg-muted/50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <Bot size={20} className="text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold">AI Assistant</h3>
                <p className="text-sm text-muted-foreground">Online</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="h-80 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`flex items-start gap-2 max-w-[80%] ${message.sender === "user" ? "flex-row-reverse" : ""}`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.sender === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                    }`}
                  >
                    {message.sender === "user" ? <User size={14} /> : <Bot size={14} />}
                  </div>
                  <div
                    className={`rounded-2xl px-4 py-2 ${
                      message.sender === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <p
                      className={`text-xs mt-1 ${
                        message.sender === "user" ? "text-primary-foreground/70" : "text-muted-foreground"
                      }`}
                    >
                      {message.time}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 bg-muted rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/60"
              />
              <button
                onClick={sendMessage}
                className="p-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )
    },
    code: `<div className="w-full max-w-md mx-auto bg-card border border-border rounded-2xl overflow-hidden">
  {/* Header */}
  <div className="p-4 border-b border-border bg-muted/50">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
        <Bot size={20} className="text-primary-foreground" />
      </div>
      <div>
        <h3 className="font-semibold">AI Assistant</h3>
        <p className="text-sm text-muted-foreground">Online</p>
      </div>
    </div>
  </div>

  {/* Messages */}
  <div className="h-80 overflow-y-auto p-4 space-y-4">
    {messages.map((message) => (
      <div key={message.id} className={\`flex \${message.sender === "user" ? "justify-end" : "justify-start"}\`}>
        <div className={\`rounded-2xl px-4 py-2 \${message.sender === "user" ? "bg-primary text-primary-foreground" : "bg-muted"}\`}>
          <p className="text-sm">{message.text}</p>
        </div>
      </div>
    ))}
  </div>

  {/* Input */}
  <div className="p-4 border-t border-border">
    <div className="flex items-center gap-2">
      <input type="text" placeholder="Type your message..." className="flex-1 px-3 py-2 bg-muted rounded-lg" />
      <button className="p-2 bg-primary text-primary-foreground rounded-lg">
        <Send size={16} />
      </button>
    </div>
  </div>
</div>`,
  },
  {
    id: "advanced-chat",
    title: "Advanced Chat Widget",
    description: "Feature-rich chat with attachments and voice",
    component: () => (
      <div className="w-full max-w-lg mx-auto bg-card border border-border rounded-2xl overflow-hidden shadow-xl">
        {/* Header */}
        <div className="p-4 border-b border-border bg-gradient-to-r from-blue-500 to-purple-600 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Bot size={20} />
              </div>
              <div>
                <h3 className="font-semibold">Smart Assistant</h3>
                <p className="text-sm text-white/80">Powered by AI</p>
              </div>
            </div>
            <button className="p-2 hover:bg-white/10 rounded-lg transition">
              <MoreVertical size={16} />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="h-96 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-gray-50/50 to-white dark:from-gray-900/50 dark:to-background">
          <div className="flex justify-start">
            <div className="flex items-start gap-2 max-w-[80%]">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <Bot size={14} className="text-white" />
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-2xl px-4 py-3 shadow-sm">
                <p className="text-sm">Welcome! I'm your AI assistant. I can help you with:</p>
                <div className="mt-2 space-y-1">
                  <div className="px-2 py-1 bg-blue-50 dark:bg-blue-950/20 rounded text-xs text-blue-600 dark:text-blue-400">
                    📊 Data Analysis
                  </div>
                  <div className="px-2 py-1 bg-green-50 dark:bg-green-950/20 rounded text-xs text-green-600 dark:text-green-400">
                    💡 Creative Ideas
                  </div>
                  <div className="px-2 py-1 bg-purple-50 dark:bg-purple-950/20 rounded text-xs text-purple-600 dark:text-purple-400">
                    🔧 Technical Support
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl px-4 py-3 max-w-[80%]">
              <p className="text-sm">Can you help me analyze some data?</p>
              <p className="text-xs text-white/70 mt-1">2:34 PM</p>
            </div>
          </div>

          <div className="flex justify-start">
            <div className="flex items-start gap-2 max-w-[80%]">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <Bot size={14} className="text-white" />
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-2xl px-4 py-3 shadow-sm">
                <p className="text-sm">
                  I'd be happy to help you analyze your data. Please share your dataset or describe what you'd like to
                  analyze.
                </p>
                <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span>AI is typing...</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Input */}
        <div className="p-4 border-t border-border bg-muted/30">
          <div className="flex items-center gap-2 mb-2">
            <button className="p-2 hover:bg-muted rounded-lg transition">
              <Paperclip size={16} className="text-muted-foreground" />
            </button>
            <button className="p-2 hover:bg-muted rounded-lg transition">
              <Mic size={16} className="text-muted-foreground" />
            </button>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Ask me anything..."
              className="flex-1 px-4 py-3 bg-background border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/60"
            />
            <button className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:opacity-90 transition">
              <Send size={16} />
            </button>
          </div>
        </div>
      </div>
    ),
    code: `<div className="w-full max-w-lg mx-auto bg-card border border-border rounded-2xl overflow-hidden shadow-xl">
  {/* Header with gradient */}
  <div className="p-4 border-b border-border bg-gradient-to-r from-blue-500 to-purple-600 text-white">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
          <Bot size={20} />
        </div>
        <div>
          <h3 className="font-semibold">Smart Assistant</h3>
          <p className="text-sm text-white/80">Powered by AI</p>
        </div>
      </div>
    </div>
  </div>

  {/* Enhanced input with attachments */}
  <div className="p-4 border-t border-border">
    <div className="flex items-center gap-2 mb-2">
      <button className="p-2 hover:bg-muted rounded-lg">
        <Paperclip size={16} />
      </button>
      <button className="p-2 hover:bg-muted rounded-lg">
        <Mic size={16} />
      </button>
    </div>
    <div className="flex items-center gap-2">
      <input type="text" placeholder="Ask me anything..." className="flex-1 px-4 py-3 bg-background border border-border rounded-xl" />
      <button className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl">
        <Send size={16} />
      </button>
    </div>
  </div>
</div>`,
  },
]

export function ChatbotComponents() {
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
        <h1 className="text-4xl font-bold mb-4">Chat Interfaces</h1>
        <p className="text-xl text-muted-foreground">
          Interactive chatbot and messaging components for AI-powered conversations.
        </p>
      </div>

      <div className="grid gap-8">
        {chatbotVariants.map((variant) => (
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
              <div className="p-8 
bg-white dark:bg-transparent flex items-center justify-center">
                {variant.component()}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

