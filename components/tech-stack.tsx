"use client"

import { useState, useEffect } from "react"

interface TechItem {
  name: string
  icon: string
  color: string
  invert?: boolean
}

/* ------------------------------------------------------------------ */
/*  Datos                                                              */
/* ------------------------------------------------------------------ */
const CORE_STACK: TechItem[] = [
  { name: "React", icon: "skills_webp/react.webp", color: "text-accent-500" },
  { name: "TypeScript", icon: "skills_webp/typescript.webp", color: "text-accent-500" },
  { name: "JavaScript", icon: "skills_webp/javascript.webp", color: "text-accent-500" },
  { name: "TailwindCSS", icon: "skills_webp/tailwild.webp", color: "text-accent-500" },
  { name: "Node.js", icon: "skills_webp/nodejs-icon-svgrepo-com.svg", color: "text-accent-500" },
  { name: "Python", icon: "skills_webp/python.webp", color: "text-neon-purple" },
  { name: "PostgreSQL", icon: "skills_webp/postgresql-logo-svgrepo-com.svg", color: "text-neon-purple" },
  { name: "Supabase", icon: "skills_webp/supabase.webp", color: "text-neon-purple" },
  { name: "SQL", icon: "skills_webp/sql.webp", color: "text-neon-purple" },
  { name: "Git", icon: "skills_webp/git.webp", color: "text-accent-500" },
  { name: "GitHub", icon: "skills_webp/github.webp", color: "text-accent-500", invert: true },
]

const AI_TOOLS: TechItem[] = [
  { name: "Claude", icon: "skills_webp/claude.png", color: "text-accent-500" },
  { name: "Cursor", icon: "skills_webp/cursor.png", color: "text-accent-500", invert: true },
  { name: "Antigravity", icon: "skills_webp/antigravity.png", color: "text-neon-purple", invert: true },
  { name: "Ollama", icon: "skills_webp/ollama.png", color: "text-accent-500" },
  { name: "Lovable", icon: "skills_webp/lovable.png", color: "text-neon-purple" },
  { name: "v0", icon: "skills_webp/v0.png", color: "text-accent-500", invert: true },
  { name: "Vercel", icon: "skills_webp/vercel.png", color: "text-accent-500", invert: true },
]

/* ------------------------------------------------------------------ */
/*  Componente base de Carrusel                                        */
/* ------------------------------------------------------------------ */
function CarouselCard({
  items,
  title,
  subtitle
}: {
  items: TechItem[],
  title?: string,
  subtitle?: string
}) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length)
    }, 2500) // Cambia cada 2.5 segundos

    return () => clearInterval(interval)
  }, [items.length])

  const currentItem = items[currentIndex]

  return (
    <div className="bg-cyber-dark/80 border border-accent-500/30 rounded-lg p-3 sm:p-6 lg:p-8 w-full min-w-0 aspect-square md:aspect-[4/3] text-center backdrop-blur-sm relative overflow-hidden flex flex-col justify-center">
      {/* Efecto de brillo de fondo */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-500/5 via-transparent to-neon-purple/5 pointer-events-none"></div>

      {/* Título opcional */}
      {title && (
        <div className="mb-4">
          <h3 className="text-[10px] sm:text-sm font-bold text-accent-500 font-mono leading-tight break-words">{title}</h3>
          {subtitle && <p className="text-[9px] sm:text-[10px] leading-tight sm:leading-relaxed text-white/50 mt-1 sm:mt-2 break-words">{subtitle}</p>}
        </div>
      )}

      {/* Contenido principal */}
      <div className="relative z-10 flex-1 flex flex-col justify-center">
        {/* Logo de la tecnología */}
        <div className="mb-6 flex justify-center">
            <div className="w-11 h-11 sm:w-16 sm:h-16 rounded-full bg-drcv-600/20 flex items-center justify-center border border-accent-500/20 shadow-lg">
            <img
              src={`/${currentItem.icon}`}
              alt={currentItem.name}
              className="w-7 h-7 sm:w-10 sm:h-10 object-contain transition-all duration-500"
              style={{ filter: currentItem.invert ? "invert(1) brightness(2)" : "none" }}
            />
          </div>
        </div>

        {/* Nombre de la tecnología */}
        <div className={`text-base sm:text-2xl font-bold font-mono ${currentItem.color} transition-all duration-500 mb-3 sm:mb-6 break-words`}>
          {currentItem.name}
        </div>

        {/* Indicador de progreso */}
        <div className="flex justify-center space-x-1 mb-2 sm:mb-4">
          {items.map((_, index) => (
            <div
              key={index}
              className={`h-1 rounded-full transition-all duration-300 ${index === currentIndex
                ? "bg-accent-500 w-6"
                : index < currentIndex
                  ? "bg-accent-500/40 w-2"
                  : "bg-muted-foreground/20 w-2"
                }`}
            />
          ))}
        </div>

        {/* Contador */}
        <div className="text-xs text-muted-foreground font-mono">
          {String(currentIndex + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
        </div>
      </div>

      {/* Efecto de scanline */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-pink/5 to-transparent animate-pulse pointer-events-none"></div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Componente Principal                                               */
/* ------------------------------------------------------------------ */
export function TechStack() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-2 items-stretch gap-3 sm:gap-6 w-full">
      <CarouselCard
        items={CORE_STACK}
        title="CORE STACK"
      />
      <CarouselCard
        items={AI_TOOLS}
        title="IA COMO MULTIPLICADOR DE FUERZA"
        subtitle="No solo uso IA para programar si no para construir, crear y prototipar"
      />
    </div>
  )
}