"use client"

import { RotateCcw, Maximize2 } from "lucide-react"

const metrics = [
  { label: "SYSTEM SECURITY", value: 78, color: "bg-green-400" },
  { label: "ENCRYPTION LEVEL", value: 92, color: "bg-green-400" },
  { label: "NETWORK PROTECTION", value: 65, color: "bg-green-400" },
  { label: "INTRUSION DETECTION", value: 81, color: "bg-green-400" },
  { label: "COURSE COMPLETION", value: 43, color: "bg-green-400" },
]

export default function SystemMetrics() {
  return (
    <div className="bg-black border-2 border-green-500/50 rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-green-400 font-bold text-lg font-mono">SYSTEM METRICS</h2>
        <div className="flex space-x-2">
          <button className="text-green-400 hover:text-green-300">
            <RotateCcw className="w-4 h-4" />
          </button>
          <button className="text-green-400 hover:text-green-300">
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="space-y-6">
        {metrics.map((metric, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-green-400 font-mono text-sm">{metric.label}</span>
              <span className="text-green-400 font-mono text-sm">{metric.value}%</span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-2">
              <div
                className={`${metric.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                style={{ width: `${metric.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
