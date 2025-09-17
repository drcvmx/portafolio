"use client"

import { useParams, notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Github, ExternalLink, Play, Pause } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import { useLanguage } from "@/contexts/language-context"

export default function ProjectPage() {
  const { id } = useParams<{ id: string }>()
  const { t } = useLanguage()
  const [activeImage, setActiveImage] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  // This would typically come from an API or database
  const projects = {
    drcv_company: {
      title: "drcv_company",
      description: t("projects.drcvCompany.desc"),
      images: [
        "/project_webp/drcv_company/company1.webp",
        "/project_webp/drcv_company/company2.webp",
        "/project_webp/drcv_company/company3.webp",
      ],
      technologies: ["Astro", "Vue.js", "Tailwind CSS", "SCSS", "Pinia", "TypeScript"],
      category: "web",
      github: "https://github.com/drcvmx/drcv_company",
      demo: "https://drcv-company.vercel.app/",
      longDescription: t("projects.drcvCompany.longDesc"),
    },
    drcv_note: {
      title: "drcv_note",
      description: t("projects.drcvNote.desc"),
      images: [
        "/project_webp/app_note/note4.webp",
        "/project_webp/app_note/note1.webp",
        "/project_webp/app_note/note2.webp",
        "/project_webp/app_note/note3.webp",
      ],
      technologies: ["React", "Next.js", "JavaScript", "TypeScript", "Supabase", "HTML", "CSS"],
      category: "app",
      github: "https://github.com/drcvmx/drcv_note",
      demo: "https://drcv-note.vercel.app/",
      longDescription: t("projects.drcvNote.longDesc"),
    },
    seprytec: {
      title: "Seprytec",
      description: t("projects.seprytec.desc"),
      images: [
        "/project_webp/seprytec/seprytec1.webp",
        "/project_webp/seprytec/seprytec2.webp",
        "/project_webp/seprytec/seprytec3.webp",
      ],
      technologies: ["Next.js", "React", "TailwindCSS", "JavaScript", "HTML", "CSS"],
      category: "web",
      github: "https://github.com/drcvmx/seprytec_remaster",
      demo: "https://seprytec-remaster.vercel.app/",
      longDescription: t("projects.seprytec.longDesc"),
    },
    carpinteria_verdeja: {
      title: "carpinteria_verdeja",
      description: t("projects.carpinteriaVerdeja.desc"),
      images: [
        "/project_webp/carpinteria/carpinteria1.webp",
        "/project_webp/carpinteria/carpinteria2.webp",
        "/project_webp/carpinteria/carpinteria3.webp",
      ],
      technologies: ["Next.js", "React", "TailwindCSS", "JavaScript", "HTML", "CSS"],
      category: "web",
      github: "https://github.com/drcvmx/carpinteria_verdeja",
      demo: "https://carpinteria-verdeja.vercel.app/",
      longDescription: t("projects.carpinteriaVerdeja.longDesc"),
    },
    crime_control: {
      title: "crime_control",
      description: t("projects.crimeControl.desc"),
      images: [
        "/project_webp/crimen/crimen4.webp",
        "/project_webp/crimen/crimen1.webp",
        "/project_webp/crimen/crimen2.webp",
        "/project_webp/crimen/crimen3.webp",
      ],
      technologies: ["React", "Next.js", "JavaScript", "TypeScript", "Supabase", "HTML", "CSS"],
      category: "app",
      github: "https://github.com/drcvmx/control_delincuencia_supabase",
      demo: "https://control-delincuencia-supabase-8zfs.vercel.app",
      longDescription: t("projects.crimeControl.longDesc"),
    },
    luchavsludopatia: {
      title: "luchavsludopatia",
      description: t("projects.luchavsludopatia.desc"),
      images: [
        "/project_webp/ludopatia/ludo1.webp",
        "/project_webp/ludopatia/ludo2.webp",
        "/project_webp/ludopatia/ludo3.webp",
      ],
      technologies: ["Next.js", "React", "TailwindCSS", "JavaScript", "HTML", "CSS"],
      category: "web",
      github: "https://github.com/drcvmx/luchavsludopatia",
      demo: "https://luchavsludopatia.vercel.app/",
      longDescription: t("projects.luchavsludopatia.longDesc"),
    },
    youtube_transcribe: {
      title: "youtube_transcribe",
      description: t("projects.youtubeTranscribe.desc"),
      images: ["/project_webp/youtube_transcribe/transcribe1.webp"],
      technologies: ["Next.js", "React", "Python", "Flask", "LLMs", "TailwindCSS", "JavaScript", "HTML", "CSS"],
      category: "app",
      github: "https://github.com/drcvmx/youtube-link-interface",
      demo: "https://github.com/drcvmx/youtube-link-interface",
      longDescription: t("projects.youtubeTranscribe.longDesc"),
    },
    sozu: {
      title: "sozu",
      description: t("projects.sozu.desc"),
      images: ["/project_webp/sozu/sozu2.webp", "/project_webp/sozu/sozu5.webp", "/project_webp/sozu/sozu6.webp", "/project_webp/sozu/sozu1.webp", "/project_webp/sozu/sozu3.webp", "/project_webp/sozu/sozu4.webp"],
      technologies: ["n8n", "React", "Next.js", "JavaScript", "TypeScript", "PostgreSQL", "HTML", "CSS"],
      category: "app",
      github: "https://github.com/drcvmx/login-con-validacion-sozu-nextjs",
      demo: "https://login-con-validacion-sozu-nextjs.vercel.app/login",
      longDescription: t("projects.sozu.longDesc"),
    },
  }

  const project = projects[id as keyof typeof projects]

  if (!project) {
    notFound()
  }

  const projectImages = project.images && project.images.length > 0 ? project.images : ["/placeholder.svg"]

  // Función para avanzar a la siguiente imagen con tiempos reducidos
  const nextImage = () => {
    if (isTransitioning) return

    setIsTransitioning(true)
    setTimeout(() => {
      setActiveImage((prev) => (prev + 1) % projectImages.length)
      setTimeout(() => {
        setIsTransitioning(false)
      }, 50)
    }, 200)
  }

  // Función para ir a una imagen específica con tiempos reducidos
  const goToImage = (index: number) => {
    if (index === activeImage || isTransitioning) return

    setIsTransitioning(true)
    setTimeout(() => {
      setActiveImage(index)
      setTimeout(() => {
        setIsTransitioning(false)
      }, 50)
    }, 200)
  }

  // Función para alternar el autoplay
  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying)
  }

  // Efecto para manejar el autoplay
  useEffect(() => {
    if (isAutoPlaying && projectImages.length > 1) {
      intervalRef.current = setInterval(() => {
        nextImage()
      }, 5000)
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isAutoPlaying, projectImages.length, isTransitioning])

  // Pausar autoplay cuando el usuario interactúa manualmente
  const handleManualNavigation = (index: number) => {
    goToImage(index)
    if (isAutoPlaying) {
      setIsAutoPlaying(false)
      setTimeout(() => {
        setIsAutoPlaying(true)
      }, 10000)
    }
  }

  return (
    <div className="space-y-8">
      <Link href="/projects" className="inline-flex items-center gap-2 text-primary hover:underline">
        <ArrowLeft size={16} /> {t("project.backToProjects")}
      </Link>

      <div className="terminal-window">
        <div className="terminal-header">
          <div className="terminal-button terminal-button-red"></div>
          <div className="terminal-button terminal-button-yellow"></div>
          <div className="terminal-button terminal-button-green"></div>
          <div className="terminal-title">project_details.sh</div>
        </div>
        <div className="terminal-content">
          <p className="mb-2">
            <span className="text-primary">$</span> cat {id}.json
          </p>
          <div className="mb-4">
            <p>
              <span className="text-primary">{t("common.title")}:</span> {project.title}
            </p>
            <p>
              <span className="text-primary">{t("common.category")}:</span> {project.category}
            </p>
            <p className="flex flex-wrap gap-2 mt-2">
              <span className="text-primary">{t("common.stack")}:</span>
              {project.technologies.map((tech, index) => (
                <span key={index} className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded">
                  {tech}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>

      {/* Galería de imágenes */}
      <div className="space-y-4">
        <div className="terminal-window p-0 overflow-hidden">
          <div className="terminal-header">
            <div className="terminal-button terminal-button-red"></div>
            <div className="terminal-button terminal-button-yellow"></div>
            <div className="terminal-button terminal-button-green"></div>
            <div className="terminal-title">project_screenshots.sh</div>
            {/* Control de autoplay */}
            {projectImages.length > 1 && (
              <div className="ml-auto mr-2">
                <button
                  onClick={toggleAutoPlay}
                  className="text-neon-pink hover:text-neon-purple transition-colors"
                  title={isAutoPlaying ? t("project.pauseSlideshow") : t("project.playSlideshow")}
                >
                  {isAutoPlaying ? <Pause size={16} /> : <Play size={16} />}
                </button>
              </div>
            )}
          </div>
          <div className="relative aspect-video w-full bg-[rgba(13,10,30,0.8)] overflow-hidden">
            <div className="relative aspect-video w-full bg-cyber-darker overflow-hidden border border-neon-pink/30">
              <Image
                src={projectImages[activeImage] || "/placeholder.svg"}
                alt={`Screenshot ${activeImage + 1} of ${project.title}`}
                fill
                className={`object-contain transition-opacity duration-300 ${isTransitioning ? "opacity-0" : "opacity-100"}`}
              />

              {/* Overlay gradient estandarizado */}
              <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark/60 via-transparent to-cyber-dark/20"></div>

              {/* Scanline effect sutil */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-pink/3 to-transparent"></div>

              {/* Corner decorations */}
              <div className="absolute top-3 left-3 w-4 h-4 border-l-2 border-t-2 border-neon-pink/70"></div>
              <div className="absolute top-3 right-3 w-4 h-4 border-r-2 border-t-2 border-neon-pink/70"></div>
              <div className="absolute bottom-3 left-3 w-4 h-4 border-l-2 border-b-2 border-neon-pink/70"></div>
              <div className="absolute bottom-3 right-3 w-4 h-4 border-r-2 border-b-2 border-neon-pink/70"></div>

              {/* Contador de imágenes */}
              {projectImages.length > 1 && (
                <div className="absolute top-4 right-4 bg-cyber-dark/90 backdrop-blur-sm px-3 py-1 rounded-md text-sm text-neon-pink font-mono border border-neon-pink/30 z-10">
                  {activeImage + 1} / {projectImages.length}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Miniaturas con efectos más sutiles */}
        {projectImages.length > 1 && (
          <div className="flex justify-center gap-3 mt-4">
            {projectImages.map((img, index) => (
              <button
                key={index}
                onClick={() => handleManualNavigation(index)}
                disabled={isTransitioning}
                className={`relative w-20 h-12 rounded-md overflow-hidden border-2 transition-all duration-200 ${
                  activeImage === index
                    ? "border-neon-pink shadow-neon-pink scale-105"
                    : "border-neon-pink/30 opacity-70 hover:opacity-100 hover:border-neon-pink/60 hover:scale-102"
                } ${isTransitioning ? "pointer-events-none opacity-50" : ""}`}
              >
                <Image
                  src={img || "/placeholder.svg"}
                  alt={`Thumbnail ${index + 1}`}
                  fill
                  className="object-cover filter brightness-90 contrast-110"
                />

                {/* Overlay para miniaturas */}
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark/40 to-transparent"></div>

                {/* Corner decorations para miniaturas */}
                <div className="absolute top-1 left-1 w-2 h-2 border-l border-t border-neon-pink/50"></div>
                <div className="absolute top-1 right-1 w-2 h-2 border-r border-t border-neon-pink/50"></div>
                <div className="absolute bottom-1 left-1 w-2 h-2 border-l border-b border-neon-pink/50"></div>
                <div className="absolute bottom-1 right-1 w-2 h-2 border-r border-b border-neon-pink/50"></div>

                {/* Indicador de imagen activa */}
                {activeImage === index && (
                  <div className="absolute inset-0 bg-neon-pink/10 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-neon-pink rounded-full shadow-neon-pink"></div>
                  </div>
                )}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="flex flex-wrap gap-4">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/80 text-secondary-foreground px-4 py-2 rounded-md transition-colors"
        >
          <Github size={16} /> {t("project.viewOnGithub")}
        </a>
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-primary/10 hover:bg-primary/20 text-primary px-4 py-2 rounded-md transition-colors border border-primary/30"
        >
          <ExternalLink size={16} /> {t("project.liveDemo")}
        </a>
      </div>

      <div className="prose prose-invert max-w-none">
        <h2 className="text-2xl font-bold mb-4 text-neon-pink">{t("project.overview")}</h2>
        <p className="text-muted-foreground">{project.longDescription}</p>
      </div>

      <style jsx>{`
        .image-container {
          width: 100%;
          height: 100%;
          position: relative;
        }
      `}</style>
    </div>
  )
}
