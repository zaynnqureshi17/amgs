"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Portfolio", href: "/projects" },
  { name: "Our Story", href: "/our-story" },
  { name: "About Us", href: "/about" },
  { name: "Faqs", href: "/faqs" },
];

export default function Header({ transparent = false }: { transparent?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // If not transparent (inner pages), always show dark/solid nav
  const isDark = transparent ? scrolled : true;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      {/* Top Bar - only on transparent (homepage), hides on scroll */}
      {transparent && (
      <div
        className={`bg-[#E84520] text-white hidden lg:block fixed left-0 right-0 z-[60] transition-transform duration-300 ${
          scrolled ? "-translate-y-full" : "translate-y-0"
        }`}
        style={{ top: 0 }}
      >
        <div className="max-w-7xl mx-auto px-6 xl:px-10 py-1.5 flex justify-between items-center text-[12px]">
          <div className="flex items-center gap-5">
            <a href="mailto:Info@amgys.com" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
              <FaEnvelope className="text-[12px] flex-shrink-0" /> Info@amgys.com
            </a>
            <a href="https://wa.me/923101191787" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
              <FaWhatsapp className="text-[12px] flex-shrink-0" /> 0310-1191787
            </a>
          </div>
          <div className="flex items-center gap-3.5">
            {[FaFacebookF, FaLinkedinIn, FaInstagram].map((Icon, i) => (
              <a key={i} href="#" className="hover:opacity-80 transition-opacity" aria-label="social"><Icon /></a>
            ))}
          </div>
        </div>
      </div>
      )}

      {/* Main Nav */}
      <header
        className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
          isDark
            ? "top-0 navbar-scrolled py-2"
            : "top-0 lg:top-[34px] bg-transparent py-3 lg:py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 xl:px-10 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <img
              src={isDark ? "/images/amgys-logo-dark.png" : "/images/amgys-logo-light.png"}
              alt="AMGYS Interiors"
              className="h-14 sm:h-16 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center">
            <div className="flex items-center gap-5 xl:gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`nav-link text-[11px] xl:text-[12px] font-medium tracking-[1.5px] uppercase transition-colors duration-300 ${
                    isDark
                      ? "text-[#080708] hover:text-[#E84520]"
                      : "text-white/85 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-2 ml-6">
              <Link
                href="/contact"
                className="bg-[#E84520] text-white px-4 xl:px-5 py-1.5 rounded text-[10px] xl:text-[11px] font-semibold tracking-[0.5px] hover:bg-[#C83A15] transition-colors whitespace-nowrap"
              >
                GET FREE ESTIMATE
              </Link>
              <Link
                href="/projects"
                className="bg-[#080708] text-white px-4 xl:px-5 py-1.5 rounded text-[10px] xl:text-[11px] font-semibold tracking-[0.5px] hover:bg-[#333] transition-colors whitespace-nowrap"
              >
                OUR WORK
              </Link>
            </div>
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className={`lg:hidden text-xl z-[60] transition-colors ${
              open || isDark ? "text-[#E84520]" : "text-white"
            }`}
            aria-label="Menu"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[55] bg-white transition-all duration-400 lg:hidden ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col justify-center h-full px-8 sm:px-10">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-xl sm:text-2xl font-semibold text-[#080708] hover:text-[#E84520] transition-colors py-3 border-b border-gray-100"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="flex gap-3 mt-6">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="flex-1 bg-[#E84520] text-white py-3 rounded text-center text-sm font-semibold tracking-wider hover:bg-[#C83A15] transition-colors"
            >
              GET FREE ESTIMATE
            </Link>
            <Link
              href="/projects"
              onClick={() => setOpen(false)}
              className="flex-1 bg-[#080708] text-white py-3 rounded text-center text-sm font-semibold tracking-wider hover:bg-[#333] transition-colors"
            >
              OUR WORK
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
