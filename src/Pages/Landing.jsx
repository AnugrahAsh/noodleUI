"use client"

import { useState, useEffect } from "react"
import { Moon, Sun, Github, ArrowRight, Sparkles, Zap, Layers, Palette, Code, Heart } from "lucide-react"

const LandingPage = () => {
  const [darkMode, setDarkMode] = useState(true)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)

  const toggleTheme = () => setDarkMode(!darkMode)

  useEffect(() => {
     const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

    const handleScroll = () => setScrollY(window.scrollY)

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div
      className={`${darkMode ? "bg-black text-white" : "bg-white text-black"} transition-colors duration-500 overflow-x-hidden`}
    >
      {/* Floating cursor effect */}
      <div
        className="fixed w-6 h-6 bg-blue-400/20 rounded-full pointer-events-none z-50 transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: `scale(${scrollY > 100 ? 0.5 : 1})`,
        }}
      />

      {/* Enhanced Header */}
      <header className="fixed top-6 left-1/2 transform -translate-x-1/2 flex justify-between items-center px-8 py-4 w-[95%] max-w-7xl bg-white/10 dark:bg-black/20 backdrop-blur-xl rounded-2xl shadow-2xl z-40 border border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
            <Layers className="w-4 h-4 text-white" />
          </div>
          <h1 className="text-2xl font-light tracking-tight">
            noodle<span className="text-blue-400 font-medium">UI</span>
          </h1>
        </div>
        <div className="flex items-center gap-3">
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#features" className="hover:text-blue-400 transition-colors">
              Features
            </a>
            <a href="#examples" className="hover:text-blue-400 transition-colors">
              Examples
            </a>
            <a href="#docs" className="hover:text-blue-400 transition-colors">
              Docs
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/your-repo-link"
              target="_blank"
              className="p-2.5 rounded-xl border border-gray-600/30 hover:bg-gray-200/50 dark:hover:bg-gray-800/50 transition-all duration-200 hover:scale-105"
              rel="noopener noreferrer"
            >
              <Github size={16} />
            </a>
            <button
              onClick={toggleTheme}
              className="rounded-xl p-2.5 border border-gray-600/30 hover:bg-gray-200/50 dark:hover:bg-gray-800/50 transition-all duration-200 hover:scale-105"
            >
              {darkMode ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>
        </div>
      </header>

      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-400/5 rounded-full blur-2xl animate-bounce"
            style={{ animationDuration: "6s" }}
          />
          <div
            className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-300/5 rounded-full blur-xl animate-spin"
            style={{ animationDuration: "20s" }}
          />
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 opacity-30">
          <Sparkles className="w-6 h-6 text-blue-400 animate-pulse" />
        </div>
        <div className="absolute top-32 right-20 opacity-20">
          <Zap className="w-8 h-8 text-blue-300 animate-bounce" style={{ animationDelay: "1s" }} />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 rounded-full text-sm text-blue-400 mb-8 border border-blue-500/20">
            <Sparkles className="w-4 h-4" />
            <span>Introducing NoodleUI v2.0</span>
          </div>

          <h2 className="text-6xl md:text-8xl font-extralight tracking-tight leading-[0.9] mb-8">
            Abstract Interfaces
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              for Abstract Ideas
            </span>
          </h2>

          <p className="mt-8 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400 leading-relaxed">
            A visual library for experimental chat experiences — crafted for dreamers, tinkerers, and cosmic UI
            wanderers who dare to think differently.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <a
              href="#docs"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-2xl transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#examples"
              className="inline-flex items-center gap-2 px-8 py-4 border border-gray-600/30 rounded-2xl hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-all duration-200 hover:scale-105"
            >
              <Code className="w-4 h-4" />
              <span>View Examples</span>
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400/50 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section id="features" className="px-8 py-32 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-light mb-6">Designed for the Future</h2>
          <p className="text-xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
            Every component is crafted with intention, built for performance, and designed to inspire.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Layers className="w-6 h-6" />,
              title: "Fluid Architecture",
              desc: "Components that flow like water, adapting to your design vision with unprecedented flexibility and grace.",
              gradient: "from-blue-500/10 to-cyan-500/10",
            },
            {
              icon: <Palette className="w-6 h-6" />,
              title: "Theme Consciousness",
              desc: "Intelligent theming that reads your intent. From midnight void to daylight clarity, seamlessly.",
              gradient: "from-purple-500/10 to-pink-500/10",
            },
            {
              icon: <Zap className="w-6 h-6" />,
              title: "Zero Friction",
              desc: "Install once, customize forever. No configuration hell, no breaking changes, just pure creative flow.",
              gradient: "from-yellow-500/10 to-orange-500/10",
            },
            {
              icon: <Sparkles className="w-6 h-6" />,
              title: "Micro Interactions",
              desc: "Every hover, click, and transition tells a story. Components that feel alive and respond to touch.",
              gradient: "from-green-500/10 to-emerald-500/10",
            },
            {
              icon: <Code className="w-6 h-6" />,
              title: "Developer Joy",
              desc: "TypeScript-first, accessibility-minded, performance-optimized. Built by developers, for developers.",
              gradient: "from-indigo-500/10 to-blue-500/10",
            },
            {
              icon: <Heart className="w-6 h-6" />,
              title: "Community Driven",
              desc: "Open source, community-powered, and constantly evolving. Your feedback shapes our roadmap.",
              gradient: "from-red-500/10 to-rose-500/10",
            },
          ].map(({ icon, title, desc, gradient }, index) => (
            <div
              key={title}
              className={`group p-8 border border-gray-800/30 rounded-3xl bg-gradient-to-br ${gradient} backdrop-blur-sm hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl hover:border-gray-600/50`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-200">{icon}</div>
              <h3 className="text-xl font-medium mb-4 group-hover:text-blue-400 transition-colors">{title}</h3>
              <p className="text-gray-400 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Installation Section */}
      <section className="text-center px-6 py-32 bg-gradient-to-b from-transparent via-blue-950/5 to-transparent dark:via-blue-300/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-light tracking-tight mb-6">
            Install. <span className="text-blue-400">Improvise.</span> Invent.
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed">
            No clutter, no friction. Install the package and let your interface take shape organically.
          </p>

          <div className="flex justify-center mb-8">
            <div className="group bg-gray-100 dark:bg-gray-900 text-left px-8 py-6 rounded-2xl border border-gray-300/50 dark:border-gray-700/50 shadow-xl hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              <div className="flex items-center gap-3 mb-2">
                <div className="flex gap-1">
                  <div className="w-3 h-3 bg-red-400 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                  <div className="w-3 h-3 bg-green-400 rounded-full" />
                </div>
                <span className="text-xs text-gray-500">Terminal</span>
              </div>
              <code className="text-lg font-mono text-blue-600 dark:text-blue-400 group-hover:text-blue-500 transition-colors">
                npm install noodleui
              </code>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
            <span className="flex items-center gap-2 px-3 py-1 bg-gray-100/50 dark:bg-gray-800/50 rounded-full">
              ⚛️ React
            </span>
            <span className="flex items-center gap-2 px-3 py-1 bg-gray-100/50 dark:bg-gray-800/50 rounded-full">
              ▲ Next.js
            </span>
            <span className="flex items-center gap-2 px-3 py-1 bg-gray-100/50 dark:bg-gray-800/50 rounded-full">
              ⚡ Vite
            </span>
            <span className="flex items-center gap-2 px-3 py-1 bg-gray-100/50 dark:bg-gray-800/50 rounded-full">
              🔥 Remix
            </span>
          </div>
        </div>
      </section>

      {/* Enhanced Chat Examples */}
      <section id="examples" className="px-8 py-32 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-light mb-6">Chat Interfaces Reimagined</h2>
          <p className="text-xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
            From minimal to magical, explore different approaches to conversational UI design.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Minimal Chat */}
          <div className="group p-8 border border-gray-800/30 rounded-3xl bg-gradient-to-br from-blue-500/5 to-transparent hover:from-blue-500/10 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
              <p className="text-sm text-blue-400 font-medium">Minimal Stack</p>
            </div>
            <div className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 space-y-4 border border-white/10">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full" />
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 px-4 py-3 rounded-2xl rounded-tl-sm max-w-xs">
                  Hello! How can I help you today?
                </div>
              </div>
              <div className="flex items-start gap-3 justify-end">
                <div className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-4 py-3 rounded-2xl rounded-tr-sm max-w-xs">
                  What's the weather like today?
                </div>
                <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-gray-500 rounded-full" />
                </div>
              </div>
            </div>
          </div>

          {/* Ethereal Chat */}
          <div className="group p-8 border border-gray-800/30 rounded-3xl bg-gradient-to-br from-purple-500/5 to-transparent hover:from-purple-500/10 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
              <p className="text-sm text-purple-400 font-medium">Ethereal Layout</p>
            </div>
            <div className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 space-y-6 border border-white/10">
              <div className="space-y-2">
                <div className="text-xs uppercase text-gray-500 tracking-wider">Assistant</div>
                <div className="border-l-4 border-purple-400 pl-4 py-2 bg-purple-50/50 dark:bg-purple-900/20 rounded-r-lg">
                  Welcome, traveler. What mysteries shall we explore today?
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-xs uppercase text-gray-500 text-right tracking-wider">You</div>
                <div className="text-right border-r-4 border-blue-400 pr-4 py-2 bg-blue-50/50 dark:bg-blue-900/20 rounded-l-lg">
                  Show me the path to creative enlightenment.
                </div>
              </div>
            </div>
          </div>
          {/* NeoGlass Chat */}
<div className="group p-8 border border-gray-800/30 rounded-3xl bg-gradient-to-br from-green-500/5 to-transparent hover:from-green-500/10 transition-all duration-300">
  <div className="flex items-center gap-3 mb-6">
    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
    <p className="text-sm text-green-400 font-medium">NeoGlass UX</p>
  </div>
  <div className="bg-white/30 dark:bg-gray-900/30 backdrop-blur-xl rounded-2xl p-6 space-y-5 border border-white/20 shadow-lg">
    <div className="flex items-center gap-4">
      <div className="w-9 h-9 bg-green-200 dark:bg-green-900 rounded-full flex items-center justify-center">
        <span className="text-green-600 dark:text-green-300 font-bold">AI</span>
      </div>
      <div className="text-sm bg-green-50/70 dark:bg-green-900/50 px-5 py-3 rounded-xl shadow-inner">
        Greetings! Need insights or just a spark of inspiration?
      </div>
    </div>
    <div className="flex items-center gap-4 justify-end">
      <div className="text-sm bg-gray-100 dark:bg-gray-800 px-5 py-3 rounded-xl shadow-inner">
        Yes! Can you suggest UI layouts for a dashboard?
      </div>
      <div className="w-9 h-9 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center">
        <span className="text-gray-800 dark:text-gray-200 font-bold">Me</span>
      </div>
    </div>
  </div>
</div>
{/* Retro Terminal Chat */}
<div className="group p-8 border border-gray-800/30 rounded-3xl bg-gradient-to-br from-yellow-500/5 to-transparent hover:from-yellow-500/10 transition-all duration-300">
  <div className="flex items-center gap-3 mb-6">
    <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
    <p className="text-sm text-yellow-400 font-medium">Retro Terminal</p>
  </div>
  <div className="bg-black text-green-400 font-mono text-sm rounded-2xl p-6 space-y-3 border border-green-500/20 shadow-inner">
    <div className="flex flex-col">
      <span className="text-green-500">assistant@ai:</span>
      <span>└── Hello, human. Request logged. Awaiting command.</span>
    </div>
    <div className="flex flex-col items-end text-right">
      <span className="text-blue-400">you@terminal:</span>
      <span>└── Run creative protocol alpha.</span>
    </div>
  </div>
</div>

        </div>
        <a href="" className=" m-4 absolute">Show more &rarr;</a>
      </section>

      {/* Philosophy Section */}
      <section className="px-8 py-32 max-w-6xl mx-auto text-center">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent rounded-3xl" />
          <div className="relative p-12">
            <h2 className="text-5xl font-light mb-8">Why NoodleUI?</h2>
            <p className="text-xl text-gray-500 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
              We're not another UI library. We're a philosophy. NoodleUI is built on the belief that chat interfaces are
              more than inputs and outputs — they're experiences that should feel
              <span className="text-blue-400 font-medium"> magical</span>,
              <span className="text-blue-400 font-medium"> intuitive</span>, and
              <span className="text-blue-400 font-medium"> alive</span>.
            </p>
            <div className="mt-12 grid md:grid-cols-3 gap-8 text-left">
              {[
                { title: "Minimalism", desc: "Less is more. Every pixel serves a purpose." },
                { title: "Innovation", desc: "Push boundaries. Question conventions." },
                { title: "Humanity", desc: "Technology that feels human, not robotic." },
              ].map(({ title, desc }) => (
                <div key={title} className="text-center">
                  <h3 className="text-lg font-medium text-blue-400 mb-2">{title}</h3>
                  <p className="text-gray-400 text-sm">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Bot Showcase */}
      <section className="bg-gradient-to-b from-transparent via-blue-950/5 to-transparent dark:via-blue-300/5 px-8 py-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-light mb-6">Personality-Driven Bots</h2>
            <p className="text-xl text-gray-500 dark:text-gray-400">
              Each bot has its own character, voice, and visual identity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Conversation Orb",
                personality: "Friendly Guide",
                messages: ["Hi there! 👋", "I'm here to guide you through your journey."],
                color: "blue",
                pattern: "dots",
              },
              {
                title: "Focus Bubble",
                personality: "Creative Catalyst",
                messages: ["What would you like to create?", "A chat UI that feels alive.", "Let's make it happen! ✨"],
                color: "purple",
                pattern: "waves",
              },
              {
                title: "Aura Mesh",
                personality: "Wise Mentor",
                messages: ["Let's brainstorm ideas.", "Generating insights...", "Here's a design concept for you 🎨"],
                color: "emerald",
                pattern: "grid",
              },
            ].map((bot, i) => (
              <div
                key={i}
                className="group p-8 rounded-3xl border border-gray-800/30 bg-black/5 dark:bg-white/5 hover:scale-[1.02] transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-3 h-3 bg-${bot.color}-400 rounded-full animate-pulse`} />
                  <div>
                    <h3 className={`text-${bot.color}-900 text-lg font-medium`}>{bot.title}</h3>
                    <p className="text-xs text-gray-500">{bot.personality}</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {bot.messages.map((msg, j) => (
                    <div
                      key={j}
                      className={`text-sm px-4 py-3 rounded-2xl bg-${bot.color}-100 dark:bg-${bot.color}-900/30 text-${bot.color}-800 dark:text-${bot.color}-1000 animate-fade-in`}
                      style={{ animationDelay: `${j * 200}ms` }}
                    >
                      {msg}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Grid */}
      <section className="px-8 py-32 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-light mb-6">Endless Possibilities</h2>
          <p className="text-lg text-gray-500 dark:text-gray-400">
            From customer support to creative AI, NoodleUI adapts to your vision.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            "Customer Support",
            "Creative AI Chat",
            "Virtual Journals",
            "Storytelling Bots",
            "Language Tutors",
            "Mindful Check-ins",
            "Code Assistants",
            "Design Feedback",
          ].map((use, i) => (
            <div
              key={i}
              className="group p-6 border border-gray-800/30 rounded-2xl bg-gradient-to-br from-gray-50/5 to-transparent hover:from-blue-500/5 hover:scale-105 transition-all duration-200 cursor-pointer"
            >
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-500/20 transition-colors">
                  <Sparkles className="w-5 h-5 text-blue-400" />
                </div>
                <span className="text-sm font-medium group-hover:text-blue-400 transition-colors">{use}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-8 py-32 max-w-5xl mx-auto text-center">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-blue-500/5 rounded-3xl blur-xl" />
          <div className="relative p-12">
            <h2 className="text-5xl font-light mb-8">Ready to Build Something Beautiful?</h2>
            <p className="text-xl text-gray-500 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
              Join thousands of developers who are already creating the future of conversational interfaces.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group inline-flex items-center gap-2 px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-2xl transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl">
                <span>Start Building</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="inline-flex items-center gap-2 px-8 py-4 border border-gray-600/30 rounded-2xl hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-all duration-200 hover:scale-105">
                <Github className="w-4 h-4" />
                <span>View on GitHub</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="px-8 py-16 border-t border-gray-800/30 bg-gradient-to-b from-transparent to-gray-950/5 dark:to-gray-50/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                <Layers className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-light">
                noodle<span className="text-blue-400 font-medium">UI</span>
              </span>
            </div>
            <div className="flex items-center gap-8 text-sm text-gray-500">
              <a href="#" className="hover:text-blue-400 transition-colors">
                Documentation
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Examples
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Community
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Support
              </a>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800/20 text-center">
            <p className="text-sm text-gray-500 mb-2">
              © {new Date().getFullYear()} noodleUI — designed for the beautifully strange.
            </p>
            <p className="text-xs text-gray-400 flex items-center justify-center gap-1">
              Made with <Heart className="w-3 h-3 text-red-400" /> and cosmic energy 🌌
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage
