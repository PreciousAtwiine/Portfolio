interface SectionHeadingProps {
  index: string
  eyebrow: string
  title: string
  description?: string
  id?: string
}

export default function SectionHeading({ index, eyebrow, title, description, id }: SectionHeadingProps) {
  return (
    <div className="mb-12 max-w-2xl">
      <p className="mb-3 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-fg-muted">
        <span className="text-brand">{index}</span>
        <span aria-hidden="true" className="h-px w-8 bg-line-strong" />
        {eyebrow}
      </p>
      <h2 id={id} className="text-3xl font-bold tracking-tight text-fg sm:text-4xl">
        {title}
      </h2>
      {description && <p className="mt-4 text-base leading-relaxed text-fg-muted">{description}</p>}
    </div>
  )
}
