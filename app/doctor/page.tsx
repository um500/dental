import type { Metadata } from "next"
import DoctorPage from "@/components/pages/DoctorPage"

export const metadata: Metadata = {
  title: "Our Doctor - Expert Dental Surgeon | Shree Dental Clinic",
  description:
    "Meet our experienced dental surgeon providing comprehensive dental care with advanced techniques and personalized treatment plans at Shree Dental Clinic, Kestopur, Kolkata.",
  keywords: "dentist Kestopur, dental surgeon Kolkata, experienced dentist, dental specialist",
}

export default function Page() {
  return <DoctorPage />
}
