"use client"

import { useState } from "react"
import Sidebar from "@/components/sidebar"
import { User, BookOpen, Trophy, Target, Calendar, Award, TrendingUp } from "lucide-react"

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("overview")

  const userStats = {
    name: "Akmal Karimov",
    email: "akmal@example.com",
    joinDate: "2024-01-15",
    totalCourses: 5,
    completedCourses: 3,
    inProgressCourses: 2,
    totalPoints: 2450,
    currentRank: 15,
    totalUsers: 500,
  }

  const courses = [
    {
      id: 1,
      title: "React.js Complete Course",
      progress: 100,
      status: "completed",
      grade: 95,
      completedDate: "2024-03-15",
    },
    {
      id: 2,
      title: "Python Backend Development",
      progress: 75,
      status: "in-progress",
      currentModule: "Django Models",
    },
    {
      id: 3,
      title: "JavaScript Fundamentals",
      progress: 100,
      status: "completed",
      grade: 88,
      completedDate: "2024-02-20",
    },
    {
      id: 4,
      title: "Mobile App Development",
      progress: 45,
      status: "in-progress",
      currentModule: "React Native Navigation",
    },
    {
      id: 5,
      title: "HTML & CSS Basics",
      progress: 100,
      status: "completed",
      grade: 92,
      completedDate: "2024-01-30",
    },
  ]

  const achievements = [
    { id: 1, title: "Birinchi kurs", description: "Birinchi kursni tugatdingiz", icon: BookOpen, earned: true },
    { id: 2, title: "Tez o'rganuvchi", description: "1 oyda 3 ta kurs tugatdingiz", icon: TrendingUp, earned: true },
    { id: 3, title: "A'lo baholar", description: "Barcha kurslardan 90+ ball oldingiz", icon: Award, earned: true },
    { id: 4, title: "Top 20", description: "Umumiy reytingda top 20 ga kirdingiz", icon: Trophy, earned: true },
    { id: 5, title: "Doimiy o'quvchi", description: "100 kun ketma-ket o'qidingiz", icon: Calendar, earned: false },
    { id: 6, title: "Mentor", description: "Boshqa o'quvchilarga yordam berdingiz", icon: User, earned: false },
  ]

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono">
      <Sidebar />
      <div className="ml-64 p-6">
        <div className="max-w-7xl mx-auto">
          {/* Profile Header */}
          <div className="bg-gray-800/50 border border-green-500/50 rounded-2xl p-8 mb-8">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
              <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center">
                <User className="w-12 h-12 text-green-400" />
              </div>

              <div className="flex-1 text-center md:text-left">
                <h1 className="text-3xl font-bold text-green-400 mb-2">{userStats.name}</h1>
                <p className="text-gray-300 mb-4">{userStats.email}</p>
                <p className="text-gray-400">
                  A'zo bo'lgan sana: {new Date(userStats.joinDate).toLocaleDateString("uz-UZ")}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-green-400">{userStats.totalPoints}</div>
                  <div className="text-gray-400 text-sm">Umumiy ball</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-400">#{userStats.currentRank}</div>
                  <div className="text-gray-400 text-sm">Reyting</div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="bg-gray-800/50 border border-green-500/50 rounded-xl p-6 text-center">
              <BookOpen className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-green-400 mb-1">{userStats.totalCourses}</div>
              <div className="text-gray-400 text-sm">Jami kurslar</div>
            </div>

            <div className="bg-gray-800/50 border border-green-500/50 rounded-xl p-6 text-center">
              <Trophy className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-green-400 mb-1">{userStats.completedCourses}</div>
              <div className="text-gray-400 text-sm">Tugallangan</div>
            </div>

            <div className="bg-gray-800/50 border border-green-500/50 rounded-xl p-6 text-center">
              <Target className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-green-400 mb-1">{userStats.inProgressCourses}</div>
              <div className="text-gray-400 text-sm">Jarayonda</div>
            </div>

            <div className="bg-gray-800/50 border border-green-500/50 rounded-xl p-6 text-center">
              <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-green-400 mb-1">
                {Math.round((userStats.completedCourses / userStats.totalCourses) * 100)}%
              </div>
              <div className="text-gray-400 text-sm">Tugallanish</div>
            </div>
          </div>

          {/* Tabs */}
          <div className="mb-8">
            <div className="flex space-x-1 bg-gray-800/50 border border-green-500/50 rounded-lg p-1">
              <button
                onClick={() => setActiveTab("overview")}
                className={`px-6 py-3 rounded-md font-medium transition-colors ${
                  activeTab === "overview" ? "bg-green-500 text-black" : "text-green-400 hover:text-green-300"
                }`}
              >
                Umumiy ma'lumot
              </button>
              <button
                onClick={() => setActiveTab("courses")}
                className={`px-6 py-3 rounded-md font-medium transition-colors ${
                  activeTab === "courses" ? "bg-green-500 text-black" : "text-green-400 hover:text-green-300"
                }`}
              >
                Kurslarim
              </button>
              <button
                onClick={() => setActiveTab("achievements")}
                className={`px-6 py-3 rounded-md font-medium transition-colors ${
                  activeTab === "achievements" ? "bg-green-500 text-black" : "text-green-400 hover:text-green-300"
                }`}
              >
                Yutuqlar
              </button>
            </div>
          </div>

          {/* Tab Content */}
          {activeTab === "overview" && (
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Progress Chart */}
              <div className="bg-gray-800/50 border border-green-500/50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-green-400 mb-6">O'rganish jarayoni</h3>
                <div className="space-y-4">
                  {courses.map((course) => (
                    <div key={course.id} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 text-sm">{course.title}</span>
                        <span className="text-green-400 text-sm">{course.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-green-500 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${course.progress}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ranking */}
              <div className="bg-gray-800/50 border border-green-500/50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-green-400 mb-6">Reyting ma'lumotlari</h3>
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-green-400 mb-2">#{userStats.currentRank}</div>
                  <div className="text-gray-300">{userStats.totalUsers} ta o'quvchi ichida</div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-gray-700/50 rounded-lg">
                    <span className="text-gray-300">Umumiy ball</span>
                    <span className="text-green-400 font-semibold">{userStats.totalPoints}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-700/50 rounded-lg">
                    <span className="text-gray-300">Tugallangan kurslar</span>
                    <span className="text-green-400 font-semibold">{userStats.completedCourses}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-700/50 rounded-lg">
                    <span className="text-gray-300">O'rtacha baho</span>
                    <span className="text-green-400 font-semibold">
                      {Math.round(
                        courses.filter((c) => c.status === "completed").reduce((acc, c) => acc + (c.grade || 0), 0) /
                          courses.filter((c) => c.status === "completed").length,
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "courses" && (
            <div className="space-y-6">
              {courses.map((course) => (
                <div key={course.id} className="bg-gray-800/50 border border-green-500/50 rounded-2xl p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-green-400 mb-2">{course.title}</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <span
                          className={`px-3 py-1 rounded-full ${
                            course.status === "completed"
                              ? "bg-green-500/20 text-green-400"
                              : "bg-yellow-500/20 text-yellow-400"
                          }`}
                        >
                          {course.status === "completed" ? "Tugallangan" : "Jarayonda"}
                        </span>
                        {course.status === "completed" && course.completedDate && (
                          <span>Tugallangan: {new Date(course.completedDate).toLocaleDateString("uz-UZ")}</span>
                        )}
                        {course.status === "in-progress" && course.currentModule && (
                          <span>Joriy modul: {course.currentModule}</span>
                        )}
                      </div>
                    </div>

                    <div className="text-right mt-4 md:mt-0">
                      <div className="text-2xl font-bold text-green-400 mb-1">{course.progress}%</div>
                      {course.grade && <div className="text-gray-400">Baho: {course.grade}</div>}
                    </div>
                  </div>

                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div
                      className="bg-green-500 h-3 rounded-full transition-all duration-300"
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "achievements" && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((achievement) => {
                const IconComponent = achievement.icon
                return (
                  <div
                    key={achievement.id}
                    className={`bg-gray-800/50 border rounded-2xl p-6 text-center transition-all ${
                      achievement.earned ? "border-green-500/40 bg-green-500/5" : "border-gray-600/20 opacity-60"
                    }`}
                  >
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                        achievement.earned ? "bg-green-500/20 text-green-400" : "bg-gray-600/20 text-gray-500"
                      }`}
                    >
                      <IconComponent className="w-8 h-8" />
                    </div>

                    <h3 className={`text-lg font-bold mb-2 ${achievement.earned ? "text-green-400" : "text-gray-500"}`}>
                      {achievement.title}
                    </h3>

                    <p className={`text-sm ${achievement.earned ? "text-gray-300" : "text-gray-500"}`}>
                      {achievement.description}
                    </p>

                    {achievement.earned && (
                      <div className="mt-4">
                        <span className="bg-green-500 text-black px-3 py-1 rounded-full text-xs font-medium">
                          Qo'lga kiritilgan
                        </span>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          )}
          {/* System Metrics Progress Bars */}
          <div className="bg-gray-800/50 border border-green-500/50 rounded-2xl p-6 mt-8">
            <h3 className="text-xl font-bold text-green-400 mb-6">System Metrics</h3>
            <div className="space-y-4">
              {courses.map((course) => (
                <div key={course.id} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 text-sm">{course.title}</span>
                    <span className="text-green-400 text-sm">{course.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-900 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-green-500 h-full transition-all duration-300"
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
