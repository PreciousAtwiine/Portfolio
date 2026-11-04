import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight, Images } from "lucide-react"
import { getProject, projects } from "@/lib/projects"
import ProjectVisual from "@/components/projects/ProjectVisual"
import StatusBadge from "@/components/projects/StatusBadge"
import TechList from "@/components/projects/TechList"
import ProjectLinks from "@/components/projects/ProjectLinks"
import ScreenshotGallery from "@/components/projects/ScreenshotGallery"

// Only the projects in lib/projects.ts exist; anything else is a 404.
export const dynamicParams = false

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return {}
  const cover = project.screenshots[0]
  return {
    title: project.title,
    description: project.tagline,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: `${project.title} | Precious Atwiine`,
      description: project.tagline,
      url: `/projects/${project.slug}`,
      images: cover
        ? [{ url: cover.src, width: cover.width, height: cover.height, alt: cover.alt }]
        : [{ url: "/og.png", width: 1200, height: 630 }],
    },
  }
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-fg-soft">
          <span aria-hidden="true" className="mt-[0.6rem] h-1 w-3 shrink-0 rounded-full bg-brand" />
          <span className="leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  )
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-line py-8 first:border-t-0 first:pt-0">
      <h2 className="mb-4 text-lg font-semibold text-fg">{title}</h2>
      {children}
    </section>
  )
}

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  const index = projects.findIndex((p) => p.slug === project.slug)
  const next = projects[(index + 1) % projects.length]
  const isTeam = project.context.toLowerCase().includes("team")

  return (
    <article className="px-6 pb-24 pt-28 sm:pt-32">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 rounded-md text-sm text-fg-muted transition-colors hover:text-fg"
        >
          <ArrowLeft aria-hidden="true" size={15} />
          All projects
        </Link>

        <header className="mt-8 grid items-end gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <StatusBadge status={project.status} />
              <span className="font-mono text-xs text-fg-muted">
                {project.platform === "mobile" ? "Mobile app" : "Web app"} · {project.year}
              </span>
            </div>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-fg sm:text-5xl">{project.title}</h1>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-fg-soft">{project.tagline}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              <ProjectLinks links={project.links} />
              {project.screenshots.length > 0 && (
                <a
                  href="#screenshots"
                  className="inline-flex h-10 items-center gap-2 rounded-md border border-line-strong px-4 text-sm font-medium text-fg transition-colors hover:bg-panel"
                >
                  <Images aria-hidden="true" size={15} />
                  View screenshots
                </a>
              )}
            </div>
          </div>
          <div className="overflow-hidden rounded-xl border border-line">
            <ProjectVisual project={project} preload />
          </div>
        </header>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_18rem]">
          <div>
            <Block title="Overview">
              <p className="leading-relaxed text-fg-soft">{project.overview}</p>
            </Block>
            <Block title="The problem">
              <p className="leading-relaxed text-fg-soft">{project.problem}</p>
            </Block>
            <Block title="My contribution">
              <List items={project.contribution} />
              {project.teamWork && (
                <div className="mt-6 rounded-xl border border-line bg-panel p-5">
                  <h3 className="font-mono text-xs uppercase tracking-wider text-fg-muted">Built by the wider team</h3>
                  <ul className="mt-3 space-y-1.5 text-sm text-fg-muted">
                    {project.teamWork.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </div>
              )}
            </Block>
            <Block title={project.status === "in-development" ? "Built so far" : "Key features"}>
              <List items={project.features} />
            </Block>
            {project.planned && (
              <Block title="Still in progress">
                <ul className="space-y-2.5">
                  {project.planned.map((item) => (
                    <li key={item} className="flex gap-3 text-fg-muted">
                      <span aria-hidden="true" className="mt-[0.6rem] h-1 w-3 shrink-0 rounded-full bg-amber-500" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </Block>
            )}
            <Block title="Implementation highlights">
              <List items={project.highlights} />
            </Block>
          </div>

          <aside className="self-start rounded-xl border border-line bg-panel p-6 lg:sticky lg:top-24">
            <dl className="space-y-5 text-sm">
              <div>
                <dt className="font-mono text-xs uppercase tracking-wider text-fg-muted">My role</dt>
                <dd className="mt-1 text-fg">{project.role}</dd>
              </div>
              <div>
                <dt className="font-mono text-xs uppercase tracking-wider text-fg-muted">Type</dt>
                <dd className="mt-1 text-fg">{project.context}</dd>
              </div>
              <div>
                <dt className="font-mono text-xs uppercase tracking-wider text-fg-muted">Status</dt>
                <dd className="mt-2">
                  <StatusBadge status={project.status} />
                </dd>
              </div>
              <div>
                <dt className="mb-2 font-mono text-xs uppercase tracking-wider text-fg-muted">Stack</dt>
                <dd>
                  <TechList tech={project.tech} />
                </dd>
              </div>
            </dl>
            {isTeam && (
              <p className="mt-6 border-t border-line pt-4 text-xs leading-relaxed text-fg-muted">
                This was a team project. &ldquo;My contribution&rdquo; lists the parts I worked on.
              </p>
            )}
          </aside>
        </div>

        <section id="screenshots" aria-labelledby="screenshots-title" className="mt-16 border-t border-line pt-12">
          <h2 id="screenshots-title" className="text-2xl font-bold tracking-tight text-fg">
            Screenshots
          </h2>
          {project.screenshots.length > 0 ? (
            <>
              {project.screenshotNote && <p className="mt-2 text-sm text-fg-muted">{project.screenshotNote}</p>}
              <div className="mt-8">
                <ScreenshotGallery project={project} />
              </div>
            </>
          ) : (
            <p className="mt-3 text-fg-muted">
              No screenshots yet.{" "}
              {project.links[0] && (
                <>
                  The{" "}
                  <a
                    href={project.links[0].href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand underline underline-offset-4 hover:text-brand"
                  >
                    source code
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>{" "}
                  is available on GitHub.
                </>
              )}
            </p>
          )}
        </section>

        <nav aria-label="Next project" className="mt-16 border-t border-line pt-8">
          <Link
            href={`/projects/${next.slug}`}
            className="group inline-flex flex-col gap-1 rounded-md"
          >
            <span className="font-mono text-xs uppercase tracking-wider text-fg-muted">Next project</span>
            <span className="inline-flex items-center gap-2 text-xl font-semibold text-fg group-hover:text-brand">
              {next.title}
              <ArrowRight aria-hidden="true" size={18} />
            </span>
          </Link>
        </nav>
      </div>
    </article>
  )
}
