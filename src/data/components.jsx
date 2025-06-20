// import {
//   Star,
//   Zap,
//   Send,
//   User,
//   Bot,
//   Search,
//   Settings,
//   Home,
//   Users,
//   BarChart3,
//   PieChart,
//   TrendingUp,
//   Bell,
//   Check,
//   ChevronDown,
//   ChevronRight,
//   ImageIcon,
//   Info,
//   Upload,
//   X,
// } from "lucide-react"

// // Button Components
// const ButtonComponents = {
//   primary: () => (
//     <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl">
//       Primary Button
//     </button>
//   ),
//   gradient: () => (
//     <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-lg font-medium transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl">
//       Gradient Button
//     </button>
//   ),
//   outline: () => (
//     <button className="px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-500 hover:text-blue-500 rounded-lg font-medium transition-all duration-200 hover:scale-105">
//       Outline Button
//     </button>
//   ),
//   ghost: () => (
//     <button className="px-6 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg font-medium transition-all duration-200 hover:scale-105">
//       Ghost Button
//     </button>
//   ),
//   icon: () => (
//     <button className="flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-all duration-200 hover:scale-105 shadow-lg">
//       <Zap size={18} />
//       Icon Button
//     </button>
//   ),
//   floating: () => (
//     <button className="w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-200 hover:scale-110 flex items-center justify-center">
//       <Star size={20} />
//     </button>
//   ),
//   glass: () => (
//     <button className="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-gray-800 dark:text-white rounded-lg font-medium transition-all duration-200 hover:scale-105 shadow-lg">
//       Glass Button
//     </button>
//   ),
//   neon: () => (
//     <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium transition-all duration-200 hover:scale-105 shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:shadow-[0_0_25px_rgba(59,130,246,0.7)]">
//       Neon Button
//     </button>
//   ),
//   retro: () => (
//     <button className="px-6 py-3 bg-yellow-400 text-black font-bold border-4 border-black rounded-lg transition-all duration-200 hover:scale-105 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
//       Retro Button
//     </button>
//   ),
//   minimal: () => (
//     <button className="px-6 py-3 text-blue-600 dark:text-blue-400 font-medium transition-all duration-200 hover:underline">
//       Minimal Button
//     </button>
//   ),
// }

// // Card Components
// const CardComponents = {
//   basic: () => (
//     <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 max-w-sm">
//       <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Basic Card</h3>
//       <p className="text-gray-600 dark:text-gray-400">This is a simple card component with clean styling.</p>
//     </div>
//   ),
//   profile: () => (
//     <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 max-w-sm">
//       <div className="flex items-center gap-4 mb-4">
//         <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
//           <User className="w-6 h-6 text-white" />
//         </div>
//         <div>
//           <h3 className="text-lg font-semibold text-gray-900 dark:text-white">John Doe</h3>
//           <p className="text-gray-600 dark:text-gray-400">Software Engineer</p>
//         </div>
//       </div>
//       <p className="text-gray-600 dark:text-gray-400">
//         Building amazing user experiences with modern web technologies.
//       </p>
//     </div>
//   ),
//   stats: () => (
//     <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 max-w-sm">
//       <div className="flex items-center justify-between mb-4">
//         <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Total Users</h3>
//         <Users className="w-6 h-6 text-blue-500" />
//       </div>
//       <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">12,543</div>
//       <div className="flex items-center gap-2 text-green-500">
//         <TrendingUp size={16} />
//         <span className="text-sm">+12% from last month</span>
//       </div>
//     </div>
//   ),
//   product: () => (
//     <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 max-w-sm">
//       <div className="h-48 bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
//         <ImageIcon className="w-8 h-8 text-gray-400" />
//       </div>
//       <div className="p-6">
//         <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Premium Headphones</h3>
//         <p className="text-gray-600 dark:text-gray-400 mb-4">
//           High-quality wireless headphones with noise cancellation.
//         </p>
//         <div className="flex items-center justify-between">
//           <span className="text-xl font-bold text-gray-900 dark:text-white">$299</span>
//           <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   ),
//   testimonial: () => (
//     <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 max-w-sm">
//       <div className="flex items-center gap-2 mb-4">
//         {[1, 2, 3, 4, 5].map((star) => (
//           <Star key={star} size={16} className="text-yellow-400 fill-current" />
//         ))}
//       </div>
//       <p className="text-gray-600 dark:text-gray-400 italic mb-4">
//         "This product has completely transformed how I work. The interface is intuitive and the features are exactly
//         what I needed."
//       </p>
//       <div className="flex items-center gap-3">
//         <div className="w-10 h-10 bg-purple-200 dark:bg-purple-900 rounded-full flex items-center justify-center">
//           <span className="text-purple-700 dark:text-purple-300 font-medium">JD</span>
//         </div>
//         <div>
//           <h4 className="text-sm font-medium text-gray-900 dark:text-white">Jane Doe</h4>
//           <p className="text-xs text-gray-500 dark:text-gray-400">Product Designer</p>
//         </div>
//       </div>
//     </div>
//   ),
//   pricing: () => (
//     <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 max-w-sm">
//       <div className="text-center mb-6">
//         <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">Pro Plan</h3>
//         <p className="text-gray-600 dark:text-gray-400 text-sm">For professionals and teams</p>
//         <div className="mt-4">
//           <span className="text-4xl font-bold text-gray-900 dark:text-white">$29</span>
//           <span className="text-gray-600 dark:text-gray-400">/month</span>
//         </div>
//       </div>
//       <div className="space-y-3 mb-6">
//         {["Unlimited projects", "Priority support", "Custom domains", "Analytics dashboard"].map((feature, i) => (
//           <div key={i} className="flex items-center gap-2">
//             <Check size={16} className="text-green-500" />
//             <span className="text-gray-700 dark:text-gray-300">{feature}</span>
//           </div>
//         ))}
//       </div>
//       <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
//         Get Started
//       </button>
//     </div>
//   ),
// }

// // Form Components
// const FormComponents = {
//   input: () => (
//     <div className="max-w-sm">
//       <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
//       <input
//         type="email"
//         placeholder="Enter your email"
//         className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-all duration-200"
//       />
//     </div>
//   ),
//   search: () => (
//     <div className="max-w-sm relative">
//       <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//       <input
//         type="text"
//         placeholder="Search..."
//         className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-all duration-200"
//       />
//     </div>
//   ),
//   select: () => (
//     <div className="max-w-sm">
//       <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Choose Category</label>
//       <select className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-all duration-200">
//         <option>Technology</option>
//         <option>Design</option>
//         <option>Business</option>
//       </select>
//     </div>
//   ),
//   checkbox: () => (
//     <div className="max-w-sm">
//       <label className="flex items-center gap-3 cursor-pointer">
//         <div className="relative">
//           <input type="checkbox" className="peer sr-only" defaultChecked />
//           <div className="w-5 h-5 border border-gray-300 dark:border-gray-600 rounded peer-checked:bg-blue-500 peer-checked:border-blue-500 transition-colors"></div>
//           <Check
//             size={12}
//             className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100"
//           />
//         </div>
//         <span className="text-gray-700 dark:text-gray-300">Remember me</span>
//       </label>
//     </div>
//   ),
//   radio: () => (
//     <div className="max-w-sm space-y-2">
//       <div className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Notification Preferences</div>
//       <label className="flex items-center gap-3 cursor-pointer">
//         <div className="relative">
//           <input type="radio" name="notifications" className="peer sr-only" defaultChecked />
//           <div className="w-5 h-5 border border-gray-300 dark:border-gray-600 rounded-full peer-checked:border-blue-500 transition-colors"></div>
//           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-blue-500 rounded-full opacity-0 peer-checked:opacity-100"></div>
//         </div>
//         <span className="text-gray-700 dark:text-gray-300">Email</span>
//       </label>
//       <label className="flex items-center gap-3 cursor-pointer">
//         <div className="relative">
//           <input type="radio" name="notifications" className="peer sr-only" />
//           <div className="w-5 h-5 border border-gray-300 dark:border-gray-600 rounded-full peer-checked:border-blue-500 transition-colors"></div>
//           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-blue-500 rounded-full opacity-0 peer-checked:opacity-100"></div>
//         </div>
//         <span className="text-gray-700 dark:text-gray-300">SMS</span>
//       </label>
//     </div>
//   ),
//   textarea: () => (
//     <div className="max-w-sm">
//       <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
//       <textarea
//         placeholder="Type your message here..."
//         rows={4}
//         className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-all duration-200"
//       ></textarea>
//     </div>
//   ),
//   toggle: () => (
//     <div className="max-w-sm">
//       <label className="flex items-center gap-3 cursor-pointer">
//         <div className="relative">
//           <input type="checkbox" className="peer sr-only" defaultChecked />
//           <div className="w-11 h-6 bg-gray-200 dark:bg-gray-700 rounded-full peer-checked:bg-blue-500 transition-colors"></div>
//           <div className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-5"></div>
//         </div>
//         <span className="text-gray-700 dark:text-gray-300">Dark Mode</span>
//       </label>
//     </div>
//   ),
//   slider: () => (
//     <div className="max-w-sm">
//       <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Volume</label>
//       <input
//         type="range"
//         min="0"
//         max="100"
//         defaultValue="75"
//         className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
//       />
//       <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
//         <span>0%</span>
//         <span>50%</span>
//         <span>100%</span>
//       </div>
//     </div>
//   ),
//   fileUpload: () => (
//     <div className="max-w-sm">
//       <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Upload File</label>
//       <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center">
//         <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
//         <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Drag and drop files here</p>
//         <p className="text-xs text-gray-500 dark:text-gray-500">or</p>
//         <button className="mt-2 px-4 py-2 text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
//           Browse Files
//         </button>
//       </div>
//     </div>
//   ),
//   contactForm: () => (
//     <div className="max-w-md bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-lg">
//       <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Contact Us</h3>
//       <div className="space-y-4">
//         <div>
//           <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
//           <input
//             type="text"
//             placeholder="Your name"
//             className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-900"
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
//           <input
//             type="email"
//             placeholder="your.email@example.com"
//             className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-900"
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
//           <textarea
//             placeholder="Your message"
//             rows={3}
//             className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-900"
//           ></textarea>
//         </div>
//         <button className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
//           Send Message
//         </button>
//       </div>
//     </div>
//   ),
// }

