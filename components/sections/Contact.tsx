"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"

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
    <section id="contact" className="py-24 px-6 bg-muted/20">
      <div className="max-w-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Get in touch</h2>
          <p className="text-muted-foreground">
            Open to opportunities, collaborations, or just a chat.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-4"
        >
          <input
            type="text"
            placeholder="Your name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm outline-none focus:border-primary transition-colors"
          />
          <input
            type="email"
            placeholder="Your email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm outline-none focus:border-primary transition-colors"
          />
          <textarea
            placeholder="Your message"
            rows={5}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm outline-none focus:border-primary transition-colors resize-none"
          />
          <Button
            onClick={handleSubmit}
            disabled={status === "sending" || !form.name || !form.email || !form.message}
            className="w-full"
            size="lg"
          >
            <Send size={16} className="mr-2" />
            {status === "sending" ? "Sending..." : "Send message"}
          </Button>

          {status === "sent" && (
            <p className="text-sm text-center text-green-500">
              Message sent! I&apos;ll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="text-sm text-center text-red-500">
              Something went wrong. Try emailing me directly at preciousinshuti3@gmail.com
            </p>
          )}
        </motion.div>
      </div>
    </section>
  )
}