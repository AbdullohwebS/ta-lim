"use client"

import { RotateCcw, Maximize2 } from "lucide-react"

const alerts = [
  {
    type: "CRITICAL",
    time: "08:42:15",
    message: "Unauthorized access attempt detected from IP 192.168.1.45",
    color: "border-l-red-500 text-red-400",
  },
  {
    type: "WARNING",
    time: "07:15:32",
    message: "Outdated encryption protocol detected on network device",
    color: "border-l-yellow-500 text-yellow-400",
  },
  {
    type: "INFO",
    time: "06:30:11",
    message: "System scan complete - 3 potential vulnerabilities found",
    color: "border-l-blue-500 text-blue-400",
  },
  {
    type: "WARNING",
    time: "Yesterday",
    message: "Unusual traffic pattern detected on port 8080",
    color: "border-l-yellow-500 text-yellow-400",
  },
]

export default function SecurityAlerts() {
  return (
    <div className="bg-black border-2 border-green-500/50 rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-green-400 font-bold text-lg font-mono">SECURITY ALERTS</h2>
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
        {alerts.map((alert, index) => (
          <div key={index} className={`border-l-4 ${alert.color} pl-4 py-2`}>
            <div className="flex justify-between items-start mb-1">
              <span className={`font-bold text-xs font-mono ${alert.color.split(" ")[1]}`}>{alert.type}</span>
              <span className="text-green-600 text-xs font-mono">{alert.time}</span>
            </div>
            <p className="text-green-400 text-sm font-mono leading-relaxed">{alert.message}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
