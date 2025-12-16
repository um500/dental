"use client";
import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
//import { Card } from "@/components/ui/card";
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
    {
      icon: Users,
      value: "8+",
      label: "Years Experience",
    },
    {
      icon: Star,
      value: "1000+",
      label: "Happy Patients",
    },
    {
      icon: Award,
      value: "5000+",
      label: "Successful Procedures",
    },
  ];

  // Framer motion variants
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  };

  const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      // ❌ ease removed
    },
  },
};

const slideLeft = {
  hidden: { opacity: 0, x: -30 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      // ❌ ease removed
    },
  },
};

const slideRight = {
  hidden: { opacity: 0, x: 30 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      // ❌ ease removed
    },
  },
};


  const floatImg = {
  animate: { y: [0, -8, 0], rotate: [0, 1, 0] },
  transition: {
    duration: 6,
    repeat: Infinity,
    // ❌ ease removed
  },
};


  return (
    <div className="min-h-screen bg-gradient-to-b from-white/50 to-gray-50">
      {/* Hero Section */}
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
              <motion.div variants={fadeUp} className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-2 w-max">
                <Sparkles className="w-4 h-4" />
                <span>Meet Our Expert Team</span>
              </motion.div>

              <motion.h1 variants={slideLeft} className="text-5xl font-extrabold text-gray-900 leading-tight">
                Where Your Smile is Our Top Priority
              </motion.h1>

              <motion.p variants={fadeUp} className="text-xl text-gray-600 leading-relaxed">
                We are a dental practice dedicated to the well-being and happiness of every single patient.
                Our mission is to provide exceptional, compassionate dental care in a state-of-the-art environment.
              </motion.p>

              <motion.div variants={fadeUp} className="flex items-center space-x-4">
                <div className="flex items-center -space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.05 * i, duration: 0.3 }}
                    >
                      <Star className="w-5 h-5 text-yellow-400" />
                    </motion.div>
                  ))}
                </div>
                <span className="text-gray-700 font-medium">8+ Years of Excellence</span>
              </motion.div>

              <motion.div variants={fadeUp} className="flex items-center gap-4">
                <div className="mb-6 inline-block">
                  <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-cyan-50 shadow-lg">
                    <div className="px-6 py-4 flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full flex items-center justify-center shadow-md">
                        <Award className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide">Award Winner</p>
                        <p className="text-lg font-bold text-gray-900">Best Dental Care</p>
                        <p className="text-sm text-gray-600">Award - 2024</p>
                      </div>
                    </div>
                  </Card>
                </div>

                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 shadow-lg">
                  <Link href="/contact" className="flex items-center">
                    <Phone className="w-5 h-5 mr-2" />
                    Book Consultation
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div className="relative flex justify-center" initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
              <motion.div variants={floatImg} animate={floatImg.animate} transition={floatImg.transition} className="aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white w-full max-w-md">
                <img
                  src="/doctor.jpeg"
                  alt="Professional dentist in white coat with stethoscope smiling confidently in modern clinic"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <motion.div whileHover={{ rotate: 0, scale: 1.02 }} initial={{ rotate: 6 }} className="absolute -top-4 -right-4 z-10">
                <div className="bg-gradient-to-br from-yellow-400 via-amber-500 to-orange-500 rounded-2xl shadow-2xl border-4 border-white p-4 transform hover:rotate-0 transition-transform">
                  <Award className="w-12 h-12 text-white mb-2" />
                  <p className="text-white font-bold text-sm text-center leading-tight">
                    Best Dental Care
                    <br />
                    2024
                  </p>
                </div>
              </motion.div>

              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full blur-2xl opacity-50" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div className="grid md:grid-cols-3 gap-8" variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              const numeric = parseInt(achievement.value.replace(/\D/g, "")) || 0;

              return (
                <motion.div key={index} variants={fadeUp} whileHover={{ y: -6, scale: 1.02 }} transition={{ type: "spring", stiffness: 180 }}>
                  <Card className="p-8 text-center border-2 hover:shadow-xl hover:border-blue-200 transition-all">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    <p className="text-4xl font-bold text-gray-900 mb-2">
                      <CountUp end={numeric} duration={2.2} separator="," />
                      <span className="ml-1">+</span>
                    </p>

                    <p className="text-gray-600 font-medium">{achievement.label}</p>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Qualifications & Specializations */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <motion.div className="grid lg:grid-cols-2 gap-12" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} variants={container}>
            {/* Qualifications */}
            <motion.div variants={slideLeft}>
              <Card className="p-8 border-2 bg-white hover:shadow-xl transition-shadow">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-blue-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Qualifications</h2>
                </div>
                <ul className="space-y-4">
                  {qualifications.map((qual, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <motion.span initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.06 * index }} className="text-green-600 font-bold text-xl flex-shrink-0">✓</motion.span>
                      <span className="text-gray-700 text-lg">{qual}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>

            {/* Specializations */}
            <motion.div variants={slideRight}>
              <Card className="p-8 border-2 bg-white hover:shadow-xl transition-shadow">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-blue-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Specializations</h2>
                </div>
                <ul className="space-y-4">
                  {specializations.map((spec, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <motion.span initial={{ x: -8, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.04 * index }} className="text-blue-600 font-bold text-xl flex-shrink-0">•</motion.span>
                      <span className="text-gray-700 text-lg">{spec}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl font-bold text-gray-900 mb-6">Our Treatment Philosophy</motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-xl text-gray-600 mb-4 leading-relaxed">
            At Shree Dental Clinic, we believe in building trust and confidence through personalized treatment and
            patient education. Our experienced and friendly team is committed to making every visit comfortable and
            stress-free.
          </motion.p>

          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-xl text-gray-600 mb-8 leading-relaxed">
            We understand that dental anxiety is a real concern for many. We have built our practice around creating a
            stress-free and supportive environment with gentle techniques and sedation options to ensure your comfort
            throughout your treatment.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <motion.div whileHover={{ scale: 1.06, y: -4 }} transition={{ type: "spring", stiffness: 200 }}>
              <Card className="p-6 border-2 hover:shadow-lg hover:border-blue-200 transition-all">
                <div className="text-4xl mb-3">
                  <Heart className="w-12 h-12 text-red-500 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Compassionate Care</h3>
                <p className="text-gray-600">Dedicated to well-being and happiness of every patient</p>
              </Card>
            </motion.div>

            <motion.div whileHover={{ scale: 1.06, y: -4 }} transition={{ type: "spring", stiffness: 200 }}>
              <Card className="p-6 border-2 hover:shadow-lg hover:border-blue-200 transition-all">
                <div className="text-4xl mb-3">
                  <Sparkles className="w-12 h-12 text-yellow-500 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Advanced Technology</h3>
                <p className="text-gray-600">Latest and most advanced equipment for efficient care</p>
              </Card>
            </motion.div>

            <motion.div whileHover={{ scale: 1.06, y: -4 }} transition={{ type: "spring", stiffness: 200 }}>
              <Card className="p-6 border-2 hover:shadow-lg hover:border-blue-200 transition-all">
                <div className="text-4xl mb-3">
                  <Users className="w-12 h-12 text-blue-500 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Family Focused</h3>
                <p className="text-gray-600">Warm environment for patients of all ages</p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl font-bold mb-6">Experience the Future of Dentistry</motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-xl mb-8 text-blue-50">
            Schedule a consultation with our team that prioritizes your needs first
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100 shadow-xl">
              <Link href="/contact">Book Appointment Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 bg-transparent">
              <a href="tel:+919471373777" className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                Call +91 9471373777
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
