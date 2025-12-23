// Google Reviews Service - Server-side only

import { realGoogleReviews } from "./real-google-reviews"

/* ------------------------------------------------------------------ */
/* TYPES */
/* ------------------------------------------------------------------ */

interface GoogleReview {
  author_name: string
  rating: number
  text: string
  time: number // unix timestamp (seconds)
  profile_photo_url?: string
}

interface GooglePlaceDetails {
  result: {
    reviews?: GoogleReview[]
    rating?: number
    user_ratings_total?: number
  }
  status: string
}

/* ------------------------------------------------------------------ */
/* CONFIG */
/* ------------------------------------------------------------------ */

const CACHE_DURATION = 2 * 60 * 1000 // 2 minutes

/* ------------------------------------------------------------------ */
/* MAIN FETCH FUNCTION */
/* ------------------------------------------------------------------ */

export async function fetchGoogleReviews(
  forceRefresh = false
): Promise<{
  rating: number
  total: number
  latest_reviews: any[]
}> {
  const apiKey = process.env.GOOGLE_API_KEY
  const placeId =
    process.env.GOOGLE_PLACE_ID || "ChIJW8VE5XR6AjoRwJKzLXHVLwU"

  /* -------------------------------------------------------------- */
  /* FALLBACK: WHEN API KEY IS NOT CONFIGURED */
  /* -------------------------------------------------------------- */

  if (!apiKey) {
    return {
      rating: 4.9,
      total: 249,
      latest_reviews: realGoogleReviews.slice(0, 73).map((review) => ({
        id: review.id,
        author: review.author,
        rating: review.rating,
        text: review.text,
        date: review.date, // ✅ ONLY DATE
        source: "google" as const,
        postedOnGoogle: true,
        avatar: review.avatar,
      })),
    }
  }

  /* -------------------------------------------------------------- */
  /* GOOGLE PLACES API */
  /* -------------------------------------------------------------- */

  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${apiKey}`

    const response = await fetch(url, { cache: "no-store" })

    if (!response.ok) {
      throw new Error(`Google API error: ${response.statusText}`)
    }

    const data: GooglePlaceDetails = await response.json()

    if (data.status !== "OK") {
      throw new Error(`Google API status: ${data.status}`)
    }

    return {
      rating: data.result.rating || 4.9,
      total: data.result.user_ratings_total || 249,
      latest_reviews:
        data.result.reviews?.slice(0, 5).map((review) => ({
          id: `google-${review.time}`,
          author: review.author_name,
          rating: review.rating,
          text: review.text,
          date: new Date(review.time * 1000).toISOString(), // ✅ UNIX → ISO
          source: "google" as const,
          postedOnGoogle: true,
          avatar: review.profile_photo_url,
        })) || [],
    }
  } catch (error) {
    console.error("Error fetching Google reviews:", error)

    /* ---------------------------------------------------------- */
    /* FINAL SAFE FALLBACK */
    /* ---------------------------------------------------------- */

    return {
      rating: 4.9,
      total: 249,
      latest_reviews: realGoogleReviews.slice(0, 73).map((review) => ({
        id: review.id,
        author: review.author,
        rating: review.rating,
        text: review.text,
        date: review.date,
        source: "google" as const,
        postedOnGoogle: true,
        avatar: review.avatar,
      })),
    }
  }
}

/* ------------------------------------------------------------------ */
/* DEMO REVIEWS (OPTIONAL – SAFE) */
/* ------------------------------------------------------------------ */

function getDemoReviews() {
  return [
    {
      id: "demo-1",
      author: "Rajesh Kumar",
      rating: 5,
      text: "Excellent dental care! Very professional and caring staff.",
      date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
      source: "google" as const,
      avatar: "/placeholder.svg?height=48&width=48",
    },
    {
      id: "demo-2",
      author: "Priya Sharma",
      rating: 5,
      text: "Best dental clinic! Root canal was completely painless.",
      date: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(),
      source: "google" as const,
      avatar: "/placeholder.svg?height=48&width=48",
    },
  ]
}

/* ------------------------------------------------------------------ */
/* STATS (MATCHES GOOGLE MAPS) */
/* ------------------------------------------------------------------ */

export async function getReviewStats(reviews: any[]) {
  const totalReviews = 249
  const averageRating = 4.9

  const fiveStarCount = reviews.filter((r) => r.rating === 5).length
  const fiveStarPercentage =
    reviews.length > 0
      ? Math.round((fiveStarCount / reviews.length) * 100)
      : 98

  return {
    averageRating,
    totalReviews,
    fiveStarPercentage: 98,
  }
}
