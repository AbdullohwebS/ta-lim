"use client"

import { useState } from "react"
import Sidebar from "@/components/sidebar"
import { Code, Terminal, Database, FileText, Calculator, Palette, Globe, Download } from "lucide-react"

const tools = [
  {
    id: 1,
    title: "Code Editor",
    description: "Online kod muharriri - HTML, CSS, JavaScript",
    icon: Code,
    category: "Development",
    status: "active",
    url: "#",
  },
  {
    id: 2,
    title: "Terminal Simulator",
    description: "Linux buyruqlarini o'rganish uchun terminal simulyatori",
    icon: Terminal,
    category: "System",
    status: "active",
    url: "#",
  },
  {
    id: 3,
    title: "Database Designer",
    description: "Ma'lumotlar bazasi sxemasini yaratish vositasi",
    icon: Database,
    category: "Database",
    status: "beta",
    url: "#",
  },
  {
    id: 4,
    title: "API Tester",
    description: "REST API so'rovlarini test qilish vositasi",
    icon: Globe,
    category: "Development",
    status: "active",
    url: "#",
  },
  {
    id: 5,
    title: "Color Palette Generator",
    description: "Web dizayn uchun rang palitrasini yaratish",
    icon: Palette,
    category: "Design",
    status: "active",
    url: "#",
  },
  {
    id: 6,
    title: "Algorithm Visualizer",
    description: "Algoritmlarni vizual ko'rsatish vositasi",
    icon: Calculator,
    category: "Education",
    status: "coming-soon",
    url: "#",
  },
  {
    id: 7,
    title: "Code Formatter",
    description: "Kodni formatlash va tozalash vositasi",
    icon: FileText,
    category: "Development",
    status: "active",
    url: "#",
  },
  {
    id: 8,
    title: "Performance Monitor",
    description: "Web sahifa ishlashini tahlil qilish",
    icon: Download,
    category: "Performance",
    status: "beta",
    url: "#",
  },
]

const categories = ["Barchasi", "Development", "System", "Database", "Design", "Education", "Performance"]

export default function ToolsPage() {
  const [selectedCategory, setSelectedCategory] = useState("Barchasi")
  const [selectedTool, setSelectedTool] = useState<number | null>(null)

  const filteredTools = tools.filter((tool) => selectedCategory === "Barchasi" || tool.category === selectedCategory)

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-500/20 text-green-400 border-green-500/30"
      case "beta":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
      case "coming-soon":
        return "bg-gray-500/20 text-gray-400 border-gray-500/30"
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "active":
        return "Faol"
      case "beta":
        return "Beta"
      case "coming-soon":
        return "Tez orada"
      default:
        return "Noma'lum"
    }
  }

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono">
      <Sidebar />
      <div className="ml-64 p-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-green-400 mb-4">DEVELOPMENT TOOLS</h1>
            <p className="text-gray-300 text-lg">Dasturlash va web development uchun foydali vositalar to'plami</p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="bg-gray-800/50 border border-green-500/50 rounded-xl p-6 text-center">
              <Code className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-green-400 mb-1">{tools.length}</div>
              <div className="text-gray-400 text-sm">Jami vositalar</div>
            </div>
            <div className="bg-gray-800/50 border border-green-500/50 rounded-xl p-6 text-center">
              <Terminal className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-green-400 mb-1">
                {tools.filter((t) => t.status === "active").length}
              </div>
              <div className="text-gray-400 text-sm">Faol vositalar</div>
            </div>
            <div className="bg-gray-800/50 border border-green-500/50 rounded-xl p-6 text-center">
              <Database className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-green-400 mb-1">{categories.length - 1}</div>
              <div className="text-gray-400 text-sm">Kategoriyalar</div>
            </div>
            <div className="bg-gray-800/50 border border-green-500/50 rounded-xl p-6 text-center">
              <Globe className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-green-400 mb-1">24/7</div>
              <div className="text-gray-400 text-sm">Mavjudlik</div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg border transition-colors font-mono ${
                    selectedCategory === category
                      ? "bg-green-500/20 border-green-500/50 text-green-300"
                      : "bg-gray-800/50 border-green-500/20 text-green-400 hover:border-green-500/40"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Tools Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTools.map((tool) => {
              const IconComponent = tool.icon
              return (
                <div
                  key={tool.id}
                  className="bg-gray-800/50 border border-green-500/50 rounded-2xl p-6 hover:border-green-500/40 transition-all duration-300 hover:transform hover:scale-105 group cursor-pointer"
                  onClick={() => setSelectedTool(tool.id)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-green-400" />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs border ${getStatusColor(tool.status)}`}>
                      {getStatusText(tool.status)}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-green-400 mb-2 group-hover:text-green-300 transition-colors">
                    {tool.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">{tool.description}</p>

                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">{tool.category}</span>
                    <button
                      className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                        tool.status === "active"
                          ? "bg-green-500 text-black hover:bg-green-400"
                          : tool.status === "beta"
                            ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                            : "bg-gray-500/20 text-gray-400 border border-gray-500/30 cursor-not-allowed"
                      }`}
                      disabled={tool.status === "coming-soon"}
                    >
                      {tool.status === "active" ? "Ochish" : tool.status === "beta" ? "Beta test" : "Tez orada"}
                    </button>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Tool Modal/Details */}
          {selectedTool && (
            <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <div className="bg-gray-800 border border-green-500/50 rounded-2xl w-full max-w-2xl relative">
                <button
                  onClick={() => setSelectedTool(null)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-green-400 transition-colors"
                >
                  ✕
                </button>

                <div className="p-8">
                  {(() => {
                    const tool = tools.find((t) => t.id === selectedTool)
                    if (!tool) return null
                    const IconComponent = tool.icon

                    return (
                      <>
                        <div className="flex items-center space-x-4 mb-6">
                          <div className="w-16 h-16 bg-green-500/20 rounded-lg flex items-center justify-center">
                            <IconComponent className="w-8 h-8 text-green-400" />
                          </div>
                          <div>
                            <h2 className="text-2xl font-bold text-green-400">{tool.title}</h2>
                            <p className="text-gray-400">{tool.category}</p>
                          </div>
                        </div>

                        <p className="text-gray-300 mb-6 leading-relaxed">{tool.description}</p>

                        <div className="bg-gray-700/30 rounded-lg p-4 mb-6">
                          <h3 className="text-green-400 font-semibold mb-2">Xususiyatlar:</h3>
                          <ul className="text-gray-300 text-sm space-y-1">
                            <li>• Onlayn ishlash imkoniyati</li>
                            <li>• Fayllarni saqlash va yuklash</li>
                            <li>• Real vaqtda natijalarni ko'rish</li>
                            <li>• Kod namunalari va shablonlar</li>
                          </ul>
                        </div>

                        <div className="flex space-x-4">
                          <button
                            className={`flex-1 py-3 rounded-lg font-medium transition-colors ${
                              tool.status === "active"
                                ? "bg-green-500 text-black hover:bg-green-400"
                                : "bg-gray-500/20 text-gray-400 cursor-not-allowed"
                            }`}
                            disabled={tool.status !== "active"}
                          >
                            Vositani ishga tushirish
                          </button>
                          <button
                            onClick={() => setSelectedTool(null)}
                            className="px-6 py-3 border border-green-500/30 text-green-400 rounded-lg hover:bg-green-500/10 transition-colors"
                          >
                            Yopish
                          </button>
                        </div>
                      </>
                    )
                  })()}
                </div>
              </div>
            </div>
          )}

          {filteredTools.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">Tanlangan kategoriyada vositalar topilmadi.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
