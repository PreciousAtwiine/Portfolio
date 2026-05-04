"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

const skillGroups = [
  {
    category: "Primary Stack",
    skills: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
  },
  {
    category: "UI & Components",
    skills: ["shadcn/ui", "Framer Motion", "Recharts", "Lucide Icons"],
  },
  {
    category: "Data & Forms",
    skills: ["TanStack Table", "React Hook Form", "Zod"],
  },
  {
    category: "Other",
    skills: ["Django", "Node.js", "ASP.NET", "MySQL", "Docker", "Git"],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-muted/20">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Skills</h2>
          <p className="text-muted-foreground">Technologies I work with daily</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-background border border-border rounded-xl p-6"
            >
              <h3 className="text-sm font-semibold text-primary mb-4 uppercase tracking-wide">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}