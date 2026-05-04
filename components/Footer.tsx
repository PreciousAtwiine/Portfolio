import { Github, LinkedinIcon, Mail } from "lucide-react"

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
            <Github size={18} />
          </a>
          <a href="https://linkedin.com/in/YOUR_LINKEDIN" target="_blank" rel="noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors">
            <LinkedinIcon size={18} />
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