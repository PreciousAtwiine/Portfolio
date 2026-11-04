import { MapPin, Clock, GraduationCap, Briefcase } from "lucide-react"
import SectionHeading from "@/components/SectionHeading"

const facts = [
  { icon: Briefcase, label: "Role", value: "Software Developer" },
  { icon: MapPin, label: "Location", value: "Kampala, Uganda" },
  { icon: GraduationCap, label: "Education", value: "BSc CS, Makerere (Evening)" },
  { icon: Clock, label: "Available", value: "Mon–Fri, 8:30am – 4:30pm" },
]

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="border-t border-line px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading id="about-title" index="03" eyebrow="About" title="A bit about me" />

        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr]">
          <div className="max-w-2xl space-y-5 text-base leading-relaxed text-fg-soft">
            <p>
              I&apos;m a software developer who works across the stack: React and Next.js on the front end, Python
              (Django and Flask) and C#/.NET on the back end, and Flutter for mobile. I design relational databases in
              MySQL, PostgreSQL and SQL Server.
            </p>
            <p>
              Professionally, I build frontend modules for a production B2B SaaS platform. That work is under a
              confidentiality agreement, so it isn&apos;t shown here. The projects above are university, team and
              personal work I can share.
            </p>
            <p>I care about interfaces that are clear to use and code that stays easy to change.</p>
          </div>

          <dl className="grid grid-cols-1 gap-3 self-start sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
            {facts.map(({ icon: Icon, label, value }) => (
              <div key={label} className="rounded-xl border border-line bg-panel p-4">
                <dt className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-fg-muted">
                  <Icon aria-hidden="true" size={14} className="text-brand" />
                  {label}
                </dt>
                <dd className="mt-2 text-sm font-medium text-fg">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
