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
      <div className="card-hover bg-cyber-dark rounded-md overflow-hidden h-full flex flex-col scanline">
        <div className="relative h-48">
          <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark/90 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-4">
            <h3 className="text-lg font-bold text-white glitch neon-text-pink" data-text={title}>
              {title}
            </h3>
          </div>
        </div>
        <div className="p-4 flex-1 flex flex-col">
          <p className="text-sm text-muted-foreground mb-4 flex-1">{description}</p>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs px-2 py-1 bg-cyber-light text-neon-pink rounded border border-neon-pink/30"
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
