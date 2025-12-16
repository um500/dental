import { clinicInfo } from "./seo-content"

export function generateDentistSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: clinicInfo.name,
    image: `${clinicInfo.contact.website}/logo.png`,
    "@id": clinicInfo.contact.website,
    url: clinicInfo.contact.website,
    telephone: clinicInfo.contact.phone,
    email: clinicInfo.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${clinicInfo.address.building}, ${clinicInfo.address.street}`,
      addressLocality: clinicInfo.address.city,
      addressRegion: clinicInfo.address.state,
      postalCode: clinicInfo.address.postalCode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: clinicInfo.location.latitude,
      longitude: clinicInfo.location.longitude,
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
      bestRating: "5",
      worstRating: "1",
    },
    hasMap: clinicInfo.location.googleMapsUrl,
    sameAs: [clinicInfo.social.facebook, clinicInfo.social.instagram, clinicInfo.social.twitter],
  }
}

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: clinicInfo.name,
    image: `${clinicInfo.contact.website}/logo.png`,
    "@id": clinicInfo.contact.website,
    url: clinicInfo.contact.website,
    telephone: clinicInfo.contact.phone,
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${clinicInfo.address.building}, ${clinicInfo.address.street}`,
      addressLocality: clinicInfo.address.city,
      addressRegion: clinicInfo.address.state,
      postalCode: clinicInfo.address.postalCode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: clinicInfo.location.latitude,
      longitude: clinicInfo.location.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "10:30",
        closes: "21:30",
      },
    ],
  }
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function generateServiceSchema(service: {
  name: string
  description: string
  price: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    provider: {
      "@type": "Dentist",
      name: clinicInfo.name,
    },
    areaServed: {
      "@type": "City",
      name: clinicInfo.address.city,
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      price: service.price,
    },
  }
}
