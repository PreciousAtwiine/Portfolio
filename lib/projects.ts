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
      "A Django system for recording sales, managing products and stock, and controlling staff access, with a sales overview dashboard.",
    status: "completed",
    platform: "web",
    context: "Individual project",
    role: "Solo developer",
    year: "2025",
    tech: ["Python", "Django", "PostgreSQL", "Bootstrap", "HTML", "CSS"],
    links: [
      { kind: "source", label: "GitHub", href: "https://github.com/PreciousAtwiine/MERK-Establishments" },
    ],
    screenshots: [
      desktop(
        "/merk/sales-overview.webp",
        "MERK sales overview with total sales value, today's sales, product and stock figures above a table of sales records",
        "Sales overview",
      ),
      desktop("/merk/sign-in.webp", "MERK sign-in page with username and password fields beside the company panel", "Sign in"),
      desktop(
        "/merk/products.webp",
        "Products table with supplier, unit cost, unit price, stock level and an out-of-stock marker",
        "Products",
      ),
      desktop(
        "/merk/record-sale.webp",
        "Record a sale form with product, quantity, unit price, payment method, agent and customer fields",
        "Record a sale",
      ),
      desktop(
        "/merk/users.webp",
        "Staff-only users table with account status and role badges",
        "User management (staff only)",
      ),
    ],
    screenshotNote: "Captured from a local run with fictional demo data.",
    overview:
      "A management system for a small business that records stock and sales and controls which staff can access them. The sales overview shows total sales value, today's activity and stock levels above the full list of sales.",
    problem:
      "Paper or spreadsheet records make it hard to keep stock and sales accurate, or to control who can change them. MERK keeps both in one database behind a login.",
    contribution: ["Sole developer: data models, views, templates, authentication and deployment configuration."],
    features: [
      "Sign-up and login",
      "Password reset with a 6-digit emailed code that expires after 5 minutes, with limits on requests and wrong attempts",
      "Sales overview with total value, today's sales, product count and units in stock",
      "Record, edit and delete sales paid by cash, Mpesa or bank",
      "Product catalogue with cost, price and stock, marked when out of stock",
      "Staff-only user management; everyone can edit their own profile",
    ],
    highlights: [
      "PostgreSQL configured with dj-database-url",
      "WhiteNoise compressed static files and Gunicorn for production",
      "23 automated tests run in GitHub Actions",
      "Secrets come from environment variables; the app won't start in production without a SECRET_KEY",
    ],
  },
  {
    slug: "kgl-grocery",
    title: "KGL — Karibu Groceries",
    tagline:
      "A responsive front-end prototype of a management system for a cereal wholesaler: dashboard, product catalogue, users and sign-in. Live on GitHub Pages.",
    status: "completed",
    platform: "web",
    context: "Individual project",
    role: "Solo developer",
    year: "2025",
    tech: ["HTML", "CSS", "JavaScript", "Chart.js", "GitHub Pages"],
    links: [
      { kind: "live", label: "Live site", href: "https://preciousatwiine.github.io/KGL/" },
      { kind: "source", label: "GitHub", href: "https://github.com/PreciousAtwiine/KGL" },
      { kind: "source", label: "Django version", href: "https://github.com/PreciousAtwiine/KGLdjango" },
    ],
    screenshots: [
      desktop(
        "/kgl/dashboard.webp",
        "KGL dashboard with user, product and company totals, a bar chart of latest sales and a latest-sales table",
        "Dashboard",
      ),
      desktop("/kgl/products.webp", "Product catalogue cards for G-nuts, maize and beans with prices per unit", "Our products"),
      desktop("/kgl/users.webp", "Users table listing four people with director, manager and attendant roles", "Users"),
      desktop(
        "/kgl/sign-in.webp",
        "Sign-in page with a green brand panel listing KGL's produce and a sign-in form",
        "Sign in",
      ),
      desktop(
        "/kgl/about.webp",
        "About page describing Karibu Groceries Limited, its produce, sources and branches",
        "About us",
      ),
    ],
    screenshotNote:
      "Captured from the site running locally. The users page shows fictional names and emails; the live site's figures are sample data.",
    overview:
      "Karibu Groceries Limited is a wholesale cereal distributor with two branches whose records were kept in black books. This is a static front-end prototype of its management system, hosted on GitHub Pages. A separate Django version (KGLdjango) has the back end, with owner, manager and sales-agent roles.",
    problem:
      "A wholesaler has to know what's in stock, where it came from and what's been sold. The prototype lays out the screens the business needs before connecting them to a database.",
    contribution: [
      "Sole developer: page structure, a shared CSS design system, JavaScript behaviour and responsive layouts.",
    ],
    features: [
      "Dashboard with user, product and company totals, a sales chart and a latest-sales table",
      "Product catalogue with prices per unit",
      "Users and their roles; the table becomes cards on phones",
      "About page covering the produce, suppliers and branches",
      "Sign-in form with in-browser validation (static site, so it isn't connected to a server)",
    ],
    highlights: [
      "One shared stylesheet for every page; no build step, so GitHub Pages serves the files as-is",
      "Accessible navigation with a skip link and a keyboard-friendly mobile menu",
      "Chart.js pinned to a fixed version, and the rest of the dashboard still works if the chart can't load",
    ],
  },
]

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug)
}