// // Navigation Components
// const NavComponents = {
//   horizontal: () => (
//     <nav className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg px-6 py-4 shadow-lg">
//       <div className="flex items-center justify-between">
//         <div className="flex items-center gap-2">
//           <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
//             <Home className="w-4 h-4 text-white" />
//           </div>
//           <span className="font-semibold text-gray-900 dark:text-white">Brand</span>
//         </div>
//         <div className="flex items-center gap-6">
//           <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors">
//             Home
//           </a>
//           <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors">
//             About
//           </a>
//           <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors">
//             Contact
//           </a>
//         </div>
//       </div>
//     </nav>
//   ),
//   vertical: () => (
//     <nav className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-4 shadow-lg w-48">
//       <div className="space-y-2">
//         <a
//           href="#"
//           className="flex items-center gap-3 px-3 py-2 text-gray-900 dark:text-white bg-blue-50 dark:bg-blue-900/20 rounded-lg"
//         >
//           <Home size={18} />
//           <span>Dashboard</span>
//         </a>
//         <a
//           href="#"
//           className="flex items-center gap-3 px-3 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
//         >
//           <Users size={18} />
//           <span>Users</span>
//         </a>
//         <a
//           href="#"
//           className="flex items-center gap-3 px-3 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
//         >
//           <Settings size={18} />
//           <span>Settings</span>
//         </a>
//       </div>
//     </nav>
//   ),
//   tabs: () => (
//     <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-1 shadow-lg inline-flex">
//       <button className="px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-md font-medium">
//         Overview
//       </button>
//       <button className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white rounded-md">
//         Analytics
//       </button>
//       <button className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white rounded-md">
//         Reports
//       </button>
//     </div>
//   ),
//   breadcrumbs: () => (
//     <nav className="flex items-center space-x-2 text-sm">
//       <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors">
//         Home
//       </a>
//       <ChevronRight size={14} className="text-gray-400" />
//       <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors">
//         Products
//       </a>
//       <ChevronRight size={14} className="text-gray-400" />
//       <span className="text-gray-900 dark:text-white font-medium">Product Details</span>
//     </nav>
//   ),
//   pagination: () => (
//     <div className="flex items-center justify-center gap-1">
//       <button className="w-8 h-8 flex items-center justify-center rounded-md border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
//         <ChevronRight size={14} className="transform rotate-180" />
//       </button>
//       <button className="w-8 h-8 flex items-center justify-center rounded-md bg-blue-600 text-white">1</button>
//       <button className="w-8 h-8 flex items-center justify-center rounded-md border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
//         2
//       </button>
//       <button className="w-8 h-8 flex items-center justify-center rounded-md border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
//         3
//       </button>
//       <button className="w-8 h-8 flex items-center justify-center rounded-md border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
//         <ChevronRight size={14} />
//       </button>
//     </div>
//   ),
//   dropdown: () => (
//     <div className="relative inline-block">
//       <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
//         <span>Options</span>
//         <ChevronDown size={14} />
//       </button>
//       <div className="absolute top-full left-0 mt-1 w-48 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden z-10">
//         <a
//           href="#"
//           className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
//         >
//           Edit Profile
//         </a>
//         <a
//           href="#"
//           className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
//         >
//           Settings
//         </a>
//         <a href="#" className="block px-4 py-2 text-red-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
//           Sign Out
//         </a>
//       </div>
//     </div>
//   ),
//   mobileMenu: () => (
//     <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-4 w-64">
//       <div className="flex items-center justify-between mb-4">
//         <div className="flex items-center gap-2">
//           <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
//             <Home className="w-4 h-4 text-white" />
//           </div>
//           <span className="font-semibold text-gray-900 dark:text-white">Brand</span>
//         </div>
//         <button className="p-1 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
//           <X size={18} />
//         </button>
//       </div>
//       <div className="space-y-1">
//         <a href="#" className="block px-4 py-2 text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800 rounded-md">
//           Home
//         </a>
//         <a
//           href="#"
//           className="block px-4 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
//         >
//           About
//         </a>
//         <a
//           href="#"
//           className="block px-4 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
//         >
//           Services
//         </a>
//         <a
//           href="#"
//           className="block px-4 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
//         >
//           Contact
//         </a>
//       </div>
//     </div>
//   ),
// }

// // Modal Components
// const ModalComponents = {
//   basic: () => (
//     <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-2xl max-w-md mx-auto">
//       <div className="p-6 border-b border-gray-200 dark:border-gray-700">
//         <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Confirm Action</h3>
//       </div>
//       <div className="p-6">
//         <p className="text-gray-600 dark:text-gray-400 mb-6">
//           Are you sure you want to delete this item? This action cannot be undone.
//         </p>
//         <div className="flex gap-3 justify-end">
//           <button className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
//             Cancel
//           </button>
//           <button className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors">
//             Delete
//           </button>
//         </div>
//       </div>
//     </div>
//   ),
//   alert: () => (
//     <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-2xl max-w-md mx-auto">
//       <div className="p-6 flex flex-col items-center text-center">
//         <div className="w-16 h-16 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center mb-4">
//           <X className="w-8 h-8 text-red-600" />
//         </div>
//         <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Error Occurred</h3>
//         <p className="text-gray-600 dark:text-gray-400 mb-6">
//           We couldn't process your request. Please try again later.
//         </p>
//         <button className="px-6 py-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-lg font-medium transition-colors">
//           Close
//         </button>
//       </div>
//     </div>
//   ),
//   form: () => (
//     <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-2xl max-w-md mx-auto">
//       <div className="p-6 border-b border-gray-200 dark:border-gray-700">
//         <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Create New Project</h3>
//       </div>
//       <div className="p-6">
//         <div className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Project Name</label>
//             <input
//               type="text"
//               placeholder="Enter project name"
//               className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-900"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Description</label>
//             <textarea
//               placeholder="Project description"
//               rows={3}
//               className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-900"
//             ></textarea>
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Category</label>
//             <select className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-900">
//               <option>Web Development</option>
//               <option>Mobile App</option>
//               <option>Design</option>
//             </select>
//           </div>
//         </div>
//         <div className="flex gap-3 justify-end mt-6">
//           <button className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
//             Cancel
//           </button>
//           <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
//             Create Project
//           </button>
//         </div>
//       </div>
//     </div>
//   ),
//   success: () => (
//     <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-2xl max-w-md mx-auto">
//       <div className="p-6 flex flex-col items-center text-center">
//         <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mb-4">
//           <Check className="w-8 h-8 text-green-600" />
//         </div>
//         <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Payment Successful</h3>
//         <p className="text-gray-600 dark:text-gray-400 mb-6">
//           Your payment has been processed successfully. You will receive a confirmation email shortly.
//         </p>
//         <button className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors">
//           View Receipt
//         </button>
//       </div>
//     </div>
//   ),
//   image: () => (
//     <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-2xl max-w-md mx-auto overflow-hidden">
//       <div className="h-48 bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
//         <ImageIcon className="w-8 h-8 text-gray-400" />
//       </div>
//       <div className="p-6">
//         <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Image Preview</h3>
//         <p className="text-gray-600 dark:text-gray-400 mb-6">
//           This is a preview of the selected image. You can crop or edit it before uploading.
//         </p>
//         <div className="flex gap-3 justify-end">
//           <button className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
//             Cancel
//           </button>
//           <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
//             Upload
//           </button>
//         </div>
//       </div>
//     </div>
//   ),
// }

// // Chat Components
// const ChatComponents = {
//   bubble: () => (
//     <div className="max-w-sm space-y-4">
//       <div className="flex items-start gap-3">
//         <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
//           <Bot className="w-4 h-4 text-white" />
//         </div>
//         <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl rounded-tl-sm px-4 py-3 max-w-xs">
//           <p className="text-gray-900 dark:text-white text-sm">Hello! How can I help you today?</p>
//         </div>
//       </div>
//       <div className="flex items-start gap-3 justify-end">
//         <div className="bg-blue-600 rounded-2xl rounded-tr-sm px-4 py-3 max-w-xs">
//           <p className="text-white text-sm">I need help with my account settings.</p>
//         </div>
//         <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
//           <User className="w-4 h-4 text-white" />
//         </div>
//       </div>
//     </div>
//   ),
//   input: () => (
//     <div className="max-w-md">
//       <div className="flex items-center gap-2 p-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-900">
//         <input
//           type="text"
//           placeholder="Type your message..."
//           className="flex-1 bg-transparent outline-none text-gray-900 dark:text-white placeholder-gray-500"
//         />
//         <button className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
//           <Send size={16} />
//         </button>
//       </div>
//     </div>
//   ),
//   conversation: () => (
//     <div className="max-w-md border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden bg-white dark:bg-gray-900 shadow-lg">
//       <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center gap-3">
//         <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
//           <Bot className="w-4 h-4 text-white" />
//         </div>
//         <div>
//           <h3 className="font-medium text-gray-900 dark:text-white">Support Bot</h3>
//           <p className="text-xs text-gray-500 dark:text-gray-400">Online</p>
//         </div>
//       </div>
//       <div className="h-64 p-4 overflow-y-auto space-y-4">
//         <div className="flex items-start gap-3">
//           <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
//             <Bot className="w-4 h-4 text-white" />
//           </div>
//           <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl rounded-tl-sm px-4 py-3 max-w-xs">
//             <p className="text-gray-900 dark:text-white text-sm">Hello! How can I help you today?</p>
//             <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">10:30 AM</p>
//           </div>
//         </div>
//         <div className="flex items-start gap-3 justify-end">
//           <div className="bg-blue-600 rounded-2xl rounded-tr-sm px-4 py-3 max-w-xs">
//             <p className="text-white text-sm">I need help with my account settings.</p>
//             <p className="text-xs text-blue-200 mt-1">10:31 AM</p>
//           </div>
//           <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
//             <User className="w-4 h-4 text-white" />
//           </div>
//         </div>
//         <div className="flex items-start gap-3">
//           <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
//             <Bot className="w-4 h-4 text-white" />
//           </div>
//           <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl rounded-tl-sm px-4 py-3 max-w-xs">
//             <p className="text-gray-900 dark:text-white text-sm">
//               I'd be happy to help with your account settings. What specific setting are you trying to change?
//             </p>
//             <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">10:32 AM</p>
//           </div>
//         </div>
//       </div>
//       <div className="p-4 border-t border-gray-200 dark:border-gray-700">
//         <div className="flex items-center gap-2">
//           <input
//             type="text"
//             placeholder="Type your message..."
//             className="flex-1 bg-transparent outline-none text-gray-900 dark:text-white placeholder-gray-500 py-2"
//           />
//           <button className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
//             <Send size={16} />
//           </button>
//         </div>
//       </div>
//     </div>
//   ),
//   typing: () => (
//     <div className="max-w-sm space-y-4">
//       <div className="flex items-start gap-3">
//         <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
//           <Bot className="w-4 h-4 text-white" />
//         </div>
//         <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl rounded-tl-sm px-4 py-3">
//           <div className="flex gap-1">
//             <div className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-pulse"></div>
//             <div
//               className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-pulse"
//               style={{ animationDelay: "0.2s" }}
//             ></div>
//             <div
//               className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-pulse"
//               style={{ animationDelay: "0.4s" }}
//             ></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   ),
//   quickReplies: () => (
//     <div className="max-w-md">
//       <div className="flex flex-wrap gap-2 mb-4">
//         <button className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
//           Account Settings
//         </button>
//         <button className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
//           Billing
//         </button>
//         <button className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
//           Technical Support
//         </button>
//       </div>
//       <div className="flex items-center gap-2 p-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-900">
//         <input
//           type="text"
//           placeholder="Type your message..."
//           className="flex-1 bg-transparent outline-none text-gray-900 dark:text-white placeholder-gray-500"
//         />
//         <button className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
//           <Send size={16} />
//         </button>
//       </div>
//     </div>
//   ),
// }

