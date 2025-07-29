"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import Sidebar from "@/components/sidebar"
import { ChevronRight, Play, FileText, Download, MessageCircle, Clock, Users, Star } from "lucide-react"

const courseData = {
  1: {
    title: "React.js Complete Course",
    description: "Zamonaviy React.js texnologiyasini noldan o'rganing",
    modules: [
      {
        id: 1,
        title: "React Basics",
        lessons: [
          { id: 1, title: "Introduction to React", duration: "15 min", type: "video" },
          { id: 2, title: "JSX Syntax", duration: "20 min", type: "video" },
          { id: 3, title: "Components", duration: "25 min", type: "video" },
        ],
      },
      {
        id: 2,
        title: "State Management",
        lessons: [
          { id: 4, title: "useState Hook", duration: "18 min", type: "video" },
          { id: 5, title: "useEffect Hook", duration: "22 min", type: "video" },
          { id: 6, title: "Context API", duration: "30 min", type: "video" },
        ],
      },
      {
        id: 3,
        title: "Advanced Topics",
        lessons: [
          { id: 7, title: "Custom Hooks", duration: "25 min", type: "video" },
          { id: 8, title: "Performance Optimization", duration: "35 min", type: "video" },
          { id: 9, title: "Testing", duration: "40 min", type: "video" },
        ],
      },
    ],
  },
}

export default function CoursePage() {
  const params = useParams()
  const courseId = Number.parseInt(params.id as string)
  const course = courseData[courseId as keyof typeof courseData]
  const [selectedModule, setSelectedModule] = useState(1)
  const [selectedLesson, setSelectedLesson] = useState(1)

  if (!course) {
    return (
      <div className="min-h-screen bg-black text-green-400 font-mono">
        <Sidebar />
        <div className="ml-64 p-6">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-red-400">Kurs topilmadi</h1>
          </div>
        </div>
      </div>
    )
  }

  const currentModule = course.modules.find((m) => m.id === selectedModule)
  const currentLesson = currentModule?.lessons.find((l) => l.id === selectedLesson)

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono">
      <Sidebar />
      <div className="ml-64">
        {/* Breadcrumb */}
        <div className="bg-gray-900 border-b border-green-500/30 p-4">
          <div className="flex items-center space-x-2 text-sm">
            <span className="text-green-400">courses</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-green-400">frontend</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-400">react</span>
          </div>
        </div>

        <div className="flex">
          {/* Left Sidebar - Modules */}
          <div className="w-80 bg-gray-900 border-r border-green-500/30 h-screen overflow-y-auto">
            <div className="p-4 border-b border-green-500/30">
              <h2 className="text-lg font-bold text-green-400">{course.title}</h2>
              <p className="text-gray-400 text-sm mt-1">{course.description}</p>
            </div>

            <div className="p-4">
              {course.modules.map((module) => (
                <div key={module.id} className="mb-4">
                  <button
                    onClick={() => setSelectedModule(module.id)}
                    className={`w-full text-left p-3 rounded-lg border transition-colors ${
                      selectedModule === module.id
                        ? "bg-green-500/20 border-green-500/50 text-green-300"
                        : "bg-gray-800/50 border-green-500/20 text-green-400 hover:border-green-500/40"
                    }`}
                  >
                    <div className="font-semibold">{module.title}</div>
                    <div className="text-xs text-gray-400 mt-1">{module.lessons.length} dars</div>
                  </button>

                  {selectedModule === module.id && (
                    <div className="mt-2 ml-4 space-y-2">
                      {module.lessons.map((lesson) => (
                        <button
                          key={lesson.id}
                          onClick={() => setSelectedLesson(lesson.id)}
                          className={`w-full text-left p-2 rounded text-sm transition-colors flex items-center space-x-2 ${
                            selectedLesson === lesson.id
                              ? "bg-green-500/10 text-green-300"
                              : "text-gray-400 hover:text-green-400"
                          }`}
                        >
                          <Play className="w-3 h-3" />
                          <span className="flex-1">{lesson.title}</span>
                          <span className="text-xs">{lesson.duration}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-6">
            {currentLesson && (
              <div className="space-y-6">
                {/* Video Player */}
                <div className="bg-gray-900 border border-green-500/30 rounded-lg overflow-hidden">
                  <div className="aspect-video bg-gray-800 flex items-center justify-center">
                    <div className="text-center">
                      <Play className="w-16 h-16 text-green-400 mx-auto mb-4" />
                      <h3 className="text-xl font-bold text-green-400 mb-2">{currentLesson.title}</h3>
                      <p className="text-gray-400">Davomiyligi: {currentLesson.duration}</p>
                      <button className="mt-4 bg-green-500 text-black px-6 py-2 rounded-lg hover:bg-green-400 transition-colors">
                        Videoni boshlash
                      </button>
                    </div>
                  </div>
                </div>

                {/* Lesson Info */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-900 border border-green-500/30 rounded-lg p-6">
                    <h4 className="text-lg font-bold text-green-400 mb-4 flex items-center">
                      <FileText className="w-5 h-5 mr-2" />
                      Dars haqida
                    </h4>
                    <div className="space-y-3 text-gray-300">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-green-400" />
                        <span>Davomiyligi: {currentLesson.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4 text-green-400" />
                        <span>1,250 o'quvchi</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span>4.9 reyting</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-900 border border-green-500/30 rounded-lg p-6">
                    <h4 className="text-lg font-bold text-green-400 mb-4 flex items-center">
                      <Download className="w-5 h-5 mr-2" />
                      Materiallar
                    </h4>
                    <div className="space-y-2">
                      <button className="w-full text-left p-2 bg-gray-800/50 rounded text-green-400 hover:bg-gray-800 transition-colors">
                        📄 Dars konspekti.pdf
                      </button>
                      <button className="w-full text-left p-2 bg-gray-800/50 rounded text-green-400 hover:bg-gray-800 transition-colors">
                        💻 Kod namunalari.zip
                      </button>
                      <button className="w-full text-left p-2 bg-gray-800/50 rounded text-green-400 hover:bg-gray-800 transition-colors">
                        📝 Topshiriq.docx
                      </button>
                    </div>
                  </div>
                </div>

                {/* Comments Section */}
                <div className="bg-gray-900 border border-green-500/30 rounded-lg p-6">
                  <h4 className="text-lg font-bold text-green-400 mb-4 flex items-center">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Izohlar (12)
                  </h4>

                  {/* Add Comment */}
                  <div className="mb-6">
                    <textarea
                      placeholder="Izoh qoldiring..."
                      className="w-full p-3 bg-gray-800 border border-green-500/30 rounded-lg text-green-400 placeholder-gray-500 focus:border-green-500 focus:outline-none resize-none"
                      rows={3}
                    />
                    <button className="mt-2 bg-green-500 text-black px-4 py-2 rounded-lg hover:bg-green-400 transition-colors">
                      Izoh qoldirish
                    </button>
                  </div>

                  {/* Comments List */}
                  <div className="space-y-4">
                    {[1, 2, 3].map((comment) => (
                      <div key={comment} className="border-l-2 border-green-500/30 pl-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                            <span className="text-green-400 text-sm">A</span>
                          </div>
                          <span className="text-green-400 font-semibold">Akmal Karimov</span>
                          <span className="text-gray-500 text-sm">2 soat oldin</span>
                        </div>
                        <p className="text-gray-300">
                          Bu dars juda foydali bo'ldi. React componentlari haqida yangi narsalarni o'rgandim.
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
