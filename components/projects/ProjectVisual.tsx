import type { Project } from "@/lib/projects"
import DeviceFrame from "./DeviceFrame"
import BrowserFrame from "./BrowserFrame"

/**
 * Cover image for a project card or page header. Mobile apps show up to three
 * phone screens, web apps show their first screenshot in a browser frame, and
 * projects without screenshots list their key features instead.
 */
export default function ProjectVisual({ project, preload = false }: { project: Project; preload?: boolean }) {
  const shots = project.screenshots

  if (shots.length === 0) {
    return (
      <div className="flex aspect-[16/10] flex-col justify-between bg-panel p-6 sm:p-8">
        <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-fg-muted">
          {project.platform === "web" ? "Web application" : "Mobile application"} · Key features
        </span>
        <ul className="space-y-2.5 sm:space-y-3">
          {project.features.slice(0, 3).map((f) => (
            <li key={f} className="flex gap-3 text-sm leading-snug text-fg-soft sm:text-base">
              <span aria-hidden="true" className="mt-[0.55em] h-1 w-3 shrink-0 rounded-full bg-brand" />
              {f}
            </li>
          ))}
        </ul>
        <p className="font-mono text-xs text-fg-muted">No screenshots yet</p>
      </div>
    )
  }

  if (project.platform === "mobile") {
    const phones = shots.slice(0, 3)
    return (
      <div className="relative flex aspect-[16/10] items-start justify-center gap-[4%] overflow-hidden bg-panel px-[6%] pt-[7%]">
        {phones.map((shot, i) => {
          const center = phones.length === 3 && i === 1
          return (
            <DeviceFrame
              key={shot.src}
              shot={shot}
              preload={preload && i === 0}
              sizes="(min-width: 1024px) 180px, (min-width: 768px) 22vw, 30vw"
              className={`shrink-0 ${center ? "w-[29%] -translate-y-[3%]" : "w-[25%] translate-y-[6%]"}`}
            />
          )
        })}
      </div>
    )
  }

  return (
    <div className="relative aspect-[16/10] overflow-hidden bg-panel">
      <BrowserFrame
        shot={shots[0]}
        preload={preload}
        sizes="(min-width: 1024px) 560px, 92vw"
        className="absolute left-[7%] top-[9%] w-full"
      />
    </div>
  )
}
