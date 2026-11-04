import type { Project } from "@/lib/projects"
import DeviceFrame from "./DeviceFrame"
import BrowserFrame from "./BrowserFrame"

/** All screenshots for a project page. Each opens the full-size image in a new tab. */
export default function ScreenshotGallery({ project }: { project: Project }) {
  const mobile = project.platform === "mobile"
  return (
    <ul className={mobile ? "grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-3 lg:grid-cols-5" : "grid gap-8 md:grid-cols-2"}>
      {project.screenshots.map((shot) => (
        <li key={shot.src}>
          <figure>
            <a
              href={shot.src}
              target="_blank"
              rel="noopener noreferrer"
              className={`block transition-opacity hover:opacity-90 ${mobile ? "rounded-[1.6rem]" : "rounded-lg"}`}
            >
              {mobile ? (
                <DeviceFrame shot={shot} sizes="(min-width: 1024px) 200px, (min-width: 640px) 30vw, 45vw" />
              ) : (
                <BrowserFrame shot={shot} sizes="(min-width: 768px) 50vw, 100vw" />
              )}
              <span className="sr-only"> (open full-size image in a new tab)</span>
            </a>
            <figcaption className="mt-3 text-center font-mono text-xs text-fg-muted">{shot.caption}</figcaption>
          </figure>
        </li>
      ))}
    </ul>
  )
}
