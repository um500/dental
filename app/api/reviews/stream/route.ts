import type { NextRequest } from "next/server"

// Server-Sent Events (SSE) endpoint for real-time review updates
export async function GET(request: NextRequest) {
  const encoder = new TextEncoder()

  const stream = new ReadableStream({
    start(controller) {
      // Send initial connection message
      const data = encoder.encode(`data: ${JSON.stringify({ type: "connected" })}\n\n`)
      controller.enqueue(data)

      // Keep connection alive with heartbeat
      const heartbeat = setInterval(() => {
        try {
          const ping = encoder.encode(": heartbeat\n\n")
          controller.enqueue(ping)
        } catch (error) {
          clearInterval(heartbeat)
        }
      }, 30000) // Every 30 seconds

      // Cleanup on close
      request.signal.addEventListener("abort", () => {
        clearInterval(heartbeat)
        controller.close()
      })
    },
  })

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    },
  })
}
