"use client"

import { useState } from "react"
import Sidebar from "@/components/sidebar"
import { Trophy, Medal, Award, Filter, Search, TrendingUp } from "lucide-react"

const topUsers = [
  {
    id: 1,
    rank: 1,
    name: "Sardor Abdullayev",
    points: 4850,
    completedCourses: 12,
    avatar: "/placeholder.svg?height=60&width=60",
    badge: "Expert",
  },
  {
    id: 2,
    rank: 2,
    name: "Malika Karimova",
    points: 4720,
    completedCourses: 11,
    avatar: "/placeholder.svg?height=60&width=60",
    badge: "Expert",
  },
  {
    id: 3,
    rank: 3,
    name: "Bobur Rahimov",
    points: 4650,
    completedCourses: 10,
    avatar: "/placeholder.svg?height=60&width=60",
    badge: "Advanced",
  },
  {
    id: 4,
    rank: 4,
    name: "Nilufar Tosheva",
    points: 4580,
    completedCourses: 10,
    avatar: "/placeholder.svg?height=60&width=60",
    badge: "Advanced",
  },
  {
    id: 5,
    rank: 5,
    name: "Jasur Mirzayev",
    points: 4450,
    completedCourses: 9,
    avatar: "/placeholder.svg?height=60&width=60",
    badge: "Advanced",
  },
]

const allUsers = [
  ...topUsers,
  {
    id: 6,
    rank: 6,
    name: "Aziza Norova",
    points: 4320,
    completedCourses: 9,
    avatar: "/placeholder.svg?height=60&width=60",
    badge: "Advanced",
  },
  {
    id: 7,
    rank: 7,
    name: "Otabek Saidov",
    points: 4180,
    completedCourses: 8,
    avatar: "/placeholder.svg?height=60&width=60",
    badge: "Intermediate",
  },
  {
    id: 8,
    rank: 8,
    name: "Gulnoza Ahmadova",
    points: 4050,
    completedCourses: 8,
    avatar: "/placeholder.svg?height=60&width=60",
    badge: "Intermediate",
  },
  {
    id: 9,
    rank: 9,
    name: "Farrux Yusupov",
    points: 3920,
    completedCourses: 7,
    avatar: "/placeholder.svg?height=60&width=60",
    badge: "Intermediate",
  },
  {
    id: 10,
    rank: 10,
    name: "Shoira Nazarova",
    points: 3850,
    completedCourses: 7,
    avatar: "/placeholder.svg?height=60&width=60",
    badge: "Intermediate",
  },
]

const courseCategories = [
  "Barchasi",
  "Frontend Development",
  "Backend Development",
  "Mobile Development",
  "Full Stack",
  "UI/UX Design",
  "DevOps",
]

