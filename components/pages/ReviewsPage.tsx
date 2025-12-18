// "use client";

// import { useEffect, useState } from "react";
// import { ExternalLink, RefreshCw, Star } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { ReviewCard } from "@/components/ui/review-card";
// interface Review {
//   id: string;
//   author: string;
//   rating: number;
//   text: string;
//   date: string;
//   source: "google" | "site";
//   postedOnGoogle?: boolean;
//   avatar?: string;
//   time?: string;
// }

// interface ReviewData {
//   google: {
//     rating: number;
//     total: number;
//     latest_reviews: Review[];
//   };
//   site: {
//     total: number;
//     reviews: Review[];
//   };
//   combinedTotal?: number;
// }

// export default function ReviewsPage() {
//   const [data, setData] = useState<ReviewData>({
//     google: { rating: 0, total: 0, latest_reviews: [] },
//     site: { total: 0, reviews: [] },
//     combinedTotal: 0,
//   });
//   const [isLoading, setIsLoading] = useState(true);
//   const [isRefreshing, setIsRefreshing] = useState(false);

//   const fetchReviews = async (showRefreshing = false) => {
//     try {
//       if (showRefreshing) setIsRefreshing(true);
//       else setIsLoading(true);

//       const response = await fetch("/api/reviews?refresh=true", {
//         cache: "no-store",
//       });

//       if (response.ok) {
//         const result = await response.json();
//         const sortedGoogleReviews = [...result.google.latest_reviews].sort(
//           (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
//         );
//         const sortedSiteReviews = [...result.site.reviews].sort(
//           (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
//         );

//         setData({
//           google: {
//             ...result.google,
//             latest_reviews: sortedGoogleReviews,
//           },
//           site: {
//             ...result.site,
//             reviews: sortedSiteReviews,
//           },
//           combinedTotal: result.google.total + result.site.total,
//         });
//       }
//     } catch (error) {
//       console.error("Error fetching reviews:", error);
//     } finally {
//       setIsLoading(false);
//       setIsRefreshing(false);
//     }
//   };

//   useEffect(() => {
//     fetchReviews();

//     const pollInterval = setInterval(() => {
//       fetchReviews(true);
//     }, 60 * 1000);

//     return () => clearInterval(pollInterval);
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
//       {/* Hero Section */}
//       <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto text-center">
//           <h1 className="text-5xl font-bold text-gray-900 mb-6 text-balance">
//             Patient Reviews & Testimonials
//           </h1>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed text-balance">
//             Read real experiences from our satisfied patients and see why Shree
//             Dental Clinic is trusted by hundreds of families in Kolkata
//           </p>

//           <div className="flex items-center justify-center gap-2 mb-8">
//             <div className="flex items-center gap-1">
//               {[...Array(5)].map((_, i) => (
//                 <Star
//                   key={i}
//                   className="w-6 h-6 fill-yellow-400 text-yellow-400"
//                 />
//               ))}
//             </div>
//             <span className="text-2xl font-bold text-gray-900">
//               {data.google.rating}
//             </span>
//             <span className="text-lg text-gray-600">
//               · {data.combinedTotal || data.google.total} Total reviews
//             </span>
//           </div>

//           <p className="text-sm text-gray-500 mb-6">
//             {data.google.total} Google reviews + {data.site.total} Website
//             reviews
//           </p>

//           <div className="flex flex-wrap justify-center gap-4">
//             <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
//               <a
//                 href="https://maps.app.goo.gl/AsZ19tucWvQJxFzo8"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <ExternalLink className="w-5 h-5 mr-2" />
//                 Write a Review on Google
//               </a>
//             </Button>
//             <Button
//               size="lg"
//               variant="outline"
//               className="border-2 bg-transparent"
//               onClick={() => fetchReviews(true)}
//               disabled={isRefreshing}
//             >
//               <RefreshCw
//                 className={`w-5 h-5 mr-2 ${isRefreshing ? "animate-spin" : ""}`}
//               />
//               {isRefreshing ? "Refreshing..." : "Refresh Reviews"}
//             </Button>
//           </div>
//         </div>
//       </section>

