import type { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"
//import { Geist } from "next/font/google"
import "./globals.css"
import Footer from "@/components/Footer"
import Navbar from '@/components/Navbar';

//const geist = Geist({ subsets: ["latin"] })
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
})
export const metadata: Metadata = {
  title: "Precious Atwiine | Full-Stack Developer",
  description:
    "Fullstack Developer specialising in Django, Next.js, TypeScript and React. Based in Kampala, Uganda.",
  verification: {
    google: "3Hh2dkHT-3wE-3-qZYENN2uILPJfpBIVUqyYnj33ccE",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${jakarta.className} bg-[#0a0a0f] text-slate-200 antialiased noise`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}