// // Chart Components
// const ChartComponents = {
//   bar: () => (
//     <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-lg max-w-sm">
//       <div className="flex items-center justify-between mb-4">
//         <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Sales Overview</h3>
//         <BarChart3 className="w-5 h-5 text-blue-500" />
//       </div>
//       <div className="space-y-3">
//         <div className="flex items-center justify-between">
//           <span className="text-sm text-gray-600 dark:text-gray-400">Jan</span>
//           <div className="flex-1 mx-3 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
//             <div className="bg-blue-600 h-2 rounded-full" style={{ width: "70%" }}></div>
//           </div>
//           <span className="text-sm font-medium text-gray-900 dark:text-white">$7k</span>
//         </div>
//         <div className="flex items-center justify-between">
//           <span className="text-sm text-gray-600 dark:text-gray-400">Feb</span>
//           <div className="flex-1 mx-3 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
//             <div className="bg-blue-600 h-2 rounded-full" style={{ width: "85%" }}></div>
//           </div>
//           <span className="text-sm font-medium text-gray-900 dark:text-white">$8.5k</span>
//         </div>
//         <div className="flex items-center justify-between">
//           <span className="text-sm text-gray-600 dark:text-gray-400">Mar</span>
//           <div className="flex-1 mx-3 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
//             <div className="bg-blue-600 h-2 rounded-full" style={{ width: "60%" }}></div>
//           </div>
//           <span className="text-sm font-medium text-gray-900 dark:text-white">$6k</span>
//         </div>
//       </div>
//     </div>
//   ),
//   pie: () => (
//     <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-lg max-w-sm">
//       <div className="flex items-center justify-between mb-4">
//         <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Traffic Sources</h3>
//         <PieChart className="w-5 h-5 text-blue-500" />
//       </div>
//       <div className="flex items-center justify-center mb-4">
//         <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center">
//           <div className="w-16 h-16 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center">
//             <span className="text-sm font-bold text-gray-900 dark:text-white">100%</span>
//           </div>
//         </div>
//       </div>
//       <div className="space-y-2">
//         <div className="flex items-center justify-between">
//           <div className="flex items-center gap-2">
//             <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
//             <span className="text-sm text-gray-600 dark:text-gray-400">Direct</span>
//           </div>
//           <span className="text-sm font-medium text-gray-900 dark:text-white">45%</span>
//         </div>
//         <div className="flex items-center justify-between">
//           <div className="flex items-center gap-2">
//             <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
//             <span className="text-sm text-gray-600 dark:text-gray-400">Social</span>
//           </div>
//           <span className="text-sm font-medium text-gray-900 dark:text-white">30%</span>
//         </div>
//         <div className="flex items-center justify-between">
//           <div className="flex items-center gap-2">
//             <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
//             <span className="text-sm text-gray-600 dark:text-gray-400">Search</span>
//           </div>
//           <span className="text-sm font-medium text-gray-900 dark:text-white">25%</span>
//         </div>
//       </div>
//     </div>
//   ),
//   line: () => (
//     <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-lg max-w-sm">
//       <div className="flex items-center justify-between mb-4">
//         <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Monthly Revenue</h3>
//         <TrendingUp className="w-5 h-5 text-green-500" />
//       </div>
//       <div className="h-40 flex items-end justify-between gap-2">
//         {[35, 45, 30, 60, 75, 50, 65].map((height, i) => (
//           <div key={i} className="flex-1 flex flex-col items-center gap-1">
//             <div className="w-full bg-blue-500 rounded-t-sm" style={{ height: height + "%" }}></div>
//             <span className="text-xs text-gray-500 dark:text-gray-400">W{i + 1}</span>
//           </div>
//         ))}
//       </div>
//       <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
//         <div className="text-sm text-gray-600 dark:text-gray-400">Total Revenue</div>
//         <div className="text-lg font-bold text-gray-900 dark:text-white">$48,254</div>
//       </div>
//     </div>
//   ),
//   area: () => (
//     <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-lg max-w-sm">
//       <div className="flex items-center justify-between mb-4">
//         <h3 className="text-lg font-semibold text-gray-900 dark:text-white">User Growth</h3>
//         <Users className="w-5 h-5 text-blue-500" />
//       </div>
//       <div className="h-40 relative">
//         <div className="absolute inset-0 flex items-end">
//           <div className="w-full h-[85%] bg-gradient-to-t from-blue-500/20 to-blue-500/0 rounded-md"></div>
//         </div>
//         <div className="absolute inset-0 flex items-end">
//           <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
//             <path
//               d="M0,100 L0,40 C10,30 20,35 30,30 C40,25 50,35 60,30 C70,25 80,15 90,20 L100,15 L100,100 Z"
//               fill="none"
//               stroke="#3b82f6"
//               strokeWidth="2"
//             ></path>
//           </svg>
//         </div>
//       </div>
//       <div className="flex justify-between mt-2">
//         <span className="text-xs text-gray-500 dark:text-gray-400">Jan</span>
//         <span className="text-xs text-gray-500 dark:text-gray-400">Feb</span>
//         <span className="text-xs text-gray-500 dark:text-gray-400">Mar</span>
//         <span className="text-xs text-gray-500 dark:text-gray-400">Apr</span>
//         <span className="text-xs text-gray-500 dark:text-gray-400">May</span>
//         <span className="text-xs text-gray-500 dark:text-gray-400">Jun</span>
//       </div>
//     </div>
//   ),
//   radial: () => (
//     <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-lg max-w-sm">
//       <div className="flex items-center justify-between mb-4">
//         <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Task Completion</h3>
//         <Check className="w-5 h-5 text-green-500" />
//       </div>
//       <div className="flex items-center justify-center mb-4">
//         <div className="relative w-32 h-32">
//           <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
//             <circle
//               cx="50"
//               cy="50"
//               r="40"
//               stroke="currentColor"
//               strokeWidth="8"
//               fill="none"
//               className="text-gray-200 dark:text-gray-700"
//             />
//             <circle
//               cx="50"
//               cy="50"
//               r="40"
//               stroke="currentColor"
//               strokeWidth="8"
//               fill="none"
//               strokeDasharray="251.2"
//               strokeDashoffset="62.8"
//               className="text-green-500"
//               strokeLinecap="round"
//             />
//           </svg>
//           <div className="absolute inset-0 flex items-center justify-center">
//             <span className="text-2xl font-bold text-gray-900 dark:text-white">75%</span>
//           </div>
//         </div>
//       </div>
//       <div className="text-center">
//         <p className="text-sm text-gray-600 dark:text-gray-400">15 of 20 tasks completed</p>
//       </div>
//     </div>
//   ),
// }

// // Notification Components
// const NotificationComponents = {
//   toast: () => (
//     <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-4 max-w-sm">
//       <div className="flex items-start gap-3">
//         <div className="w-8 h-8 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center">
//           <Check className="w-4 h-4 text-green-600" />
//         </div>
//         <div className="flex-1">
//           <h4 className="text-sm font-medium text-gray-900 dark:text-white">Success!</h4>
//           <p className="text-sm text-gray-600 dark:text-gray-400">Your changes have been saved successfully.</p>
//         </div>
//         <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
//           <X size={16} />
//         </button>
//       </div>
//     </div>
//   ),
//   alert: () => (
//     <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 max-w-sm">
//       <div className="flex items-start gap-3">
//         <div className="w-8 h-8 bg-red-100 dark:bg-red-900/40 rounded-full flex items-center justify-center">
//           <X className="w-4 h-4 text-red-600" />
//         </div>
//         <div className="flex-1">
//           <h4 className="text-sm font-medium text-red-900 dark:text-red-200">Error</h4>
//           <p className="text-sm text-red-700 dark:text-red-300">There was an error processing your request.</p>
//         </div>
//       </div>
//     </div>
//   ),
//   warning: () => (
//     <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 max-w-sm">
//       <div className="flex items-start gap-3">
//         <div className="w-8 h-8 bg-yellow-100 dark:bg-yellow-900/40 rounded-full flex items-center justify-center">
//           <Info className="w-4 h-4 text-yellow-600" />
//         </div>
//         <div className="flex-1">
//           <h4 className="text-sm font-medium text-yellow-900 dark:text-yellow-200">Warning</h4>
//           <p className="text-sm text-yellow-700 dark:text-yellow-300">Please review your settings before continuing.</p>
//         </div>
//       </div>
//     </div>
//   ),
//   info: () => (
//     <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 max-w-sm">
//       <div className="flex items-start gap-3">
//         <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/40 rounded-full flex items-center justify-center">
//           <Info className="w-4 h-4 text-blue-600" />
//         </div>
//         <div className="flex-1">
//           <h4 className="text-sm font-medium text-blue-900 dark:text-blue-200">Information</h4>
//           <p className="text-sm text-blue-700 dark:text-blue-300">New features are now available in your dashboard.</p>
//         </div>
//       </div>
//     </div>
//   ),
//   badge: () => (
//     <div className="relative inline-block">
//       <button className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
//         <Bell size={20} className="text-gray-600 dark:text-gray-400" />
//       </button>
//       <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
//         <span className="text-xs text-white font-medium">3</span>
//       </div>
//     </div>
//   ),
//   banner: () => (
//     <div className="bg-blue-600 text-white p-4 rounded-lg max-w-md">
//       <div className="flex items-center justify-between">
//         <div className="flex items-center gap-3">
//           <Info size={20} />
//           <div>
//             <h4 className="font-medium">New Update Available</h4>
//             <p className="text-sm text-blue-100">Version 2.0 is now available with new features.</p>
//           </div>
//         </div>
//         <button className="text-blue-200 hover:text-white">
//           <X size={20} />
//         </button>
//       </div>
//     </div>
//   ),
// }

// // Loading Components
// const LoadingComponents = {
//   spinner: () => (
//     <div className="flex items-center justify-center p-8">
//       <div className="w-8 h-8 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
//     </div>
//   ),
//   dots: () => (
//     <div className="flex items-center justify-center gap-2 p-8">
//       <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse"></div>
//       <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse" style={{ animationDelay: "0.2s" }}></div>
//       <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse" style={{ animationDelay: "0.4s" }}></div>
//     </div>
//   ),
//   skeleton: () => (
//     <div className="max-w-sm p-4 space-y-3">
//       <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
//       <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse w-3/4"></div>
//       <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse w-1/2"></div>
//     </div>
//   ),
//   progress: () => (
//     <div className="max-w-sm p-4">
//       <div className="flex items-center justify-between mb-2">
//         <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Loading...</span>
//         <span className="text-sm text-gray-500 dark:text-gray-400">65%</span>
//       </div>
//       <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
//         <div className="bg-blue-600 h-2 rounded-full transition-all duration-300" style={{ width: "65%" }}></div>
//       </div>
//     </div>
//   ),
//   pulse: () => (
//     <div className="max-w-sm bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-lg">
//       <div className="flex items-center gap-4 mb-4">
//         <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
//         <div className="space-y-2 flex-1">
//           <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
//           <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded animate-pulse w-2/3"></div>
//         </div>
//       </div>
//       <div className="space-y-2">
//         <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
//         <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded animate-pulse w-5/6"></div>
//         <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded animate-pulse w-3/4"></div>
//       </div>
//     </div>
//   ),
// }

// // Avatar Components
// const AvatarComponents = {
//   basic: () => (
//     <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
//       <span className="text-white font-medium">JD</span>
//     </div>
//   ),
//   image: () => (
//     <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center overflow-hidden">
//       <User className="w-6 h-6 text-gray-400" />
//     </div>
//   ),
//   group: () => (
//     <div className="flex -space-x-2">
//       <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center border-2 border-white dark:border-gray-900">
//         <span className="text-white text-sm font-medium">JD</span>
//       </div>
//       <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center border-2 border-white dark:border-gray-900">
//         <span className="text-white text-sm font-medium">AB</span>
//       </div>
//       <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center border-2 border-white dark:border-gray-900">
//         <span className="text-white text-sm font-medium">CD</span>
//       </div>
//       <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center border-2 border-white dark:border-gray-900">
//         <span className="text-white text-sm font-medium">+2</span>
//       </div>
//     </div>
//   ),
//   status: () => (
//     <div className="relative">
//       <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
//         <span className="text-white font-medium">JD</span>
//       </div>
//       <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-gray-900"></div>
//     </div>
//   ),
//   sizes: () => (
//     <div className="flex items-center gap-4">
//       <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
//         <span className="text-white text-xs font-medium">S</span>
//       </div>
//       <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
//         <span className="text-white text-sm font-medium">M</span>
//       </div>
//       <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
//         <span className="text-white font-medium">L</span>
//       </div>
//       <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
//         <span className="text-white text-lg font-medium">XL</span>
//       </div>
//     </div>
//   ),
// }

