"use client"

import { useState, useEffect } from "react"
import { RotateCcw, Maximize2 } from "lucide-react"

const terminalCommands = [
  { command: "root@learnhub:~# connect --secure", delay: 1000 },
  { command: "  Establishing secure connection...", delay: 2000 },
  { command: "  Connection established. Welcome to LearnHub Terminal.", delay: 3000 },
  { command: "", delay: 3500 },
  { command: "root@learnhub:~# scan --network", delay: 4000 },
  { command: "  Scanning network for vulnerabilities...", delay: 5000 },
  { command: "  Scan complete. 3 potential vulnerabilities found.", delay: 6000 },
  { command: "", delay: 6500 },
  { command: "root@learnhub:~# status --courses", delay: 7000 },
  { command: "  Loading course progress...", delay: 8000 },
  { command: "  Frontend Development: 75% complete", delay: 8500 },
  { command: "  Backend Security: 45% complete", delay: 9000 },
  { command: "  Network Analysis: 90% complete", delay: 9500 },
  { command: "", delay: 10000 },
  { command: "root@learnhub:~# ", delay: 10500 },
]

export default function TerminalConsole() {
  const [displayedLines, setDisplayedLines] = useState<string[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    if (currentIndex < terminalCommands.length) {
      const timer = setTimeout(() => {
        setDisplayedLines((prev) => [...prev, terminalCommands[currentIndex].command])
        setCurrentIndex((prev) => prev + 1)
      }, terminalCommands[currentIndex].delay)

      return () => clearTimeout(timer)
    }
  }, [currentIndex])

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    return () => clearInterval(cursorTimer)
  }, [])

  const resetTerminal = () => {
    setDisplayedLines([])
    setCurrentIndex(0)
  }

  return (
    <div className="bg-black border-2 border-green-500/50 rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-green-400 font-bold text-lg font-mono">TERMINAL CONSOLE</h2>
        <div className="flex space-x-2">
          <button onClick={resetTerminal} className="text-green-400 hover:text-green-300">
            <RotateCcw className="w-4 h-4" />
          </button>
          <button className="text-green-400 hover:text-green-300">
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="bg-gray-900/50 rounded-lg p-4 h-64 overflow-y-auto font-mono text-sm">
        {displayedLines.map((line, index) => (
          <div key={index} className="mb-1">
            {line.startsWith("root@") ? (
              <span className="text-blue-400">{line}</span>
            ) : line.startsWith("  ") ? (
              <span className="text-green-400">{line}</span>
            ) : (
              <span className="text-gray-400">{line}</span>
            )}
          </div>
        ))}
        {currentIndex >= terminalCommands.length && (
          <div className="text-green-400 flex items-center">
            root@learnhub:~#
            <span className={`bg-green-400 w-2 h-4 ml-1 ${showCursor ? "opacity-100" : "opacity-0"}`}></span>
          </div>
        )}
      </div>
    </div>
  )
}
