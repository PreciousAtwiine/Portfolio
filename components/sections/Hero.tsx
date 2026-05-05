'use client'
import { motion } from 'framer-motion'
import { ArrowDown, Mail } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-600/10 rounded-full blur-3xl" />
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
            className="text-5xl md:text-6xl font-extrabold leading-tight mb-4"
          >
            Precious
            <br />
            <span className="gradient-text">Atwiine</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-slate-300 font-medium mb-2"
          >
            Frontend Developer <span className="text-violet-400">&</span>{' '}
            Software Developer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-slate-400 leading-relaxed mb-8 max-w-md"
          >
            I build production-grade B2B SaaS interfaces and full-stack
            applications. Specialising in Next.js, TypeScript, and Django. Based
            in Kampala, Uganda — available 8:30am–4:30pm.
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
            <a
              href="https://github.com/PreciousAtwiine"
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-violet-400 transition-colors"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/precious-atwiine-83128a223/"
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-teal-400 transition-colors"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="mailto:preciousinshuti3@gmail.com"
              className="text-slate-400 hover:text-pink-400 transition-colors"
            >
              <Mail size={20} />
            </a>
          </motion.div>
        </motion.div>

        {/* Photo side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex justify-center"
        >
          <div className="relative float">
            {/* Spinning gradient ring */}
            <div className="absolute inset-0 rounded-full spin-slow">
              <div className="w-full h-full rounded-full bg-linear-to-r from-violet-600 via-teal-400 to-pink-500 p-1">
                <div className="w-full h-full rounded-full bg-[#0a0a0f]" />
              </div>
            </div>

            {/* Glow behind */}
            <div className="absolute inset-4 rounded-full bg-linear-to-br from-violet-600/40 to-teal-500/40 blur-2xl" />

            {/* Photo */}
            <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#0a0a0f] glow">
              <Image
                src="/precious.jpeg"
                alt="Precious Atwiine"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a
          href="#about"
          className="text-slate-500 hover:text-slate-300 transition-colors"
        >
          <ArrowDown size={20} className="animate-bounce" />
        </a>
      </motion.div>
    </section>
  )
}
