"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import ThemeToggle from "@/components/ThemeToggle"

// Absolute hash links so they also work from project pages.
const links = [
  { label: "Projects", href: "/#projects" },
  { label: "Skills", href: "/#skills" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false)
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  return (
    <header
      className={`fixed top-0 z-50 w-full border-b px-6 transition-colors duration-200 ${
        open
          ? "border-line bg-canvas"
          : scrolled
            ? "border-line bg-canvas/90 backdrop-blur-md"
            : "border-transparent bg-canvas/0"
      }`}
    >
      <nav aria-label="Main" className="mx-auto grid h-16 max-w-6xl grid-cols-[1fr_auto] items-center md:grid-cols-[1fr_auto_1fr]">
        <Link href="/" className="justify-self-start text-[0.95rem] font-semibold tracking-tight text-fg">
          Precious Atwiine<span className="text-brand">.</span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm text-fg-muted transition-colors hover:text-fg">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 justify-self-end">
          <ThemeToggle />
          <a
            href="/cv.pdf"
            download
            className="hidden h-9 items-center rounded-md border border-line-strong px-3.5 text-sm font-medium text-fg transition-colors hover:bg-panel md:inline-flex"
          >
            Download CV
          </a>
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md text-fg-muted hover:bg-panel hover:text-fg md:hidden"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="mx-auto max-w-6xl border-t border-line pb-5 md:hidden">
          <ul className="flex flex-col pt-2">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="block py-3 text-base text-fg-soft hover:text-fg"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-3">
              <a
                href="/cv.pdf"
                download
                className="inline-flex h-10 items-center rounded-md border border-line-strong px-4 text-sm font-medium text-fg"
              >
                Download CV
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
