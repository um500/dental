"use client";

import { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";
import { ReviewCard } from "@/components/ui/review-card";

interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string; // ✅ ONLY date (no time)
  source: "google" | "site";
  postedOnGoogle?: boolean;
  avatar?: string;
}

interface ReviewData {
  google: {
    rating: number;
    total: number;
    latest_reviews: Review[];
  };
  site: {
    total: number;
    reviews: Review[];
  };
  combinedTotal?: number;
}

export default function ReviewsPage() {
  const [data, setData] = useState<ReviewData>({
    google: { rating: 0, total: 0, latest_reviews: [] },
    site: { total: 0, reviews: [] },
    combinedTotal: 0,
  });

  const [isLoading, setIsLoading] = useState(true);

  /* 🔹 AUTO SCROLL STATES */
  const scrollRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  const fetchReviews = async () => {
    try {
      setIsLoading(true);

      const response = await fetch("/api/reviews?refresh=true", {
        cache: "no-store",
      });

      if (response.ok) {
        const result = await response.json();

        setData({
          google: {
            ...result.google,
            latest_reviews: result.google.latest_reviews,
          },
          site: {
            ...result.site,
            reviews: result.site.reviews,
          },
          combinedTotal: result.google.total + result.site.total,
        });
      }
    } catch (error) {
      console.error("Error fetching reviews:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  /* 🔹 REAL AUTO SCROLL (MOBILE + DESKTOP) */
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let rafId: number;

    const isMobile = window.innerWidth < 768;
    const speed = isMobile ? 4 : 2;

    const step = () => {
      if (!paused) {
        if (
          container.scrollTop + container.clientHeight <
          container.scrollHeight
        ) {
          container.scrollTop += speed;
        } else {
          container.scrollTop = 0;
        }
      }
      rafId = requestAnimationFrame(step);
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [paused, data.google.latest_reviews]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* ---------- HERO ---------- */}
      <section className="pt-32 pb-16 px-4">
  <div className="max-w-7xl mx-auto text-center">
    <h1 className="text-4xl font-bold mb-6">
      Patient Reviews & Testimonials
    </h1>

    {/* ⭐ Rating */}
    <div className="flex justify-center gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className="w-6 h-6 fill-yellow-400 text-yellow-400"
        />
      ))}
      <span className="text-2xl font-bold ml-2">
        {data.google.rating}
      </span>
    </div>

    {/* 🟢 Write Google Review Button */}
    <a
      href="https://maps.app.goo.gl/sfFKDghTvXpKvFq36"
      target="_blank"
      rel="noopener noreferrer"
      className="
        inline-flex
        items-center
        gap-2
        px-6
        py-3
        rounded-full
        bg-blue-600
        text-white
        font-semibold
        hover:bg-blue-700
        transition-all
        shadow-md
        hover:shadow-lg
      "
    >
      Write Google Review
    </a>
  </div>
</section>


      {/* ---------- CONTENT ---------- */}
      {isLoading ? (
        <div className="text-center py-20">Loading reviews...</div>
      ) : (
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-6">
              Google Reviews
            </h2>

            {/* ✅ AUTO SCROLL CONTAINER */}
            <div
              ref={scrollRef}
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              onTouchStart={() => setPaused(true)}
              onTouchEnd={() => setPaused(false)}
              className="
                h-[400px]
                overflow-y-auto
                grid
                grid-cols-1 md:grid-cols-2 lg:grid-cols-3
                gap-6
                pr-2
                scroll-smooth
              "
            >
              {data.google.latest_reviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
