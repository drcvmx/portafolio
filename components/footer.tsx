<<<<<<< HEAD
import Link from "next/link"
import { Github, Linkedin } from "lucide-react"

export function Footer() {
=======
"use client"

import Link from "next/link"
import { Github, Linkedin } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function Footer() {
  const { t } = useLanguage()

>>>>>>> v2
  return (
    <footer className="border-t border-neon-pink/30 py-6 bg-cyber-dark/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
<<<<<<< HEAD
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} DRCV
            </p>
          </div>
          <div className="flex space-x-4">
          <Link
              href="https://github.com/drcvmx"
              className="text-muted-foreground hover:text-neon-pink transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={20} />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link 
              href="https://www.linkedin.com/in/dante-ricardo-chavez-verdeja-501388361/" 
              className="text-muted-foreground hover:text-neon-cyan transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={20} />
=======
            <p className="text-sm text-muted-foreground font-mono">
              &copy; {new Date().getFullYear()} DRCV - {t("footer.allRightsReserved")}
            </p>
          </div>
          <div className="flex space-x-4">
            <Link
              href="https://github.com/drcvmx"
              className="text-muted-foreground hover:text-neon-pink transition-colors group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={20} className="group-hover:drop-shadow-[0_0_8px_rgba(255,0,255,0.6)]" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/dante-ricardo-chavez-verdeja-501388361/"
              className="text-muted-foreground hover:text-neon-cyan transition-colors group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={20} className="group-hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.6)]" />
>>>>>>> v2
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
<<<<<<< HEAD
=======
 
>>>>>>> v2
      </div>
    </footer>
  )
}
