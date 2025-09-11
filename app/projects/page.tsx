"use client"

import { useState, useEffect } from "react"
import { ProjectCard } from "@/components/project-card"
import { Terminal } from "@/components/terminal"

export default function ProjectsPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [activeFilter, setActiveFilter] = useState<string>("all")
  const [introComplete, setIntroComplete] = useState(false)
  const [skipAnimation, setSkipAnimation] = useState(false)

  useEffect(() => {
<<<<<<< HEAD
=======
    // Verificar localStorage al montar el componente
>>>>>>> v2
    const animationCompleted = localStorage.getItem("projectsAnimationCompleted") === "true"

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
    localStorage.setItem("projectsAnimationCompleted", "true")
  }

  const projects = [
    {
      id: "drcv_company",
      title: "drcv_company",
      description: "A modern corporate website designed to boost companies' online presence, offering a professional and visually impactful experience for their clients.",
      image: "project_webp/drcv_company/company1.webp",
      technologies: ["Astro", "Vue.js", "SCSS", "TypeScript"],
      category: "web",
    },
    {
      id: "seprytec",
      title: "seprytec",
<<<<<<< HEAD
      description: "A modern website for a private security company, crafted to instill user trust and comfort through intuitive design.",
=======
      description: t("projects.seprytec.desc"),
>>>>>>> v2
      image: "project_webp/seprytec/seprytec1.webp",
      technologies: ["Next.js", "React", "TailwindCSS", "JavaScript"],
      category: "web",
    },
<<<<<<< HEAD
    {
      id: "drcv_note",
      title: "drcv_note",
      description: "Your digital space for big and small ideas. Save everything from quick reminders to detailed and structured notes, all in one intuitive and organized place.",
=======
        {
      id: "sozu",
      title: "sozu",
      description: t("projects.sozu.desc"),
      image: "project_webp/sozu/sozu3.webp",
      technologies: ["n8n", "Next.js", "JavaScript", "PostgreSQL"],
      category: "app",
    },
    {
      id: "drcv_note",
      title: "drcv_note",
      description: t("projects.drcvNote.desc"),
>>>>>>> v2
      image: "project_webp/app_note/note4.webp",
      technologies: ["React", "Next.js", "JavaScript", "Supabase"],
      category: "app",
    },
    {
      id: "carpinteria_verdeja",
      title: "carpinteria_verdeja",
      description: "Intuitive and visually impactful frontend webpage, focused on offering a pleasant navigation experience and a memorable design.",
      image: "project_webp/carpinteria/carpinteria1.webp",
      technologies: ["Next.js", "React", "TailwindCSS", "JavaScript"],
      category: "web",
    },
    {
      id: "crime_control",
      title: "crime_control",
<<<<<<< HEAD
      description: "A real-time crime control system that centralizes criminal data, incident tracking, and provides precise offender location within correctional facilities, enabling rapid and strategic police response.",
=======
      description: t("projects.crimeControl.desc"),
>>>>>>> v2
      image: "project_webp/crimen/crimen1.webp",
      technologies: ["React", "Next.js", "JavaScript", "Supabase"],
      category: "app",
    },
    {
      id: "luchavsludopatia",
      title: "luchavsludopatia",
<<<<<<< HEAD
      description: "A supportive and informative website dedicated to combating gambling addiction, drawing inspiration from government resources to offer information, tools, and resources for prevention and seeking help.",
=======
      description: t("projects.luchavsludopatia.desc"),
>>>>>>> v2
      image: "project_webp/ludopatia/ludo1.webp",
      technologies: ["Next.js", "React", "TailwindCSS", "JavaScript"],
      category: "web",
    },
    {
      id: "youtube_transcribe",
      title: "youtube_transcribe",
<<<<<<< HEAD
      description: "A web application that extracts and analyzes the content of YouTube videos (via their transcripts) using a Python backend and natural language processing capabilities",
=======
      description: t("projects.youtubeTranscribe.desc"),
>>>>>>> v2
      image: "project_webp/youtube_transcribe/transcribe1.webp",
      technologies: ["React", "Next.js", "JavaScript", "Python", "Flask"],
      category: "app",
    },
<<<<<<< HEAD
    {
      id: "school_system",
      title: "school_system",
      description: "This project develops a school management system to efficiently digitize academic and administrative data, allowing secure and remote access for authorized users.",
      image: "project_webp/system/systemv1.webp",
      technologies: ["React", "Next.js", "JavaScript", "Supabase"],
      category: "app",
    },
  ]

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "web", name: "Static Web" },
    { id: "app", name: "Web App"},
=======
  ]

  const categories = [
    { id: "all", name: t("projects.allProjects") },
    { id: "web", name: t("projects.staticWeb") },
    { id: "app", name: t("projects.webApp") },
>>>>>>> v2
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

<<<<<<< HEAD
  if (isLoading) {
    return <div className="py-12 flex justify-center">Loading...</div>
=======
  // Mostrar un estado de carga mientras se verifica localStorage
  if (isLoading) {
    return <div className="py-12 flex justify-center">{t("common.loading")}</div>
>>>>>>> v2
  }

  return (
    <div className="space-y-8">
      {(skipAnimation || introComplete) ? (
      {(skipAnimation || introComplete) ? (
=======
      {skipAnimation || introComplete ? (
>>>>>>> v2
        <div className="terminal-window scanline">
          <div className="terminal-header">
            <div className="terminal-button terminal-button-red"></div>
            <div className="terminal-button terminal-button-yellow"></div>
            <div className="terminal-button terminal-button-green"></div>
            <div className="terminal-title">projects.sh</div>
          </div>
          <div className="terminal-content">
            <p className="mb-4">
<<<<<<< HEAD
              <span className="text-primary">$</span> Displaying projects directory. Select category to filter results.
=======
              <span className="text-primary">$</span> {t("projects.title")}
>>>>>>> v2
              <span className="terminal-cursor"></span>
            </p>
          </div>
        </div>
      ) : (
        <Terminal
<<<<<<< HEAD
          text="Displaying projects directory. Select category to filter results."
=======
          text={t("projects.title")}
>>>>>>> v2
          typingSpeed={40}
          className="w-full"
          onComplete={handleIntroComplete}
          skipAnimation={skipAnimation}
        />
      )}

<<<<<<< HEAD
{introComplete && (
=======
      {introComplete && (
>>>>>>> v2
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
