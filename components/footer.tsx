import Link from "next/link"
import { Github, Mail } from "lucide-react"

const PORTFOLIO_URL = "/";

export function Footer() {
  return (
    <footer className="border-t border-neon-pink/30 py-6 bg-cyber-dark/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} DRCV_WORK
            </p>
          </div>
          <div className="flex space-x-4">
            <Link href="https://github.com/drcvmx" className="text-muted-foreground hover:text-neon-pink transition-colors">
              <Github size={20} />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href={PORTFOLIO_URL}
              className="text-muted-foreground hover:text-neon-pink transition-colors"
            >
              <Mail size={20} />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
