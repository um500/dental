"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Address",
      content:
        "Shree Dental Clinic\nR. R. Tower, BC-14, Samarpally\nKrishnapur, Kestopur\nKolkata - 700102\nWest Bengal, India",
      link: "https://maps.app.goo.gl/AsZ19tucWvQJxFzo8",
      linkText: "Get Directions on Google Maps",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+91 9471373777",
      link: "tel:+919471373777",
      linkText: "Tap to Call Now",
    },
    {
      icon: Mail,
      title: "Email Us",
      content: "shreedentalclinic804@gmail.com",
      link: "mailto:shreedentalclinic804@gmail.com",
      linkText: "Send Email",
    },
    {
      icon: Clock,
      title: "Clinic Timings",
      content:
        "Monday - Sunday\n10:30 AM - 9:30 PM\n\nOpen 7 Days a Week\nWalk-ins Welcome",
    },
  ];

  const faqs = [
    {
      question: "Do I need to book an appointment?",
      answer:
        "While walk-ins are welcome, we recommend booking an appointment to avoid waiting times. You can call us directly or message on WhatsApp.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept cash, credit/debit cards, UPI, and all major digital payment methods. EMI options are also available for select treatments.",
    },
  ];

  // Motion variants
  const page = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { staggerChildren: 0.08 } },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 18, scale: 0.995 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.45 }, // ✅ FIXED (ease removed)
    },
  };

  const heroVariant = {
    hidden: { opacity: 0, y: -8 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const btnTap = { whileTap: { scale: 0.97 }, whileHover: { y: -4 } };

  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={page}
      className="min-h-screen bg-white"
    >
      {/* HERO */}
      <motion.section
        variants={heroVariant}
        className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-cyan-50"
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Visit Shree Dental Clinic
          </motion.h1>
          <motion.p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            Located at R. R. Tower in Kestopur, Kolkata. We are here to answer your
            questions and provide expert dental care.
          </motion.p>
        </div>
      </motion.section>

      {/* CONTACT CARDS */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <motion.div key={index} variants={cardVariant} whileHover={{ y: -6, scale: 1.02 }}>
                <Card className="p-6 border-2 h-full">
                  <Icon className="w-6 h-6 text-blue-600 mb-4" />
                  <h3 className="font-semibold mb-2">{info.title}</h3>
                  <p className="text-sm whitespace-pre-line text-gray-600">
                    {info.content}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div key={idx} variants={cardVariant}>
              <Card className="p-5">
                <h3 className="font-semibold">{faq.question}</h3>
                <AnimatePresence>
                  {openIndex === idx && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-sm text-gray-600 mt-2"
                    >
                      {faq.answer}
                    </motion.p>
                  )}
                </AnimatePresence>
                <Button
                  size="sm"
                  className="mt-3"
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                >
                  {openIndex === idx ? "Hide" : "Read"}
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
