import type { ProjectStatus } from "@/lib/projects"

const styles: Record<ProjectStatus, { label: string; className: string; dot: string }> = {
  completed: {
    label: "Completed",
    className:
      "border-emerald-700/20 bg-emerald-50 text-emerald-800 dark:border-emerald-400/25 dark:bg-emerald-400/10 dark:text-emerald-300",
    dot: "bg-emerald-600 dark:bg-emerald-400",
  },
  "in-development": {
    label: "In development",
    className:
      "border-amber-700/25 bg-amber-50 text-amber-900 dark:border-amber-400/25 dark:bg-amber-400/10 dark:text-amber-300",
    dot: "bg-amber-600 dark:bg-amber-400",
  },
}

export default function StatusBadge({ status }: { status: ProjectStatus }) {
  const s = styles[status]
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium ${s.className}`}>
      <span aria-hidden="true" className={`h-1.5 w-1.5 rounded-full ${s.dot}`} />
      {s.label}
    </span>
  )
}
