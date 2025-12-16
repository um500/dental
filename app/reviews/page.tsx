import type { Metadata } from "next"
import ReviewsPage from "@/components/pages/ReviewsPage"

export const metadata: Metadata = {
  title: "Patient Reviews & Testimonials | Shree Dental Clinic Kolkata",
  description:
    "Read verified patient reviews and testimonials for Shree Dental Clinic. See what our patients say about their dental treatment experience in Kestopur, Kolkata.",
  keywords: "dental clinic reviews Kolkata, patient testimonials, dentist reviews Kestopur, dental care feedback",
}

export default function Page() {
  return <ReviewsPage />
}
