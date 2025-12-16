"use client"

import { useState, useEffect, useRef } from "react"
import { Star, ChevronLeft, ChevronRight, CheckCircle, MapPin } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface Review {
  id: string
  author: string
  rating: number
  text: string
  date: string
  source: "google" | "site"
  postedOnGoogle?: boolean
  avatar?: string
  time?: string
}

interface ReviewsSliderProps {
  reviews: Review[]
  averageRating: number
  totalReviews: number
}

export function ReviewsSlider({ reviews, averageRating, totalReviews }: ReviewsSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [slidesPerView, setSlidesPerView] = useState(3)
  const [expandedReviews, setExpandedReviews] = useState<Set<string>>(new Set())
  const sliderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesPerView(1)
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(2)
      } else {
        setSlidesPerView(3)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    if (isPaused || reviews.length === 0) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const maxIndex = Math.max(0, reviews.length - slidesPerView)
        return prev >= maxIndex ? 0 : prev + 1
      })
    }, 4000)

    return () => clearInterval(interval)
  }, [isPaused, reviews.length, slidesPerView])

  const goToSlide = (index: number) => {
    const maxIndex = Math.max(0, reviews.length - slidesPerView)
    setCurrentIndex(Math.min(Math.max(0, index), maxIndex))
  }

  const nextSlide = () => {
    const maxIndex = Math.max(0, reviews.length - slidesPerView)
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }

  const prevSlide = () => {
    const maxIndex = Math.max(0, reviews.length - slidesPerView)
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }

  const toggleExpanded = (reviewId: string) => {
    setExpandedReviews((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(reviewId)) {
        newSet.delete(reviewId)
      } else {
        newSet.add(reviewId)
      }
      return newSet
    })
  }

  const truncateText = (text: string, maxLength = 150) => {
    if (text.length <= maxLength) return text
    return text.slice(0, maxLength) + "..."
  }

  const getSourceBadge = (review: Review) => {
    if (review.source === "google") {
      return (
        <Badge className="bg-green-50 text-green-700 border-green-200 hover:bg-green-100">
          <CheckCircle className="w-3 h-3 mr-1" />
          Google Review
        </Badge>
      )
    }
    if (review.source === "site" && review.postedOnGoogle) {
      return (
        <Badge className="bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100">
          <CheckCircle className="w-3 h-3 mr-1" />
          Verified on Google
        </Badge>
      )
    }
    return <Badge className="bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100">Website Review</Badge>
  }

  if (reviews.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 mb-4">Loading reviews...</p>
      </div>
    )
  }

  return (
    <div className="w-full">
      <div className="mb-12">
        <Card className="p-8 bg-gradient-to-br from-blue-50 via-white to-teal-50 border-2 border-blue-100">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="text-6xl font-bold text-gray-900 mb-2">{averageRating.toFixed(1)}</div>
                <div className="flex items-center justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-6 h-6 ${
                        i < Math.floor(averageRating)
                          ? "text-yellow-400 fill-yellow-400"
                          : i < averageRating
                            ? "text-yellow-400 fill-yellow-200"
                            : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-600 font-medium">{totalReviews} Reviews</p>
              </div>
              <div className="h-20 w-px bg-gray-300 hidden md:block" />
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Shree Dental Clinic</h3>
                <div className="flex items-center gap-2 text-gray-600 mb-2">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Kestopur, Kolkata</span>
                </div>
                <Badge className="bg-green-100 text-green-800 border-green-300">
                  <CheckCircle className="w-4 h-4 mr-1" />
                  Google Verified
                </Badge>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg p-4 shadow-sm border-2 border-blue-100">
                <p className="text-3xl font-bold text-blue-600 mb-1">
                  {Math.round((reviews.filter((r) => r.rating === 5).length / reviews.length) * 100)}%
                </p>
                <p className="text-sm text-gray-600">5-Star Reviews</p>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <div
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        ref={sliderRef}
      >
        {/* Navigation Arrows */}
        <Button
          variant="outline"
          size="icon"
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white shadow-lg hover:bg-gray-50 rounded-full w-12 h-12 border-2"
          onClick={prevSlide}
          aria-label="Previous reviews"
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white shadow-lg hover:bg-gray-50 rounded-full w-12 h-12 border-2"
          onClick={nextSlide}
          aria-label="Next reviews"
        >
          <ChevronRight className="w-6 h-6" />
        </Button>

        <div className="overflow-hidden px-2">
          <div
            className="flex transition-transform duration-500 ease-in-out gap-6"
            style={{
              transform: `translateX(-${currentIndex * (100 / slidesPerView)}%)`,
            }}
          >
            {reviews.map((review) => {
              const isExpanded = expandedReviews.has(review.id)
              const shouldTruncate = review.text.length > 150

              return (
                <div
                  key={review.id}
                  className="flex-shrink-0"
                  style={{
                    width: `calc(${100 / slidesPerView}% - ${((slidesPerView - 1) * 24) / slidesPerView}px)`,
                  }}
                >
                  <Card className="h-full p-6 bg-white border-2 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] rounded-2xl">
                    <div className="flex flex-col h-full">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-start gap-3 flex-1">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center text-white font-bold flex-shrink-0 shadow-md">
                            {review.avatar ? (
                              <img
                                src={review.avatar || "/placeholder.svg"}
                                alt={review.author || "Anonymous"}
                                className="w-full h-full rounded-full object-cover"
                              />
                            ) : (
                              (review.author || "A").charAt(0).toUpperCase()
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-gray-900 truncate">{review.author || "Anonymous"}</h4>
                            <p className="text-sm text-gray-500">
                              {review.time || new Date(review.date).toLocaleDateString("en-IN")}
                            </p>
                          </div>
                        </div>
                        {getSourceBadge(review)}
                      </div>

                      {/* Rating */}
                      <div className="flex items-center gap-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-5 h-5 ${
                              i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>

                      {/* Review Text */}
                      <div className="flex-1">
                        <p className="text-gray-700 leading-relaxed text-pretty">
                          {isExpanded || !shouldTruncate ? review.text : truncateText(review.text)}
                        </p>
                        {shouldTruncate && (
                          <button
                            onClick={() => toggleExpanded(review.id)}
                            className="text-blue-600 hover:text-blue-700 font-medium text-sm mt-2 transition-colors"
                          >
                            {isExpanded ? "Show less" : "Read more"}
                          </button>
                        )}
                      </div>
                    </div>
                  </Card>
                </div>
              )
            })}
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: Math.ceil(reviews.length / slidesPerView) }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                Math.floor(currentIndex / slidesPerView) === index
                  ? "w-8 bg-blue-600"
                  : "w-2 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
