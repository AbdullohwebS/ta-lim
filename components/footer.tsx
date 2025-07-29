import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-green-500/20 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-lg">L</span>
              </div>
              <span className="text-green-400 font-bold text-xl">LearnHub</span>
            </Link>
            <p className="text-gray-400 text-sm">
              Zamonaviy texnologiyalarni o'rganish uchun eng yaxshi platforma. Professional dasturchi bo'lish
              yo'lingizda sizga yordam beramiz.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Kurslar */}
          <div>
            <h3 className="text-green-400 font-semibold mb-4">Kurslar</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/courses/frontend" className="text-gray-400 hover:text-green-400 transition-colors">
                  Frontend Development
                </Link>
              </li>
              <li>
                <Link href="/courses/backend" className="text-gray-400 hover:text-green-400 transition-colors">
                  Backend Development
                </Link>
              </li>
              <li>
                <Link href="/courses/mobile" className="text-gray-400 hover:text-green-400 transition-colors">
                  Mobile Development
                </Link>
              </li>
              <li>
                <Link href="/courses/fullstack" className="text-gray-400 hover:text-green-400 transition-colors">
                  Full Stack
                </Link>
              </li>
            </ul>
          </div>

          {/* Modullar */}
          <div>
            <h3 className="text-green-400 font-semibold mb-4">Modullar</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/modules/html-css" className="text-gray-400 hover:text-green-400 transition-colors">
                  HTML & CSS
                </Link>
              </li>
              <li>
                <Link href="/modules/javascript" className="text-gray-400 hover:text-green-400 transition-colors">
                  JavaScript
                </Link>
              </li>
              <li>
                <Link href="/modules/react" className="text-gray-400 hover:text-green-400 transition-colors">
                  React.js
                </Link>
              </li>
              <li>
                <Link href="/modules/nodejs" className="text-gray-400 hover:text-green-400 transition-colors">
                  Node.js
                </Link>
              </li>
            </ul>
          </div>

          {/* Hamkorlar */}
          <div>
            <h3 className="text-green-400 font-semibold mb-4">Hamkorlar</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                  TechCorp
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                  DevStudio
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                  CodeAcademy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                  IT Solutions
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-500/20 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2024 LearnHub. Barcha huquqlar himoyalangan.</p>
        </div>
      </div>
    </footer>
  )
}
