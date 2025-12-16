import { Star, CheckCircle } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Review {
  id?: string
  author: string
  rating: number
  text: string
  date: string
  source: "google" | "site"
  postedOnGoogle?: boolean
  avatar?: string
  time?: string
}

interface ReviewCardProps {
  review: Review
}

export function ReviewCard({ review }: ReviewCardProps) {
  const authorName = review.author || "Anonymous"
  const reviewDate = review.date ? new Date(review.date) : new Date()
  const displayDate =
    review.time ||
    reviewDate.toLocaleDateString("en-IN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })

  return (
    <Card className="p-6 border-2 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-start space-x-3">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold flex-shrink-0">
            {review.avatar ? (
              <img
                src={review.avatar || "/placeholder.svg"}
                alt={authorName}
                className="w-full h-full rounded-full object-cover"
              />
            ) : (
              authorName.charAt(0).toUpperCase()
            )}
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">{authorName}</h4>
            <p className="text-sm text-gray-500">{displayDate}</p>
          </div>
        </div>
        <div className="flex flex-col items-end space-y-2">
          {review.source === "google" && (
            <Badge variant="secondary" className="bg-green-100 text-green-700 border-green-200">
              <CheckCircle className="w-3 h-3 mr-1" />
              Google Review
            </Badge>
          )}
          {review.source === "site" && !review.postedOnGoogle && (
            <Badge variant="secondary" className="bg-blue-100 text-blue-700 border-blue-200">
              Website Review
            </Badge>
          )}
          {review.source === "site" && review.postedOnGoogle && (
            <Badge variant="secondary" className="bg-green-100 text-green-700 border-green-200">
              <CheckCircle className="w-3 h-3 mr-1" />
              Verified on Google
            </Badge>
          )}
        </div>
      </div>

      <div className="flex items-center mb-3">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className={`w-5 h-5 ${i < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"}`} />
        ))}
      </div>

      <p className="text-gray-700 leading-relaxed">{review.text}</p>
    </Card>
  )
}
