"use client"

import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Repeat2 } from "lucide-react"
import { useState } from "react"
import { useLanguage } from "@/contexts/language-context"

export interface ProjectCardFlipProps {
  id: string
  title: string
  description: string
  image: string
  technologies: string[]
  videoUrl?: string
}

export default function ProjectCardFlip({
  id,
  title,
  description,
  image,
  technologies,
  videoUrl,
}: ProjectCardFlipProps) {
  const [isFlipped, setIsFlipped] = useState(false)
  const { t } = useLanguage()

  const handleClick = (e: React.MouseEvent) => {
    // En móvil/tablet: primer click voltea, segundo navega
    if (!isFlipped && window.innerWidth < 1024) {
      e.preventDefault()
      setIsFlipped(true)
    }
    // En desktop: click navega directamente (el hover ya mostró el flip)
  }

  const handleMouseEnter = () => {
    // Solo en desktop (>= 1024px)
    if (window.innerWidth >= 1024) {
      setIsFlipped(true)
    }
  }

  const handleMouseLeave = () => {
    // Solo en desktop
    if (window.innerWidth >= 1024) {
      setIsFlipped(false)
    }
  }

  return (
    <Link href={`/projects/${id}`} onClick={handleClick}>
      <div
        className="relative w-full aspect-[5/4] group [perspective:2000px]"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className={cn(
            "relative w-full h-full",
            "[transform-style:preserve-3d]",
            "transition-all duration-700",
            isFlipped ? "[transform:rotateY(180deg)]" : "[transform:rotateY(0deg)]"
          )}
        >
          {/* Front of card */}
          <div
            className={cn(
              "absolute inset-0 w-full h-full",
              "[backface-visibility:hidden] [transform:rotateY(0deg)]",
              "overflow-hidden rounded-lg",
              "bg-drcv-600",
              "border border-accent-500/20",
              "transition-all duration-700",
              "flex flex-col",
              "group-hover:border-accent-500/50 group-hover:shadow-accent-purple",
              isFlipped ? "opacity-0" : "opacity-100"
            )}
          >
            {/* Image/Video container - aspect-video */}
            <div className="relative aspect-video w-full overflow-hidden bg-drcv-900">
              {videoUrl ? (
                <>
                  <div className="project-card-video-wrapper">
                    <iframe
                      src={videoUrl}
                      title={title}
                      allow="encrypted-media"
                      allowFullScreen
                      className="project-card-video"
                    />
                  </div>
                </>
              ) : (
                <Image
                  src={image || "/placeholder.svg"}
                  alt={title}
                  width={600}
                  height={400}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105 filter brightness-90 contrast-110 saturate-110"
                />
              )}
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-drcv-primary/90 via-drcv-primary/20 to-transparent"></div>
              {/* Scanline effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-500/5 to-transparent opacity-50"></div>
              
              {/* Corner decorations */}
              <div className="absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 border-accent-500/60"></div>
              <div className="absolute top-2 right-2 w-3 h-3 border-r-2 border-t-2 border-accent-500/60"></div>
              <div className="absolute bottom-2 left-2 w-3 h-3 border-l-2 border-b-2 border-accent-500/60"></div>
              <div className="absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 border-accent-500/60"></div>
            </div>

            {/* Content section below image */}
            <div className="flex-1 flex flex-col justify-between p-4 bg-drcv-primary/80">
              <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="text-lg font-bold text-white font-mono neon-text-purple transition-all duration-500 group-hover:translate-y-[-2px] drop-shadow-[0_0_12px_rgba(168,85,247,0.6)]">
                  {title}
                </h3>
                <div className="relative group/icon flex-shrink-0">
                  <div className="absolute inset-[-8px] rounded-lg transition-opacity duration-300 bg-gradient-to-br from-accent-500/20 via-accent-500/10 to-transparent" />
                  <Repeat2 className="relative z-10 w-5 h-5 text-accent-500 transition-transform duration-300 group-hover/icon:scale-110 group-hover/icon:-rotate-12" />
                </div>
              </div>
              
              <div className="space-y-2">
                <p className="text-xs text-accent-400 font-mono uppercase tracking-wider">
                  {">"} {t("common.stack")}:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-0.5 bg-drcv-600/30 text-accent-500 rounded border border-accent-500/30 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Back of card */}
          <div
            className={cn(
              "absolute inset-0 w-full h-full",
              "[backface-visibility:hidden] [transform:rotateY(180deg)]",
              "p-5 rounded-lg",
              "bg-drcv-600",
              "border border-accent-500/20",
              "flex flex-col",
              "transition-all duration-700",
              "group-hover:border-accent-500/50 group-hover:shadow-accent-purple",
              !isFlipped ? "opacity-0" : "opacity-100"
            )}
          >
            {/* Scanline effect on back */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-500/5 to-transparent opacity-50 pointer-events-none rounded-lg"></div>
            
            {/* Corner decorations on back */}
            <div className="absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 border-accent-600/60"></div>
            <div className="absolute top-2 right-2 w-3 h-3 border-r-2 border-t-2 border-accent-600/60"></div>
            <div className="absolute bottom-2 left-2 w-3 h-3 border-l-2 border-b-2 border-accent-600/60"></div>
            <div className="absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 border-accent-600/60"></div>

            <div className="flex-1 space-y-3 relative z-10 overflow-y-auto cyber-scrollbar">
              <div className="space-y-2">
                <h3 className="text-base font-bold text-white font-mono neon-text-purple">
                  {title}
                </h3>
                <p className="text-sm text-white/90 font-mono leading-relaxed drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                  {description}
                </p>
              </div>

              <div className="space-y-2">
                <p className="text-xs text-accent-400 font-mono uppercase tracking-wider">
                  {">"} {t("common.stack")}:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {technologies.map((tech, index) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-0.5 bg-drcv-600/30 text-accent-500 rounded border border-accent-500/30 font-mono transition-all duration-500"
                      style={{
                        transform: isFlipped ? "translateX(0)" : "translateX(-10px)",
                        opacity: isFlipped ? 1 : 0,
                        transitionDelay: `${index * 50 + 200}ms`,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-3 mt-3 border-t border-accent-500/20 relative z-10">
              <div className="group/view relative flex items-center justify-between p-2 -m-2 rounded-lg transition-all duration-300 hover:bg-accent-500/10 hover:cursor-pointer">
                <span className="text-xs font-mono font-medium text-white transition-colors duration-300 group-hover/view:text-accent-500">
                  {">"} {t("project.viewProject")}
                </span>
                <div className="text-accent-500 transition-transform duration-300 group-hover/view:translate-x-1">
                  →
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </Link>
  )
}
