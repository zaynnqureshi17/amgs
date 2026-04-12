"use client";

import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";

const navLinks = ["Home", "Portfolio", "Our Story", "About", "Faqs", "Vlogs"];
const navHrefs = ["/", "/projects", "/our-story", "/about", "/faqs", "/videos"];

const projects = [
  "OPTICO 2023", "Pak Vitae 2023", "UBL IT & IS 2024", "Swiss Ligna Gloss 2024",
  "AHM Securities 2023", "Edenrobe Beauty 2024", "PROLOG 2024", "Sana Sarah Salon 2022",
];

export default function Footer() {
  return (
    <footer>
      {/* Teal wave */}
      <div className="bg-[#006A90] h-[60px] sm:h-[80px]" style={{ clipPath: "ellipse(60% 100% at 50% 100%)" }} />

      {/* CTA */}
      <div className="bg-white py-8 sm:py-10">
        <div className="max-w-5xl mx-auto px-6 sm:px-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#080708] text-center sm:text-left" style={{ fontFamily: "var(--font-playfair), serif" }}>
            Take a Best Interior Design Experience
          </h3>
          <a href="/contact" className="bg-[#006A90] text-white px-7 py-2.5 rounded-full text-xs font-semibold tracking-[1px] hover:bg-[#005573] transition-colors flex-shrink-0">
            Lets Go
          </a>
        </div>
      </div>

      {/* Nav + Social */}
      <div className="border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-6 sm:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map((name, i) => (
              <Link key={name} href={navHrefs[i]} className="text-[13px] text-[#4c505b] hover:text-[#006A90] transition-colors">{name}</Link>
            ))}
          </div>
          <div className="flex items-center gap-3">
            {[FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube].map((Icon, i) => (
              <a key={i} href="#" className="w-8 h-8 rounded border border-gray-300 flex items-center justify-center text-[#4c505b] hover:text-[#006A90] hover:border-[#006A90] transition-colors text-xs" aria-label="social">
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Projects */}
      <div className="border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-6 sm:px-10 py-6">
          <h4 className="text-base font-semibold text-[#080708] mb-4" style={{ fontFamily: "var(--font-playfair), serif" }}>
            Projects
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-2">
            {projects.map((p) => (
              <span key={p} className="text-[12px] text-[#4c505b]">{p}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-6 sm:px-10 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-gray-400">&copy; 2026 AMGYS Interiors. All Rights Reserved</p>
          <div className="flex-shrink-0">
            <span className="text-lg font-bold text-[#080708] tracking-[2px]" style={{ fontFamily: "var(--font-playfair), serif" }}>AMGYS</span>
            <span className="block text-[7px] text-[#006A90] tracking-[2px] italic -mt-0.5">Interiors</span>
          </div>
          <div className="flex gap-4">
            <a href="#" className="text-[11px] text-gray-400 hover:text-[#006A90] transition-colors">Terms and Conditions</a>
            <a href="#" className="text-[11px] text-gray-400 hover:text-[#006A90] transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
