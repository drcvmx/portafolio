"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Terminal } from "@/components/terminal"
import { ProjectCard } from "@/components/project-card"
import { TechStack } from "@/components/tech-stack"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function Home() {
  const { t } = useLanguage()
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
      id: "drcv_company",
      title: "drcv_company",
      description: t("projects.drcvCompany.desc"),
      image: "project_webp/drcv_company/company1.webp",
      technologies: ["Astro", "Vue.js", "SCSS", "TypeScript"],
    },
    {
      id: "seprytec",
      title: "seprytec",
      description: t("projects.seprytec.desc"),
      image: "project_webp/seprytec/seprytec1.webp",
      technologies: ["Next.js", "React", "TailwindCSS", "JavaScript"],
    },
    {
      id: "drcv_note",
      title: "drcv_note",
      description: t("projects.drcvNote.desc"),
      image: "project_webp/app_note/note4.webp",
      technologies: ["React", "Next.js", "JavaScript", "Supabase"],
    },
  ]

  // Mostrar un estado de carga mientras se verifica localStorage
  if (isLoading) {
    return <div className="py-12 flex justify-center text-neon-pink">{t("common.loading")}</div>
  }

  return (
    <div className="space-y-16">
      <section className="py-12">
        {skipAnimation || introComplete ? (
          <div className="terminal-window scanline max-w-3xl mx-auto">
            <div className="terminal-header">
              <div className="terminal-button terminal-button-red"></div>
              <div className="terminal-button terminal-button-yellow"></div>
              <div className="terminal-button terminal-button-green"></div>
              <div className="terminal-title">terminal</div>
            </div>
            <div className="terminal-content">
              <span className="text-neon-pink">$ </span>
              <span>{t("home.intro")}</span>
              <span className="terminal-cursor"></span>
            </div>
          </div>
        ) : (
          <Terminal
            text={t("home.intro")}
            typingSpeed={40}
            className="max-w-3xl mx-auto"
            onComplete={handleIntroComplete}
            skipAnimation={skipAnimation}
          />
        )}

        {introComplete && (
          <div className="mt-8 flex justify-center">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-neon-pink/10 hover:bg-neon-pink/20 text-neon-pink px-4 py-2 rounded-md transition-colors border border-neon-pink/30 shadow-neon-pink"
            >
              {t("home.learnMore")} <ArrowRight size={16} />
            </Link>
          </div>
        )}
      </section>

      {introComplete && (
        <>
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white neon-text-pink">{t("home.featuredProjects")}</h2>
              <Link
                href="/projects"
                className="text-neon-pink hover:underline inline-flex items-center gap-1 neon-text-pink"
              >
                {t("home.viewAll")} <ArrowRight size={16} />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.map((project, index) => (
                <div key={project.id} className={`project-card-reveal delay-${400 + index * 100}`}>
                  <ProjectCard {...project} />
                </div>
              ))}
            </div>
          </section>

          <section className="tech-stack-section">
            <h2 className="text-2xl font-bold mb-6 text-white neon-text-pink font-mono">{t("home.technologies")}</h2>
            <TechStack />
          </section>
        </>
      )}
    </div>
  )
}
