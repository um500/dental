"use client";

// import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import emailjs from "@emailjs/browser";
import { Plus, Minus } from "lucide-react";
import React, { useRef } from "react";

/* ================= COMMON TAILWIND CLASSES ================= */

/* Sections */
export const sectionPad = "py-16 px-4 sm:px-6 lg:px-8";
export const sectionPadSm = "py-12 px-4 sm:px-6 lg:px-8";
export const sectionPadLg = "py-24 px-4 sm:px-6 lg:px-8";

/* Containers */
export const container = "max-w-7xl mx-auto";
export const containerMax = "max-w-7xl mx-auto";
export const containerMd = "max-w-4xl mx-auto";

/* Grids */
export const gridTwo = "grid lg:grid-cols-2 gap-8 items-stretch";

/* Cards */
export const cardBase =
  "p-6 h-full rounded-2xl border border-gray-200 bg-white";
export const cardHover = "transition-all duration-300 hover:shadow-lg";

/* Hero */
export const heroSection =
  "pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-cyan-50";
export const heroTitle =
  "text-4xl sm:text-4xl font-extrabold text-gray-900 mb-4 select-none";
export const heroDesc = "text-lg text-gray-600 max-w-3xl mx-auto mb-6";
export const heroBtnPrimary = "bg-blue-600 hover:bg-blue-700 shadow-lg";
export const heroBtnOutline = "border-2 bg-transparent";
export const heroBtnContent = "flex items-center";

/* Contact Info */
export const infoCard = "p-6 border-2 h-full flex flex-col justify-between";
export const infoIconWrap =
  "w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center shrink-0";
export const infoTitle = "text-lg font-semibold text-gray-900 mb-1";
export const infoText =
  "text-gray-600 whitespace-pre-line text-sm leading-relaxed mb-4";

/* Appointment */
export const bookTitle = "text-2xl font-bold text-gray-900 mb-2 select-none";
export const bookDesc = "text-sm text-gray-600 mb-6";
export const btnFullBlue = "w-full bg-blue-600 hover:bg-blue-700";
export const btnFullOutline = "w-full";
export const btnFullWhite =
  "w-full bg-white text-blue-600 border border-blue-200";
export const meetSuccess =
  "mt-3 p-3 rounded-lg bg-green-50 border border-green-200 text-green-700 text-sm text-center";

/* Contact Form */
export const formTitle = "text-2xl font-bold text-gray-900 mb-1 select-none";
export const successBox =
  "mb-4 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-green-800";
export const labelBase = "block text-sm font-medium mb-1";
export const inputBase =
  "w-full rounded-lg border px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500";
export const textareaBase =
  "w-full rounded-lg border px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500 resize-none";
export const submitBtn =
  "w-full rounded-lg bg-blue-600 py-3 text-white font-semibold hover:bg-blue-700 transition";

/* Map */
export const mapWrap =
  "aspect-[4/3] rounded-xl overflow-hidden border shadow-sm";

/* FAQ */
export const faqSection =
  "py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-50 via-white to-gray-50";
export const faqHeading = "text-4xl md:text-5xl font-bold text-gray-900 mb-4";
export const faqSubText = "text-gray-600 text-lg max-w-2xl mx-auto";
export const faqCard =
  "bg-white/90 backdrop-blur border border-gray-200 rounded-2xl px-6 py-5 transition-all duration-300 hover:shadow-lg";
export const faqQuestion = "text-lg font-semibold text-gray-900";
export const faqAnswer = "mt-4 text-gray-600 leading-relaxed";
export const faqIconBase =
  "flex h-10 w-10 items-center justify-center rounded-full border transition";
export const faqIconOpen = "bg-blue-600 text-white border-blue-600";
export const faqIconClose = "bg-gray-100 text-gray-700 border-gray-200";

/* Small CTA */
export const ctaBox =
  "w-full max-w-md rounded-2xl border border-gray-200 bg-white/80 backdrop-blur px-8 py-8 text-center shadow-sm";
export const ctaTitle = "text-xl font-semibold text-gray-900 mb-2";
export const ctaText = "text-gray-600 text-sm mb-5";
export const ctaBtn =
  "inline-flex items-center justify-center rounded-md bg-green-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-green-700 transition shadow";

/* Final CTA */
export const finalCtaSection =
  "py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-cyan-600 text-white";
