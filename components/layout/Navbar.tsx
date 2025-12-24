"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

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
    <>
      {/* ================= NAVBAR ================= */}
      <nav className="fixed top-0 left-0 right-0 z-[1001] pointer-events-auto bg-white/80 backdrop-blur-xl border-b border-gray-200/60 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center h-16 sm:h-20">

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

            {/* RIGHT SIDE */}
            <div className="ml-auto flex items-center gap-8">

              {/* DESKTOP MENU */}
              <div className="hidden lg:flex items-center gap-6">
                {navigation.map((item) => {
                  const active = pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`relative font-medium text-sm tracking-wide transition-colors ${
                        active
                          ? "text-blue-600"
                          : "text-gray-800 hover:text-blue-600"
                      }`}
                    >
                      {item.name}
                      <span
                        className={`absolute -bottom-1 left-0 h-[2px] rounded-full bg-blue-600 transition-all duration-300 ${
                          active ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                      />
                    </Link>
                  );
                })}
              </div>

              {/* CTA */}
              <div className="hidden lg:flex">
                <Link
                  href="/contact"
                  className="px-6 py-2.5 rounded-full bg-blue-600 text-white font-semibold text-sm shadow-md hover:shadow-lg hover:bg-blue-700 transition-all"
                >
                  Book Now
                </Link>
              </div>

              {/* MOBILE TOGGLE */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 rounded-full bg-white/90 border shadow-sm"
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>

            </div>
          </div>
        </div>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-[900] flex items-start justify-center pt-16 pointer-events-none">

          {/* BLUR OVERLAY (NAVBAR KE NICHE SE) */}
          <div
            className="fixed left-0 right-0 bottom-0 top-16 bg-black/40 backdrop-blur-md pointer-events-auto"
            onClick={() => setIsOpen(false)}
          />

          {/* MENU BOX */}
          <div className="relative z-[950] w-full bg-white/80 backdrop-blur-xl border-b border-gray-200/60 shadow-xl p-6 pointer-events-auto">

            <div className="mt-6 space-y-3">
              {navigation.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-xl font-semibold ${
                      active
                        ? "bg-blue-600 text-white"
                        : "text-gray-800 hover:bg-gray-100"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block mt-6 text-center py-3 rounded-xl bg-slate-900 text-white font-semibold"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
