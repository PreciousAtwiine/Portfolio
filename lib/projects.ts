export interface Project {
  title: string
  description: string
  tech: string[]
  github?: string
  live?: string
  featured: boolean
  category: "frontend" | "fullstack"
}

export const projects: Project[] = [
  {
    title: "Lumpsum CRM Dashboard",
    description:
      "Production B2B SaaS admin dashboard managing enterprise clients across Bankroll, Optimo, Cashnet, and Relync. Built the full frontend from scratch — KPI analytics, executive charts, billing snapshots, and server status panels consuming live REST APIs.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Recharts"],
    featured: true,
    category: "frontend",
  },
  {
    title: "Ticketing Module — Lumpsum",
    description:
      "Full CRUD ticketing system with open/in-progress/resolved/closed flows, assign and detail dialogs, column-level filtering, and TanStack Table integration. Fully typed and wired to a REST backend via service codes.",
    tech: ["Next.js", "TypeScript", "TanStack Table", "React Hook Form", "Zod"],
    featured: true,
    category: "frontend",
  },
  {
    title: "Leads Management — Lumpsum",
    description:
      "End-to-end leads management module built from scratch. Add/edit/assign dialogs, Zod-validated forms, UUID-to-label mapping for backend compatibility, and a full data table with status filters and action menus.",
    tech: ["Next.js", "TypeScript", "React Hook Form", "Zod", "shadcn/ui"],
    featured: true,
    category: "frontend",
  },
  {
    title: "KGL Grocery Management System",
    description:
      "A full-stack grocery management system built with Django. Handles inventory tracking, product categorisation, stock alerts, and order management for a grocery business.",
    tech: ["Django", "Python", "MySQL", "HTML", "CSS", "JavaScript"],
    featured: true,
    category: "fullstack",
  },
  {
    title: "MERK Establishments Management System",
    description:
      "A Django-based management system with user authentication, role-based access control, and CRUD operations for managing records and workflows.",
    tech: ["Django", "Python", "MySQL", "HTML", "CSS"],
    featured: false,
    category: "fullstack",
  },
]