export const finalCtaTitle = "text-2xl sm:text-3xl font-bold mb-3 select-none";
export const finalCtaDesc = "mb-6 text-lg text-blue-50";
export const finalCtaBtnWrap = "flex flex-col sm:flex-row gap-4 justify-center";
export const finalCtaBtnWhite = "bg-white text-blue-600 hover:bg-gray-100";
export const finalCtaBtnOutline =
  "border-2 border-white text-white hover:bg-white/10 bg-transparent";
export const finalCtaBtnContent = "flex items-center";

export const faqContainer = "max-w-4xl mx-auto";

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
    {
      question: "Do dental treatments hurt?",
      answer:
        "Most treatments at Shree Dental Clinic are painless and comfortable. We use gentle techniques, local anesthesia, and advanced equipment to ensure minimal discomfort. Sedation options are also available for anxious patients.",
    },
    {
      question: "How often should I visit the dentist?",
      answer:
        "It’s recommended to visit the dentist every six months for a regular check-up and cleaning. Regular visits help prevent cavities, gum problems, and detect any issues early.",
    },
    {
      question: "How can I keep my teeth healthy at home?",
      answer:
        "Brush your teeth twice daily, floss once a day, limit sugary foods, and rinse with an antiseptic mouthwash. Regular dental visits help maintain strong and healthy teeth for life.",
    },
    {
      question: "How long do dental implants last?",
      answer:
        "With proper care and regular dental check-ups, dental implants can last 15–25 years or even longer. Good oral hygiene plays a big role in their longevity.",
    },
    {
      question: "What is cosmetic dentistry and who can benefit from it?",
      answer:
        "Cosmetic dentistry focuses on improving the appearance of your teeth and smile. Treatments like teeth whitening, veneers, and smile makeovers can benefit anyone who wants a brighter, more confident smile.",
    },
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
  const contactFormRef = useRef<HTMLDivElement | null>(null);
  // ✅ Contact form submit success state
  const [submitted, setSubmitted] = React.useState(false);

  const formRef = useRef<HTMLFormElement>(null);

  //const [submitted, setSubmitted] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const SERVICE_ID = "service_ahvtwz8"; // ✅ tumne diya
  const TEMPLATE_ID = "template_90fbkix"; // Email Template ID
  const PUBLIC_KEY = "ERfaNZy54q0MS5Whe"; // ✅ tumne diya

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={page}
      className="min-h-screen bg-white"
    >
      {/* Hero */}
      <motion.section variants={heroVariant} className={heroSection}>
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 className={heroTitle}>Visit Shree Dental Clinic</motion.h1>

          <motion.p className={heroDesc}>
            Located at R. R. Tower in Kestopur, Kolkata. We are here to answer
            your questions and provide expert dental care for your entire
            family.
          </motion.p>

          <motion.div className="flex flex-wrap gap-4 justify-center">
            <motion.div {...btnTap}>
              <Button asChild size="lg" className={heroBtnPrimary}>
                <a href="tel:+919471373777" className={heroBtnContent}>
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
                className={heroBtnOutline}
              >
                <a
                  href="https://maps.app.goo.gl/AsZ19tucWvQJxFzo8"
                  target="_blank"
                  rel="noreferrer"
                  className={heroBtnContent}
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
      <section className={sectionPadSm}>
        <div className={containerMax}>
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
                    <Card className={infoCard}>
                      <div className="flex items-start gap-4">
                        <div className={infoIconWrap}>
                          <Icon className="w-6 h-6 text-blue-600" />
                        </div>

                        <div className="flex-1">
                          <h3 className={infoTitle}>{info.title}</h3>
                          <p className={infoText}>{info.content}</p>
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
                  <h2 className={bookTitle}>Book an Appointment & Query</h2>
                  <p className={bookDesc}>
                    Book quickly via call, email, or WhatsApp — we’ll confirm
                    your slot within 24 hours.
                  </p>

                  <div className="space-y-4">
                    <motion.div {...btnTap}>
                      <Button asChild size="lg" className={btnFullBlue}>
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
                        className={btnFullOutline}
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
                      <Button asChild size="lg" className={btnFullWhite}>
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

                    {/* GOOGLE MEET */}
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

                    {/* GOOGLE MEET SUCCESS */}
                    <AnimatePresence>
                      {meetingScheduled && (
                        <motion.div
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          className={meetSuccess}
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
      <section ref={contactFormRef} className={`${sectionPad} bg-gray-50`}>
        <div className={container}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={gridTwo}
          >
            {/* LEFT: CONTACT FORM */}
            <motion.div variants={cardVariant}>
              <Card className={`${cardBase} relative overflow-hidden`}>
                <h3 className={formTitle}>Connect Us & Query</h3>

                <AnimatePresence>
                  {submitted && (
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4 }}
                      className={successBox}
                    >
                      <strong>✅ Thank you for submitting!</strong>
                      <p className="text-sm">
                        We have received your message and will contact you
                        shortly.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* FORM */}
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const form = e.currentTarget;

                    emailjs
                      .sendForm(
                        "service_ahvtwz8",
                        "template_90fbklx",
                        form,
                        "ERfaNZy54q0MS5Whe"
                      )
                      .then(
                        () => {
                          setSubmitted(true);
                          form.reset();
                          setTimeout(() => setSubmitted(false), 4000);
                        },
                        () => {
                          alert("❌ Message failed. Please try again.");
                        }
                      );
                  }}
                  className="space-y-4"
                >
                  <div>
                    <label className={labelBase}>Full Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your full name"
                      className={inputBase}
                    />
                  </div>

                  <div>
                    <label className={labelBase}>Email Address</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="you@example.com"
                      className={inputBase}
                    />
                  </div>

                  <div>
                    <label className={labelBase}>Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+91 XXXXX XXXXX"
                      className={inputBase}
                    />
                  </div>

                  <div>
                    <label className={labelBase}>Message</label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      placeholder="Write your message here..."
                      className={textareaBase}
                    />
                  </div>

                  <button type="submit" className={submitBtn}>
                    Submit Message
                  </button>
                </form>
              </Card>
            </motion.div>

            {/* RIGHT: MAP */}
            <motion.div>
              <Card className={cardBase}>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 select-none">
                  Find Us on Map
                </h3>

                <div className={mapWrap}>
                  <iframe
                    src="https://www.google.com/maps?q=Shree+Dental+Clinic+Kestopur+Kolkata&output=embed"
                    width="100%"
                    height="100%"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Shree Dental Clinic Location"
                  />
                </div>

                <p className="text-sm text-gray-600 text-center mt-4">
                  R. R. Tower, BC-14, Samarpally, Krishnapur, Kestopur, Kolkata
                  – 700102
                </p>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className={faqSection}>
        <div className={faqContainer}>
          {/* HEADING */}
          <div className="text-center mb-14">
            <h2 className={faqHeading}>Frequently Asked Questions</h2>
            <p className={faqSubText}>
              Clear answers to common questions about our dental services and
              treatments.
            </p>
          </div>

          {/* FAQ LIST */}
          <div className="space-y-5">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;

              return (
                <Card key={idx} className={faqCard}>
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between text-left"
                  >
                    <h3 className={faqQuestion}>{faq.question}</h3>

                    <span
                      className={`${faqIconBase} ${
                        isOpen ? faqIconOpen : faqIconClose
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="h-5 w-5" />
                      ) : (
                        <Plus className="h-5 w-5" />
                      )}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className={faqAnswer}>{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              );
            })}
          </div>

          {/* SMALL CTA BOX */}
          <div className="mt-20 flex justify-center">
            <div className={ctaBox}>
              <h3 className={ctaTitle}>Still have questions?</h3>

              <p className={ctaText}>
                Contact us for more information or personalized dental guidance.
              </p>

              <button
                onClick={() =>
                  contactFormRef?.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  })
                }
                className={ctaBtn}
              >
                Contact
              </button>
            </div>
          </div>
        </div>

        {/* 👇 FORM REF TARGET (unchanged) */}
        <div ref={contactFormRef} />
      </section>

      <motion.section variants={heroVariant} className={finalCtaSection}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.h3 className={finalCtaTitle}>
            Ready to Transform Your Smile?
          </motion.h3>

          <motion.p className={finalCtaDesc}>
            Contact Shree Dental Clinic today. Our friendly team in Kestopur is
            ready to help you.
          </motion.p>

          <motion.div className={finalCtaBtnWrap}>
            <motion.div {...btnTap}>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className={finalCtaBtnWhite}
              >
                <a href="tel:+919471373777" className={finalCtaBtnContent}>
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
                className={finalCtaBtnOutline}
              >
                <a
                  href="mailto:shreedentalclinic804@gmail.com"
                  className={finalCtaBtnContent}
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
