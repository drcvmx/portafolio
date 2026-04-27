"use client"

import { useParams, notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Github, ExternalLink, Globe, Play, Pause } from "lucide-react"
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
    aisuite: {
      title: "AISUITE - Pipeline de Inteligencia On-Premise",
      description: t("projects.aisuite.desc"),
      images: [
        "/project_webp/youtube_transcribe/00.png",
        "/project_webp/youtube_transcribe/01.png",
        "/project_webp/youtube_transcribe/02.png",
      ],
      videoUrl: "https://drive.google.com/file/d/1DZ5351TBt1G-I5S1wP7P4Zc9OtpdNNCQ/preview",
      technologies: ["Zero-Data Leakage", "Llama 3 Local", "Next.js 14", "PM2 Server", "Cloudflare Tunnels", "Python/Flask"],
      category: "app",
      github: "#",
      demo: "https://aisuite.drcv.online/",
      production: "#",
      longDescription: t("projects.aisuite.longDesc"),
      credentials: { user: "prueba@drcv.company", pass: "pruebas123" },
    },
    pos: {
      title: "DRCV Store - Retail IA Ecosistema",
      description: t("projects.pos.desc"),
      images: [
        "/project_webp/seprytec/store/01.png",
        "/project_webp/seprytec/store/02.png",
        "/project_webp/seprytec/store/03.png",
        "/project_webp/seprytec/store/04.png",
      ],
      videoUrl: "https://drive.google.com/file/d/1lNEgr6vZ6ie-cprDcxAEoav3oBAjEE9M/preview",
      technologies: ["Next.js", "NestJS", "Tailwind CSS", "Ollama", "Qwen 7B", "PostgreSQL"],
      category: "app",
      github: "#",
      demo: "https://store.drcv.online/store",
      production: "https://store.drcv.online/store",
      longDescription: t("projects.pos.longDesc"),
    },
    noteDrcv: {
      title: "Note DRCV (Productivity On-Premise)",
      description: t("projects.noteDrcv.desc"),
      images: [
        "/project_webp/note/note1.png",
        "/project_webp/note/note2.png",
      ],
      technologies: ["Next.js", "React", "Tailwind CSS", "Python 3.14", "FastAPI", "PostgreSQL", "SQLAlchemy", "JWT & Bcrypt", "Supabase (Docker)", "PM2", "Cloudflare Tunnels"],
      category: "app",
      github: "https://github.com/drcvmx/noteapp",
      demo: "https://note.drcv.online/",
      production: "https://note.drcv.online/",
      longDescription: t("projects.noteDrcv.longDesc"),
    },
    battlekart: {
      title: "Go-Kart Zen Loyalty System",
      description: t("projects.battlekart.desc"),
      images: [
        "/project_webp/battlekart/bk1.jpg",
        "/project_webp/battlekart/bk2.jpg",
        "/project_webp/battlekart/bk3.jpg",
        "/project_webp/battlekart/bk4.jpg",
        "/project_webp/battlekart/bk5.jpg",
        "/project_webp/battlekart/bk6.jpg",
      ],
      isMobileDesign: true,
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Lucide React", "Supabase"],
      category: "app",
      github: "https://github.com/drcvmx/battlekart-drcv",
      demo: "https://battlekarvip.drcv.site/",
      production: "https://battlekartvip.com/",
      longDescription: t("projects.battlekart.longDesc"),
    },
    catalogo: {
      title: "Green Alchemy — Catálogo Digital",
      description: t("projects.catalogo.desc"),
      images: [
        "/project_webp/catalogo/catalogo1.png",
        "/project_webp/catalogo/catalogo2.png",
        "/project_webp/catalogo/catalogo3.png",
        "/project_webp/catalogo/catalogo4.png",
      ],
      technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Supabase"],
      category: "app",
      github: "https://github.com/drcvmx/catalogo-alchemy",
      demo: "https://catalogo-alchemy.drcv.site/",
      production: "https://catalogo-alchemy.drcv.site/",
      longDescription: t("projects.catalogo.longDesc"),
    },
    balazhi: {
      title: "Balazhi Stone",
      description: t("projects.balazhi.desc"),
      images: [
        "/project_webp/balazhi/balazhi1.png",
        "/project_webp/balazhi/balazhi2.png",
        "/project_webp/balazhi/balaxhi3.png",
        "/project_webp/balazhi/balazhi4.png",
      ],
      technologies: ["React", "TypeScript", "Vite", "Tailwind CSS"],
      category: "web",
      github: "https://github.com/drcvmx/balazhi-for-drcv",
      demo: "https://balazhi.drcv.site/",
      production: "https://balazhistone.com/",
      longDescription: t("projects.balazhi.longDesc"),
    },
    green_alchemy_sgl: {
      title: "Green Alchemy SGL",
      description: t("projects.greenAlchemy.desc"),
      images: [
        "/project_webp/greensystem/green1.png",
        "/project_webp/greensystem/green2.png",
        "/project_webp/greensystem/green3.png",
        "/project_webp/greensystem/green4.png",
      ],
      technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Supabase"],
      category: "app",
      github: "https://github.com/drcvmx/greensystem-for-drcv",
      demo: "https://greensystem.com.mx/",
      production: "https://greensystem.com.mx/",
      longDescription: t("projects.greenAlchemy.longDesc"),
    },
    one_soul: {
      title: "ONE · Soul Essence",
      description: t("projects.one.desc"),
      images: [
        "/project_webp/one/one1.png",
        "/project_webp/one/one2.png",
        "/project_webp/one/one3.png",
        "/project_webp/one/one4.png",
      ],
      technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Supabase"],
      category: "web",
      github: "https://github.com/drcvmx/onefordrcv",
      demo: "https://one.drcv.site/",
      production: "https://onesomosuno.com/",
      longDescription: t("projects.one.longDesc"),
    },
    probin: {
      title: "Probin Real Estate CMS",
      description: t("projects.probin.desc"),
      images: [
        "/project_webp/probin/probin1.png",
        "/project_webp/probin/probin2.png",
        "/project_webp/probin/probin3.png",
        "/project_webp/probin/probin4.png",
      ],
      technologies: ["React", "TypeScript", "Tailwind CSS", "Lucide React", "Supabase"],
      category: "app",
      github: "https://github.com/drcvmx/probin-for-dante",
      demo: "https://probin.drcv.site/",
      production: "https://probinrealestate.com/",
      longDescription: t("projects.probin.longDesc"),
    },
    winpot: {
      title: "Winpot CMS & Multi-Tenant",
      description: t("projects.winpot.desc"),
      images: [
        "/project_webp/winpot/winpot1.png",
        "/project_webp/winpot/winport21.png",
        "/project_webp/winpot/winport3.1.png",
        "/project_webp/winpot/winpot4.png",
      ],
      technologies: ["React", "TypeScript", "Tailwind CSS", "Supabase"],
      category: "app",
      github: "https://github.com/drcvmx/winpotfordrcv",
      demo: "http://winpot.drcv.site/",
      production: "https://winpotsetup.com/",
      longDescription: t("projects.winpot.longDesc"),
    },
    seprytec: {
      title: "Seprytec",
      description: t("projects.seprytec.desc"),
      images: [
        "/project_webp/seprytec/seprytec1.webp",
        "/project_webp/seprytec/seprytec2.webp",
        "/project_webp/seprytec/seprytec3.webp",
      ],
      technologies: ["Next.js", "React", "Tailwind CSS", "JavaScript"],
      category: "web",
      github: "https://github.com/drcvmx/seprytec_remaster",
      demo: "https://seprytec.drcv.site/",
      production: "#",
      longDescription: t("projects.seprytec.longDesc"),
    },
  }

  const project = projects[id as keyof typeof projects]

  if (!project) {
    notFound()
  }

  const hasImages = project.images && project.images.length > 0;
  const hasVideo = 'videoUrl' in project && project.videoUrl;
  
  const projectImages = hasImages ? project.images : (!hasVideo ? ["/placeholder.svg"] : [])
  
  // Construir array mixto para el carrusel
  const carouselItems = [
    ...projectImages.map(url => ({ type: 'image', url }))
  ]
  if (hasVideo) {
    carouselItems.push({ type: 'video', url: project.videoUrl as string })
  }

  // Función para avanzar a la siguiente imagen con tiempos reducidos
  const nextImage = () => {
    if (isTransitioning) return

    setIsTransitioning(true)
    setTimeout(() => {
      setActiveImage((prev) => (prev + 1) % carouselItems.length)
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
    // Si la imagen actual es de tipo video, pausar el autoplay temporalmente
    // No queremos que cambie automáticamente mientras el usuario podría estar viendo el video.
    const isCurrentVideo = carouselItems[activeImage]?.type === 'video';

    if (isAutoPlaying && carouselItems.length > 1 && !isCurrentVideo) {
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
  }, [isAutoPlaying, carouselItems.length, isTransitioning, activeImage])

  // Pausar autoplay cuando el usuario interactúa manualmente
  const handleManualNavigation = (index: number) => {
    goToImage(index)
    if (isAutoPlaying) {
      setIsAutoPlaying(false)
      setTimeout(() => {
        setIsAutoPlaying(true)
      }, 15000)
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

      {/* Galería de Medios Integrada */}
      <div className="space-y-4">
        {carouselItems.length > 0 && (
          <div className="terminal-window p-0 overflow-hidden">
            <div className="terminal-header">
              <div className="terminal-button terminal-button-red"></div>
              <div className="terminal-button terminal-button-yellow"></div>
              <div className="terminal-button terminal-button-green"></div>
              <div className="terminal-title">project_media.sh</div>
              {/* Control de autoplay */}
              {carouselItems.length > 1 && (
                <div className="ml-auto mr-2">
                  <button
                    onClick={toggleAutoPlay}
                    className="text-accent-500 hover:text-accent-400 transition-colors"
                    title={isAutoPlaying ? t("project.pauseSlideshow") : t("project.playSlideshow")}
                  >
                    {isAutoPlaying ? <Pause size={16} /> : <Play size={16} />}
                  </button>
                </div>
              )}
            </div>

            {('isMobileDesign' in project && project.isMobileDesign) ? (
              /* MOBILE MODE */
              <div className="relative w-full bg-[rgba(13,10,30,0.8)] overflow-hidden border border-accent-500/30 p-6">
                <div className="flex justify-center gap-4 overflow-x-auto py-4">
                  {carouselItems.map((item, index) => (
                    <div
                      key={index}
                      className={`relative flex-shrink-0 w-48 h-[420px] rounded-2xl overflow-hidden border-2 transition-all duration-300 cursor-pointer ${
                        activeImage === index
                          ? 'border-accent-500 shadow-accent-purple scale-105'
                          : 'border-accent-500/30 opacity-80 hover:opacity-100 hover:border-accent-500/60'
                      }`}
                      onClick={() => handleManualNavigation(index)}
                    >
                      {item.type === 'image' ? (
                        <Image
                          src={item.url || '/placeholder.svg'}
                          alt={`Screenshot ${index + 1} of ${project.title}`}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-black/60 flex items-center justify-center">
                          <Play className="w-12 h-12 text-accent-500 opacity-80" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                {/* Corner decorations */}
                <div className="absolute top-3 left-3 w-4 h-4 border-l-2 border-t-2 border-accent-500/70"></div>
                <div className="absolute top-3 right-3 w-4 h-4 border-r-2 border-t-2 border-accent-500/70"></div>
                <div className="absolute bottom-3 left-3 w-4 h-4 border-l-2 border-b-2 border-accent-500/70"></div>
                <div className="absolute bottom-3 right-3 w-4 h-4 border-r-2 border-b-2 border-accent-500/70"></div>
              </div>
            ) : (
              /* STANDARD MODE */
              <div className="relative aspect-video w-full bg-[rgba(13,10,30,0.8)] overflow-hidden">
                <div className="relative aspect-video w-full bg-drcv-600 overflow-hidden border border-accent-500/30">
                  {carouselItems[activeImage].type === 'image' ? (
                    <Image
                      src={carouselItems[activeImage].url || "/placeholder.svg"}
                      alt={`Screenshot ${activeImage + 1} of ${project.title}`}
                      fill
                      className={`object-contain transition-opacity duration-300 ${isTransitioning ? "opacity-0" : "opacity-100"}`}
                    />
                  ) : (
                    <div className={`absolute inset-0 w-full h-full transition-opacity duration-300 ${isTransitioning ? "opacity-0" : "opacity-100"}`}>
                      <iframe
                        src={carouselItems[activeImage].url}
                        className="w-full h-full"
                        allow="encrypted-media"
                        allowFullScreen
                        title={project.title}
                        style={{ border: 'none' }}
                      />
                    </div>
                  )}

                  {/* Overlay gradient estandarizado */}
                  {carouselItems[activeImage].type === 'image' && (
                    <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark/60 via-transparent to-cyber-dark/20 pointer-events-none"></div>
                  )}

                  {/* Corner decorations */}
                  <div className="absolute top-3 left-3 w-4 h-4 border-l-2 border-t-2 border-accent-500/70 pointer-events-none"></div>
                  <div className="absolute top-3 right-3 w-4 h-4 border-r-2 border-t-2 border-accent-500/70 pointer-events-none"></div>
                  <div className="absolute bottom-3 left-3 w-4 h-4 border-l-2 border-b-2 border-accent-500/70 pointer-events-none"></div>
                  <div className="absolute bottom-3 right-3 w-4 h-4 border-r-2 border-b-2 border-accent-500/70 pointer-events-none"></div>

                  {/* Contador de imágenes */}
                  {carouselItems.length > 1 && (
                    <div className="absolute top-4 right-4 bg-drcv-600/90 backdrop-blur-sm px-3 py-1 rounded-md text-sm text-accent-500 font-mono border border-accent-500/30 z-10 pointer-events-none">
                      {activeImage + 1} / {carouselItems.length}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Miniaturas - solo en modo estándar (NO mobile) y si hay múltiples elementos */}
            {!('isMobileDesign' in project && project.isMobileDesign) && carouselItems.length > 1 && (
              <div className="flex justify-center gap-3 mt-4 mb-4">
                {carouselItems.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => handleManualNavigation(index)}
                    disabled={isTransitioning}
                    className={`relative w-20 h-12 rounded-md overflow-hidden border-2 transition-all duration-200 ${
                      activeImage === index
                        ? "border-accent-500 shadow-accent-purple scale-105"
                        : "border-accent-500/30 opacity-70 hover:opacity-100 hover:border-accent-500/60 hover:scale-102"
                    } ${isTransitioning ? "pointer-events-none opacity-50" : ""}`}
                  >
                    {item.type === 'image' ? (
                      <Image
                        src={item.url || "/placeholder.svg"}
                        alt={`Thumbnail ${index + 1}`}
                        fill
                        className="object-cover filter brightness-90 contrast-110"
                      />
                    ) : (
                      <div className="w-full h-full bg-black/80 flex items-center justify-center">
                        <Play className="w-6 h-6 text-accent-500 opacity-90" />
                      </div>
                    )}

                    {/* Overlay para miniaturas */}
                    <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark/40 to-transparent"></div>

                    {/* Corner decorations para miniaturas */}
                    <div className="absolute top-1 left-1 w-2 h-2 border-l border-t border-accent-500/50"></div>
                    <div className="absolute top-1 right-1 w-2 h-2 border-r border-t border-accent-500/50"></div>
                    <div className="absolute bottom-1 left-1 w-2 h-2 border-l border-b border-accent-500/50"></div>
                    <div className="absolute bottom-1 right-1 w-2 h-2 border-r border-b border-accent-500/50"></div>

                    {/* Indicador de imagen activa */}
                    {activeImage === index && (
                      <div className="absolute inset-0 bg-accent-500/10 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-accent-500 rounded-full shadow-accent-purple"></div>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      <div className="flex flex-wrap gap-4">
        {project.github && project.github !== "#" && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/80 text-secondary-foreground px-4 py-2 rounded-md transition-colors"
          >
            <Github size={16} /> {t("project.viewOnGithub")}
          </a>
        )}
        {project.demo && project.demo !== "#" && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary/10 hover:bg-primary/20 text-primary px-4 py-2 rounded-md transition-colors border border-primary/30"
          >
            <ExternalLink size={16} /> {t("project.liveDemo")}
          </a>
        )}
        {project.production && project.production !== "#" && project.production !== project.demo && (
          <a
            href={project.production}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent-500/20 hover:bg-accent-500/30 text-accent-500 px-4 py-2 rounded-md transition-colors border border-accent-500/40 font-bold"
          >
            <Globe size={16} /> {t("project.production")}
          </a>
        )}
      </div>

      <div className="prose prose-invert max-w-none">
        <h2 className="text-2xl font-bold mb-4 text-white neon-text-purple">{t("project.overview")}</h2>
        <p className="text-muted-foreground">{project.longDescription}</p>
      </div>

      {/* Credenciales de acceso (solo para proyectos premium como AISUITE) */}
      {'credentials' in project && project.credentials && (
        <div className="terminal-window max-w-md">
          <div className="terminal-header">
            <div className="terminal-button terminal-button-red"></div>
            <div className="terminal-button terminal-button-yellow"></div>
            <div className="terminal-button terminal-button-green"></div>
            <div className="terminal-title">access_credentials.sh</div>
          </div>
          <div className="terminal-content">
            <p className="mb-1">
              <span className="text-accent-500">user:</span> {(project.credentials as {user: string, pass: string}).user}
            </p>
            <p>
              <span className="text-accent-500">pass:</span> {(project.credentials as {user: string, pass: string}).pass}
            </p>
          </div>
        </div>
      )}

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
