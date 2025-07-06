"use client"

import { useState, useEffect } from "react"
import {
  Heart,
  Bell,
  User,
  Settings,
  Plus,
  X,
  Check,
  TrendingUp,
  Loader,
  Sparkles,
  Bot,
  Send,
  Minimize2,
  ArrowRight,
  Home,
  Circle,
  Square,
  Triangle,
  Hexagon,
  Star,
  Zap,
  Users,
  Shield,
  Rocket,
  Target,
  Lightbulb,
} from "lucide-react"

// Button Components
const ButtonComponents = {
  primary: () => (
    <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg transform">
      Primary Button
    </button>
  ),
  secondary: () => (
    <button className="px-6 py-3 border-2 border-gray-300 hover:border-gray-400 text-gray-700 dark:text-gray-300 rounded-lg font-medium transition-all duration-200 hover:scale-105 transform">
      Secondary Button
    </button>
  ),
  gradient: () => (
    <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-lg font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg transform">
      Gradient Button
    </button>
  ),
  outlined: () => (
    <button className="px-6 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-lg font-medium transition-all duration-200 hover:scale-105 transform">
      Outlined Button
    </button>
  ),
  ghost: () => (
    <button className="px-6 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-gray-100 dark:hover:bg-gray-800 rounded-lg font-medium transition-all duration-200 hover:scale-105 transform">
      Ghost Button
    </button>
  ),
  icon: () => (
    <button className="p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all duration-200 hover:scale-110 hover:shadow-lg transform">
      <Heart size={20} />
    </button>
  ),
  loading: () => (
    <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium flex items-center gap-2 cursor-not-allowed opacity-75">
      <Loader className="animate-spin" size={16} />
      Loading...
    </button>
  ),
  success: () => (
    <button className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg transform flex items-center gap-2">
      <Check size={16} />
      Success
    </button>
  ),
  danger: () => (
    <button className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg transform">
      Danger Button
    </button>
  ),
  floating: () => (
    <button className="fixed bottom-6 right-6 p-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 transform">
      <Plus size={24} />
    </button>
  ),
}

