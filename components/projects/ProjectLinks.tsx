import { ExternalLink, Globe } from "lucide-react"
import { FaGithub } from "react-icons/fa"
import type { ProjectLink } from "@/lib/projects"

const icons = {
  source: FaGithub,
  live: ExternalLink,
  website: Globe,
}

/** External project links. Only links present in the data are rendered. */
export default function ProjectLinks({ links, size = "md" }: { links: ProjectLink[]; size?: "sm" | "md" }) {
  if (links.length === 0) return null
  const pad = size === "sm" ? "h-9 px-3 text-sm" : "h-10 px-4 text-sm"
  return (
    <>
      {links.map((link) => {
        const Icon = icons[link.kind]
        const primary = link.kind === "live"
        return (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 rounded-md font-medium transition-colors ${pad} ${
              primary
                ? "bg-brand-solid text-white hover:bg-brand-solid-hover"
                : "border border-line-strong text-fg hover:bg-panel"
            }`}
          >
            <Icon aria-hidden="true" size={15} />
            {link.label}
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        )
      })}
    </>
  )
}
