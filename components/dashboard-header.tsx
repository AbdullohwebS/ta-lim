"use client"

import { Wifi, Shield, User } from "lucide-react"

interface DashboardHeaderProps {
  onAuthClick?: (mode: "login" | "register") => void
}

export default function DashboardHeader({ onAuthClick }: DashboardHeaderProps) {
  return (
    <header className="bg-black border-b border-green-500/30 p-3 md:p-4 relative z-30">
      <div className="flex items-center justify-between">
        {/* Status Indicators */}
        <div className="flex items-center space-x-2 md:space-x-8 overflow-x-auto ml-16 md:ml-0">
          <div className="flex items-center space-x-1 md:space-x-2 flex-shrink-0">
            <div className="w-2 h-2 md:w-3 md:h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-400 text-xs md:text-sm font-mono">ONLINE</span>
          </div>
          <div className="flex items-center space-x-1 md:space-x-2 flex-shrink-0">
            <Shield className="w-3 h-3 md:w-4 md:h-4 text-green-400" />
            <span className="text-green-400 text-xs md:text-sm font-mono hidden sm:inline">FIREWALL</span>
          </div>
          <div className="flex items-center space-x-1 md:space-x-2 flex-shrink-0">
            <Wifi className="w-3 h-3 md:w-4 md:h-4 text-green-400" />
            <span className="text-green-400 text-xs md:text-sm font-mono hidden sm:inline">SECURE</span>
          </div>
        </div>

        {/* User Actions */}
        <div className="flex items-center space-x-2 md:space-x-4">
          <button
            onClick={() => onAuthClick?.("login")}
            className="flex items-center space-x-1 md:space-x-2 px-2 md:px-4 py-1 md:py-2 border border-green-500/30 rounded text-green-400 hover:bg-green-500/10 transition-colors font-mono text-xs md:text-sm"
          >
            <User className="w-3 h-3 md:w-4 md:h-4" />
            <span className="hidden sm:inline">LOGIN</span>
          </button>
          <div className="px-2 md:px-4 py-1 md:py-2 bg-green-500/20 border border-green-500/50 rounded text-green-400 font-mono text-xs md:text-sm">
            <span className="hidden sm:inline">GUEST PROTOCOL</span>
            <span className="sm:hidden">GUEST</span>
          </div>
        </div>
      </div>
    </header>
  )
}
