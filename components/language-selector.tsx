"use client"

import { useLanguage } from "@/contexts/language-context"
import { Globe } from "lucide-react"

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="relative group">
      <button className="flex items-center gap-2 px-3 py-2 rounded-md bg-drcv-primary/80 border border-accent-500/30 hover:border-accent-500/60 transition-all duration-300 hover:shadow-neon-pink">
        <Globe size={16} className="text-accent-500" />
        <span className="text-white font-mono text-sm uppercase">{language}</span>
      </button>

      {/* Dropdown */}
      <div className="absolute top-full right-0 mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
        <div className="bg-drcv-primary border border-accent-500/30 rounded-md overflow-hidden shadow-neon-pink backdrop-blur-sm">
          <button
            onClick={() => setLanguage("en")}
            className={`w-full px-4 py-2 text-left font-mono text-sm transition-colors hover:bg-accent-500/10 flex items-center gap-3 ${
              language === "en" ? "bg-accent-500/20 text-accent-500" : "text-white hover:text-accent-500"
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
            className={`w-full px-4 py-2 text-left font-mono text-sm transition-colors hover:bg-accent-500/10 flex items-center gap-3 ${
              language === "es" ? "bg-accent-500/20 text-accent-500" : "text-white hover:text-accent-500"
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
