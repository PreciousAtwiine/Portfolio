import Image from "next/image"
import type { Screenshot } from "@/lib/projects"

/** A plain phone frame around a mobile screenshot. Width comes from the parent or `className`. */
export default function DeviceFrame({
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
    // The bezel stays dark in both themes, like a real device.
    <div className={`rounded-[1.6rem] border border-black/10 bg-[#111114] p-[5px] shadow-frame dark:border-white/10 ${className}`}>
      <div className="relative aspect-[9/19.5] overflow-hidden rounded-[1.3rem] bg-[#1c1c20]">
        <Image src={shot.src} alt={shot.alt} fill sizes={sizes} preload={preload} className="object-cover object-top" />
      </div>
    </div>
  )
}
