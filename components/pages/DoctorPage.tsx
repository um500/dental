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
    <div className="min-h-screen w-full overflow-x-hidden bg-gradient-to-b from-white/50 to-gray-50">
      {/* HERO */}
      <section className="pt-40 pb-14 px-3 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            {/* IMAGE */}
            <motion.div
              className="relative flex justify-center items-center order-1 lg:order-2 w-full"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <motion.div
                variants={floatImg}
                animate={floatImg.animate}
                transition={floatImg.transition}
                className="aspect-square w-full max-w-[92%] sm:max-w-md mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
              >
                <img
                  src="/doctor.jpeg"
                  alt="Doctor"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* FLOATING AWARD */}
              <div className="
  absolute 
  -top-6 right-4 
  sm:-top-8 sm:-right-6 
  z-10
">
                <div className="bg-gradient-to-br from-yellow-400 to-orange-500/90 backdrop-blur rounded-2xl shadow-xl border-4 border-white p-4">
                  <Award className="w-10 h-10 text-white mx-auto mb-1" />
                  <p className="text-white font-bold text-sm text-center">
                    Best Dental Care <br /> 2024
                  </p>
                </div>
              </div>
            </motion.div>

            {/* TEXT */}
            <motion.div
              className="space-y-6 order-2 lg:order-1 text-center lg:text-left"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <motion.div
                variants={fadeUp}
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold w-max"
              >
                <Sparkles className="w-4 h-4" />
                Meet Our Expert Team
              </motion.div>

              <motion.h1
                variants={slideLeft}
                className="text-5xl sm:text-5xl font-extrabold text-gray-900"
              >
                Where Your Smile is Our Top Priority
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="text-lg text-gray-600 leading-relaxed"
              >
                We are a dental practice dedicated to the well-being and
                happiness of every patient with compassionate, advanced care.
              </motion.p>

              <motion.div variants={fadeUp} className="flex items-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400" />
                ))}
                <span className="text-gray-700 font-medium">
                  8+ Years of Excellence
                </span>
              </motion.div>

              {/* AWARD + BUTTON FIXED */}
              <motion.div
                variants={fadeUp}
                className="flex flex-col gap-4 sm:flex-row sm:items-center"
              >
                <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-cyan-50 shadow-lg w-full sm:w-auto">
                  <div className="px-6 py-4 flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full flex items-center justify-center">
                      <Award className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-blue-600">
                        Award Winner
                      </p>
                      <p className="font-bold">Best Dental Care</p>
                      <p className="text-sm text-gray-600">2024</p>
                    </div>
                  </div>
                </Card>

                <Button
                  asChild
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto mx-auto sm:mx-0"
                >
                  <Link
                    href="/contact"
                    className="flex justify-center items-center"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Book Consultation
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              const numeric =
                parseInt(achievement.value.replace(/\D/g, "")) || 0;

              return (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 180 }}
                >
                  <Card className="p-8 text-center border-2 hover:shadow-xl hover:border-blue-200 transition-all">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    <p className="text-4xl font-bold text-gray-900 mb-2">
                      <CountUp end={numeric} duration={2.2} separator="," />
                      <span className="ml-1">+</span>
                    </p>

                    <p className="text-gray-600 font-medium">
                      {achievement.label}
                    </p>
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
    <motion.div
      className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch"
      initial="hidden"
      animate="show"
      variants={container}
    >

      {/* ================= QUALIFICATIONS ================= */}
      <motion.div variants={slideLeft} className="w-full h-full">
        <Card className="p-8 border-2 bg-white hover:shadow-xl transition-shadow w-full h-full flex flex-col">
          
          {/* Header */}
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              Qualifications
            </h2>
          </div>

          {/* Content */}
          <ul className="space-y-4 flex-1">
            {qualifications.map((qual, index) => (
              <li key={qual} className="flex items-start space-x-3">
                <motion.span
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.06 * index }}
                  className="text-blue-600 font-bold text-xl flex-shrink-0"
                >
                  •
                </motion.span>
                <span className="text-gray-700 text-lg">
                  {qual}
                </span>
              </li>
            ))}
          </ul>

        </Card>
      </motion.div>

      {/* ================= SPECIALIZATIONS ================= */}
      <motion.div variants={slideRight} className="w-full h-full">
        <Card className="p-8 border-2 bg-white hover:shadow-xl transition-shadow w-full h-full flex flex-col">
          
          {/* Header */}
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              Specializations
            </h2>
          </div>

          {/* Content */}
          <ul className="space-y-4 flex-1">
            {specializations.map((spec, index) => (
              <li key={spec} className="flex items-start space-x-3">
                <motion.span
                  initial={{ x: -8, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.04 * index }}
                  className="text-blue-600 font-bold text-xl flex-shrink-0"
                >
                  •
                </motion.span>
                <span className="text-gray-700 text-lg">
                  {spec}
                </span>
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
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 mb-6"
          >
            Our Treatment Philosophy
          </motion.h2>
          <motion.p
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  className="text-xl text-gray-600 mb-4 leading-relaxed text-justify max-w-3xl mx-auto"
>
  At Shree Dental Clinic, we believe in building trust and confidence
  through personalized treatment and patient education. Our
  experienced and friendly team is committed to making every visit
  comfortable and stress-free.
</motion.p>

<motion.p
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  className="text-xl text-justify text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto"
>
  We understand that dental anxiety is a real concern for many. We
  have built our practice around creating a stress-free and supportive
  environment with gentle techniques and sedation options to ensure
  your comfort throughout your treatment.
</motion.p>


          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <motion.div
              whileHover={{ scale: 1.06, y: -4 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Card className="p-6 border-2 hover:shadow-lg hover:border-blue-200 transition-all">
                <div className="text-4xl mb-3">
                  <Heart className="w-12 h-12 text-red-500 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Compassionate Care
                </h3>
                <p className="text-gray-600">
                  Dedicated to well-being and happiness of every patient
                </p>
              </Card>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.06, y: -4 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Card className="p-6 border-2 hover:shadow-lg hover:border-blue-200 transition-all">
                <div className="text-4xl mb-3">
                  <Sparkles className="w-12 h-12 text-yellow-500 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Advanced Technology
                </h3>
                <p className="text-gray-600">
                  Latest and most advanced equipment for efficient care
                </p>
              </Card>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.06, y: -4 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Card className="p-6 border-2 hover:shadow-lg hover:border-blue-200 transition-all">
                <div className="text-4xl mb-3">
                  <Users className="w-12 h-12 text-blue-500 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Family Focused
                </h3>
                <p className="text-gray-600">
                  Warm environment for patients of all ages
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-6"
          >
            Experience the Future of Dentistry
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xl mb-8 text-blue-50"
          >
            Schedule a consultation with our team that prioritizes your needs
            first
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-white text-blue-600 hover:bg-gray-100 shadow-xl"
            >
              <Link href="/contact">Book Appointment Now</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 bg-transparent"
            >
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
