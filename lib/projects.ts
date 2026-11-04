/**
 * Portfolio project data.
 *
 * Every claim here is based on the project's source code, README or commit
 * history. Keep it that way: when a project changes, update this file rather
 * than describing features that are planned but not built.
 */

export type ProjectStatus = "completed" | "in-development"
export type Platform = "web" | "mobile"

export interface Screenshot {
  src: string
  alt: string
  caption: string
  /** Intrinsic pixel size of the file in /public. */
  width: number
  height: number
}

export interface ProjectLink {
  kind: "source" | "live" | "website"
  label: string
  href: string
}

export interface Project {
  slug: string
  title: string
  /** One or two lines for the project card. */
  tagline: string
  status: ProjectStatus
  platform: Platform
  /** e.g. "Team project · University" */
  context: string
  /** What I did, in a few words. */
  role: string
  year: string
  tech: string[]
  links: ProjectLink[]
  screenshots: Screenshot[]
  overview: string
  problem: string
  /** What I personally built. */
  contribution: string[]
  /** For team projects: what the wider team built. */
  teamWork?: string[]
  features: string[]
  highlights: string[]
  /** For projects in development: what isn't built yet. */
  planned?: string[]
  /** Optional note shown alongside the screenshots. */
  screenshotNote?: string
}

const phone = (src: string, alt: string, caption: string, height = 1200): Screenshot => ({
  src,
  alt,
  caption,
  width: 540,
  height,
})

const desktop = (src: string, alt: string, caption: string): Screenshot => ({
  src,
  alt,
  caption,
  width: 1440,
  height: 900,
})

