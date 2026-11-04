"use client"

import { useState, type FormEvent } from "react"
import { Send, Mail, MapPin, Clock } from "lucide-react"
import SectionHeading from "@/components/SectionHeading"
import { socialLinks } from "@/lib/site"

const contactInfo = [
  { icon: Mail, label: "Email", value: socialLinks.email, href: `mailto:${socialLinks.email}` },
  { icon: MapPin, label: "Location", value: "Kampala, Uganda", href: null },
  { icon: Clock, label: "Availability", value: "Mon–Fri, 8:30am – 4:30pm", href: null },
]

const inputClass =
  "w-full rounded-md border border-line-strong bg-surface px-4 py-3 text-sm text-fg placeholder:text-fg-muted/70 outline-none transition-colors focus:border-brand focus-visible:outline-none"

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
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
    <section id="contact" aria-labelledby="contact-title" className="border-t border-line px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="contact-title"
          index="04"
          eyebrow="Contact"
          title="Get in touch"
          description="I'm open to opportunities and collaborations. Send a message and I'll get back to you."
        />

        <div className="grid items-start gap-10 md:grid-cols-[1fr_1.3fr]">
          <ul className="space-y-3">
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <li key={label} className="flex items-center gap-4 rounded-xl border border-line bg-panel p-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-brand-soft text-brand">
                  <Icon aria-hidden="true" size={17} />
                </span>
                <div className="min-w-0">
                  <p className="font-mono text-xs uppercase tracking-wider text-fg-muted">{label}</p>
                  {href ? (
                    <a href={href} className="break-all text-sm text-fg hover:text-brand">
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm text-fg">{value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <form onSubmit={handleSubmit} className="space-y-4 rounded-xl border border-line bg-panel p-6 sm:p-8">
            <div>
              <label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-fg-soft">
                Your name
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                autoComplete="name"
                placeholder="e.g. John Doe"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-fg-soft">
                Email address
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="e.g. john@example.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-fg-soft">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project or opportunity..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={`${inputClass} resize-none`}
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending" || !form.name || !form.email || !form.message}
              className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-md bg-brand-solid font-semibold text-white transition-colors hover:bg-brand-solid-hover disabled:cursor-not-allowed disabled:opacity-50"
            >
              <Send aria-hidden="true" size={16} />
              {status === "sending" ? "Sending..." : "Send message"}
            </button>

            <p role="status" aria-live="polite" className="min-h-5 text-center text-sm">
              {status === "sent" && <span className="text-emerald-700 dark:text-emerald-300">Message sent. I&apos;ll get back to you soon.</span>}
              {status === "error" && (
                <span className="text-rose-700 dark:text-rose-300">
                  Something went wrong. Email me directly at {socialLinks.email}.
                </span>
              )}
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
