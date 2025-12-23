import Link from "next/link"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const services = [
    "Root Canal Treatment (RCT)",
    "Dental Implants",
    "Orthodontic Braces",
    "Teeth Cleaning & Scaling",
    "Crown & Bridge",
    "Tooth Extraction",
  ]

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Our Doctor", href: "/doctor" },
    { name: "Reviews", href: "/reviews" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
  <img
  src="/logo.png"
  alt="Shree Dental Clinic Logo"
  className="w-32 h-16 object-contain"
/>
</div>


            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              For over 8 years, trusted name in family dental care. We combine state-of-the-art technology with
              compassionate, patient-centered approach in Kestopur, Kolkata.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://facebook.com/shreedentalclinic"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com/shreedentalclinic"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 hover:bg-pink-600 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com/shreedentalclinic"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 hover:bg-blue-400 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-1.5">
              {services.map((service) => (
                <li key={service}>
                  <Link href="/services" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-blue-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <h4 className="text-white font-semibold text-sm mb-3">Clinic Hours</h4>
              <div className="flex items-start space-x-2 text-sm text-gray-400">
                <Clock className="w-4 h-4 mt-0.5 text-blue-400 flex-shrink-0" />
                <div>
                  <p>Monday - Sunday</p>
                  <p>10:30 AM - 9:30 PM</p>
                  <p className="text-xs text-blue-400 mt-1">Open 7 Days</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <a
                  href="https://maps.app.goo.gl/AsZ19tucWvQJxFzo8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                >
                  R. R. Tower, BC-14, Samarpally
                  <br />
                  Krishnapur, Kestopur
                  <br />
                  Kolkata - 700102, West Bengal
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a href="tel:+919471373777" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">
                  +91 9471373777
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a
                  href="mailto:shreedentalclinic804@gmail.com"
                  className="text-sm text-gray-400 hover:text-blue-400 transition-colors break-all"
                >
                  shreedentalclinic804@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-500 text-center md:text-left">
              {currentYear} SHREE DENTAL CLINIC. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-500">
              <p className="hover:text-blue-400 transition-colors">
                Privacy Policy
              </p>
              <p className="hover:text-blue-400 transition-colors">
                Terms of Service
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Dentist",
            name: "SHREE DENTAL CLINIC",
            image: "https://www.shreedentalhealth.com/logo.png",
            "@id": "https://www.shreedentalhealth.com",
            url: "https://www.shreedentalhealth.com",
            telephone: "+919471373777",
            email: "shreedentalclinic804@gmail.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "R. R. Tower, BC-14, Samarpally, Krishnapur, Kestopur",
              addressLocality: "Kolkata",
              postalCode: "700102",
              addressRegion: "West Bengal",
              addressCountry: "IN",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 22.61,
              longitude: 88.4315,
            },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                opens: "10:30",
                closes: "21:30",
              },
            ],
            priceRange: "₹₹",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              reviewCount: "127",
            },
            hasMap: "https://maps.app.goo.gl/AsZ19tucWvQJxFzo8",
          }),
        }}
      />
    </footer>
  )
}
