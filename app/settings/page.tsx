"use client"

import { useState } from "react"
import Sidebar from "@/components/sidebar"
import { User, Bell, Shield, Palette, Monitor, Save } from "lucide-react"

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile")
  const [settings, setSettings] = useState({
    // Profile settings
    fullName: "Akmal Karimov",
    email: "akmal@example.com",
    bio: "Frontend dasturchi",

    // Notification settings
    emailNotifications: true,
    pushNotifications: false,
    courseUpdates: true,
    marketingEmails: false,

    // Privacy settings
    profileVisibility: "public",
    showProgress: true,
    showAchievements: true,

    // Appearance settings
    theme: "dark",
    language: "uz",
    fontSize: "medium",

    // System settings
    autoSave: true,
    dataUsage: "normal",
  })

  const handleSettingChange = (key: string, value: any) => {
    setSettings((prev) => ({ ...prev, [key]: value }))
  }

  const saveSettings = () => {
    console.log("Settings saved:", settings)
    alert("Sozlamalar saqlandi!")
  }

  const tabs = [
    { id: "profile", label: "Profil", icon: User },
    { id: "notifications", label: "Bildirishnomalar", icon: Bell },
    { id: "privacy", label: "Maxfiylik", icon: Shield },
    { id: "appearance", label: "Ko'rinish", icon: Palette },
    { id: "system", label: "Tizim", icon: Monitor },
  ]

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono">
      <Sidebar />
      <div className="ml-64 p-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-green-400 mb-4">SYSTEM SETTINGS</h1>
            <p className="text-gray-300 text-lg">Hisobingiz va platforma sozlamalarini boshqaring</p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Settings Navigation */}
            <div className="lg:col-span-1">
              <div className="bg-gray-800/50 border border-green-500/50 rounded-2xl p-4">
                <nav className="space-y-2">
                  {tabs.map((tab) => {
                    const IconComponent = tab.icon
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors text-left ${
                          activeTab === tab.id
                            ? "bg-green-500/20 text-green-300 border-l-2 border-green-400"
                            : "text-green-400 hover:bg-green-500/10"
                        }`}
                      >
                        <IconComponent className="w-5 h-5" />
                        <span>{tab.label}</span>
                      </button>
                    )
                  })}
                </nav>
              </div>
            </div>

            {/* Settings Content */}
            <div className="lg:col-span-3">
              <div className="bg-gray-800/50 border border-green-500/50 rounded-2xl p-8">
                {/* Profile Settings */}
                {activeTab === "profile" && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-green-400 mb-6">Profil Sozlamalari</h2>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-green-400 mb-2">To'liq ism</label>
                        <input
                          type="text"
                          value={settings.fullName}
                          onChange={(e) => handleSettingChange("fullName", e.target.value)}
                          className="w-full px-4 py-3 bg-gray-700 border border-green-500/50 rounded-lg text-white focus:border-green-500 focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-green-400 mb-2">Email</label>
                        <input
                          type="email"
                          value={settings.email}
                          onChange={(e) => handleSettingChange("email", e.target.value)}
                          className="w-full px-4 py-3 bg-gray-700 border border-green-500/50 rounded-lg text-white focus:border-green-500 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-green-400 mb-2">Bio</label>
                      <textarea
                        value={settings.bio}
                        onChange={(e) => handleSettingChange("bio", e.target.value)}
                        rows={3}
                        className="w-full px-4 py-3 bg-gray-700 border border-green-500/50 rounded-lg text-white focus:border-green-500 focus:outline-none resize-none"
                      />
                    </div>
                  </div>
                )}

                {/* Notification Settings */}
                {activeTab === "notifications" && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-green-400 mb-6">Bildirishnoma Sozlamalari</h2>

                    <div className="space-y-4">
                      {[
                        {
                          key: "emailNotifications",
                          label: "Email bildirishnomalar",
                          desc: "Muhim yangiliklar email orqali",
                        },
                        { key: "pushNotifications", label: "Push bildirishnomalar", desc: "Brauzer bildirishnomalari" },
                        {
                          key: "courseUpdates",
                          label: "Kurs yangiliklari",
                          desc: "Yangi darslar va materiallar haqida",
                        },
                        { key: "marketingEmails", label: "Marketing emaillar", desc: "Aksiyalar va takliflar haqida" },
                      ].map((item) => (
                        <div key={item.key} className="flex items-center justify-between p-4 bg-gray-700/30 rounded-lg">
                          <div>
                            <h3 className="text-green-400 font-semibold">{item.label}</h3>
                            <p className="text-gray-400 text-sm">{item.desc}</p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              checked={settings[item.key as keyof typeof settings] as boolean}
                              onChange={(e) => handleSettingChange(item.key, e.target.checked)}
                              className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Privacy Settings */}
                {activeTab === "privacy" && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-green-400 mb-6">Maxfiylik Sozlamalari</h2>

                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-green-400 mb-2">Profil ko'rinishi</label>
                        <select
                          value={settings.profileVisibility}
                          onChange={(e) => handleSettingChange("profileVisibility", e.target.value)}
                          className="w-full px-4 py-3 bg-gray-700 border border-green-500/50 rounded-lg text-white focus:border-green-500 focus:outline-none"
                        >
                          <option value="public">Hammaga ochiq</option>
                          <option value="friends">Faqat do'stlar</option>
                          <option value="private">Shaxsiy</option>
                        </select>
                      </div>

                      <div className="space-y-4">
                        {[
                          { key: "showProgress", label: "O'rganish jarayonini ko'rsatish" },
                          { key: "showAchievements", label: "Yutuqlarni ko'rsatish" },
                        ].map((item) => (
                          <div
                            key={item.key}
                            className="flex items-center justify-between p-4 bg-gray-700/30 rounded-lg"
                          >
                            <span className="text-green-400">{item.label}</span>
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                checked={settings[item.key as keyof typeof settings] as boolean}
                                onChange={(e) => handleSettingChange(item.key, e.target.checked)}
                                className="sr-only peer"
                              />
                              <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Appearance Settings */}
                {activeTab === "appearance" && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-green-400 mb-6">Ko'rinish Sozlamalari</h2>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-green-400 mb-2">Mavzu</label>
                        <select
                          value={settings.theme}
                          onChange={(e) => handleSettingChange("theme", e.target.value)}
                          className="w-full px-4 py-3 bg-gray-700 border border-green-500/50 rounded-lg text-white focus:border-green-500 focus:outline-none"
                        >
                          <option value="dark">Qorong'u</option>
                          <option value="light">Yorug'</option>
                          <option value="auto">Avtomatik</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-green-400 mb-2">Til</label>
                        <select
                          value={settings.language}
                          onChange={(e) => handleSettingChange("language", e.target.value)}
                          className="w-full px-4 py-3 bg-gray-700 border border-green-500/50 rounded-lg text-white focus:border-green-500 focus:outline-none"
                        >
                          <option value="uz">O'zbek</option>
                          <option value="ru">Русский</option>
                          <option value="en">English</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-green-400 mb-2">Shrift o'lchami</label>
                        <select
                          value={settings.fontSize}
                          onChange={(e) => handleSettingChange("fontSize", e.target.value)}
                          className="w-full px-4 py-3 bg-gray-700 border border-green-500/50 rounded-lg text-white focus:border-green-500 focus:outline-none"
                        >
                          <option value="small">Kichik</option>
                          <option value="medium">O'rta</option>
                          <option value="large">Katta</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {/* System Settings */}
                {activeTab === "system" && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-green-400 mb-6">Tizim Sozlamalari</h2>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-gray-700/30 rounded-lg">
                        <div>
                          <h3 className="text-green-400 font-semibold">Avtomatik saqlash</h3>
                          <p className="text-gray-400 text-sm">Jarayonni avtomatik saqlash</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={settings.autoSave}
                            onChange={(e) => handleSettingChange("autoSave", e.target.checked)}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
                        </label>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-green-400 mb-2">Ma'lumot ishlatish</label>
                        <select
                          value={settings.dataUsage}
                          onChange={(e) => handleSettingChange("dataUsage", e.target.value)}
                          className="w-full px-4 py-3 bg-gray-700 border border-green-500/50 rounded-lg text-white focus:border-green-500 focus:outline-none"
                        >
                          <option value="low">Kam</option>
                          <option value="normal">Oddiy</option>
                          <option value="high">Yuqori</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {/* Save Button */}
                <div className="mt-8 pt-6 border-t border-green-500/20">
                  <button
                    onClick={saveSettings}
                    className="bg-green-500 text-black px-6 py-3 rounded-lg hover:bg-green-400 transition-colors font-medium flex items-center"
                  >
                    <Save className="w-5 h-5 mr-2" />
                    Sozlamalarni saqlash
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
