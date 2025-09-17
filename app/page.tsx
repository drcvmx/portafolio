"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Terminal } from "@/components/terminal"
import { ProjectCard } from "@/components/project-card"
import { TechStack } from "@/components/tech-stack"
import { ArrowRight } from "lucide-react"
import { Github, Linkedin, Send, Copy, ExternalLink } from "lucide-react"
import { toast } from "@/components/ui/use-toast"
import { useLanguage } from "@/contexts/language-context"


const EMAIL_ADDRESS = "drcv.work.code@gmail.com"
const GITHUB_URL = "https://github.com/drcvmx"
const LINKEDIN_URL = "https://www.linkedin.com/in/dante-ricardo-chavez-verdeja-501388361/"
const PORTFOLIO_URL = "https://portafolio-drcv07.vercel.app/"

export default function Home() {
  const { t } = useLanguage()
   const [message, setMessage] = useState("")
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
    const sendEmail = () => {
    window.open(`mailto:${EMAIL_ADDRESS}?subject=Contact from Portfolio&body=${encodeURIComponent(message)}`)
    toast({
      title: t("about.emailOpened"),
      description: t("about.emailDesc"),
      variant: "default",
      duration: 3000,
    })
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
           <section className="section-reveal delay-800">
            <h2 className="text-2xl font-bold mb-6 text-white neon-text-pink font-mono">{t("about.contact")}</h2>

            <div className="grid md:grid-cols-1 gap-8">
              {/* Email contact */}
              <div className="relative animate-fade-in-up delay-900">
                <div className="bg-cyber-dark border border-neon-pink/20 rounded-md p-1 flex items-center hover:border-neon-pink/40 transition-colors">
                  <input
                    type="text"
                    value={EMAIL_ADDRESS}
                    readOnly
                    className="bg-transparent border-none outline-none text-white px-4 py-3 flex-grow font-mono"
                  />
                  <div className="flex space-x-2 mr-2">
                    <button
                      onClick={sendEmail}
                      className="bg-neon-pink/20 hover:bg-neon-pink/30 text-neon-pink p-2 rounded-md transition-colors hover:shadow-neon-pink"
                      title={t("about.sendEmail")}
                    >
                      <Send size={20} />
                    </button>
                    <button
                      onClick={() => copyToClipboard(EMAIL_ADDRESS)}
                      className="bg-neon-pink/20 hover:bg-neon-pink/30 text-neon-pink p-2 rounded-md transition-colors hover:shadow-neon-pink"
                      title={t("about.copyEmail")}
                    >
                      <Copy size={20} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="terminal-window scanline mt-8 animate-fade-in-up delay-1100">
                <div className="terminal-header">
                  <div className="terminal-button terminal-button-red"></div>
                  <div className="terminal-button terminal-button-yellow"></div>
                  <div className="terminal-button terminal-button-green"></div>
                  <div className="terminal-title">network_connections.sh</div>
                </div>
                <div className="terminal-content">
                  <p className="mb-4">
                    <span className="text-neon-pink">$</span> ifconfig
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div>
                        <p className="mb-1 text-neon-pink">github:</p>
                        <Link
                          href={GITHUB_URL}
                          className="flex items-center gap-2 hover:text-neon-pink transition-colors font-mono group"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github size={16} className="group-hover:drop-shadow-[0_0_8px_rgba(255,0,255,0.6)]" />
                          github.com/drcvmx
                        </Link>
                      </div>
                      <div>
                        <p className="mb-1 text-neon-cyan">linkedin:</p>
                        <Link
                          href={LINKEDIN_URL}
                          className="flex items-center gap-2 hover:text-neon-cyan transition-colors font-mono group"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Linkedin size={16} className="group-hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.6)]" />
                          linkedin.com/drcvmx
                        </Link>
                      </div>
                    </div>
                    <div>
                      <p className="mb-1 text-neon-purple">portfolio:</p>
                      <Link
                        href={PORTFOLIO_URL}
                        className="flex items-center gap-2 hover:text-neon-purple transition-colors font-mono group"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={16} className="group-hover:drop-shadow-[0_0_8px_rgba(157,78,221,0.6)]" />
                        portafolio-drcv07.vercel.app
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  )
}
