"use client";
import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
  Award,
  GraduationCap,
  Briefcase,
  Star,
  Phone,
  Users,
  Heart,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function DoctorPage() {
  const qualifications = [
    "Bachelor of Dental Surgery (BDS)",
    "Advanced Certificate in Endodontics",
    "Certified Implantologist",
    "Member - Indian Dental Association",
  ];

  const specializations = [
    "Cosmetic Dentistry",
    "Dental Implants",
    "Root Canal Treatment (RCT)",
    "Orthodontics & Braces",
    "Crown & Bridge Work",
    "Preventive & Family Dentistry",
  ];

  const achievements = [
    { icon: Users, value: "8+", label: "Years Experience" },
    { icon: Star, value: "1000+", label: "Happy Patients" },
    { icon: Award, value: "5000+", label: "Successful Procedures" },
  ];

  /* ---------- Framer Motion Variants (FIXED) ---------- */

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }, // ✅ ease removed
    },
  };

  const slideLeft = {
    hidden: { opacity: 0, x: -30 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7 }, // ✅ ease removed
    },
  };

  const slideRight = {
    hidden: { opacity: 0, x: 30 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7 }, // ✅ ease removed
    },
  };

  const floatImg = {
    animate: { y: [0, -8, 0], rotate: [0, 1, 0] },
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "linear" as const, // ✅ ONLY place string is allowed
    },
  };

  /* --------------------------------------------------- */

  return (
    <div className="min-h-screen bg-gradient-to-b from-white/50 to-gray-50">
      {/* HERO */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-6"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={container}
            >
              <motion.div
                variants={fadeUp}
                className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-2 w-max"
              >
                <Sparkles className="w-4 h-4" />
                <span>Meet Our Expert Team</span>
              </motion.div>

              <motion.h1
                variants={slideLeft}
                className="text-5xl font-extrabold text-gray-900 leading-tight"
              >
                Where Your Smile is Our Top Priority
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="text-xl text-gray-600 leading-relaxed"
              >
                We are a dental practice dedicated to the well-being and happiness
                of every single patient. Our mission is to provide exceptional,
                compassionate dental care in a state-of-the-art environment.
              </motion.p>

              <motion.div variants={fadeUp} className="flex items-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 shadow-lg"
                >
                  <Link href="/contact" className="flex items-center">
                    <Phone className="w-5 h-5 mr-2" />
                    Book Consultation
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* IMAGE */}
            <motion.div
              className="relative flex justify-center"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <motion.div
                variants={floatImg}
                animate={floatImg.animate}
                transition={floatImg.transition}
                className="aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white w-full max-w-md"
              >
                <img
                  src="/doctor.jpeg"
                  alt="Professional dentist smiling confidently"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {achievements.map((a, i) => {
              const Icon = a.icon;
              const num = parseInt(a.value.replace(/\D/g, "")) || 0;
              return (
                <motion.div key={i} variants={fadeUp}>
                  <Card className="p-8 text-center border-2">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-4xl font-bold">
                      <CountUp end={num} duration={2.2} />+
                    </p>
                    <p className="text-gray-600">{a.label}</p>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
