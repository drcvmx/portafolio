"use client"

import { useState, useEffect } from "react"

interface TechItem {
  name: string
  icon: string
  color: string
}

export function TechStack() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const technologies: TechItem[] = [
    { name: "React", icon: "skills_webp/react.webp", color: "text-neon-pink" },
    { name: "Next.js", icon: "skills_webp/nextjs.webp", color: "text-neon-pink" },
    { name: "n8n", icon: "skills_webp/n8n.webp", color: "text-neon-pink" },
    { name: "Vue", icon: "skills_webp/vue.webp", color: "text-neon-cyan" },
    { name: "Astro", icon: "skills_webp/astro.webp", color: "text-neon-cyan" },
    { name: "TailwindCSS", icon: "skills_webp/tailwild.webp", color: "text-neon-pink" },
    { name: "JavaScript", icon: "skills_webp/javascript.webp", color: "text-neon-pink" },
    { name: "TypeScript", icon: "skills_webp/typescript.webp", color: "text-neon-pink" },
    { name: "SQL", icon: "skills_webp/sql.webp", color: "text-neon-purple" },
    { name: "Supabase", icon: "skills_webp/supabase.webp", color: "text-neon-purple" },
    { name: "Python", icon: "skills_webp/python.webp", color: "text-neon-purple" },
    { name: "Java", icon: "skills_webp/java.webp", color: "text-neon-purple" },
    { name: "Git", icon: "skills_webp/git.webp", color: "text-neon-pink" },
    { name: "GitHub", icon:"skills_webp/github.webp", color: "text-neon-pink" },
  ]


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % technologies.length)
    }, 2500) // Cambia cada 2.5 segundos

    return () => clearInterval(interval)
  }, [technologies.length])

  const currentTech = technologies[currentIndex]

  return (
    <div className="flex justify-center">
      <div className="bg-cyber-dark/80 border border-neon-pink/30 rounded-lg p-8 max-w-xs w-full text-center backdrop-blur-sm relative overflow-hidden">
        {/* Efecto de brillo de fondo */}
        <div className="absolute inset-0 bg-gradient-to-br from-neon-pink/5 via-transparent to-neon-purple/5"></div>

        {/* Contenido principal */}
        <div className="relative z-10">
          {/* Logo de la tecnología */}
          <div className="mb-6 flex justify-center">
            <div className="w-16 h-16 rounded-full bg-cyber-light/20 flex items-center justify-center border border-neon-pink/20 shadow-lg">
              <img
                src={currentTech.icon || "/placeholder.svg"}
                alt={currentTech.name}
                className="w-10 h-10 object-contain transition-all duration-500"
              />
            </div>
          </div>

          {/* Nombre de la tecnología */}
          <div className={`text-2xl font-bold font-mono ${currentTech.color} transition-all duration-500 mb-6`}>
            {currentTech.name}
          </div>

          {/* Indicador de progreso */}
          <div className="flex justify-center space-x-1 mb-4">
            {technologies.map((_, index) => (
              <div
                key={index}
                className={`h-1 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-neon-pink w-6"
                    : index < currentIndex
                      ? "bg-neon-pink/40 w-2"
                      : "bg-muted-foreground/20 w-2"
                }`}
              />
            ))}
          </div>

          {/* Contador */}
          <div className="text-xs text-muted-foreground font-mono">
            {String(currentIndex + 1).padStart(2, "0")} / {String(technologies.length).padStart(2, "0")}
          </div>
        </div>

        {/* Efecto de scanline */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-pink/5 to-transparent animate-pulse pointer-events-none"></div>
      </div>
    </div>
  )
}