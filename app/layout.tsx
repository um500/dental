import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import FloatingContactWidget from "@/components/widgets/FloatingContactWidget"
import BackToTopButton from "@/components/widgets/BackToTopButton"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Shree Dental Clinic - Best Dental Care in Kestopur, Kolkata",
  description:
    "Expert dental care at Shree Dental Clinic. Offering Root Canal, Implants, Braces, Teeth Cleaning. Call +91 9471373777",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className={`font-sans antialiased`} style={{ fontFamily: "var(--font-inter)" }}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <BackToTopButton language="both" themeColor="#0ea5e9" showAfterScroll={300} />
        <FloatingContactWidget
          phoneNumber="+919471373777"
          whatsappNumber="919471373777"
          language="both"
          enableAnalytics={true}
        />
        <Analytics />
      </body>
    </html>
  )
}