//       {isLoading ? (
//         <div className="text-center py-12">
//           <div className="inline-block w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
//           <p className="mt-4 text-gray-600">Loading reviews...</p>
//         </div>
//       ) : (
//         <>
//           <section className="py-12 px-4 sm:px-6 lg:px-8">
//             <div className="max-w-7xl mx-auto">
//               <div className="flex items-center justify-between mb-8">
//                 <h2 className="text-3xl font-bold text-gray-900">
//                   Google Reviews
//                 </h2>
//                 <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full">
//                   <Star className="w-5 h-5 fill-blue-600 text-blue-600" />
//                   <span className="text-sm text-gray-600">
//                     {data.google.latest_reviews.length} of {data.google.total}{" "}
//                     reviews
//                   </span>
//                 </div>
//               </div>

//               <p className="text-sm text-gray-500 mb-6 italic">
//                 Showing verified Google reviews. Reviews are sorted by most
//                 recent first.
//               </p>

//               {data.google.latest_reviews.length > 0 ? (
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                   {data.google.latest_reviews.map((review) => (
//                     <ReviewCard key={review.id} review={review} />
//                   ))}
//                 </div>
//               ) : (
//                 <div className="text-center py-12 bg-gray-50 rounded-lg">
//                   <p className="text-gray-500">No reviews available yet.</p>
//                 </div>
//               )}
//             </div>
//           </section>

//           {data.site.total > 0 && (
//             <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
//               <div className="max-w-7xl mx-auto">
//                 <div className="flex items-center justify-between mb-8">
//                   <h2 className="text-3xl font-bold text-gray-900">
//                     Website Reviews
//                   </h2>
//                   <span className="px-4 py-2 bg-teal-50 text-teal-700 rounded-full text-sm font-medium">
//                     {data.site.total}{" "}
//                     {data.site.total === 1 ? "Review" : "Reviews"}
//                   </span>
//                 </div>

//                 {/* AUTO SCROLLING GOOGLE REVIEWS */}
//                 <section className="py-12 px-4 sm:px-6 lg:px-8">
//                   <div className="max-w-4xl mx-auto">
//                     <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
//                       Google Reviews
//                     </h2>

//                     <div
//                       className="relative h-[700px] overflow-hidden border rounded-xl bg-white"
//                       onMouseEnter={() => setIsRefreshing(true)}
//                       onMouseLeave={() => setIsRefreshing(false)}
//                     >
//                       <div
//                         id="auto-scroll"
//                         className="absolute inset-0 space-y-6 px-4 py-6"
//                         style={{
//                           animation: !isRefreshing
//                             ? "verticalScroll 40s linear forwards"
//                             : "none",
//                         }}
//                       >
//                         {data.google.latest_reviews.map((review) => (
//                           <ReviewCard key={review.id} review={review} />
//                         ))}
//                       </div>
//                     </div>
//                   </div>

//                   CSS animation
//                   <style jsx>{`
//                     @keyframes verticalScroll {
//                       from {
//                         transform: translateY(0);
//                       }
//                       to {
//                         transform: translateY(-100%);
//                       }
//                     }
//                   `}</style>
//                 </section>
//               </div>
//             </section>
//           )}
//         </>
//       )}
//     </div>
//   );
// }


"use client";

import { useEffect, useRef, useState } from "react";
import { ExternalLink, RefreshCw, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ReviewCard } from "@/components/ui/review-card";

interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
  source: "google" | "site";
  postedOnGoogle?: boolean;
  avatar?: string;
  time?: string;
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
  const [isRefreshing, setIsRefreshing] = useState(false);

  /* 🔹 AUTO SCROLL STATES */
  const scrollRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  const fetchReviews = async (showRefreshing = false) => {
    try {
      if (showRefreshing) setIsRefreshing(true);
      else setIsLoading(true);

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
      setIsRefreshing(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  /* 🔹 REAL AUTO SCROLL (NO CSS JANK) */
useEffect(() => {
  const container = scrollRef.current;
  if (!container) return;

  let rafId: number;
  const speed = 2; // ✅ yahin 2 set kar diya

  const step = () => {
    if (!paused) {
      if (
        container.scrollTop + container.clientHeight <
        container.scrollHeight
      ) {
        container.scrollTop += speed;
      } else {
        cancelAnimationFrame(rafId); // last pe ruk jao
        return;
      }
    }
    rafId = requestAnimationFrame(step);
  };

  rafId = requestAnimationFrame(step);

  return () => cancelAnimationFrame(rafId);
}, [paused, data.google.latest_reviews]);


  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">

      {/* HERO SECTION — SAME */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            Patient Reviews & Testimonials
          </h1>
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="text-2xl font-bold ml-2">
              {data.google.rating}
            </span>
          </div>
        </div>
      </section>

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
