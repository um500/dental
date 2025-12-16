import type { Metadata } from "next"
import HomePage from "@/components/pages/HomePage"

export const metadata: Metadata = {
  title: "Shree Dental Clinic - Best Dental Care in Kestopur, Kolkata | Root Canal, Implants, Braces",
  description:
    "Expert dental care at Shree Dental Clinic, BC-14 Samarpally, Kestopur, Kolkata. Offering Root Canal Treatment, Dental Implants, Braces, Teeth Cleaning, Crown & Bridge. Call +91 9471373777 for appointments.",
  keywords:
    "dental clinic Kestopur, dentist Kolkata, root canal treatment, dental implants, braces, teeth cleaning, crown bridge, Shree Dental Clinic",
  openGraph: {
    title: "Shree Dental Clinic - Expert Dental Care in Kestopur, Kolkata",
    description:
      "Professional dental treatments including Root Canal, Implants, Braces, and more. Book your appointment today.",
    type: "website",
    locale: "en_IN",
  },
  alternates: {
    canonical: "https://www.shreedentalhealth.com",
  },
}

export default function Page() {
  return <HomePage />
}
