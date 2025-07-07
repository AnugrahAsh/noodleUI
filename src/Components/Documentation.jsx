"use client"

import React from "react"

import { useState, useEffect } from "react"
import {
  Search,
  X,
  ChevronRight,
  Book,
  Component,
  Palette,
  Type,
  ImageIcon,
  Bot,
  Wand2,
  Home,
  Settings,
  Layers,
  Moon,
  Sun,
  Github,
} from "lucide-react"
import { Link } from "react-router-dom";
import '../App.css';
import '../globals.css';

import { ThemeProvider, useTheme } from "./theme-provider"

// Import component collections
import { ButtonComponents } from "./components/buttons"
import { CardComponents } from "./components/cards"
import { FormComponents } from "./components/forms"
import { NavigationComponents } from "./components/navigation"
import { ModalComponents } from "./components/modals"
import { ChartComponents } from "./components/charts"
import { LoadingComponents } from "./components/loading"
import { AvatarComponents } from "./components/avatars"
import { BadgeComponents } from "./components/badges"
import { HeroComponents } from "./components/hero-sections"
import { PricingComponents } from "./components/pricing"
import { FeatureComponents } from "./components/features"
import { TestimonialComponents } from "./components/testimonials"
import { BackgroundComponents } from "./components/backgrounds"
import { TextAnimationComponents } from "./components/text-animations"
import { ChatbotComponents } from "./components/chatbots"

