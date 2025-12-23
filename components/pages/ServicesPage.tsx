// services-page.jsx
import { Phone, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function ServicesPage() {
  const services = [
    {
      title: "Smile Designing",
      image: "/Smile Designing.png",
      description:
        "Your smile is a reflection of your confidence — our Smile Designing treatment combines art and advanced dental science to reshape, align, and brighten your teeth for a naturally beautiful smile.",
      features: [
        "Digital smile simulation",
        "Custom prosthetic planning",
        "Shade & shape matching",
        "Minimally invasive cosmetic techniques",
        "Natural-looking results",
      ],
    },
    {
      title: "Root Canal Treatment (R.C.T.)",
      image: "/rct final.png",
      description:
        "Root Canal Therapy treats and saves a severely decayed or infected tooth. We use modern rotary systems for painless, precise R.C.T. with minimal recovery time.",
      features: [
        "Single sitting R.C.T available",
        "Latest rotary endodontics",
        "Digital X-ray guidance",
        "Pain-free procedures",
        "High success rate",
      ],
    },
    {
      title: "Restoration (Tooth Fillings)",
      image: "/Restoration.png",
      description:
        "Repair cavities or minor tooth damage with high-quality, tooth-colored materials that restore appearance and function.",
      features: [
        "Composite fillings",
        "Durable materials",
        "Color matching",
        "Conservative preparation",
      ],
    },
    {
      title: "Teeth Cleaning (Scaling)",
      image: "/Teeth Cleaning (Scaling),.png",
      description:
        "Professional cleaning removes tartar, plaque, and stains to keep your teeth and gums healthy.",
      features: [
        "Ultrasonic scaling",
        "Polishing",
        "Gum disease prevention",
        "Stain removal",
      ],
    },
    {
      title: "Teeth Polishing",
      image: "/Teeth Polishing.png",
      description:
        "Polishing smooths tooth surfaces, removes stains, and gives a glossy finish after scaling.",
      features: ["Stain removal", "Smooth finish", "Bright appearance"],
    },
    {
      title: "Orthodontic Treatment",
      image: "/Orthodontic Treatment.png",
      description:
        "Correct alignment and bite issues with metal braces, ceramic braces, or clear aligners.",
      features: [
        "Metal & ceramic braces",
        "Clear aligners",
        "Customized plans",
        "Retention included",
      ],
    },
    {
      title: "Dental Crowns",
      image: "/Dental Crowns.png",
      description:
        "Strong, natural-looking crowns restore damaged or weak teeth with long-term durability.",
      features: ["Zirconia crowns", "Color matched", "CAD/CAM design"],
    },
    {
      title: "Dental Bridges",
      image: "/Dental Bridges.png",
      description:
        "Bridges replace missing teeth using adjacent teeth for support with a perfect natural look.",
      features: [
        "Tooth-supported bridges",
        "Shade matching",
        "Improved chewing",
      ],
    },
    {
      title: "Dentures (Full & Partial)",
      image: "/Dentures.jpg",
      description:
        "Comfortable full and partial dentures to restore chewing, speech, and smile aesthetics.",
      features: ["Custom-fit", "Flexible partials", "Repairs & relining"],
    },
    {
      title: "Dental Implants",
      image: "/Dental Implants,.png",
      description:
        "Advanced titanium implants that look, feel, and function exactly like natural teeth.",
      features: [
        "Computer-guided placement",
        "Single & full arch",
        "Long-term durability",
      ],
    },
    {
      title: "Teeth Whitening",
      image: "/Teeth Whitening.png",
      description:
        "Professional whitening removes deep stains and brightens teeth by several shades.",
      features: [
        "In-office bleaching",
        "Take-home kits",
        "Laser whitening",
        "Instant results",
      ],
    },
    {
      title: "Post and Core Treatment",
      image: "/Post and Core Treatment.png",
      description:
        "Strengthens and rebuilds teeth with major structure loss after RCT to support a crown.",
      features: ["Fiber post", "Metal post", "Core buildup"],
    },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* ---------------- HERO SECTION ---------------- */}
      <section className="pt-28 pb-16 px-4 bg-blue-50 overflow-x-hidden">
        <div className="max-w-7xl mx-auto text-center w-full px-2">
          <h1 className="text-4xl font-bold text-gray-900 mb-6 select-none">
            Comprehensive Care for Every Smile
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            At Shree Dental Clinic, we provide a complete range of dental
            treatments designed to care for your oral health and enhance your
            smile’s beauty.
          </p>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            From preventive care to advanced restorative and cosmetic
            procedures, every treatment is performed with precision, compassion,
            and the latest technology.
          </p>

          <Button
            asChild
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-xl font-semibold shadow-lg"
          >
            <Link href="/contact" className="flex items-center">
              Book Your Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      {/* ---------------- SERVICE GRID ---------------- */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div
          className="
  max-w-7xl mx-auto 
  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
  gap-8 
  px-2 sm:px-0
"
        >
          {services.map((service) => (
            <Card
              key={service.title}
              className="
    relative overflow-hidden rounded-2xl border border-gray-100 bg-white
    shadow-md transition-all duration-300
    hover:-translate-y-3 hover:shadow-2xl
    group w-full h-full flex flex-col
  "
            >
              {/* 1️⃣ IMAGE SECTION */}
              <div className="w-full h-52 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="
        w-full h-full object-cover
        transition-transform duration-700
        group-hover:scale-105
      "
                />
              </div>

              {/* 2️⃣ CONTENT SECTION */}
              <div className="flex-1 p-6 bg-white/90 transition-colors duration-300 group-hover:bg-white">
                <h3
                  className="text-2xl font-bold text-gray-900 mb-2"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  {service.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 group-hover:text-gray-700 transition-colors">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex gap-2 text-sm text-gray-700 items-start group-hover:text-gray-800 transition-colors"
                    >
                      <span className="text-green-600 mt-0.5">✔</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 3️⃣ BUTTON SECTION (ALWAYS BOTTOM RIGHT) */}
              <div className="p-6 pt-0 mt-auto flex justify-end">
                <Link
                  href="/contact"
                  className="
        inline-flex items-center gap-2
        px-5 py-2.5 rounded-lg
        text-sm font-semibold
        bg-blue-600 text-white shadow-md
        hover:bg-blue-700 hover:shadow-lg
        transition-all duration-300
        active:translate-y-[1px]
      "
                >
                  Book Now
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* ---------------- EMERGENCY SECTION ---------------- */}
      <section className="py-16 px-4 bg-red-50 text-center">
        <h2 className="text-3xl font-bold mb-4 select-none">Emergency Dental Care</h2>
        <p className="text-lg text-gray-700 mb-6">
          Severe toothache or broken tooth? We provide SAME-DAY emergency care.
        </p>
        <Button asChild size="lg" variant="destructive">
          <a href="tel:+919471373777">
            <Phone className="w-5 h-5 mr-2" />
            Emergency: +91 9471373777
          </a>
        </Button>
      </section>

      {/* ---------------- CTA SECTION ---------------- */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-cyan-600 text-white text-center">
        <h2 className="text-4xl font-bold mb-6 select-none">
          Not Sure Which Treatment You Need?
        </h2>
        <p className="text-xl mb-8">Get a FREE consultation today.</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* Primary Button */}
          <Button
            asChild
            size="lg"
            className="
      bg-white text-blue-600 font-semibold
      px-8 py-6 text-lg rounded-xl
      shadow-md hover:shadow-lg
      transition-all duration-300
      hover:bg-gray-100 active:scale-95
    "
          >
            <Link href="/contact">Free Consultation</Link>
          </Button>

          {/* Secondary Button */}
          <Button
            asChild
            size="lg"
            className="
      border-2 border-white text-white font-semibold
      px-8 py-6 text-lg rounded-xl
      bg-white/10 backdrop-blur-sm
      hover:bg-white/20 hover:border-white
      active:scale-95
      transition-all duration-300
    "
          >
            <a href="tel:+919471373777" className="flex items-center">
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
