import SectionHeading from "@/components/SectionHeading"

const groups = [
  {
    category: "Frontend",
    summary: "Interfaces and client-side apps",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    category: "Backend",
    summary: "Server-side applications and APIs",
    skills: ["Python", "Django", "Flask", "C#", ".NET / ASP.NET MVC", "Node.js", "REST APIs"],
  },
  {
    category: "Mobile",
    summary: "Cross-platform apps",
    skills: ["Flutter", "Dart", "Firebase Authentication", "Cloud Firestore"],
  },
  {
    category: "Databases",
    summary: "Relational design and SQL",
    skills: ["MySQL", "PostgreSQL", "SQL Server"],
  },
  {
    category: "Libraries & tools",
    summary: "What I use day to day",
    skills: ["shadcn/ui", "TanStack Table", "React Hook Form", "Zod", "Framer Motion", "Docker", "Git & GitHub"],
  },
]

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="border-t border-line px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading id="skills-title" index="02" eyebrow="Skills" title="What I work with" />

        <dl className="divide-y divide-line border-y border-line">
          {groups.map((g) => (
            <div key={g.category} className="grid gap-3 py-6 md:grid-cols-[14rem_1fr] md:gap-8">
              <dt>
                <span className="block font-semibold text-fg">{g.category}</span>
                <span className="mt-1 block text-sm text-fg-muted">{g.summary}</span>
              </dt>
              <dd>
                <ul className="flex flex-wrap gap-2">
                  {g.skills.map((s) => (
                    <li key={s} className="rounded-md border border-line bg-panel px-3 py-1.5 text-sm text-fg">
                      {s}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
