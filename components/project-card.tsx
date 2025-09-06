import Image from "next/image"
import Link from "next/link"

interface ProjectCardProps {
  id: string
  title: string
  description: string
  image: string
  technologies: string[]
}

export function ProjectCard({ id, title, description, image, technologies }: ProjectCardProps) {
  return (
    <Link href={`/projects/${id}`}>
      <div className="group bg-cyber-dark rounded-lg overflow-hidden h-full flex flex-col border border-neon-pink/20 hover:border-neon-pink/50 transition-all duration-300 hover:shadow-neon-pink">
        {/* Contenedor de imagen estandarizado */}
        <div className="relative aspect-video overflow-hidden bg-cyber-darker">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-all duration-300 group-hover:scale-105 filter brightness-90 contrast-110 saturate-110"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark/90 via-cyber-dark/20 to-transparent"></div>
          {/* Scanline effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-pink/5 to-transparent opacity-50"></div>
          {/* Corner decorations */}
          <div className="absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 border-neon-pink/60"></div>
          <div className="absolute top-2 right-2 w-3 h-3 border-r-2 border-t-2 border-neon-pink/60"></div>
          <div className="absolute bottom-2 left-2 w-3 h-3 border-l-2 border-b-2 border-neon-pink/60"></div>
          <div className="absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 border-neon-pink/60"></div>

          {/* Title overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="text-lg font-bold text-white font-mono neon-text-pink">{title}</h3>
          </div>
        </div>

        {/* Content section */}
        <div className="p-4 flex-1 flex flex-col bg-cyber-dark/80">
          <p className="text-sm text-muted-foreground mb-4 flex-1 font-mono leading-relaxed">{description}</p>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs px-2 py-1 bg-cyber-light/30 text-neon-pink rounded border border-neon-pink/30 font-mono"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  )
}
