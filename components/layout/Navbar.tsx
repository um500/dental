"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setIsOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Our Doctor", href: "/doctor" },
    { name: "Reviews", href: "/reviews" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-xl shadow-lg border-b border-gray-200"
          : "bg-[#eaf6ff]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* LOGO PART — DO NOT TOUCH */}
          <Link href="/" className="flex items-center space-x-3 flex-shrink-0">
            <span className="relative w-28 h-10 sm:w-36 sm:h-14 block">
              <Image
                src="/logo.png"
                alt="Shree Dental Clinic Logo"
                fill
                sizes="144px"
                className="object-contain"
                priority
              />
            </span>
          </Link>

          {/* DESKTOP NAV — improved text size & style */}
          <div className="hidden lg:flex items-center space-x-2">
            {navigation.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative px-4 py-2 rounded-lg transition-all duration-200 group ${
                    active ? "text-white" : "text-slate-800"
                  }`}
                >
                  {/* Highlight pill */}
                  {active && (
                    <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 shadow-lg -z-10"></span>
                  )}

                  <span className="text-lg font-semibold">{item.name}</span>

                  {/* Hover underline */}
                  {!active && (
                    <span className="absolute left-1/2 -translate-x-1/2 -bottom-[3px] w-0 h-[2px] bg-blue-600 rounded-full transition-all duration-300 group-hover:w-10"></span>
                  )}
                </Link>
              );
            })}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* CALL BUTTON */}
            <a
              href="tel:+919471373777"
              className="group flex items-center gap-2 px-4 py-2 rounded-md 
               bg-gradient-to-r from-blue-500 to-indigo-500 
               border border-gray-200 shadow-sm
               transition-all duration-300 
               hover:bg-[#e0f7ff] hover:border-teal-300 hover:shadow-md"
            >
              <Phone className="w-4 h-4 text-white transition-colors duration-300 " />
              <span className="font-semibold text-white transition-colors duration-300 ">
                +91 9471373777
              </span>
            </a>

            {/* BOOK NOW BUTTON */}
            <Link
              href="/contact"
              className="group flex items-center gap-2 px-4 py-2 rounded-md 
               bg-gradient-to-r from-blue-500 to-indigo-500 
               border border-gray-200 shadow-sm
               transition-all duration-300 
               hover:bg-[#e0f7ff] hover:border-teal-300 hover:shadow-md"
            >
              <span className="font-semibold text-white transition-colors duration-300 ">
                Book Now
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen((s) => !s)}
            className="lg:hidden p-2.5 rounded-md text-slate-700 hover:bg-white/40"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40">
          <div className="absolute top-16 left-0 right-0 bg-white rounded-b-2xl shadow-xl px-6 py-6 space-y-4">
            {navigation.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-lg ${
                    active
                      ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-md"
                      : "text-slate-800 hover:bg-slate-100"
                  }`}
                >
                  <span className="text-xl font-semibold">{item.name}</span>
                </Link>
              );
            })}

            {/* Call */}
            <a
              href="tel:+919471373777"
              className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white shadow-sm text-slate-800 border border-gray-200"
            >
              <Phone className="w-5 h-5" />
              <span className="font-semibold">+91 9471373777</span>
            </a>

            {/* CTA */}
            <Link
              href="/contact"
              className="block w-full text-center py-3 rounded-lg bg-slate-900 text-white font-semibold text-lg"
              onClick={() => setIsOpen(false)}
            >
              Book Appointment
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
