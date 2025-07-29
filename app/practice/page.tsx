"use client"

import { useState } from "react"
import Sidebar from "@/components/sidebar"
import { Code, Terminal, Database, Shield, Zap, Play, CheckCircle } from "lucide-react"

const practiceModules = [
  {
    id: 1,
    title: "HTML/CSS Challenges",
    description: "Web sahifa yaratish va stilizatsiya qilish amaliyoti",
    icon: Code,
    difficulty: "Boshlang'ich",
    exercises: 15,
    completed: 12,
    category: "Frontend",
  },
  {
    id: 2,
    title: "JavaScript Algorithms",
    description: "Algoritmlar va ma'lumotlar tuzilmasi masalalari",
    icon: Terminal,
    difficulty: "O'rta",
    exercises: 25,
    completed: 8,
    category: "Programming",
  },
  {
    id: 3,
    title: "Database Queries",
    description: "SQL so'rovlari va ma'lumotlar bazasi boshqaruvi",
    icon: Database,
    difficulty: "O'rta",
    exercises: 20,
    completed: 5,
    category: "Backend",
  },
  {
    id: 4,
    title: "Security Testing",
    description: "Xavfsizlik testlari va zaifliklarni aniqlash",
    icon: Shield,
    difficulty: "Yuqori",
    exercises: 18,
    completed: 3,
    category: "Security",
  },
  {
    id: 5,
    title: "Performance Optimization",
    description: "Kod va tizim ishlashini optimallashtirish",
    icon: Zap,
    difficulty: "Yuqori",
    exercises: 12,
    completed: 0,
    category: "Optimization",
  },
]

const recentExercises = [
  {
    id: 1,
    title: "Create Responsive Navigation",
    module: "HTML/CSS Challenges",
    status: "completed",
    score: 95,
    time: "2 soat oldin",
  },
  {
    id: 2,
    title: "Binary Search Implementation",
    module: "JavaScript Algorithms",
    status: "in-progress",
    score: null,
    time: "Hozir",
  },
  {
    id: 3,
    title: "JOIN Operations",
    module: "Database Queries",
    status: "completed",
    score: 88,
    time: "1 kun oldin",
  },
]

