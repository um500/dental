"use client";

// import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import emailjs from "@emailjs/browser";
import { CheckCircle } from "lucide-react";
import React, { useRef } from "react";






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
      transition: { duration: 0.45 }, // ✅ perfectly fine
    },
  };

  const heroVariant = {
    hidden: { opacity: 0, y: -8 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const btnTap = {
    whileTap: { scale: 0.97 },
    whileHover: { y: -4 },
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  setSubmitted(true);

  formRef.current?.reset(); // ✅ safe

  setTimeout(() => setSubmitted(false), 4000);
};

  const [meetingScheduled, setMeetingScheduled] = React.useState(false);

  // FAQ state
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  // ✅ Contact form submit success state
  const [submitted, setSubmitted] = React.useState(false);

  const formRef = useRef<HTMLFormElement>(null);



 //const [submitted, setSubmitted] = React.useState(false);
const [loading, setLoading] = React.useState(false);
const SERVICE_ID = "service_ahvtwz8";          // ✅ tumne diya
const TEMPLATE_ID = "template_90fbkix";        // Email Template ID
const PUBLIC_KEY = "ERfaNZy54q0MS5Whe";         // ✅ tumne diya



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
            your questions and provide expert dental care for your entire
            family.
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
          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            {/* LEFT SIDE – 2x2 GRID */}
            <div className="grid sm:grid-cols-2 gap-6 lg:col-span-2">
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

                      {info.link && (
                        <Button
                          asChild
                          variant="link"
                          size="sm"
                          className="px-0 text-blue-600 mt-2"
                        >
                          <a
                            href={info.link}
                            target={
                              info.link.startsWith("http")
                                ? "_blank"
                                : undefined
                            }
                            rel={
                              info.link.startsWith("http")
                                ? "noopener noreferrer"
                                : undefined
                            }
                          >
                            {info.linkText}
                          </a>
                        </Button>
                      )}
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            {/* RIGHT SIDE – BOOK APPOINTMENT */}
            <motion.div variants={cardVariant} className="h-full">
              <Card className="p-6 h-full flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Book an Appointment
                  </h2>
                  <p className="text-sm text-gray-600 mb-6">
                    Book quickly via call, email, or WhatsApp — we’ll confirm
                    your slot within 24 hours.
                  </p>

                  <div className="space-y-4">
                    <motion.div {...btnTap}>
                      <Button
                        asChild
                        size="lg"
                        className="w-full bg-blue-600 hover:bg-blue-700"
                      >
                        <a
                          href="tel:+919471373777"
                          className="flex items-center justify-center"
                        >
                          <Phone className="w-5 h-5 mr-2" />
                          Call to Book
                        </a>
                      </Button>
                    </motion.div>

                    <motion.div {...btnTap}>
                      <Button
                        asChild
                        size="lg"
                        variant="outline"
                        className="w-full"
                      >
                        <a
                          href="mailto:shreedentalclinic804@gmail.com"
                          className="flex items-center justify-center"
                        >
                          <Mail className="w-5 h-5 mr-2" />
                          Email to Book
                        </a>
                      </Button>
                    </motion.div>

                    <motion.div {...btnTap}>
                      <Button
                        asChild
                        size="lg"
                        className="w-full bg-white text-blue-600 border border-blue-200"
                      >
                        <a
                          href="https://wa.me/919471373777"
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center justify-center"
                        >
                          <Navigation className="w-5 h-5 mr-2" />
                          Message on WhatsApp
                        </a>
                      </Button>
                    </motion.div>

                    {/* GOOGLE MEET SCHEDULING */}
                    <motion.div {...btnTap}>
                      <Button
                        size="lg"
                        className="w-full bg-green-600 hover:bg-green-700"
                        onClick={() => {
                          window.open(
                            "https://calendly.com/rajumesh8969457707/30min",
                            "_blank"
                          );
                          setMeetingScheduled(true);
                        }}
                      >
                        📅 Schedule Google Meet
                      </Button>
                    </motion.div>

                    {/* GOOGLE MEET SUCCESS MESSAGE */}
                    <AnimatePresence>
                      {meetingScheduled && (
                        <motion.div
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          className="mt-3 p-3 rounded-lg bg-green-50 border border-green-200 text-green-700 text-sm text-center"
                        >
                          ✅ Google Meet scheduling opened. After selecting date
                          & time, the meeting link will be emailed to both you
                          and the clinic.
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                <p className="text-xs text-gray-500 mt-6">
                  For urgent cases, please call us directly.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form + Map Section */}
<section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
  <div className="max-w-7xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="grid lg:grid-cols-2 gap-8 items-stretch"
    >
      {/* LEFT: CONTACT FORM */}
      <motion.div variants={cardVariant}>
  <Card className="p-6 h-full relative overflow-hidden">
    <h3 className="text-2xl font-bold text-gray-900 mb-1">
      Send Us a Message
    </h3>

    <AnimatePresence>
      {submitted && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="mb-4 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-green-800"
        >
          <strong>✅ Thank you for submitting!</strong>
          <p className="text-sm">
            We have received your message and will contact you shortly.
          </p>
        </motion.div>
      )}
    </AnimatePresence>

    {/* ✅ FORM START */}
<form
  onSubmit={(e) => {
    e.preventDefault();

    const form = e.currentTarget; // ✅ IMPORTANT FIX

    emailjs
      .sendForm(
        "service_ahvtwz8",          // Service ID
        "template_90fbklx",         // Template ID
        form,                       // ✅ use stored form
        "ERfaNZy54q0MS5Whe"         // Public Key
      )
      .then(
        () => {
          setSubmitted(true);
          form.reset(); // ✅ SAFE reset

          setTimeout(() => setSubmitted(false), 4000);
        },
        (error) => {
          console.error("EmailJS Error:", error);
          alert("❌ Message failed. Please try again.");
        }
      );
  }}
  className="space-y-4"
>
  {/* Full Name */}
  <div>
    <label className="block text-sm font-medium mb-1">
      Full Name
    </label>
    <input
      type="text"
      name="name"
      required
      placeholder="Your full name"
      className="w-full rounded-lg border px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>

  {/* Email Address */}
  <div>
    <label className="block text-sm font-medium mb-1">
      Email Address
    </label>
    <input
      type="email"
      name="email"
      required
      placeholder="you@example.com"
      className="w-full rounded-lg border px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>

  {/* Phone Number */}
  <div>
    <label className="block text-sm font-medium mb-1">
      Phone Number
    </label>
    <input
      type="tel"
      name="phone"
      required
      placeholder="+91 XXXXX XXXXX"
      className="w-full rounded-lg border px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>

  {/* Message */}
  <div>
    <label className="block text-sm font-medium mb-1">
      Message
    </label>
    <textarea
      name="message"
      rows={4}
      required
      placeholder="Write your message here..."
      className="w-full rounded-lg border px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500 resize-none"
    />
  </div>

  {/* Submit Button */}
  <button
    type="submit"
    className="w-full rounded-lg bg-blue-600 py-3 text-white font-semibold hover:bg-blue-700 transition"
  >
    Submit Message
  </button>
</form>


    {/* ✅ FORM END */}
  </Card>
</motion.div>


      {/* RIGHT: MAP */}
      <motion.div>
        <Card className="p-6 h-full flex flex-col">
  <h3 className="text-2xl font-bold text-gray-900 mb-4">
    Find Us on Map
  </h3>

  <div className="aspect-[4/3] rounded-xl overflow-hidden border shadow-sm">
    <iframe
  src="https://www.google.com/maps?q=Shree+Dental+Clinic+Kestopur+Kolkata&output=embed"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  title="Shree Dental Clinic Location"
/>

  </div>

  <p className="text-sm text-gray-600 text-center mt-4">
    R. R. Tower, BC-14, Samarpally, Krishnapur, Kestopur, Kolkata – 700102
  </p>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600">
                Find answers to common questions about our dental services and
                clinic.
              </p>
            </motion.div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <motion.div key={idx} variants={cardVariant}>
                  <Card className="p-5 border-2">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {faq.question}
                        </h3>
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
                            className={`text-gray-600 leading-relaxed ${
                              openIndex === idx ? "mt-0" : "overflow-hidden"
                            }`}
                          >
                            {openIndex === idx ? faq.answer : ""}
                          </motion.p>
                        </AnimatePresence>
                      </div>

                      <div className="shrink-0">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() =>
                            setOpenIndex(openIndex === idx ? null : idx)
                          }
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
          <motion.h3 className="text-2xl sm:text-3xl font-bold mb-3">
            Ready to Transform Your Smile?
          </motion.h3>
          <motion.p className="mb-6 text-lg text-blue-50">
            Contact Shree Dental Clinic today. Our friendly team in Kestopur is
            ready to help you.
          </motion.p>

          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div {...btnTap}>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                <a href="tel:+919471373777" className="flex items-center">
                  <Phone className="w-5 h-5 mr-2" />
                  Call +91 9471373777
                </a>
              </Button>
            </motion.div>

            <motion.div {...btnTap}>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 bg-transparent"
              >
                <a
                  href="mailto:shreedentalclinic804@gmail.com"
                  className="flex items-center"
                >
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
