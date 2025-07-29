"use client"

import { RotateCcw, Maximize2, Lock, Clock, BarChart3 } from "lucide-react"

const modules = [
  {
    title: "Password Cracking Fundamentals",
    duration: "45 min",
    level: "Beginner",
    status: "COMPLETED",
    statusColor: "text-green-400 bg-green-500/20",
  },
  {
    title: "Network Vulnerability Assessment",
    duration: "60 min",
    level: "Intermediate",
    status: "IN PROGRESS",
    statusColor: "text-yellow-400 bg-yellow-500/20",
  },
]

export default function TrainingModules() {
  return (
    <div className="bg-black border-2 border-green-500/50 rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-green-400 font-bold text-lg font-mono">TRAINING MODULES</h2>
        <div className="flex space-x-2">
          <button className="text-green-400 hover:text-green-300">
            <RotateCcw className="w-4 h-4" />
          </button>
          <button className="text-green-400 hover:text-green-300">
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {modules.map((module, index) => (
          <div
            key={index}
            className="border border-green-500/30 rounded-lg p-4 hover:border-green-500/50 transition-colors"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center space-x-2">
                <Lock className="w-4 h-4 text-green-400" />
                <h3 className="text-green-400 font-mono text-sm font-semibold">{module.title}</h3>
              </div>
              <span className={`px-2 py-1 rounded text-xs font-mono ${module.statusColor}`}>{module.status}</span>
            </div>

            <div className="flex items-center space-x-4 text-xs text-green-600 font-mono">
              <div className="flex items-center space-x-1">
                <Clock className="w-3 h-3" />
                <span>{module.duration}</span>
              </div>
              <div className="flex items-center space-x-1">
                <BarChart3 className="w-3 h-3" />
                <span>{module.level}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
