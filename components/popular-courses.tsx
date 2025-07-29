import Link from "next/link"
import { Star, Users, Clock, ArrowRight } from "lucide-react"

const popularCourses = [
  {
    id: 1,
    title: "React.js Complete Course",
    description: "Zamonaviy React.js texnologiyasini noldan o'rganing",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.9,
    students: 1250,
    duration: "8 hafta",
    price: "299,000",
    level: "Boshlang'ich",
  },
  {
    id: 2,
    title: "Python Backend Development",
    description: "Django va FastAPI yordamida backend yaratish",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.8,
    students: 890,
    duration: "10 hafta",
    price: "399,000",
    level: "O'rta",
  },
]

export default function PopularCourses() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-green-400 mb-4">Mashhur Kurslar</h2>
            <p className="text-gray-300 text-lg">Eng ko'p tanlanayotgan va yuqori baholangan kurslar</p>
          </div>
          <Link
            href="/courses"
            className="hidden md:flex items-center text-green-400 hover:text-green-300 transition-colors group"
          >
            Barcha kurslar
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {popularCourses.map((course) => (
            <div
              key={course.id}
              className="bg-gray-800/50 border border-green-500/20 rounded-2xl overflow-hidden hover:border-green-500/40 transition-colors group"
            >
              <div className="relative">
                <img src={course.image || "/placeholder.svg"} alt={course.title} className="w-full h-48 object-cover" />
                <div className="absolute top-4 left-4 bg-green-500 text-black px-3 py-1 rounded-full text-sm font-medium">
                  {course.level}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-green-400 mb-2 group-hover:text-green-300 transition-colors">
                  {course.title}
                </h3>
                <p className="text-gray-300 mb-4">{course.description}</p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      {course.rating}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {course.students}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {course.duration}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-green-400">{course.price} so'm</div>
                  <Link
                    href={`/course/${course.id}`}
                    className="bg-green-500 text-black px-6 py-2 rounded-lg hover:bg-green-400 transition-colors font-medium"
                  >
                    Boshlash
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center md:hidden">
          <Link
            href="/courses"
            className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors group"
          >
            Barcha kurslar
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