// // Badge Components
// const BadgeComponents = {
//   basic: () => (
//     <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-full">
//       New
//     </span>
//   ),
//   variants: () => (
//     <div className="flex flex-wrap gap-2">
//       <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-full">
//         Primary
//       </span>
//       <span className="px-3 py-1 bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200 text-sm font-medium rounded-full">
//         Success
//       </span>
//       <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-200 text-sm font-medium rounded-full">
//         Warning
//       </span>
//       <span className="px-3 py-1 bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-200 text-sm font-medium rounded-full">
//         Error
//       </span>
//     </div>
//   ),
//   withIcon: () => (
//     <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200 text-sm font-medium rounded-full">
//       <Check size={12} />
//       Verified
//     </span>
//   ),
//   notification: () => (
//     <div className="relative inline-block">
//       <button className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
//         <Bell size={20} className="text-gray-600 dark:text-gray-400" />
//       </button>
//       <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs font-medium rounded-full flex items-center justify-center">
//         3
//       </span>
//     </div>
//   ),
//   dot: () => (
//     <div className="flex items-center gap-2">
//       <span className="w-2 h-2 bg-green-500 rounded-full"></span>
//       <span className="text-sm text-gray-700 dark:text-gray-300">Online</span>
//     </div>
//   ),
// }

// export const allComponents = [
//   // Buttons
//   {
//     id: "button-primary",
//     title: "Primary Button",
//     description: "Main call-to-action button with solid background",
//     category: "buttons",
//     component: ButtonComponents.primary,
//     code: `<button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl">
//   Primary Button
// </button>`,
//     tags: ["button", "primary", "cta"],
//     popularity: 95,
//   },
//   {
//     id: "button-gradient",
//     title: "Gradient Button",
//     description: "Eye-catching gradient button for special actions",
//     category: "buttons",
//     component: ButtonComponents.gradient,
//     code: `<button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-lg font-medium transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl">
//   Gradient Button
// </button>`,
//     tags: ["button", "gradient", "colorful"],
//     popularity: 88,
//   },
//   {
//     id: "button-outline",
//     title: "Outline Button",
//     description: "Subtle button with border for secondary actions",
//     category: "buttons",
//     component: ButtonComponents.outline,
//     code: `<button className="px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-500 hover:text-blue-500 rounded-lg font-medium transition-all duration-200 hover:scale-105">
//   Outline Button
// </button>`,
//     tags: ["button", "outline", "secondary"],
//     popularity: 82,
//   },
//   {
//     id: "button-ghost",
//     title: "Ghost Button",
//     description: "Minimal button with no background",
//     category: "buttons",
//     component: ButtonComponents.ghost,
//     code: `<button className="px-6 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg font-medium transition-all duration-200 hover:scale-105">
//   Ghost Button
// </button>`,
//     tags: ["button", "ghost", "minimal"],
//     popularity: 75,
//   },
//   {
//     id: "button-icon",
//     title: "Icon Button",
//     description: "Button with icon and text",
//     category: "buttons",
//     component: ButtonComponents.icon,
//     code: `<button className="flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-all duration-200 hover:scale-105 shadow-lg">
//   <Zap size={18} />
//   Icon Button
// </button>`,
//     tags: ["button", "icon", "action"],
//     popularity: 90,
//   },
//   {
//     id: "button-floating",
//     title: "Floating Action Button",
//     description: "Circular floating button for primary actions",
//     category: "buttons",
//     component: ButtonComponents.floating,
//     code: `<button className="w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-200 hover:scale-110 flex items-center justify-center">
//   <Star size={20} />
// </button>`,
//     tags: ["button", "floating", "fab"],
//     popularity: 78,
//   },
//   {
//     id: "button-glass",
//     title: "Glass Button",
//     description: "Modern glass morphism button effect",
//     category: "buttons",
//     component: ButtonComponents.glass,
//     code: `<button className="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-gray-800 dark:text-white rounded-lg font-medium transition-all duration-200 hover:scale-105 shadow-lg">
//   Glass Button
// </button>`,
//     tags: ["button", "glass", "modern"],
//     popularity: 85,
//   },
//   {
//     id: "button-neon",
//     title: "Neon Button",
//     description: "Glowing neon effect button",
//     category: "buttons",
//     component: ButtonComponents.neon,
//     code: `<button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium transition-all duration-200 hover:scale-105 shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:shadow-[0_0_25px_rgba(59,130,246,0.7)]">
//   Neon Button
// </button>`,
//     tags: ["button", "neon", "glow"],
//     popularity: 72,
//   },
//   {
//     id: "button-retro",
//     title: "Retro Button",
//     description: "Vintage style button with bold shadows",
//     category: "buttons",
//     component: ButtonComponents.retro,
//     code: `<button className="px-6 py-3 bg-yellow-400 text-black font-bold border-4 border-black rounded-lg transition-all duration-200 hover:scale-105 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
//   Retro Button
// </button>`,
//     tags: ["button", "retro", "vintage"],
//     popularity: 68,
//   },
//   {
//     id: "button-minimal",
//     title: "Minimal Button",
//     description: "Clean minimal text button",
//     category: "buttons",
//     component: ButtonComponents.minimal,
//     code: `<button className="px-6 py-3 text-blue-600 dark:text-blue-400 font-medium transition-all duration-200 hover:underline">
//   Minimal Button
// </button>`,
//     tags: ["button", "minimal", "text"],
//     popularity: 70,
//   },

//   // Cards
//   {
//     id: "card-basic",
//     title: "Basic Card",
//     description: "Simple card component with clean styling",
//     category: "cards",
//     component: CardComponents.basic,
//     code: `<div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 max-w-sm">
//   <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Basic Card</h3>
//   <p className="text-gray-600 dark:text-gray-400">This is a simple card component with clean styling.</p>
// </div>`,
//     tags: ["card", "basic", "container"],
//     popularity: 92,
//   },
//   {
//     id: "card-profile",
//     title: "Profile Card",
//     description: "Card component for displaying user profiles",
//     category: "cards",
//     component: CardComponents.profile,
//     code: `<div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 max-w-sm">
//   <div className="flex items-center gap-4 mb-4">
//     <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
//       <User className="w-6 h-6 text-white" />
//     </div>
//     <div>
//       <h3 className="text-lg font-semibold text-gray-900 dark:text-white">John Doe</h3>
//       <p className="text-gray-600 dark:text-gray-400">Software Engineer</p>
//     </div>
//   </div>
//   <p className="text-gray-600 dark:text-gray-400">Building amazing user experiences with modern web technologies.</p>
// </div>`,
//     tags: ["card", "profile", "user"],
//     popularity: 85,
//   },
//   {
//     id: "card-stats",
//     title: "Stats Card",
//     description: "Card for displaying statistics and metrics",
//     category: "cards",
//     component: CardComponents.stats,
//     code: `<div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 max-w-sm">
//   <div className="flex items-center justify-between mb-4">
//     <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Total Users</h3>
//     <Users className="w-6 h-6 text-blue-500" />
//   </div>
//   <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">12,543</div>
//   <div className="flex items-center gap-2 text-green-500">
//     <TrendingUp size={16} />
//     <span className="text-sm">+12% from last month</span>
//   </div>
// </div>`,
//     tags: ["card", "stats", "metrics"],
//     popularity: 88,
//   },
//   {
//     id: "card-product",
//     title: "Product Card",
//     description: "E-commerce product display card",
//     category: "cards",
//     component: CardComponents.product,
//     code: `<div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 max-w-sm">
//   <div className="h-48 bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
//     <ImageIcon className="w-8 h-8 text-gray-400" />
//   </div>
//   <div className="p-6">
//     <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Premium Headphones</h3>
//     <p className="text-gray-600 dark:text-gray-400 mb-4">High-quality wireless headphones with noise cancellation.</p>
//     <div className="flex items-center justify-between">
//       <span className="text-xl font-bold text-gray-900 dark:text-white">$299</span>
//       <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
//         Add to Cart
//       </button>
//     </div>
//   </div>
// </div>`,
//     tags: ["card", "product", "ecommerce"],
//     popularity: 80,
//   },
//   {
//     id: "card-testimonial",
//     title: "Testimonial Card",
//     description: "Customer testimonial and review card",
//     category: "cards",
//     component: CardComponents.testimonial,
//     code: `<div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 max-w-sm">
//   <div className="flex items-center gap-2 mb-4">
//     {[1, 2, 3, 4, 5].map((star) => (
//       <Star key={star} size={16} className="text-yellow-400 fill-current" />
//     ))}
//   </div>
//   <p className="text-gray-600 dark:text-gray-400 italic mb-4">
//     "This product has completely transformed how I work. The interface is intuitive and the features are exactly what I needed."
//   </p>
//   <div className="flex items-center gap-3">
//     <div className="w-10 h-10 bg-purple-200 dark:bg-purple-900 rounded-full flex items-center justify-center">
//       <span className="text-purple-700 dark:text-purple-300 font-medium">JD</span>
//     </div>
//     <div>
//       <h4 className="text-sm font-medium text-gray-900 dark:text-white">Jane Doe</h4>
//       <p className="text-xs text-gray-500 dark:text-gray-400">Product Designer</p>
//     </div>
//   </div>
// </div>`,
//     tags: ["card", "testimonial", "review"],
//     popularity: 75,
//   },
//   {
//     id: "card-pricing",
//     title: "Pricing Card",
//     description: "Subscription pricing plan card",
//     category: "cards",
//     component: CardComponents.pricing,
//     code: `<div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 max-w-sm">
//   <div className="text-center mb-6">
//     <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">Pro Plan</h3>
//     <p className="text-gray-600 dark:text-gray-400 text-sm">For professionals and teams</p>
//     <div className="mt-4">
//       <span className="text-4xl font-bold text-gray-900 dark:text-white">$29</span>
//       <span className="text-gray-600 dark:text-gray-400">/month</span>
//     </div>
//   </div>
//   <div className="space-y-3 mb-6">
//     {["Unlimited projects", "Priority support", "Custom domains", "Analytics dashboard"].map((feature, i) => (
//       <div key={i} className="flex items-center gap-2">
//         <Check size={16} className="text-green-500" />
//         <span className="text-gray-700 dark:text-gray-300">{feature}</span>
//       </div>
//     ))}
//   </div>
//   <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
//     Get Started
//   </button>
// </div>`,
//     tags: ["card", "pricing", "subscription"],
//     popularity: 83,
//   },

