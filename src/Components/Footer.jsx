import React from 'react'
import { Layers, Heart } from 'lucide-react' // ✅ import the missing icons

const Footer = () => {
  return (
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
  )
}

export default Footer
