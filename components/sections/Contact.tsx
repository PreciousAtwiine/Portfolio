"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Mail, MapPin, Clock } from "lucide-react"

const contactInfo = [
  { icon: Mail, label: "Email", value: "preciousinshuti3@gmail.com", href: "mailto:preciousinshuti3@gmail.com" },
  { icon: MapPin, label: "Location", value: "Kampala, Uganda", href: null },
  { icon: Clock, label: "Availability", value: "Mon–Fri, 8:30am – 4:30pm", href: null },
]

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")

  async function handleSubmit() {
    setStatus("sending")
    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus("sent")
        setForm({ name: "", email: "", message: "" })
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <section id="contact" className="py-28 px-6 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/15 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-500/15 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-teal-400 text-sm font-semibold tracking-[0.3em] uppercase mb-3">
            Let&apos;s work together
          </p>
          <h2 className="text-4xl font-extrabold mb-4">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-slate-400 max-w-md mx-auto">
            Open to opportunities, collaborations, or just a chat. I&apos;ll get back to you fast.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left — contact info cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <div
                key={label}
                className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-violet-500/50 hover:bg-violet-500/5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-600 to-teal-500 flex items-center justify-center shrink-0">
                  <Icon size={16} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wide mb-0.5">{label}</p>
                  {href ? (
                    <a href={href} className="text-sm text-slate-200 hover:text-violet-400 transition-colors">
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm text-slate-200">{value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Decorative quote */}
            <div className="mt-8 p-6 rounded-2xl border border-violet-500/20 bg-violet-500/5">
              <p className="text-slate-400 text-sm leading-relaxed italic">
                &ldquo;I&apos;m always excited to work on new challenges and bring ideas to life through clean, thoughtful code.&rdquo;
              </p>
              <p className="text-violet-400 text-sm font-semibold mt-3">— Precious Atwiine</p>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8"
          >
            <h3 className="text-xl font-bold text-white mb-6">Send a message</h3>
            <div className="space-y-4">
              <div>
                <label className="text-xs text-slate-400 uppercase tracking-wide mb-2 block">Your name</label>
                <input
                  type="text"
                  placeholder="e.g. John Doe"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 outline-none focus:border-violet-500 focus:bg-violet-500/5 transition-all"
                />
              </div>
              <div>
                <label className="text-xs text-slate-400 uppercase tracking-wide mb-2 block">Email address</label>
                <input
                  type="email"
                  placeholder="e.g. john@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 outline-none focus:border-violet-500 focus:bg-violet-500/5 transition-all"
                />
              </div>
              <div>
                <label className="text-xs text-slate-400 uppercase tracking-wide mb-2 block">Message</label>
                <textarea
                  placeholder="Tell me about your project or opportunity..."
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 outline-none focus:border-violet-500 focus:bg-violet-500/5 transition-all resize-none"
                />
              </div>

              <button
                onClick={handleSubmit}
                disabled={status === "sending" || !form.name || !form.email || !form.message}
                className="w-full bg-gradient-to-r from-violet-600 to-teal-500 text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={16} />
                {status === "sending" ? "Sending..." : "Send message"}
              </button>

              {status === "sent" && (
                <p className="text-sm text-center text-teal-400">
                  ✓ Message sent! I&apos;ll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-center text-pink-400">
                  Something went wrong. Email me directly at preciousinshuti3@gmail.com
                </p>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}