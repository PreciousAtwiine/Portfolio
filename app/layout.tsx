import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.css"
import Footer from "@/components/Footer"
import Navbar from '@/components/Navbar';

const geist = Geist({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Precious Atwiine | Frontend Developer",
  description:
    "Frontend Developer specialising in Next.js, TypeScript and React. Based in Kampala, Uganda.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geist.className} bg-background text-foreground antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}