export default function RatingPage() {
  const [selectedCategory, setSelectedCategory] = useState("Barchasi")
  const [searchTerm, setSearchTerm] = useState("")
  const [showFilters, setShowFilters] = useState(false)

  const filteredUsers = allUsers.filter((user) => user.name.toLowerCase().includes(searchTerm.toLowerCase()))

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Trophy className="w-6 h-6 text-yellow-400" />
    if (rank === 2) return <Medal className="w-6 h-6 text-gray-300" />
    if (rank === 3) return <Award className="w-6 h-6 text-amber-600" />
    return <span className="text-green-400 font-bold">#{rank}</span>
  }

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case "Expert":
        return "bg-purple-500/20 text-purple-400 border-purple-500/30"
      case "Advanced":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30"
      case "Intermediate":
        return "bg-green-500/20 text-green-400 border-green-500/30"
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30"
    }
  }

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono">
      <Sidebar />
      <div className="ml-64 p-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-green-500 mb-4">Umumiy Reyting</h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Eng faol va muvaffaqiyatli o'quvchilar reytingi. O'z o'rningizni ko'ring va yuqoriga ko'tariling!
            </p>
          </div>

          {/* Search and Filters */}
          <div className="mb-8 space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="O'quvchi qidirish..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-gray-900 border border-green-500/50 rounded-lg text-white placeholder-gray-400 focus:border-green-500 focus:outline-none transition-colors"
                />
              </div>

              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center justify-center px-6 py-3 bg-gray-900 border border-green-500/50 rounded-lg text-green-500 hover:border-green-500 transition-colors"
              >
                <Filter className="w-5 h-5 mr-2" />
                Filtrlar
              </button>
            </div>

            {showFilters && (
              <div className="p-4 bg-gray-900 border border-green-500/50 rounded-lg">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-green-500 mb-2">Kurs kategoriyasi</label>
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full px-4 py-2 bg-gray-700 border border-green-500/50 rounded-lg text-white focus:border-green-500 focus:outline-none"
                    >
                      {courseCategories.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-green-500 mb-2">Vaqt oralig'i</label>
                    <select className="w-full px-4 py-2 bg-gray-700 border border-green-500/50 rounded-lg text-white focus:border-green-500 focus:outline-none">
                      <option value="all">Barcha vaqt</option>
                      <option value="month">Bu oy</option>
                      <option value="week">Bu hafta</option>
                    </select>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Top 3 Podium */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-green-500 mb-8 text-center">Top 3 O'quvchilar</h2>
            <div className="flex justify-center items-end space-x-8">
              {/* 2nd Place */}
              <div className="text-center">
                <div className="bg-gray-900 border border-green-500/50 rounded-2xl p-6 mb-4 transform hover:scale-105 transition-transform">
                  <img
                    src={topUsers[1].avatar || "/placeholder.svg"}
                    alt={topUsers[1].name}
                    className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-gray-300"
                  />
                  <Medal className="w-8 h-8 text-gray-300 mx-auto mb-2" />
                  <h3 className="text-lg font-bold text-green-500 mb-1">{topUsers[1].name}</h3>
                  <p className="text-gray-400 text-sm mb-2">{topUsers[1].points} ball</p>
                  <span className={`px-3 py-1 rounded-full text-xs border ${getBadgeColor(topUsers[1].badge)}`}>
                    {topUsers[1].badge}
                  </span>
                </div>
                <div className="bg-gray-300 h-24 w-32 rounded-t-lg flex items-center justify-center">
                  <span className="text-black font-bold text-xl">2</span>
                </div>
              </div>

              {/* 1st Place */}
              <div className="text-center">
                <div className="bg-gray-900 border border-green-500/50 rounded-2xl p-6 mb-4 transform hover:scale-105 transition-transform">
                  <img
                    src={topUsers[0].avatar || "/placeholder.svg"}
                    alt={topUsers[0].name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-yellow-400"
                  />
                  <Trophy className="w-10 h-10 text-yellow-400 mx-auto mb-2" />
                  <h3 className="text-xl font-bold text-green-500 mb-1">{topUsers[0].name}</h3>
                  <p className="text-gray-400 mb-2">{topUsers[0].points} ball</p>
                  <span className={`px-3 py-1 rounded-full text-xs border ${getBadgeColor(topUsers[0].badge)}`}>
                    {topUsers[0].badge}
                  </span>
                </div>
                <div className="bg-yellow-400 h-32 w-32 rounded-t-lg flex items-center justify-center">
                  <span className="text-black font-bold text-2xl">1</span>
                </div>
              </div>

              {/* 3rd Place */}
              <div className="text-center">
                <div className="bg-gray-900 border border-green-500/50 rounded-2xl p-6 mb-4 transform hover:scale-105 transition-transform">
                  <img
                    src={topUsers[2].avatar || "/placeholder.svg"}
                    alt={topUsers[2].name}
                    className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-amber-600"
                  />
                  <Award className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                  <h3 className="text-lg font-bold text-green-500 mb-1">{topUsers[2].name}</h3>
                  <p className="text-gray-400 text-sm mb-2">{topUsers[2].points} ball</p>
                  <span className={`px-3 py-1 rounded-full text-xs border ${getBadgeColor(topUsers[2].badge)}`}>
                    {topUsers[2].badge}
                  </span>
                </div>
                <div className="bg-amber-600 h-20 w-32 rounded-t-lg flex items-center justify-center">
                  <span className="text-black font-bold text-xl">3</span>
                </div>
              </div>
            </div>
          </div>

          {/* Full Ranking List */}
          <div className="bg-gray-900 border border-green-500/50 rounded-2xl overflow-hidden">
            <div className="p-6 border-b border-green-500/50">
              <h2 className="text-2xl font-bold text-green-500 flex items-center">
                <TrendingUp className="w-6 h-6 mr-2" />
                To'liq Reyting
              </h2>
            </div>

            <div className="divide-y divide-green-500/10">
              {filteredUsers.map((user, index) => (
                <div
                  key={user.id}
                  className={`p-6 hover:bg-gray-700/30 transition-colors ${user.rank <= 3 ? "bg-green-500/5" : ""}`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center justify-center w-12 h-12">{getRankIcon(user.rank)}</div>

                      <img
                        src={user.avatar || "/placeholder.svg"}
                        alt={user.name}
                        className="w-12 h-12 rounded-full border border-green-500/50"
                      />

                      <div>
                        <h3 className="text-lg font-semibold text-green-500">{user.name}</h3>
                        <p className="text-gray-400 text-sm">{user.completedCourses} ta kurs tugallangan</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-6">
                      <span className={`px-3 py-1 rounded-full text-xs border ${getBadgeColor(user.badge)}`}>
                        {user.badge}
                      </span>

                      <div className="text-right">
                        <div className="text-xl font-bold text-green-500">{user.points}</div>
                        <div className="text-gray-400 text-sm">ball</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {filteredUsers.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">Hech qanday o'quvchi topilmadi. Qidiruv shartlarini o'zgartiring.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
