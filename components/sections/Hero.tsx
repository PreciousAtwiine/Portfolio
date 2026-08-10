'use client'
import { motion } from 'framer-motion'
import { ArrowDown, Mail } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.12),transparent_38%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(13,148,136,0.1),transparent_36%)]" />
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text side */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-teal-400 text-sm font-semibold tracking-[0.3em] uppercase mb-4"
          >
            Hello, I&apos;m
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-6xl font-extrabold leading-tight mb-4 text-white"
          >
            Precious
            <br />
            <span className="gradient-text">Atwiine</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-slate-200 font-medium mb-2"
          >
            Frontend <span className="text-violet-400">&</span>{' '}
            Full-Stack Developer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-slate-300 leading-relaxed mb-8 max-w-md text-[1.02rem]"
          >
            I build production-grade B2B SaaS interfaces and full-stack applications — from Next.js frontends to Django and ASP.NET backends. Based in Kampala, Uganda.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-4 flex-wrap"
          >
            <a
              href="#projects"
              className="bg-linear-to-r from-violet-600 to-teal-500 text-white font-semibold px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
            >
              View my work
            </a>

            <a
              href="/cv.pdf"
              download
              className="border border-slate-600 text-slate-300 font-semibold px-6 py-3 rounded-full hover:border-violet-500 hover:text-violet-400 transition-all"
            >
              Download CV
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex items-center gap-5 mt-8"
          >
            <a href="https://github.com/PreciousAtwiine" target="_blank" rel="noreferrer"
              className="text-slate-400 hover:text-white transition-colors">
              <FaGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/precious-atwiine-83128a223/" target="_blank" rel="noreferrer"
              className="text-slate-400 hover:text-white transition-colors">
              <FaLinkedin size={20} />
            </a>
            <a href="mailto:preciousinshuti3@gmail.com"
              className="text-slate-400 hover:text-white transition-colors">
              <Mail size={20} />
            </a>
          </motion.div>
        </motion.div>

        {/* Photo side — flat ring, no spinning gradient / no blur glow behind face */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex justify-center"
        >
          <div className="relative w-72 h-72 md:w-80 md:h-80">
            <div className="absolute inset-0 rounded-full border border-slate-700/80 bg-slate-900/80" />
            <div className="absolute inset-3 rounded-full overflow-hidden border border-slate-800">
              <Image
                src="/precious.png"
                alt="Precious Atwiine"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="text-slate-500 hover:text-slate-200 transition-colors">
          <ArrowDown size={20} className="animate-bounce" />
        </a>
      </motion.div>
    </section>
  )
}
