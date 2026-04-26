"use client"

import { useState, useEffect } from "react"
import ProjectCardFlip from "@/components/new-card-version"
import { Terminal } from "@/components/terminal"
import { useLanguage } from "@/contexts/language-context"

export default function ProjectsPage() {
  const { t } = useLanguage()
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
      id: "aisuite",
      title: "AISUITE",
      description: t("projects.aisuite.desc"),
      image: "",
      technologies: ["Next.js 14", "React", "Python", "LLMs"],
      category: "app",
      videoUrl: "https://drive.google.com/file/d/1DZ5351TBt1G-I5S1wP7P4Zc9OtpdNNCQ/preview",
    },
    {
      id: "pos",
      title: "DRCV Store",
      description: t("projects.pos.desc"),
      image: "",
      technologies: ["Next.js", "NestJS", "Ollama", "PostgreSQL", "Tailwind CSS"],
      category: "app",
      videoUrl: "https://drive.google.com/file/d/1lNEgr6vZ6ie-cprDcxAEoav3oBAjEE9M/preview",
    },
    {
      id: "noteDrcv",
      title: "Note DRCV",
      description: t("projects.noteDrcv.desc"),
      image: "project_webp/note/note1.png",
      technologies: ["Next.js", "Python 3.14", "FastAPI", "PostgreSQL"],
      category: "app",
    },
    {
      id: "battlekart",
      title: "Go-Kart Zen Loyalty",
      description: t("projects.battlekart.desc"),
      image: "project_webp/battlekart/bk7.png",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Supabase"],
      category: "app",
    },
    {
      id: "catalogo",
      title: "Green Alchemy — Catálogo",
      description: t("projects.catalogo.desc"),
      image: "project_webp/catalogo/catalogo1.png",
      technologies: ["React", "TypeScript", "Vite", "Supabase"],
      category: "app",
    },
    {
      id: "balazhi",
      title: "Balazhi Stone",
      description: t("projects.balazhi.desc"),
      image: "project_webp/balazhi/balazhi1.png",
      technologies: ["React", "TypeScript", "Vite", "Tailwind CSS"],
      category: "web",
    },
    {
      id: "green_alchemy_sgl",
      title: "Green Alchemy SGL",
      description: t("projects.greenAlchemy.desc"),
      image: "project_webp/greensystem/green1.png",
      technologies: ["React", "TypeScript", "Vite", "Supabase"],
      category: "app",
    },
    {
      id: "one_soul",
      title: "ONE · Soul Essence",
      description: t("projects.one.desc"),
      image: "project_webp/one/one1.png",
      technologies: ["React", "TypeScript", "Vite", "Supabase"],
      category: "web",
    },
    {
      id: "probin",
      title: "Probin Real Estate CMS",
      description: t("projects.probin.desc"),
      image: "project_webp/probin/probin1.png",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Supabase"],
      category: "app",
    },
    {
      id: "winpot",
      title: "Winpot CMS & Multi-Tenant",
      description: t("projects.winpot.desc"),
      image: "project_webp/winpot/winpot1.png",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Supabase"],
      category: "app",
    },
    {
      id: "seprytec",
      title: "Seprytec",
      description: t("projects.seprytec.desc"),
      image: "project_webp/seprytec/seprytec1.webp",
      technologies: ["Next.js", "React", "Tailwind CSS", "JavaScript"],
      category: "web",
    },
  ]

  const categories = [
    { id: "all", name: t("projects.allProjects") },
    { id: "web", name: t("projects.staticWeb") },
    { id: "app", name: t("projects.webApp") },
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

  // Mostrar un estado de carga mientras se verifica localStorage
  if (isLoading) {
    return <div className="py-12 flex justify-center">{t("common.loading")}</div>
  }

  return (
    <div className="space-y-8">
      {skipAnimation || introComplete ? (
        <div className="terminal-window scanline">
          <div className="terminal-header">
            <div className="terminal-button terminal-button-red"></div>
            <div className="terminal-button terminal-button-yellow"></div>
            <div className="terminal-button terminal-button-green"></div>
            <div className="terminal-title">projects.sh</div>
          </div>
          <div className="terminal-content">
            <p className="mb-4">
              <span className="neon-text-purple">$</span> {t("projects.title")}
              <span className="terminal-cursor"></span>
            </p>
          </div>
        </div>
      ) : (
        <Terminal
          text={t("projects.title")}
          typingSpeed={40}
          className="w-full"
          onComplete={handleIntroComplete}
          skipAnimation={skipAnimation}
        />
      )}

      {introComplete && (
        <>
          <div className="flex flex-wrap gap-2 animate-fade-in delay-100">
            {categories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-3 py-1 text-sm rounded-md transition-colors animate-fade-in-up delay-${200 + index * 50} ${
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
              <ProjectCardFlip
                key={project.id}
                id={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                technologies={project.technologies}
                videoUrl={'videoUrl' in project ? (project as any).videoUrl : undefined}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
