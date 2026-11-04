import { Mail } from "lucide-react"
import { FaLinkedin, FaGithub } from "react-icons/fa"
import { socialLinks } from "@/lib/site"

const iconLink =
  "inline-flex h-10 w-10 items-center justify-center rounded-md text-fg-muted transition-colors hover:bg-panel hover:text-fg"

export default function Footer() {
  return (
    <footer className="border-t border-line px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-sm text-fg-muted">© {new Date().getFullYear()} Atwiine Precious Mwebaze.</p>
        <ul aria-label="Social links" className="flex items-center gap-1">
          <li>
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub (opens in a new tab)" className={iconLink}>
              <FaGithub aria-hidden="true" size={18} />
            </a>
          </li>
          <li>
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in a new tab)" className={iconLink}>
              <FaLinkedin aria-hidden="true" size={18} />
            </a>
          </li>
          <li>
            <a href={`mailto:${socialLinks.email}`} aria-label={`Email ${socialLinks.email}`} className={iconLink}>
              <Mail aria-hidden="true" size={18} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