export const projects: Project[] = [
  {
    slug: "quickmed",
    title: "QuickMed",
    tagline:
      "A Flutter app that reminds patients to take their medication and estimates how long it takes to reach their pharmacy.",
    status: "completed",
    platform: "mobile",
    context: "Team project · University",
    role: "Authentication & dashboard",
    year: "2026",
    tech: ["Flutter", "Dart", "Firebase Auth", "Cloud Firestore", "Google Maps", "Local notifications"],
    links: [
      { kind: "source", label: "GitHub (my fork)", href: "https://github.com/PreciousAtwiine/QuickMed" },
      { kind: "website", label: "Project website", href: "https://joelkabanda.github.io/quickmed-website/" },
    ],
    screenshots: [
      phone("/quickmed/sign-in.webp", "QuickMed sign-in screen with email and password fields", "Sign in"),
      phone(
        "/quickmed/dashboard-destination.webp",
        "QuickMed dashboard with a prompt asking the user to set a default destination",
        "Dashboard · destination setup",
      ),
      phone(
        "/quickmed/add-medication.webp",
        "Add Medication form with dose scheduling and medical details",
        "Add medication",
        1195,
      ),
      phone(
        "/quickmed/notifications.webp",
        "Notification history showing medication reminders with travel times by transport mode",
        "Reminder notifications",
      ),
      phone(
        "/quickmed/more-options.webp",
        "More Options menu with reset destination, settings, help and sign out",
        "More options",
        1195,
      ),
    ],
    screenshotNote:
      "Screenshots from a test device. The account name on the dashboard has been removed.",
    overview:
      "QuickMed is a mobile app built by a university team to support patients after a hospital visit. Users record their medications and dose times, and the app schedules notifications ahead of each dose. It also saves the user's pharmacy or other destination and estimates the travel time by several modes of transport.",
    problem:
      "Hospital systems tend to stop at the appointment. After that, patients forget doses or struggle to get their medicine in time. QuickMed covers the period after the consultation: remembering each dose and getting to the pharmacy.",
    contribution: [
      "Built the authentication flow: sign-in, account registration and password reset with Firebase Authentication.",
      "Worked on the dashboard, the app's home screen, with its greeting, quick actions, reminders and bottom navigation.",
    ],
    teamWork: [
      "Medication and reminder scheduling with local notifications",
      "Default-destination setup from GPS or a map picker",
      "Travel-time estimates via Google Routes",
      "Notification history, health profile and pharmacy map",
    ],
    features: [
      "Email and password accounts with password reset",
      "Reminders scheduled ahead of each medication time",
      "Travel estimates for driving, boda, public transit, walking and cycling",
      "Saved default destination, set from current location or the map",
      "Notification history with swipe-to-delete",
    ],
    highlights: [
      "Feature-first folder structure (authentication, dashboard, pharmacy) with shared models and services",
      "Firebase Authentication for sessions; Cloud Firestore for each user's reminders",
      "Falls back to distance-based estimates when the Routes API is unavailable",
    ],
  },
  {
    slug: "hr-management-system",
    title: "HR Management System",
    tagline:
      "A Flask and MySQL application for managing employees, attendance, payroll, leave and recruitment across 16 related tables.",
    status: "completed",
    platform: "web",
    context: "Team project",
    role: "Database design & UI",
    year: "2026",
    tech: ["Python", "Flask", "MySQL", "SQLAlchemy", "JavaScript", "HTML", "CSS"],
    links: [
      { kind: "source", label: "GitHub (team repo)", href: "https://github.com/mervyn-iconic/HR_SYSTEM-" },
    ],
    screenshots: [
      desktop(
        "/flask-database/overview.webp",
        "HR dashboard showing employee, department, pending leave and training totals",
        "Overview dashboard",
      ),
      desktop(
        "/flask-database/employees.webp",
        "Employee records table with search, CSV import and export",
        "Employee records",
      ),
      desktop(
        "/flask-database/add-record.webp",
        "Add Employee form with linked department and job dropdowns",
        "Add record form",
      ),
      desktop(
        "/flask-database/payroll.webp",
        "Payroll table with computed net salary and payment status",
        "Payroll",
      ),
    ],
    screenshotNote: "Captured from a local run with fictional demo data.",
    overview:
      "A web application that gives HR administrators one place to manage staff records. It runs on a relational database designed from an entity-relationship diagram of 16 tables: departments, jobs, employees, attendance, leave, payroll, salaries, benefits, recruitment, performance reviews and training.",
    problem:
      "Staff records, attendance, payroll and leave are often kept in separate files, which makes them hard to keep consistent. A single relational database keeps each record linked to the right employee, department and job.",
    contribution: [
      "Designed and created the HR database: 16 tables built from the ERD, with their keys, relationships and constraints.",
      "Worked on the user interface: the dashboard, navigation and record-management screens.",
    ],
    teamWork: [
      "Administrator sign-in with CSRF protection",
      "Create, edit, delete and search for every table",
      "CSV import and export, including an all-sections ZIP",
      "Light and dark themes and automated tests",
    ],
    features: [
      "Overview dashboard with headcount, department breakdown and pending leave",
      "Navigation grouped into five areas: employees, attendance & leave, payroll & benefits, recruitment, performance",
      "Forms with dropdowns for linked records",
      "Net salary calculated from basic salary, allowances and deductions",
    ],
    highlights: [
      "One schema runs on MySQL and on SQLite for local previews",
      "Integrity rules: unique emails, one attendance record per employee per day, valid date ranges",
      "Foreign-key deletes are restricted, so history is preserved",
    ],
  },
  {
    slug: "medigo",
    title: "MediGo",
    tagline:
      "A medicine-ordering app in progress: browse pharmacies, view their medicines and add them to a cart.",
    status: "in-development",
    platform: "mobile",
    context: "Personal project",
    role: "Solo developer",
    year: "2026",
    tech: ["Flutter", "Dart", "Firebase Auth", "Cloud Firestore", "Geocoding"],
    links: [{ kind: "source", label: "GitHub", href: "https://github.com/PreciousAtwiine/MediGo" }],
    screenshots: [
      phone("/medigo/onboarding.webp", "MediGo onboarding screen reading Your Medicine, Delivered Fast", "Onboarding", 1169),
      phone(
        "/medigo/login.webp",
        "MediGo login screen with email, Google and Apple sign-in options",
        "Login",
        1169,
      ),
    ],
    screenshotNote: "Captured from the current web build. More screens will follow as development continues.",
    overview:
      "MediGo is a Flutter app I'm building to make it easier to find medicine at pharmacies and order it. Pharmacy and medicine data is stored in Cloud Firestore and updates in the app in real time.",
    problem:
      "Finding out which pharmacy has a medicine usually means calling around or going in person. MediGo aims to show pharmacies and their medicines in one app and let users order from there.",
    contribution: ["Sole developer: app structure, UI, Firebase integration and data models."],
    features: [
      "Onboarding, then email and password sign-up and login",
      "Google and Apple sign-in",
      "Pharmacy list that updates live from Firestore",
      "Medicine catalogue with prices in UGX",
      "Cart for selected medicines",
      "Add a pharmacy; its address is converted to map coordinates",
    ],
    highlights: [
      "Auth state decides whether to show onboarding or the main app",
      "A small Firestore service layer provides typed streams of pharmacies and medicines, with optional filtering by pharmacy",
      "Firebase configuration is kept out of version control",
    ],
    planned: [
      "Map view of nearby pharmacies",
      "Checkout, orders and delivery (order and driver data models exist; screens are not built yet)",
      "Pharmacy detail and account settings screens",
    ],
  },
  {
    slug: "merk-establishments",
    title: "MERK Establishments",
    tagline:
      "A Django system for managing products, sales and staff accounts, with password reset by emailed one-time code.",
    status: "completed",
    platform: "web",
    context: "Individual project",
    role: "Solo developer",
    year: "2025",
    tech: ["Python", "Django", "PostgreSQL", "Bootstrap", "HTML", "CSS"],
    links: [
      { kind: "source", label: "GitHub", href: "https://github.com/PreciousAtwiine/MERK-Establishments" },
    ],
    screenshots: [],
    overview:
      "A management system for a small business that records stock and sales and controls which staff can access them.",
    problem:
      "Paper or spreadsheet records make it hard to keep stock and sales accurate, or to control who can change them. MERK keeps both in one database behind a login.",
    contribution: ["Sole developer: data models, views, templates, authentication and deployment configuration."],
    features: [
      "Sign-up and login",
      "Password reset with a 6-digit email code that expires after 5 minutes",
      "Add, edit and delete products and stock",
      "Record sales by cash, mobile money or bank",
      "User management with profiles and profile pictures",
    ],
    highlights: [
      "PostgreSQL configured with dj-database-url",
      "Configured for deployment with Gunicorn and WhiteNoise",
      "GitHub Actions workflow for continuous integration",
    ],
  },
  {
    slug: "kgl-grocery",
    title: "KGL Grocery Management System",
    tagline:
      "A Django system for a produce wholesaler to track stock and sales, with separate dashboards for owners, managers and sales agents.",
    status: "completed",
    platform: "web",
    context: "Individual project",
    role: "Solo developer",
    year: "2025",
    tech: ["Python", "Django", "SQLite", "Bootstrap", "HTML", "CSS", "JavaScript"],
    links: [
      { kind: "source", label: "GitHub", href: "https://github.com/PreciousAtwiine/KGLdjango" },
      { kind: "source", label: "Static prototype", href: "https://github.com/PreciousAtwiine/KGL" },
    ],
    screenshots: [],
    overview:
      "A management system for a cereal and produce wholesaler. It tracks the stock it buys, from its own farms and from other suppliers, and the sales made by each branch's agents.",
    problem:
      "A wholesaler has to know what's in stock, where it came from and what's been sold, while giving owners, managers and sales agents different levels of access.",
    contribution: [
      "Sole developer: requirements and data model, Django back end and templates. I first built a static HTML/CSS prototype of the interface.",
    ],
    features: [
      "Custom user model with owner, manager and sales-agent roles",
      "A dashboard for each role",
      "Stock records by category and supplier",
      "Sales recording with customer details and payment method",
      "User list and detail views",
    ],
    highlights: [
      "Extends Django's AbstractUser with role flags",
      "Uses Django's built-in authentication views",
      "Bootstrap 5 for layout and components",
    ],
  },
]

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug)
}
