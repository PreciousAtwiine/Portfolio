"use client"

import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl"
      >
        <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4">
          Hello, I&apos;m
        </p>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          Precious Atwiine
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-4">
          Frontend Developer
        </p>
        <p className="text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
          I build production-grade B2B SaaS interfaces with Next.js and TypeScript.
          Based in Kampala, Uganda.
        </p>

        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Button asChild size="lg">
            <a href="#projects">View my work</a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="/cv.pdf" download>Download CV</a>
          </Button>
          <a href="https://github.com/PreciousAtwiine" target="_blank" rel="noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors">
            <Github size={22} />
          </a>
          <a href="https://www.linkedin.com/in/precious-atwiine-83128a223/" target="_blank" rel="noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors">
            <Linkedin size={22} />
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10"
      >
        <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
          <ArrowDown size={20} className="animate-bounce" />
        </a>
      </motion.div>
    </section>
  )
}