"use client"

import { useParams, notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Github, ExternalLink } from "lucide-react"

export default function ProjectPage() {
  const { id } = useParams<{ id: string }>()

  // This would typically come from an API or database
  const projects = {
    "drcv_note": {
      title: "drcv_note",
      description: "Your digital space for big and small ideas. Save everything from quick reminders to detailed and structured notes, all in one intuitive and organized place.",
      image: "/project/notasv2.png",
      technologies: ["React", "Next.j", "Supabase"],
      category: "app",
      github: "https://github.com/drcvmx/drcv_note",
      demo: "https://drcv-note.vercel.app/",
      longDescription:
        "This project offers a notes application designed to be your perfect ally in organizing information. With a simple and intuitive interface, you can quickly capture those fleeting ideas or develop extensive and well-structured notes. The goal is to provide you with a digital space where managing your notes feels natural and efficient.",
    },
    "carpinteria_verdeja": {
      title: "carpinteria_verdeja",
      description: "Design focused on the experience.",
      image: "/project/carpinteriav2.png",
      technologies: ["Next.js", "React", "TailwindCSS"],
      category: "web",
      github: "https://github.com/drcvmx/carpinteria_verdeja",
      demo: "https://carpinteria-verdeja.vercel.app/",
      longDescription:
        "Intuitive and visually impactful frontend webpage, focused on offering a pleasant navigation experience and a memorable design.",
    },
    "luchavsludopatia": {
      title: "luchavsludopatia",
      description: "A supportive and informative website dedicated to combating gambling addiction, drawing inspiration from government resources to offer information, tools, and resources for prevention and seeking help.",
      image: "/project/ludopatiav1.png",
      technologies: ["Next.js", "React", "TailwindCSS"],
      category: "web",
      github: "https://github.com/drcvmx/luchavsludopatia",
      demo: "https://luchavsludopatia.vercel.app/",
      longDescription:
        "This is a supportive and informative web platform, inspired by government resources, with the strong aim of addressing and mitigating the issue of gambling addiction. The project will focus on providing users with clear and accessible information about gambling addiction, its risks and consequences, as well as offering practical tools and resources for prevention, early detection, and seeking professional help.",
    },
    "school_system": {
      title: "school_system",
      description: "Real-time cryptocurrency tracking dashboard with customizable widgets and alerts.",
      image: "/project/systemv2.png",
      technologies: ["React", "Next.j", "Supabase"],
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

      <div className="relative h-80 rounded-md overflow-hidden">
        <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
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
        <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
        <p className="text-muted-foreground">{project.longDescription}</p>
      </div>
    </div>
  )
}
