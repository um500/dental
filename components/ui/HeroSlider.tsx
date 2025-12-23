"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  MapPin,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    image: "/slide.png",
    title: "Pain While Eating or Drinking?",
    desc: "Experience painless dental treatment with advanced technology and gentle care.",
    btn: "Book Appointment",
    link: "/contact",
  },
  {
    image: "/slide 1.png",
    title: "Scared of Dental Treatment?",
    desc: "We understand dental anxiety. Calm environment and patient-first care.",
    btn: "Explore Treatments",
    link: "/services",
  },
  {
    image: "/slide 2.png",
    title: "Missing Teeth or Smile Issues?",
    desc: "From dental implants to cosmetic dentistry — everything under one roof.",
    btn: "View Services",
    link: "/services",
  },
  {
    image: "/slide 3.png",
    title: "Your Smile is in Safe Hands",
    desc: "Trusted by thousands of families in Kestopur & nearby areas.",
    btn: "Read Reviews",
    link: "/reviews",
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  // ✅ AUTO SLIDE — FIXED DEPENDENCY
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]); // 🔥 IMPORTANT FIX

  // MANUAL CONTROLS
  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-[98vh] w-full overflow-hidden">
      {/* SLIDER */}
      <div
        className="flex h-full transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div key={i} className="relative min-w-full h-full">
            <img
              src={slide.image}
              alt="Dental Clinic"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/60" />

            <div className="absolute inset-0 z-20 flex items-center">
              <div className="max-w-7xl mx-auto px-6 w-full">
                <div className="max-w-2xl text-white space-y-6">
                  <div className="select-none inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full backdrop-blur text-sm">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    4.9 Google Rating • 250+ Reviews
                  </div>

                  <h1 className="text-4xl md:text-5xl lg:text-6xl  select-none">
                    {slide.title}
                  </h1>

                  <p className="text-lg md:text-xl text-white/90">
                    {slide.desc}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button
                      asChild
                      size="lg"
                      className="bg-blue-600 hover:bg-blue-700 text-white h-14 px-8 text-lg font-semibold rounded-xl"
                    >
                      <Link href={slide.link}>
                        {slide.btn}
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Link>
                    </Button>

                    <div className="inline-flex items-center gap-2 bg-black/40 px-5 py-3 rounded-xl backdrop-blur text-sm">
                      <MapPin className="w-4 h-4 text-blue-400" />
                      BC-14, Samarpally, Kestopur, Kolkata – 700102
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CONTROLS */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/40 p-3 rounded-full"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/40 p-3 rounded-full"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>
    </section>
  );
}
