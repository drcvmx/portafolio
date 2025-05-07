"use client"

import { useState, useEffect } from "react"
import { ProjectCard } from "@/components/project-card"
import { Terminal } from "@/components/terminal"

export default function ProjectsPage() {
  // Inicializar estados con valores de localStorage si están disponibles
  const [isLoading, setIsLoading] = useState(true)
  const [activeFilter, setActiveFilter] = useState<string>("all")
  const [introComplete, setIntroComplete] = useState(false)
  const [skipAnimation, setSkipAnimation] = useState(false)

  useEffect(() => {
    // Verificar localStorage al montar el componente
    const animationCompleted = localStorage.getItem("projectsAnimationCompleted") === "true"

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
    localStorage.setItem("projectsAnimationCompleted", "true")
  }

  const projects = [
    {
      id: "drcv_note",
      title: "drcv_note",
      description: "Your digital space for big and small ideas. Save everything from quick reminders to detailed and structured notes, all in one intuitive and organized place.",
      image: "project/notasv1.png",
      technologies: ["React", "Next.j", "Supabase"],
      category: "app",
    },
    {
      id: "carpinteria_verdeja",
      title: "carpinteria_verdeja",
      description: "Intuitive and visually impactful frontend webpage, focused on offering a pleasant navigation experience and a memorable design.",
      image: "project/carpinteriav1.png",
      technologies: ["Next.js", "React", "TailwindCSS"],
      category: "web",
    },
    {
      id: "luchavsludopatia",
      title: "luchavsludopatia",
      description: "A supportive and informative website dedicated to combating gambling addiction, drawing inspiration from government resources to offer information, tools, and resources for prevention and seeking help.",
      image: "project/ludopatiav1.png",
      technologies: ["Next.js", "React", "TailwindCSS"],
      category: "web",
    },
    {
      id: "school_system",
      title: "school_system",
      description: "This project develops a school management system to efficiently digitize academic and administrative data, allowing secure and remote access for authorized users.",
      image: "project/systemv1.png",
      technologies: ["React", "Next.j", "Supabase"],
      category: "app",
    },
  ]

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "web", name: "Web Store" },
    { id: "app", name: "Web App"},
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

  // Mostrar un estado de carga mientras se verifica localStorage
  if (isLoading) {
    return <div className="py-12 flex justify-center">Cargando...</div>
  }

  return (
    <div className="space-y-8">
      {skipAnimation ? (
        // Si ya se completó la animación anteriormente, mostrar directamente el terminal con el texto completo
        <div className="terminal-window scanline">
          <div className="terminal-header">
            <div className="terminal-button terminal-button-red"></div>
            <div className="terminal-button terminal-button-yellow"></div>
            <div className="terminal-button terminal-button-green"></div>
            <div className="terminal-title">projects.sh</div>
          </div>
          <div className="terminal-content">
            <p className="mb-4">
              <span className="text-primary">$</span> Displaying projects directory. Select category to filter results.
              <span className="terminal-cursor"></span>
            </p>
          </div>
        </div>
      ) : (
        // Si es la primera vez, mostrar la animación
        <Terminal
          text="Displaying projects directory. Select category to filter results."
          typingSpeed={40}
          className="w-full"
          onComplete={handleIntroComplete}
          skipAnimation={false}
        />
      )}

      {introComplete && (
        <>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-3 py-1 text-sm rounded-md transition-colors ${
                  activeFilter === category.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                technologies={project.technologies}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
