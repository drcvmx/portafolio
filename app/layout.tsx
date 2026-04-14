import type React from "react"
import type { Metadata } from "next"

import { JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"
import { LanguageProvider } from "@/contexts/language-context"

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Portafolio-drcv",
  description: "Portafolio de drcv",
  generator: 'DRCV',
  icons: {
    icon: "/logosinfondo.png",
    apple: "/logosinfondo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${jetbrainsMono.variable} font-mono bg-drcv-primary text-white min-h-screen flex flex-col antialiased`}>
        <LanguageProvider>
          <div className="fixed inset-0 bg-[linear-gradient(rgba(255,0,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] opacity-100 pointer-events-none z-0"></div>
          <div className="fixed inset-0 bg-gradient-to-br from-drcv-primary via-transparent to-drcv-600/50 opacity-100 pointer-events-none z-0"></div>
          <Navigation />
          <main className="flex-1 container mx-auto px-4 py-8 relative z-10">{children}</main>
          <Footer />
          <Toaster />
        </LanguageProvider>
      </body>
    </html>
  )
}
