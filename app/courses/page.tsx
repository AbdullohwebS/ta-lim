"use client"

import { useState, useEffect } from "react"
import Sidebar from "@/components/sidebar"
import LoadingSpinner from "@/components/loading-spinner"
import EnhancedButton from "@/components/enhanced-button"
import { Search, Filter, Star, Users, Clock, ChevronDown, Sparkles, TrendingUp } from "lucide-react"

const courses = [
  {
    id: 1,
    title: "React.js Complete Course",
    description: "Zamonaviy React.js texnologiyasini noldan o'rganing va professional web ilovalar yarating",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.9,
    students: 1250,
    duration: "8 hafta",
    price: "299,000",
    level: "Boshlang'ich",
    category: "Frontend",
    trending: true,
    new: false,
  },
  {
    id: 2,
    title: "Python Backend Development",
    description: "Django va FastAPI yordamida kuchli backend sistemalar yaratish",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.8,
    students: 890,
    duration: "10 hafta",
    price: "399,000",
    level: "O'rta",
    category: "Backend",
    trending: false,
    new: true,
  },
  {
    id: 3,
    title: "Mobile App Development",
    description: "React Native yordamida iOS va Android ilovalar yaratish",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.7,
    students: 650,
    duration: "12 hafta",
    price: "450,000",
    level: "O'rta",
    category: "Mobile",
    trending: true,
    new: false,
  },
  {
    id: 4,
    title: "Full Stack JavaScript",
    description: "MERN stack yordamida to'liq web ilovalar yaratish",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.9,
    students: 980,
    duration: "16 hafta",
    price: "599,000",
    level: "Yuqori",
    category: "Full Stack",
    trending: false,
    new: false,
  },
  {
    id: 5,
    title: "UI/UX Design Fundamentals",
    description: "Foydalanuvchi interfeysi va tajribasi dizayni asoslari",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.6,
    students: 720,
    duration: "6 hafta",
    price: "249,000",
    level: "Boshlang'ich",
    category: "Design",
    trending: false,
    new: true,
  },
  {
    id: 6,
    title: "DevOps va Cloud Computing",
    description: "AWS, Docker va Kubernetes bilan cloud infratuzilma",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.8,
    students: 540,
    duration: "14 hafta",
    price: "699,000",
    level: "Yuqori",
    category: "DevOps",
    trending: true,
    new: false,
  },
]

