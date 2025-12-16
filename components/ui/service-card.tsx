import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Card } from "@/components/ui/card"

interface ServiceCardProps {
  title: string
  description: string
  icon: string
  features?: string[]
  price?: string
}

export function ServiceCard({ title, description, icon, features, price }: ServiceCardProps) {
  return (
    <Card className="p-6 hover:shadow-xl transition-all hover:-translate-y-1 border-2 bg-white">
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>

      {features && features.length > 0 && (
        <ul className="space-y-2 mb-4">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start space-x-2 text-sm text-gray-700">
              <span className="text-green-600 font-bold flex-shrink-0">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}

      {price && (
        <div className="pt-4 border-t border-gray-100">
          <p className="text-blue-600 font-semibold text-lg">{price}</p>
        </div>
      )}

      <Link
        href="/services"
        className="text-blue-600 hover:text-blue-700 font-medium text-sm inline-flex items-center mt-4"
      >
        Learn More
        <ArrowRight className="w-4 h-4 ml-1" />
      </Link>
    </Card>
  )
}
