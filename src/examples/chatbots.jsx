"use client"

import { useState } from "react"
import { X } from "lucide-react"

export const MinimalChat = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! How can I help you today?", sender: "bot" },
    { id: 2, text: "I'd like to learn about your components", sender: "user" },
    { id: 3, text: "Great! Our component library includes everything you need for modern web apps.", sender: "bot" },
  ])
  const [input, setInput] = useState("")

  const sendMessage = () => {
    if (!input.trim()) return

    const newMessage = {
      id: messages.length + 1,
      text: input,
      sender: "user" ,
    }

    setMessages([...messages, newMessage])
    setInput("")

    // Simulate bot response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          text: "Thanks for your message! I'm here to help.",
          sender: "bot" ,
        },
      ])
    }, 1000)
  }

  return (
    <div className="max-w-md mx-auto bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
      <div className="p-4 border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white text-sm">AI</span>
          </div>
          <div>
            <h3 className="font-medium">Assistant</h3>
            <p className="text-xs text-green-500">Online</p>
          </div>
        </div>
      </div>

      <div className="h-80 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-xs px-4 py-2 rounded-2xl ${
                message.sender === "user"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 border-t border-gray-200 dark:border-gray-800">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Type a message..."
            className="flex-1 px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={sendMessage}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  )
}