//   // Forms - Adding all the new form components
//   {
//     id: "form-input",
//     title: "Text Input",
//     description: "Standard text input field with label",
//     category: "forms",
//     component: FormComponents.input,
//     code: `<div className="max-w-sm">
//   <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
//   <input
//     type="email"
//     placeholder="Enter your email"
//     className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-all duration-200"
//   />
// </div>`,
//     tags: ["form", "input", "text"],
//     popularity: 95,
//   },
//   {
//     id: "form-search",
//     title: "Search Input",
//     description: "Search input with icon",
//     category: "forms",
//     component: FormComponents.search,
//     code: `<div className="max-w-sm relative">
//   <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//   <input
//     type="text"
//     placeholder="Search..."
//     className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-all duration-200"
//   />
// </div>`,
//     tags: ["form", "search", "input"],
//     popularity: 87,
//   },
//   {
//     id: "form-select",
//     title: "Select Dropdown",
//     description: "Dropdown select component",
//     category: "forms",
//     component: FormComponents.select,
//     code: `<div className="max-w-sm">
//   <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Choose Category</label>
//   <select className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-all duration-200">
//     <option>Technology</option>
//     <option>Design</option>
//     <option>Business</option>
//   </select>
// </div>`,
//     tags: ["form", "select", "dropdown"],
//     popularity: 80,
//   },
//   {
//     id: "form-checkbox",
//     title: "Checkbox",
//     description: "Custom styled checkbox input",
//     category: "forms",
//     component: FormComponents.checkbox,
//     code: `<div className="max-w-sm">
//   <label className="flex items-center gap-3 cursor-pointer">
//     <div className="relative">
//       <input type="checkbox" className="peer sr-only" defaultChecked />
//       <div className="w-5 h-5 border border-gray-300 dark:border-gray-600 rounded peer-checked:bg-blue-500 peer-checked:border-blue-500 transition-colors"></div>
//       <Check size={12} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100" />
//     </div>
//     <span className="text-gray-700 dark:text-gray-300">Remember me</span>
//   </label>
// </div>`,
//     tags: ["form", "checkbox", "input"],
//     popularity: 78,
//   },
//   {
//     id: "form-radio",
//     title: "Radio Buttons",
//     description: "Custom styled radio button group",
//     category: "forms",
//     component: FormComponents.radio,
//     code: `<div className="max-w-sm space-y-2">
//   <div className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Notification Preferences</div>
//   <label className="flex items-center gap-3 cursor-pointer">
//     <div className="relative">
//       <input type="radio" name="notifications" className="peer sr-only" defaultChecked />
//       <div className="w-5 h-5 border border-gray-300 dark:border-gray-600 rounded-full peer-checked:border-blue-500 transition-colors"></div>
//       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-blue-500 rounded-full opacity-0 peer-checked:opacity-100"></div>
//     </div>
//     <span className="text-gray-700 dark:text-gray-300">Email</span>
//   </label>
// </div>`,
//     tags: ["form", "radio", "input"],
//     popularity: 75,
//   },
//   {
//     id: "form-textarea",
//     title: "Textarea",
//     description: "Multi-line text input field",
//     category: "forms",
//     component: FormComponents.textarea,
//     code: `<div className="max-w-sm">
//   <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
//   <textarea
//     placeholder="Type your message here..."
//     rows={4}
//     className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-all duration-200"
//   ></textarea>
// </div>`,
//     tags: ["form", "textarea", "input"],
//     popularity: 82,
//   },
//   {
//     id: "form-toggle",
//     title: "Toggle Switch",
//     description: "Modern toggle switch component",
//     category: "forms",
//     component: FormComponents.toggle,
//     code: `<div className="max-w-sm">
//   <label className="flex items-center gap-3 cursor-pointer">
//     <div className="relative">
//       <input type="checkbox" className="peer sr-only" defaultChecked />
//       <div className="w-11 h-6 bg-gray-200 dark:bg-gray-700 rounded-full peer-checked:bg-blue-500 transition-colors"></div>
//       <div className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-5"></div>
//     </div>
//     <span className="text-gray-700 dark:text-gray-300">Dark Mode</span>
//   </label>
// </div>`,
//     tags: ["form", "toggle", "switch"],
//     popularity: 85,
//   },
//   {
//     id: "form-slider",
//     title: "Range Slider",
//     description: "Range input slider component",
//     category: "forms",
//     component: FormComponents.slider,
//     code: `<div className="max-w-sm">
//   <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Volume</label>
//   <input
//     type="range"
//     min="0"
//     max="100"
//     defaultValue="75"
//     className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
//   />
//   <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
//     <span>0%</span>
//     <span>50%</span>
//     <span>100%</span>
//   </div>
// </div>`,
//     tags: ["form", "slider", "range"],
//     popularity: 70,
//   },
//   {
//     id: "form-file-upload",
//     title: "File Upload",
//     description: "Drag and drop file upload area",
//     category: "forms",
//     component: FormComponents.fileUpload,
//     code: `<div className="max-w-sm">
//   <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Upload File</label>
//   <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center">
//     <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
//     <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Drag and drop files here</p>
//     <p className="text-xs text-gray-500 dark:text-gray-500">or</p>
//     <button className="mt-2 px-4 py-2 text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
//       Browse Files
//     </button>
//   </div>
// </div>`,
//     tags: ["form", "upload", "file"],
//     popularity: 73,
//   },
//   {
//     id: "form-contact",
//     title: "Contact Form",
//     description: "Complete contact form with multiple fields",
//     category: "forms",
//     component: FormComponents.contactForm,
//     code: `<div className="max-w-md bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-lg">
//   <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Contact Us</h3>
//   <div className="space-y-4">
//     <div>
//       <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
//       <input type="text" placeholder="Your name" className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-900" />
//     </div>
//     <div>
//       <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
//       <input type="email" placeholder="your.email@example.com" className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-900" />
//     </div>
//     <div>
//       <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
//       <textarea placeholder="Your message" rows={3} className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-900"></textarea>
//     </div>
//     <button className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
//       Send Message
//     </button>
//   </div>
// </div>`,
//     tags: ["form", "contact", "complete"],
//     popularity: 88,
//   },

//   // Navigation - Adding all the new navigation components
//   {
//     id: "nav-horizontal",
//     title: "Horizontal Navigation",
//     description: "Horizontal navigation bar",
//     category: "navbars",
//     component: NavComponents.horizontal,
//     code: `<nav className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg px-6 py-4 shadow-lg">
//   <div className="flex items-center justify-between">
//     <div className="flex items-center gap-2">
//       <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
//         <Home className="w-4 h-4 text-white" />
//       </div>
//       <span className="font-semibold text-gray-900 dark:text-white">Brand</span>
//     </div>
//     <div className="flex items-center gap-6">
//       <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors">Home</a>
//       <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors">About</a>
//       <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors">Contact</a>
//     </div>
//   </div>
// </nav>`,
//     tags: ["navigation", "horizontal", "navbar"],
//     popularity: 93,
//   },
//   {
//     id: "nav-vertical",
//     title: "Vertical Navigation",
//     description: "Vertical sidebar navigation",
//     category: "navbars",
//     component: NavComponents.vertical,
//     code: `<nav className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-4 shadow-lg w-48">
//   <div className="space-y-2">
//     <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-900 dark:text-white bg-blue-50 dark:bg-blue-900/20 rounded-lg">
//       <Home size={18} />
//       <span>Dashboard</span>
//     </a>
//     <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors">
//       <Users size={18} />
//       <span>Users</span>
//     </a>
//     <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors">
//       <Settings size={18} />
//       <span>Settings</span>
//     </a>
//   </div>
// </nav>`,
//     tags: ["navigation", "vertical", "sidebar"],
//     popularity: 85,
//   },
//   {
//     id: "nav-tabs",
//     title: "Tab Navigation",
//     description: "Horizontal tab navigation component",
//     category: "navbars",
//     component: NavComponents.tabs,
//     code: `<div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-1 shadow-lg inline-flex">
//   <button className="px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-md font-medium">
//     Overview
//   </button>
//   <button className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white rounded-md">
//     Analytics
//   </button>
//   <button className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white rounded-md">
//     Reports
//   </button>
// </div>`,
//     tags: ["navigation", "tabs", "horizontal"],
//     popularity: 88,
//   },
//   {
//     id: "nav-breadcrumbs",
//     title: "Breadcrumbs",
//     description: "Navigation breadcrumb trail",
//     category: "navbars",
//     component: NavComponents.breadcrumbs,
//     code: `<nav className="flex items-center space-x-2 text-sm">
//   <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors">
//     Home
//   </a>
//   <ChevronRight size={14} className="text-gray-400" />
//   <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors">
//     Products
//   </a>
//   <ChevronRight size={14} className="text-gray-400" />
//   <span className="text-gray-900 dark:text-white font-medium">Product Details</span>
// </nav>`,
//     tags: ["navigation", "breadcrumbs", "trail"],
//     popularity: 75,
//   },
//   {
//     id: "nav-pagination",
//     title: "Pagination",
//     description: "Page navigation component",
//     category: "navbars",
//     component: NavComponents.pagination,
//     code: `<div className="flex items-center justify-center gap-1">
//   <button className="w-8 h-8 flex items-center justify-center rounded-md border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
//     <ChevronRight size={14} className="transform rotate-180" />
//   </button>
//   <button className="w-8 h-8 flex items-center justify-center rounded-md bg-blue-600 text-white">1</button>
//   <button className="w-8 h-8 flex items-center justify-center rounded-md border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">2</button>
//   <button className="w-8 h-8 flex items-center justify-center rounded-md border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">3</button>
//   <button className="w-8 h-8 flex items-center justify-center rounded-md border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
//     <ChevronRight size={14} />
//   </button>
// </div>`,
//     tags: ["navigation", "pagination", "pages"],
//     popularity: 82,
//   },
//   {
//     id: "nav-dropdown",
//     title: "Dropdown Menu",
//     description: "Dropdown navigation menu",
//     category: "navbars",
//     component: NavComponents.dropdown,
//     code: `<div className="relative inline-block">
//   <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
//     <span>Options</span>
//     <ChevronDown size={14} />
//   </button>
//   <div className="absolute top-full left-0 mt-1 w-48 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden z-10">
//     <a href="#" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">Edit Profile</a>
//     <a href="#" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">Settings</a>
//     <a href="#" className="block px-4 py-2 text-red-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">Sign Out</a>
//   </div>
// </div>`,
//     tags: ["navigation", "dropdown", "menu"],
//     popularity: 90,
//   },
//   {
//     id: "nav-mobile-menu",
//     title: "Mobile Menu",
//     description: "Mobile-friendly navigation menu",
//     category: "navbars",
//     component: NavComponents.mobileMenu,
//     code: `<div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-4 w-64">
//   <div className="flex items-center justify-between mb-4">
//     <div className="flex items-center gap-2">
//       <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
//         <Home className="w-4 h-4 text-white" />
//       </div>
//       <span className="font-semibold text-gray-900 dark:text-white">Brand</span>
//     </div>
//     <button className="p-1 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
//       <X size={18} />
//     </button>
//   </div>
//   <div className="space-y-1">
//     <a href="#" className="block px-4 py-2 text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800 rounded-md">Home</a>
//     <a href="#" className="block px-4 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors">About</a>
//     <a href="#" className="block px-4 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors">Services</a>
//     <a href="#" className="block px-4 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors">Contact</a>
//   </div>
// </div>`,
//     tags: ["navigation", "mobile", "menu"],
//     popularity: 78,
//   },

