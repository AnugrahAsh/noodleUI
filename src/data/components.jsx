"use client"

import { useState } from "react"
import {
  X,
  Star,
  Zap,
  MessageCircle,
  Send,
  User,
  BarChart3,
  TrendingUp,
  Eye,
  EyeOff,
  Search,
  Filter,
  Bell,
  Settings,
  ChevronDown,
  Play,
  Pause,
  Volume2,
  Upload,
  Shield,
  Home,
  Users,
  Check,
  Mail,
  Phone,
} from "lucide-react"

// Enhanced Button Components with 8 variants each
const ButtonVariants = {
  primary: () => (
    <button className="group px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-medium transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl active:scale-95">
      <span className="group-hover:translate-x-0.5 transition-transform duration-200">Primary Button</span>
    </button>
  ),
  secondary: () => (
    <button className="group px-6 py-3 bg-gray-500 hover:bg-gray-600 text-white rounded-xl font-medium transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl active:scale-95">
      <span className="group-hover:translate-x-0.5 transition-transform duration-200">Secondary Button</span>
    </button>
  ),
  gradient: () => (
    <button className="group px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-xl font-medium transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl active:scale-95">
      <span className="group-hover:translate-x-0.5 transition-transform duration-200">Gradient Button</span>
    </button>
  ),
  outline: () => (
    <button className="group px-6 py-3 border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded-xl font-medium transition-all duration-200 hover:scale-105 active:scale-95">
      <span className="group-hover:translate-x-0.5 transition-transform duration-200">Outline Button</span>
    </button>
  ),
  ghost: () => (
    <button className="group px-6 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl font-medium transition-all duration-200 hover:scale-105 active:scale-95">
      <span className="group-hover:translate-x-0.5 transition-transform duration-200">Ghost Button</span>
    </button>
  ),
  destructive: () => (
    <button className="group px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-xl font-medium transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl active:scale-95">
      <span className="group-hover:translate-x-0.5 transition-transform duration-200">Destructive</span>
    </button>
  ),
  icon: () => (
    <button className="group flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl font-medium transition-all duration-200 hover:scale-105 shadow-lg active:scale-95">
      <Zap size={18} className="group-hover:rotate-12 transition-transform duration-200" />
      <span>Icon Button</span>
    </button>
  ),
  floating: () => (
    <button className="group w-14 h-14 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-200 hover:scale-110 flex items-center justify-center active:scale-95">
      <Star size={20} className="group-hover:rotate-180 transition-transform duration-300" />
    </button>
  ),
}

// Enhanced Card Components with 8 variants
const CardVariants = {
  basic: () => (
    <div className="group max-w-sm bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 p-6 hover:shadow-xl transition-all duration-300 hover:scale-105">
      <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-500 transition-colors">Basic Card</h3>
      <p className="text-gray-600 dark:text-gray-400 text-sm">
        A simple card component with clean styling and hover effects.
      </p>
    </div>
  ),
  media: () => (
    <div className="group max-w-sm bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
      <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 group-hover:scale-110 transition-transform duration-300"></div>
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-2">Media Card</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          Card with media content and beautiful hover animations.
        </p>
      </div>
    </div>
  ),
  profile: () => (
    <div className="group max-w-sm bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 p-6 text-center hover:shadow-xl transition-all duration-300 hover:scale-105">
      <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
        <User size={24} className="text-white" />
      </div>
      <h3 className="text-lg font-semibold mb-1">Sarah Johnson</h3>
      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">UI/UX Designer</p>
      <div className="flex justify-center gap-2 mb-4">
        <button className="p-2 bg-blue-100 dark:bg-blue-900/20 text-blue-500 rounded-xl hover:bg-blue-200 dark:hover:bg-blue-900/40 transition-colors">
          <Mail size={16} />
        </button>
        <button className="p-2 bg-green-100 dark:bg-green-900/20 text-green-500 rounded-xl hover:bg-green-200 dark:hover:bg-green-900/40 transition-colors">
          <Phone size={16} />
        </button>
      </div>
      <button className="w-full py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-xl hover:from-pink-600 hover:to-purple-600 transition-all duration-200">
        Connect
      </button>
    </div>
  ),
  stats: () => (
    <div className="group bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 p-6 hover:shadow-xl transition-all duration-300 hover:scale-105">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Total Revenue</h3>
        <div className="p-2 bg-green-100 dark:bg-green-900/20 rounded-lg group-hover:rotate-12 transition-transform duration-300">
          <TrendingUp size={20} className="text-green-500" />
        </div>
      </div>
      <div className="mb-2">
        <span className="text-2xl font-bold">$24,567</span>
        <span className="text-green-500 text-sm ml-2">+12.5%</span>
      </div>
      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">Compared to last month</p>
      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div className="h-full w-3/4 bg-gradient-to-r from-green-400 to-blue-500 rounded-full group-hover:w-full transition-all duration-500"></div>
      </div>
    </div>
  ),
  notification: () => (
    <div className="group max-w-sm bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 p-4 hover:shadow-xl transition-all duration-300 hover:scale-105">
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
          <Bell size={16} className="text-blue-500" />
        </div>
        <div className="flex-1">
          <h4 className="font-medium text-sm">New message received</h4>
          <p className="text-gray-600 dark:text-gray-400 text-xs mt-1">You have a new message from John Doe</p>
          <span className="text-xs text-gray-500 mt-2 block">2 minutes ago</span>
        </div>
      </div>
    </div>
  ),
  pricing: () => (
    <div className="group max-w-sm bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 p-6 hover:shadow-xl transition-all duration-300 hover:scale-105">
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-2">Pro Plan</h3>
        <div className="mb-4">
          <span className="text-3xl font-bold">$29</span>
          <span className="text-gray-500">/month</span>
        </div>
        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 mb-6">
          <li>✓ Unlimited projects</li>
          <li>✓ Priority support</li>
          <li>✓ Advanced features</li>
        </ul>
        <button className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
          Choose Plan
        </button>
      </div>
    </div>
  ),
  testimonial: () => (
    <div className="group max-w-sm bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 p-6 hover:shadow-xl transition-all duration-300 hover:scale-105">
      <div className="flex items-center gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className="text-yellow-400 fill-current group-hover:rotate-12 transition-transform duration-300"
            style={{ transitionDelay: `${i * 50}ms` }}
          />
        ))}
      </div>
      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
        "This component library is amazing! It saved me hours of development time."
      </p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
          <User size={16} className="text-white" />
        </div>
        <div>
          <h4 className="font-medium text-sm">Alex Chen</h4>
          <p className="text-xs text-gray-500">Frontend Developer</p>
        </div>
      </div>
    </div>
  ),
  feature: () => (
    <div className="group max-w-sm bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 p-6 hover:shadow-xl transition-all duration-300 hover:scale-105">
      <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300">
        <Shield size={24} className="text-white" />
      </div>
      <h3 className="text-lg font-semibold mb-2">Secure by Default</h3>
      <p className="text-gray-600 dark:text-gray-400 text-sm">
        Built with security best practices and modern encryption standards.
      </p>
    </div>
  ),
}

