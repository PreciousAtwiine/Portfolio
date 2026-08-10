"use client"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { FaGithub } from "react-icons/fa"
import Image from "next/image"
import { projects } from "@/lib/projects"

const tabs = ["All", "Frontend", "Fullstack"] as const
type Tab = (typeof tabs)[number]

const techColors: Record<string, string> = {
  "Next.js": "bg-slate-700 text-slate-200",
  TypeScript: "bg-blue-900/60 text-blue-300",
  Django: "bg-green-900/60 text-green-300",
  Python: "bg-yellow-900/60 text-yellow-300",
  Zod: "bg-violet-900/60 text-violet-300",
  React: "bg-pink-900/60 text-pink-300",
  MySQL: "bg-orange-900/60 text-orange-300",
}
function chipColor(tech: string) {
  return techColors[tech] ?? "bg-white/10 text-slate-300"
}

export default function Projects() {
  const [active, setActive] = useState<Tab>("All")
  const filtered = projects.filter((p) => {
    if (active === "All") return true
    if (active === "Frontend") return p.category === "frontend"
    return p.category === "fullstack"
  })

  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-teal-400 text-sm font-semibold tracking-[0.3em] uppercase mb-3">What I&apos;ve built</p>
          <h2 className="text-4xl font-extrabold mb-8 text-white">Selected <span className="gradient-text">Projects</span></h2>

          <div className="inline-flex bg-white/5 border border-white/10 rounded-full p-1 gap-1">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActive(tab)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  active === tab
                    ? "bg-linear-to-r from-violet-600 to-teal-500 text-white"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-slate-900/70 border border-slate-800 rounded-2xl overflow-hidden flex flex-col hover:border-slate-600 transition-all duration-300 group shadow-[0_0_0_1px_rgba(255,255,255,0.02)]"
              >
                {/* Image first — this is the whole point */}
                <div className="relative w-full aspect-video bg-slate-950/80 overflow-hidden">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      fill
                      className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-600 text-sm border border-dashed border-slate-800">
                      Preview coming soon
                    </div>
                  )}
                </div>

                <div className="p-6 flex flex-col gap-4 flex-1">
                  <h3 className="font-semibold text-white text-lg leading-snug group-hover:text-slate-100 transition-colors">
                    {project.title}
                  </h3>

                  {/* Trimmed to 1-2 lines — image carries the "what it looks like" job */}
                  <p className="text-sm text-slate-400 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span key={t} className={`text-xs px-2.5 py-1 rounded-full font-medium ${chipColor(t)}`}>
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Clear action links, not just icons */}
                  <div className="flex flex-wrap gap-3 mt-auto pt-3 border-t border-slate-800">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-teal-300 hover:text-white transition-colors"
                      >
                        <ExternalLink size={14} /> Live Demo
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-400 hover:text-white transition-colors"
                      >
                        <FaGithub size={14} /> Code
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}