/** Technology tags. Pass `limit` to show the first few plus a "+N" count. */
export default function TechList({ tech, limit, label = "Technologies" }: { tech: string[]; limit?: number; label?: string }) {
  const shown = limit ? tech.slice(0, limit) : tech
  const hidden = tech.length - shown.length
  return (
    <ul aria-label={label} className="flex flex-wrap gap-1.5">
      {shown.map((t) => (
        <li
          key={t}
          className="rounded border border-line bg-panel px-2 py-1 font-mono text-[0.7rem] leading-none text-fg-soft"
        >
          {t}
        </li>
      ))}
      {hidden > 0 && (
        <li className="px-1 py-1 font-mono text-[0.7rem] leading-none text-fg-muted">
          +{hidden}
          <span className="sr-only"> more: {tech.slice(shown.length).join(", ")}</span>
        </li>
      )}
    </ul>
  )
}
