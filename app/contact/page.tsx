import type { Metadata } from "next"
import ContactPage from "@/components/pages/ContactPage"

export const metadata: Metadata = {
  title: "Contact Us & Book Appointment | Shree Dental Clinic Kestopur, Kolkata",
  description:
    "Contact Shree Dental Clinic at BC-14, Samarpally, Kestopur, Kolkata - 700102. Call +91 9471373777 or email shreedentalclinic804@gmail.com to book your dental appointment.",
  keywords:
    "dental appointment Kolkata, contact dentist Kestopur, book dental consultation, Shree Dental Clinic contact",
}

export default function Page() {
  return <ContactPage />
}