//   // Modals - Adding all the new modal components
//   {
//     id: "modal-basic",
//     title: "Basic Modal",
//     description: "Simple modal dialog",
//     category: "modals",
//     component: ModalComponents.basic,
//     code: `<div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-2xl max-w-md mx-auto">
//   <div className="p-6 border-b border-gray-200 dark:border-gray-700">
//     <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Confirm Action</h3>
//   </div>
//   <div className="p-6">
//     <p className="text-gray-600 dark:text-gray-400 mb-6">
//       Are you sure you want to delete this item? This action cannot be undone.
//     </p>
//     <div className="flex gap-3 justify-end">
//       <button className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
//         Cancel
//       </button>
//       <button className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors">
//         Delete
//       </button>
//     </div>
//   </div>
// </div>`,
//     tags: ["modal", "dialog", "popup"],
//     popularity: 78,
//   },
//   {
//     id: "modal-alert",
//     title: "Alert Modal",
//     description: "Error alert modal dialog",
//     category: "modals",
//     component: ModalComponents.alert,
//     code: `<div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-2xl max-w-md mx-auto">
//   <div className="p-6 flex flex-col items-center text-center">
//     <div className="w-16 h-16 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center mb-4">
//       <X className="w-8 h-8 text-red-600" />
//     </div>
//     <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Error Occurred</h3>
//     <p className="text-gray-600 dark:text-gray-400 mb-6">
//       We couldn't process your request. Please try again later.
//     </p>
//     <button className="px-6 py-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-lg font-medium transition-colors">
//       Close
//     </button>
//   </div>
// </div>`,
//     tags: ["modal", "alert", "error"],
//     popularity: 72,
//   },
//   {
//     id: "modal-form",
//     title: "Form Modal",
//     description: "Modal with form inputs",
//     category: "modals",
//     component: ModalComponents.form,
//     code: `<div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-2xl max-w-md mx-auto">
//   <div className="p-6 border-b border-gray-200 dark:border-gray-700">
//     <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Create New Project</h3>
//   </div>
//   <div className="p-6">
//     <div className="space-y-4">
//       <div>
//         <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Project Name</label>
//         <input type="text" placeholder="Enter project name" className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-900" />
//       </div>
//       <div>
//         <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Description</label>
//         <textarea placeholder="Project description" rows={3} className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-900"></textarea>
//       </div>
//     </div>
//     <div className="flex gap-3 justify-end mt-6">
//       <button className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Cancel</button>
//       <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">Create Project</button>
//     </div>
//   </div>
// </div>`,
//     tags: ["modal", "form", "input"],
//     popularity: 85,
//   },
//   {
//     id: "modal-success",
//     title: "Success Modal",
//     description: "Success confirmation modal",
//     category: "modals",
//     component: ModalComponents.success,
//     code: `<div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-2xl max-w-md mx-auto">
//   <div className="p-6 flex flex-col items-center text-center">
//     <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mb-4">
//       <Check className="w-8 h-8 text-green-600" />
//     </div>
//     <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Payment Successful</h3>
//     <p className="text-gray-600 dark:text-gray-400 mb-6">
//       Your payment has been processed successfully. You will receive a confirmation email shortly.
//     </p>
//     <button className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors">
//       View Receipt
//     </button>
//   </div>
// </div>`,
//     tags: ["modal", "success", "confirmation"],
//     popularity: 80,
//   },
//   {
//     id: "modal-image",
//     title: "Image Modal",
//     description: "Image preview modal dialog",
//     category: "modals",
//     component: ModalComponents.image,
//     code: `<div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-2xl max-w-md mx-auto overflow-hidden">
//   <div className="h-48 bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
//     <ImageIcon className="w-8 h-8 text-gray-400" />
//   </div>
//   <div className="p-6">
//     <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Image Preview</h3>
//     <p className="text-gray-600 dark:text-gray-400 mb-6">
//       This is a preview of the selected image. You can crop or edit it before uploading.
//     </p>
//     <div className="flex gap-3 justify-end">
//       <button className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Cancel</button>
//       <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">Upload</button>
//     </div>
//   </div>
// </div>`,
//     tags: ["modal", "image", "preview"],
//     popularity: 68,
//   },

//   // Chat Components - Adding all the new chat components
//   {
//     id: "chat-bubble",
//     title: "Chat Bubbles",
//     description: "Chat message bubbles for conversations",
//     category: "chatbots",
//     component: ChatComponents.bubble,
//     code: `<div className="max-w-sm space-y-4">
//   <div className="flex items-start gap-3">
//     <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
//       <Bot className="w-4 h-4 text-white" />
//     </div>
//     <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl rounded-tl-sm px-4 py-3 max-w-xs">
//       <p className="text-gray-900 dark:text-white text-sm">Hello! How can I help you today?</p>
//     </div>
//   </div>
//   <div className="flex items-start gap-3 justify-end">
//     <div className="bg-blue-600 rounded-2xl rounded-tr-sm px-4 py-3 max-w-xs">
//       <p className="text-white text-sm">I need help with my account settings.</p>
//     </div>
//     <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
//       <User className="w-4 h-4 text-white" />
//     </div>
//   </div>
// </div>`,
//     tags: ["chat", "bubble", "conversation"],
//     popularity: 90,
//   },
//   {
//     id: "chat-input",
//     title: "Chat Input",
//     description: "Input field for chat messages",
//     category: "chatbots",
//     component: ChatComponents.input,
//     code: `<div className="max-w-md">
//   <div className="flex items-center gap-2 p-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-900">
//     <input
//       type="text"
//       placeholder="Type your message..."
//       className="flex-1 bg-transparent outline-none text-gray-900 dark:text-white placeholder-gray-500"
//     />
//     <button className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
//       <Send size={16} />
//     </button>
//   </div>
// </div>`,
//     tags: ["chat", "input", "message"],
//     popularity: 85,
//   },
//   {
//     id: "chat-conversation",
//     title: "Chat Conversation",
//     description: "Complete chat conversation layout",
//     category: "chatbots",
//     component: ChatComponents.conversation,
//     code: `<div className="max-w-md border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden bg-white dark:bg-gray-900 shadow-lg">
//   <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center gap-3">
//     <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
//       <Bot className="w-4 h-4 text-white" />
//     </div>
//     <div>
//       <h3 className="font-medium text-gray-900 dark:text-white">Support Bot</h3>
//       <p className="text-xs text-gray-500 dark:text-gray-400">Online</p>
//     </div>
//   </div>
//   <div className="h-64 p-4 overflow-y-auto space-y-4">
//     <div className="flex items-start gap-3">
//       <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
//         <Bot className="w-4 h-4 text-white" />
//       </div>
//       <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl rounded-tl-sm px-4 py-3 max-w-xs">
//         <p className="text-gray-900 dark:text-white text-sm">Hello! How can I help you today?</p>
//         <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">10:30 AM</p>
//       </div>
//     </div>
//     <div className="flex items-start gap-3 justify-end">
//       <div className="bg-blue-600 rounded-2xl rounded-tr-sm px-4 py-3 max-w-xs">
//         <p className="text-white text-sm">I need help with my account settings.</p>
//         <p className="text-xs text-blue-200 mt-1">10:31 AM</p>
//       </div>
//       <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
//         <User className="w-4 h-4 text-white" />
//       </div>
//     </div>
//     <div className="flex items-start gap-3">
//       <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
//         <Bot className="w-4 h-4 text-white" />
//       </div>
//       <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl rounded-tl-sm px-4 py-3 max-w-xs">
//         <p className="text-gray-900 dark:text-white text-sm">
//           I'd be happy to help with your account settings. What specific setting are you trying to change?
//         </p>
//         <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">10:32 AM</p>
//       </div>
//     </div>
//   </div>
//   <div className="p-4 border-t border-gray-200 dark:border-gray-700">
//     <div className="flex items-center gap-2">
//       <input
//         type="text"
//         placeholder="Type your message..."
//         className="flex-1 bg-transparent outline-none text-gray-900 dark:text-white placeholder-gray-500 py-2"
//       />
//       <button className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
//         <Send size={16} />
//       </button>
//     </div>
//   </div>
// </div>`,
//     tags: ["chat", "conversation", "layout"],
//     popularity: 88,
//   },
//   {
//     id: "chat-typing",
//     title: "Typing Indicator",
//     description: "Animated typing indicator for chat",
//     category: "chatbots",
//     component: ChatComponents.typing,
//     code: `<div className="max-w-sm space-y-4">
//   <div className="flex items-start gap-3">
//     <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
//       <Bot className="w-4 h-4 text-white" />
//     </div>
//     <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl rounded-tl-sm px-4 py-3">
//       <div className="flex gap-1">
//         <div className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-pulse"></div>
//         <div className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
//         <div className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
//       </div>
//     </div>
//   </div>
// </div>`,
//     tags: ["chat", "typing", "indicator"],
//     popularity: 75,
//   },
//   {
//     id: "chat-quick-replies",
//     title: "Quick Replies",
//     description: "Buttons for quick reply options in chat",
//     category: "chatbots",
//     component: ChatComponents.quickReplies,
//     code: `<div className="max-w-md">
//   <div className="flex flex-wrap gap-2 mb-4">
//     <button className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
//       Account Settings
//     </button>
//     <button className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
//       Billing
//     </button>
//     <button className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
//       Technical Support
//     </button>
//   </div>
//   <div className="flex items-center gap-2 p-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-900">
//     <input
//       type="text"
//       placeholder="Type your message..."
//       className="flex-1 bg-transparent outline-none text-gray-900 dark:text-white placeholder-gray-500"
//     />
//     <button className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
//       <Send size={16} />
//     </button>
//   </div>
// </div>`,
//     tags: ["chat", "quick", "replies"],
//     popularity: 80,
//   },

