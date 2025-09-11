import type React from "react"
import type { Metadata } from "next"
import { JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"
<<<<<<< HEAD
=======
import { LanguageProvider } from "@/contexts/language-context"
>>>>>>> v2

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
<<<<<<< HEAD
  title: "drcv_portfolio",
  description: "drcv_portfolio",
=======
  title: "drcv-Portfolio",
  description: "A neo-brutalist cyberpunk portfolio",
    generator: 'v0.app'
>>>>>>> v2
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${jetbrainsMono.variable} font-mono bg-cyber-dark text-white min-h-screen flex flex-col`}>
<<<<<<< HEAD
        <div className="fixed inset-0 bg-grid-pattern opacity-10 pointer-events-none z-0"></div>
        <div className="fixed inset-0 bg-gradient-to-br from-cyber-dark via-cyber-light/10 to-cyber-dark opacity-50 pointer-events-none z-0"></div>
        <Navigation />
        <main className="flex-1 container mx-auto px-4 py-8 relative z-10">{children}</main>
        <Footer />
        <Toaster />
=======
        <LanguageProvider>
          <div className="fixed inset-0 bg-grid-pattern opacity-10 pointer-events-none z-0"></div>
          <div className="fixed inset-0 bg-gradient-to-br from-cyber-dark via-cyber-light/10 to-cyber-dark opacity-50 pointer-events-none z-0"></div>
          <Navigation />
          <main className="flex-1 container mx-auto px-4 py-8 relative z-10">{children}</main>
          <Footer />
          <Toaster />
        </LanguageProvider>
>>>>>>> v2
      </body>
    </html>
  )
}
