import type { Metadata } from "next"
import ServicesPage from "@/components/pages/ServicesPage"

export const metadata: Metadata = {
  title: "Dental Services - RCT, Implants, Braces, Cleaning | Shree Dental Clinic Kolkata",
  description:
    "Comprehensive dental services: Root Canal Treatment (RCT), Dental Implants, Orthodontic Braces, Teeth Cleaning & Scaling, Crown & Bridge, Tooth Extraction. Advanced dental care in Kestopur, Kolkata.",
  keywords:
    "root canal treatment Kolkata, dental implants, braces orthodontics, teeth cleaning, crown bridge, tooth extraction, dental services Kestopur",
}

export default function Page() {
  return <ServicesPage />
}
