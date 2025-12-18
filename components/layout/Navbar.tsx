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

  // route change par menu close
  useEffect(() => setIsOpen(false), [pathname]);

  // body scroll lock
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
          ? "bg-white/90 backdrop-blur-xl shadow-lg border-b"
          : "bg-[#eaf6ff]"
      }`}
    >
      {/* TOP BAR */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* LOGO */}
          <Link href="/" className="flex items-center">
            <div className="relative w-28 h-10 sm:w-36 sm:h-14">
              <Image
                src="/logo.png"
                alt="Shree Dental Clinic"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative px-3 py-2 rounded-lg font-semibold transition-all duration-200 ${
                    active
                      ? "bg-blue-600 text-white"
                      : "text-slate-800 hover:bg-blue-100"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* DESKTOP CTA */}
          <div className="hidden lg:flex">
            <Link
              href="/contact"
              className="px-4 py-2 rounded-md bg-blue-600 text-white font-semibold"
            >
              Book Now
            </Link>
          </div>

          {/* MOBILE BURGER (ONLY BURGER HERE) */}
          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden p-2 rounded-md bg-white border shadow-md"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6 stroke-[3]" />
          </button>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          {/* DARK OVERLAY */}
          <div
            className="absolute inset-0 bg-black/30"
            onClick={() => setIsOpen(false)}
          />

          {/* MENU PANEL */}
          <div className="absolute top-0 left-0 right-0 bg-white rounded-b-2xl shadow-2xl px-6 py-6 relative">
            {/* ✅ CLOSE BUTTON (ONLY WHEN MENU OPEN) */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white border shadow-lg"
              aria-label="Close menu"
            >
              <X className="w-6 h-6 stroke-[3]" />
            </button>

            {/* MENU ITEMS */}
            <div className="mt-8 space-y-3">
              {navigation.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-lg font-semibold ${
                      active
                        ? "bg-blue-600 text-white"
                        : "text-slate-800 hover:bg-slate-100"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>

            {/* CTA */}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block mt-4 text-center py-3 rounded-lg bg-slate-900 text-white font-semibold"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
