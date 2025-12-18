"use client"

import { motion } from "framer-motion"
import { Star, CheckCircle } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Review {
  id?: string
  author: string
  rating: number
  text: string
  source: "google" | "site"
  postedOnGoogle?: boolean
  avatar?: string
}

export function ReviewCard({ review }: { review: Review }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.03 }}
      className="h-full"
    >
      <Card
        className="
          h-[320px]
          p-6
          border-2
          rounded-2xl
          shadow-sm
          hover:shadow-xl
          transition-all
          duration-300
          flex
          flex-col
          bg-white
        "
      >
        {/* ---------- HEADER ---------- */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-start gap-3">
            <motion.div
              whileHover={{ rotate: 5 }}
              className="
                w-11 h-11
                rounded-full
                bg-gradient-to-br from-blue-500 to-cyan-500
                flex items-center justify-center
                text-white font-bold
                flex-shrink-0
              "
            >
              {review.author?.charAt(0).toUpperCase()}
            </motion.div>

            <div>
              <h4 className="font-semibold text-gray-900 leading-tight">
                {review.author || "Anonymous"}
              </h4>
            </div>
          </div>

          {review.source === "google" && (
            <Badge className="bg-green-100 text-green-700 border-green-200">
              <CheckCircle className="w-3 h-3 mr-1" />
              Google
            </Badge>
          )}
        </div>

        {/* ---------- RATING ---------- */}
        <div className="flex items-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < review.rating
                  ? "text-yellow-400 fill-yellow-400"
                  : "text-gray-300"
              }`}
            />
          ))}
        </div>

        {/* ---------- REVIEW TEXT (SCROLLABLE) ---------- */}
        <motion.div
          className="
            text-gray-700
            text-sm
            leading-relaxed
            overflow-y-auto
            pr-2
            flex-1
          "
          whileHover={{ color: "#111827" }}
        >
          {review.text}
        </motion.div>
      </Card>
    </motion.div>
  )
}
