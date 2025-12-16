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
    // ... other FAQs unchanged
  ];

  // motion variants
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
      transition: { duration: 0.45, ease: "easeOut" },
    },
  };

  const heroVariant = {
    hidden: { opacity: 0, y: -8 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const btnTap = { whileTap: { scale: 0.97 }, whileHover: { y: -4 } };

  // FAQ state
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={page}
      className="min-h-screen bg-white"
    >
      {/* Hero */}
      <motion.section
        variants={heroVariant}
        className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-cyan-50"
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Visit Shree Dental Clinic
          </motion.h1>
          <motion.p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            Located at R. R. Tower in Kestopur, Kolkata. We are here to answer
            your questions and provide expert dental care for your entire family.
          </motion.p>

          <motion.div className="flex flex-wrap gap-4 justify-center">
            <motion.div {...btnTap}>
              <Button
                asChild
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 shadow-lg"
              >
                <a href="tel:+919471373777" className="flex items-center">
                  <Phone className="w-5 h-5 mr-2" />
                  Call: +91 9471373777
                </a>
              </Button>
            </motion.div>

            <motion.div {...btnTap}>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 bg-transparent"
              >
                <a
                  href="https://maps.app.goo.gl/AsZ19tucWvQJxFzo8"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center"
                >
                  <MapPin className="w-5 h-5 mr-2" />
                  R. R. Tower, Kestopur
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Info Cards */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* grid items stretch to equal height */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={index}
                  variants={cardVariant}
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 220 }}
                >
                  <Card className="p-6 border-2 h-full flex flex-col justify-between">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
                        <Icon className="w-6 h-6 text-blue-600" />
                      </div>

                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                          {info.title}
                        </h3>
                        <p className="text-gray-600 whitespace-pre-line text-sm leading-relaxed mb-4">
                          {info.content}
                        </p>
                      </div>
                    </div>

                    {info.link ? (
                      <div className="mt-4">
                        <Button asChild variant="link" size="sm" className="px-0 text-blue-600">
                          <a
                            href={info.link}
                            target={info.link.startsWith("http") ? "_blank" : undefined}
                            rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                          >
                            {info.linkText}
                          </a>
                        </Button>
                      </div>
                    ) : null}
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Map + Appointment CTA (Form removed) */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid lg:grid-cols-2 gap-10 items-start"
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          >
            {/* Left: CTA card (replaces form) */}
            <motion.div variants={cardVariant}>
              <Card className="p-6 h-full flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Book an Appointment</h2>
                  <p className="text-sm text-gray-600 mb-4">
                    We removed the inline form to keep the site simple. Book quickly via call or email — we'll confirm your slot within 24 hours.
                  </p>

                  <div className="space-y-3">
                    <motion.div {...btnTap}>
                      <Button asChild size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                        <a href="tel:+919471373777" className="flex items-center">
                          <Phone className="w-5 h-5 mr-2" />
                          Call to Book
                        </a>
                      </Button>
                    </motion.div>

                    <motion.div {...btnTap}>
                      <Button asChild size="lg" variant="outline" className="w-full">
                        <a href="mailto:shreedentalclinic804@gmail.com" className="flex items-center">
                          <Mail className="w-5 h-5 mr-2" />
                          Email to Book
                        </a>
                      </Button>
                    </motion.div>

                    <motion.div {...btnTap}>
                      <Button asChild size="lg" className="w-full bg-white text-blue-600 border border-blue-200">
                        <a href="https://wa.me/919471373777" target="_blank" rel="noreferrer" className="flex items-center">
                          <Navigation className="w-5 h-5 mr-2" />
                          Message on WhatsApp
                        </a>
                      </Button>
                    </motion.div>
                  </div>
                </div>

                <p className="text-xs text-gray-500 mt-6">
                  Note: If you prefer, you can still call us directly. For urgent cases, call immediately.
                </p>
              </Card>
            </motion.div>

            {/* Right: Map */}
            <motion.div variants={cardVariant}>
              <Card className="p-6 h-full flex flex-col">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Find Us on Map</h3>

                <motion.div
                  initial={{ opacity: 0, scale: 0.995 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg mb-6 border-2 border-gray-200"
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.247518589893!2d88.42928987766247!3d22.593117079472008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e3563d6fd523%3A0xeb6d44dd23c9474b!2sSHREE%20DENTAL%20CLINIC!5e0!3m2!1sen!2sin!4v1735739900000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Shree Dental Clinic - R. R. Tower, Kestopur"
                  />
                </motion.div>

                <div className="mt-auto space-y-3">
                  <motion.div {...btnTap}>
                    <Button asChild size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                      <a
                        href="https://maps.app.goo.gl/Vf1sMBfoDavD9AQKA"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center"
                      >
                        <Navigation className="w-5 h-5 mr-2" />
                        Get Directions to R. R. Tower
                      </a>
                    </Button>
                  </motion.div>

                  <p className="text-sm text-gray-600 text-center">
                    R. R. Tower, BC-14, Samarpally, Krishnapur, Kestopur, Kolkata - 700102
                  </p>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.06 } } }}
          >
            <motion.div variants={heroVariant} className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Frequently Asked Questions</h2>
              <p className="text-gray-600">Find answers to common questions about our dental services and clinic.</p>
            </motion.div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <motion.div key={idx} variants={cardVariant}>
                  <Card className="p-5 border-2">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                        <AnimatePresence initial={false}>
                          <motion.p
                            key={openIndex === idx ? "open" : "closed"}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{
                              height: openIndex === idx ? "auto" : 0,
                              opacity: openIndex === idx ? 1 : 0,
                            }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35 }}
                            className={`text-gray-600 leading-relaxed ${openIndex === idx ? "mt-0" : "overflow-hidden"}`}
                          >
                            {openIndex === idx ? faq.answer : ""}
                          </motion.p>
                        </AnimatePresence>
                      </div>

                      <div className="shrink-0">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                          className="h-10 px-3"
                        >
                          {openIndex === idx ? "Hide" : "Read"}
                        </Button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <motion.section
        variants={heroVariant}
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-cyan-600 text-white"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h3 className="text-2xl sm:text-3xl font-bold mb-3">Ready to Transform Your Smile?</motion.h3>
          <motion.p className="mb-6 text-lg text-blue-50">Contact Shree Dental Clinic today. Our friendly team in Kestopur is ready to help you.</motion.p>

          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div {...btnTap}>
              <Button asChild size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                <a href="tel:+919471373777" className="flex items-center">
                  <Phone className="w-5 h-5 mr-2" />
                  Call +91 9471373777
                </a>
              </Button>
            </motion.div>

            <motion.div {...btnTap}>
              <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 bg-transparent">
                <a href="mailto:shreedentalclinic804@gmail.com" className="flex items-center">
                  <Mail className="w-5 h-5 mr-2" />
                  shreedentalclinic804@gmail.com
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
}
