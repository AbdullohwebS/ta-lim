"use client"

import type React from "react"

import { useState } from "react"
import { Loader2 } from "lucide-react"

interface EnhancedButtonProps {
  children: React.ReactNode
  onClick?: () => void | Promise<void>
  variant?: "primary" | "secondary" | "danger"
  size?: "sm" | "md" | "lg"
  disabled?: boolean
  loading?: boolean
  className?: string
}

export default function EnhancedButton({
  children,
  onClick,
  variant = "primary",
  size = "md",
  disabled = false,
  loading = false,
  className = "",
}: EnhancedButtonProps) {
  const [isLoading, setIsLoading] = useState(false)

  const handleClick = async () => {
    if (disabled || isLoading || loading) return

    if (onClick) {
      setIsLoading(true)
      try {
        await onClick()
      } finally {
        setIsLoading(false)
      }
    }
  }

  const variants = {
    primary:
      "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-black shadow-lg hover:shadow-green-500/25",
    secondary: "bg-gray-800 border border-green-500/50 text-green-400 hover:bg-green-500/10 hover:border-green-500",
    danger:
      "bg-gradient-to-r from-red-500 to-red-600 hover:from-red-400 hover:to-red-500 text-white shadow-lg hover:shadow-red-500/25",
  }

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  }

  const isButtonLoading = isLoading || loading

  return (
    <button
      onClick={handleClick}
      disabled={disabled || isButtonLoading}
      className={`
        ${variants[variant]}
        ${sizes[size]}
        font-medium rounded-lg transition-all duration-300 
        hover:scale-105 active:scale-95 
        disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
        relative overflow-hidden
        ${className}
      `}
    >
      {/* Loading overlay */}
      {isButtonLoading && (
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
          <Loader2 className="w-4 h-4 animate-spin" />
        </div>
      )}

      {/* Button content */}
      <span className={isButtonLoading ? "opacity-0" : "opacity-100"}>{children}</span>

      {/* Shine effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-1000"></div>
    </button>
  )
}