//   // Chart Components - Adding all the new chart components
//   {
//     id: "chart-bar",
//     title: "Bar Chart",
//     description: "Vertical bar chart component",
//     category: "charts",
//     component: ChartComponents.bar,
//     code: `<div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-lg max-w-sm">
//   <div className="flex items-center justify-between mb-4">
//     <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Sales Overview</h3>
//     <BarChart3 className="w-5 h-5 text-blue-500" />
//   </div>
//   <div className="space-y-3">
//     <div className="flex items-center justify-between">
//       <span className="text-sm text-gray-600 dark:text-gray-400">Jan</span>
//       <div className="flex-1 mx-3 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
//         <div className="bg-blue-600 h-2 rounded-full" style={{ width: "70%" }}></div>
//       </div>
//       <span className="text-sm font-medium text-gray-900 dark:text-white">$7k</span>
//     </div>
//     <div className="flex items-center justify-between">
//       <span className="text-sm text-gray-600 dark:text-gray-400">Feb</span>
//       <div className="flex-1 mx-3 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
//         <div className="bg-blue-600 h-2 rounded-full" style={{ width: "85%" }}></div>
//       </div>
//       <span className="text-sm font-medium text-gray-900 dark:text-white">$8.5k</span>
//     </div>
//     <div className="flex items-center justify-between">
//       <span className="text-sm text-gray-600 dark:text-gray-400">Mar</span>
//       <div className="flex-1 mx-3 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
//         <div className="bg-blue-600 h-2 rounded-full" style={{ width: "60%" }}></div>
//       </div>
//       <span className="text-sm font-medium text-gray-900 dark:text-white">$6k</span>
//     </div>
//   </div>
// </div>`,
//     tags: ["chart", "bar", "vertical"],
//     popularity: 82,
//   },
//   {
//     id: "chart-pie",
//     title: "Pie Chart",
//     description: "Circular pie chart component",
//     category: "charts",
//     component: ChartComponents.pie,
//     code: `<div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-lg max-w-sm">
//   <div className="flex items-center justify-between mb-4">
//     <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Traffic Sources</h3>
//     <PieChart className="w-5 h-5 text-blue-500" />
//   </div>
//   <div className="flex items-center justify-center mb-4">
//     <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center">
//       <div className="w-16 h-16 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center">
//         <span className="text-sm font-bold text-gray-900 dark:text-white">100%</span>
//       </div>
//     </div>
//   </div>
//   <div className="space-y-2">
//     <div className="flex items-center justify-between">
//       <div className="flex items-center gap-2">
//         <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
//         <span className="text-sm text-gray-600 dark:text-gray-400">Direct</span>
//       </div>
//       <span className="text-sm font-medium text-gray-900 dark:text-white">45%</span>
//     </div>
//     <div className="flex items-center justify-between">
//       <div className="flex items-center gap-2">
//         <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
//         <span className="text-sm text-gray-600 dark:text-gray-400">Social</span>
//       </div>
//       <span className="text-sm font-medium text-gray-900 dark:text-white">30%</span>
//     </div>
//     <div className="flex items-center justify-between">
//       <div className="flex items-center gap-2">
//         <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
//         <span className="text-sm text-gray-600 dark:text-gray-400">Search</span>
//       </div>
//       <span className="text-sm font-medium text-gray-900 dark:text-white">25%</span>
//     </div>
//   </div>
// </div>`,
//     tags: ["chart", "pie", "circular"],
//     popularity: 78,
//   },
//   {
//     id: "chart-line",
//     title: "Line Chart",
//     description: "Line chart component",
//     category: "charts",
//     component: ChartComponents.line,
//     code: `<div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-lg max-w-sm">
//   <div className="flex items-center justify-between mb-4">
//     <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Monthly Revenue</h3>
//     <TrendingUp className="w-5 h-5 text-green-500" />
//   </div>
//   <div className="h-40 flex items-end justify-between gap-2">
//     {[35, 45, 30, 60, 75, 50, 65].map((height, i) => (
//       <div key={i} className="flex-1 flex flex-col items-center gap-1">
//         <div
//           className="w-full bg-blue-500 rounded-t-sm"
//           style={{ height: height + '%' }}
//         ></div>
//         <span className="text-xs text-gray-500 dark:text-gray-400">W{i + 1}</span>
//       </div>
//     ))}
//   </div>
//   <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
//     <div className="text-sm text-gray-600 dark:text-gray-400">Total Revenue</div>
//     <div className="text-lg font-bold text-gray-900 dark:text-white">$48,254</div>
//   </div>
// </div>`,
//     tags: ["chart", "line", "trend"],
//     popularity: 85,
//   },
//   {
//     id: "chart-area",
//     title: "Area Chart",
//     description: "Area chart component",
//     category: "charts",
//     component: ChartComponents.area,
//     code: `<div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-lg max-w-sm">
//   <div className="flex items-center justify-between mb-4">
//     <h3 className="text-lg font-semibold text-gray-900 dark:text-white">User Growth</h3>
//     <Users className="w-5 h-5 text-blue-500" />
//   </div>
//   <div className="h-40 relative">
//     <div className="absolute inset-0 flex items-end">
//       <div className="w-full h-[85%] bg-gradient-to-t from-blue-500/20 to-blue-500/0 rounded-md"></div>
//     </div>
//     <div className="absolute inset-0 flex items-end">
//       <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
//         <path
//           d="M0,100 L0,40 C10,30 20,35 30,30 C40,25 50,35 60,30 C70,25 80,15 90,20 L100,15 L100,100 Z"
//           fill="none"
//           stroke="#3b82f6"
//           strokeWidth="2"
//         ></path>
//       </svg>
//     </div>
//   </div>
//   <div className="flex justify-between mt-2">
//     <span className="text-xs text-gray-500 dark:text-gray-400">Jan</span>
//     <span className="text-xs text-gray-500 dark:text-gray-400">Feb</span>
//     <span className="text-xs text-gray-500 dark:text-gray-400">Mar</span>
//     <span className="text-xs text-gray-500 dark:text-gray-400">Apr</span>
//     <span className="text-xs text-gray-500 dark:text-gray-400">May</span>
//     <span className="text-xs text-gray-500 dark:text-gray-400">Jun</span>
//   </div>
// </div>`,
//     tags: ["chart", "area", "growth"],
//     popularity: 70,
//   },
//   {
//     id: "chart-radial",
//     title: "Radial Chart",
//     description: "Radial chart component",
//     category: "charts",
//     component: ChartComponents.radial,
//     code: `<div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-lg max-w-sm">
//   <div className="flex items-center justify-between mb-4">
//     <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Task Completion</h3>
//     <Check className="w-5 h-5 text-green-500" />
//   </div>
//   <div className="flex items-center justify-center mb-4">
//     <div className="relative w-32 h-32">
//       <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
//         <circle
//           cx="50"
//           cy="50"
//           r="40"
//           stroke="currentColor"
//           strokeWidth="8"
//           fill="none"
//           className="text-gray-200 dark:text-gray-700"
//         />
//         <circle
//           cx="50"
//           cy="50"
//           r="40"
//           stroke="currentColor"
//           strokeWidth="8"
//           fill="none"
//           strokeDasharray="251.2"
//           strokeDashoffset="62.8"
//           className="text-green-500"
//           strokeLinecap="round"
//         />
//       </svg>
//       <div className="absolute inset-0 flex items-center justify-center">
//         <span className="text-2xl font-bold text-gray-900 dark:text-white">75%</span>
//       </div>
//     </div>
//   </div>
//   <div className="text-center">
//     <p className="text-sm text-gray-600 dark:text-gray-400">15 of 20 tasks completed</p>
//   </div>
// </div>`,
//     tags: ["chart", "radial", "progress"],
//     popularity: 73,
//   },

//   // Notification Components - Adding all the new notification components
//   {
//     id: "notification-toast",
//     title: "Toast Notification",
//     description: "Subtle toast notification message",
//     category: "notifications",
//     component: NotificationComponents.toast,
//     code: `<div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-4 max-w-sm">
//   <div className="flex items-start gap-3">
//     <div className="w-8 h-8 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center">
//       <Check className="w-4 h-4 text-green-600" />
//     </div>
//     <div className="flex-1">
//       <h4 className="text-sm font-medium text-gray-900 dark:text-white">Success!</h4>
//       <p className="text-sm text-gray-600 dark:text-gray-400">Your changes have been saved successfully.</p>
//     </div>
//     <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
//       <X size={16} />
//     </button>
//   </div>
// </div>`,
//     tags: ["notification", "toast", "message"],
//     popularity: 92,
//   },
//   {
//     id: "notification-alert",
//     title: "Alert Notification",
//     description: "Error alert notification",
//     category: "notifications",
//     component: NotificationComponents.alert,
//     code: `<div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 max-w-sm">
//   <div className="flex items-start gap-3">
//     <div className="w-8 h-8 bg-red-100 dark:bg-red-900/40 rounded-full flex items-center justify-center">
//       <X className="w-4 h-4 text-red-600" />
//     </div>
//     <div className="flex-1">
//       <h4 className="text-sm font-medium text-red-900 dark:text-red-200">Error</h4>
//       <p className="text-sm text-red-700 dark:text-red-300">There was an error processing your request.</p>
//     </div>
//   </div>
// </div>`,
//     tags: ["notification", "alert", "error"],
//     popularity: 85,
//   },
//   {
//     id: "notification-warning",
//     title: "Warning Notification",
//     description: "Warning notification message",
//     category: "notifications",
//     component: NotificationComponents.warning,
//     code: `<div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 max-w-sm">
//   <div className="flex items-start gap-3">
//     <div className="w-8 h-8 bg-yellow-100 dark:bg-yellow-900/40 rounded-full flex items-center justify-center">
//       <Info className="w-4 h-4 text-yellow-600" />
//     </div>
//     <div className="flex-1">
//       <h4 className="text-sm font-medium text-yellow-900 dark:text-yellow-200">Warning</h4>
//       <p className="text-sm text-yellow-700 dark:text-yellow-300">Please review your settings before continuing.</p>
//     </div>
//   </div>
// </div>`,
//     tags: ["notification", "warning", "message"],
//     popularity: 80,
//   },
//   {
//     id: "notification-info",
//     title: "Information Notification",
//     description: "Information notification message",
//     category: "notifications",
//     component: NotificationComponents.info,
//     code: `<div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 max-w-sm">
//   <div className="flex items-start gap-3">
//     <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/40 rounded-full flex items-center justify-center">
//       <Info className="w-4 h-4 text-blue-600" />
//     </div>
//     <div className="flex-1">
//       <h4 className="text-sm font-medium text-blue-900 dark:text-blue-200">Information</h4>
//       <p className="text-sm text-blue-700 dark:text-blue-300">New features are now available in your dashboard.</p>
//     </div>
//   </div>
// </div>`,
//     tags: ["notification", "information", "message"],
//     popularity: 75,
//   },
//   {
//     id: "notification-badge",
//     title: "Notification Badge",
//     description: "Badge for displaying notifications",
//     category: "notifications",
//     component: NotificationComponents.badge,
//     code: `<div className="relative inline-block">
//   <button className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
//     <Bell size={20} className="text-gray-600 dark:text-gray-400" />
//   </button>
//   <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
//     3
//   </span>
// </div>`,
//     tags: ["notification", "badge", "count"],
//     popularity: 88,
//   },
//   {
//     id: "notification-banner",
//     title: "Notification Banner",
//     description: "Full-width notification banner",
//     category: "notifications",
//     component: NotificationComponents.banner,
//     code: `<div className="bg-blue-600 text-white p-4 rounded-lg max-w-md">
//   <div className="flex items-center justify-between">
//     <div className="flex items-center gap-3">
//       <Info size={20} />
//       <div>
//         <h4 className="font-medium">New Update Available</h4>
//         <p className="text-sm text-blue-100">Version 2.0 is now available with new features.</p>
//       </div>
//     </div>
//     <button className="text-blue-200 hover:text-white">
//       <X size={20} />
//     </button>
//   </div>
// </div>`,
//     tags: ["notification", "banner", "full-width"],
//     popularity: 72,
//   },

//   // Loading Components - Adding all the new loading components
//   {
//     id: "loading-spinner",
//     title: "Spinner",
//     description: "Simple loading spinner",
//     category: "loading",
//     component: LoadingComponents.spinner,
//     code: `<div className="flex items-center justify-center p-8">
//   <div className="w-8 h-8 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
// </div>`,
//     tags: ["loading", "spinner", "animation"],
//     popularity: 90,
//   },
//   {
//     id: "loading-dots",
//     title: "Loading Dots",
//     description: "Animated loading dots",
//     category: "loading",
//     component: LoadingComponents.dots,
//     code: `<div className="flex items-center justify-center gap-2 p-8">
//   <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse"></div>
//   <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
//   <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
// </div>`,
//     tags: ["loading", "dots", "animation"],
//     popularity: 85,
//   },
//   {
//     id: "loading-skeleton",
//     title: "Skeleton Loader",
//     description: "Skeleton loading placeholder",
//     category: "loading",
//     component: LoadingComponents.skeleton,
//     code: `<div className="max-w-sm p-4 space-y-3">
//   <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
//   <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse w-3/4"></div>
//   <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse w-1/2"></div>
// </div>`,
//     tags: ["loading", "skeleton", "placeholder"],
//     popularity: 88,
//   },
//   {
//     id: "loading-progress",
//     title: "Progress Bar",
//     description: "Progress bar loading indicator",
//     category: "loading",
//     component: LoadingComponents.progress,
//     code: `<div className="max-w-sm p-4">
//   <div className="flex items-center justify-between mb-2">
//     <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Loading...</span>
//     <span className="text-sm text-gray-500 dark:text-gray-400">65%</span>
//   </div>
//   <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
//     <div className="bg-blue-600 h-2 rounded-full transition-all duration-300" style={{ width: '65%' }}></div>
//   </div>
// </div>`,
//     tags: ["loading", "progress", "bar"],
//     popularity: 82,
//   },
//   {
//     id: "loading-pulse",
//     title: "Pulse Loader",
//     description: "Pulsing loading effect",
//     category: "loading",
//     component: LoadingComponents.pulse,
//     code: `<div className="max-w-sm bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-lg">
//   <div className="flex items-center gap-4 mb-4">
//     <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
//     <div className="space-y-2 flex-1">
//       <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
//       <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded animate-pulse w-2/3"></div>
//     </div>
//   </div>
//   <div className="space-y-2">
//     <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
//     <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded animate-pulse w-5/6"></div>
//     <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded animate-pulse w-3/4"></div>
//   </div>
// </div>`,
//     tags: ["loading", "pulse", "effect"],
//     popularity: 78,
//   },

