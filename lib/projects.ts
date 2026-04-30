export interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    title: "Lumpsum CRM Dashboard",
    description:
      "A production B2B SaaS admin dashboard managing enterprise clients across multiple products. Built the full frontend from scratch including an analytics dashboard, ticketing system, and leads management module.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "TanStack Table", "Recharts", "Zod"],
    featured: true,
  },
  {
    title: "Ticketing Module",
    description:
      "Full CRUD ticketing system with open/in-progress/resolved/closed status flows, assign and detail dialogs, column-level filtering, and real-time REST API integration.",
    tech: ["Next.js", "TypeScript", "TanStack Table", "React Hook Form", "Zod"],
    featured: true,
  },
  {
    title: "Leads Management",
    description:
      "End-to-end leads management module with add/edit/assign flows, Zod-validated forms, and a full-featured data table with action menus.",
    tech: ["Next.js", "TypeScript", "React Hook Form", "Zod", "shadcn/ui"],
    featured: false,
  },
]