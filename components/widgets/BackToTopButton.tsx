"use client"

import { useState, useEffect } from "react"
import { ChevronUp } from "lucide-react"

interface BackToTopButtonProps {
  showAfterScroll?: number
  language?: "en" | "hi" | "both"
  themeColor?: string
}

export default function BackToTopButton({
  showAfterScroll = 300,
  language = "both",
  themeColor = "#0ea5e9",
}: BackToTopButtonProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > showAfterScroll) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [showAfterScroll])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const getTooltipText = () => {
    if (language === "en") return "Back to Top"
    if (language === "hi") return "शीर्ष पर जाएं"
    return "Back to Top / शीर्ष पर जाएं"
  }

  return (
    <button
      onClick={scrollToTop}
      aria-label={getTooltipText()}
      className={`fixed left-4 md:left-6 bottom-6 z-40 group w-12 h-12 md:w-14 md:h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-500 flex items-center justify-center print:hidden ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12 pointer-events-none"
      }`}
      style={{ backgroundColor: themeColor }}
    >
      <ChevronUp className="w-6 h-6 md:w-7 md:h-7 text-white" />

      {/* Tooltip */}
      <span className="absolute left-full ml-3 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        {getTooltipText()}
      </span>
    </button>
  )
}
