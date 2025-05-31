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
      images: ["/project/app_note/note1.png", "/project/app_note/note2.png", "/project/app_note/note3.png"],
      technologies: ["React", "Next.js", "JavaScript","TypeScript", "Supabase", "HTML", "CSS"],
      category: "app",
      github: "https://github.com/drcvmx/drcv_note",
      demo: "https://drcv-note.vercel.app/",
      longDescription:
        "This project offers a notes application designed to be your perfect ally in organizing information. With a simple and intuitive interface, you can quickly capture those fleeting ideas or develop extensive and well-structured notes. The goal is to provide you with a digital space where managing your notes feels natural and efficient.",
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
      images: ["/project/crimen/crimen1.png", "/project/crimen/crimen2.png", "/project/crimen/crimen3.png"],
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
    "school_system": {
      title: "school_system",
      description: "Real-time cryptocurrency tracking dashboard with customizable widgets and alerts.",
      images: ["/project/system/systemv1.png", "/project/system/systemv2.png"],
      technologies: ["React", "Next.js", "JavaScript", "TypeScript", "Supabase", "HTML", "CSS"],
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
  const nextImage = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setTimeout(() => {
      setActiveImage((prev) => (prev + 1) % projectImages.length);
      setTimeout(() => setIsTransitioning(false), 100);
    }, 300);
  };

  // Navegación manual con pausa temporal del autoplay
  const handleManualNavigation = (index: number) => {
    if (index === activeImage || isTransitioning) return;

    setIsTransitioning(true);
    setTimeout(() => {
      setActiveImage(index);
      setTimeout(() => setIsTransitioning(false), 100);
    }, 300);

    // Pausa el autoplay por 10 segundos después de una interacción manual
    if (isAutoPlaying) {
      setIsAutoPlaying(false);
      setTimeout(() => setIsAutoPlaying(true), 10000);
    }
  };

  // Alternar autoplay
  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  useEffect(() => {
    if (isAutoPlaying && projectImages.length > 1) {
      intervalRef.current = setInterval(nextImage, 5000); // Cambia cada 5 segundos
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isAutoPlaying, projectImages.length, isTransitioning]);

  return (
    <div className="space-y-8">
      <Link href="/projects" className="inline-flex items-center gap-2 text-primary hover:underline">
        <ArrowLeft size={16} /> Volver a proyectos
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

      <div className="space-y-4">
        <div className="terminal-window p-0 overflow-hidden">
          <div className="terminal-header">
            <div className="terminal-button terminal-button-red"></div>
            <div className="terminal-button terminal-button-yellow"></div>
            <div className="terminal-button terminal-button-green"></div>
            <div className="terminal-title">project_screenshots.sh</div>
            {/* Botón de autoplay */}
            {projectImages.length > 1 && (
              <div className="ml-auto mr-2">
                <button
                  onClick={toggleAutoPlay}
                  className="text-neon-pink hover:text-neon-purple transition-colors"
                  title={isAutoPlaying ? "Pausar" : "Reproducir"}
                >
                  {isAutoPlaying ? <Pause size={16} /> : <Play size={16} />}
                </button>
              </div>
            )}
          </div>
          <div className="relative aspect-video w-full bg-[rgba(13,10,30,0.8)] overflow-hidden">
            {/* Contenedor con efecto de transición */}
            <div className={`page-flip-container ${isTransitioning ? "flipping" : ""}`}>
              <Image
                src={projectImages[activeImage] || "/placeholder.svg"}
                alt={`${project.title} screenshot ${activeImage + 1}`}
                fill
                className="object-contain"
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

        {/* Miniaturas */}
        {projectImages.length > 1 && (
          <div className="flex justify-center gap-2 mt-2">
            {projectImages.map((img, index) => (
              <button
                key={index}
                onClick={() => handleManualNavigation(index)}
                disabled={isTransitioning}
                className={`w-16 h-12 relative rounded-md overflow-hidden border-2 transition-all ${
                  activeImage === index
                    ? "border-neon-pink shadow-neon-pink"
                    : "border-transparent opacity-70 hover:opacity-100 hover:border-neon-pink/50"
                } ${isTransitioning ? "pointer-events-none opacity-50" : ""}`}
              >
                <Image src={img} alt={`Thumbnail ${index + 1}`} fill className="object-cover" />
                {activeImage === index && (
                  <div className="absolute inset-0 bg-neon-pink/20 flex items-center justify-center">
                    <div className="w-2 h-2 bg-neon-pink rounded-full"></div>
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
        <h2 className="text-2xl font-bold mb-4">Project Summary</h2>
        <p className="text-muted-foreground">{project.longDescription}</p>
      </div>

      {/* Sección de estilos */}
      <style jsx>{`
        .page-flip-container {
          width: 100%;
          height: 100%;
          position: relative;
          transform-style: preserve-3d;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .page-flip-container.flipping {
          transform: rotateY(-180deg);
        }

        .page-flip-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255, 0, 255, 0.1) 45%,
            rgba(255, 0, 255, 0.3) 50%,
            rgba(255, 0, 255, 0.1) 55%,
            transparent 100%
          );
          transform: translateX(-100%);
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 2;
        }

        .page-flip-container.flipping::before {
          transform: translateX(100%);
        }
      `}</style>
    </div>
  )
}
