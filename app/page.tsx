"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Terminal } from "@/components/terminal"
import { ProjectCard } from "@/components/project-card"
import { TechStack } from "@/components/tech-stack"
import { ArrowRight } from "lucide-react"
<<<<<<< HEAD

export default function Home() {
=======
import { useLanguage } from "@/contexts/language-context"

export default function Home() {
  const { t } = useLanguage()
  // Inicializar estados con valores de localStorage si están disponibles
>>>>>>> v2
  const [isLoading, setIsLoading] = useState(true)
  const [introComplete, setIntroComplete] = useState(false)
  const [skipAnimation, setSkipAnimation] = useState(false)

  useEffect(() => {
<<<<<<< HEAD
=======
    // Verificar localStorage al montar el componente
>>>>>>> v2
    const animationCompleted = localStorage.getItem("introAnimationCompleted") === "true"

    if (animationCompleted) {
      setSkipAnimation(true)
      setIntroComplete(true)
    }

<<<<<<< HEAD
    setIsLoading(false)
  }, [])

=======
    // Indicar que la carga inicial ha terminado
    setIsLoading(false)
  }, [])

  // Guardar el estado de la animación cuando se complete
>>>>>>> v2
  const handleIntroComplete = () => {
    setIntroComplete(true)
    localStorage.setItem("introAnimationCompleted", "true")
  }

  const featuredProjects = [
    {
      id: "drcv_company",
      title: "drcv_company",
<<<<<<< HEAD
      description: "A modern corporate website designed to boost companies' online presence, offering a professional and visually impactful experience for their clients.",
=======
      description: t("projects.drcvCompany.desc"),
>>>>>>> v2
      image: "project_webp/drcv_company/company1.webp",
      technologies: ["Astro", "Vue.js", "SCSS", "TypeScript"],
    },
    {
      id: "seprytec",
      title: "seprytec",
<<<<<<< HEAD
      description: "A modern website for a private security company, crafted to instill user trust and comfort through intuitive design.",
      image: "project_webp/seprytec/seprytec1.webp",
      technologies: ["Next.js", "React", "TailwindCSS", "JavaScript"],   
=======
      description: t("projects.seprytec.desc"),
      image: "project_webp/seprytec/seprytec1.webp",
      technologies: ["Next.js", "React", "TailwindCSS", "JavaScript"],
>>>>>>> v2
    },
    {
      id: "drcv_note",
      title: "drcv_note",
<<<<<<< HEAD
      description: "Your digital space for big and small ideas. Save everything from quick reminders to detailed and structured notes, all in one intuitive and organized place.",
=======
      description: t("projects.drcvNote.desc"),
>>>>>>> v2
      image: "project_webp/app_note/note4.webp",
      technologies: ["React", "Next.js", "JavaScript", "Supabase"],
    },
  ]

<<<<<<< HEAD
  if (isLoading) {
    return <div className="py-12 flex justify-center text-neon-pink">Loading...</div>
=======
  // Mostrar un estado de carga mientras se verifica localStorage
  if (isLoading) {
    return <div className="py-12 flex justify-center text-neon-pink">{t("common.loading")}</div>
>>>>>>> v2
  }

  return (
    <div className="space-y-16">
      <section className="py-12">
<<<<<<< HEAD
        {(skipAnimation || introComplete) ? (
=======
        {skipAnimation || introComplete ? (
>>>>>>> v2
          <div className="terminal-window scanline max-w-3xl mx-auto">
            <div className="terminal-header">
              <div className="terminal-button terminal-button-red"></div>
              <div className="terminal-button terminal-button-yellow"></div>
              <div className="terminal-button terminal-button-green"></div>
              <div className="terminal-title">terminal</div>
            </div>
            <div className="terminal-content">
              <span className="text-neon-pink">$ </span>
<<<<<<< HEAD
              <span>
                Hello, my name is Dante. I am a Frontend developer passionate about web design and programming
              </span>
=======
              <span>{t("home.intro")}</span>
>>>>>>> v2
              <span className="terminal-cursor"></span>
            </div>
          </div>
        ) : (
          <Terminal
<<<<<<< HEAD
            text="Hello, my name is Dante. I am a Frontend developer passionate about web design and programming"
=======
            text={t("home.intro")}
>>>>>>> v2
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
<<<<<<< HEAD
              Learn more about me <ArrowRight size={16} />
=======
              {t("home.learnMore")} <ArrowRight size={16} />
>>>>>>> v2
            </Link>
          </div>
        )}
      </section>

      {introComplete && (
        <>
          <section>
            <div className="flex items-center justify-between mb-6">
<<<<<<< HEAD
              <h2 className="text-2xl font-bold text-white neon-text-pink">Featured Projects</h2>
=======
              <h2 className="text-2xl font-bold text-white neon-text-pink">{t("home.featuredProjects")}</h2>
>>>>>>> v2
              <Link
                href="/projects"
                className="text-neon-pink hover:underline inline-flex items-center gap-1 neon-text-pink"
              >
<<<<<<< HEAD
                View all <ArrowRight size={16} />
=======
                {t("home.viewAll")} <ArrowRight size={16} />
>>>>>>> v2
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<<<<<<< HEAD
                {featuredProjects.map((project, index) => (
                  <div key={project.id} className={`project-card-reveal delay-${400 + index * 100}`}>
                    <ProjectCard {...project} />
                  </div>
                ))}
              </div>
          </section>

          <section className="tech-stack-section">
            <h2 className="text-2xl font-bold mb-6 text-white neon-text-pink font-mono">Tech Stack</h2>
=======
              {featuredProjects.map((project, index) => (
                <div key={project.id} className={`project-card-reveal delay-${400 + index * 100}`}>
                  <ProjectCard {...project} />
                </div>
              ))}
            </div>
          </section>

          <section className="tech-stack-section">
            <h2 className="text-2xl font-bold mb-6 text-white neon-text-pink font-mono">{t("home.technologies")}</h2>
>>>>>>> v2
            <TechStack />
          </section>
        </>
      )}
    </div>
  )
}
