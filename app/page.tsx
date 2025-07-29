"use client"

import { useState } from "react"
import Sidebar from "@/components/sidebar"
import DashboardHeader from "@/components/dashboard-header"
import SystemMetrics from "@/components/system-metrics"
import SecurityAlerts from "@/components/security-alerts"
import TrainingModules from "@/components/training-modules"
import TerminalConsole from "@/components/terminal-console"
import AuthModal from "@/components/auth-modal"

export default function HomePage() {
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [authMode, setAuthMode] = useState<"login" | "register">("login")

  const handleAuthClick = (mode: "login" | "register") => {
    setAuthMode(mode)
    setShowAuthModal(true)
  }

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono">
      <Sidebar />
      <div className="md:ml-64">
        <DashboardHeader onAuthClick={handleAuthClick} />
        <main className="p-4 md:p-6">
          <div className="mb-6 md:mb-8 mt-16 md:mt-0">
            <h1 className="text-2xl md:text-4xl font-bold text-green-400 text-center tracking-wider">
              LEARNING DASHBOARD
            </h1>
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
        <AuthModal mode={authMode} onClose={() => setShowAuthModal(false)} onSwitchMode={(mode) => setAuthMode(mode)} />
      )}
    </div>
  )
}
