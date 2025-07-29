"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect, useRef } from "react"
import {
  LayoutDashboard,
  BookOpen,
  FlaskConical,
  Trophy,
  Users,
  Wrench,
  Settings,
  HelpCircle,
  Menu,
  X,
  ChevronRight,
} from "lucide-react"

const menuItems = [
  { icon: LayoutDashboard, label: "dashboard", href: "/", color: "text-blue-400" },
  { icon: BookOpen, label: "training_modules", href: "/courses", color: "text-purple-400" },
  { icon: FlaskConical, label: "practice_lab", href: "/practice", color: "text-orange-400" },
  { icon: Trophy, label: "achievements", href: "/profile", color: "text-yellow-400" },
  { icon: Users, label: "community", href: "/rating", color: "text-pink-400" },
  { icon: Wrench, label: "tools", href: "/tools", color: "text-cyan-400" },
  { icon: Settings, label: "settings", href: "/settings", color: "text-gray-400" },
  { icon: HelpCircle, label: "help", href: "/contact", color: "text-red-400" },
]

export default function Sidebar() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const sidebarRef = useRef<HTMLDivElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)

  // Animation delay for menu items
  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMobileMenuOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node) &&
        !(event.target as Element).closest("[data-menu-button]")
      ) {
        setIsMobileMenuOpen(false)
      }
    }

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside)
      document.addEventListener("keydown", handleEscapeKey)
      document.addEventListener("touchstart", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("keydown", handleEscapeKey)
      document.removeEventListener("touchstart", handleClickOutside)
    }
  }, [isMobileMenuOpen])

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      {/* Mobile Menu Button with pulse animation */}
      <button
        data-menu-button
        onClick={() => setIsMobileMenuOpen(true)}
        className="md:hidden fixed top-4 left-4 z-50 bg-gradient-to-r from-green-500/20 to-green-400/20 border border-green-500/50 rounded-xl p-3 text-green-400 hover:bg-green-500/30 transition-all duration-300 hover:scale-110 active:scale-95 shadow-lg hover:shadow-green-500/25"
        style={{
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
        }}
        aria-label="Menu ochish"
      >
        <Menu className="w-6 h-6" />
        <div className="absolute inset-0 rounded-xl bg-green-500/10 animate-pulse"></div>
      </button>

      {/* Mobile Overlay with blur effect */}
      {isMobileMenuOpen && (
        <div
          ref={overlayRef}
          className="md:hidden fixed inset-0 bg-black/80 backdrop-blur-sm z-40 transition-all duration-300"
          onClick={closeMobileMenu}
          onTouchStart={closeMobileMenu}
          style={{
            animation: "fadeIn 0.3s ease-out",
          }}
          aria-label="Menu yopish"
        />
      )}

      {/* Sidebar with enhanced styling */}
      <div
        ref={sidebarRef}
        className={`fixed left-0 top-0 h-full w-80 bg-gradient-to-b from-gray-900 via-black to-gray-900 border-r border-green-500/30 z-50 transform transition-all duration-500 ease-out shadow-2xl ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:w-64`}
        style={{
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          boxShadow: "0 0 50px rgba(0, 255, 0, 0.1)",
        }}
      >
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-transparent to-green-400/20"></div>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>
        </div>

        {/* Mobile Close Button with animation */}
        <button
          onClick={closeMobileMenu}
          className="md:hidden absolute top-4 right-4 text-green-400 hover:text-green-300 transition-all duration-300 hover:rotate-90 hover:scale-110 active:scale-95 p-2 rounded-lg hover:bg-green-500/20 z-10"
          aria-label="Menu yopish"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Logo with glow effect */}
        <div className="p-6 border-b border-green-500/30 relative">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-black font-bold text-xl">L</span>
              </div>
              <div className="absolute inset-0 bg-green-500 rounded-lg blur-md opacity-30 animate-pulse"></div>
            </div>
            <div>
              <div className="text-green-400 font-bold text-xl bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">
                LearnHub
              </div>
              <div className="text-green-600 text-xs font-mono tracking-wider">learning_platform</div>
            </div>
          </div>
        </div>

        {/* Menu Items with staggered animation */}
        <nav className="p-4 relative overflow-y-auto flex-1">
          <ul className="space-y-2">
            {menuItems.map((item, index) => {
              const IconComponent = item.icon
              const isActive = pathname === item.href
              return (
                <li
                  key={item.label}
                  style={{
                    animation: isLoaded ? `slideInLeft 0.6s ease-out ${index * 0.1}s both` : "none",
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={closeMobileMenu}
                    className={`group flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 relative overflow-hidden ${
                      isActive
                        ? "bg-gradient-to-r from-green-500/20 to-green-400/20 text-green-300 border-l-4 border-green-400 shadow-lg"
                        : "text-green-400 hover:bg-gradient-to-r hover:from-green-500/10 hover:to-green-400/10 hover:text-green-300 hover:translate-x-2"
                    }`}
                  >
                    {/* Background glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <IconComponent
                      className={`w-5 h-5 flex-shrink-0 transition-all duration-300 ${isActive ? item.color : "group-hover:" + item.color} ${isActive ? "animate-pulse" : ""}`}
                    />
                    <span className="font-mono text-sm font-medium tracking-wide">$ {item.label}</span>

                    {/* Arrow indicator for active item */}
                    {isActive && <ChevronRight className="w-4 h-4 ml-auto text-green-400 animate-bounce" />}

                    {/* Hover effect line */}
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-green-300 group-hover:w-full transition-all duration-500"></div>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Bottom decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  )
}
