"use client"

import { useEffect, useState } from "react"

export default function TestAPIPage() {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch("/api/reviews/refresh")
      .then((res) => res.json())
      .then((data) => {
        console.log("API Response:", data)
        setData(data)
        setLoading(false)
      })
      .catch((err) => {
        console.error("API Error:", err)
        setError(err.message)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mb-4"></div>
          <p className="text-xl">Testing API...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-red-50 border-2 border-red-200 rounded-lg p-8 max-w-2xl">
          <h1 className="text-2xl font-bold text-red-600 mb-4">API Error</h1>
          <p className="text-red-700">{error}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">API Test Page</h1>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4">Reviews Stats</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 rounded">
              <p className="text-sm text-gray-600">Average Rating</p>
              <p className="text-3xl font-bold text-blue-600">{data?.stats?.averageRating || "N/A"}</p>
            </div>
            <div className="bg-green-50 p-4 rounded">
              <p className="text-sm text-gray-600">Total Reviews</p>
              <p className="text-3xl font-bold text-green-600">{data?.stats?.totalReviews || 0}</p>
            </div>
            <div className="bg-yellow-50 p-4 rounded">
              <p className="text-sm text-gray-600">5-Star %</p>
              <p className="text-3xl font-bold text-yellow-600">{data?.stats?.fiveStarPercentage || 0}%</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Reviews ({data?.reviews?.length || 0})</h2>
          <div className="space-y-4 max-h-96 overflow-y-auto">
            {data?.reviews?.map((review: any, idx: number) => (
              <div key={idx} className="border-b pb-4">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-bold">{review.author}</p>
                  <span className="text-yellow-500">{"★".repeat(review.rating)}</span>
                </div>
                <p className="text-gray-700 text-sm mb-2">{review.text}</p>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span>{review.time}</span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded">{review.source}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 bg-gray-800 text-white rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Raw API Response</h2>
          <pre className="text-xs overflow-auto max-h-96">{JSON.stringify(data, null, 2)}</pre>
        </div>
      </div>
    </div>
  )
}
