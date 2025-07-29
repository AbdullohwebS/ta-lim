"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, User } from "lucide-react"

interface NavbarProps {
  onAuthClick?: (mode: "login" | "register") => void
}

export default function Navbar({ onAuthClick }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-black/90 backdrop-blur-sm border-b border-green-500/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-lg">L</span>
            </div>
            <span className="text-green-400 font-bold text-xl">LearnHub</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/courses" className="text-green-400 hover:text-green-300 transition-colors">
              Kurslar
            </Link>
            <Link href="/about" className="text-green-400 hover:text-green-300 transition-colors">
              Biz haqimizda
            </Link>
            <Link href="/contact" className="text-green-400 hover:text-green-300 transition-colors">
              Aloqa
            </Link>
            <Link href="/rating" className="text-green-400 hover:text-green-300 transition-colors">
              Reyting
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => onAuthClick?.("login")}
              className="text-green-400 hover:text-green-300 transition-colors"
            >
              Kirish
            </button>
            <button
              onClick={() => onAuthClick?.("register")}
              className="bg-green-500 text-black px-4 py-2 rounded-lg hover:bg-green-400 transition-colors font-medium"
            >
              Ro'yxatdan o'tish
            </button>
            <Link href="/profile" className="text-green-400 hover:text-green-300">
              <User className="w-6 h-6" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-green-400">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-green-500/20">
            <div className="flex flex-col space-y-4">
              <Link href="/courses" className="text-green-400 hover:text-green-300">
                Kurslar
              </Link>
              <Link href="/about" className="text-green-400 hover:text-green-300">
                Biz haqimizda
              </Link>
              <Link href="/contact" className="text-green-400 hover:text-green-300">
                Aloqa
              </Link>
              <Link href="/rating" className="text-green-400 hover:text-green-300">
                Reyting
              </Link>
              <div className="flex space-x-4 pt-4 border-t border-green-500/20">
                <button onClick={() => onAuthClick?.("login")} className="text-green-400 hover:text-green-300">
                  Kirish
                </button>
                <button
                  onClick={() => onAuthClick?.("register")}
                  className="bg-green-500 text-black px-4 py-2 rounded-lg hover:bg-green-400 transition-colors font-medium"
                >
                  Ro'yxatdan o'tish
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
