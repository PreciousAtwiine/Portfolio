"use client"

import { useSyncExternalStore } from "react"
import { Moon, Sun } from "lucide-react"
import { THEME_STORAGE_KEY } from "@/lib/theme"

// The `dark` class on <html> is the source of truth; it's set before paint by the script in app/layout.tsx.
function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange)
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] })
  return () => observer.disconnect()
}
const getSnapshot = () => document.documentElement.classList.contains("dark")
const getServerSnapshot = () => true // server HTML is rendered dark, matching the default

export default function ThemeToggle() {
  const isDark = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
  const label = isDark ? "Switch to light theme" : "Switch to dark theme"

  function toggle() {
    const next = isDark ? "light" : "dark"
    document.documentElement.classList.toggle("dark", next === "dark")
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next)
    } catch {
      // Storage can be unavailable (private mode); the theme still applies for this visit.
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-md text-fg-muted transition-colors hover:bg-panel hover:text-fg"
    >
      {isDark ? <Sun aria-hidden="true" size={17} /> : <Moon aria-hidden="true" size={17} />}
    </button>
  )
}