export default function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Barchasi")
  const [selectedLevel, setSelectedLevel] = useState("Barchasi")
  const [showFilters, setShowFilters] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [visibleCourses, setVisibleCourses] = useState(6)

  const categories = ["Barchasi", "Frontend", "Backend", "Mobile", "Full Stack", "Design", "DevOps"]
  const levels = ["Barchasi", "Boshlang'ich", "O'rta", "Yuqori"]

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "Barchasi" || course.category === selectedCategory
    const matchesLevel = selectedLevel === "Barchasi" || course.level === selectedLevel

    return matchesSearch && matchesCategory && matchesLevel
  })

  const loadMoreCourses = () => {
    setVisibleCourses((prev) => Math.min(prev + 6, filteredCourses.length))
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black text-green-400 font-mono">
        <Sidebar />
        <div className="md:ml-64 flex items-center justify-center min-h-screen">
          <div className="text-center">
            <LoadingSpinner size="lg" />
            <p className="mt-4 text-green-400 animate-pulse">Kurslar yuklanmoqda...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono">
      <Sidebar />
      <div className="md:ml-64">
        <div className="p-4 md:p-6">
          {/* Enhanced Header with gradient */}
          <div className="mb-6 md:mb-8 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-transparent to-green-400/10 rounded-2xl blur-xl"></div>
            <div className="relative bg-gray-900/50 backdrop-blur-sm border border-green-500/30 rounded-2xl p-6 md:p-8">
              <h1 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-green-400 via-green-300 to-green-500 bg-clip-text text-transparent mb-2 md:mb-4 font-mono">
                Barcha Kurslar
              </h1>
              <p className="text-gray-300 text-sm md:text-lg font-mono flex items-center">
                <Sparkles className="w-4 h-4 md:w-5 md:h-5 mr-2 text-yellow-400" />
                Professional dasturchi bo'lish uchun kerakli barcha kurslar
              </p>
            </div>
          </div>

          {/* Enhanced Search and Filters */}
          <div className="mb-6 md:mb-8 space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Enhanced Search */}
              <div className="relative flex-1 group">
                <Search className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-gray-400 group-focus-within:text-green-400 transition-colors" />
                <input
                  type="text"
                  placeholder="Kurs qidirish..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 md:pl-12 pr-4 py-3 md:py-4 bg-gray-800/50 backdrop-blur-sm border border-green-500/50 rounded-xl text-white placeholder-gray-400 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20 transition-all duration-300 font-mono text-sm md:text-base hover:bg-gray-800/70"
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              </div>

              {/* Enhanced Filter Toggle */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center justify-center px-4 md:px-6 py-3 md:py-4 bg-gray-800/50 backdrop-blur-sm border border-green-500/50 rounded-xl text-green-400 hover:border-green-500 hover:bg-green-500/10 transition-all duration-300 font-mono text-sm md:text-base group"
              >
                <Filter className="w-4 h-4 md:w-5 md:h-5 mr-2 group-hover:animate-pulse" />
                Filtrlar
                <ChevronDown
                  className={`w-4 h-4 md:w-5 md:h-5 ml-2 transition-transform duration-300 ${showFilters ? "rotate-180" : ""}`}
                />
              </button>
            </div>

            {/* Enhanced Filters */}
            {showFilters && (
              <div
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 md:p-6 bg-gray-800/30 backdrop-blur-sm border border-green-500/50 rounded-xl"
                style={{ animation: "slideDown 0.3s ease-out" }}
              >
                <div>
                  <label className="block text-sm font-medium text-green-400 mb-2 font-mono">Kategoriya</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-700/50 backdrop-blur-sm border border-green-500/50 rounded-lg text-white focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20 font-mono text-sm md:text-base transition-all duration-300"
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-green-400 mb-2 font-mono">Daraja</label>
                  <select
                    value={selectedLevel}
                    onChange={(e) => setSelectedLevel(e.target.value)}
                    className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-700/50 backdrop-blur-sm border border-green-500/50 rounded-lg text-white focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20 font-mono text-sm md:text-base transition-all duration-300"
                  >
                    {levels.map((level) => (
                      <option key={level} value={level}>
                        {level}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            )}
          </div>

          {/* Results Count with animation */}
          <div className="mb-4 md:mb-6">
            <p className="text-gray-400 font-mono text-sm md:text-base flex items-center">
              <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              {filteredCourses.length} ta kurs topildi
            </p>
          </div>

          {/* Enhanced Courses Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {filteredCourses.slice(0, visibleCourses).map((course, index) => (
              <div
                key={course.id}
                className="group bg-gray-800/30 backdrop-blur-sm border border-green-500/30 rounded-2xl overflow-hidden hover:border-green-500/60 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20 relative"
                style={{
                  animation: `slideUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                {/* Trending/New badges */}
                {course.trending && (
                  <div className="absolute top-2 left-2 z-10 bg-gradient-to-r from-orange-500 to-red-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    TRENDING
                  </div>
                )}
                {course.new && (
                  <div className="absolute top-2 right-2 z-10 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center">
                    <Sparkles className="w-3 h-3 mr-1" />
                    NEW
                  </div>
                )}

                <div className="relative overflow-hidden">
                  <img
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    className="w-full h-32 sm:h-40 md:h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Level badge */}
                  <div className="absolute bottom-2 left-2 bg-green-500/90 backdrop-blur-sm text-black px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium font-mono">
                    {course.level}
                  </div>

                  {/* Category badge */}
                  <div className="absolute bottom-2 right-2 bg-black/70 backdrop-blur-sm text-green-400 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-mono border border-green-500/30">
                    {course.category}
                  </div>
                </div>

                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-green-400 mb-2 group-hover:text-green-300 transition-colors font-mono line-clamp-2 group-hover:animate-pulse">
                    {course.title}
                  </h3>
                  <p className="text-gray-300 mb-3 md:mb-4 text-xs md:text-sm leading-relaxed font-mono line-clamp-3">
                    {course.description}
                  </p>

                  <div className="flex items-center justify-between mb-3 md:mb-4">
                    <div className="flex items-center space-x-2 md:space-x-4 text-xs md:text-sm text-gray-400 font-mono">
                      <div className="flex items-center group/rating">
                        <Star className="w-3 h-3 md:w-4 md:h-4 text-yellow-400 mr-1 group-hover/rating:animate-spin" />
                        {course.rating}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                        <span className="hidden sm:inline">{course.students}</span>
                        <span className="sm:hidden">{Math.round(course.students / 100)}k</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                        <span className="hidden sm:inline">{course.duration}</span>
                        <span className="sm:hidden">{course.duration.split(" ")[0]}h</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-lg md:text-xl font-bold bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent font-mono">
                      {course.price} so'm
                    </div>
                    <EnhancedButton
                      onClick={() => (window.location.href = `/course/${course.id}`)}
                      size="sm"
                      className="text-xs md:text-sm"
                    >
                      Ko'rish
                    </EnhancedButton>
                  </div>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500/10 via-transparent to-green-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {visibleCourses < filteredCourses.length && (
            <div className="text-center mt-8">
              <EnhancedButton onClick={loadMoreCourses} variant="secondary">
                Ko'proq yuklash ({filteredCourses.length - visibleCourses} ta qoldi)
              </EnhancedButton>
            </div>
          )}

          {filteredCourses.length === 0 && (
            <div className="text-center py-8 md:py-12">
              <div className="bg-gray-800/30 backdrop-blur-sm border border-green-500/30 rounded-2xl p-8 max-w-md mx-auto">
                <div className="w-16 h-16 bg-gray-700/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <p className="text-gray-400 text-base md:text-lg font-mono mb-2">Hech qanday kurs topilmadi</p>
                <p className="text-gray-500 text-sm">Qidiruv shartlarini o'zgartiring yoki filtrlarni tozalang</p>
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  )
}