// Code examples for each component section
const codeExamples = {
  buttons: `// Button Components
import { Button } from "@/components/ui/button"

export function ButtonExample() {
  return (
    <div className="space-y-4">
      <Button variant="default">Default Button</Button>
      <Button variant="secondary">Secondary Button</Button>
      <Button variant="outline">Outline Button</Button>
      <Button variant="ghost">Ghost Button</Button>
      <Button variant="destructive">Destructive Button</Button>
    </div>
  )
}`,

  cards: `// Card Components
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function CardExample() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card content goes here.</p>
      </CardContent>
      <CardFooter>
        <p>Card footer</p>
      </CardFooter>
    </Card>
  )
}`,

  forms: `// Form Components
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export function FormExample() {
  return (
    <form className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="Enter your email" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" placeholder="Enter your password" />
      </div>
      <Button type="submit">Submit</Button>
    </form>
  )
}`,

  navigation: `// Navigation Components
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu"

export function NavigationExample() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>Documentation</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}`,

  modals: `// Modal Components
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export function ModalExample() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open Modal</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Modal Title</DialogTitle>
          <DialogDescription>
            This is a modal dialog example.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}`,

  charts: `// Chart Components
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 600 },
  { name: 'Apr', value: 800 },
]

export function ChartExample() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  )
}`,

  loading: `// Loading Components
import { Loader2 } from 'lucide-react'

export function LoadingExample() {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Loader2 className="h-4 w-4 animate-spin" />
        <span>Loading...</span>
      </div>
      
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div className="bg-blue-600 h-2.5 rounded-full animate-pulse" style={{width: '45%'}}></div>
      </div>
    </div>
  )
}`,

  avatars: `// Avatar Components
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function AvatarExample() {
  return (
    <div className="flex space-x-4">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
    </div>
  )
}`,

  badges: `// Badge Components
import { Badge } from "@/components/ui/badge"

export function BadgeExample() {
  return (
    <div className="space-x-2">
      <Badge variant="default">Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="destructive">Destructive</Badge>
    </div>
  )
}`,

  "hero-sections": `// Hero Section Components
export function HeroExample() {
  return (
    <section className="py-20 px-4 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Build Amazing
        <span className="text-blue-600"> Interfaces</span>
      </h1>
      <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
        Create beautiful, responsive web applications with our modern component library.
      </p>
      <div className="space-x-4">
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700">
          Get Started
        </button>
        <button className="border border-gray-300 px-8 py-3 rounded-lg hover:bg-gray-50">
          Learn More
        </button>
      </div>
    </section>
  )
}`,

  pricing: `// Pricing Components
export function PricingExample() {
  return (
    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {['Basic', 'Pro', 'Enterprise'].map((plan, index) => (
        <div key={plan} className="border rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">{plan}</h3>
          <div className="text-4xl font-bold mb-6">
            ${"$"}
            {index === 0 ? '9'  === 1 ? '29' : '99'}
            <span className="text-lg text-gray-600">/month</span>
          </div>
          <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
            Choose Plan
          </button>
        </div>
      ))}
    </div>
  )
}`,

  features: `// Feature Components
import { Check, Star, Zap } from 'lucide-react'

export function FeatureExample() {
  const features = [
    { icon: Check, title: "Easy to Use", description: "Simple and intuitive interface" },
    { icon: Star, title: "High Quality", description: "Premium components and design" },
    { icon: Zap, title: "Fast Performance", description: "Optimized for speed and efficiency" }
  ]

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <div key={index} className="text-center p-6">
          <feature.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
          <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
          <p className="text-gray-600">{feature.description}</p>
        </div>
      ))}
    </div>
  )
}`,

  testimonials: `// Testimonial Components
export function TestimonialExample() {
  const testimonials = [
    {
      name: "John Doe",
      role: "CEO, TechCorp",
      content: "This component library has transformed our development process.",
      avatar: "JD"
    },
    {
      name: "Jane Smith", 
      role: "Designer, CreativeStudio",
      content: "Beautiful components that are easy to customize and implement.",
      avatar: "JS"
    }
  ]

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
          <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
          <div className="flex items-center">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
              {testimonial.avatar}
            </div>
            <div>
              <div className="font-semibold">{testimonial.name}</div>
              <div className="text-sm text-gray-500">{testimonial.role}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}`,

  backgrounds: `// Background Components
export function BackgroundExample() {
  return (
    <div className="space-y-8">
      {/* Gradient Background */}
      <div className="h-40 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
        <h3 className="text-white text-xl font-semibold">Gradient Background</h3>
      </div>
      
      {/* Animated Background */}
      <div className="h-40 bg-black rounded-lg relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-r from-green-400/30 via-blue-500/20 to-purple-600/30 animate-pulse"></div>
        <h3 className="text-white text-xl font-semibold relative z-10">Animated Background</h3>
      </div>
    </div>
  )
}`,

  "text-animations": `// Text Animation Components
import { useState, useEffect } from "react"

export function TextAnimationExample() {
  const [text, setText] = useState("")
  const fullText = "Hello, I'm animated text!"

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
    <div className="space-y-8">
      {/* Typewriter Effect */}
      <div className="text-2xl font-mono">
        {text}<span className="animate-pulse">|</span>
      </div>
      
      {/* Fade In Animation */}
      <div className="text-2xl font-bold animate-fade-in-up">
        Fade In Up Animation
      </div>
      
      {/* Gradient Text */}
      <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Gradient Text Effect
      </div>
    </div>
  )
}`,

  chatbots: `// Chatbot Components
import { Bot, Send } from 'lucide-react'

export function ChatbotExample() {
  const messages = [
    { id: 1, sender: "bot", text: "Hello! How can I help you today?" },
    { id: 2, sender: "user", text: "I need help with my account" },
    { id: 3, sender: "bot", text: "I'd be happy to help you with your account. What specific issue are you experiencing?" }
  ]

  return (
    <div className="w-full max-w-md bg-white border rounded-2xl overflow-hidden shadow-lg">
      {/* Header */}
      <div className="p-4 border-b bg-gray-50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
            <Bot size={20} className="text-white" />
          </div>
          <div>
            <h3 className="font-semibold">AI Assistant</h3>
            <p className="text-sm text-gray-500">Online</p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="h-80 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div key={message.id} className={\`flex \${message.sender === "user" ? "justify-end" : "justify-start"}\`}>
            <div className={\`rounded-2xl px-4 py-2 max-w-[80%] \${message.sender === "user" ? "bg-blue-600 text-white" : "bg-gray-100"}\`}>
              <p className="text-sm">{message.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-4 border-t">
        <div className="flex items-center gap-2">
          <input type="text" placeholder="Type your message..." className="flex-1 px-3 py-2 bg-gray-100 rounded-lg text-sm" />
          <button className="p-2 bg-blue-600 text-white rounded-lg">
            <Send size={16} />
          </button>
        </div>
      </div>
    </div>
  )
}`,
}

