// Persistent storage for website reviews using localStorage
// Reviews will survive page refreshes

export interface WebsiteReview {
  id: string
  author: string
  rating: number
  text: string
  date: string
  time: string
  source: "site"
  postedOnGoogle: boolean
  email: string
}

const STORAGE_KEY = "shree_dental_website_reviews"

// Load reviews from localStorage
export async function loadWebsiteReviews(): Promise<WebsiteReview[]> {
  if (typeof window === "undefined") {
    return []
  }

  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      return JSON.parse(stored)
    }
  } catch (error) {
    console.error("Error loading reviews from localStorage:", error)
  }

  return []
}

// Save reviews to localStorage
export async function saveWebsiteReviews(reviews: WebsiteReview[]): Promise<void> {
  if (typeof window === "undefined") {
    return
  }

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(reviews))
  } catch (error) {
    console.error("Error saving reviews to localStorage:", error)
  }
}

// Add a new review
export async function addWebsiteReview(
  review: Omit<WebsiteReview, "id" | "date" | "time" | "source" | "postedOnGoogle">,
): Promise<WebsiteReview> {
  const now = new Date()

  const newReview: WebsiteReview = {
    ...review,
    id: `site-${Date.now()}`,
    date: now.toISOString(),
    time: "Just now",
    source: "site",
    postedOnGoogle: false,
  }

  // Load existing reviews
  const existingReviews = await loadWebsiteReviews()

  const updatedReviews = [newReview, ...existingReviews]

  // Save back to localStorage
  await saveWebsiteReviews(updatedReviews)

  return newReview
}

// Get all reviews
export async function getAllWebsiteReviews(): Promise<WebsiteReview[]> {
  return loadWebsiteReviews()
}

// Clear all reviews (for testing)
export async function clearWebsiteReviews(): Promise<void> {
  if (typeof window !== "undefined") {
    localStorage.removeItem(STORAGE_KEY)
  }
}