// Card Components
const CardComponents = {
  basic: () => (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Basic Card</h3>
      <p className="text-gray-600 dark:text-gray-400">
        This is a basic card component with hover effects and smooth transitions.
      </p>
    </div>
  ),
  product: () => (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform">
      <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500"></div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Product Card</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">Beautiful product showcase card with image placeholder.</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900 dark:text-white">$99</span>
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-200 hover:scale-105 transform">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  ),
  profile: () => (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
          JD
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">John Doe</h3>
          <p className="text-gray-600 dark:text-gray-400">Software Engineer</p>
        </div>
      </div>
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        Passionate developer with 5+ years of experience in React and Node.js.
      </p>
      <div className="flex gap-2">
        <button className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-200 hover:scale-105 transform">
          Follow
        </button>
        <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 hover:scale-105 transform">
          Message
        </button>
      </div>
    </div>
  ),
  stats: () => (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Total Sales</h3>
        <TrendingUp className="text-green-500" size={24} />
      </div>
      <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">$12,345</div>
      <div className="flex items-center gap-2 text-sm">
        <span className="text-green-500 font-medium">+12.5%</span>
        <span className="text-gray-600 dark:text-gray-400">from last month</span>
      </div>
    </div>
  ),
  notification: () => (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform">
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center">
          <Bell className="text-blue-600 dark:text-blue-400" size={16} />
        </div>
        <div className="flex-1">
          <h4 className="font-medium text-gray-900 dark:text-white">New Message</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">You have a new message from John Doe</p>
          <span className="text-xs text-gray-500 dark:text-gray-500">2 minutes ago</span>
        </div>
        <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
          <X size={16} />
        </button>
      </div>
    </div>
  ),
}

// Premium Hero Sections
const HeroComponents = {
  modern: () => (
    <div className="relative min-h-[500px] bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 overflow-hidden rounded-2xl">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>
      <div className="relative z-10 flex items-center justify-center min-h-[500px] px-8">
        <div className="text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm text-white/80 mb-8 border border-white/20">
            <Sparkles className="w-4 h-4" />
            <span>Introducing the Future</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extralight tracking-tight leading-[0.9] mb-8 text-white">
            Build the
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Impossible
            </span>
          </h1>
          <p className="text-xl text-white/70 leading-relaxed mb-12 max-w-2xl mx-auto">
            Transform your ideas into reality with our cutting-edge platform. Experience the power of innovation at your
            fingertips.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group px-8 py-4 bg-white text-gray-900 rounded-2xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-2xl transform">
              <span className="flex items-center gap-2">
                Get Started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button className="px-8 py-4 border border-white/30 text-white rounded-2xl font-medium backdrop-blur-md hover:bg-white/10 transition-all duration-300 hover:scale-105 transform">
              Watch Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  ),
  minimal: () => (
    <div className="min-h-[400px] bg-white dark:bg-gray-950 flex items-center justify-center px-8 rounded-2xl">
      <div className="text-center max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-6 text-gray-900 dark:text-white">
          Less is
          <span className="block text-blue-600 dark:text-blue-400">Everything</span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto">
          Simplicity is the ultimate sophistication. Create beautiful experiences with minimal effort.
        </p>
        <button className="px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-medium transition-all duration-200 hover:scale-105 transform">
          Start Creating
        </button>
      </div>
    </div>
  ),
  animated: () => (
    <div className="relative min-h-[600px] bg-gradient-to-br from-gray-900 to-black overflow-hidden rounded-2xl">
      {/* Floating elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-[600px] px-8">
        <div className="text-center">
          <div className="mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mx-auto mb-6 flex items-center justify-center animate-bounce">
              <Rocket className="w-10 h-10 text-white" />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Launch Your
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Vision
            </span>
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            From concept to reality in record time. Our platform accelerates your journey to success.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <span className="flex items-center gap-2">
                <Rocket className="w-4 h-4" />
                Launch Now
              </span>
            </button>
            <button className="px-8 py-4 border border-gray-600 text-gray-300 rounded-xl font-medium hover:bg-gray-800 transition-all duration-300 hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  ),
}

// Premium Pricing Tables
const PricingComponents = {
  modern: () => (
    <div className="max-w-6xl mx-auto p-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Choose Your Plan</h2>
        <p className="text-xl text-gray-600 dark:text-gray-400">Start free, scale as you grow</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            name: "Starter",
            price: "Free",
            description: "Perfect for getting started",
            features: ["5 Projects", "Basic Support", "1GB Storage", "Community Access"],
            color: "gray",
            popular: false,
          },
          {
            name: "Pro",
            price: "$29",
            description: "For growing businesses",
            features: [
              "Unlimited Projects",
              "Priority Support",
              "100GB Storage",
              "Advanced Analytics",
              "Custom Domains",
            ],
            color: "blue",
            popular: true,
          },
          {
            name: "Enterprise",
            price: "$99",
            description: "For large organizations",
            features: [
              "Everything in Pro",
              "Dedicated Support",
              "Unlimited Storage",
              "Custom Integrations",
              "SLA Guarantee",
            ],
            color: "purple",
            popular: false,
          },
        ].map((plan, index) => (
          <div
            key={index}
            className={`relative p-8 rounded-2xl border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
              plan.popular
                ? "border-blue-200 bg-gradient-to-br from-blue-50 to-purple-50 dark:border-blue-800 dark:from-blue-900/20 dark:to-purple-900/20 shadow-xl scale-105"
                : "border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700"
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
            )}

            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{plan.name}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{plan.description}</p>
              <div className="mb-4">
                <span className="text-5xl font-bold text-gray-900 dark:text-white">{plan.price}</span>
                {plan.price !== "Free" && <span className="text-gray-600 dark:text-gray-400">/month</span>}
              </div>
            </div>

            <div className="space-y-4 mb-8">
              {plan.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div
                    className={`w-5 h-5 rounded-full flex items-center justify-center ${
                      plan.popular ? "bg-blue-100 dark:bg-blue-900/20" : "bg-gray-100 dark:bg-gray-800"
                    }`}
                  >
                    <Check size={12} className={plan.popular ? "text-blue-600" : "text-gray-600"} />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                </div>
              ))}
            </div>

            <button
              className={`w-full py-3 rounded-xl font-medium transition-all duration-200 hover:scale-105 ${
                plan.popular
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {plan.price === "Free" ? "Get Started" : "Choose Plan"}
            </button>
          </div>
        ))}
      </div>
    </div>
  ),
}

// Premium Feature Sections
const FeatureComponents = {
  grid: () => (
    <div className="max-w-7xl mx-auto p-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Powerful Features</h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Everything you need to build, deploy, and scale your applications with confidence.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            icon: Rocket,
            title: "Lightning Fast",
            description: "Deploy your applications in seconds with our optimized infrastructure and global CDN.",
            color: "blue",
          },
          {
            icon: Shield,
            title: "Enterprise Security",
            description: "Bank-grade security with end-to-end encryption and compliance certifications.",
            color: "green",
          },
          {
            icon: Zap,
            title: "Auto Scaling",
            description: "Automatically scale your resources based on demand without any configuration.",
            color: "yellow",
          },
          {
            icon: Target,
            title: "99.9% Uptime",
            description: "Reliable infrastructure with guaranteed uptime and 24/7 monitoring.",
            color: "red",
          },
          {
            icon: Lightbulb,
            title: "Smart Analytics",
            description: "Get insights into your application performance with real-time analytics.",
            color: "purple",
          },
          {
            icon: Users,
            title: "Team Collaboration",
            description: "Work together seamlessly with built-in collaboration tools and permissions.",
            color: "indigo",
          },
        ].map((feature, index) => (
          <div
            key={index}
            className="group p-8 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <feature.icon className="w-7 h-7 text-blue-600 dark:text-blue-400" />
            </div>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {feature.title}
            </h3>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  ),
}

// Premium Testimonials
const TestimonialComponents = {
  carousel: () => (
    <div className="max-w-6xl mx-auto p-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">What Our Users Say</h2>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Join thousands of satisfied customers who trust our platform
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            name: "Sarah Chen",
            role: "CTO at TechCorp",
            avatar: "SC",
            content:
              "This platform has revolutionized how we build and deploy applications. The AI features are game-changing.",
            rating: 5,
            company: "TechCorp",
          },
          {
            name: "Marcus Johnson",
            role: "Lead Developer",
            avatar: "MJ",
            content: "The developer experience is unmatched. We've reduced our deployment time by 80% since switching.",
            rating: 5,
            company: "StartupXYZ",
          },
          {
            name: "Emily Rodriguez",
            role: "Product Manager",
            avatar: "ER",
            content:
              "The analytics and insights help us make data-driven decisions. Our team productivity has skyrocketed.",
            rating: 5,
            company: "InnovateLab",
          },
        ].map((testimonial, index) => (
          <div
            key={index}
            className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            <div className="flex items-center gap-2 mb-6">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} size={16} className="text-yellow-400 fill-current" />
              ))}
            </div>

            <p className="text-gray-700 dark:text-gray-300 mb-6 italic leading-relaxed">"{testimonial.content}"</p>

            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                {testimonial.avatar}
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                <p className="text-xs text-blue-600 dark:text-blue-400">{testimonial.company}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
}

// Background Components
const BackgroundComponents = {
  aurora: () => (
    <div className="relative w-full h-80 bg-black overflow-hidden rounded-2xl">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-400/30 via-blue-500/20 to-purple-600/30 animate-pulse" />
        <div
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-pink-400/20 via-transparent to-cyan-400/20 animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-bl from-yellow-400/10 via-transparent to-indigo-500/20 animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Stars */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${1 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white">
          <h3 className="text-2xl font-bold mb-2">Aurora Background</h3>
          <p className="text-white/70">Mesmerizing northern lights effect</p>
        </div>
      </div>
    </div>
  ),

  particles: () => (
    <div className="relative w-full h-80 bg-gradient-to-br from-gray-900 to-black overflow-hidden rounded-2xl">
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/60 rounded-full animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Connecting lines */}
      <svg className="absolute inset-0 w-full h-full">
        {[...Array(15)].map((_, i) => (
          <line
            key={i}
            x1={`${Math.random() * 100}%`}
            y1={`${Math.random() * 100}%`}
            x2={`${Math.random() * 100}%`}
            y2={`${Math.random() * 100}%`}
            stroke="rgba(59, 130, 246, 0.3)"
            strokeWidth="1"
            className="animate-pulse"
            style={{ animationDelay: `${Math.random() * 2}s` }}
          />
        ))}
      </svg>

      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white">
          <h3 className="text-2xl font-bold mb-2">Particle Network</h3>
          <p className="text-white/70">Connected particle system</p>
        </div>
      </div>
    </div>
  ),

  geometric: () => (
    <div className="relative w-full h-80 bg-gradient-to-br from-purple-900 to-indigo-900 overflow-hidden rounded-2xl">
      {/* Geometric shapes */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => {
          const shapes = [Circle, Square, Triangle, Hexagon]
          const Shape = shapes[Math.floor(Math.random() * shapes.length)]
          return (
            <div
              key={i}
              className="absolute animate-spin"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDuration: `${10 + Math.random() * 20}s`,
                animationDelay: `${Math.random() * 20}s`,
              }}
            >
              <Shape size={20 + Math.random() * 40} className="text-white/10" fill="currentColor" />
            </div>
          )
        })}
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="grid grid-cols-8 grid-rows-8 h-full w-full">
          {[...Array(64)].map((_, i) => (
            <div key={i} className="border border-white/10" />
          ))}
        </div>
      </div>

      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white">
          <h3 className="text-2xl font-bold mb-2">Geometric Patterns</h3>
          <p className="text-white/70">Abstract geometric design</p>
        </div>
      </div>
    </div>
  ),

  mesh: () => (
    <div className="relative w-full h-80 overflow-hidden rounded-2xl">
      {/* Mesh gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600" />
      <div className="absolute inset-0 bg-gradient-to-tl from-yellow-400 via-transparent to-cyan-400 opacity-70" />
      <div className="absolute inset-0 bg-gradient-to-tr from-green-400 via-transparent to-blue-500 opacity-50" />

      {/* Animated overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse" />

      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white">
          <h3 className="text-2xl font-bold mb-2">Mesh Gradient</h3>
          <p className="text-white/70">Smooth color transitions</p>
        </div>
      </div>
    </div>
  ),

  waves: () => (
    <div className="relative w-full h-80 bg-gradient-to-b from-blue-400 to-blue-600 overflow-hidden rounded-2xl">
      {/* Animated waves */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1200 120" className="w-full h-32">
          <path
            d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z"
            fill="rgba(255,255,255,0.1)"
            className="animate-pulse"
          />
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1200 120" className="w-full h-24">
          <path
            d="M0,80 C300,20 900,100 1200,40 L1200,120 L0,120 Z"
            fill="rgba(255,255,255,0.2)"
            className="animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </svg>
      </div>

      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white">
          <h3 className="text-2xl font-bold mb-2">Wave Animation</h3>
          <p className="text-white/70">Flowing wave patterns</p>
        </div>
      </div>
    </div>
  ),

  matrix: () => (
    <div className="relative w-full h-80 bg-black overflow-hidden rounded-2xl">
      {/* Matrix rain effect */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute top-0 text-green-400 font-mono text-sm opacity-70"
            style={{
              left: `${i * 5}%`,
              animation: `matrix-rain 3s linear infinite`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          >
            {Array.from({ length: 20 }, () => String.fromCharCode(0x30a0 + Math.random() * 96)).join("")}
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes matrix-rain {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(400px); }
        }
      `}</style>

      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-green-400">
          <h3 className="text-2xl font-bold mb-2">Matrix Effect</h3>
          <p className="text-green-300/70">Digital rain animation</p>
        </div>
      </div>
    </div>
  ),
}

// Text Animation Components
const TextAnimationComponents = {
  typewriter: () => {
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
      <div className="p-8 bg-gray-900 rounded-2xl">
        <h3 className="text-2xl font-mono text-green-400">
          {text}
          <span className="animate-pulse">|</span>
        </h3>
      </div>
    )
  },

  glitch: () => (
    <div className="p-8 bg-black rounded-2xl">
      <h3 className="text-4xl font-bold text-white relative">
        <span className="absolute inset-0 text-red-500 animate-pulse" style={{ clipPath: "inset(0 0 50% 0)" }}>
          GLITCH EFFECT
        </span>
        <span
          className="absolute inset-0 text-blue-500 animate-pulse"
          style={{ clipPath: "inset(50% 0 0 0)", animationDelay: "0.1s" }}
        >
          GLITCH EFFECT
        </span>
        <span className="relative z-10">GLITCH EFFECT</span>
      </h3>
    </div>
  ),

  wave: () => (
    <div className="p-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl">
      <h3 className="text-4xl font-bold text-white">
        {"WAVE ANIMATION".split("").map((char, index) => (
          <span
            key={index}
            className="inline-block animate-bounce"
            style={{
              animationDelay: `${index * 0.1}s`,
              animationDuration: "1s",
            }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h3>
    </div>
  ),

  gradient: () => (
    <div className="p-8 bg-gray-900 rounded-2xl">
      <h3 className="text-6xl font-bold bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent animate-pulse">
        GRADIENT TEXT
      </h3>
    </div>
  ),

  morphing: () => {
    const [currentText, setCurrentText] = useState(0)
    const texts = ["MORPHING", "CHANGING", "EVOLVING", "TRANSFORMING"]

    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentText((prev) => (prev + 1) % texts.length)
      }, 2000)

      return () => clearInterval(timer)
    }, [])

    return (
      <div className="p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl">
        <h3 className="text-4xl font-bold text-white transition-all duration-500 transform">{texts[currentText]}</h3>
      </div>
    )
  },
}

// Chatbot Components
const ChatbotComponents = {
  bubble: () => (
    <div className="max-w-md mx-auto p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg">
      <div className="space-y-4">
        <div className="flex justify-end">
          <div className="bg-blue-600 text-white px-4 py-2 rounded-2xl rounded-br-md max-w-xs">
            Hello! How can I help you today?
          </div>
        </div>
        <div className="flex justify-start">
          <div className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-2 rounded-2xl rounded-bl-md max-w-xs">
            I need help with my account settings.
          </div>
        </div>
        <div className="flex justify-end">
          <div className="bg-blue-600 text-white px-4 py-2 rounded-2xl rounded-br-md max-w-xs flex items-center gap-2">
            <span>Typing</span>
            <div className="flex gap-1">
              <div className="w-1 h-1 bg-white rounded-full animate-bounce" />
              <div className="w-1 h-1 bg-white rounded-full animate-bounce" style={{ animationDelay: "0.1s" }} />
              <div className="w-1 h-1 bg-white rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  ),

  widget: () => (
    <div className="fixed bottom-6 right-6 w-80 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <Bot size={16} />
            </div>
            <div>
              <h3 className="font-medium">AI Assistant</h3>
              <p className="text-xs text-white/80">Online</p>
            </div>
          </div>
          <button className="text-white/80 hover:text-white transition-colors">
            <Minimize2 size={16} />
          </button>
        </div>
      </div>
      <div className="p-4 h-64 overflow-y-auto">
        <div className="space-y-3">
          <div className="flex items-start gap-2">
            <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center">
              <Bot size={12} className="text-blue-600 dark:text-blue-400" />
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded-lg text-sm">
              Hi! I'm here to help. What can I do for you?
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 px-3 py-2 border border-gray-200 dark:border-gray-600 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700"
          />
          <button className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
            <Send size={16} />
          </button>
        </div>
      </div>
    </div>
  ),

  assistant: () => (
    <div className="max-w-2xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
          <Bot className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">AI Assistant</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Ready to help you with anything</p>
        </div>
      </div>

      <div className="space-y-4 mb-6">
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
          <p className="text-blue-800 dark:text-blue-200">
            💡 I can help you with code reviews, debugging, documentation, and more. What would you like to work on?
          </p>
        </div>

        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
          <p className="text-gray-700 dark:text-gray-300">
            🚀 I'm also great at explaining complex concepts, writing tests, and optimizing performance.
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Ask me anything..."
          className="flex-1 px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700"
        />
        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
          Send
        </button>
      </div>
    </div>
  ),
}

// Form Components
const FormComponents = {
  login: () => (
    <div className="max-w-md mx-auto p-8 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Sign In</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
          <input
            type="email"
            className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 transition-all duration-200"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Password</label>
          <input
            type="password"
            className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 transition-all duration-200"
            placeholder="Enter your password"
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-200 hover:scale-105 transform"
        >
          Sign In
        </button>
      </form>
    </div>
  ),
  contact: () => (
    <div className="max-w-lg mx-auto p-8 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Contact Us</h2>
      <form className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">First Name</label>
            <input
              type="text"
              className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 transition-all duration-200"
              placeholder="John"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Last Name</label>
            <input
              type="text"
              className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 transition-all duration-200"
              placeholder="Doe"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
          <input
            type="email"
            className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 transition-all duration-200"
            placeholder="john@example.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
          <textarea
            rows={4}
            className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 transition-all duration-200 resize-none"
            placeholder="Your message here..."
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-200 hover:scale-105 transform"
        >
          Send Message
        </button>
      </form>
    </div>
  ),
}

// Navigation Components
const NavigationComponents = {
  horizontal: () => (
    <nav className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4 shadow-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg"></div>
          <span className="font-bold text-gray-900 dark:text-white">Brand</span>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <a
            href="#"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            Home
          </a>
          <a
            href="#"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            About
          </a>
          <a
            href="#"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            Services
          </a>
          <a
            href="#"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            Contact
          </a>
        </div>
        <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-200 hover:scale-105 transform">
          Get Started
        </button>
      </div>
    </nav>
  ),
  sidebar: () => (
    <div className="w-64 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4 shadow-lg">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg"></div>
        <span className="font-bold text-gray-900 dark:text-white">Dashboard</span>
      </div>
      <nav className="space-y-2">
        <a
          href="#"
          className="flex items-center gap-3 px-3 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-lg"
        >
          <Home size={16} />
          <span>Dashboard</span>
        </a>
        <a
          href="#"
          className="flex items-center gap-3 px-3 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors"
        >
          <User size={16} />
          <span>Profile</span>
        </a>
        <a
          href="#"
          className="flex items-center gap-3 px-3 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors"
        >
          <Settings size={16} />
          <span>Settings</span>
        </a>
        <a
          href="#"
          className="flex items-center gap-3 px-3 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors"
        >
          <Bell size={16} />
          <span>Notifications</span>
        </a>
      </nav>
    </div>
  ),
}

// Modal Components
const ModalComponents = {
  basic: () => (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 max-w-md w-full shadow-2xl transform transition-all duration-300 scale-100">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Modal Title</h3>
          <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
            <X size={20} />
          </button>
        </div>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          This is a basic modal component with smooth animations and backdrop blur.
        </p>
        <div className="flex gap-3 justify-end">
          <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            Cancel
          </button>
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
            Confirm
          </button>
        </div>
      </div>
    </div>
  ),
}

// Chart Components
const ChartComponents = {
  bar: () => (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-lg">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Sales Chart</h3>
      <div className="flex items-end gap-2 h-32">
        {[40, 70, 45, 80, 60, 90, 55].map((height, index) => (
          <div
            key={index}
            className="bg-gradient-to-t from-blue-600 to-blue-400 rounded-t flex-1 transition-all duration-300 hover:scale-105 transform"
            style={{ height: `${height}%` }}
          />
        ))}
      </div>
      <div className="flex justify-between mt-2 text-xs text-gray-500 dark:text-gray-400">
        <span>Mon</span>
        <span>Tue</span>
        <span>Wed</span>
        <span>Thu</span>
        <span>Fri</span>
        <span>Sat</span>
        <span>Sun</span>
      </div>
    </div>
  ),
  pie: () => (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-lg">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Distribution</h3>
      <div className="flex items-center justify-center">
        <div className="relative w-32 h-32">
          <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 36 36">
            <path
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="3"
            />
            <path
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#3b82f6"
              strokeWidth="3"
              strokeDasharray="60, 100"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xl font-bold text-gray-900 dark:text-white">60%</span>
          </div>
        </div>
      </div>
    </div>
  ),
}

// Loading Components
const LoadingComponents = {
  spinner: () => (
    <div className="flex items-center justify-center p-8">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
    </div>
  ),
  dots: () => (
    <div className="flex items-center justify-center gap-2 p-8">
      <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce"></div>
      <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
      <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
    </div>
  ),
  skeleton: () => (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-lg">
      <div className="animate-pulse">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
          <div className="space-y-2 flex-1">
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
            <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
          </div>
        </div>
        <div className="space-y-3">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-4/6"></div>
        </div>
      </div>
    </div>
  ),
}

// Avatar Components
const AvatarComponents = {
  basic: () => (
    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
      JD
    </div>
  ),
  image: () => (
    <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
      <div className="w-full h-full bg-gradient-to-br from-green-400 to-blue-500"></div>
    </div>
  ),
  group: () => (
    <div className="flex -space-x-2">
      <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-sm border-2 border-white dark:border-gray-800">
        A
      </div>
      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm border-2 border-white dark:border-gray-800">
        B
      </div>
      <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-sm border-2 border-white dark:border-gray-800">
        C
      </div>
      <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 font-bold text-sm border-2 border-white dark:border-gray-800">
        +5
      </div>
    </div>
  ),
}

// Badge Components
const BadgeComponents = {
  basic: () => (
    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">
      New
    </span>
  ),
  success: () => (
    <span className="px-3 py-1 bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-full text-sm font-medium">
      Success
    </span>
  ),
  warning: () => (
    <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400 rounded-full text-sm font-medium">
      Warning
    </span>
  ),
  error: () => (
    <span className="px-3 py-1 bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-full text-sm font-medium">
      Error
    </span>
  ),
}

// Combine all components
export const allComponents = [
  // Buttons
  {
    id: "button-primary",
    title: "Primary Button",
    description: "A primary action button with hover effects",
    category: "buttons",
    component: ButtonComponents.primary,
    code: `<button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg transform">Primary Button</button>`,
    tags: ["button", "primary", "interactive"],
    popularity: 95,
  },
  {
    id: "button-secondary",
    title: "Secondary Button",
    description: "A secondary action button with border",
    category: "buttons",
    component: ButtonComponents.secondary,
    code: `<button className="px-6 py-3 border-2 border-gray-300 hover:border-gray-400 text-gray-700 dark:text-gray-300 rounded-lg font-medium transition-all duration-200 hover:scale-105 transform">Secondary Button</button>`,
    tags: ["button", "secondary", "outline"],
    popularity: 88,
  },
  {
    id: "button-gradient",
    title: "Gradient Button",
    description: "A colorful gradient button",
    category: "buttons",
    component: ButtonComponents.gradient,
    code: `<button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-lg font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg transform">Gradient Button</button>`,
    tags: ["button", "gradient", "colorful"],
    popularity: 92,
  },
  {
    id: "button-outlined",
    title: "Outlined Button",
    description: "A button with outline style",
    category: "buttons",
    component: ButtonComponents.outlined,
    code: `<button className="px-6 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-lg font-medium transition-all duration-200 hover:scale-105 transform">Outlined Button</button>`,
    tags: ["button", "outlined", "border"],
    popularity: 85,
  },
  {
    id: "button-ghost",
    title: "Ghost Button",
    description: "A subtle ghost button",
    category: "buttons",
    component: ButtonComponents.ghost,
    code: `<button className="px-6 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-gray-100 dark:hover:bg-gray-800 rounded-lg font-medium transition-all duration-200 hover:scale-105 transform">Ghost Button</button>`,
    tags: ["button", "ghost", "subtle"],
    popularity: 78,
  },
  {
    id: "button-icon",
    title: "Icon Button",
    description: "A circular button with icon",
    category: "buttons",
    component: ButtonComponents.icon,
    code: `<button className="p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all duration-200 hover:scale-110 hover:shadow-lg transform"><Heart size={20} /></button>`,
    tags: ["button", "icon", "circular"],
    popularity: 89,
  },
  {
    id: "button-loading",
    title: "Loading Button",
    description: "A button with loading state",
    category: "buttons",
    component: ButtonComponents.loading,
    code: `<button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium flex items-center gap-2 cursor-not-allowed opacity-75"><Loader className="animate-spin" size={16} />Loading...</button>`,
    tags: ["button", "loading", "state"],
    popularity: 82,
  },
  {
    id: "button-success",
    title: "Success Button",
    description: "A success state button",
    category: "buttons",
    component: ButtonComponents.success,
    code: `<button className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg transform flex items-center gap-2"><Check size={16} />Success</button>`,
    tags: ["button", "success", "state"],
    popularity: 86,
  },
  {
    id: "button-danger",
    title: "Danger Button",
    description: "A danger/destructive action button",
    category: "buttons",
    component: ButtonComponents.danger,
    code: `<button className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg transform">Danger Button</button>`,
    tags: ["button", "danger", "destructive"],
    popularity: 75,
  },
  {
    id: "button-floating",
    title: "Floating Action Button",
    description: "A floating action button",
    category: "buttons",
    component: ButtonComponents.floating,
    code: `<button className="fixed bottom-6 right-6 p-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 transform"><Plus size={24} /></button>`,
    tags: ["button", "floating", "fab"],
    popularity: 91,
  },

  // Cards
  {
    id: "card-basic",
    title: "Basic Card",
    description: "A simple card component with shadow",
    category: "cards",
    component: CardComponents.basic,
    code: `<div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform"><h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Basic Card</h3><p className="text-gray-600 dark:text-gray-400">This is a basic card component with hover effects and smooth transitions.</p></div>`,
    tags: ["card", "container", "shadow"],
    popularity: 92,
  },
  {
    id: "card-product",
    title: "Product Card",
    description: "A product showcase card",
    category: "cards",
    component: CardComponents.product,
    code: `<div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform"><div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500"></div><div className="p-6"><h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Product Card</h3><p className="text-gray-600 dark:text-gray-400 mb-4">Beautiful product showcase card with image placeholder.</p><div className="flex items-center justify-between"><span className="text-2xl font-bold text-gray-900 dark:text-white">$99</span><button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-200 hover:scale-105 transform">Add to Cart</button></div></div></div>`,
    tags: ["card", "product", "ecommerce"],
    popularity: 94,
  },
  {
    id: "card-profile",
    title: "Profile Card",
    description: "A user profile card",
    category: "cards",
    component: CardComponents.profile,
    code: `<div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform"><div className="flex items-center gap-4 mb-4"><div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">JD</div><div><h3 className="text-lg font-semibold text-gray-900 dark:text-white">John Doe</h3><p className="text-gray-600 dark:text-gray-400">Software Engineer</p></div></div><p className="text-gray-600 dark:text-gray-400 mb-4">Passionate developer with 5+ years of experience in React and Node.js.</p><div className="flex gap-2"><button className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-200 hover:scale-105 transform">Follow</button><button className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 hover:scale-105 transform">Message</button></div></div>`,
    tags: ["card", "profile", "user"],
    popularity: 89,
  },
  {
    id: "card-stats",
    title: "Stats Card",
    description: "A statistics display card",
    category: "cards",
    component: CardComponents.stats,
    code: `<div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform"><div className="flex items-center justify-between mb-4"><h3 className="text-lg font-semibold text-gray-900 dark:text-white">Total Sales</h3><TrendingUp className="text-green-500" size={24} /></div><div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">$12,345</div><div className="flex items-center gap-2 text-sm"><span className="text-green-500 font-medium">+12.5%</span><span className="text-gray-600 dark:text-gray-400">from last month</span></div></div>`,
    tags: ["card", "stats", "analytics"],
    popularity: 87,
  },
  {
    id: "card-notification",
    title: "Notification Card",
    description: "A notification message card",
    category: "cards",
    component: CardComponents.notification,
    code: `<div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform"><div className="flex items-start gap-3"><div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center"><Bell className="text-blue-600 dark:text-blue-400" size={16} /></div><div className="flex-1"><h4 className="font-medium text-gray-900 dark:text-white">New Message</h4><p className="text-sm text-gray-600 dark:text-gray-400">You have a new message from John Doe</p><span className="text-xs text-gray-500 dark:text-gray-500">2 minutes ago</span></div><button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"><X size={16} /></button></div></div>`,
    tags: ["card", "notification", "message"],
    popularity: 83,
  },

  // Premium Components
  {
    id: "hero-modern",
    title: "Modern Hero Section",
    description: "Animated hero with gradient background and floating elements",
    category: "premium",
    component: HeroComponents.modern,
    code: `<div className="relative min-h-[500px] bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 overflow-hidden rounded-2xl"><div className="absolute inset-0"><div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" /><div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} /></div><div className="relative z-10 flex items-center justify-center min-h-[500px] px-8"><div className="text-center max-w-4xl"><div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm text-white/80 mb-8 border border-white/20"><Sparkles className="w-4 h-4" /><span>Introducing the Future</span></div><h1 className="text-5xl md:text-7xl font-extralight tracking-tight leading-[0.9] mb-8 text-white">Build the<br /><span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Impossible</span></h1><p className="text-xl text-white/70 leading-relaxed mb-12 max-w-2xl mx-auto">Transform your ideas into reality with our cutting-edge platform. Experience the power of innovation at your fingertips.</p><div className="flex flex-col sm:flex-row gap-4 justify-center"><button className="group px-8 py-4 bg-white text-gray-900 rounded-2xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-2xl transform"><span className="flex items-center gap-2">Get Started<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></span></button><button className="px-8 py-4 border border-white/30 text-white rounded-2xl font-medium backdrop-blur-md hover:bg-white/10 transition-all duration-300 hover:scale-105 transform">Watch Demo</button></div></div></div></div>`,
    tags: ["hero", "animated", "gradient", "premium"],
    popularity: 95,
  },
  {
    id: "hero-minimal",
    title: "Minimal Hero Section",
    description: "Clean and minimal hero section with elegant typography",
    category: "premium",
    component: HeroComponents.minimal,
    code: `<div className="min-h-[400px] bg-white dark:bg-gray-950 flex items-center justify-center px-8 rounded-2xl"><div className="text-center max-w-3xl"><h1 className="text-4xl md:text-6xl font-light tracking-tight mb-6 text-gray-900 dark:text-white">Less is<span className="block text-blue-600 dark:text-blue-400">Everything</span></h1><p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto">Simplicity is the ultimate sophistication. Create beautiful experiences with minimal effort.</p><button className="px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-medium transition-all duration-200 hover:scale-105 transform">Start Creating</button></div></div>`,
    tags: ["hero", "minimal", "clean", "premium"],
    popularity: 88,
  },
  {
    id: "hero-animated",
    title: "Animated Hero Section",
    description: "Dynamic hero with floating elements and animations",
    category: "premium",
    component: HeroComponents.animated,
    code: `<div className="relative min-h-[600px] bg-gradient-to-br from-gray-900 to-black overflow-hidden rounded-2xl">{/* Floating elements */}<div className="absolute inset-0">{[...Array(20)].map((_, i) => (<div key={i} className="absolute w-2 h-2 bg-blue-400/30 rounded-full animate-pulse" style={{ left: \`\${Math.random() * 100}%\`, top: \`\${Math.random() * 100}%\`, animationDelay: \`\${Math.random() * 5}s\`, animationDuration: \`\${2 + Math.random() * 3}s\` }} />))}</div><div className="relative z-10 flex items-center justify-center min-h-[600px] px-8"><div className="text-center"><div className="mb-8"><div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mx-auto mb-6 flex items-center justify-center animate-bounce"><Rocket className="w-10 h-10 text-white" /></div></div><h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">Launch Your<span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Vision</span></h1><p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">From concept to reality in record time. Our platform accelerates your journey to success.</p><div className="flex flex-col sm:flex-row gap-4 justify-center"><button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-2xl"><span className="flex items-center gap-2"><Rocket className="w-4 h-4" />Launch Now</span></button><button className="px-8 py-4 border border-gray-600 text-gray-300 rounded-xl font-medium hover:bg-gray-800 transition-all duration-300 hover:scale-105">Learn More</button></div></div></div></div>`,
    tags: ["hero", "animated", "dynamic", "premium"],
    popularity: 93,
  },

  // Pricing Components
  {
    id: "pricing-modern",
    title: "Modern Pricing Table",
    description: "Beautiful pricing cards with hover effects and popular badges",
    category: "premium",
    component: PricingComponents.modern,
    code: `// Modern Pricing Table Component - See full implementation in component`,
    tags: ["pricing", "cards", "modern", "premium"],
    popularity: 92,
  },

  // Feature Components
  {
    id: "features-grid",
    title: "Feature Grid Section",
    description: "Grid layout showcasing features with icons and descriptions",
    category: "premium",
    component: FeatureComponents.grid,
    code: `// Feature Grid Section - See full implementation in component`,
    tags: ["features", "grid", "icons", "premium"],
    popularity: 90,
  },

  // Testimonial Components
  {
    id: "testimonials-carousel",
    title: "Testimonial Carousel",
    description: "Customer testimonials in a beautiful card layout",
    category: "premium",
    component: TestimonialComponents.carousel,
    code: `// Testimonial Carousel - See full implementation in component`,
    tags: ["testimonials", "reviews", "carousel", "premium"],
    popularity: 87,
  },

  // Background Components
  {
    id: "aurora-bg",
    title: "Aurora Background",
    description: "Mesmerizing northern lights effect with animated colors",
    category: "backgrounds",
    component: BackgroundComponents.aurora,
    code: `<div className="relative w-full h-80 bg-black overflow-hidden rounded-2xl"><div className="absolute inset-0"><div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-400/30 via-blue-500/20 to-purple-600/30 animate-pulse" /><div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-pink-400/20 via-transparent to-cyan-400/20 animate-pulse" style={{ animationDelay: '1s' }} /></div><div className="absolute inset-0">{[...Array(50)].map((_, i) => (<div key={i} className="absolute w-1 h-1 bg-white rounded-full animate-pulse" style={{ left: \`\${Math.random() * 100}%\`, top: \`\${Math.random() * 100}%\`, animationDelay: \`\${Math.random() * 3}s\` }} />))}</div></div>`,
    tags: ["background", "aurora", "animated", "colorful"],
    popularity: 94,
  },
  {
    id: "particle-bg",
    title: "Particle Network",
    description: "Connected particle system with floating elements",
    category: "backgrounds",
    component: BackgroundComponents.particles,
    code: `// Particle Network Background - See full implementation in component`,
    tags: ["background", "particles", "network", "animated"],
    popularity: 91,
  },
  {
    id: "geometric-bg",
    title: "Geometric Patterns",
    description: "Abstract geometric shapes with grid overlay",
    category: "backgrounds",
    component: BackgroundComponents.geometric,
    code: `// Geometric Pattern Background - See full implementation in component`,
    tags: ["background", "geometric", "patterns", "abstract"],
    popularity: 88,
  },
  {
    id: "mesh-bg",
    title: "Mesh Gradient",
    description: "Smooth color transitions with mesh effect",
    category: "backgrounds",
    component: BackgroundComponents.mesh,
    code: `<div className="relative w-full h-80 overflow-hidden rounded-2xl"><div className="absolute inset-0 bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600" /><div className="absolute inset-0 bg-gradient-to-tl from-yellow-400 via-transparent to-cyan-400 opacity-70" /><div className="absolute inset-0 bg-gradient-to-tr from-green-400 via-transparent to-blue-500 opacity-50" /><div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse" /></div>`,
    tags: ["background", "gradient", "mesh", "colorful"],
    popularity: 93,
  },
  {
    id: "waves-bg",
    title: "Wave Animation",
    description: "Flowing wave patterns with SVG animations",
    category: "backgrounds",
    component: BackgroundComponents.waves,
    code: `// Wave Animation Background - See full implementation in component`,
    tags: ["background", "waves", "svg", "animated"],
    popularity: 85,
  },
  {
    id: "matrix-bg",
    title: "Matrix Effect",
    description: "Digital rain animation like the Matrix",
    category: "backgrounds",
    component: BackgroundComponents.matrix,
    code: `// Matrix Effect Background - See full implementation in component`,
    tags: ["background", "matrix", "digital", "rain"],
    popularity: 89,
  },

  // Text Animation Components
  {
    id: "typewriter-text",
    title: "Typewriter Effect",
    description: "Classic typewriter animation with cursor",
    category: "text-animations",
    component: TextAnimationComponents.typewriter,
    code: `// Typewriter Effect Component - See full implementation in component`,
    tags: ["text", "typewriter", "animation", "cursor"],
    popularity: 89,
  },
  {
    id: "glitch-text",
    title: "Glitch Effect",
    description: "Digital glitch text animation",
    category: "text-animations",
    component: TextAnimationComponents.glitch,
    code: `<div className="p-8 bg-black rounded-2xl"><h3 className="text-4xl font-bold text-white relative"><span className="absolute inset-0 text-red-500 animate-pulse" style={{ clipPath: 'inset(0 0 50% 0)' }}>GLITCH EFFECT</span><span className="absolute inset-0 text-blue-500 animate-pulse" style={{ clipPath: 'inset(50% 0 0 0)', animationDelay: '0.1s' }}>GLITCH EFFECT</span><span className="relative z-10">GLITCH EFFECT</span></h3></div>`,
    tags: ["text", "glitch", "digital", "effect"],
    popularity: 92,
  },
  {
    id: "wave-text",
    title: "Wave Animation",
    description: "Bouncing wave text effect",
    category: "text-animations",
    component: TextAnimationComponents.wave,
    code: `// Wave Text Animation - See full implementation in component`,
    tags: ["text", "wave", "bounce", "animation"],
    popularity: 86,
  },
  {
    id: "gradient-text",
    title: "Gradient Text",
    description: "Animated gradient text effect",
    category: "text-animations",
    component: TextAnimationComponents.gradient,
    code: `<div className="p-8 bg-gray-900 rounded-2xl"><h3 className="text-6xl font-bold bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent animate-pulse">GRADIENT TEXT</h3></div>`,
    tags: ["text", "gradient", "colorful", "animation"],
    popularity: 90,
  },
  {
    id: "morphing-text",
    title: "Morphing Text",
    description: "Text that morphs between different words",
    category: "text-animations",
    component: TextAnimationComponents.morphing,
    code: `// Morphing Text Animation - See full implementation in component`,
    tags: ["text", "morphing", "transition", "animation"],
    popularity: 84,
  },

  // Chatbot Components
  {
    id: "chat-bubble",
    title: "Chat Bubble",
    description: "Modern chat bubble with typing indicator",
    category: "chatbots",
    component: ChatbotComponents.bubble,
    code: `// Chat Bubble Component - See full implementation in component`,
    tags: ["chat", "bubble", "messaging", "typing"],
    popularity: 91,
  },
  {
    id: "chat-widget",
    title: "Chat Widget",
    description: "Floating chat widget with AI assistant",
    category: "chatbots",
    component: ChatbotComponents.widget,
    code: `// Chat Widget Component - See full implementation in component`,
    tags: ["chat", "widget", "ai", "floating"],
    popularity: 96,
  },
  {
    id: "chat-assistant",
    title: "AI Assistant",
    description: "Full-featured AI assistant interface",
    category: "chatbots",
    component: ChatbotComponents.assistant,
    code: `// AI Assistant Component - See full implementation in component`,
    tags: ["chat", "ai", "assistant", "interface"],
    popularity: 94,
  },

  // Form Components
  {
    id: "form-login",
    title: "Login Form",
    description: "Beautiful login form with validation",
    category: "forms",
    component: FormComponents.login,
    code: `// Login Form Component - See full implementation in component`,
    tags: ["form", "login", "authentication"],
    popularity: 93,
  },
  {
    id: "form-contact",
    title: "Contact Form",
    description: "Multi-field contact form",
    category: "forms",
    component: FormComponents.contact,
    code: `// Contact Form Component - See full implementation in component`,
    tags: ["form", "contact", "multi-field"],
    popularity: 87,
  },

  // Navigation Components
  {
    id: "nav-horizontal",
    title: "Horizontal Navigation",
    description: "Clean horizontal navigation bar",
    category: "navbars",
    component: NavigationComponents.horizontal,
    code: `// Horizontal Navigation Component - See full implementation in component`,
    tags: ["navigation", "horizontal", "navbar"],
    popularity: 91,
  },
  {
    id: "nav-sidebar",
    title: "Sidebar Navigation",
    description: "Vertical sidebar navigation",
    category: "navbars",
    component: NavigationComponents.sidebar,
    code: `// Sidebar Navigation Component - See full implementation in component`,
    tags: ["navigation", "sidebar", "vertical"],
    popularity: 88,
  },

  // Modal Components
  {
    id: "modal-basic",
    title: "Basic Modal",
    description: "Simple modal with backdrop blur",
    category: "modals",
    component: ModalComponents.basic,
    code: `// Basic Modal Component - See full implementation in component`,
    tags: ["modal", "dialog", "overlay"],
    popularity: 85,
  },

  // Chart Components
  {
    id: "chart-bar",
    title: "Bar Chart",
    description: "Animated bar chart component",
    category: "charts",
    component: ChartComponents.bar,
    code: `// Bar Chart Component - See full implementation in component`,
    tags: ["chart", "bar", "data"],
    popularity: 82,
  },
  {
    id: "chart-pie",
    title: "Pie Chart",
    description: "Circular progress pie chart",
    category: "charts",
    component: ChartComponents.pie,
    code: `// Pie Chart Component - See full implementation in component`,
    tags: ["chart", "pie", "circular"],
    popularity: 79,
  },

  // Loading Components
  {
    id: "loading-spinner",
    title: "Loading Spinner",
    description: "Classic spinning loader",
    category: "loading",
    component: LoadingComponents.spinner,
    code: `<div className="flex items-center justify-center p-8"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div></div>`,
    tags: ["loading", "spinner", "animation"],
    popularity: 86,
  },
  {
    id: "loading-dots",
    title: "Loading Dots",
    description: "Bouncing dots loader",
    category: "loading",
    component: LoadingComponents.dots,
    code: `<div className="flex items-center justify-center gap-2 p-8"><div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce"></div><div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div><div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div></div>`,
    tags: ["loading", "dots", "bounce"],
    popularity: 84,
  },
  {
    id: "loading-skeleton",
    title: "Skeleton Loader",
    description: "Content placeholder skeleton",
    category: "loading",
    component: LoadingComponents.skeleton,
    code: `// Skeleton Loader Component - See full implementation in component`,
    tags: ["loading", "skeleton", "placeholder"],
    popularity: 88,
  },

  // Avatar Components
  {
    id: "avatar-basic",
    title: "Basic Avatar",
    description: "Simple avatar with initials",
    category: "avatars",
    component: AvatarComponents.basic,
    code: `<div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">JD</div>`,
    tags: ["avatar", "profile", "initials"],
    popularity: 90,
  },
  {
    id: "avatar-image",
    title: "Image Avatar",
    description: "Avatar with image placeholder",
    category: "avatars",
    component: AvatarComponents.image,
    code: `<div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"><div className="w-full h-full bg-gradient-to-br from-green-400 to-blue-500"></div></div>`,
    tags: ["avatar", "image", "profile"],
    popularity: 87,
  },
  {
    id: "avatar-group",
    title: "Avatar Group",
    description: "Stacked avatar group",
    category: "avatars",
    component: AvatarComponents.group,
    code: `// Avatar Group Component - See full implementation in component`,
    tags: ["avatar", "group", "stacked"],
    popularity: 83,
  },

  // Badge Components
  {
    id: "badge-basic",
    title: "Basic Badge",
    description: "Simple status badge",
    category: "badges",
    component: BadgeComponents.basic,
    code: `<span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">New</span>`,
    tags: ["badge", "status", "label"],
    popularity: 85,
  },
  {
    id: "badge-success",
    title: "Success Badge",
    description: "Green success badge",
    category: "badges",
    component: BadgeComponents.success,
    code: `<span className="px-3 py-1 bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-full text-sm font-medium">Success</span>`,
    tags: ["badge", "success", "status"],
    popularity: 82,
  },
  {
    id: "badge-warning",
    title: "Warning Badge",
    description: "Yellow warning badge",
    category: "badges",
    component: BadgeComponents.warning,
    code: `<span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400 rounded-full text-sm font-medium">Warning</span>`,
    tags: ["badge", "warning", "status"],
    popularity: 78,
  },
  {
    id: "badge-error",
    title: "Error Badge",
    description: "Red error badge",
    category: "badges",
    component: BadgeComponents.error,
    code: `<span className="px-3 py-1 bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-full text-sm font-medium">Error</span>`,
    tags: ["badge", "error", "status"],
    popularity: 80,
  },
]