function DocumentationContent() {
  const { theme, setTheme } = useTheme()
  const [activeSection, setActiveSection] = useState("introduction")
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [githubStars, setGithubStars] = useState(null)
  const [showCode, setShowCode] = useState({})

  useEffect(() => {
    const fetchGithubStars = async () => {
      try {
        const response = await fetch("https://api.github.com/repos/AnugrahAsh/noodleUI")
        const data = await response.json()
        setGithubStars(data.stargazers_count?.toString() || "5K+")
      } catch (error) {
        console.error("Failed to fetch GitHub stars:", error)
        setGithubStars("5K+")
      }
    }

    fetchGithubStars()
  }, [])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        setSearchOpen(true)
      }
      if (e.key === "Escape") {
        setSearchOpen(false)
        setSearchQuery("")
        setSearchResults([])
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const toggleCodeView = (sectionId) => {
    setShowCode((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }))
  }

  const copyToClipboard = (code) => {
    navigator.clipboard.writeText(code)
  }

  const sidebarItems = [
    {
      title: "Getting Started",
      items: [
        { id: "introduction", title: "Introduction", icon: Book },
        { id: "installation", title: "Installation", icon: Settings },
        { id: "quick-start", title: "Quick Start", icon: Home },
        { id: "theming", title: "Theming", icon: Palette },
        { id: "dark-mode", title: "Dark Mode", icon: Moon },
      ],
    },
    {
      title: "Premium Components",
      items: [
        { id: "hero-sections", title: "Hero Sections", icon: Wand2 },
        { id: "pricing", title: "Pricing Tables", icon: Component },
        { id: "features", title: "Feature Sections", icon: Component },
        { id: "testimonials", title: "Testimonials", icon: Component },
      ],
    },
    {
      title: "Chatbot UI",
      items: [{ id: "chatbots", title: "Chat Interfaces", icon: Bot }],
    },
    {
      title: "Backgrounds",
      items: [{ id: "backgrounds", title: "Background Effects", icon: ImageIcon }],
    },
    {
      title: "Text Animations",
      items: [{ id: "text-animations", title: "Text Effects", icon: Type }],
    },
    {
      title: "Basic Components",
      items: [
        { id: "buttons", title: "Buttons", icon: Component },
        { id: "cards", title: "Cards", icon: Component },
        { id: "forms", title: "Forms", icon: Component },
        { id: "navigation", title: "Navigation", icon: Component },
        { id: "modals", title: "Modals", icon: Component },
        { id: "charts", title: "Charts", icon: Component },
        { id: "loading", title: "Loading", icon: Component },
        { id: "avatars", title: "Avatars", icon: Component },
        { id: "badges", title: "Badges", icon: Component },
      ],
    },
  ]

  const handleSearch = (query) => {
    if (!query.trim()) {
      setSearchResults([])
      return
    }
    const allItems = sidebarItems.flatMap(section => section.items)
    const filteredResults = allItems.filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase())
    )
    setSearchResults(filteredResults)
  }

  useEffect(() => {
    handleSearch(searchQuery)
  }, [searchQuery])

  const renderComponentWithToggle = (sectionId, ComponentToRender) => {
    const isCodeView = showCode[sectionId]
    const code = codeExamples[sectionId]

    return React.createElement(
      "div",
      { className: "space-y-6" },
      // Content
      isCodeView
        ? React.createElement(
            "div",
            { className: "border border-gray-200 rounded-xl overflow-hidden" },
            React.createElement(
              "div",
              { className: "bg-gray-900 text-gray-100 p-4 overflow-x-auto" },
              React.createElement("pre", { className: "text-sm" }, React.createElement("code", null, code)),
            ),
          )
        : React.createElement(ComponentToRender),
    )
  }

  const renderContent = () => {
    switch (activeSection) {
      case "introduction":
        return React.createElement(
          "div",
          { className: "space-y-12" },
          // Structured Data for Documentation
          React.createElement("script", {
            type: "application/ld+json",
            dangerouslySetInnerHTML: {
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "TechArticle",
                headline: "NoodleUI Component Library Documentation",
                description:
                  "Comprehensive documentation for NoodleUI React components including buttons, cards, forms, navigation, modals, charts, loading states, avatars, badges, hero sections, pricing tables, features, testimonials, backgrounds, text animations, and chatbot interfaces.",
                author: {
                  "@type": "Organization",
                  name: "NoodleUI Team",
                },
                publisher: {
                  "@type": "Organization",
                  name: "NoodleUI",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://noodle-ui.vercel.app/logo.png",
                  },
                },
                datePublished: "2024-01-01",
                dateModified: new Date().toISOString(),
                mainEntityOfPage: {
                  "@type": "WebPage",
                  "@id": "https://noodle-ui.vercel.app/docs",
                },
              }),
            },
          }),

          React.createElement(
            "div",
            null,
            React.createElement("h1", { className: "text-4xl font-bold mb-4" }, "Introduction"),
            React.createElement(
              "p",
              { className: "text-xl text-muted-foreground" },
              "Beautiful, accessible React components for modern web applications and chat interfaces.",
            ),
          ),

          React.createElement(
            "div",
            {
              className:
                "border border-border rounded-xl p-8 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-950/20 dark:to-purple-950/20",
            },
            React.createElement(
              "div",
              { className: "flex items-start gap-6" },
              React.createElement(
                "div",
                {
                  className:
                    "w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg",
                },
                React.createElement(Layers, { className: "w-8 h-8 text-white" }),
              ),
              React.createElement(
                "div",
                null,
                React.createElement("h2", { className: "text-2xl font-semibold mb-3" }, "Welcome to NoodleUI"),
                React.createElement(
                  "p",
                  { className: "text-muted-foreground leading-relaxed text-lg mb-4" },
                  "A modern React component library with five distinct categories: Premium components, interactive chatbot UI components, stunning backgrounds, dynamic text animations, and essential basic components. Built with Tailwind CSS and designed for the future of human-AI interaction.",
                ),
                React.createElement(
                  "p",
                  { className: "text-muted-foreground leading-relaxed" },
                  "NoodleUI provides 300+ carefully crafted components with built-in accessibility, dark mode support, and micro-interactions that bring your interfaces to life.",
                ),
              ),
            ),
          ),

          React.createElement(
            "div",
            { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6" },
            [
              {
                title: "Premium Components",
                description: "Beautiful, production-ready components with advanced animations",
                icon: Wand2,
                color: "purple",
              },
              {
                title: "Chatbot UI",
                description: "Interactive chatbot interfaces with micro-interactions",
                icon: Bot,
                color: "blue",
              },
              {
                title: "Backgrounds",
                description: "Stunning background effects and patterns",
                icon: ImageIcon,
                color: "green",
              },
              {
                title: "Text Animations",
                description: "Dynamic text effects and animations",
                icon: Type,
                color: "orange",
              },
              {
                title: "Basic Components",
                description: "Essential UI building blocks",
                icon: Component,
                color: "gray",
              },
            ].map((item, index) =>
              React.createElement(
                "div",
                {
                  key: index,
                  className:
                    "group p-6 border border-border rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105",
                },
                React.createElement(
                  "div",
                  {
                    className:
                      "w-12 h-12 bg-blue-50 dark:bg-blue-950/50 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300",
                  },
                  React.createElement(item.icon, { className: "w-6 h-6 text-blue-600 dark:text-blue-400" }),
                ),
                React.createElement("h3", { className: "font-semibold mb-2" }, item.title),
                React.createElement(
                  "p",
                  { className: "text-sm text-muted-foreground leading-relaxed" },
                  item.description,
                ),
              ),
            ),
          ),
        )

      case "installation":
        return React.createElement(
          "div",
          { className: "space-y-8" },
          React.createElement(
            "div",
            null,
            React.createElement("h1", { className: "text-4xl font-bold mb-4" }, "Installation"),
            React.createElement(
              "p",
              { className: "text-xl text-muted-foreground" },
              "Get started with NoodleUI in your React project.",
            ),
          ),

          React.createElement(
            "div",
            { className: "space-y-6" },
            React.createElement(
              "div",
              null,
              React.createElement("h2", { className: "text-2xl font-semibold mb-4" }, "Package Manager"),
              React.createElement(
                "div",
                { className: "space-y-4" },
                React.createElement(
                  "div",
                  { className: "border border-border rounded-lg overflow-hidden" },
                  React.createElement(
                    "div",
                    { className: "flex items-center justify-between px-4 py-3 bg-muted border-b border-border" },
                    React.createElement("span", { className: "text-sm font-medium" }, "npm"),
                  ),
                  React.createElement(
                    "div",
                    { className: "p-4 bg-gray-900 text-gray-100" },
                    React.createElement("code", { className: "text-sm" }, "npm install noodleui"),
                  ),
                ),
              ),
            ),
          ),
        )

      // Component sections with toggle functionality
      case "buttons":
        return renderComponentWithToggle("buttons", ButtonComponents)
      case "cards":
        return renderComponentWithToggle("cards", CardComponents)
      case "forms":
        return renderComponentWithToggle("forms", FormComponents)
      case "navigation":
        return renderComponentWithToggle("navigation", NavigationComponents)
      case "modals":
        return renderComponentWithToggle("modals", ModalComponents)
      case "charts":
        return renderComponentWithToggle("charts", ChartComponents)
      case "loading":
        return renderComponentWithToggle("loading", LoadingComponents)
      case "avatars":
        return renderComponentWithToggle("avatars", AvatarComponents)
      case "badges":
        return renderComponentWithToggle("badges", BadgeComponents)
      case "hero-sections":
        return renderComponentWithToggle("hero-sections", HeroComponents)
      case "pricing":
        return renderComponentWithToggle("pricing", PricingComponents)
      case "features":
        return renderComponentWithToggle("features", FeatureComponents)
      case "testimonials":
        return renderComponentWithToggle("testimonials", TestimonialComponents)
      case "backgrounds":
        return renderComponentWithToggle("backgrounds", BackgroundComponents)
      case "text-animations":
        return renderComponentWithToggle("text-animations", TextAnimationComponents)
      case "chatbots":
        return renderComponentWithToggle("chatbots", ChatbotComponents)

      default:
        return React.createElement(
          "div",
          { className: "text-center py-12" },
          React.createElement("h1", { className: "text-2xl font-bold mb-2" }, "Coming Soon"),
          React.createElement("p", { className: "text-muted-foreground" }, "This section is under development."),
        )
    }
  }

  return React.createElement(
    "div",
    { className: "min-h-screen bg-background" },
    // Search Modal
    searchOpen &&
      React.createElement(
        "div",
        { className: "fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center pt-32" },
        React.createElement(
          "div",
          { className: "bg-card rounded-2xl shadow-2xl border border-border w-full max-w-2xl mx-4" },
          React.createElement(
            "div",
            { className: "flex items-center gap-3 p-4 border-b border-border" },
            React.createElement(Search, { className: "w-5 h-5 text-muted-foreground" }),
            React.createElement("input", {
              type: "text",
              placeholder: "Search documentation...",
              value: searchQuery,
              onChange: (e) => {
                setSearchQuery(e.target.value)
              },
              className: "flex-1 bg-transparent outline-none",
              autoFocus: true,
            }),
            React.createElement(
              "button",
              {
                onClick: () => setSearchOpen(false),
                className: "p-1 rounded-lg hover:bg-accent transition-colors",
              },
            React.createElement(X, { size: 16 }),
            ),
          ),

        (searchQuery.trim() && searchResults.length > 0) && (
          React.createElement(
            "div",
            { className: "max-h-64 overflow-y-auto border-t border-border" },
            React.createElement(
              "ul",
              { className: "py-2" },
              searchResults.map((result, index) =>
                React.createElement(
                  "li",
                  { 
                    key: index, 
                    className: "px-4 py-3 cursor-pointer hover:bg-accent hover:text-accent-foreground transition-colors border-b border-border/50 last:border-b-0", 
                    onClick: () => {
                      setActiveSection(result.id)
                      setSearchOpen(false)
                      setSearchQuery("")
                      setSearchResults([])
                    }
                  },
                  React.createElement(
                    "div",
                    { className: "flex items-center gap-3" },
                    React.createElement(result.icon, { size: 16, className: "text-muted-foreground" }),
                    React.createElement("span", { className: "font-medium" }, result.title)
                  )
                )
              )
            )
          )
        ),
        (searchQuery.trim() && searchResults.length === 0) && (
          React.createElement(
            "div",
            { className: "px-4 py-8 text-center text-muted-foreground border-t border-border" },
            React.createElement("p", null, "No results found for \"", searchQuery, "\"")
          )
        ),
        ),
      ),

    React.createElement(
      "div",
      { className: "flex min-h-screen" },
      // Sidebar
      React.createElement(
        "aside",
        {
          className:
            "w-64 border-r border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 h-screen overflow-y-auto sidebar-scroll",
        },
        React.createElement(
          "div",
          { className: "p-6 border-b border-border" },
          React.createElement(
            Link,
            { href: "/", className: "flex items-center gap-3" },
            React.createElement(
              "div",
              {
                className:
                  "w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center",
              },
              React.createElement(Layers, { className: "w-4 h-4 text-white" }),
            ),
            React.createElement(
              "span",
              { className: "text-xl font-light" },
              "Noodle",
              React.createElement("span", { className: "text-blue-500 font-medium" }, "UI"),
            ),
          ),

          React.createElement(
            "div",
            { className: "flex items-center gap-2 mt-6" },
            React.createElement(
              "button",
              {
                onClick: () => setSearchOpen(true),
                className:
                  "flex-1 flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground bg-muted rounded-lg hover:bg-accent transition-colors",
              },
              React.createElement(Search, { size: 14 }),
              React.createElement("span", null, "Search..."),
              React.createElement(
                "kbd",
                { className: "ml-auto text-xs bg-background px-1.5 py-0.5 rounded border" },
                "⌘K",
              ),
            ),

            React.createElement(
              "button",
              {
                onClick: toggleTheme,
                className: "p-2 rounded-lg border border-border hover:bg-accent transition-colors",
                "aria-label": "Toggle theme",
              },
              theme === "dark" ? React.createElement(Sun, { size: 14 }) : React.createElement(Moon, { size: 14 }),
            ),

            React.createElement(
              "a",
              {
                href: "https://github.com/AnugrahAsh/noodleUI",
                target: "_blank",
                className: "p-2 rounded-lg border border-border hover:bg-accent transition-colors",
                rel: "noopener noreferrer",
                "aria-label": "View on GitHub",
              },
              React.createElement(Github, { size: 14 }),
            ),
          ),
        ),

        React.createElement(
          "div",
          { className: "p-4" },
          sidebarItems.map((section, index) =>
            React.createElement(
              "div",
              { key: index, className: "mb-8" },
              React.createElement(
                "h3",
                { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 px-2" },
                section.title,
              ),
              React.createElement(
                "div",
                { className: "space-y-1" },
                section.items.map((item) =>
                  React.createElement(
                    "button",
                    {
                      key: item.id,
                      onClick: () => setActiveSection(item.id),
                      className: `w-full flex items-center gap-3 px-3 py-2 text-sm rounded-lg transition-colors text-left ${
                        activeSection === item.id
                          ? "bg-accent text-accent-foreground font-medium"
                          : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                      }`,
                    },
                    React.createElement(item.icon, { size: 16 }),
                    React.createElement("span", null, item.title),
                  ),
                ),
              ),
            ),
          ),
        ),
      ),

      // Main Content
      React.createElement(
        "main",
        { className: "flex-1" },
        React.createElement(
          "header",
          {
            className:
              "sticky top-0 z-10 flex h-16 items-center gap-4 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-6",
          },
          React.createElement(
            "div",
            { className: "flex items-center gap-2 text-sm text-muted-foreground" },
            React.createElement("span", null, "Docs"),
            React.createElement(ChevronRight, { size: 14 }),
            React.createElement(
              "span",
              { className: "text-foreground capitalize" },
              sidebarItems.flatMap((section) => section.items).find((item) => item.id === activeSection)?.title ||
                activeSection,
            ),
          ),
        ),

        React.createElement(
          "div",
          { className: "p-6" },
          React.createElement("div", { className: "max-w-4xl mx-auto" }, renderContent()),
        ),
      ),
    ),
  )
}

export default function Documentation() {
  return React.createElement(
    ThemeProvider,
    { defaultTheme: "system", storageKey: "noodleui-theme" },
    React.createElement(DocumentationContent),
  )
}


