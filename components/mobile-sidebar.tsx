"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Sidebar from "./sidebar"

export default function MobileSidebar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden fixed top-4 left-4 z-50 bg-green-500/20 border border-green-500/50 rounded-lg p-2 text-green-400"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Mobile Sidebar Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/80" onClick={() => setIsOpen(false)} />
          <div className="relative">
            <Sidebar />
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-green-400 hover:text-green-300"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </>
  )
}
