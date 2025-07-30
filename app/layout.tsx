import type React from "react"
import type { Metadata } from "next"
import { JetBrains_Mono } from "next/font/google"
import "./globals.css"

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
  title: "LearnHub - Learning Platform",
  description: "Zamonaviy texnologiyalarni o'rganish platformasi",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="uz">
      <body className={`${jetbrainsMono.variable} font-mono`}>{children}</body>
    </html>
  )
}
