"use client"
import { motion } from "framer-motion"
import { MapPin, Clock, GraduationCap, Briefcase } from "lucide-react"

const cards = [
  { icon: Briefcase, label: "Role", value: "Frontend & Software Developer" },
  { icon: MapPin, label: "Location", value: "Kampala, Uganda" },
  { icon: Clock, label: "Available", value: "Mon–Fri, 8:30am – 4:30pm" },
  { icon: GraduationCap, label: "Education", value: "BSc CS, Makerere (Evening)" },
]

export default function About() {
  return (
    <section id="about" className="py-28 px-6 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-64 h-64 bg-violet-600/10 rounded-full blur-3xl"/>
        </div>
        <div className="max-w-6xl mx-auto relative z-10">

        <motion.div
          initial={{ opacity: 0, y:20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-teal-400 text-sm font-semibold tracking-[0.3em] uppercase mb-3">Get to know me</p>
          <h2 className="text-4xl font-extrabold">About <span className="gradient-text">Me</span></h2>
          </motion.div>

          <div className="gird md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5 text-slate-400 leading-relaxed">

            <p>
              I&apos;m a <span className="text-white font-semibold">Full-Stack Developer</span> who
              builds production-grade web applications end-to-end — from  {" "}
              <span className="text-white font-semibold"> React</span> and{" "}
              <span className="text-white font-semibold"> Next.js</span> interfaces to{" "}
              <span className="text-white font-semibold"> Django</span> and{" "}
              <span className="text-white font-semibold"> ASP.NET MVC</span> backends.
            </p>

            <p>
              I&apos;ve shipped real systems: data-driven dashboards, CRM modules, ticketing
              and lead management tools backed by typed REST APIs.
            </p>

            <p>
              I care about the details — layout precision, performance, and interfaces
              that actually make sense to use.
            </p>

          </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 gap-4"
        >
          {cards.map(({ icon: Icon, label, value}) =>(

            <div key={label} className="bg-white/5 border-white/10 rounded-2xl p-5 hover:border-violet-500/50 hover:bg-violet-500/5 transition-all duration-300">
              <Icon size={20} className="text-violet-400 mb-3"/>
              <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">
                {label}
              </p>
              <p className="text-sm font-medium">{value}</p>
            </div>
          ))}
          
        </motion.div>
      </div>
      </div>
    </section>
  )
}