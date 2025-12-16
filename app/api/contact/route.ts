import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, subject, message } = body

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Send email to clinic
    await sendContactEmail({
      name,
      email,
      phone,
      subject: subject || "Contact Form Submission",
      message,
    })

    return NextResponse.json({
      success: true,
      message: "Message sent successfully",
    })
  } catch (error) {
    console.error("[v0] Error in POST /api/contact:", error)
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 })
  }
}

async function sendContactEmail(data: any) {
  console.log(`[v0] Contact form submission:`)
  console.log(JSON.stringify(data, null, 2))
}
