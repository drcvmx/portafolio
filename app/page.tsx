"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Terminal } from "@/components/terminal"
import { ProjectCard } from "@/components/project-card"
import { TechStack } from "@/components/tech-stack"
import { ArrowRight } from "lucide-react"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [introComplete, setIntroComplete] = useState(false)
  const [skipAnimation, setSkipAnimation] = useState(false)

  useEffect(() => {
    const animationCompleted = localStorage.getItem("introAnimationCompleted") === "true"

    if (animationCompleted) {
      setSkipAnimation(true)
      setIntroComplete(true)
    }

    setIsLoading(false)
  }, [])

  const handleIntroComplete = () => {
    setIntroComplete(true)
    localStorage.setItem("introAnimationCompleted", "true")
  }

  const featuredProjects = [
    {
      id: "seprytec",
      title: "seprytec",
      description: "A modern website for a private security company, crafted to instill user trust and comfort through intuitive design.",
      image: "project/seprytec/seprytec1.png",
      technologies: ["Next.js", "React", "TailwindCSS", "JavaScript"],
    },
    {
      id: "carpinteria_verdeja",
      title: "carpinteria_verdeja",
      description: "Intuitive and visually impactful frontend webpage, focused on offering a pleasant navigation experience and a memorable design.",
      image: "project/carpinteria/carpinteria1.png",
      technologies: ["Next.js", "React", "TailwindCSS", "JavaScript"],      
    },
    {
      id: "crime_control",
      title: "crime_control",
      description: "A real-time crime control system that centralizes criminal data, incident tracking, and provides precise offender location within correctional facilities, enabling rapid and strategic police response.",
      image: "project/crimen/crimen1.png",
      technologies: ["React", "Next.js", "JavaScript", "Supabase"],
    },
  ]

  if (isLoading) {
    return <div className="py-12 flex justify-center text-neon-pink">Loading...</div>
  }

  return (
    <div className="space-y-16">
      <section className="py-12">
        {(skipAnimation || introComplete) ? (
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
          <Terminal
            text="Hello, my name is Dante. I am a Frontend developer passionate about web design and programming"
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
                {featuredProjects.map((project, index) => (
                  <div key={project.id} className={`project-card-reveal delay-${400 + index * 100}`}>
                    <ProjectCard {...project} />
                  </div>
                ))}
              </div>
          </section>

          <section className="tech-stack-section">
            <h2 className="text-2xl font-bold mb-6 text-white neon-text-pink font-mono">Tech Stack</h2>
            <TechStack />
          </section>
        </>
      )}
    </div>
  )
}
