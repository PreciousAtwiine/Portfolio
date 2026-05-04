"use client"

import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-6">About me</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I&apos;m a Frontend Developer at Lumpsum Technologies, where I build and own
              the frontend of a B2B SaaS CRM platform serving enterprise clients across
              multiple products.
            </p>
            <p>
              I specialise in Next.js, TypeScript, and the React ecosystem — building
              everything from data-heavy admin dashboards to complex form flows and
              real-time tables.
            </p>
            <p>
              I&apos;m currently pursuing a BSc in Computer Science at Makerere University
              (evening programme) and am available for full-time work Monday to Friday,
              8:30 am – 4:30 pm.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 gap-4"
        >
          {[
            { label: "Role", value: "Frontend Developer" },
            { label: "Company", value: "Lumpsum Technologies" },
            { label: "Location", value: "Kampala, Uganda" },
            { label: "Availability", value: "8:30am – 4:30pm" },
            { label: "Education", value: "BSc CS, Makerere" },
            { label: "Status", value: "Open to opportunities" },
          ].map((item) => (
            <div key={item.label} className="bg-muted/40 rounded-lg p-4">
              <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                {item.label}
              </p>
              <p className="text-sm font-medium">{item.value}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}