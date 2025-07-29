"use client"

import { useState } from "react"

import type React from "react"
import Sidebar from "@/components/sidebar"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    email: "",
    title: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Contact form submitted:", formData)
    // Handle form submission
    alert("Xabaringiz yuborildi!")
    setFormData({ email: "", title: "", subject: "", message: "" })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono">
      <Sidebar />
      <div className="ml-64 p-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-green-400 mb-4">Biz bilan bog'laning</h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Savollaringiz bormi? Yordam kerakmi? Biz bilan bog'laning va tez orada javob oling.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-green-400 mb-6">Aloqa ma'lumotlari</h2>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-green-400 mb-1">Email</h3>
                      <p className="text-gray-300">info@learnhub.uz</p>
                      <p className="text-gray-300">support@learnhub.uz</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-green-400 mb-1">Telefon</h3>
                      <p className="text-gray-300">+998 90 123 45 67</p>
                      <p className="text-gray-300">+998 91 234 56 78</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-green-400 mb-1">Manzil</h3>
                      <p className="text-gray-300">Toshkent shahar, Yunusobod tumani</p>
                      <p className="text-gray-300">IT Park, 2-qavat</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/50 border border-green-500/50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-green-400 mb-4">Ish vaqti</h3>
                <div className="space-y-2 text-gray-300">
                  <div className="flex justify-between">
                    <span>Dushanba - Juma:</span>
                    <span>9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shanba:</span>
                    <span>10:00 - 16:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Yakshanba:</span>
                    <span>Dam olish</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-800/50 border border-green-500/50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-green-400 mb-6">Xabar yuborish</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-green-400 mb-2">Email manzil *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-green-500/50 rounded-lg text-white placeholder-gray-400 focus:border-green-500 focus:outline-none transition-colors"
                    placeholder="email@example.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-green-400 mb-2">Mavzu *</label>
                  <select
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-green-500/50 rounded-lg text-white focus:border-green-500 focus:outline-none transition-colors"
                    required
                  >
                    <option value="">Mavzuni tanlang</option>
                    <option value="course">Kurs haqida savol</option>
                    <option value="technical">Texnik yordam</option>
                    <option value="payment">To'lov masalalari</option>
                    <option value="partnership">Hamkorlik</option>
                    <option value="other">Boshqa</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-green-400 mb-2">Sarlavha *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-green-500/50 rounded-lg text-white placeholder-gray-400 focus:border-green-500 focus:outline-none transition-colors"
                    placeholder="Xabar sarlavhasi"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-green-400 mb-2">Xabar matni *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-700 border border-green-500/50 rounded-lg text-white placeholder-gray-400 focus:border-green-500 focus:outline-none transition-colors resize-none"
                    placeholder="Xabaringizni batafsil yozing..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-500 text-black py-3 rounded-lg hover:bg-green-400 transition-colors font-medium flex items-center justify-center group"
                >
                  <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                  Xabar yuborish
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