// Enhanced Form Components
const FormVariants = {
  login: () => {
    const LoginForm = () => {
      const [email, setEmail] = useState("")
      const [password, setPassword] = useState("")
      const [showPassword, setShowPassword] = useState(false)

      return (
        <div className="max-w-md bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Welcome Back</h2>
          <div className="space-y-4">
            <div className="group">
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 dark:bg-gray-800 transition-all duration-200 group-hover:border-gray-300"
                placeholder="Enter your email"
              />
            </div>
            <div className="group">
              <label className="block text-sm font-medium mb-2">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 pr-12 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 dark:bg-gray-800 transition-all duration-200 group-hover:border-gray-300"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
            <button className="w-full py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-all duration-200 hover:scale-105 font-medium">
              Sign In
            </button>
          </div>
        </div>
      )
    }
    return <LoginForm />
  },

  contact: () => {
    const ContactForm = () => {
      const [formData, setFormData] = useState({ name: "", email: "", message: "" })

      return (
        <div className="max-w-lg bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 p-8">
          <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="group">
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 dark:bg-gray-800 transition-all duration-200 group-hover:border-gray-300"
                  placeholder="Your name"
                />
              </div>
              <div className="group">
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 dark:bg-gray-800 transition-all duration-200 group-hover:border-gray-300"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div className="group">
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 dark:bg-gray-800 resize-none transition-all duration-200 group-hover:border-gray-300"
                placeholder="Your message..."
              />
            </div>
            <button className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-200 font-medium hover:scale-105">
              Send Message
            </button>
          </div>
        </div>
      )
    }
    return <ContactForm />
  },

  search: () => {
    const SearchForm = () => {
      const [query, setQuery] = useState("")
      const [focused, setFocused] = useState(false)

      return (
        <div className="max-w-md">
          <div className={`relative transition-all duration-200 ${focused ? "scale-105" : ""}`}>
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-900 transition-all duration-200"
              placeholder="Search anything..."
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={18} />
              </button>
            )}
          </div>
        </div>
      )
    }
    return <SearchForm />
  },

  newsletter: () => {
    const NewsletterForm = () => {
      const [email, setEmail] = useState("")
      const [subscribed, setSubscribed] = useState(false)

      return (
        <div className="max-w-md bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 p-6">
          <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
            Get the latest updates and news delivered to your inbox.
          </p>
          {!subscribed ? (
            <div className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 dark:bg-gray-800 transition-all duration-200"
                placeholder="Enter your email"
              />
              <button
                onClick={() => setSubscribed(true)}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-200 hover:scale-105"
              >
                Subscribe
              </button>
            </div>
          ) : (
            <div className="text-center py-4">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-2">
                <Check size={24} className="text-green-500" />
              </div>
              <p className="text-green-600 dark:text-green-400 font-medium">Successfully subscribed!</p>
            </div>
          )}
        </div>
      )
    }
    return <NewsletterForm />
  },

  filter: () => {
    const FilterForm = () => {
      const [filters, setFilters] = useState({ category: "", price: "", rating: "" })

      return (
        <div className="max-w-sm bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 p-6">
          <div className="flex items-center gap-2 mb-4">
            <Filter size={20} className="text-gray-600 dark:text-gray-400" />
            <h3 className="text-lg font-semibold">Filters</h3>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Category</label>
              <select
                value={filters.category}
                onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                className="w-full px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 dark:bg-gray-800"
              >
                <option value="">All Categories</option>
                <option value="electronics">Electronics</option>
                <option value="clothing">Clothing</option>
                <option value="books">Books</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Price Range</label>
              <select
                value={filters.price}
                onChange={(e) => setFilters({ ...filters, price: e.target.value })}
                className="w-full px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 dark:bg-gray-800"
              >
                <option value="">Any Price</option>
                <option value="0-50">$0 - $50</option>
                <option value="50-100">$50 - $100</option>
                <option value="100+">$100+</option>
              </select>
            </div>
            <button className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-200 hover:scale-105">
              Apply Filters
            </button>
          </div>
        </div>
      )
    }
    return <FilterForm />
  },

  upload: () => {
    const UploadForm = () => {
      const [dragOver, setDragOver] = useState(false)
      const [files, setFiles] = useState([])

      return (
        <div className="max-w-md bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 p-6">
          <h3 className="text-lg font-semibold mb-4">Upload Files</h3>
          <div
            className={`border-2 border-dashed rounded-xl p-8 text-center transition-all duration-200 ${
              dragOver
                ? "border-blue-400 bg-blue-50 dark:bg-blue-900/20"
                : "border-gray-300 dark:border-gray-600 hover:border-gray-400"
            }`}
            onDragOver={(e) => {
              e.preventDefault()
              setDragOver(true)
            }}
            onDragLeave={() => setDragOver(false)}
            onDrop={(e) => {
              e.preventDefault()
              setDragOver(false)
              setFiles([...e.dataTransfer.files])
            }}
          >
            <Upload size={32} className={`mx-auto mb-4 ${dragOver ? "text-blue-500" : "text-gray-400"}`} />
            <p className="text-gray-600 dark:text-gray-400 mb-2">Drag & drop files here</p>
            <p className="text-sm text-gray-500">or click to browse</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
              Choose Files
            </button>
          </div>
          {files.length > 0 && (
            <div className="mt-4">
              <p className="text-sm font-medium mb-2">{files.length} file(s) selected</p>
              <div className="space-y-1">
                {Array.from(files).map((file, index) => (
                  <div key={index} className="text-xs text-gray-600 dark:text-gray-400 truncate">
                    {file.name}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )
    }
    return <UploadForm />
  },

  feedback: () => {
    const FeedbackForm = () => {
      const [rating, setRating] = useState(0)
      const [feedback, setFeedback] = useState("")

      return (
        <div className="max-w-md bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 p-6">
          <h3 className="text-lg font-semibold mb-4">Rate Your Experience</h3>
          <div className="flex justify-center gap-2 mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => setRating(star)}
                className="transition-all duration-200 hover:scale-110"
              >
                <Star
                  size={24}
                  className={`${
                    star <= rating ? "text-yellow-400 fill-current" : "text-gray-300"
                  } transition-colors duration-200`}
                />
              </button>
            ))}
          </div>
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Tell us about your experience..."
            rows={3}
            className="w-full px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 dark:bg-gray-800 resize-none mb-4"
          />
          <button className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-200 hover:scale-105">
            Submit Feedback
          </button>
        </div>
      )
    }
    return <FeedbackForm />
  },

  quiz: () => {
    const QuizForm = () => {
      const [currentQuestion, setCurrentQuestion] = useState(0)
      const [selectedAnswer, setSelectedAnswer] = useState("")

      const questions = [
        {
          question: "What is your favorite color?",
          options: ["Red", "Blue", "Green", "Yellow"],
        },
      ]

      return (
        <div className="max-w-md bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Quick Quiz</h3>
            <span className="text-sm text-gray-500">1/5</span>
          </div>
          <div className="mb-4">
            <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full w-1/5 bg-blue-500 rounded-full transition-all duration-300"></div>
            </div>
          </div>
          <h4 className="font-medium mb-4">{questions[currentQuestion].question}</h4>
          <div className="space-y-2 mb-6">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => setSelectedAnswer(option)}
                className={`w-full p-3 text-left border rounded-lg transition-all duration-200 hover:scale-105 ${
                  selectedAnswer === option
                    ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                    : "border-gray-200 dark:border-gray-700 hover:border-gray-300"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
          <button className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-200 hover:scale-105">
            Next Question
          </button>
        </div>
      )
    }
    return <QuizForm />
  },
}

// Enhanced Navigation Components
const NavbarVariants = {
  modern: () => (
    <nav className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-lg">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
          <span className="text-white font-bold">N</span>
        </div>
        <span className="text-xl font-semibold">NoodleUI</span>
      </div>

      <div className="hidden md:flex items-center gap-8">
        <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors font-medium">
          Home
        </a>
        <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors font-medium">
          About
        </a>
        <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors font-medium">
          Contact
        </a>
      </div>

      <button className="px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-all duration-200 hover:scale-105 font-medium">
        Get Started
      </button>
    </nav>
  ),
  glass: () => (
    <div className="bg-gradient-to-br from-blue-400 to-purple-500 p-8 rounded-2xl">
      <nav className="flex items-center justify-between px-6 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center">
            <span className="text-white font-bold">N</span>
          </div>
          <span className="text-xl font-semibold text-white">NoodleUI</span>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <a href="#" className="text-white/80 hover:text-white transition-colors">
            Home
          </a>
          <a href="#" className="text-white/80 hover:text-white transition-colors">
            About
          </a>
          <a href="#" className="text-white/80 hover:text-white transition-colors">
            Contact
          </a>
        </div>

        <button className="px-4 py-2 bg-white/20 text-white rounded-xl hover:bg-white/30 transition-all duration-200 hover:scale-105 border border-white/30">
          Sign In
        </button>
      </nav>
    </div>
  ),
  minimal: () => (
    <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-800">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-black dark:bg-white rounded-lg flex items-center justify-center">
          <span className="text-white dark:text-black font-bold text-sm">N</span>
        </div>
        <span className="text-lg font-medium">NoodleUI</span>
      </div>

      <div className="hidden md:flex items-center gap-8">
        <a
          href="#"
          className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
        >
          Home
        </a>
        <a
          href="#"
          className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
        >
          About
        </a>
        <a
          href="#"
          className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
        >
          Contact
        </a>
      </div>

      <button className="px-4 py-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
        Get Started
      </button>
    </nav>
  ),
  sidebar: () => (
    <div className="flex h-64 bg-gray-50 dark:bg-gray-900 rounded-2xl overflow-hidden">
      <div className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 p-4">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">N</span>
          </div>
          <span className="font-semibold">NoodleUI</span>
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
            className="flex items-center gap-3 px-3 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
          >
            <Users size={16} />
            <span>Users</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
          >
            <Settings size={16} />
            <span>Settings</span>
          </a>
        </nav>
      </div>
      <div className="flex-1 p-4">
        <h2 className="text-lg font-semibold mb-2">Main Content</h2>
        <p className="text-gray-600 dark:text-gray-400">This is the main content area.</p>
      </div>
    </div>
  ),
  breadcrumb: () => (
    <nav className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-800">
      <a href="#" className="hover:text-blue-500 transition-colors">
        Home
      </a>
      <ChevronDown size={14} className="rotate-[-90deg]" />
      <a href="#" className="hover:text-blue-500 transition-colors">
        Products
      </a>
      <ChevronDown size={14} className="rotate-[-90deg]" />
      <span className="text-gray-900 dark:text-gray-100">Laptops</span>
    </nav>
  ),
  tabs: () => {
    const [activeTab, setActiveTab] = useState(0)
    const tabs = ["Overview", "Features", "Pricing", "Support"]

    return (
      <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-4">
        <div className="flex space-x-1 bg-gray-100 dark:bg-gray-800 rounded-lg p-1 mb-4">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                activeTab === index
                  ? "bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow-sm"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="p-4">
          <h3 className="font-semibold mb-2">{tabs[activeTab]} Content</h3>
          <p className="text-gray-600 dark:text-gray-400">
            This is the content for the {tabs[activeTab].toLowerCase()} tab.
          </p>
        </div>
      </div>
    )
  },
  dropdown: () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
        >
          <User size={16} />
          <span>Account</span>
          <ChevronDown size={14} className={`transform transition-transform ${isOpen ? "rotate-180" : ""}`} />
        </button>

        {isOpen && (
          <div className="absolute top-full mt-2 w-48 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-10 animate-in slide-in-from-top-2 duration-200">
            <div className="p-1">
              <a
                href="#"
                className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
              >
                <User size={14} />
                Profile
              </a>
              <a
                href="#"
                className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
              >
                <Settings size={14} />
                Settings
              </a>
              <hr className="my-1 border-gray-200 dark:border-gray-700" />
              <a
                href="#"
                className="flex items-center gap-2 px-3 py-2 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-md transition-colors"
              >
                <X size={14} />
                Sign Out
              </a>
            </div>
          </div>
        )}
      </div>
    )
  },
  pagination: () => {
    const [currentPage, setCurrentPage] = useState(1)
    const totalPages = 5

    return (
      <div className="flex items-center justify-center gap-2">
        <button
          onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronDown size={16} className="rotate-90" />
        </button>

        {[...Array(totalPages)].map((_, index) => {
          const page = index + 1
          return (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-10 h-10 rounded-lg transition-all duration-200 ${
                currentPage === page
                  ? "bg-blue-500 text-white"
                  : "border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
              }`}
            >
              {page}
            </button>
          )
        })}

        <button
          onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronDown size={16} className="rotate-[-90deg]" />
        </button>
      </div>
    )
  },
}