export const EtherealChat = () => {
  const [messages] = useState([
    { id: 1, text: "Welcome, traveler. What mysteries shall we explore today?", sender: "bot" },
    { id: 2, text: "Show me the path to creative enlightenment.", sender: "user" },
    { id: 3, text: "The path reveals itself to those who dare to dream beyond the ordinary...", sender: "bot" },
  ])

  return (
    <div className="max-w-lg mx-auto bg-gradient-to-b from-purple-50/50 to-blue-50/50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-3xl border border-purple-200/50 dark:border-purple-800/50 p-6">
      <div className="text-center mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full mx-auto mb-2 flex items-center justify-center">
          <span className="text-white font-bold">✨</span>
        </div>
        <h3 className="font-light text-purple-600 dark:text-purple-400">Ethereal Guide</h3>
      </div>

      <div className="space-y-6 mb-6">
        {messages.map((message) => (
          <div key={message.id} className="space-y-2">
            <div
              className={`text-xs uppercase tracking-wider ${
                message.sender === "user" ? "text-right text-blue-500" : "text-purple-500"
              }`}
            >
              {message.sender === "user" ? "You" : "Guide"}
            </div>
            <div
              className={`${
                message.sender === "user"
                  ? "text-right border-r-4 border-blue-400 pr-4 py-2 bg-blue-50/50 dark:bg-blue-900/20 rounded-l-lg"
                  : "border-l-4 border-purple-400 pl-4 py-2 bg-purple-50/50 dark:bg-purple-900/20 rounded-r-lg"
              }`}
            >
              <p className="text-sm leading-relaxed">{message.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="relative">
        <input
          type="text"
          placeholder="Whisper your thoughts..."
          className="w-full px-4 py-3 bg-white/50 dark:bg-black/20 border border-purple-200/50 dark:border-purple-800/50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-400 backdrop-blur-sm"
        />
        <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform">
          →
        </button>
      </div>
    </div>
  )
}

export const NeoGlassChat = () => {
  const [messages] = useState([
    { id: 1, text: "Greetings! Need insights or just a spark of inspiration?", sender: "bot" },
    { id: 2, text: "Yes! Can you suggest UI layouts for a dashboard?", sender: "user" },
    { id: 3, text: "Let me generate some modern dashboard concepts for you.", sender: "bot" },
  ])

  return (
    <div className="max-w-lg mx-auto bg-white/10 dark:bg-black/20 backdrop-blur-xl rounded-3xl border border-white/20 p-6 shadow-2xl">
      <div className="flex items-center gap-3 mb-6 p-3 bg-white/10 rounded-2xl">
        <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center">
          <span className="text-white font-bold">AI</span>
        </div>
        <div>
          <h3 className="font-medium">NeoGlass Assistant</h3>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-xs text-green-400">Neural Network Active</span>
          </div>
        </div>
      </div>

      <div className="space-y-4 mb-6 max-h-80 overflow-y-auto">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex items-start gap-3 ${message.sender === "user" ? "flex-row-reverse" : ""}`}
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                message.sender === "user" ? "bg-blue-500/20 text-blue-400" : "bg-green-500/20 text-green-400"
              }`}
            >
              {message.sender === "user" ? "U" : "AI"}
            </div>
            <div
              className={`max-w-xs px-4 py-3 rounded-2xl backdrop-blur-sm ${
                message.sender === "user"
                  ? "bg-blue-500/20 text-blue-100 border border-blue-500/30"
                  : "bg-green-500/20 text-green-100 border border-green-500/30"
              }`}
            >
              <p className="text-sm">{message.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Enter neural command..."
          className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400 backdrop-blur-sm text-white placeholder-gray-400"
        />
        <button className="px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-2xl hover:scale-105 transition-transform font-medium">
          Send
        </button>
      </div>
    </div>
  )
}

export const RetroTerminalChat = () => {
  const [messages] = useState([
    { id: 1, text: "Hello, human. Request logged. Awaiting command.", sender: "bot" },
    { id: 2, text: "Run creative protocol alpha.", sender: "user" },
    { id: 3, text: "Protocol initiated. Generating creative solutions...", sender: "bot" },
  ])

  return (
    <div className="max-w-2xl mx-auto bg-black text-green-400 font-mono text-sm rounded-2xl border-2 border-green-500/30 overflow-hidden shadow-2xl shadow-green-500/20">
      <div className="bg-green-500/10 px-4 py-2 border-b border-green-500/30 flex items-center gap-2">
        <div className="flex gap-1">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <span className="text-green-300">terminal@noodleui:~$</span>
      </div>

      <div className="p-4 space-y-3 min-h-80">
        {messages.map((message) => (
          <div key={message.id} className="space-y-1">
            <div className={`text-xs ${message.sender === "user" ? "text-blue-400" : "text-green-500"}`}>
              {message.sender === "user" ? "you@terminal:" : "assistant@ai:"}
            </div>
            <div className="pl-4">
              <span className="text-gray-500">└──</span> {message.text}
            </div>
          </div>
        ))}

        <div className="flex items-center gap-2 mt-4">
          <span className="text-blue-400">you@terminal:</span>
          <span className="text-gray-500">└──</span>
          <input
            type="text"
            className="flex-1 bg-transparent outline-none text-green-400 caret-green-400"
            placeholder="Enter command..."
          />
          <span className="animate-pulse">█</span>
        </div>
      </div>
    </div>
  )
}

export const BubbleChat = () => {
  const [messages] = useState([
    { id: 1, text: "Hey there! 🎉 Ready to create something amazing?", sender: "bot" },
    { id: 2, text: "Let's build something cool together!", sender: "user" },
    { id: 3, text: "Perfect! I love your enthusiasm! ✨", sender: "bot" },
  ])

  return (
    <div className="max-w-md mx-auto bg-gradient-to-br from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20 rounded-3xl p-6 border border-pink-200/50 dark:border-pink-800/50">
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-gradient-to-br from-pink-400 via-purple-400 to-blue-400 rounded-full mx-auto mb-3 flex items-center justify-center animate-bounce">
          <span className="text-2xl">🤖</span>
        </div>
        <h3 className="font-medium text-purple-600 dark:text-purple-400">Bubble Bot</h3>
        <p className="text-xs text-gray-500">Always happy to help!</p>
      </div>

      <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-xs px-4 py-3 rounded-3xl shadow-lg ${
                message.sender === "user"
                  ? "bg-gradient-to-r from-blue-400 to-purple-500 text-white"
                  : "bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700"
              }`}
            >
              <p className="text-sm">{message.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Type something fun..."
          className="flex-1 px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-400 shadow-inner"
        />
        <button className="w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-500 text-white rounded-full hover:scale-110 transition-transform shadow-lg flex items-center justify-center">
          💬
        </button>
      </div>
    </div>
  )
}

export const CardChat = () => {
  const [messages] = useState([
    { id: 1, text: "Welcome to our support center. How can I assist you today?", sender: "bot", time: "2:30 PM" },
    { id: 2, text: "I need help with integrating your components", sender: "user", time: "2:31 PM" },
    {
      id: 3,
      text: "I'd be happy to help! Let me guide you through the integration process.",
      sender: "bot",
      time: "2:31 PM",
    },
  ])

  return (
    <div className="max-w-lg mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800">
      <div className="p-6 border-b border-gray-200 dark:border-gray-800 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-t-2xl">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
            <span className="text-white font-bold">CS</span>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100">Customer Support</h3>
            <p className="text-sm text-gray-500">Typically replies in minutes</p>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-4 max-h-80 overflow-y-auto">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-xs ${message.sender === "user" ? "order-2" : "order-1"}`}>
              <div
                className={`px-4 py-3 rounded-2xl shadow-sm ${
                  message.sender === "user"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-700"
                }`}
              >
                <p className="text-sm">{message.text}</p>
              </div>
              <p className={`text-xs text-gray-500 mt-1 ${message.sender === "user" ? "text-right" : "text-left"}`}>
                {message.time}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="p-6 border-t border-gray-200 dark:border-gray-800">
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 dark:bg-gray-800"
          />
          <button className="px-6 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors font-medium">
            Send
          </button>
        </div>
        <div className="flex items-center gap-2 mt-3">
          <button className="text-xs text-gray-500 hover:text-blue-500 transition-colors">📎 Attach</button>
          <button className="text-xs text-gray-500 hover:text-blue-500 transition-colors">😊 Emoji</button>
        </div>
      </div>
    </div>
  )
}

export const FloatingChat = () => {
  const [isOpen, setIsOpen] = useState(true)
  const [messages] = useState([{ id: 1, text: "Hi! I'm here to help. What can I do for you?", sender: "bot" }])

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="w-80 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800 animate-in slide-in-from-bottom-4 duration-300">
          <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-t-2xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-sm">💬</span>
                </div>
                <div>
                  <h3 className="font-medium">Chat Support</h3>
                  <p className="text-xs opacity-90">We're online!</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <X size={14} />
              </button>
            </div>
          </div>

          <div className="p-4 space-y-3 h-64 overflow-y-auto">
            {messages.map((message) => (
              <div key={message.id} className="flex items-start gap-2">
                <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xs">🤖</span>
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded-2xl rounded-tl-sm max-w-xs">
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t border-gray-200 dark:border-gray-800">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                <span className="text-sm">→</span>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
        >
          <span className="text-xl">💬</span>
        </button>
      )}
    </div>
  )
}

export const GradientChat = () => {
  const [messages] = useState([
    { id: 1, text: "Welcome to the gradient dimension! ✨", sender: "bot" },
    { id: 2, text: "This looks absolutely stunning!", sender: "user" },
    { id: 3, text: "Thank you! I love bringing color to conversations 🌈", sender: "bot" },
  ])

  return (
    <div className="max-w-md mx-auto bg-gradient-to-br from-pink-100 via-purple-50 to-indigo-100 dark:from-pink-900/30 dark:via-purple-900/30 dark:to-indigo-900/30 rounded-3xl p-6 border border-gradient-to-r from-pink-200 to-indigo-200">
      <div className="text-center mb-6">
        <div className="w-14 h-14 bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600 rounded-full mx-auto mb-3 flex items-center justify-center animate-pulse">
          <span className="text-white text-xl">🎨</span>
        </div>
        <h3 className="font-medium bg-gradient-to-r from-pink-600 to-indigo-600 bg-clip-text text-transparent">
          Gradient Assistant
        </h3>
        <p className="text-xs text-gray-500">Painting conversations with color</p>
      </div>

      <div className="space-y-4 mb-6 max-h-72 overflow-y-auto">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-xs px-4 py-3 rounded-3xl shadow-lg backdrop-blur-sm ${
                message.sender === "user"
                  ? "bg-gradient-to-r from-blue-400 to-purple-500 text-white"
                  : "bg-gradient-to-r from-pink-400 to-orange-400 text-white"
              }`}
            >
              <p className="text-sm font-medium">{message.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="relative">
        <input
          type="text"
          placeholder="Add some color to the conversation..."
          className="w-full px-4 py-3 bg-white/70 dark:bg-black/20 border-2 border-gradient-to-r from-pink-300 to-indigo-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-400 backdrop-blur-sm"
        />
        <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-r from-pink-500 to-indigo-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg">
          ✨
        </button>
      </div>
    </div>
  )
}
