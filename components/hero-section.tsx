import { ArrowRight, Play } from "lucide-react"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-transparent"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-400/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-green-400 leading-tight">
                Kelajakni
                <span className="block text-white">O'rganing</span>
              </h1>
              <p className="text-lg text-gray-300 max-w-lg">
                Zamonaviy texnologiyalarni o'rganing va professional dasturchi bo'ling. Bizning platformamizda eng
                so'nggi kurslar va amaliy loyihalar mavjud.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/courses"
                className="bg-green-500 text-black px-8 py-4 rounded-lg hover:bg-green-400 transition-colors font-medium flex items-center justify-center group"
              >
                Kurslarni ko'rish
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="border border-green-500 text-green-400 px-8 py-4 rounded-lg hover:bg-green-500/10 transition-colors font-medium flex items-center justify-center">
                <Play className="mr-2 w-5 h-5" />
                Demo ko'rish
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">500+</div>
                <div className="text-gray-400 text-sm">O'quvchilar</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">50+</div>
                <div className="text-gray-400 text-sm">Kurslar</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">95%</div>
                <div className="text-gray-400 text-sm">Muvaffaqiyat</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="/placeholder.svg?height=600&width=500"
                alt="Professional Developer"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-500/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-green-400/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
