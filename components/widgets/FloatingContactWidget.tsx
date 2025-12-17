"use client"

import { useState, useEffect } from "react"
import { Phone, X, MessageCircle } from "lucide-react"

interface Template {
  id: string
  label: string
  message: string
}

interface FloatingContactWidgetProps {
  phoneNumber?: string
  whatsappNumber?: string
  templates?: Template[]
  themeColors?: {
    primary: string
    secondary: string
    whatsapp: string
  }
  enableAnalytics?: boolean
}

const defaultTemplates: Template[] = [
  {
    id: "rct",
    label: "RCT / Root Canal",
    message: "I want to know about RCT treatment.",
  },
  {
    id: "crown",
    label: "Crown & Bridge",
    message: "Please tell me about crown & bridge options.",
  },
  {
    id: "braces",
    label: "Braces / Orthodontics",
    message: "I want consultation for braces.",
  },
  {
    id: "implants",
    label: "Dental Implants",
    message: "I need details & cost for dental implants.",
  },
  {
    id: "cleaning",
    label: "Cleaning / Scaling",
    message: "I want to book a cleaning/scaling appointment.",
  },
  {
    id: "whitening",
    label: "Teeth Whitening",
    message: "I want to know about teeth whitening treatment.",
  },
]

export default function FloatingContactWidget({
  phoneNumber = "+919471373777",
  whatsappNumber = "919471373777",
  templates = defaultTemplates,
  themeColors = {
    primary: "#0ea5e9",
    secondary: "#06b6d4",
    whatsapp: "#25D366",
  },
  enableAnalytics = true,
}: FloatingContactWidgetProps) {
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false)
  const [showCallConfirm, setShowCallConfirm] = useState(false)
  const [message, setMessage] = useState("")
  const [includePhone, setIncludePhone] = useState(false)
  const [userPhone, setUserPhone] = useState("")
  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 500)

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)

    const savedPhone = localStorage.getItem("userPhone")
    if (savedPhone) {
      setUserPhone(savedPhone)
      setIncludePhone(true)
    }

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const trackEvent = (eventName: string, data?: any) => {
    if (enableAnalytics && typeof window !== "undefined" && (window as any).gtag) {
      ;(window as any).gtag("event", eventName, {
        event_category: "Contact Widget",
        ...data,
      })
    }
    console.log(`[v0] Analytics: ${eventName}`, data)
  }

  const openWhatsAppModal = () => {
    setShowWhatsAppModal(true)
    setMessage("Hello, I found you via the website. I have a question about dental treatment. My name is [Your Name].")
    trackEvent("whatsapp_modal_open")
  }

  const closeWhatsAppModal = () => {
    setShowWhatsAppModal(false)
  }

  const selectTemplate = (template: Template) => {
    setMessage(
      `Hello, I found you via the website.\n\n${template.message}\n\nMy name is [Your Name].\n\n[Via: Website]`,
    )
    trackEvent("template_selected", { template: template.id })
  }

  const openWhatsApp = () => {
    let finalMessage = message
    if (includePhone && userPhone) {
      finalMessage += `\n\nMy phone: ${userPhone}`
      localStorage.setItem("userPhone", userPhone)
    }

    const encodedMessage = encodeURIComponent(finalMessage)
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`

    window.open(whatsappUrl, "_blank")
    trackEvent("whatsapp_opened", { messageLength: finalMessage.length })

    showToast("Opening WhatsApp...")
    closeWhatsAppModal()
  }

  const handleCallClick = () => {
    if (isMobile) {
      window.location.href = `tel:${phoneNumber}`
      trackEvent("call_initiated", { device: "mobile" })
      showToast("Dialing...")
    } else {
      setShowCallConfirm(true)
      trackEvent("call_confirm_shown", { device: "desktop" })
    }
  }

  const confirmCall = () => {
    window.location.href = `tel:${phoneNumber}`
    setShowCallConfirm(false)
    trackEvent("call_confirmed", { device: "desktop" })
    showToast("Dialing...")
  }

  const showToast = (message: string) => {
    const toast = document.createElement("div")
    toast.textContent = message
    toast.className =
      "fixed bottom-24 right-6 bg-gray-900 text-white px-4 py-2 rounded-lg shadow-lg z-50 animate-fade-in"
    document.body.appendChild(toast)
    setTimeout(() => {
      toast.classList.add("animate-fade-out")
      setTimeout(() => document.body.removeChild(toast), 300)
    }, 2000)
  }

  return (
    <>
      {/* Floating Buttons */}
      <div
        className={`fixed right-4 md:right-6 bottom-6 flex flex-col gap-3 z-40 transition-all duration-500 print:hidden ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
        }`}
      >
        {/* WhatsApp Button */}
        <button
          onClick={openWhatsAppModal}
          aria-label="Chat on WhatsApp"
          className="group relative w-12 h-12 md:w-14 md:h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
          style={{ backgroundColor: themeColors.whatsapp }}
        >
          <MessageCircle className="w-6 h-6 md:w-7 md:h-7 text-white" />

          <span className="absolute right-full mr-3 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Chat on WhatsApp
          </span>
        </button>

        {/* Call Button */}
        <button
          onClick={handleCallClick}
          aria-label="Call Us"
          className="group relative w-12 h-12 md:w-14 md:h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
          style={{ backgroundColor: themeColors.primary }}
        >
          <Phone className="w-6 h-6 md:w-7 md:h-7 text-white" />

          <span className="absolute right-full mr-3 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Call Us
          </span>
        </button>
      </div>

      {/* WhatsApp Modal */}
      {showWhatsAppModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 animate-fade-in" onClick={closeWhatsAppModal}>
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            
            <div className="sticky top-0 bg-green-600 text-white p-4 rounded-t-2xl flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-lg">Chat with us on WhatsApp</h3>
                <p className="text-sm text-green-50 mt-1">Get instant replies</p>
              </div>
              <button onClick={closeWhatsAppModal} className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              {/* Quick Templates */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select treatment:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {templates.map((template) => (
                    <button
                      key={template.id}
                      onClick={() => selectTemplate(template)}
                      className="px-3 py-2 text-sm border-2 border-gray-200 rounded-lg hover:border-green-500 hover:bg-green-50 transition text-left"
                    >
                      <div className="font-medium text-gray-900">{template.label}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Message Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your message:
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={6}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition resize-none"
                  placeholder="Type your message here..."
                />
              </div>

              {/* Phone Number Option */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="includePhone"
                  checked={includePhone}
                  onChange={(e) => setIncludePhone(e.target.checked)}
                  className="mt-1 w-4 h-4 text-green-600 rounded border-gray-300 focus:ring-green-500"
                />
                <div className="flex-1">
                  <label htmlFor="includePhone" className="text-sm text-gray-700 cursor-pointer">
                    Include my phone number
                  </label>
                  {includePhone && (
                    <input
                      type="tel"
                      value={userPhone}
                      onChange={(e) => setUserPhone(e.target.value)}
                      placeholder="+91 XXXXXXXXXX"
                      className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none"
                    />
                  )}
                </div>
              </div>

              {/* Privacy Note */}
              <p className="text-xs text-gray-500 leading-relaxed">
                By opening WhatsApp, you agree to our privacy policy. Your information is kept secure.
              </p>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-2">
                <button
                  onClick={openWhatsApp}
                  className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition shadow-lg hover:shadow-xl"
                >
                  Open in WhatsApp
                </button>
                <button
                  onClick={closeWhatsAppModal}
                  className="px-6 py-3 border-2 border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Call Confirmation Modal */}
      {showCallConfirm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 animate-fade-in" onClick={() => setShowCallConfirm(false)}>
          <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full p-6" onClick={(e) => e.stopPropagation()}>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Call Now?
              </h3>
              <p className="text-gray-600 mb-6">{phoneNumber}</p>
              <div className="flex gap-3">
                <button
                  onClick={confirmCall}
                  className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
                >
                  Proceed
                </button>
                <button
                  onClick={() => setShowCallConfirm(false)}
                  className="flex-1 border-2 border-gray-300 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
