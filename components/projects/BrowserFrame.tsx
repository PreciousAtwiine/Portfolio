import Image from "next/image"
import type { Screenshot } from "@/lib/projects"

/** A minimal browser window around a desktop screenshot. */
export default function BrowserFrame({
  shot,
  sizes,
  className = "",
  preload = false,
}: {
  shot: Screenshot
  sizes: string
  className?: string
  preload?: boolean
}) {
  return (
    <div className={`overflow-hidden rounded-lg border border-line-strong bg-surface shadow-frame ${className}`}>
      <div aria-hidden="true" className="flex h-7 items-center gap-1.5 border-b border-line bg-panel px-3">
        <span className="h-2 w-2 rounded-full bg-line-strong" />
        <span className="h-2 w-2 rounded-full bg-line-strong" />
        <span className="h-2 w-2 rounded-full bg-line-strong" />
      </div>
      <div className="relative aspect-[16/10] bg-white">
        <Image src={shot.src} alt={shot.alt} fill sizes={sizes} preload={preload} className="object-cover object-top" />
      </div>
    </div>
  )
}