// Enhanced Modal Components
const ModalVariants = {
  simple: () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
      <div>
        <button
          onClick={() => setIsOpen(true)}
          className="px-6 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-all duration-200 hover:scale-105"
        >
          Open Modal
        </button>

        {isOpen && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 animate-in fade-in duration-200">
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl animate-in slide-in-from-bottom-4 duration-300">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold">Modal Title</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                This is a beautiful modal component with smooth animations and modern styling.
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex-1 py-2 border border-gray-200 dark:border-gray-700 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex-1 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  },
  confirmation: () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
      <div>
        <button
          onClick={() => setIsOpen(true)}
          className="px-6 py-3 bg-red-500 text-white rounded-xl hover:bg-red-600 transition-all duration-200 hover:scale-105"
        >
          Delete Item
        </button>

        {isOpen && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 animate-in fade-in duration-200">
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl animate-in slide-in-from-bottom-4 duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center">
                  <X size={24} className="text-red-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Delete Item</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">This action cannot be undone</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Are you sure you want to delete this item? This action is permanent and cannot be reversed.
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex-1 py-2 border border-gray-200 dark:border-gray-700 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex-1 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 transition-colors"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  },
  fullscreen: () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
      <div>
        <button
          onClick={() => setIsOpen(true)}
          className="px-6 py-3 bg-purple-500 text-white rounded-xl hover:bg-purple-600 transition-all duration-200 hover:scale-105"
        >
          Open Fullscreen
        </button>

        {isOpen && (
          <div className="fixed inset-0 bg-white dark:bg-gray-900 z-50 animate-in fade-in duration-300">
            <div className="h-full flex flex-col">
              <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-800">
                <h2 className="text-2xl font-bold">Fullscreen Modal</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="flex-1 p-6 overflow-y-auto">
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  This is a fullscreen modal that takes up the entire viewport. Perfect for detailed forms, image
                  galleries, or complex interfaces.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  },
  drawer: () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
      <div>
        <button
          onClick={() => setIsOpen(true)}
          className="px-6 py-3 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-all duration-200 hover:scale-105"
        >
          Open Drawer
        </button>

        {isOpen && (
          <>
            <div
              className="fixed inset-0 bg-black/50 z-40 animate-in fade-in duration-200"
              onClick={() => setIsOpen(false)}
            />
            <div className="fixed right-0 top-0 h-full w-96 bg-white dark:bg-gray-900 shadow-2xl z-50 animate-in slide-in-from-right duration-300">
              <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-800">
                <h3 className="text-lg font-semibold">Drawer Title</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  This is a drawer component that slides in from the side. Great for navigation menus, filters, or
                  additional content.
                </p>
                <div className="space-y-3">
                  {["Option 1", "Option 2", "Option 3"].map((option, i) => (
                    <div
                      key={i}
                      className="p-3 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer"
                    >
                      {option}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    )
  },
  popup: () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="px-6 py-3 bg-yellow-500 text-white rounded-xl hover:bg-yellow-600 transition-all duration-200 hover:scale-105"
        >
          Toggle Popup
        </button>

        {isOpen && (
          <div className="absolute top-full mt-2 w-80 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl z-10 animate-in slide-in-from-top-2 duration-200">
            <div className="p-4">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold">Quick Actions</h4>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors"
                >
                  <X size={16} />
                </button>
              </div>
              <div className="space-y-2">
                <button className="w-full text-left p-2 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors">
                  Edit Profile
                </button>
                <button className="w-full text-left p-2 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors">
                  View Settings
                </button>
                <button className="w-full text-left p-2 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors">
                  Share Link
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  },
  alert: () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
      <div>
        <button
          onClick={() => setIsOpen(true)}
          className="px-6 py-3 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition-all duration-200 hover:scale-105"
        >
          Show Alert
        </button>

        {isOpen && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 animate-in fade-in duration-200">
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 max-w-sm w-full mx-4 shadow-2xl animate-in slide-in-from-bottom-4 duration-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Bell size={32} className="text-orange-500" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Important Notice</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Your subscription will expire in 3 days. Please renew to continue using our services.
                </p>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-full py-2 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition-colors"
                >
                  Got it
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  },
  loading: () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
      <div>
        <button
          onClick={() => {
            setIsOpen(true)
            setTimeout(() => setIsOpen(false), 3000)
          }}
          className="px-6 py-3 bg-indigo-500 text-white rounded-xl hover:bg-indigo-600 transition-all duration-200 hover:scale-105"
        >
          Start Loading
        </button>

        {isOpen && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 animate-in fade-in duration-200">
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 max-w-sm w-full mx-4 shadow-2xl animate-in slide-in-from-bottom-4 duration-300">
              <div className="text-center">
                <div className="w-16 h-16 border-4 border-indigo-200 border-t-indigo-500 rounded-full animate-spin mx-auto mb-4"></div>
                <h3 className="text-lg font-semibold mb-2">Processing...</h3>
                <p className="text-gray-600 dark:text-gray-400">Please wait while we process your request.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  },
  success: () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
      <div>
        <button
          onClick={() => setIsOpen(true)}
          className="px-6 py-3 bg-emerald-500 text-white rounded-xl hover:bg-emerald-600 transition-all duration-200 hover:scale-105"
        >
          Show Success
        </button>

        {isOpen && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 animate-in fade-in duration-200">
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 max-w-sm w-full mx-4 shadow-2xl animate-in slide-in-from-bottom-4 duration-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check size={32} className="text-emerald-500" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Success!</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">Your action has been completed successfully.</p>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-full py-2 bg-emerald-500 text-white rounded-xl hover:bg-emerald-600 transition-colors"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  },
}

// Enhanced Chat Components
const ChatVariants = {
  minimal: () => {
    const [messages, setMessages] = useState([
      { id: 1, text: "Hello! How can I help you today?", sender: "bot", time: "2:30 PM" },
      { id: 2, text: "I'd like to learn about your components", sender: "user", time: "2:31 PM" },
      {
        id: 3,
        text: "Great! I'd be happy to help you explore our component library. What specific type of components are you interested in?",
        sender: "bot",
        time: "2:31 PM",
      },
    ])
    const [input, setInput] = useState("")
    const [isTyping, setIsTyping] = useState(false)

    const sendMessage = () => {
      if (input.trim()) {
        const newMessage = {
          id: messages.length + 1,
          text: input,
          sender: "user",
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        }
        setMessages([...messages, newMessage])
        setInput("")

        // Simulate bot typing
        setIsTyping(true)
        setTimeout(() => {
          setIsTyping(false)
          setMessages((prev) => [
            ...prev,
            {
              id: prev.length + 1,
              text: "Thanks for your message! I'm here to help.",
              sender: "bot",
              time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
            },
          ])
        }, 2000)
      }
    }

    return (
      <div className="max-w-md bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-xl">
        <div className="p-4 border-b border-gray-200 dark:border-gray-800 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                <MessageCircle size={20} className="text-white" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-gray-900"></div>
            </div>
            <div>
              <h3 className="font-semibold">AI Assistant</h3>
              <p className="text-xs text-green-500">Online</p>
            </div>
          </div>
        </div>

        <div className="h-80 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-xs px-4 py-3 rounded-2xl ${
                  message.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-100 dark:bg-gray-800"
                } animate-in slide-in-from-bottom-2 duration-300`}
              >
                <p className="text-sm">{message.text}</p>
                <p className={`text-xs mt-1 ${message.sender === "user" ? "text-blue-100" : "text-gray-500"}`}>
                  {message.time}
                </p>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-gray-100 dark:bg-gray-800 px-4 py-3 rounded-2xl animate-in slide-in-from-bottom-2 duration-300">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div
                    className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                    style={{ animationDelay: "0.1s" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="p-4 border-t border-gray-200 dark:border-gray-800">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Type a message..."
              className="flex-1 px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 dark:bg-gray-800 transition-all duration-200"
            />
            <button
              onClick={sendMessage}
              className="p-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-all duration-200 hover:scale-105 active:scale-95"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
    )
  },
  bubble: () => {
    const [messages, setMessages] = useState([
      { id: 1, text: "Hey there! 👋", sender: "bot", avatar: "🤖" },
      { id: 2, text: "How's your day going?", sender: "bot", avatar: "🤖" },
      { id: 3, text: "Pretty good! Working on some new designs", sender: "user", avatar: "👤" },
    ])

    return (
      <div className="max-w-md bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-6 border border-purple-200 dark:border-purple-800">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex items-end gap-2 ${message.sender === "user" ? "flex-row-reverse" : ""}`}
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white text-sm">
                {message.avatar}
              </div>
              <div
                className={`max-w-xs px-4 py-3 rounded-2xl shadow-lg ${
                  message.sender === "user"
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                    : "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
                } animate-in slide-in-from-bottom-2 duration-300`}
              >
                <p className="text-sm">{message.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 flex gap-2">
          <input
            type="text"
            placeholder="Type something magical..."
            className="flex-1 px-4 py-2 border border-purple-200 dark:border-purple-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm"
          />
          <button className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-200 hover:scale-105">
            <Send size={18} />
          </button>
        </div>
      </div>
    )
  },
  glass: () => (
    <div className="bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 p-8 rounded-2xl">
      <div className="max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6">
        <div className="space-y-4">
          <div className="flex justify-start">
            <div className="bg-white/20 backdrop-blur-sm px-4 py-3 rounded-2xl border border-white/30 text-white">
              <p className="text-sm">Welcome to the glass chat experience ✨</p>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="bg-white/30 backdrop-blur-sm px-4 py-3 rounded-2xl border border-white/40 text-white">
              <p className="text-sm">This looks amazing!</p>
            </div>
          </div>
          <div className="flex justify-start">
            <div className="bg-white/20 backdrop-blur-sm px-4 py-3 rounded-2xl border border-white/30 text-white">
              <p className="text-sm">Glad you like it! The glassmorphism effect creates a beautiful depth.</p>
            </div>
          </div>
        </div>

        <div className="mt-4 flex gap-2">
          <input
            type="text"
            placeholder="Type in the glass..."
            className="flex-1 px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/70"
          />
          <button className="p-2 bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-xl hover:bg-white/30 transition-all duration-200 hover:scale-105">
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  ),
  terminal: () => {
    const [commands, setCommands] = useState([
      { id: 1, command: "help", output: "Available commands: help, status, clear, echo" },
      { id: 2, command: "status", output: "System: Online | Users: 1,234 | Uptime: 99.9%" },
    ])
    const [input, setInput] = useState("")

    const executeCommand = () => {
      if (input.trim()) {
        const newCommand = {
          id: commands.length + 1,
          command: input,
          output: `Executed: ${input}`,
        }
        setCommands([...commands, newCommand])
        setInput("")
      }
    }

    return (
      <div className="max-w-lg bg-gray-900 rounded-2xl border border-gray-700 overflow-hidden font-mono">
        <div className="flex items-center gap-2 px-4 py-3 bg-gray-800 border-b border-gray-700">
          <div className="flex gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <span className="text-gray-400 text-sm ml-2">terminal</span>
        </div>

        <div className="p-4 h-64 overflow-y-auto text-green-400 text-sm">
          <div className="mb-2">
            <span className="text-blue-400">user@noodleui</span>
            <span className="text-white">:</span>
            <span className="text-purple-400">~</span>
            <span className="text-white">$ </span>
            <span>Welcome to NoodleUI Terminal</span>
          </div>

          {commands.map((cmd) => (
            <div key={cmd.id} className="mb-2">
              <div>
                <span className="text-blue-400">user@noodleui</span>
                <span className="text-white">:</span>
                <span className="text-purple-400">~</span>
                <span className="text-white">$ </span>
                <span>{cmd.command}</span>
              </div>
              <div className="text-gray-300 ml-4">{cmd.output}</div>
            </div>
          ))}

          <div className="flex">
            <span className="text-blue-400">user@noodleui</span>
            <span className="text-white">:</span>
            <span className="text-purple-400">~</span>
            <span className="text-white">$ </span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && executeCommand()}
              className="flex-1 bg-transparent outline-none text-green-400"
              autoFocus
            />
            <span className="animate-pulse">|</span>
          </div>
        </div>
      </div>
    )
  },
  voice: () => {
    const [isRecording, setIsRecording] = useState(false)
    const [isPlaying, setIsPlaying] = useState(false)

    return (
      <div className="max-w-md bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-4">Voice Chat</h3>

          <div className="relative mb-6">
            <div
              className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto transition-all duration-300 ${
                isRecording ? "bg-red-500 animate-pulse" : "bg-blue-500"
              }`}
            >
              {isRecording ? (
                <div className="w-8 h-8 bg-white rounded-sm"></div>
              ) : (
                <Volume2 size={32} className="text-white" />
              )}
            </div>

            {isRecording && <div className="absolute inset-0 rounded-full border-4 border-red-300 animate-ping"></div>}
          </div>

          <div className="space-y-3">
            <button
              onClick={() => setIsRecording(!isRecording)}
              className={`w-full py-3 rounded-xl font-medium transition-all duration-200 hover:scale-105 ${
                isRecording ? "bg-red-500 hover:bg-red-600 text-white" : "bg-blue-500 hover:bg-blue-600 text-white"
              }`}
            >
              {isRecording ? "Stop Recording" : "Start Recording"}
            </button>

            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-full py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl font-medium transition-all duration-200 hover:scale-105"
            >
              {isPlaying ? (
                <div className="flex items-center justify-center gap-2">
                  <Pause size={18} />
                  <span>Pause</span>
                </div>
              ) : (
                <div className="flex items-center justify-center gap-2">
                  <Play size={18} />
                  <span>Play Last Message</span>
                </div>
              )}
            </button>
          </div>

          <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
            {isRecording ? "Recording... Speak now" : "Tap to start voice conversation"}
          </div>
        </div>
      </div>
    )
  },
  support: () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 z-50 ${
            isOpen ? "bg-red-500 hover:bg-red-600" : "bg-blue-500 hover:bg-blue-600"
          } text-white hover:scale-110`}
        >
          {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        </button>

        {isOpen && (
          <div className="fixed bottom-24 right-6 w-80 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800 z-40 animate-in slide-in-from-bottom-4 duration-300">
            <div className="p-4 border-b border-gray-200 dark:border-gray-800 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-t-2xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                  <MessageCircle size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">Support Chat</h3>
                  <p className="text-xs text-green-500">We're online</p>
                </div>
              </div>
            </div>

            <div className="p-4 h-64 overflow-y-auto space-y-3">
              <div className="flex justify-start">
                <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-2xl max-w-xs">
                  <p className="text-sm">Hi! How can we help you today?</p>
                </div>
              </div>

              <div className="space-y-2">
                <button className="w-full text-left p-3 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  💡 I have a question about pricing
                </button>
                <button className="w-full text-left p-3 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  🐛 I found a bug
                </button>
                <button className="w-full text-left p-3 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  📚 I need help with documentation
                </button>
                <button className="w-full text-left p-3 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  💬 Start a conversation
                </button>
              </div>
            </div>

            <div className="p-4 border-t border-gray-200 dark:border-gray-800">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="flex-1 px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 dark:bg-gray-800 text-sm"
                />
                <button className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                  <Send size={16} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  },
  group: () => {
    const [activeUsers] = useState([
      { id: 1, name: "Alice", avatar: "👩", status: "online" },
      { id: 2, name: "Bob", avatar: "👨", status: "away" },
      { id: 3, name: "Carol", avatar: "👩‍💼", status: "online" },
    ])

    return (
      <div className="max-w-md bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
        <div className="p-4 border-b border-gray-200 dark:border-gray-800 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold">Team Chat</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                {activeUsers.filter((u) => u.status === "online").length} online
              </p>
            </div>
            <div className="flex -space-x-2">
              {activeUsers.map((user) => (
                <div key={user.id} className="relative">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-blue-400 rounded-full flex items-center justify-center border-2 border-white dark:border-gray-900">
                    <span className="text-sm">{user.avatar}</span>
                  </div>
                  <div
                    className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white dark:border-gray-900 ${
                      user.status === "online" ? "bg-green-500" : "bg-gray-400"
                    }`}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="p-4 h-64 overflow-y-auto space-y-3">
          <div className="flex items-start gap-2">
            <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-blue-400 rounded-full flex items-center justify-center text-xs">
              👩
            </div>
            <div>
              <div className="bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded-2xl">
                <p className="text-sm">Hey team! How's the project going?</p>
              </div>
              <p className="text-xs text-gray-500 mt-1">Alice • 2:30 PM</p>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <div className="w-6 h-6 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-xs">
              👨
            </div>
            <div>
              <div className="bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded-2xl">
                <p className="text-sm">Making great progress! The new components look amazing 🚀</p>
              </div>
              <p className="text-xs text-gray-500 mt-1">Bob • 2:31 PM</p>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <div className="w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center text-xs">
              👩‍💼
            </div>
            <div>
              <div className="bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded-2xl">
                <p className="text-sm">Agreed! Should we schedule a demo for tomorrow?</p>
              </div>
              <p className="text-xs text-gray-500 mt-1">Carol • 2:32 PM</p>
            </div>
          </div>
        </div>

        <div className="p-4 border-t border-gray-200 dark:border-gray-800">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Message the team..."
              className="flex-1 px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 dark:bg-gray-800"
            />
            <button className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
    )
  },
  ai: () => {
    const [messages, setMessages] = useState([
      { id: 1, text: "I'm your AI assistant. I can help you with code, design, and creative tasks!", sender: "bot" },
    ])
    const [input, setInput] = useState("")
    const [isThinking, setIsThinking] = useState(false)

    const suggestions = [
      "Help me write a function",
      "Design a landing page",
      "Explain React hooks",
      "Create a color palette",
    ]

    return (
      <div className="max-w-md bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-2xl border border-indigo-200 dark:border-indigo-800 overflow-hidden">
        <div className="p-4 border-b border-indigo-200 dark:border-indigo-800 bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-lg">🤖</span>
            </div>
            <div>
              <h3 className="font-semibold">AI Assistant</h3>
              <p className="text-xs text-indigo-100">Powered by advanced AI</p>
            </div>
          </div>
        </div>

        <div className="p-4 h-64 overflow-y-auto space-y-3">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-xs px-4 py-3 rounded-2xl ${
                  message.sender === "user"
                    ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white"
                    : "bg-white dark:bg-gray-800 border border-indigo-200 dark:border-indigo-700"
                }`}
              >
                <p className="text-sm">{message.text}</p>
              </div>
            </div>
          ))}

          {isThinking && (
            <div className="flex justify-start">
              <div className="bg-white dark:bg-gray-800 border border-indigo-200 dark:border-indigo-700 px-4 py-3 rounded-2xl">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce"></div>
                  <div
                    className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce"
                    style={{ animationDelay: "0.1s" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                  <span className="text-sm text-indigo-600 dark:text-indigo-400 ml-2">AI is thinking...</span>
                </div>
              </div>
            </div>
          )}

          {messages.length === 1 && (
            <div className="space-y-2">
              <p className="text-xs text-gray-600 dark:text-gray-400 text-center">Try asking:</p>
              {suggestions.map((suggestion, i) => (
                <button
                  key={i}
                  onClick={() => setInput(suggestion)}
                  className="w-full text-left p-2 text-sm bg-white dark:bg-gray-800 border border-indigo-200 dark:border-indigo-700 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="p-4 border-t border-indigo-200 dark:border-indigo-800">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything..."
              className="flex-1 px-3 py-2 border border-indigo-200 dark:border-indigo-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white/50 dark:bg-gray-800/50"
            />
            <button className="p-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-200 hover:scale-105">
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
    )
  },
}

// Enhanced Chart Components
const ChartVariants = {
  bar: () => (
    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Sales Overview</h3>
        <BarChart3 size={20} className="text-blue-500" />
      </div>
      <div className="space-y-4">
        {[
          { label: "Jan", value: 65, color: "bg-blue-500" },
          { label: "Feb", value: 78, color: "bg-green-500" },
          { label: "Mar", value: 52, color: "bg-yellow-500" },
          { label: "Apr", value: 91, color: "bg-purple-500" },
          { label: "May", value: 84, color: "bg-pink-500" },
        ].map((item, index) => (
          <div key={index} className="flex items-center gap-4 group">
            <span className="w-8 text-sm font-medium">{item.label}</span>
            <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
              <div
                className={`h-full ${item.color} rounded-full transition-all duration-500 group-hover:scale-105`}
                style={{ width: `${item.value}%` }}
              />
            </div>
            <span className="text-sm font-medium w-8">{item.value}%</span>
          </div>
        ))}
      </div>
    </div>
  ),
  donut: () => (
    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Traffic Sources</h3>
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
      </div>
      <div className="flex items-center justify-center mb-6">
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
              className="animate-pulse"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold">60%</span>
          </div>
        </div>
      </div>
      <div className="space-y-3">
        {[
          { label: "Direct", value: "60%", color: "bg-blue-500" },
          { label: "Social", value: "25%", color: "bg-green-500" },
          { label: "Email", value: "15%", color: "bg-yellow-500" },
        ].map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className={`w-3 h-3 ${item.color} rounded-full`}></div>
              <span className="text-sm">{item.label}</span>
            </div>
            <span className="text-sm font-medium">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  ),
  line: () => (
    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Revenue Trend</h3>
        <div className="flex items-center gap-2 text-sm text-green-600">
          <TrendingUp size={16} />
          <span>+12.5%</span>
        </div>
      </div>
      <div className="relative h-32 mb-4">
        <svg className="w-full h-full" viewBox="0 0 300 100">
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M 0 80 Q 75 60 150 40 T 300 20"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="3"
            className="animate-pulse"
          />
          <path d="M 0 80 Q 75 60 150 40 T 300 20 L 300 100 L 0 100 Z" fill="url(#gradient)" />
        </svg>
      </div>
      <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
        <span>Jan</span>
        <span>Feb</span>
        <span>Mar</span>
        <span>Apr</span>
        <span>May</span>
      </div>
    </div>
  ),
  area: () => (
    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">User Activity</h3>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
          <span className="text-sm text-gray-600 dark:text-gray-400">Active Users</span>
        </div>
      </div>
      <div className="relative h-40 mb-4">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-100 to-transparent dark:from-blue-900/20 rounded-lg"></div>
        <div className="relative h-full flex items-end justify-between px-4">
          {[40, 65, 45, 80, 60, 90, 75].map((height, index) => (
            <div
              key={index}
              className="w-8 bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-lg transition-all duration-500 hover:scale-110"
              style={{ height: `${height}%` }}
            ></div>
          ))}
        </div>
      </div>
      <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
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
  progress: () => (
    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 p-6">
      <h3 className="text-lg font-semibold mb-6">Project Progress</h3>
      <div className="space-y-6">
        {[
          { label: "Design", progress: 90, color: "bg-green-500" },
          { label: "Development", progress: 65, color: "bg-blue-500" },
          { label: "Testing", progress: 40, color: "bg-yellow-500" },
          { label: "Deployment", progress: 20, color: "bg-red-500" },
        ].map((item, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">{item.label}</span>
              <span className="text-sm text-gray-600 dark:text-gray-400">{item.progress}%</span>
            </div>
            <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div
                className={`h-full ${item.color} rounded-full transition-all duration-1000 ease-out`}
                style={{ width: `${item.progress}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
  metric: () => (
    <div className="grid grid-cols-2 gap-4">
      {[
        { label: "Total Users", value: "12,345", change: "+12%", color: "text-blue-500" },
        { label: "Revenue", value: "$45,678", change: "+8%", color: "text-green-500" },
        { label: "Orders", value: "1,234", change: "-2%", color: "text-red-500" },
        { label: "Conversion", value: "3.2%", change: "+5%", color: "text-purple-500" },
      ].map((metric, index) => (
        <div
          key={index}
          className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-4 hover:shadow-lg transition-all duration-200 hover:scale-105"
        >
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">{metric.label}</div>
          <div className="text-2xl font-bold mb-1">{metric.value}</div>
          <div className={`text-sm ${metric.color}`}>{metric.change}</div>
        </div>
      ))}
    </div>
  ),
  heatmap: () => (
    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Activity Heatmap</h3>
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
          <span>Less</span>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((intensity) => (
              <div
                key={intensity}
                className={`w-3 h-3 rounded-sm ${
                  intensity === 1
                    ? "bg-gray-200 dark:bg-gray-700"
                    : intensity === 2
                      ? "bg-green-200 dark:bg-green-800"
                      : intensity === 3
                        ? "bg-green-300 dark:bg-green-700"
                        : intensity === 4
                          ? "bg-green-400 dark:bg-green-600"
                          : "bg-green-500 dark:bg-green-500"
                }`}
              ></div>
            ))}
          </div>
          <span>More</span>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-1">
        {Array.from({ length: 49 }, (_, i) => {
          const intensity = Math.floor(Math.random() * 5) + 1
          return (
            <div
              key={i}
              className={`w-4 h-4 rounded-sm transition-all duration-200 hover:scale-125 cursor-pointer ${
                intensity === 1
                  ? "bg-gray-200 dark:bg-gray-700"
                  : intensity === 2
                    ? "bg-green-200 dark:bg-green-800"
                    : intensity === 3
                      ? "bg-green-300 dark:bg-green-700"
                      : intensity === 4
                        ? "bg-green-400 dark:bg-green-600"
                        : "bg-green-500 dark:bg-green-500"
              }`}
              title={`${intensity} contributions`}
            ></div>
          )
        })}
      </div>
    </div>
  ),
  gauge: () => (
    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 p-6">
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-6">Performance Score</h3>
        <div className="relative w-40 h-40 mx-auto mb-4">
          <svg className="w-40 h-40 transform -rotate-90" viewBox="0 0 36 36">
            <path
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="2"
            />
            <path
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#10b981"
              strokeWidth="2"
              strokeDasharray="85, 100"
              className="transition-all duration-1000 ease-out"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-3xl font-bold">85</span>
            <span className="text-sm text-gray-600 dark:text-gray-400">Score</span>
          </div>
        </div>
        <div className="flex justify-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <span>Poor</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <span>Good</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span>Excellent</span>
          </div>
        </div>
      </div>
    </div>
  ),
}

export const allComponents = [
  // Buttons (8 variants)
  {
    id: "primary-button",
    title: "Primary Button",
    description: "Main call-to-action button with hover animations and micro-interactions.",
    category: "buttons",
    component: ButtonVariants.primary,
    code: `<button className="group px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-medium transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl active:scale-95">
  <span className="group-hover:translate-x-0.5 transition-transform duration-200">Primary Button</span>
</button>`,
    tags: ["basic", "interactive", "primary"],
    difficulty: "beginner",
    popularity: 95,
  },
  {
    id: "secondary-button",
    title: "Secondary Button",
    description: "Secondary action button with subtle styling and smooth transitions.",
    category: "buttons",
    component: ButtonVariants.secondary,
    code: `<button className="group px-6 py-3 bg-gray-500 hover:bg-gray-600 text-white rounded-xl font-medium transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl active:scale-95">
  <span className="group-hover:translate-x-0.5 transition-transform duration-200">Secondary Button</span>
</button>`,
    tags: ["secondary", "subtle", "clean"],
    difficulty: "beginner" ,
    popularity: 88,
  },
  {
    id: "gradient-button",
    title: "Gradient Button",
    description: "Eye-catching gradient button with smooth color transitions and hover effects.",
    category: "buttons",
    component: ButtonVariants.gradient,
    code: `<button className="group px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-xl font-medium transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl active:scale-95">
  <span className="group-hover:translate-x-0.5 transition-transform duration-200">Gradient Button</span>
</button>`,
    tags: ["gradient", "colorful", "modern"],
    difficulty: "beginner" ,
    popularity: 87,
  },
  {
    id: "outline-button",
    title: "Outline Button",
    description: "Clean outline button that fills on hover with smooth color transitions.",
    category: "buttons",
    component: ButtonVariants.outline,
    code: `<button className="group px-6 py-3 border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded-xl font-medium transition-all duration-200 hover:scale-105 active:scale-95">
  <span className="group-hover:translate-x-0.5 transition-transform duration-200">Outline Button</span>
</button>`,
    tags: ["outline", "minimal", "clean"],
    difficulty: "beginner" ,
    popularity: 73,
  },
  {
    id: "ghost-button",
    title: "Ghost Button",
    description: "Minimal button with no background, great for subtle interactions.",
    category: "buttons",
    component: ButtonVariants.ghost,
    code: `<button className="group px-6 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl font-medium transition-all duration-200 hover:scale-105 active:scale-95">
  <span className="group-hover:translate-x-0.5 transition-transform duration-200">Ghost Button</span>
</button>`,
    tags: ["ghost", "minimal", "subtle"],
    difficulty: "beginner" ,
    popularity: 71,
  },
  {
    id: "destructive-button",
    title: "Destructive Button",
    description: "Warning button for destructive actions with attention-grabbing styling.",
    category: "buttons",
    component: ButtonVariants.destructive,
    code: `<button className="group px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-xl font-medium transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl active:scale-95">
  <span className="group-hover:translate-x-0.5 transition-transform duration-200">Destructive</span>
</button>`,
    tags: ["destructive", "warning", "danger"],
    difficulty: "beginner" ,
    popularity: 65,
  },
  {
    id: "icon-button",
    title: "Icon Button",
    description: "Button with icon and text for enhanced visual communication.",
    category: "buttons",
    component: ButtonVariants.icon,
    code: `<button className="group flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl font-medium transition-all duration-200 hover:scale-105 shadow-lg active:scale-95">
  <Zap size={18} className="group-hover:rotate-12 transition-transform duration-200" />
  <span>Icon Button</span>
</button>`,
    tags: ["icon", "action", "interactive"],
    difficulty: "beginner" ,
    popularity: 82,
  },
  {
    id: "floating-button",
    title: "Floating Action Button",
    description: "Circular floating button perfect for primary actions and quick access.",
    category: "buttons",
    component: ButtonVariants.floating,
    code: `<button className="group w-14 h-14 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-200 hover:scale-110 flex items-center justify-center active:scale-95">
  <Star size={20} className="group-hover:rotate-180 transition-transform duration-300" />
</button>`,
    tags: ["floating", "circular", "action"],
    difficulty: "beginner" ,
    popularity: 69,
  },

  // Cards (8 variants)
  {
    id: "basic-card",
    title: "Basic Card",
    description: "Simple card component with clean styling and hover effects.",
    category: "cards",
    component: CardVariants.basic,
    code: `<div className="group max-w-sm bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 p-6 hover:shadow-xl transition-all duration-300 hover:scale-105">
  <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-500 transition-colors">Basic Card</h3>
  <p className="text-gray-600 dark:text-gray-400 text-sm">A simple card component with clean styling and hover effects.</p>
</div>`,
    tags: ["basic", "simple", "clean"],
    difficulty: "beginner" ,
    popularity: 92,
  },
  {
    id: "media-card",
    title: "Media Card",
    description: "Card with media content and beautiful hover animations.",
    category: "cards",
    component: CardVariants.media,
    code: `<div className="group max-w-sm bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
  <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 group-hover:scale-110 transition-transform duration-300"></div>
  <div className="p-6">
    <h3 className="text-lg font-semibold mb-2">Media Card</h3>
    <p className="text-gray-600 dark:text-gray-400 text-sm">Card with media content and beautiful hover animations.</p>
  </div>
</div>`,
    tags: ["media", "image", "content"],
    difficulty: "intermediate" ,
    popularity: 89,
  },
  {
    id: "profile-card",
    title: "Profile Card",
    description: "User profile card with avatar, contact information, and action buttons.",
    category: "cards",
    component: CardVariants.profile,
    code: `<div className="group max-w-sm bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 p-6 text-center hover:shadow-xl transition-all duration-300 hover:scale-105">
  <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
    <User size={24} className="text-white" />
  </div>
  <h3 className="text-lg font-semibold mb-1">Sarah Johnson</h3>
  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">UI/UX Designer</p>
  <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">Connect</button>
</div>`,
    tags: ["profile", "user", "social"],
    difficulty: "intermediate" ,
    popularity: 76,
  },
  {
    id: "stats-card",
    title: "Statistics Card",
    description: "Data visualization card with metrics, progress bars, and trend indicators.",
    category: "cards",
    component: CardVariants.stats,
    code: `<div className="group bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 p-6 hover:shadow-xl transition-all duration-300 hover:scale-105">
  <div className="flex items-center justify-between mb-4">
    <h3 className="text-lg font-semibold">Total Revenue</h3>
    <div className="p-2 bg-green-100 dark:bg-green-900/20 rounded-lg group-hover:rotate-12 transition-transform duration-300">
      <TrendingUp size={20} className="text-green-500" />
    </div>
  </div>
  <div className="mb-2">
    <span className="text-2xl font-bold">$24,567</span>
    <span className="text-green-500 text-sm ml-2">+12.5%</span>
  </div>
  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">Compared to last month</p>
  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
    <div className="h-full w-3/4 bg-gradient-to-r from-green-400 to-blue-500 rounded-full group-hover:w-full transition-all duration-500"></div>
  </div>
</div>`,
    tags: ["stats", "analytics", "dashboard"],
    difficulty: "intermediate" ,
    popularity: 81,
  },
  {
    id: "notification-card",
    title: "Notification Card",
    description: "Compact notification card with icon, message, and timestamp.",
    category: "cards",
    component: CardVariants.notification,
    code: `<div className="group max-w-sm bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 p-4 hover:shadow-xl transition-all duration-300 hover:scale-105">
  <div className="flex items-start gap-3">
    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
      <Bell size={16} className="text-blue-500" />
    </div>
    <div className="flex-1">
      <h4 className="font-medium text-sm">New message received</h4>
      <p className="text-gray-600 dark:text-gray-400 text-xs mt-1">You have a new message from John Doe</p>
      <span className="text-xs text-gray-500 mt-2 block">2 minutes ago</span>
    </div>
  </div>
</div>`,
    tags: ["notification", "alert", "message"],
    difficulty: "intermediate" ,
    popularity: 74,
  },
  {
    id: "pricing-card",
    title: "Pricing Card",
    description: "Pricing plan card with features list and call-to-action button.",
    category: "cards",
    component: CardVariants.pricing,
    code: `<div className="group max-w-sm bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 p-6 hover:shadow-xl transition-all duration-300 hover:scale-105">
  <div className="text-center">
    <h3 className="text-lg font-semibold mb-2">Pro Plan</h3>
    <div className="mb-4">
      <span className="text-3xl font-bold">$29</span>
      <span className="text-gray-500">/month</span>
    </div>
    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 mb-6">
      <li>✓ Unlimited projects</li>
      <li>✓ Priority support</li>
      <li>✓ Advanced features</li>
    </ul>
    <button className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">Choose Plan</button>
  </div>
</div>`,
    tags: ["pricing", "plan", "subscription"],
    difficulty: "intermediate" ,
    popularity: 78,
  },
  {
    id: "testimonial-card",
    title: "Testimonial Card",
    description: "Customer testimonial card with rating, quote, and author information.",
    category: "cards",
    component: CardVariants.testimonial,
    code: `<div className="group max-w-sm bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 p-6 hover:shadow-xl transition-all duration-300 hover:scale-105">
  <div className="flex items-center gap-1 mb-3">
    {[...Array(5)].map((_, i) => (
      <Star key={i} size={16} className="text-yellow-400 fill-current group-hover:rotate-12 transition-transform duration-300" style={{ transitionDelay: \`\${i * 50}ms\` }} />
    ))}
  </div>
  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">"This component library is amazing! It saved me hours of development time."</p>
  <div className="flex items-center gap-3">
    <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
      <User size={16} className="text-white" />
    </div>
    <div>
      <h4 className="font-medium text-sm">Alex Chen</h4>
      <p className="text-xs text-gray-500">Frontend Developer</p>
    </div>
  </div>
</div>`,
    tags: ["testimonial", "review", "social-proof"],
    difficulty: "intermediate" ,
    popularity: 72,
  },
  {
    id: "feature-card",
    title: "Feature Card",
    description: "Feature highlight card with icon, title, and description.",
    category: "cards",
    component: CardVariants.feature,
    code: `<div className="group max-w-sm bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 p-6 hover:shadow-xl transition-all duration-300 hover:scale-105">
  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300">
    <Shield size={24} className="text-white" />
  </div>
  <h3 className="text-lg font-semibold mb-2">Secure by Default</h3>
  <p className="text-gray-600 dark:text-gray-400 text-sm">Built with security best practices and modern encryption standards.</p>
</div>`,
    tags: ["feature", "highlight", "benefit"],
    difficulty: "intermediate" ,
    popularity: 75,
  },

  // Forms (8 variants)
  {
    id: "login-form",
    title: "Login Form",
    description: "Clean and modern login form with email and password fields.",
    category: "forms",
    component: FormVariants.login,
    code: `// Login form with show/hide password functionality`,
    tags: ["form", "authentication", "login"],
    difficulty: "intermediate" ,
    popularity: 92,
  },
  {
    id: "contact-form",
    title: "Contact Form",
    description: "Professional contact form with name, email, and message fields.",
    category: "forms",
    component: FormVariants.contact,
    code: `// Contact form with grid layout`,
    tags: ["form", "contact", "communication"],
    difficulty: "intermediate" ,
    popularity: 85,
  },
  {
    id: "search-form",
    title: "Search Form",
    description: "Interactive search form with focus animations and clear functionality.",
    category: "forms",
    component: FormVariants.search,
    code: `// Search form with focus effects`,
    tags: ["search", "input", "interactive"],
    difficulty: "beginner" ,
    popularity: 88,
  },
  {
    id: "newsletter-form",
    title: "Newsletter Form",
    description: "Newsletter subscription form with success state and validation.",
    category: "forms",
    component: FormVariants.newsletter,
    code: `// Newsletter form with state management`,
    tags: ["newsletter", "subscription", "email"],
    difficulty: "intermediate" ,
    popularity: 79,
  },
  {
    id: "filter-form",
    title: "Filter Form",
    description: "Advanced filter form with multiple select options and categories.",
    category: "forms",
    component: FormVariants.filter,
    code: `// Filter form with multiple selects`,
    tags: ["filter", "search", "advanced"],
    difficulty: "intermediate" ,
    popularity: 73,
  },
  {
    id: "upload-form",
    title: "Upload Form",
    description: "Drag and drop file upload form with visual feedback and file preview.",
    category: "forms",
    component: FormVariants.upload,
    code: `// Upload form with drag and drop`,
    tags: ["upload", "file", "drag-drop"],
    difficulty: "advanced" ,
    popularity: 76,
  },
  {
    id: "feedback-form",
    title: "Feedback Form",
    description: "User feedback form with star rating and text input.",
    category: "forms",
    component: FormVariants.feedback,
    code: `// Feedback form with star rating`,
    tags: ["feedback", "rating", "review"],
    difficulty: "intermediate" ,
    popularity: 71,
  },
  {
    id: "quiz-form",
    title: "Quiz Form",
    description: "Interactive quiz form with progress tracking and multiple choice options.",
    category: "forms",
    component: FormVariants.quiz,
    code: `// Quiz form with progress bar`,
    tags: ["quiz", "interactive", "progress"],
    difficulty: "advanced" ,
    popularity: 68,
  },

  // Navigation (8 variants)
  {
    id: "modern-navbar",
    title: "Modern Navbar",
    description: "Clean and modern navigation bar with logo, menu items, and CTA button.",
    category: "navigation",
    component: NavbarVariants.modern,
    code: `// Modern navbar with responsive design`,
    tags: ["navbar", "navigation", "modern"],
    difficulty: "intermediate" ,
    popularity: 94,
  },
  {
    id: "glass-navbar",
    title: "Glass Navbar",
    description: "Glassmorphism navigation bar with backdrop blur and transparency effects.",
    category: "navigation",
    component: NavbarVariants.glass,
    code: `// Glass navbar with backdrop blur`,
    tags: ["navbar", "glass", "modern"],
    difficulty: "intermediate" ,
    popularity: 82,
  },
  {
    id: "minimal-navbar",
    title: "Minimal Navbar",
    description: "Ultra-minimal navigation bar with clean typography and subtle borders.",
    category: "navigation",
    component: NavbarVariants.minimal,
    code: `// Minimal navbar with clean design`,
    tags: ["navbar", "minimal", "clean"],
    difficulty: "beginner" ,
    popularity: 87,
  },
  {
    id: "sidebar-nav",
    title: "Sidebar Navigation",
    description: "Vertical sidebar navigation with icons and active state indicators.",
    category: "navigation",
    component: NavbarVariants.sidebar,
    code: `// Sidebar navigation with icons`,
    tags: ["sidebar", "vertical", "navigation"],
    difficulty: "intermediate" ,
    popularity: 79,
  },
  {
    id: "breadcrumb-nav",
    title: "Breadcrumb Navigation",
    description: "Hierarchical breadcrumb navigation with separators and hover effects.",
    category: "navigation",
    component: NavbarVariants.breadcrumb,
    code: `// Breadcrumb navigation component`,
    tags: ["breadcrumb", "hierarchy", "navigation"],
    difficulty: "beginner" ,
    popularity: 74,
  },
  {
    id: "tabs-nav",
    title: "Tabs Navigation",
    description: "Interactive tab navigation with smooth transitions and active states.",
    category: "navigation",
    component: NavbarVariants.tabs,
    code: `// Tabs navigation with state management`,
    tags: ["tabs", "navigation", "interactive"],
    difficulty: "intermediate" ,
    popularity: 86,
  },
  {
    id: "dropdown-nav",
    title: "Dropdown Navigation",
    description: "Navigation with dropdown menu and smooth animations.",
    category: "navigation",
    component: NavbarVariants.dropdown,
    code: `// Dropdown navigation menu`,
    tags: ["dropdown", "menu", "navigation"],
    difficulty: "intermediate" ,
    popularity: 81,
  },
  {
    id: "pagination-nav",
    title: "Pagination Navigation",
    description: "Page navigation with numbered buttons and arrow controls.",
    category: "navigation",
    component: NavbarVariants.pagination,
    code: `// Pagination navigation component`,
    tags: ["pagination", "navigation", "pages"],
    difficulty: "intermediate" ,
    popularity: 77,
  },

  // Modals (8 variants)
  {
    id: "simple-modal",
    title: "Simple Modal",
    description: "Basic modal dialog with smooth animations and backdrop blur.",
    category: "modals",
    component: ModalVariants.simple,
    code: `// Simple modal with animations`,
    tags: ["modal", "dialog", "overlay"],
    difficulty: "intermediate" ,
    popularity: 89,
  },
  {
    id: "confirmation-modal",
    title: "Confirmation Modal",
    description: "Confirmation dialog for destructive actions with warning styling.",
    category: "modals",
    component: ModalVariants.confirmation,
    code: `// Confirmation modal for destructive actions`,
    tags: ["modal", "confirmation", "warning"],
    difficulty: "intermediate" ,
    popularity: 84,
  },
  {
    id: "fullscreen-modal",
    title: "Fullscreen Modal",
    description: "Full viewport modal perfect for detailed content and complex interfaces.",
    category: "modals",
    component: ModalVariants.fullscreen,
    code: `// Fullscreen modal component`,
    tags: ["modal", "fullscreen", "overlay"],
    difficulty: "intermediate" ,
    popularity: 72,
  },
  {
    id: "drawer-modal",
    title: "Drawer Modal",
    description: "Side drawer that slides in from the edge with smooth animations.",
    category: "modals",
    component: ModalVariants.drawer,
    code: `// Drawer modal sliding from side`,
    tags: ["drawer", "slide", "sidebar"],
    difficulty: "intermediate" ,
    popularity: 78,
  },
  {
    id: "popup-modal",
    title: "Popup Modal",
    description: "Small popup modal for quick actions and contextual information.",
    category: "modals",
    component: ModalVariants.popup,
    code: `// Popup modal for quick actions`,
    tags: ["popup", "contextual", "small"],
    difficulty: "beginner" ,
    popularity: 75,
  },
  {
    id: "alert-modal",
    title: "Alert Modal",
    description: "Alert modal for important notifications and system messages.",
    category: "modals",
    component: ModalVariants.alert,
    code: `// Alert modal for notifications`,
    tags: ["alert", "notification", "system"],
    difficulty: "intermediate" ,
    popularity: 81,
  },
  {
    id: "loading-modal",
    title: "Loading Modal",
    description: "Loading modal with spinner animation for async operations.",
    category: "modals",
    component: ModalVariants.loading,
    code: `// Loading modal with spinner`,
    tags: ["loading", "spinner", "async"],
    difficulty: "intermediate" ,
    popularity: 76,
  },
  {
    id: "success-modal",
    title: "Success Modal",
    description: "Success confirmation modal with checkmark icon and positive messaging.",
    category: "modals",
    component: ModalVariants.success,
    code: `// Success modal with checkmark`,
    tags: ["success", "confirmation", "positive"],
    difficulty: "intermediate" ,
    popularity: 73,
  },

  // Chat (8 variants)
  {
    id: "minimal-chat",
    title: "Minimal Chat",
    description: "Clean chat interface with message bubbles and typing indicators.",
    category: "chat",
    component: ChatVariants.minimal,
    code: `// Minimal chat interface`,
    tags: ["chat", "messaging", "minimal"],
    difficulty: "advanced" ,
    popularity: 88,
  },
  {
    id: "bubble-chat",
    title: "Bubble Chat",
    description: "Colorful chat interface with gradient bubbles and emoji avatars.",
    category: "chat",
    component: ChatVariants.bubble,
    code: `// Bubble chat with gradients`,
    tags: ["chat", "bubble", "colorful"],
    difficulty: "advanced" ,
    popularity: 82,
  },
  {
    id: "glass-chat",
    title: "Glass Chat",
    description: "Glassmorphism chat interface with backdrop blur and transparency.",
    category: "chat",
    component: ChatVariants.glass,
    code: `// Glass chat with backdrop blur`,
    tags: ["chat", "glass", "modern"],
    difficulty: "advanced" ,
    popularity: 79,
  },
  {
    id: "terminal-chat",
    title: "Terminal Chat",
    description: "Terminal-style chat interface with monospace font and command-line aesthetics.",
    category: "chat",
    component: ChatVariants.terminal,
    code: `// Terminal-style chat interface`,
    tags: ["chat", "terminal", "developer"],
    difficulty: "advanced" ,
    popularity: 71,
  },
  {
    id: "voice-chat",
    title: "Voice Chat",
    description: "Voice chat interface with recording controls and audio visualization.",
    category: "chat",
    component: ChatVariants.voice,
    code: `// Voice chat with recording`,
    tags: ["chat", "voice", "audio"],
    difficulty: "advanced" ,
    popularity: 74,
  },
  {
    id: "support-chat",
    title: "Support Chat",
    description: "Customer support chat widget with floating button and quick actions.",
    category: "chat",
    component: ChatVariants.support,
    code: `// Support chat widget`,
    tags: ["chat", "support", "widget"],
    difficulty: "advanced" ,
    popularity: 85,
  },
  {
    id: "group-chat",
    title: "Group Chat",
    description: "Group chat interface with multiple users and online status indicators.",
    category: "chat",
    component: ChatVariants.group,
    code: `// Group chat with multiple users`,
    tags: ["chat", "group", "multi-user"],
    difficulty: "advanced" ,
    popularity: 77,
  },
  {
    id: "ai-chat",
    title: "AI Chat",
    description: "AI-powered chat interface with thinking indicators and smart suggestions.",
    category: "chat",
    component: ChatVariants.ai,
    code: `// AI chat with suggestions`,
    tags: ["chat", "ai", "smart"],
    difficulty: "advanced" ,
    popularity: 86,
  },

  // Charts (8 variants)
  {
    id: "bar-chart",
    title: "Bar Chart",
    description: "Interactive bar chart with hover effects and smooth animations.",
    category: "charts",
    component: ChartVariants.bar,
    code: `// Bar chart component`,
    tags: ["chart", "bar", "data"],
    difficulty: "intermediate" ,
    popularity: 84,
  },
  {
    id: "donut-chart",
    title: "Donut Chart",
    description: "Circular donut chart perfect for showing proportional data.",
    category: "charts",
    component: ChartVariants.donut,
    code: `// Donut chart with SVG`,
    tags: ["chart", "donut", "circular"],
    difficulty: "intermediate" ,
    popularity: 78,
  },
  {
    id: "line-chart",
    title: "Line Chart",
    description: "Smooth line chart with gradient fill and trend visualization.",
    category: "charts",
    component: ChartVariants.line,
    code: `// Line chart with gradient`,
    tags: ["chart", "line", "trend"],
    difficulty: "intermediate" ,
    popularity: 81,
  },
  {
    id: "area-chart",
    title: "Area Chart",
    description: "Area chart with gradient fill and interactive hover states.",
    category: "charts",
    component: ChartVariants.area,
    code: `// Area chart component`,
    tags: ["chart", "area", "filled"],
    difficulty: "intermediate" ,
    popularity: 76,
  },
  {
    id: "progress-chart",
    title: "Progress Chart",
    description: "Progress visualization with multiple metrics and color coding.",
    category: "charts",
    component: ChartVariants.progress,
    code: `// Progress chart with bars`,
    tags: ["chart", "progress", "metrics"],
    difficulty: "beginner" ,
    popularity: 83,
  },
  {
    id: "metric-chart",
    title: "Metric Cards",
    description: "Dashboard metric cards with key performance indicators.",
    category: "charts",
    component: ChartVariants.metric,
    code: `// Metric cards grid`,
    tags: ["metrics", "dashboard", "kpi"],
    difficulty: "beginner" ,
    popularity: 87,
  },
  {
    id: "heatmap-chart",
    title: "Heatmap Chart",
    description: "Activity heatmap visualization with intensity-based coloring.",
    category: "charts",
    component: ChartVariants.heatmap,
    code: `// Heatmap chart component`,
    tags: ["chart", "heatmap", "activity"],
    difficulty: "intermediate" ,
    popularity: 72,
  },
  {
    id: "gauge-chart",
    title: "Gauge Chart",
    description: "Circular gauge chart for displaying performance scores and metrics.",
    category: "charts",
    component: ChartVariants.gauge,
    code: `// Gauge chart with SVG`,
    tags: ["chart", "gauge", "performance"],
    difficulty: "intermediate" ,
    popularity: 74,
  },
]
