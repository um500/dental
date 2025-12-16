import { type NextRequest, NextResponse } from "next/server"

// In-memory storage (replace with database in production)
const appointments: any[] = []

// POST - Submit a new appointment
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, phone, email, date, time, service, message } = body

    if (!name || !phone || !date || !time || !service) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const newAppointment = {
      id: `appt-${Date.now()}`,
      name,
      phone,
      email,
      date,
      time,
      service,
      message,
      status: "pending",
      createdAt: new Date().toISOString(),
    }

    appointments.push(newAppointment)

    // Send confirmation email
    await sendAppointmentEmail(email || phone, name, date, time, service)

    // Send notification to clinic
    await sendClinicNotification(newAppointment)

    return NextResponse.json({
      success: true,
      appointment: newAppointment,
      message: "Appointment request submitted successfully",
    })
  } catch (error) {
    console.error("[v0] Error in POST /api/appointments:", error)
    return NextResponse.json({ error: "Failed to submit appointment" }, { status: 500 })
  }
}

// GET - Fetch all appointments (admin only)
export async function GET(request: NextRequest) {
  try {
    return NextResponse.json({
      appointments: appointments.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()),
    })
  } catch (error) {
    console.error("[v0] Error in GET /api/appointments:", error)
    return NextResponse.json({ error: "Failed to fetch appointments" }, { status: 500 })
  }
}

// Helper function to send confirmation email
async function sendAppointmentEmail(contact: string, name: string, date: string, time: string, service: string) {
  console.log(`[v0] Sending appointment confirmation to ${contact}`)
  console.log(`[v0] Appointment details:`)
  console.log(`   Name: ${name}`)
  console.log(`   Date: ${date}`)
  console.log(`   Time: ${time}`)
  console.log(`   Service: ${service}`)
}

// Helper function to notify clinic
async function sendClinicNotification(appointment: any) {
  console.log(`[v0] New appointment notification:`)
  console.log(JSON.stringify(appointment, null, 2))
}
