import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { Project } from "@/lib/projects"
import ProjectVisual from "./ProjectVisual"
import StatusBadge from "./StatusBadge"
import TechList from "./TechList"
import ProjectLinks from "./ProjectLinks"

export default function ProjectCard({ project, preload = false }: { project: Project; preload?: boolean }) {
  const href = `/projects/${project.slug}`
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-line bg-surface transition-colors hover:border-line-strong">
      {/* The title link below is the accessible entry point, so this one is hidden from assistive tech. */}
      <Link href={href} tabIndex={-1} aria-hidden="true" className="block overflow-hidden border-b border-line">
        <div className="transition-transform duration-500 group-hover:scale-[1.015] motion-reduce:transform-none">
          <ProjectVisual project={project} preload={preload} />
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <StatusBadge status={project.status} />
          <span className="font-mono text-xs text-fg-muted">
            {project.platform === "mobile" ? "Mobile" : "Web"} · {project.context} · {project.year}
          </span>
        </div>

        <h3 className="mt-4 text-xl font-semibold tracking-tight text-fg">
          <Link href={href} className="hover:text-brand">
            {project.title}
          </Link>
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-fg-muted">{project.tagline}</p>

        <div className="mt-4">
          <TechList tech={project.tech} limit={4} />
        </div>

        <div className="mt-auto flex flex-wrap gap-2 pt-6">
          <Link
            href={href}
            className="inline-flex h-9 items-center gap-2 rounded-md bg-brand-solid px-3 text-sm font-medium text-white transition-colors hover:bg-brand-solid-hover"
          >
            View project
            <ArrowRight aria-hidden="true" size={15} />
            <span className="sr-only">: {project.title}</span>
          </Link>
          <ProjectLinks links={project.links.slice(0, 1)} size="sm" />
        </div>
      </div>
    </article>
  )
}
