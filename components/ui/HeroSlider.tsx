"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    image: "/slide.png",
    title: "Looking for Painless Dental Treatment?",
    desc: "Advanced equipment and gentle care for stress-free dentistry.",
    btn: "Book Appointment",
    link: "/contact",
  },
  {
    image: "/slide 1.png",
    title: "Dental Anxiety? We Understand.",
    desc: "Calm environment with patient-first treatment approach.",
    btn: "Explore Treatments",
    link: "/services",
  },
  {
    image: "/slide 2.png",
    title: "Modern Technology. Trusted Dentists.",
    desc: "Cosmetic, implants & family dentistry under one roof.",
    btn: "View Services",
    link: "/services",
  },
  {
    image: "/slide 3.png",
    title: "Your Smile is in Safe Hands",
    desc: "Thousands of happy smiles from Kestopur & nearby areas.",
    btn: "Read Reviews",
    link: "/reviews",
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[100vh] w-full overflow-hidden">
      {/* Background Images */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === index ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.image}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl text-white space-y-6 animate-fadeIn">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              {slides[index].title}
            </h1>

            <p className="text-lg text-white/90">
              {slides[index].desc}
            </p>

            <Button
              asChild
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white h-14 px-8 text-lg font-semibold"
            >
              <Link href={slides[index].link}>
                {slides[index].btn}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
