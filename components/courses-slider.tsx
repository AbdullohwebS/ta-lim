"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Code, Database, Smartphone, Globe } from "lucide-react"

const modules = [
  {
    id: 1,
    title: "Frontend Development",
    description: "HTML, CSS, JavaScript, React va Vue.js texnologiyalarini o'rganing",
    icon: Code,
    lessons: 45,
    duration: "12 hafta",
    level: "Boshlang'ich",
  },
  {
    id: 2,
    title: "Backend Development",
    description: "Node.js, Python, PHP va ma'lumotlar bazasi bilan ishlash",
    icon: Database,
    lessons: 38,
    duration: "10 hafta",
    level: "O'rta",
  },
  {
    id: 3,
    title: "Mobile Development",
    description: "React Native va Flutter yordamida mobil ilovalar yaratish",
    icon: Smartphone,
    lessons: 32,
    duration: "8 hafta",
    level: "Yuqori",
  },
  {
    id: 4,
    title: "Full Stack Development",
    description: "To'liq web ilovalar yaratish - frontend va backend",
    icon: Globe,
    lessons: 60,
    duration: "16 hafta",
    level: "Professional",
  },
]

export default function CoursesSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % modules.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + modules.length) % modules.length)
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-400 mb-4">Kurs Modullari</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Har bir modul alohida yo'nalish bo'yicha chuqur bilim beradi
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {modules.map((module) => {
                const IconComponent = module.icon
                return (
                  <div key={module.id} className="w-full flex-shrink-0">
                    <div className="bg-gray-800/50 border border-green-500/20 rounded-2xl p-8 mx-4">
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                            <IconComponent className="w-6 h-6 text-green-400" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-green-400">{module.title}</h3>
                            <span className="text-sm text-gray-400">{module.level}</span>
                          </div>
                        </div>
                        <div className="text-right text-sm text-gray-400">
                          <div>{module.lessons} dars</div>
                          <div>{module.duration}</div>
                        </div>
                      </div>
                      <p className="text-gray-300 text-lg leading-relaxed">{module.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-green-500/20 hover:bg-green-500/30 rounded-full flex items-center justify-center transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-green-400" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-green-500/20 hover:bg-green-500/30 rounded-full flex items-center justify-center transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-green-400" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {modules.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-green-500" : "bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
