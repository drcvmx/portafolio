"use client"

import { useParams, notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Github, ExternalLink, Play, Pause } from "lucide-react"
import { useState, useEffect, useRef } from "react"

export default function ProjectPage() {
  const { id } = useParams<{ id: string }>()
  const [activeImage, setActiveImage] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const projects = {
    "drcv_note": {
      title: "drcv_note",
      description: "Your digital space for big and small ideas. Save everything from quick reminders to detailed and structured notes, all in one intuitive and organized place.",
      images: [ "/project/app_note/note4.png", "/project/app_note/note1.png", "/project/app_note/note2.png", "/project/app_note/note3.png"],
      technologies: ["React", "Next.js", "JavaScript","TypeScript", "Supabase", "HTML", "CSS"],
      category: "app",
      github: "https://github.com/drcvmx/drcv_note",
      demo: "https://drcv-note.vercel.app/",
      longDescription:
        "This project offers a notes application designed to be your perfect ally in organizing information. With a simple and intuitive interface, you can quickly capture those fleeting ideas or develop extensive and well-structured notes. The goal is to provide you with a digital space where managing your notes feels natural and efficient.",
    },
    "seprytec": {
      title: "Seprytec",
      description: "A modern website for a private security company, crafted to instill user trust and comfort through intuitive design.",
      images: ["/project/seprytec/seprytec1.png", "/project/seprytec/seprytec2.png", "/project/seprytec/seprytec3.png"],
      technologies: ["Next.js", "React", "TailwindCSS", "JavaScript", "HTML", "CSS"],
      category: "web",
      github: "https://github.com/drcvmx/seprytec_remaster",
      demo: "https://seprytec-remaster.vercel.app/",            
      longDescription:
        "Built with React and Next.js, this interactive web platform is designed for visual appeal and ease of use, providing intuitive navigation and dynamic sections with interactive buttons that seamlessly guide users through the private security company's services and information.",
    },
    "carpinteria_verdeja": {
      title: "carpinteria_verdeja",
      description: "Design focused on the experience.",
      images: ["/project/carpinteria/carpinteria1.png", "/project/carpinteria/carpinteria2.png", "/project/carpinteria/carpinteria3.png"],
      technologies: ["Next.js", "React", "TailwindCSS", "JavaScript", "HTML", "CSS"],
      category: "web",
      github: "https://github.com/drcvmx/carpinteria_verdeja",
      demo: "https://carpinteria-verdeja.vercel.app/",
      longDescription:
        "Intuitive and visually impactful frontend webpage, focused on offering a pleasant navigation experience and a memorable design.",
    },
    "crime_control": {
      title: "crime_control",
      description: "An advanced crime control system that centralizes the management and analysis of criminal data in real-time. It not only tracks incidents but also provides the exact location of offenders within cells and prisons, facilitating a faster and more strategic police response.",
      images: ["/project/crimen/crimen4.png", "/project/crimen/crimen1.png", "/project/crimen/crimen2.png", "/project/crimen/crimen3.png"],
      technologies: ["React", "Next.js", "JavaScript", "TypeScript", "Supabase", "HTML", "CSS"],
      category: "app",
      github: "https://github.com/drcvmx/control_delincuencia_supabase",
      demo: "https://control-delincuencia-supabase-8zfs.vercel.app",
      longDescription:
        "This project develops a comprehensive platform for the administration and predictive analysis of criminal activity, integrating diverse data sources such as incident reports and suspect profiles. Its capability extends to clearly differentiating between civilians and offenders, and crucially, it manages and displays in real-time the location of individuals deprived of liberty within specific cells and prisons. The system aims to optimize resource allocation, enhance coordination among law enforcement agencies, and strengthen crime prevention strategies, all through a robust, accessible, and detailed database.",
    },  
    "luchavsludopatia": {
      title: "luchavsludopatia",
      description: "A supportive and informative website dedicated to combating gambling addiction, drawing inspiration from government resources to offer information, tools, and resources for prevention and seeking help.",
      images: ["/project/ludopatia/ludo1.png", "/project/ludopatia/ludo2.png", "/project/ludopatia/ludo3.png"],
      technologies: ["Next.js", "React", "TailwindCSS", "JavaScript", "HTML", "CSS"],
      category: "web",
      github: "https://github.com/drcvmx/luchavsludopatia",
      demo: "https://luchavsludopatia.vercel.app/",
      longDescription:
        "This is a supportive and informative web platform, inspired by government resources, with the strong aim of addressing and mitigating the issue of gambling addiction. The project will focus on providing users with clear and accessible information about gambling addiction, its risks and consequences, as well as offering practical tools and resources for prevention, early detection, and seeking professional help.",
    },
    "youtube_transcribe": {
      title: "youtube_transcribe",
      description: "A web application that extracts and analyzes the content of YouTube videos (via their transcripts) using a Python backend and natural language processing capabilities",
      images: ["/project/youtube_transcribe/transcribe1.png"],
      technologies: ["Next.js", "React","Python", "Flask", "LLMs", "TailwindCSS", "JavaScript", "HTML", "CSS"],
      category: "app",
      github: "https://github.com/drcvmx/youtube-link-interface",
      demo: "https://github.com/drcvmx/youtube-link-interface",
      longDescription:
        "This web application is designed to automate the process of analyzing YouTube video content. It operates in two main stages: first, a backend developed in Python uses the YouTube transcripts API to obtain the subtitles or transcripts of a video given a YouTube link. Subsequently, these transcripts are sent to a Next.js backend, where an Ollama language model processes and summarizes the text."  
    },
    "school_system": {
      title: "school_system",
      description: "Real-time cryptocurrency tracking dashboard with customizable widgets and alerts.",
      images: ["/project/system/systemv1.png", "/project/system/systemv2.png"],
      technologies: ["React", "Next.js","JavaScript", "TypeScript", "Supabase", "HTML", "CSS"],
      category: "app",
      github: "https://github.com/drcvmx/school_system",
      demo: "https://github.com/drcvmx/school_system",
      longDescription:
        "This project develops a comprehensive school management system designed to efficiently digitize a wide range of academic and administrative data. By centralizing this information, the system allows secure and remote access for authorized users, including administrators, teachers, and potentially parents, fostering better communication and streamlined workflows within the educational institution.",
    },
  }

  const project = projects[id as keyof typeof projects]

  if (!project) {
    notFound()
  }

  const projectImages = project.images && project.images.length > 0 ? project.images : ["/placeholder.svg"]

  // Avanza a la siguiente imagen con efecto de transición
   // CAMBIO 1: Función para avanzar a la siguiente imagen con tiempos reducidos
   const nextImage = () => {
    if (isTransitioning) return

    setIsTransitioning(true)
    // ANTES: 300ms - AHORA: 200ms (más rápido)
    setTimeout(() => {
      setActiveImage((prev) => (prev + 1) % projectImages.length)
      // ANTES: 100ms - AHORA: 50ms (más rápido)
      setTimeout(() => {
        setIsTransitioning(false)
      }, 50)
    }, 200)
  }

  // CAMBIO 2: Función para ir a una imagen específica con tiempos reducidos
  const goToImage = (index: number) => {
    if (index === activeImage || isTransitioning) return

    setIsTransitioning(true)
    // ANTES: 300ms - AHORA: 200ms (más rápido)
    setTimeout(() => {
      setActiveImage(index)
      // ANTES: 100ms - AHORA: 50ms (más rápido)
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
        <ArrowLeft size={16} /> Back to projects
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
              <span className="text-primary">title:</span> {project.title}
            </p>
            <p>
              <span className="text-primary">category:</span> {project.category}
            </p>
            <p className="flex flex-wrap gap-2 mt-2">
              <span className="text-primary">stack:</span>
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
                  title={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
                >
                  {isAutoPlaying ? <Pause size={16} /> : <Play size={16} />}
                </button>
              </div>
            )}
          </div>
          <div className="relative aspect-video w-full bg-[rgba(13,10,30,0.8)] overflow-hidden">
            {/* CAMBIO 3: Reemplazo completo del contenedor de imagen */}
            {/* ANTES: Efecto 3D complejo con rotación y múltiples efectos */}
            {/* 
            <div className="page-flip-container flipping">
              <div className="page-flip-content">
                <Image ... />
              </div>
            </div>
            */}

            {/* AHORA: Contenedor simple con fade y escala */}
            <div className="image-container">
              <Image
                src={projectImages[activeImage] || "/placeholder.svg"}
                alt={`${project.title} screenshot ${activeImage + 1}`}
                fill
                className={`object-contain transition-all duration-300 ease-out ${
                  isTransitioning ? "opacity-0 scale-95" : "opacity-100 scale-100"
                }`}
              />
            </div>

            {/* Contador de imágenes */}
            {projectImages.length > 1 && (
              <div className="absolute top-4 right-4 bg-cyber-dark/80 px-3 py-1 rounded-md text-sm text-neon-pink z-10">
                {activeImage + 1} / {projectImages.length}
              </div>
            )}
          </div>
        </div>

        {/* CAMBIO 4: Miniaturas con efectos más sutiles */}
        {projectImages.length > 1 && (
          <div className="flex justify-center gap-2 mt-2">
            {projectImages.map((img, index) => (
              <button
                key={index}
                onClick={() => handleManualNavigation(index)}
                disabled={isTransitioning}
                className={`w-16 h-12 relative rounded-md overflow-hidden border-2 
                  /* ANTES: Sin duración específica */
                  /* AHORA: Con duración específica */
                  transition-all duration-200 ${
                    activeImage === index
                      ? "border-neon-pink shadow-neon-pink scale-105" // AÑADIDO: scale-105
                      : "border-transparent opacity-70 hover:opacity-100 hover:border-neon-pink/50 hover:scale-102" // AÑADIDO: hover:scale-102
                  } ${isTransitioning ? "pointer-events-none opacity-50" : ""}`}
              >
                <Image src={img || "/placeholder.svg"} alt={`Thumbnail ${index + 1}`} fill className="object-cover" />
                {/* CAMBIO 5: Indicador de imagen activa más sutil */}
                {activeImage === index && (
                  <div
                    className="absolute inset-0 
                    /* ANTES: bg-neon-pink/20 */
                    /* AHORA: bg-neon-pink/10 (menos opaco) */
                    bg-neon-pink/10 flex items-center justify-center"
                  >
                    <div
                      className="
                      /* ANTES: w-2 h-2 */
                      /* AHORA: w-1.5 h-1.5 opacity-80 (más pequeño y menos opaco) */
                      w-1.5 h-1.5 bg-neon-pink rounded-full opacity-80"
                    ></div>
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
          <Github size={16} /> View on GitHub
        </a>
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-primary/10 hover:bg-primary/20 text-primary px-4 py-2 rounded-md transition-colors border border-primary/30"
        >
          <ExternalLink size={16} /> Live Demo
        </a>
      </div>

      <div className="prose prose-invert max-w-none">
        <h2 className="text-2xl font-bold mb-4 text-neon-pink">Project Overview</h2>
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