"use client"
import { motion } from "framer-motion"

const skillGroups = [
  {
    category: "Frontend",
    color: "from-violet-500 to-violet-700",
    glow: "group-hover:shadow-violet-500/25",
    skills: ["Next.js", "TypeScript", "React", "Tailwind CSS", "shadcn/ui", "Framer Motion"],
  },
  {
    category: "Data & Forms",
    color: "from-teal-500 to-teal-700",
    glow: "group-hover:shadow-teal-500/25",
    skills: ["TanStack Table", "React Hook Form", "Zod", "Recharts"],
  },
  {
    category: "Backend",
    color: "from-pink-500 to-pink-700",
    glow: "group-hover:shadow-pink-500/25",
    skills: ["Django", "Python", "Node.js", "ASP.NET / C#", "REST APIs"],
  },
  {
    category: "Tools & Practices",
    color: "from-amber-500 to-amber-700",
    glow: "group-hover:shadow-amber-500/25",
    skills: ["Git & GitHub", "Agile / Scrum", "Docker", "MySQL", "VS Code"],
  },
]


export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 eight-1/4 w-80 h-80 bg-teal-600/10 rounded-full blur-3xl"/>
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-teal-400 text-sm font-semibold tracking-[0.3em] uppercase mb-3">What I work with</p>
          <h2 className="text-4xl fomt-extrabold">My <span className="gradient-text">Skills</span></h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300 hover:shadow-xl ${group.glow}`}
            >
              <div className={`inline-block bg-linear-to-r ${group.color} text-white text-xs font-bold px-3 py-1 rounded-full mb-5`}>
                {group.category}
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="text-xs bg-white/10 text-slate-300 px-3 py-1.5 rounded-full border border-white/10">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}