export default function PracticePage() {
  const [selectedCategory, setSelectedCategory] = useState("Barchasi")

  const categories = ["Barchasi", "Frontend", "Backend", "Programming", "Security", "Optimization"]

  const filteredModules = practiceModules.filter(
    (module) => selectedCategory === "Barchasi" || module.category === selectedCategory,
  )

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Boshlang'ich":
        return "bg-green-500/20 text-green-400 border-green-500/30"
      case "O'rta":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
      case "Yuqori":
        return "bg-red-500/20 text-red-400 border-red-500/30"
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30"
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "text-green-400"
      case "in-progress":
        return "text-yellow-400"
      default:
        return "text-gray-400"
    }
  }

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono">
      <Sidebar />
      <div className="md:ml-64">
        <div className="p-4 md:p-6">
          {/* Header */}
          <div className="mb-6 md:mb-8">
            <h1 className="text-2xl md:text-4xl font-bold text-green-400 mb-2 md:mb-4">PRACTICE LAB</h1>
            <p className="text-gray-300 text-sm md:text-lg">
              Amaliy mashqlar orqali o'rgangan bilimlaringizni mustahkamlang
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mb-6 md:mb-8">
            <div className="bg-gray-800/50 border border-green-500/50 rounded-xl p-3 md:p-6 text-center">
              <Terminal className="w-6 h-6 md:w-8 md:h-8 text-green-400 mx-auto mb-2 md:mb-3" />
              <div className="text-lg md:text-2xl font-bold text-green-400 mb-1">90</div>
              <div className="text-gray-400 text-xs md:text-sm">Jami mashqlar</div>
            </div>
            <div className="bg-gray-800/50 border border-green-500/50 rounded-xl p-3 md:p-6 text-center">
              <CheckCircle className="w-6 h-6 md:w-8 md:h-8 text-green-400 mx-auto mb-2 md:mb-3" />
              <div className="text-lg md:text-2xl font-bold text-green-400 mb-1">28</div>
              <div className="text-gray-400 text-xs md:text-sm">Tugallangan</div>
            </div>
            <div className="bg-gray-800/50 border border-green-500/50 rounded-xl p-3 md:p-6 text-center">
              <Zap className="w-6 h-6 md:w-8 md:h-8 text-green-400 mx-auto mb-2 md:mb-3" />
              <div className="text-lg md:text-2xl font-bold text-green-400 mb-1">31%</div>
              <div className="text-gray-400 text-xs md:text-sm">Progress</div>
            </div>
            <div className="bg-gray-800/50 border border-green-500/50 rounded-xl p-3 md:p-6 text-center">
              <Shield className="w-6 h-6 md:w-8 md:h-8 text-green-400 mx-auto mb-2 md:mb-3" />
              <div className="text-lg md:text-2xl font-bold text-green-400 mb-1">92</div>
              <div className="text-gray-400 text-xs md:text-sm">O'rtacha ball</div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="mb-6 md:mb-8">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 md:px-4 py-1 md:py-2 rounded-lg border transition-colors font-mono text-xs md:text-sm ${
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

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Practice Modules */}
            <div className="lg:col-span-2">
              <h2 className="text-xl md:text-2xl font-bold text-green-400 mb-4 md:mb-6">Amaliy Modullar</h2>
              <div className="space-y-4 md:space-y-6">
                {filteredModules.map((module) => {
                  const IconComponent = module.icon
                  const progressPercentage = Math.round((module.completed / module.exercises) * 100)

                  return (
                    <div
                      key={module.id}
                      className="bg-gray-800/50 border border-green-500/50 rounded-2xl p-4 md:p-6 hover:border-green-500/40 transition-colors"
                    >
                      <div className="flex items-start justify-between mb-3 md:mb-4">
                        <div className="flex items-center space-x-3 md:space-x-4">
                          <div className="w-10 h-10 md:w-12 md:h-12 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                            <IconComponent className="w-5 h-5 md:w-6 md:h-6 text-green-400" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="text-lg md:text-xl font-bold text-green-400 mb-1 line-clamp-1">
                              {module.title}
                            </h3>
                            <p className="text-gray-300 text-xs md:text-sm line-clamp-2">{module.description}</p>
                          </div>
                        </div>
                        <span
                          className={`px-2 md:px-3 py-1 rounded-full text-xs border ${getDifficultyColor(module.difficulty)} flex-shrink-0 ml-2`}
                        >
                          {module.difficulty}
                        </span>
                      </div>

                      <div className="mb-3 md:mb-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-400 text-xs md:text-sm">
                            {module.completed}/{module.exercises} mashq tugallangan
                          </span>
                          <span className="text-green-400 text-xs md:text-sm">{progressPercentage}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div
                            className="bg-green-500 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${progressPercentage}%` }}
                          />
                        </div>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-gray-400 text-xs md:text-sm">{module.category}</span>
                        <button className="bg-green-500 text-black px-3 md:px-4 py-1 md:py-2 rounded-lg hover:bg-green-400 transition-colors font-medium flex items-center text-xs md:text-sm">
                          <Play className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                          Boshlash
                        </button>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Recent Activity */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-green-400 mb-4 md:mb-6">So'nggi Faoliyat</h2>
              <div className="bg-gray-800/50 border border-green-500/50 rounded-2xl p-4 md:p-6">
                <div className="space-y-4">
                  {recentExercises.map((exercise) => (
                    <div key={exercise.id} className="border-l-2 border-green-500/30 pl-3 md:pl-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-green-400 font-semibold text-xs md:text-sm line-clamp-1">
                          {exercise.title}
                        </h4>
                        <span className="text-gray-500 text-xs flex-shrink-0 ml-2">{exercise.time}</span>
                      </div>
                      <p className="text-gray-400 text-xs mb-2 line-clamp-1">{exercise.module}</p>
                      <div className="flex items-center justify-between">
                        <span className={`text-xs ${getStatusColor(exercise.status)}`}>
                          {exercise.status === "completed" ? "Tugallangan" : "Jarayonda"}
                        </span>
                        {exercise.score && (
                          <span className="text-green-400 text-xs font-bold">{exercise.score} ball</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 md:mt-6 pt-4 border-t border-green-500/20">
                  <button className="w-full bg-gray-700/50 border border-green-500/30 text-green-400 py-2 rounded-lg hover:bg-gray-700 transition-colors text-xs md:text-sm">
                    Barcha faoliyatni ko'rish
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
