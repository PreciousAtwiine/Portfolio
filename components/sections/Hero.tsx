import Image from "next/image"
import { ArrowRight, Download, Mail } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import Reveal from "@/components/Reveal"
import { socialLinks } from "@/lib/site"

const iconLink =
  "inline-flex h-10 w-10 items-center justify-center rounded-md text-fg-muted transition-colors hover:bg-panel hover:text-fg"

export default function Hero() {
  return (
    <section aria-labelledby="hero-title" className="px-6 pb-24 pt-32 sm:pt-36 md:pb-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1fr_auto] md:gap-16 lg:gap-24">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-fg-muted">
            <span className="whitespace-nowrap">Software developer</span> ·{" "}
            <span className="whitespace-nowrap">Kampala, Uganda</span>
          </p>
          <h1
            id="hero-title"
            className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight text-fg sm:text-6xl lg:text-7xl"
          >
            Precious Atwiine<span className="-ml-[0.04em] text-brand">.</span>
          </h1>
          <p className="mt-5 text-xl text-fg-soft sm:text-2xl">Building digital solutions through code.</p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex h-11 items-center gap-2 rounded-md bg-brand-solid px-5 font-semibold text-white transition-colors hover:bg-brand-solid-hover"
            >
              View projects
              <ArrowRight aria-hidden="true" size={17} />
            </a>
            <a
              href="/cv.pdf"
              download
              className="inline-flex h-11 items-center gap-2 rounded-md border border-line-strong px-5 font-semibold text-fg transition-colors hover:bg-panel"
            >
              <Download aria-hidden="true" size={17} />
              Download CV
            </a>
          </div>

          <ul aria-label="Social links" className="-ml-2.5 mt-8 flex items-center gap-1">
            <li>
              <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub (opens in a new tab)" className={iconLink}>
                <FaGithub aria-hidden="true" size={19} />
              </a>
            </li>
            <li>
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in a new tab)" className={iconLink}>
                <FaLinkedin aria-hidden="true" size={19} />
              </a>
            </li>
            <li>
              <a href={`mailto:${socialLinks.email}`} aria-label={`Email ${socialLinks.email}`} className={iconLink}>
                <Mail aria-hidden="true" size={19} />
              </a>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={0.08} className="w-full max-w-[18rem] justify-self-center sm:max-w-[20rem] md:w-[20rem] lg:w-[22rem] lg:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-line bg-panel">
            <Image
              src="/precious.png"
              alt="Portrait of Precious Atwiine"
              fill
              preload
              sizes="(min-width: 1024px) 352px, (min-width: 640px) 320px, 288px"
              className="object-cover object-[50%_28%]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
