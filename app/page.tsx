"use client"

import { useState, useEffect } from "react"
import LandingPage from "@/components/landing-page"
import Sidebar from "@/components/sidebar"
import DashboardHeader from "@/components/dashboard-header"
import SystemMetrics from "@/components/system-metrics"
import SecurityAlerts from "@/components/security-alerts"
import TrainingModules from "@/components/training-modules"
import TerminalConsole from "@/components/terminal-console"
import AuthModal from "@/components/auth-modal"

export default function HomePage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [authMode, setAuthMode] = useState<"login" | "register">("login")
  const [isLoading, setIsLoading] = useState(true)

  // Check authentication status
  useEffect(() => {
    // Simulate checking authentication from localStorage or API
    const checkAuth = () => {
      const authStatus = localStorage.getItem("isAuthenticated")
      setIsAuthenticated(authStatus === "true")
      setIsLoading(false)
    }

    // Add a small delay to show loading state
    const timer = setTimeout(checkAuth, 1000)
    return () => clearTimeout(timer)
  }, [])

  const handleAuthClick = (mode: "login" | "register") => {
    setAuthMode(mode)
    setShowAuthModal(true)
  }

  const handleAuthSuccess = () => {
    setIsAuthenticated(true)
    setShowAuthModal(false)
    localStorage.setItem("isAuthenticated", "true")
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    localStorage.removeItem("isAuthenticated")
  }

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-black text-green-400 font-mono flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-green-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-green-400 animate-pulse">Tizim yuklanmoqda...</p>
        </div>
      </div>
    )
  }

  // Show landing page for non-authenticated users
  if (!isAuthenticated) {
    return <LandingPage />
  }

  // Show dashboard for authenticated users
  return (
    <div className="min-h-screen bg-black text-green-400 font-mono">
      <Sidebar />
      <div className="md:ml-64">
        <DashboardHeader onAuthClick={handleLogout} />
        <main className="p-4 md:p-6">
          <div className="mb-6 md:mb-8 mt-16 md:mt-0">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl md:text-4xl font-bold text-green-400 tracking-wider">LEARNING DASHBOARD</h1>
              <button
                onClick={handleLogout}
                className="bg-red-500/20 border border-red-500/50 text-red-400 px-4 py-2 rounded-lg hover:bg-red-500/30 transition-colors font-mono text-sm"
              >
                Chiqish
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
            <SystemMetrics />
            <SecurityAlerts />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
            <TrainingModules />
            <TerminalConsole />
          </div>
        </main>
      </div>
      {showAuthModal && (
        <AuthModal
          mode={authMode}
          onClose={() => setShowAuthModal(false)}
          onSwitchMode={(mode) => setAuthMode(mode)}
          onSuccess={handleAuthSuccess}
        />
      )}
    </div>
  )
}
