"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ReviewsSlider } from "@/components/ui/reviews-slider";

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
      icon: "🦷",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Dental Implants",
      description: "Permanent solution for missing teeth with natural look",
      icon: "⚕️",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Orthodontic Braces",
      description: "Straighten your teeth for a perfect smile",
      icon: "😁",
      gradient: "from-orange-500 to-red-500",
    },
    {
      title: "Teeth Cleaning",
      description: "Professional cleaning and scaling for oral health",
      icon: "✨",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "Crown & Bridge",
      description: "Restore damaged teeth with custom prosthetics",
      icon: "👑",
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      title: "Tooth Extraction",
      description: "Safe and painless tooth removal procedures",
      icon: "🔧",
      gradient: "from-indigo-500 to-purple-500",
    },
  ];

  const features = [
    {
      icon: Award,
      title: "8+ Years Experience",
      description: "Trusted name in family dental care in Kestopur community",
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      icon: Shield,
      title: "State-of-the-Art Technology",
      description: "Latest advanced equipment for accurate and efficient care",
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
      description: "Open 7 days: Mon-Sun 10:30AM-9:30PM",
      color: "text-orange-600",
      bg: "bg-orange-50",
    },
  ];

  return (
    <div className="min-h-screen">
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
                <span className="text-gradient">8+ Years of Trusted Care</span>
              </div>

              <h1
                className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight text-balance"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                Where Your Smile is{" "}
                <span className="text-gradient">Our Priority</span>
              </h1>

              <p className="text-xl text-gray-600 mb-10 leading-relaxed text-pretty">
                For over 8 years, SHREE DENTAL CLINIC has been the trusted name
                in family dental care. We combine state-of-the-art technology
                with a compassionate, patient-centered approach in Kestopur,
                Kolkata.
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

              <div
                className="
            absolute bottom-4 left-4
            px-5 py-3 rounded-2xl 
            backdrop-blur-xl 
            bg-gradient-to-br from-white/70 to-blue-100/50 
            border border-white/60 
            shadow-[0_8px_30px_rgba(0,0,0,0.1)]
            flex items-center gap-3
            transition-all duration-500 ease-out
            hover:translate-x-2 hover:bg-blue-100/80 hover:shadow-[0_15px_35px_rgba(0,0,0,0.25)] hover:border-blue-300
            [animation:floating_6s_ease-in-out_infinite]
            [@keyframes_floating]:[0%_{transform:translateY(0)}_50%_{transform:translateY(-6px)}_100%_{transform:translateY(0)}]
          "
              >
                <div className="relative w-9 h-9 rounded-full bg-white/90 flex items-center justify-center shadow transition-all duration-500 hover:scale-110 hover:shadow-[0_0_12px_rgba(59,130,246,0.5)]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-blue-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <circle cx="12" cy="7" r="4" />
                    <path d="M19 21v-2a4 4 0 00-4-4H9a4 4 0 00-4 4v2" />
                  </svg>
                </div>

                <div>
                  <p className="text-3xl font-extrabold text-blue-700 leading-none">
                    8+
                  </p>
                  <p className="text-sm text-slate-700 font-semibold -mt-1">
                    Years Experience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                className="text-5xl font-bold text-gray-900 mb-6 leading-tight"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                We Believe That Every{" "}
                <span className="text-gradient">Smile Deserves</span> The Best
                Care Possible
              </h2>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We shine with expert dentists, modern technology, and a gentle
                approach. We deliver care that's as comfortable as it is
                effective. From routine check-ups to advanced treatments, we put
                your needs first.
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

      <section className="py-2 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full blur-3xl opacity-50"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-50 rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-600">
                Why Choose Us
              </span>
            </div>
            <h2
              className="text-5xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Why Choose Shree Dental Clinic?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-balance">
              We combine advanced dental technology with compassionate care to
              deliver exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="
    p-8 border-2 border-gray-100 bg-white rounded-2xl shadow-sm
    relative overflow-hidden transition-all duration-300
    hover:-translate-y-2 hover:shadow-2xl hover:border-blue-400
    group
  "
              >
                {/* Beautiful Glow Behind Card on Hover */}
                <div
                  className="
      absolute inset-0 bg-gradient-to-br from-blue-200/40 to-cyan-200/40
      opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500
      pointer-events-none
    "
                ></div>

                {/* Content */}
                <div
                  className={`w-16 h-16 ${feature.bg} rounded-2xl flex items-center justify-center mb-6 
      group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon
                    className={`w-8 h-8 ${feature.color} group-hover:drop-shadow-lg`}
                  />
                </div>

                <h3
                  className="text-xl font-bold text-gray-900 mb-3"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white rounded-full mb-4 shadow-md">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-600">
                Our Services
              </span>
            </div>
            <h2
              className="text-5xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Our Dental Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-balance">
              Comprehensive dental care for all your oral health needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="
    p-8 border-2 border-white bg-white rounded-2xl group overflow-hidden relative
    transform transition-all duration-400 will-change-transform
    hover:-translate-y-3 hover:scale-[1.01] hover:shadow-2xl
  "
              >
                {/* Gradient burst (subtle) */}
                <div
                  aria-hidden="true"
                  className={`
      absolute -top-6 -right-6 w-44 h-44 rounded-full
      bg-gradient-to-br ${service.gradient}
      opacity-10 blur-2xl transform transition-all duration-500
      group-hover:opacity-80 group-hover:scale-125
      pointer-events-none
    `}
                />

                {/* Decorative diagonal light bar */}
                <div
                  aria-hidden="true"
                  className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-white/30 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-400"
                />

                <div className="relative z-10">
                  {/* Icon with pop + halo on hover */}
                  <div
                    className="
        w-20 h-20 rounded-2xl flex items-center justify-center mb-5
        bg-white/60 ring-1 ring-white/30 backdrop-blur-sm
        transition-all duration-400 transform
        group-hover:scale-110 group-hover:rotate-3
        shadow-sm
      "
                  >
                    <div className="relative">
                      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                      <div className="text-5xl">{service.icon}</div>
                    </div>
                  </div>

                  <h3
                    className="text-2xl font-bold text-gray-900 mb-3 relative"
                    style={{ fontFamily: "var(--font-poppins)" }}
                  >
                    {service.title}
                    {/* underline grow on hover */}
                    <span
                      className="block h-0.5 bg-blue-400 rounded-full mt-3 w-10 transition-all duration-400 group-hover:w-20"
                      aria-hidden="true"
                    />
                  </h3>

                  <p className="text-gray-600 mb-5 leading-relaxed transition-colors duration-300 group-hover:text-gray-700">
                    {service.description}
                  </p>

                  <Link
                    href="/services"
                    className="
        inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-sm
        group transition-all duration-300
      "
                    aria-label={`Learn more about ${service.title}`}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1 transition-transform duration-300 transform group-hover:translate-x-2" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-gray-300 hover:border-blue-500 hover:text-blue-600 hover:bg-white bg-white shadow-lg font-semibold h-12 px-8"
            >
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-yellow-50 rounded-full mb-4">
              <Star className="w-4 h-4 text-yellow-600 fill-yellow-600" />
              <span className="text-sm font-semibold text-yellow-600">
                Patient Reviews
              </span>
            </div>
            <h2
              className="text-5xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              What Our Patients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-balance">
              Real experiences from our satisfied patients - verified reviews
              from Google Maps
            </p>
          </div>

          {error && (
            <div className="text-center py-12">
              <p className="text-red-600 mb-4">Error: {error}</p>
              <button
                onClick={() => window.location.reload()}
                className="text-blue-600 underline"
              >
                Reload Page
              </button>
            </div>
          )}

          {isLoading && !error ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
              <p className="text-gray-600 mt-4">Loading reviews...</p>
            </div>
          ) : !error && reviews.length > 0 ? (
            <ReviewsSlider
              reviews={reviews}
              averageRating={averageRating}
              totalReviews={totalReviews}
            />
          ) : !error ? (
            <div className="text-center py-12">
              <p className="text-gray-600">No reviews available yet.</p>
            </div>
          ) : null}

          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/20 text-lg h-14 px-8 bg-transparent font-semibold"
            >
              <Link href="/reviews">Read All Reviews</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-700 via-blue-800 to-blue-900 text-white relative overflow-hidden">
        {/* Soft Glows */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Sparkles className="w-16 h-16 mx-auto mb-6 animate-pulse" />

          <h2
            className="text-5xl font-bold mb-6 text-balance drop-shadow-lg"
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
