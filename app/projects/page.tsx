"use client"

import { useState } from "react"
import ProjectCardFlip from "@/components/new-card-version"
import { useLanguage } from "@/contexts/language-context"

export default function ProjectsPage() {
  const { t } = useLanguage()
  const [activeFilter, setActiveFilter] = useState<string>("all")

  const projects = [
    // ── EXPERIENCIA REAL / CLIENTES ──────────────────────────────────
    {
      id: "jrl_mexico",
      title: "JRL México",
      description: t("projects.jrlMexico.desc"),
      image: "project_webp/jrl/jrl1.png",
      technologies: ["React 18", "TypeScript", "Supabase", "Shopify API", "Zustand", "TanStack Query", "Framer Motion", "Deno Edge Functions"],
      category: "ecommerce",
    },
    {
      id: "greekos",
      title: "Greekos",
      description: t("projects.greekos.desc"),
      image: "project_webp/greekos/greekos1.png",
      technologies: ["React 18", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "React Router", "React Hook Form", "Zod"],
      category: "corporate",
    },
    {
      id: "battlekart",
      title: "Go-Kart Zen Loyalty",
      description: t("projects.battlekart.desc"),
      image: "project_webp/battlekart/bk7.png",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Supabase"],
      category: "backend",
    },
    {
      id: "probin",
      title: "Probin Real Estate CMS",
      description: t("projects.probin.desc"),
      image: "project_webp/probin/probin1.png",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Supabase"],
      category: "erp",
    },
    {
      id: "winpot",
      title: "Winpot CMS & Multi-Tenant",
      description: t("projects.winpot.desc"),
      image: "project_webp/winpot/winpot1.png",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Supabase"],
      category: "erp",
    },
    {
      id: "green_alchemy_sgl",
      title: "Green Alchemy SGL",
      description: t("projects.greenAlchemy.desc"),
      image: "project_webp/greensystem/green1.png",
      technologies: ["React", "TypeScript", "Vite", "Supabase"],
      category: "erp",
    },
    {
      id: "catalogo",
      title: "Green Alchemy — Catálogo",
      description: t("projects.catalogo.desc"),
      image: "project_webp/catalogo/catalogo1.png",
      technologies: ["React", "TypeScript", "Vite", "Supabase"],
      category: "backend",
    },
    {
      id: "one_soul",
      title: "ONE · Soul Essence",
      description: t("projects.one.desc"),
      image: "project_webp/one/one1.png",
      technologies: ["React", "TypeScript", "Vite", "Supabase"],
      category: "corporate",
    },
    {
      id: "balazhi",
      title: "Balazhi Stone",
      description: t("projects.balazhi.desc"),
      image: "project_webp/balazhi/balazhi1.png",
      technologies: ["React", "TypeScript", "Vite", "Tailwind CSS"],
      category: "corporate",
    },
    {
      id: "delincuencia",
      title: "Sistema de Control de Delincuencia",
      description: t("projects.delincuencia.desc"),
      image: "project_webp/crimen/crimen4.webp",
      technologies: ["Next.js 14", "TypeScript", "Express", "Oracle 19c", "JWT", "OCI"],
      category: "backend",
    },
    {
      id: "puntodeventa",
      title: "Punto de Venta DRCV Backend",
      description: t("projects.puntodeventa.desc"),
      image: "project_webp/store/03.png",
      technologies: ["NestJS 11", "TypeScript", "PostgreSQL", "TypeORM", "Openpay", "JWT"],
      category: "backend",
    },
    // ── PROYECTOS PERSONALES / ECOSISTEMA DRCV ───────────────────────
    {
      id: "noteDrcv",
      title: "DRCV Note Backend",
      description: t("projects.noteDrcv.desc"),
      image: "project_webp/note/note1.png",
      technologies: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "JWT", "Pydantic"],
      category: "backend",
    },
  ]

  const categories = [
    { id: "all", name: t("projects.allProjects") },
    { id: "ai", name: t("projects.categoryAI") },
    { id: "erp", name: t("projects.categoryERP") },
    { id: "ecommerce", name: t("projects.categoryEcommerce") },
    { id: "corporate", name: t("projects.categoryCorporate") },
    { id: "backend", name: t("projects.categoryBackend") },
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    <div className="space-y-8">
      <div className="terminal-window scanline">
        <div className="terminal-header">
          <div className="terminal-button terminal-button-red"></div>
          <div className="terminal-button terminal-button-yellow"></div>
          <div className="terminal-button terminal-button-green"></div>
          <div className="terminal-title">projects.sh</div>
        </div>
        <div className="terminal-content">
          <p className="mb-4">
            <span className="neon-text-purple">$</span> {t("projects.title")}
            <span className="terminal-cursor"></span>
          </p>
        </div>
      </div>

      <>
        <div className="flex flex-wrap gap-2">
            {categories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-3 py-1 text-sm rounded-md transition-colors ${
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
              <ProjectCardFlip
                key={project.id}
                id={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                technologies={project.technologies}
                videoUrl={'videoUrl' in project ? (project as any).videoUrl : undefined}
              />
            ))}
        </div>
      </>
    </div>
  )
}
