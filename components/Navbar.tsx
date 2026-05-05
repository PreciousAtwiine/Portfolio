"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0a0a0f]/90 backdrop-blur-xl border-b border-violet-500/20"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-extrabold text-xl tracking-tight">
          <span className="gradient-text">Precious</span>
          <span className="text-violet-400">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-slate-400 hover:text-white transition-colors duration-200 relative group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-linear-to-r from-violet-400 to-teal-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
          ))}
          <li>
            <a
              href="/cv.pdf"
              download
              className="text-sm border border-violet-500 text-violet-400 px-4 py-1.5 rounded-full hover:bg-violet-500 hover:text-white transition-all duration-300"
            >
              Download CV
            </a>
          </li>
        </ul>

        {/* Mobile menu button */}
        <button className="md:hidden text-slate-400" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0a0a0f]/95 backdrop-blur-xl border-b border-violet-500/20 px-6 pb-4">
          <ul className="flex flex-col gap-4 pt-2">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm text-slate-400 hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a href="/cv.pdf" download className="text-sm text-violet-400">
                Download CV
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}