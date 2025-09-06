"use client"

import { useLanguage } from "@/contexts/language-context"
import { Globe } from "lucide-react"

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="relative group">
      <button className="flex items-center gap-2 px-3 py-2 rounded-md bg-cyber-dark/80 border border-neon-pink/30 hover:border-neon-pink/60 transition-all duration-300 hover:shadow-neon-pink">
        <Globe size={16} className="text-neon-pink" />
        <span className="text-white font-mono text-sm uppercase">{language}</span>
      </button>

      {/* Dropdown */}
      <div className="absolute top-full right-0 mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
        <div className="bg-cyber-dark border border-neon-pink/30 rounded-md overflow-hidden shadow-neon-pink backdrop-blur-sm">
          <button
            onClick={() => setLanguage("en")}
            className={`w-full px-4 py-2 text-left font-mono text-sm transition-colors hover:bg-neon-pink/10 flex items-center gap-3 ${
              language === "en" ? "bg-neon-pink/20 text-neon-pink" : "text-white hover:text-neon-pink"
            }`}
          >
            <span className="text-lg">🇺🇸</span>
            <div>
              <div className="font-semibold">English</div>
              <div className="text-xs opacity-70">EN</div>
            </div>
          </button>
          <button
            onClick={() => setLanguage("es")}
            className={`w-full px-4 py-2 text-left font-mono text-sm transition-colors hover:bg-neon-pink/10 flex items-center gap-3 ${
              language === "es" ? "bg-neon-pink/20 text-neon-pink" : "text-white hover:text-neon-pink"
            }`}
          >
            <span className="text-lg">🇪🇸</span>
            <div>
              <div className="font-semibold">Español</div>
              <div className="text-xs opacity-70">ES</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}
