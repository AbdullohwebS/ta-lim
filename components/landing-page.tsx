"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import CoursesSlider from "@/components/courses-slider"
import PopularCourses from "@/components/popular-courses"
import Footer from "@/components/footer"
import AuthModal from "@/components/auth-modal"

export default function LandingPage() {
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [authMode, setAuthMode] = useState<"login" | "register">("login")

  const handleAuthClick = (mode: "login" | "register") => {
    setAuthMode(mode)
    setShowAuthModal(true)
  }

  return (
    <div className="min-h-screen bg-black text-green-400">
      {/* Navigation */}
      <Navbar onAuthClick={handleAuthClick} />

      {/* Hero Section */}
      <HeroSection />

      {/* Course Modules Slider */}
      <CoursesSlider />

      {/* Popular Courses */}
      <PopularCourses />

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-400 mb-4">Bizning Natijalar</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Minglab o'quvchilar bizning platformamiz orqali muvaffaqiyatga erishdi
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-500/30 transition-colors">
                <span className="text-3xl font-bold text-green-400">5K+</span>
              </div>
              <h3 className="text-xl font-bold text-green-400 mb-2">O'quvchilar</h3>
              <p className="text-gray-400">Faol o'quvchilar soni</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-500/30 transition-colors">
                <span className="text-3xl font-bold text-green-400">100+</span>
              </div>
              <h3 className="text-xl font-bold text-green-400 mb-2">Kurslar</h3>
              <p className="text-gray-400">Turli yo'nalishlarda</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-500/30 transition-colors">
                <span className="text-3xl font-bold text-green-400">98%</span>
              </div>
              <h3 className="text-xl font-bold text-green-400 mb-2">Muvaffaqiyat</h3>
              <p className="text-gray-400">Kursni tugatish darajasi</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-500/30 transition-colors">
                <span className="text-3xl font-bold text-green-400">24/7</span>
              </div>
              <h3 className="text-xl font-bold text-green-400 mb-2">Yordam</h3>
              <p className="text-gray-400">Doimiy qo'llab-quvvatlash</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-400 mb-4">Nega LearnHub?</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Zamonaviy texnologiyalar va professional yondashuv bilan o'rganing
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 border border-green-500/20 rounded-2xl p-8 hover:border-green-500/40 transition-colors group">
              <div className="w-16 h-16 bg-green-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-500/30 transition-colors">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-green-400 mb-4">Amaliy Loyihalar</h3>
              <p className="text-gray-300 leading-relaxed">
                Har bir kursda real loyihalar ustida ishlaysiz va portfolio yaratib olasiz
              </p>
            </div>

            <div className="bg-gray-800/50 border border-green-500/20 rounded-2xl p-8 hover:border-green-500/40 transition-colors group">
              <div className="w-16 h-16 bg-green-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-500/30 transition-colors">
                <span className="text-2xl">👨‍🏫</span>
              </div>
              <h3 className="text-xl font-bold text-green-400 mb-4">Expert Mentorlar</h3>
              <p className="text-gray-300 leading-relaxed">
                Tajribali dasturchilar sizga shaxsiy mentor bo'lib yordam beradi
              </p>
            </div>

            <div className="bg-gray-800/50 border border-green-500/20 rounded-2xl p-8 hover:border-green-500/40 transition-colors group">
              <div className="w-16 h-16 bg-green-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-500/30 transition-colors">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-green-400 mb-4">Ish Joyiga Yordam</h3>
              <p className="text-gray-300 leading-relaxed">
                Kursni tugatgandan keyin ish topishda yordam beramiz va tavsiya qilamiz
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-400 mb-4">O'quvchilar Fikri</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Bizning platformamizda o'qigan o'quvchilarning fikrlari
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 border border-green-500/20 rounded-2xl p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-400 font-bold">A</span>
                </div>
                <div>
                  <h4 className="text-green-400 font-bold">Akmal Karimov</h4>
                  <p className="text-gray-400 text-sm">Frontend Developer</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                "LearnHub orqali React.js o'rgandim va hozir professional dasturchi sifatida ishlayman. Mentorlar juda
                yaxshi va amaliy loyihalar ko'p."
              </p>
              <div className="flex text-yellow-400 mt-4">⭐⭐⭐⭐⭐</div>
            </div>

            <div className="bg-gray-800/50 border border-green-500/20 rounded-2xl p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-400 font-bold">M</span>
                </div>
                <div>
                  <h4 className="text-green-400 font-bold">Malika Tosheva</h4>
                  <p className="text-gray-400 text-sm">Full Stack Developer</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                "Python va Django kursini tugatdim. Juda yaxshi tushuntirilgan va amaliy mashqlar ko'p. Hozir startup
                kompaniyada ishlayman."
              </p>
              <div className="flex text-yellow-400 mt-4">⭐⭐⭐⭐⭐</div>
            </div>

            <div className="bg-gray-800/50 border border-green-500/20 rounded-2xl p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-400 font-bold">B</span>
                </div>
                <div>
                  <h4 className="text-green-400 font-bold">Bobur Rahimov</h4>
                  <p className="text-gray-400 text-sm">Mobile Developer</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                "React Native kursi juda foydali bo'ldi. Hozir o'zim mobil ilovalar yaratyapman va yaxshi daromad
                qilyapman."
              </p>
              <div className="flex text-yellow-400 mt-4">⭐⭐⭐⭐⭐</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-green-500/10 to-transparent rounded-2xl p-12 border border-green-500/20">
            <h2 className="text-3xl md:text-4xl font-bold text-green-400 mb-6">Bugun O'rganishni Boshlang!</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Professional dasturchi bo'lish uchun birinchi qadamni tashlang. Minglab o'quvchi sizdan oldin
              muvaffaqiyatga erishdi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => handleAuthClick("register")}
                className="bg-green-500 text-black px-8 py-4 rounded-lg hover:bg-green-400 transition-colors font-medium text-lg"
              >
                Bepul Ro'yxatdan O'tish
              </button>
              <button
                onClick={() => handleAuthClick("login")}
                className="border border-green-500 text-green-400 px-8 py-4 rounded-lg hover:bg-green-500/10 transition-colors font-medium text-lg"
              >
                Hisobga Kirish
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Auth Modal */}
      {showAuthModal && (
        <AuthModal mode={authMode} onClose={() => setShowAuthModal(false)} onSwitchMode={(mode) => setAuthMode(mode)} />
      )}
    </div>
  )
}
