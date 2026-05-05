"use client"
import {useState} from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { FaGithub } from "react-icons/fa"
import { Badge } from "@/components/ui/badge"
import { projects } from "@/lib/projects"

const tabs = ["All", "Frontend", "Fullstack"] as const
type Tab = (typeof tabs)[number]

export default function Projects() {
  const [active, setActive] = useState<Tab>("All")
  const filtered = projects.filter((p) => {
    if (active === "All") return true
    if (active === "Frontend") return p.category === "frontend"
    return p.category === "fullstack"
  })

  const techColors: Record<string, string> = {
    "Next.js": "bg-slate-700 text-slate-200",
    TypeScript: "bg-blue-900/60 text-blue-300",
    Django: "bg-green-900/60 text-green-300",
    Python: "bg-yellow-900/60 text-yellow-300",
    Zod:"bg-violet-900/60 text-violet-300",
    React:"bg-pink-900/60 text-pink-300",
    MySQL:"bg-orange-900/60 text-orange-300",
  }

  function chipColor(tech: string) {
    return techColors[tech] ?? "bg-white/10 text-slate-300"
  }


  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-pink-600/10 rounded-full blur-3xl"/>
      </div>
        <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-teal-400 text-sm font-semibold tracking-[0.3em] uppercase mb-3">What I&apos;ve built</p>
          <h2 className="text-4xl font-extrabold mb-8">My <span className="gradient-text"></span>Projects</h2>

          {/* Filter tabs */}
          <div className="inline-flex bg-white/5 border-white-10 rounded-full p-1 gap-1">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActive(tab)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${active === tab ?
                  "bg-linear-to-r from-violet-600 to-teal-500 text-white"
                  : "text-slate-400 hover:text-white"
                }`}>
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
              animate={{opacity:1, y:0}}
              exit={{opacity:0, scale:0.95}}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col gap-4 hover:border-violet-500/50 hover:bg-violet-500/50 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-bold text-white text-lg leading-snug group-hover:text-violet-300 transition-colors">{project.title}</h3>
                <div className="flex gap-2 shrink-0 mt-1">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer"
                      className="text-slate-500 hover:text-white transition-colors">
                      <FaGithub size={17} />
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer"
                      className="text-slate-500 hover:text-teal-400 transition-colors">
                      <ExternalLink size={17} />
                    </a>
                  )}
                </div>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span key={t} className={`text-xs px-2.5 py-1 rounded-full font-medium ${chipColor(t)}`}>
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}