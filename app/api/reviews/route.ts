import { type NextRequest, NextResponse } from "next/server"
import { fetchGoogleReviews as fetchGoogleReviewsLib } from "@/lib/google-reviews"
import { sendReviewEmail } from "@/lib/email"
import { loadWebsiteReviews, addWebsiteReview } from "@/lib/storage"

// GET - Fetch all reviews (Google + Website)
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const forceRefresh = searchParams.get("refresh") === "true"

    const googleData = await fetchGoogleReviewsLib(forceRefresh)
    const websiteReviews = await loadWebsiteReviews()

    const combinedTotal = googleData.total + websiteReviews.length

    return NextResponse.json({
      google: {
        rating: googleData.rating,
        total: googleData.total,
        latest_reviews: googleData.latest_reviews,
      },
      site: {
        total: websiteReviews.length,
        reviews: websiteReviews,
      },
      combinedTotal,
      success: true,
    })
  } catch (error) {
    console.error("Error in GET /api/reviews:", error)
    return NextResponse.json(
      {
        error: "Failed to fetch reviews",
        details: error instanceof Error ? error.message : "Unknown error",
        google: { rating: 4.9, total: 249, latest_reviews: [] },
        site: { total: 0, reviews: [] },
        combinedTotal: 249,
      },
      { status: 500 },
    )
  }
}

// POST - Submit a new review
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, review, rating } = body

    if (!name || !email || !review || !rating) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const newReview = await addWebsiteReview({
      author: name,
      rating: Number.parseInt(rating),
      text: review,
      email,
    })

    await sendReviewEmail(email, name, review, rating)

    return NextResponse.json({
      success: true,
      review: newReview,
      message: "Review submitted successfully",
    })
  } catch (error) {
    console.error("Error in POST /api/reviews:", error)
    return NextResponse.json({ error: "Failed to submit review" }, { status: 500 })
  }
}
