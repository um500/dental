"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Star, ExternalLink, CheckCircle } from "lucide-react"
import { toast } from "sonner"

interface ReviewFormProps {
  onReviewSubmitted?: () => void
}

export function ReviewForm({ onReviewSubmitted }: ReviewFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [rating, setRating] = useState(0)
  const [hoveredRating, setHoveredRating] = useState(0)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    review: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (rating === 0) {
      toast.error("Please select a rating")
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          rating,
        }),
      })

      if (response.ok) {
        setShowSuccess(true)
        setFormData({ name: "", email: "", review: "" })
        setRating(0)

        if (onReviewSubmitted) {
          onReviewSubmitted()
        }
      } else {
        toast.error("Failed to submit review. Please try again.")
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const openGoogleMaps = () => {
    window.open("https://maps.app.goo.gl/AsZ19tucWvQJxFzo8", "_blank")
  }

  if (showSuccess) {
    return (
      <Card className="p-8 border-2 border-green-200 bg-green-50">
        <div className="text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h3>
          <p className="text-lg text-gray-700 mb-6">
            Your review has been submitted successfully. We really appreciate your feedback!
          </p>

          <div className="bg-white border-2 border-blue-200 rounded-lg p-6 mb-6">
            <h4 className="text-xl font-bold text-gray-900 mb-3">One More Step!</h4>
            <p className="text-gray-600 mb-4">
              Please help us by also posting your review on Google Maps. It only takes a minute and helps others find
              us!
            </p>
            <Button onClick={openGoogleMaps} size="lg" className="w-full gradient-dental text-lg h-14 group">
              Post Review on Google Maps
              <ExternalLink className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </div>

          <Button variant="outline" onClick={() => setShowSuccess(false)} className="mt-4">
            Write Another Review
          </Button>
        </div>
      </Card>
    )
  }

  return (
    <Card className="p-8 border-2">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Write a Review</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label className="mb-3 block">Your Rating *</Label>
          <div className="flex items-center space-x-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoveredRating(star)}
                onMouseLeave={() => setHoveredRating(0)}
                className="focus:outline-none transition-transform hover:scale-110"
              >
                <Star
                  className={`w-10 h-10 ${
                    star <= (hoveredRating || rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                  }`}
                />
              </button>
            ))}
            {rating > 0 && <span className="ml-4 text-gray-600 font-medium">{rating} out of 5 stars</span>}
          </div>
        </div>

        <div>
          <Label htmlFor="review-name">Your Name *</Label>
          <Input
            id="review-name"
            type="text"
            placeholder="Enter your name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>

        <div>
          <Label htmlFor="review-email">Your Email *</Label>
          <Input
            id="review-email"
            type="email"
            placeholder="your@email.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </div>

        <div>
          <Label htmlFor="review-text">Your Review *</Label>
          <Textarea
            id="review-text"
            placeholder="Tell us about your experience at Shree Dental Clinic..."
            rows={5}
            value={formData.review}
            onChange={(e) => setFormData({ ...formData, review: e.target.value })}
            required
          />
        </div>

        <Button type="submit" size="lg" className="w-full gradient-dental" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit Review"}
        </Button>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-sm text-blue-800 text-center">
            After submitting, you will be guided to post your review on Google Maps to help others find us
          </p>
        </div>
      </form>
    </Card>
  )
}
