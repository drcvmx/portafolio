"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Terminal } from "@/components/terminal"
import { Github, Linkedin, Send, Copy, FileDown, ExternalLink } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { TechStack } from "@/components/tech-stack"
import { toast } from "@/components/ui/use-toast"
import { useLanguage } from "@/contexts/language-context"

const EMAIL_ADDRESS = "drcv.work.code@gmail.com"
const CV_FILENAME = "cv_drcv.pdf"
const GITHUB_URL = "https://github.com/drcvmx"
const LINKEDIN_URL = "https://www.linkedin.com/in/dante-ricardo-chavez-verdeja-501388361/"
const PORTFOLIO_URL = "https://portafolio-drcv07.vercel.app/"

export default function AboutPage() {
  const { t } = useLanguage()
  // Inicializar estados con valores de localStorage si están disponibles
  const [isLoading, setIsLoading] = useState(true)
  const [introComplete, setIntroComplete] = useState(false)
  const [bioComplete, setBioComplete] = useState(false)
  const [skipAnimation, setSkipAnimation] = useState(false)
  const [message, setMessage] = useState("")
  const [name, setName] = useState("")
  const [userEmail, setUserEmail] = useState("")

  useEffect(() => {
    // Verificar localStorage al montar el componente
    const animationCompleted = localStorage.getItem("aboutAnimationCompleted") === "true"

    if (animationCompleted) {
      setSkipAnimation(true)
      setIntroComplete(true)
      setBioComplete(true)
    }

    // Indicar que la carga inicial ha terminado
    setIsLoading(false)
  }, [])

  // Guardar el estado de la animación cuando se complete la bio
  const handleBioComplete = () => {
    setBioComplete(true)
    localStorage.setItem("aboutAnimationCompleted", "true")
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    toast({
      title: t("about.copiedToClipboard"),
      description: `${text} ${t("about.clipboardDesc")}`,
      variant: "default",
      duration: 3000,
    })
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: t("about.messageSent"),
      description: t("about.messageDesc"),
      variant: "default",
      duration: 3000,
    })
    setMessage("")
    setName("")
    setUserEmail("")
  }

  const experiences = [
    {
      title: "Svenson",
      company: t("exp.svenson.company"),
      period: t("exp.svenson.period"),
      description: t("exp.svenson.desc"),
    },
    {
      title: t("exp.webDevelopment.title"),
      company: t("exp.webDevelopment.company"),
      period: t("exp.webDevelopment.period"),
      description: t("exp.webDevelopment.desc"),
    },
    {
      title: t("exp.university.title"),
      company: t("exp.university.company"),
      period: t("exp.university.period"),
      description: t("exp.university.desc"),
    },
  ]

  // Mostrar un estado de carga mientras se verifica localStorage
  if (isLoading) {
    return <div className="py-12 flex justify-center">{t("common.loading")}</div>
  }

  return (
    <div className="space-y-16">
      <section>
        {skipAnimation || bioComplete ? (
          <>
            <div className="terminal-window scanline max-w-3xl mx-auto">
              <div className="terminal-header">
                <div className="terminal-button terminal-button-red"></div>
                <div className="terminal-button terminal-button-yellow"></div>
                <div className="terminal-button terminal-button-green"></div>
                <div className="terminal-title">terminal</div>
              </div>
              <div className="terminal-content">
                <span className="text-neon-pink">$ </span>
                <span>{t("about.initProfile")}</span>
                <span className="terminal-cursor"></span>
              </div>
            </div>

            <div className="terminal-window scanline max-w-3xl mx-auto mt-4">
              <div className="terminal-header">
                <div className="terminal-button terminal-button-red"></div>
                <div className="terminal-button terminal-button-yellow"></div>
                <div className="terminal-button terminal-button-green"></div>
                <div className="terminal-title">terminal</div>
              </div>
              <div className="terminal-content">
                <span>{t("about.bio")}</span>
                <span className="terminal-cursor"></span>
              </div>
            </div>
          </>
        ) : (
          <>
            <Terminal
              text={t("about.initProfile")}
              typingSpeed={30}
              className="max-w-3xl mx-auto"
              onComplete={() => setIntroComplete(true)}
              skipAnimation={skipAnimation || introComplete}
            />

            {introComplete && (
              <Terminal
                text={t("about.bio")}
                typingSpeed={20}
                className="max-w-3xl mx-auto mt-4"
                showPrompt={false}
                onComplete={handleBioComplete}
                skipAnimation={skipAnimation || bioComplete}
              />
            )}
          </>
        )}

        <div className="flex justify-center gap-4 mt-12">
          <a
            href="/cv_drcv.pdf"
            download="cv_drcv.pdf"
            className="inline-flex items-center gap-2 bg-neon-pink/10 hover:bg-neon-pink/20 text-neon-pink px-6 py-3 rounded-md transition-colors border border-neon-pink/30 shadow-neon-pink font-mono hover:shadow-neon-pink"
          >
            <FileDown size={18} />
            {t("about.downloadCV")}
          </a>
          <a
            href="https://drive.google.com/file/d/1Xlg7lumtqVL73Y57Ry7--NsjY-Aesls3/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-neon-purple/10 hover:bg-neon-purple/20 text-neon-purple px-6 py-3 rounded-md transition-colors border border-neon-purple/30 shadow-neon-purple font-mono hover:shadow-neon-purple"
          >
            <ExternalLink size={18} />
            {t("about.viewOnline")}
          </a>
        </div>

        {/* Profile image section - commented out as requested */}
        {/*
        <div className="flex justify-center mt-12 animate-fade-in delay-200">
          <div className="relative">
            <div className="w-48 h-48 rounded-lg overflow-hidden border-2 border-neon-pink/30 shadow-neon-pink bg-cyber-dark/50 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-pink/10 via-transparent to-neon-purple/10"></div>
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src="/perfil2.webp"
                  alt="Profile picture"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-pink/5 to-transparent animate-pulse"></div>
            </div>
            <div className="absolute -top-2 -left-2 w-4 h-4 border-l-2 border-t-2 border-neon-pink/50"></div>
            <div className="absolute -top-2 -right-2 w-4 h-4 border-r-2 border-t-2 border-neon-pink/50"></div>
            <div className="absolute -bottom-2 -left-2 w-4 h-4 border-l-2 border-b-2 border-neon-pink/50"></div>
            <div className="absolute -bottom-2 -right-2 w-4 h-4 border-r-2 border-b-2 border-neon-pink/50"></div>
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
              <div className="bg-cyber-dark border border-neon-pink/30 px-3 py-1 rounded text-xs font-mono text-neon-pink">
                <span className="text-neon-pink">$</span> whoami
              </div>
            </div>
          </div>
        </div>
        */}
      </section>

      {bioComplete && (
        <>
          <section className="section-reveal delay-200">
            <h2 className="text-2xl font-bold mb-6 text-white neon-text-pink font-mono">
              {t("about.experienceTimeline")}
            </h2>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className={`terminal-window scanline animate-fade-in-up delay-${300 + index * 200}`}>
                  <div className="terminal-header">
                    <div className="terminal-button terminal-button-red"></div>
                    <div className="terminal-button terminal-button-yellow"></div>
                    <div className="terminal-button terminal-button-green"></div>
                    <div className="terminal-title">{exp.company || exp.title}.sh</div>
                  </div>
                  <div className="terminal-content">
                    <p className="mb-1">
                      <span className="text-neon-pink">$</span> cat job_details.txt
                    </p>
                    <div className="mb-2">
                      <p>
                        <span className="text-neon-pink">{t("common.title")}:</span> {exp.title}
                      </p>
                      <p>
                        <span className="text-neon-pink">{t("common.period")}:</span> {exp.period}
                      </p>
                      <p>
                        <span className="text-neon-pink">{t("common.description")}:</span> {exp.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="tech-stack-section section-reveal delay-700">
            <h2 className="text-2xl font-bold mb-6 text-white neon-text-pink font-mono">{t("about.techStack")}</h2>
            <div className="animate-slide-in delay-800">
              <TechStack />
            </div>
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
