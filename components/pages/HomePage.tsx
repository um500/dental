"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  ArrowRight,
  Award,
  Users,
  Clock,
  Shield,
  Star,
  CheckCircle,
  Phone,
  MapPin,
  Sparkles,
  Heart,
  Zap,
  Palette,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ReviewsSlider } from "@/components/ui/reviews-slider";
import HeroSlider from "@/components/ui/HeroSlider";

export default function HomePage() {
  const [reviews, setReviews] = useState([]);
  const [averageRating, setAverageRating] = useState(4.9);
  const [totalReviews, setTotalReviews] = useState(249);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch("/api/reviews/refresh", {
          method: "GET",
          cache: "no-store",
        });

        if (response.ok) {
          const data = await response.json();
          setReviews(data.reviews || []);
          setAverageRating(
            data.stats?.averageRating || data.google?.rating || 4.9
          );
          setTotalReviews(
            data.stats?.totalReviews || data.google?.total || 249
          );
          setError(null);
        } else {
          console.error(
            "[v0] Failed to fetch reviews, status:",
            response.status
          );
          setError(`Failed to fetch reviews: ${response.status}`);
        }
      } catch (error) {
        console.error("[v0] Failed to fetch reviews:", error);
        setError(error instanceof Error ? error.message : "Unknown error");
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviews();

    const interval = setInterval(fetchReviews, 2 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);



  const services = [
  {
    title: "Root Canal Treatment",
    description: "Advanced endodontic treatment to save your natural teeth",
    image: "/rct final.png",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Dental Implants",
    description: "Permanent solution for missing teeth with natural look",
    image: "/Dental Implants,.png",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Tooth Extraction",
    description: "Safe and painless tooth removal procedures",
    image: "/ext.png",
    gradient: "from-indigo-500 to-purple-500",
  },
];


  const features = [
  {
    icon: Award,
    title: "13+ Years Experience",
    description: "Trusted name in family dental care in Kestopur community",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: Shield,
    title: "Modern Tech & Devices",
    description:
      "Equipped with latest dental devices for precise & painless treatment",
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    icon: Users,
    title: "Patient-Centered Care",
    description:
      "Stress-free environment with gentle techniques for all ages",
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
  {
    icon: Clock,
    title: "Flexible Timings",
    description: "Mon - Sun: 10:30 AM-9:30 PM (Open on Sat & Sun)",
    color: "text-orange-600",
    bg: "bg-orange-50",
  },
  {
    icon: Palette,
    title: "Simple Designing Excellence",
    description:
      "Clean, modern & calming clinic design for relaxed dental visits",
    color: "text-pink-600",
    bg: "bg-pink-50",
  },
];


  return (
    <div className="min-h-screen">

       <HeroSlider />

 {/*Intro section */}

      <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 gradient-dental-light"></div>

        {/* Animated background elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 left-10 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* TEXT CONTENT */}
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center space-x-2 px-5 py-2.5 glass-effect border border-blue-200 rounded-full text-sm font-semibold mb-8 shadow-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                <span className="text-gradient">13+ Years of Trusted Care</span>
              </div>

              <h1
                className="text-4xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight text-balance"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                Where Your Smile is{" "}
                <span className="text-gradient">Our Priority</span>
              </h1>

              <p className="text-xl text-justify text-gray-600 mb-10 leading-relaxed text-pretty">
                For over 8 years, Shree Dental Clinic has been the trusted name in family dental care in the community. Our warm and welcoming office is designed to make patients of all ages feel comfortable and at ease, from a child's first visit to a senior's restorative needs. We focus on gentle, preventive care and patient education, ensuring every member of your family has a positive and healthy dental experience for a lifetime of beautiful smiles.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Button
                  asChild
                  size="lg"
                  className="gradient-dental hover:opacity-90 shadow-dental text-lg h-14 px-8 font-semibold group"
                >
                  <Link href="/contact">
                    Book Appointment
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="text-lg h-14 px-8 border-2 border-gray-300 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 bg-white font-semibold group"
                >
                  <a href="tel:+919471373777">
                    <Phone className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                    Call +91 9471373777
                  </a>
                </Button>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 px-4 py-2 bg-white rounded-full shadow-md">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-semibold text-gray-700">
                    Cosmetic Dentistry Expert
                  </span>
                </div>

                <div className="flex items-center space-x-2 px-4 py-2 bg-white rounded-full shadow-md">
                  <Heart className="w-5 h-5 text-red-500" />
                  <span className="text-sm font-semibold text-gray-700">
                    Gentle & Painless
                  </span>
                </div>

                <div className="flex items-center space-x-2 px-4 py-2 bg-white rounded-full shadow-md">
                  <Zap className="w-5 h-5 text-yellow-500" />
                  <span className="text-sm font-semibold text-gray-700">
                    Advanced Equipment
                  </span>
                </div>
              </div>
            </div>

            {/* IMAGE CONTENT */}
            <div className="relative order-1 lg:order-2">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl border-8 border-white hover-lift">
                <img
                  src="/choose-2.jpeg"
                  alt="Dental clinic interior"
                  className="w-full h-full object-cover"
                />
              </div>

              
            </div>
          </div>
        </div>
      </section>

{/* Why choose */}

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full blur-3xl opacity-50"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            {/* ABOUT US BADGE (mobile top, desktop inside text) */}
            <div className="order-1 lg:hidden">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-full mb-6">
                <Heart className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-semibold text-blue-600">
                  About Us
                </span>
              </div>
            </div>

            {/* IMAGE */}
            <div className="relative order-2 lg:order-2">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-8 border-white hover-lift">
                <img
                  src="/choose-1.jpg"
                  alt="Modern dental clinic"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full blur-2xl opacity-60 animate-pulse"></div>
              <div
                className="absolute -bottom-6 -left-6 w-40 h-40 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-2xl opacity-60 animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>

            {/* TEXT CONTENT */}
            <div className="order-3 lg:order-1">
              {/* Badge for desktop */}
              <div className="hidden lg:inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-full mb-6">
                <Heart className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-semibold text-blue-600">
                  About Us
                </span>
              </div>

              <h2
                className="text-4xl font-bold text-gray-900 mb-6 leading-tight"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                We Believe That Every{" "}
                <span className="text-gradient">Smile </span> 
                Tell a Story
              </h2>

              <p className="text-xl text-justify text-gray-600 mb-8 leading-relaxed">
                We shine. With expert dentists, modern technology, and a gentle approach, we deliver care that’s as comfortable as it is effective. From routine check-ups to advanced treatments, we put your needs first, ensuring you feel confident every step of the way.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-blue-50 to-transparent rounded-xl hover:from-blue-100 transition-colors">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      Experienced Dental Professionals
                    </h3>
                    <p className="text-gray-600">
                      Highly qualified dentists with years of expertise
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-cyan-50 to-transparent rounded-xl hover:from-cyan-100 transition-colors">
                  <div className="w-12 h-12 bg-cyan-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      Modern Technology
                    </h3>
                    <p className="text-gray-600">
                      State-of-the-art equipment for precise treatments
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-green-50 to-transparent rounded-xl hover:from-green-100 transition-colors">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      Comfort & Pain-Free Care
                    </h3>
                    <p className="text-gray-600">
                      Gentle techniques ensuring a comfortable experience
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-purple-50 to-transparent rounded-xl hover:from-purple-100 transition-colors">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      Clean & Hygienic Environment
                    </h3>
                    <p className="text-gray-600">
                      Sterilized equipment and sanitized clinic spaces
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-orange-50 to-transparent rounded-xl hover:from-orange-100 transition-colors">
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      Skilled & Caring Dentists
                    </h3>
                    <p className="text-gray-600">
                      Compassionate professionals dedicated to your smile
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



{/* WHY CHOOSE US SECTION */}
<section className="py-10 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
  {/* Background glow */}
  <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full blur-3xl opacity-50" />

  <div className="max-w-7xl mx-auto relative z-10">
    {/* Heading */}
    <div className="text-center mb-12">
      <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-50 rounded-full mb-4">
        <Sparkles className="w-4 h-4 text-blue-600" />
        <span className="text-sm font-semibold text-blue-600">
          Why Choose Us
        </span>
      </div>

      <h2
        className="text-4xl font-bold text-gray-900 mb-4"
        style={{ fontFamily: "var(--font-poppins)" }}
      >
        Why Choose Shree Dental Clinic?
      </h2>

      <p className="text-xl text-gray-600 max-w-3xl mx-auto text-balance">
        We combine advanced dental technology with compassionate care to
        deliver exceptional results
      </p>
    </div>

    {/* Slider Wrapper */}
    <div className="relative">
      {/* LEFT ARROW */}
      <button
        onClick={() => {
          const el = document.getElementById("feature-scroll");
          el?.scrollBy({ left: -320, behavior: "smooth" });
        }}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg rounded-full p-3 hover:bg-blue-50"
      >
        <ChevronLeft className="w-6 h-6 text-gray-700" />
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={() => {
          const el = document.getElementById("feature-scroll");
          el?.scrollBy({ left: 320, behavior: "smooth" });
        }}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg rounded-full p-3 hover:bg-blue-50"
      >
        <ChevronRight className="w-6 h-6 text-gray-700" />
      </button>

      {/* SCROLL AREA */}
      <div
  id="feature-scroll"
  className="flex gap-6 overflow-x-auto scroll-smooth px-12 pb-4 no-scrollbar"
>

        {features.map((feature, index) => (
          <Card
            key={index}
            className="
              min-w-[280px] max-w-[280px]
              p-6 border-2 border-gray-100 bg-white rounded-2xl shadow-sm
              relative overflow-hidden transition-all duration-300
              hover:-translate-y-2 hover:shadow-xl hover:border-blue-400
              group
            "
          >
            {/* Glow */}
            <div
              className="
                absolute inset-0 bg-gradient-to-br from-blue-200/40 to-cyan-200/40
                opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500
                pointer-events-none
              "
            />

            {/* Icon */}
            <div
              className={`w-14 h-14 ${feature.bg} rounded-xl flex items-center justify-center mb-5 
              group-hover:scale-110 transition-transform duration-300`}
            >
              <feature.icon
                className={`w-7 h-7 ${feature.color} group-hover:drop-shadow-lg`}
              />
            </div>

            <h3
              className="text-lg font-bold text-gray-900 mb-2"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              {feature.title}
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed">
              {feature.description}
            </p>
          </Card>
        ))}
      </div>
    </div>
  </div>
</section>




{/*Service */}

     <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
  <div className="max-w-7xl mx-auto relative z-10">

    {/* Heading */}
    <div className="text-center mb-16">
      <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white rounded-full mb-4 shadow-md">
        <Sparkles className="w-4 h-4 text-blue-600" />
        <span className="text-sm font-semibold text-blue-600">
          Our Services
        </span>
      </div>

      <h2
        className="text-4xl font-bold text-gray-900 mb-4"
        style={{ fontFamily: "var(--font-poppins)" }}
      >
        Our Dental Services
      </h2>

      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Comprehensive dental care for all your oral health needs
      </p>
    </div>

    {/* Cards */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service, index) => (
        <Card
          key={index}
          className="
            border-2 border-white bg-white rounded-2xl overflow-hidden relative group
            transform transition-all duration-400
            hover:-translate-y-3 hover:shadow-2xl
          "
        >

          {/* IMAGE TOP */}
          <div className="relative h-48 w-full overflow-hidden">
            <img
              src={service.image}
              alt={service.title}
              className="
                h-full w-full object-cover
                transition-transform duration-500
                group-hover:scale-110
              "
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>

          {/* CONTENT */}
          <div className="relative z-10 p-8">

            {/* HOLO EFFECT — CARD BOTTOM CORNER */}
            <div
              aria-hidden="true"
              className={`
                absolute -bottom-10 -right-10 w-44 h-44 rounded-full
                bg-gradient-to-br ${service.gradient}
                opacity-20 blur-2xl
                transition-all duration-500
                group-hover:opacity-70 group-hover:scale-125
                pointer-events-none
              `}
            />

            <h3
              className="relative text-2xl font-bold text-gray-900 mb-3"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              {service.title}
              <span
                className="block h-0.5 bg-blue-400 rounded-full mt-3 w-10 transition-all duration-400 group-hover:w-20"
              />
            </h3>

            <p className="text-gray-600 mb-5 leading-relaxed">
              {service.description}
            </p>

            <Link
              href="/services"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-sm"
            >
              Learn More
              <ArrowRight className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-2" />
            </Link>
          </div>
        </Card>
      ))}
    </div>

    {/* Button */}
    <div className="text-center mt-12">
      <Button
        asChild
        size="lg"
        variant="outline"
        className="border-2 border-gray-300 hover:border-blue-500 hover:text-blue-600 bg-white shadow-lg font-semibold h-12 px-8"
      >
        <Link href="/services">View All Services</Link>
      </Button>
    </div>
  </div>
</section>


{/* review */}
{/* ===================== REVIEWS SECTION ===================== */}
<section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
  <div className="max-w-7xl mx-auto">

    {/* Heading */}
    <div className="text-center mb-16">
      <div className="inline-flex items-center space-x-2 px-4 py-2 bg-yellow-50 rounded-full mb-4">
        <Star className="w-4 h-4 text-yellow-600 fill-yellow-600" />
        <span className="text-sm font-semibold text-yellow-600">
          Patient Reviews
        </span>
      </div>

      <h2
        className="text-4xl font-bold text-gray-900 mb-4"
        style={{ fontFamily: "var(--font-poppins)" }}
      >
        What Our Patients Say
      </h2>

      <p className="text-xl text-gray-600 max-w-3xl mx-auto text-balance">
        Real experiences from our satisfied patients – verified reviews from Google Maps
      </p>
    </div>

    {/* Reviews */}
{error && (
  <div className="text-center py-12 text-red-500">
    Failed to load reviews
  </div>
)}

{!error && isLoading && (
  <div className="text-center py-12 text-gray-500">
    Loading reviews...
  </div>
)}

{!error && !isLoading && reviews.length > 0 && (
  <ReviewsSlider
    reviews={reviews.slice(0, 7)}
    averageRating={averageRating}
    totalReviews={totalReviews}
  />
)}

{!error && !isLoading && reviews.length === 0 && (
  <div className="text-center py-12 text-gray-500">
    Reviews will appear here soon.
  </div>
)}


    {/* CTA */}
    <div className="text-center mt-12">
      <Button
        asChild
        size="lg"
        variant="outline"
        className="border-2 border-black text-black hover:bg-black/5 text-lg h-14 px-8 bg-transparent font-semibold"
      >

        <Link href="/reviews">Read All Reviews</Link>
      </Button>
    </div>

  </div>
</section>
{/* ===================== END ===================== */}


{/* cta */}


      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-700 via-blue-800 to-blue-900 text-white relative overflow-hidden">
        {/* Soft Glows */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Sparkles className="w-16 h-16 mx-auto mb-6 animate-pulse" />

          <h2
            className="text-4xl font-bold mb-6 text-balance drop-shadow-lg"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Ready to Transform Your Smile?
          </h2>

          <p className="text-xl mb-10 text-blue-50 font-medium leading-relaxed drop-shadow-lg">
            Visit Shree Dental Clinic in Kestopur, Kolkata and experience
            comprehensive dental care with advanced technology.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-white text-blue-600 hover:bg-gray-100 text-lg h-14 px-8 shadow-xl font-semibold"
            >
              <Link href="/contact">Book Your Appointment</Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/20 text-lg h-14 px-8 bg-transparent font-semibold"
            >
              <a href="tel:+919471373777">
                <Phone className="w-5 h-5 mr-2" />
                +91 9471373777
              </a>
            </Button>
          </div>

          <a
            href="https://maps.app.goo.gl/HbLFJMiaxhzLWNvX6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-5 py-3 bg-white/20 backdrop-blur-sm rounded-full shadow-lg hover:bg-white/30 transition"
          >
            <MapPin className="w-5 h-5" />
            <span className="font-semibold">
              BC-14, Samarpally, Kestopur, Kolkata - 700102
            </span>
          </a>
        </div>
      </section>
    </div>
  );
}
