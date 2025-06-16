"use client"

import { useState } from "react"
import { Menu, X, User, BookOpen, Users, Calendar, FileText, Heart } from "lucide-react"
import { Link, useLocation } from "react-router-dom"

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { name: "Home", path: "/", icon: User },
    { name: "Academic Journey", path: "/academic", icon: BookOpen },
    { name: "Activities", path: "/activities", icon: Users },
    { name: "University Life", path: "/university-life", icon: Calendar },
    { name: "Grades", path: "/grades", icon: FileText },
    { name: "My Story", path: "/story", icon: Heart },
  ]

  return (
    <nav className="bg-gray-900/95 backdrop-blur-md shadow-2xl shadow-rose-500/10 sticky top-0 z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <BookOpen className="h-8 w-8 text-rose-400 group-hover:text-rose-300 transition-colors duration-300" />
                <div className="absolute -inset-1 bg-rose-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
              </div>
              <span className="font-bold text-xl text-white group-hover:text-rose-300 transition-colors duration-300">
                Ria's Portfolio
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = location.pathname === item.path
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`group flex items-center space-x-2 px-4 py-2 rounded-2xl text-sm font-medium transition-all duration-300 relative overflow-hidden ${
                    isActive
                      ? "text-rose-300 bg-rose-500/20 shadow-lg shadow-rose-500/20 border border-rose-400/30"
                      : "text-gray-300 hover:text-rose-300 hover:bg-gray-800/50 border border-transparent hover:border-rose-400/20"
                  }`}
                >
                  <Icon
                    className={`h-4 w-4 transition-transform duration-300 ${isActive ? "scale-110" : "group-hover:scale-110"}`}
                  />
                  <span className="relative z-10">{item.name}</span>
                  {isActive && (
                    <div className="absolute inset-0 bg-gradient-to-r from-rose-500/10 to-lavender-500/10 rounded-2xl"></div>
                  )}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-rose-400 to-lavender-400 group-hover:w-full transition-all duration-300"></div>
                </Link>
              )
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-rose-300 focus:outline-none p-2 rounded-lg hover:bg-gray-800/50 transition-all duration-300 border border-transparent hover:border-rose-400/20"
            >
              <div className="relative w-6 h-6">
                <Menu
                  className={`absolute inset-0 transition-all duration-300 ${isOpen ? "opacity-0 rotate-180" : "opacity-100 rotate-0"}`}
                />
                <X
                  className={`absolute inset-0 transition-all duration-300 ${isOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-180"}`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} overflow-hidden`}
        >
          <div className="px-2 pt-2 pb-3 space-y-2 bg-gray-900/95 backdrop-blur-md border-t border-gray-800">
            {navItems.map((item, index) => {
              const Icon = item.icon
              const isActive = location.pathname === item.path
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`group flex items-center space-x-3 px-4 py-3 rounded-2xl text-base font-medium transition-all duration-300 transform ${
                    isActive
                      ? "text-rose-300 bg-rose-500/20 shadow-lg shadow-rose-500/20 scale-105 border border-rose-400/30"
                      : "text-gray-300 hover:text-rose-300 hover:bg-gray-800/50 hover:scale-105 border border-transparent hover:border-rose-400/20"
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <Icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                  <span>{item.name}</span>
                  {isActive && <div className="ml-auto w-2 h-2 bg-rose-400 rounded-full animate-pulse"></div>}
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
