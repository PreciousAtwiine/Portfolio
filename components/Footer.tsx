import { Mail } from "lucide-react"
import { FaLinkedin,FaGithub } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Precious Atwiine. Built with Next.js & Tailwind.
        </p>
        <div className="flex items-center gap-4">
          <a href="https://github.com/PreciousAtwiine" target="_blank" rel="noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors">
            <FaGithub size={18} />
          </a>
          <a href="https://www.linkedin.com/in/precious-atwiine-83128a223/" target="_blank" rel="noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors">
            <FaLinkedin size={18} />
          </a>
          <a href="mailto:preciousinshuti3@gmail.com"
            className="text-muted-foreground hover:text-foreground transition-colors">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}