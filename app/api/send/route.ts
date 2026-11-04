import { Resend } from "resend"
import { NextResponse } from "next/server"
import { socialLinks } from "@/lib/site"

const MAX = { name: 200, email: 320, message: 5000 }

export async function POST(req: Request) {
  // Created per request so the build doesn't fail when RESEND_API_KEY is absent.
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set")
    return NextResponse.json({ error: "Email is not configured" }, { status: 500 })
  }

  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }

  const { name, email, message } = (body ?? {}) as Record<string, unknown>
  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string" ||
    !name.trim() ||
    !message.trim() ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    name.length > MAX.name ||
    email.length > MAX.email ||
    message.length > MAX.message
  ) {
    return NextResponse.json({ error: "Please provide a name, a valid email and a message" }, { status: 400 })
  }

  const resend = new Resend(apiKey)
  const { error } = await resend.emails.send({
    from: "Portfolio <onboarding@resend.dev>",
    to: socialLinks.email,
    replyTo: email,
    subject: `New message from ${name.trim()}`,
    text: `From: ${name.trim()} (${email})\n\n${message}`,
  })

  if (error) {
    console.error("Resend error:", error)
    return NextResponse.json({ error: "Failed to send" }, { status: 502 })
  }
  return NextResponse.json({ success: true })
}
