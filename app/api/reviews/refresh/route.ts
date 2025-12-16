import { type NextRequest, NextResponse } from "next/server"
import { fetchGoogleReviews } from "@/lib/google-reviews"
import { loadWebsiteReviews } from "@/lib/storage"

export async function GET(request: NextRequest) {
  try {
    const [googleData, websiteReviews] = await Promise.all([fetchGoogleReviews(true), loadWebsiteReviews()])

    const allReviews = [...googleData.latest_reviews, ...websiteReviews].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    )

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
      reviews: allReviews,
      stats: {
        averageRating: googleData.rating,
        totalReviews: googleData.total,
        fiveStarPercentage: 98,
      },
      success: true,
    })
  } catch (error) {
    console.error("Error in GET /api/reviews/refresh:", error)
    return NextResponse.json(
      {
        error: "Failed to refresh reviews",
        details: error instanceof Error ? error.message : "Unknown error",
        google: { rating: 4.9, total: 249, latest_reviews: [] },
        site: { total: 0, reviews: [] },
        reviews: [],
        stats: { averageRating: 4.9, totalReviews: 249, fiveStarPercentage: 98 },
      },
      { status: 500 },
    )
  }
}

export async function POST(request: NextRequest) {
  return GET(request)
}
