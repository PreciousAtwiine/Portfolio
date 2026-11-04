import type { Metadata, Viewport } from "next"
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import MotionProvider from "@/components/MotionProvider"
import { siteUrl } from "@/lib/site"
import { themeInitScript } from "@/lib/theme"

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
})

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
})

const description =
  "Software developer in Kampala, Uganda, building web, backend and mobile applications with Next.js, Django, Flask, .NET, Flutter and SQL databases."

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Precious Atwiine | Software Developer",
    template: "%s | Precious Atwiine",
  },
  description,
  openGraph: {
    type: "website",
    siteName: "Precious Atwiine",
    title: "Precious Atwiine | Software Developer",
    description,
    url: "/",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Precious Atwiine, software developer" }],
  },
  twitter: { card: "summary_large_image" },
  verification: {
    google: "3Hh2dkHT-3wE-3-qZYENN2uILPJfpBIVUqyYnj33ccE",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf9f6" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0c" },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // Rendered dark by default; the inline script may switch the class before paint, hence suppressHydrationWarning.
    <html lang="en" className={`dark ${jakarta.variable} ${jetbrains.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="bg-canvas font-sans text-fg antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-fg focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-canvas"
        >
          Skip to content
        </a>
        <MotionProvider>
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  )
}