//   // Avatar Components - Adding all the new avatar components
//   {
//     id: "avatar-basic",
//     title: "Basic Avatar",
//     description: "Simple avatar with initials",
//     category: "avatars",
//     component: AvatarComponents.basic,
//     code: `<div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
//   <span className="text-white font-medium">JD</span>
// </div>`,
//     tags: ["avatar", "basic", "initials"],
//     popularity: 95,
//   },
//   {
//     id: "avatar-image",
//     title: "Image Avatar",
//     description: "Avatar with image",
//     category: "avatars",
//     component: AvatarComponents.image,
//     code: `<div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center overflow-hidden">
//   <User className="w-6 h-6 text-gray-400" />
// </div>`,
//     tags: ["avatar", "image", "user"],
//     popularity: 88,
//   },
//   {
//     id: "avatar-group",
//     title: "Avatar Group",
//     description: "Group of avatars",
//     category: "avatars",
//     component: AvatarComponents.group,
//     code: `<div className="flex -space-x-2">
//   <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center border-2 border-white dark:border-gray-900">
//     <span className="text-white text-sm font-medium">JD</span>
//   </div>
//   <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center border-2 border-white dark:border-gray-900">
//     <span className="text-white text-sm font-medium">AB</span>
//   </div>
//   <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center border-2 border-white dark:border-gray-900">
//     <span className="text-white text-sm font-medium">CD</span>
//   </div>
//   <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center border-2 border-white dark:border-gray-900">
//     <span className="text-white text-sm font-medium">+2</span>
//   </div>
// </div>`,
//     tags: ["avatar", "group", "users"],
//     popularity: 82,
//   },
//   {
//     id: "avatar-status",
//     title: "Avatar with Status",
//     description: "Avatar with online status indicator",
//     category: "avatars",
//     component: AvatarComponents.status,
//     code: `<div className="relative">
//   <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
//     <span className="text-white font-medium">JD</span>
//   </div>
//   <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-gray-900"></div>
// </div>`,
//     tags: ["avatar", "status", "online"],
//     popularity: 75,
//   },
//   {
//     id: "avatar-sizes",
//     title: "Avatar Sizes",
//     description: "Different sizes of avatars",
//     category: "avatars",
//     component: AvatarComponents.sizes,
//     code: `<div className="flex items-center gap-4">
//   <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
//     <span className="text-white text-xs font-medium">S</span>
//   </div>
//   <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
//     <span className="text-white text-sm font-medium">M</span>
//   </div>
//   <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
//     <span className="text-white font-medium">L</span>
//   </div>
//   <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
//     <span className="text-white text-lg font-medium">XL</span>
//   </div>
// </div>`,
//     tags: ["avatar", "sizes", "small", "medium", "large"],
//     popularity: 70,
//   },

//   // Badge Components - Adding all the new badge components
//   {
//     id: "badge-basic",
//     title: "Basic Badge",
//     description: "Simple badge component",
//     category: "badges",
//     component: BadgeComponents.basic,
//     code: `<span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-full">
//   New
// </span>`,
//     tags: ["badge", "basic", "label"],
//     popularity: 92,
//   },
//   {
//     id: "badge-variants",
//     title: "Badge Variants",
//     description: "Different color variants of badges",
//     category: "badges",
//     component: BadgeComponents.variants,
//     code: `<div className="flex flex-wrap gap-2">
//   <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-full">
//     Primary
//   </span>
//   <span className="px-3 py-1 bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200 text-sm font-medium rounded-full">
//     Success
//   </span>
//   <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-200 text-sm font-medium rounded-full">
//     Warning
//   </span>
//   <span className="px-3 py-1 bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-200 text-sm font-medium rounded-full">
//     Error
//   </span>
// </div>`,
//     tags: ["badge", "variants", "colors"],
//     popularity: 85,
//   },
//   {
//     id: "badge-with-icon",
//     title: "Badge with Icon",
//     description: "Badge with an icon",
//     category: "badges",
//     component: BadgeComponents.withIcon,
//     code: `<span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200 text-sm font-medium rounded-full">
//   <Check size={12} />
//   Verified
// </span>`,
//     tags: ["badge", "icon", "verified"],
//     popularity: 80,
//   },
//   {
//     id: "badge-notification",
//     title: "Notification Badge",
//     description: "Badge for displaying notifications",
//     category: "badges",
//     component: BadgeComponents.notification,
//     code: `<div className="relative inline-block">
//   <button className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
//     <Bell size={20} className="text-gray-600 dark:text-gray-400" />
//   </button>
//   <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs font-medium rounded-full flex items-center justify-center">
//     3
//   </span>
// </div>`,
//     tags: ["badge", "notification", "count"],
//     popularity: 88,
//   },
//   {
//     id: "badge-dot",
//     title: "Dot Indicator",
//     description: "Dot indicator for status",
//     category: "badges",
//     component: BadgeComponents.dot,
//     code: `<div className="flex items-center gap-2">
//   <span className="w-2 h-2 bg-green-500 rounded-full"></span>
//   <span className="text-sm text-gray-700 dark:text-gray-300">Online</span>
// </div>`,
//     tags: ["badge", "dot", "status"],
//     popularity: 72,
//   },
// ]
import { Star, Zap } from "lucide-react"

// Button Components
const ButtonComponents = {
  primary: () => (
    <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl">
      Primary Button
    </button>
  ),
  gradient: () => (
    <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-lg font-medium transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl">
      Gradient Button
    </button>
  ),
  outline: () => (
    <button className="px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-500 hover:text-blue-500 rounded-lg font-medium transition-all duration-200 hover:scale-105">
      Outline Button
    </button>
  ),
  ghost: () => (
    <button className="px-6 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg font-medium transition-all duration-200 hover:scale-105">
      Ghost Button
    </button>
  ),
  icon: () => (
    <button className="flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-all duration-200 hover:scale-105 shadow-lg">
      <Zap size={18} />
      Icon Button
    </button>
  ),
  floating: () => (
    <button className="w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-200 hover:scale-110 flex items-center justify-center">
      <Star size={20} />
    </button>
  ),
  glass: () => (
    <button className="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-gray-800 dark:text-white rounded-lg font-medium transition-all duration-200 hover:scale-105 shadow-lg">
      Glass Button
    </button>
  ),
  neon: () => (
    <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium transition-all duration-200 hover:scale-105 shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:shadow-[0_0_25px_rgba(59,130,246,0.7)]">
      Neon Button
    </button>
  ),
  retro: () => (
    <button className="px-6 py-3 bg-yellow-400 text-black font-bold border-4 border-black rounded-lg transition-all duration-200 hover:scale-105 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
      Retro Button
    </button>
  ),
  minimal: () => (
    <button className="px-6 py-3 text-blue-600 dark:text-blue-400 font-medium transition-all duration-200 hover:underline">
      Minimal Button
    </button>
  ),
}

// Card Components
const CardComponents = {
  basic: () => (
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-200">
      <h3 className="text-xl font-semibold mb-2">Basic Card</h3>
      <p className="text-gray-600 dark:text-gray-400">This is a basic card component.</p>
    </div>
  ),
  image: () => (
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 overflow-hidden">
      <img src="https://source.unsplash.com/400x300" alt="Card Image" className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">Image Card</h3>
        <p className="text-gray-600 dark:text-gray-400">This card includes an image at the top.</p>
      </div>
    </div>
  ),
  pricing: () => (
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-200 text-center">
      <h3 className="text-2xl font-bold mb-2">$99</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4">Monthly Subscription</p>
      <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-200 hover:scale-105">
        Sign Up
      </button>
    </div>
  ),
}

const allComponents = [
  {
    id: "button-primary",
    title: "Primary Button",
    description: "A standard primary button.",
    category: "buttons",
    component: ButtonComponents.primary,
    code: `<button className="px-6 py-3 bg-blue-600 text-white rounded-lg">Primary Button</button>`,
    tags: ["button", "primary", "call-to-action"],
    popularity: 95,
  },
  {
    id: "button-gradient",
    title: "Gradient Button",
    description: "A button with a beautiful gradient background.",
    category: "buttons",
    component: ButtonComponents.gradient,
    code: `<button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg">Gradient Button</button>`,
    tags: ["button", "gradient", "colorful"],
    popularity: 88,
  },
  {
    id: "button-outline",
    title: "Outline Button",
    description: "A button with a transparent background and an outline.",
    category: "buttons",
    component: ButtonComponents.outline,
    code: `<button className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg">Outline Button</button>`,
    tags: ["button", "outline", "transparent"],
    popularity: 75,
  },
  {
    id: "button-ghost",
    title: "Ghost Button",
    description: "A button with minimal styling.",
    category: "buttons",
    component: ButtonComponents.ghost,
    code: `<button className="px-6 py-3 text-gray-700 rounded-lg">Ghost Button</button>`,
    tags: ["button", "ghost", "minimal"],
    popularity: 62,
  },
  {
    id: "button-icon",
    title: "Icon Button",
    description: "A button with an icon.",
    category: "buttons",
    component: ButtonComponents.icon,
    code: `<button className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg"><Zap size={18} /> Icon Button</button>`,
    tags: ["button", "icon", "green"],
    popularity: 80,
  },
  {
    id: "button-floating",
    title: "Floating Action Button",
    description: "A circular button with a shadow, often used for primary actions.",
    category: "buttons",
    component: ButtonComponents.floating,
    code: `<button className="w-14 h-14 bg-blue-600 text-white rounded-full shadow-2xl"><Star size={20} /></button>`,
    tags: ["button", "fab", "floating", "circular"],
    popularity: 70,
  },
  {
    id: "button-glass",
    title: "Glass Button",
    description: "A button with a glass morphism effect.",
    category: "buttons",
    component: ButtonComponents.glass,
    code: `<button className="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-gray-800 rounded-lg">Glass Button</button>`,
    tags: ["button", "glass", "blur"],
    popularity: 82,
  },
  {
    id: "button-neon",
    title: "Neon Button",
    description: "A button with a neon glow effect.",
    category: "buttons",
    component: ButtonComponents.neon,
    code: `<button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-[0_0_15px_rgba(59,130,246,0.5)]">Neon Button</button>`,
    tags: ["button", "neon", "glow"],
    popularity: 78,
  },
  {
    id: "button-retro",
    title: "Retro Button",
    description: "A button with a retro, 8-bit style.",
    category: "buttons",
    component: ButtonComponents.retro,
    code: `<button className="px-6 py-3 bg-yellow-400 text-black font-bold border-4 border-black rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">Retro Button</button>`,
    tags: ["button", "retro", "8-bit"],
    popularity: 65,
  },
  {
    id: "button-minimal",
    title: "Minimal Button",
    description: "A button with minimal styling, often just text.",
    category: "buttons",
    component: ButtonComponents.minimal,
    code: `<button className="px-6 py-3 text-blue-600 font-medium">Minimal Button</button>`,
    tags: ["button", "minimal", "text"],
    popularity: 58,
  },
  {
    id: "card-basic",
    title: "Basic Card",
    description: "A simple card with a title and description.",
    category: "cards",
    component: CardComponents.basic,
    code: `<div className="bg-white border border-gray-200 rounded-xl p-6">...</div>`,
    tags: ["card", "basic", "simple"],
    popularity: 85,
  },
  {
    id: "card-image",
    title: "Image Card",
    description: "A card with an image at the top.",
    category: "cards",
    component: CardComponents.image,
    code: `<div className="bg-white border border-gray-200 rounded-xl overflow-hidden"><img src="..." /><div className="p-6">...</div></div>`,
    tags: ["card", "image", "media"],
    popularity: 90,
  },
  {
    id: "card-pricing",
    title: "Pricing Card",
    description: "A card designed to display pricing information.",
    category: "cards",
    component: CardComponents.pricing,
    code: `<div className="bg-white border border-gray-200 rounded-xl p-6 text-center">...</div>`,
    tags: ["card", "pricing", "subscription"],
    popularity: 78,
  },
]

export { allComponents }
