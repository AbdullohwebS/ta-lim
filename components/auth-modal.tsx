"use client"

import type React from "react"
import { useState } from "react"
import { X, Eye, EyeOff, CheckCircle } from "lucide-react"

interface AuthModalProps {
  mode: "login" | "register"
  onClose: () => void
  onSwitchMode: (mode: "login" | "register") => void
  onSuccess?: () => void
}

export default function AuthModal({ mode, onClose, onSwitchMode, onSuccess }: AuthModalProps) {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    fullName: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Simulate successful authentication
    console.log("Auth data:", formData)

    // Show success message
    alert(mode === "login" ? "Muvaffaqiyatli kirildi!" : "Ro'yxatdan o'tish muvaffaqiyatli!")

    setIsLoading(false)

    // Call success callback
    if (onSuccess) {
      onSuccess()
    } else {
      onClose()
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gradient-to-b from-gray-900 to-black border border-green-500/50 rounded-2xl w-full max-w-md relative shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-green-400 transition-colors font-mono z-10"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-8 font-mono">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              {mode === "login" ? "🔐" : "👤"}
            </div>
            <h2 className="text-2xl font-bold text-green-400 mb-2">
              {mode === "login" ? "Tizimga Kirish" : "Ro'yxatdan O'tish"}
            </h2>
            <p className="text-gray-400">
              {mode === "login"
                ? "Hisobingizga kiring va o'rganishni davom eting"
                : "Yangi hisob yarating va o'rganishni boshlang"}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {mode === "register" && (
              <div>
                <label className="block text-sm font-medium text-green-400 mb-2">To'liq ism *</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-green-500/30 rounded-lg text-green-400 font-mono focus:border-green-500 focus:outline-none transition-colors"
                  placeholder="Ismingizni kiriting"
                  required
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-green-400 mb-2">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-800/50 border border-green-500/30 rounded-lg text-green-400 font-mono focus:border-green-500 focus:outline-none transition-colors"
                placeholder="email@example.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-green-400 mb-2">Parol *</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-green-500/30 rounded-lg text-green-400 font-mono focus:border-green-500 focus:outline-none transition-colors pr-12"
                  placeholder="Parolingizni kiriting"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-green-400 transition-colors font-mono"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {mode === "register" && (
              <div>
                <label className="block text-sm font-medium text-green-400 mb-2">Parolni tasdiqlash *</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-green-500/30 rounded-lg text-green-400 font-mono focus:border-green-500 focus:outline-none transition-colors"
                  placeholder="Parolni qayta kiriting"
                  required
                />
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-green-500 to-green-600 text-black py-3 rounded-lg hover:from-green-400 hover:to-green-500 transition-all duration-300 font-mono font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin mr-2"></div>
                  {mode === "login" ? "Kirish..." : "Ro'yxatdan o'tish..."}
                </>
              ) : (
                <>
                  <CheckCircle className="w-5 h-5 mr-2" />
                  {mode === "login" ? "Kirish" : "Ro'yxatdan O'tish"}
                </>
              )}
            </button>
          </form>

          <div className="mt-6 text-center font-mono">
            <p className="text-gray-400">
              {mode === "login" ? "Hisobingiz yo'qmi?" : "Hisobingiz bormi?"}
              <button
                onClick={() => onSwitchMode(mode === "login" ? "register" : "login")}
                className="text-green-400 hover:text-green-300 transition-colors ml-2 font-mono underline"
              >
                {mode === "login" ? "Ro'yxatdan o'tish" : "Kirish"}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
