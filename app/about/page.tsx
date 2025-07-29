"use client"

import Sidebar from "@/components/sidebar"
import { Users, Target, Award, Zap } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-green-400 font-mono">
      <Sidebar />
      <div className="ml-64 p-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-green-400 mb-4">BIZ HAQIMIZDA</h1>
            <p className="text-gray-300 text-lg">
              Zamonaviy texnologiyalarni o'rgatish va professional dasturchilar tayyorlash
            </p>
          </div>

          {/* Mission */}
          <div className="bg-gray-900 border border-green-500/30 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-green-400 mb-4">Bizning Missiyamiz</h2>
            <p className="text-gray-300 leading-relaxed">
              LearnHub - bu zamonaviy texnologiyalarni o'rganish uchun yaratilgan platforma. Biz har bir o'quvchiga
              professional dasturchi bo'lish yo'lida yordam beramiz. Bizning maqsadimiz - sifatli ta'lim berish va IT
              sohasida malakali mutaxassislar tayyorlash.
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="bg-gray-900 border border-green-500/30 rounded-lg p-6 text-center">
              <Users className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-green-400 mb-1">500+</div>
              <div className="text-gray-400 text-sm">O'quvchilar</div>
            </div>
            <div className="bg-gray-900 border border-green-500/30 rounded-lg p-6 text-center">
              <Target className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-green-400 mb-1">50+</div>
              <div className="text-gray-400 text-sm">Kurslar</div>
            </div>
            <div className="bg-gray-900 border border-green-500/30 rounded-lg p-6 text-center">
              <Award className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-green-400 mb-1">95%</div>
              <div className="text-gray-400 text-sm">Muvaffaqiyat</div>
            </div>
            <div className="bg-gray-900 border border-green-500/30 rounded-lg p-6 text-center">
              <Zap className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-green-400 mb-1">24/7</div>
              <div className="text-gray-400 text-sm">Yordam</div>
            </div>
          </div>

          {/* Team */}
          <div className="bg-gray-900 border border-green-500/30 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-green-400 mb-6">Bizning Jamoa</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: "Sardor Abdullayev", role: "Bosh dasturchi", experience: "8 yil tajriba" },
                { name: "Malika Karimova", role: "Frontend mutaxassis", experience: "6 yil tajriba" },
                { name: "Bobur Rahimov", role: "Backend mutaxassis", experience: "7 yil tajriba" },
              ].map((member, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-green-400 text-2xl font-bold">{member.name[0]}</span>
                  </div>
                  <h3 className="text-green-400 font-bold">{member.name}</h3>
                  <p className="text-gray-400 text-sm">{member.role}</p>
                  <p className="text-gray-500 text-xs">{member.experience}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
