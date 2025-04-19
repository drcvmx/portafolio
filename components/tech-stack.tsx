"use client"

import { useState } from "react"
import Image from "next/image"

interface TechItem {
  name: string
  icon: string
}

interface TechCategory {
  name: string
  color: string
  shadowColor: string
  items: TechItem[]
}

export function TechStack() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const categories: TechCategory[] = [
    {
      name: "Frontend",
      color: "text-neon-pink",
      shadowColor: "shadow-neon-pink",
      items: [
        { name: "HTML", icon: "skills/html.png" },
        { name: "CSS", icon: "skills/css.png" },
        { name: "React", icon: "skills/react.png" },
        { name: "Next.js", icon: "skills/nextjs.png" },
        { name: "TailwindCSS", icon: "skills/tailwild.png" },
        { name: "JavaScript", icon: "skills/javascript.png" },
        { name: "TypeScript", icon: "skills/typescript.png" },
      ],
    },
    {
      name: "Backend",
      color: "text-neon-purple",
      shadowColor: "shadow-neon-purple",
      items: [
        { name: "MySQL", icon: "skills/sql.png" },
        { name: "Supabase", icon: "skills/supabase.png" },
        { name: "Python", icon: "skills/python.png" },
      ],
    },
    {
      name: "Learning",
      color: "text-neon-cyan",
      shadowColor: "shadow-neon-cyan",
      items: [
        { name: "Java", icon: "skills/java.png" },
        { name: "Node.js", icon: "skills/nodejs.png" },
      ],
    },
    {
      name: "Tools",
      color: "text-neon-pink",
      shadowColor: "shadow-neon-pink",
      items: [
        { name: "Git", icon: "skills/git.png" },
        { name: "GitHub", icon:"skills/github.png" },
        { name: "Oracle", icon: "skills/oracle.png" },
      ],
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono">
      {categories.map((category) => (
        <div
          key={category.name}
          className="bg-cyber-dark border border-border/40 rounded-md overflow-hidden card-hover scanline font-mono"
          onMouseEnter={() => setSelectedCategory(category.name)}
          onMouseLeave={() => setSelectedCategory(null)}
        >
          <div className="p-4 border-b border-border/40 cyberpunk-gradient">
            <h3
              className={`text-xl font-bold ${category.color} ${selectedCategory === category.name ? "animate-glow" : ""} font-mono`}
            >
              {category.name}
            </h3>
          </div>
          <div className="p-6 font-mono">
            <div className="grid grid-cols-3 gap-6">
              {category.items.map((item) => (
                <div
                  key={item.name}
                  className={`flex flex-col items-center justify-center transition-all duration-300 ${
                    selectedCategory && selectedCategory !== category.name ? "opacity-30" : "opacity-100"
                  } font-mono`}
                >
                  <div
                    className={`relative w-12 h-12 mb-2 rounded-md overflow-hidden ${
                      selectedCategory === category.name ? category.shadowColor : ""
                    }`}
                  >
                    <Image src={item.icon || "/placeholder.svg"} alt={item.name} fill className="object-contain" />
                  </div>
                  <span
                    className={`text-xs text-center ${selectedCategory === category.name ? category.color : ""} font-mono`}
                  >
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
