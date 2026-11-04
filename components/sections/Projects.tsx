"use client"

import { useState } from "react"
import { projects, type Platform } from "@/lib/projects"
import SectionHeading from "@/components/SectionHeading"
import ProjectCard from "@/components/projects/ProjectCard"

const filters: { label: string; value: Platform | "all" }[] = [
  { label: "All", value: "all" },
  { label: "Web", value: "web" },
  { label: "Mobile", value: "mobile" },
]

export default function Projects() {
  const [active, setActive] = useState<Platform | "all">("all")
  const shown = active === "all" ? projects : projects.filter((p) => p.platform === active)

  return (
    <section id="projects" aria-labelledby="projects-title" className="border-t border-line px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            id="projects-title"
            index="01"
            eyebrow="Projects"
            title="Selected work"
            description="Web, backend and mobile applications. Each project page covers the problem, what I built and how it works."
          />
          <div role="group" aria-label="Filter projects by platform" className="mb-12 flex gap-1 self-start rounded-md border border-line bg-panel p-1 md:self-auto">
            {filters.map((f) => (
              <button
                key={f.value}
                type="button"
                aria-pressed={active === f.value}
                onClick={() => setActive(f.value)}
                className={`h-9 rounded-md px-4 text-sm font-medium transition-colors ${
                  active === f.value ? "bg-fg text-canvas" : "text-fg-muted hover:text-fg"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <p className="sr-only" aria-live="polite">
          Showing {shown.length} {shown.length === 1 ? "project" : "projects"}
        </p>

        <ul className="grid gap-6 md:grid-cols-2">
          {shown.map((project) => (
            <li key={project.slug}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
