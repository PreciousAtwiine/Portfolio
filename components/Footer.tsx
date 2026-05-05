import { Mail } from "lucide-react"
import { FaLinkedin,FaGithub } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Atwiine Precious Mwebaze.
        </p>
        <div className="flex items-center gap-5">
          <a href="https://github.com/PreciousAtwiine" target="_blank" rel="noreferrer"
            className="text-slate-500 hover:text-violet-400 transition-colors">
            <FaGithub size={18} />
          </a>
          <a href="https://www.linkedin.com/in/precious-atwiine-83128a223/" target="_blank" rel="noreferrer"
            className="text-slate-500 hover:text-teal-400 transition-colors">
            <FaLinkedin size={18} />
          </a>
          <a href="mailto:preciousinshuti3@gmail.com"
            className="text-slate-500 hover:text-pink-400 transition-colors">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}