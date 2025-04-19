"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Terminal } from "@/components/terminal"
import { ProjectCard } from "@/components/project-card"
import { TechStack } from "@/components/tech-stack"
import { ArrowRight } from "lucide-react"

export default function Home() {
  // Inicializar estados con valores de localStorage si están disponibles
  const [isLoading, setIsLoading] = useState(true)
  const [introComplete, setIntroComplete] = useState(false)
  const [skipAnimation, setSkipAnimation] = useState(false)

  useEffect(() => {
    // Verificar localStorage al montar el componente
    const animationCompleted = localStorage.getItem("introAnimationCompleted") === "true"

    if (animationCompleted) {
      setSkipAnimation(true)
      setIntroComplete(true)
    }

    // Indicar que la carga inicial ha terminado
    setIsLoading(false)
  }, [])

  // Guardar el estado de la animación cuando se complete
  const handleIntroComplete = () => {
    setIntroComplete(true)
    localStorage.setItem("introAnimationCompleted", "true")
  }

  const featuredProjects = [
    {
      id: "drcv_note",
      title: "drcv_note",
      description: "Your digital space for big and small ideas. Save everything from quick reminders to detailed and structured notes, all in one intuitive and organized place.",
      image: "project/notasv1.png",
      technologies: ["React", "Next.j", "Supabase"],
    },
    {
      id: "carpinteria_verdeja",
      title: "carpinteria_verdeja",
      description: "Intuitive and visually impactful frontend webpage, focused on offering a pleasant navigation experience and a memorable design.",
      image: "project/carpinteriav1.png",
      technologies: ["Next.js", "React", "TailwindCSS"],
    },
    {
      id: "school_system",
      title: "school_systemt",
      description: "This project develops a school management system to efficiently digitize academic and administrative data, allowing secure and remote access for authorized users.",
      image: "project/systemv1.png",
      technologies: ["React", "Next.j", "Supabase"],
    },
  ]

  // Mostrar un estado de carga mientras se verifica localStorage
  if (isLoading) {
    return <div className="py-12 flex justify-center text-neon-pink">Cargando...</div>
  }

  return (
    <div className="space-y-16">
      <section className="py-12">
        {skipAnimation ? (
          // Si ya se completó la animación anteriormente, mostrar directamente el terminal con el texto completo
          <div className="terminal-window scanline max-w-3xl mx-auto">
            <div className="terminal-header">
              <div className="terminal-button terminal-button-red"></div>
              <div className="terminal-button terminal-button-yellow"></div>
              <div className="terminal-button terminal-button-green"></div>
              <div className="terminal-title">terminal</div>
            </div>
            <div className="terminal-content">
              <span className="text-neon-pink">$ </span>
              <span>
                Hello, my name is Dante. I am a Frontend developer passionate about web design and programming
              </span>
              <span className="terminal-cursor"></span>
            </div>
          </div>
        ) : (
          // Si es la primera vez, mostrar la animación
          <Terminal
            text="Hello, my name is Dante. I am a Frontend developer passionate about web design and programming"
            typingSpeed={40}
            className="max-w-3xl mx-auto"
            onComplete={handleIntroComplete}
            skipAnimation={false}
          />
        )}

        {introComplete && (
          <div className="mt-8 flex justify-center">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-neon-pink/10 hover:bg-neon-pink/20 text-neon-pink px-4 py-2 rounded-md transition-colors border border-neon-pink/30 shadow-neon-pink"
            >
              Learn more about me <ArrowRight size={16} />
            </Link>
          </div>
        )}
      </section>

      {introComplete && (
        <>
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white neon-text-pink">Featured Projects</h2>
              <Link
                href="/projects"
                className="text-neon-pink hover:underline inline-flex items-center gap-1 neon-text-pink"
              >
                View all <ArrowRight size={16} />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} {...project} />
              ))}
            </div>
          </section>

          <section className="tech-stack-section">
            <h2 className="text-2xl font-bold mb-6 text-white neon-text-pink font-mono">Tech Stack</h2>
            <div className="terminal-window mb-6">
              <div className="terminal-header">
                <div className="terminal-button terminal-button-red"></div>
                <div className="terminal-button terminal-button-yellow"></div>
                <div className="terminal-button terminal-button-green"></div>
                <div className="terminal-title">tech_stack.sh</div>
              </div>
              <div className="terminal-content">
                <p className="mb-4">
                  <span className="text-neon-pink">$</span> cat /proc/technologies
                </p>
              </div>
            </div>
            <TechStack />
          </section>
        </>
      )}
    </div>
  )
}
