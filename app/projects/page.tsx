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
      id: "drcv_company",
      title: "drcv_company",
      description: t("projects.drcvCompany.desc"),
      image: "project_webp/drcv_company/company1.webp",
      technologies: ["Astro", "Vue.js", "SCSS", "TypeScript"],
      category: "web",
    },
    {
      id: "seprytec",
      title: "seprytec",
      description: t("projects.seprytec.desc"),
      image: "project_webp/seprytec/seprytec1.png",
      technologies: ["Next.js", "React", "TailwindCSS", "JavaScript"],
      category: "web",
    },
     {
      id: "drcv_note",
      title: "NOTE DRCV",
      description: t("projects.drcvNote.desc"),
      image: "project_webp/app_note/note1.png",
      technologies: ["React", "FastAPI", "JavaScript", "PostgreSQL"],
      category: "app",
    },
        {
      id: "sozu",
      title: "sozu",
      description: t("projects.sozu.desc"),
      image: "project_webp/sozu/sozu3.webp",
      technologies: ["n8n", "Next.js", "JavaScript", "PostgreSQL"],
      category: "app",
    },
    {
      id: "carpinteria_verdeja",
      title: "carpinteria_verdeja",
      description: t("projects.carpinteriaVerdeja.desc"),
      image: "project_webp/carpinteria/carpinteria1.webp",
      technologies: ["Next.js", "React", "TailwindCSS", "JavaScript"],
      category: "web",
    },
    {
      id: "crime_control",
      title: "crime_control",
      description: t("projects.crimeControl.desc"),
      image: "project_webp/crimen/crimen1.png",
      technologies: ["React", "Next.js", "JavaScript", "Supabase"],
      category: "app",
    },
    {
      id: "luchavsludopatia",
      title: "luchavsludopatia",
      description: t("projects.luchavsludopatia.desc"),
      image: "project_webp/ludopatia/ludo1.webp",
      technologies: ["Next.js", "React", "TailwindCSS", "JavaScript"],
      category: "web",
    },
    {
      id: "youtube_transcribe",
      title: "youtube_transcribe",
      description: t("projects.youtubeTranscribe.desc"),
      image: "project_webp/youtube_transcribe/transcribe1.webp",
      technologies: ["React", "Next.js", "JavaScript", "Python", "Flask"],
      category: "app",
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
              <span className="text-primary">$</span> {t("projects.title")}
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
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
