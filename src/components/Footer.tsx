"use client";

import Link from "next/link";
import { FaFacebookF, FaInstagram, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const navLinks = ["Home", "Portfolio", "Our Story", "About", "Faqs"];
const navHrefs = ["/", "/projects", "/our-story", "/about", "/faqs"];

export default function Footer() {
  return (
    <footer>
      {/* Teal wave */}
      <div className="bg-[#E84520] h-[60px] sm:h-[80px]" style={{ clipPath: "ellipse(60% 100% at 50% 100%)" }} />

      {/* CTA */}
      <div className="bg-white py-8 sm:py-10">
        <div className="max-w-5xl mx-auto px-6 sm:px-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#080708] text-center sm:text-left" style={{ fontFamily: "var(--font-playfair), serif" }}>
            Take a Best Interior Design Experience
          </h3>
          <a href="/contact" className="bg-[#E84520] text-white px-7 py-2.5 rounded-full text-xs font-semibold tracking-[1px] hover:bg-[#C83A15] transition-colors flex-shrink-0">
            Lets Go
          </a>
        </div>
      </div>

      {/* Contact details */}
      <div className="border-t border-gray-200 bg-white">
        <div className="max-w-5xl mx-auto px-6 sm:px-10 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-center gap-4 sm:gap-10">
          <a
            href="https://maps.google.com/maps/search/Amgys%20Interiors/@24.86718769,67.08061205,17z?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-2 text-[12px] text-[#4c505b] hover:text-[#E84520] transition-colors max-w-xs"
          >
            <FaMapMarkerAlt className="mt-0.5 flex-shrink-0 text-[#E84520]" />
            <span>Office No. 110, 1st Floor, Anum Blessing, Block 7/8, K.C.H.S.U., Near Old Duty Free Shop, Main Shahrah-e-Faisal, Karachi</span>
          </a>
          <a
            href="tel:+922134549977"
            className="flex items-center gap-2 text-[12px] text-[#4c505b] hover:text-[#E84520] transition-colors flex-shrink-0"
          >
            <FaPhone className="flex-shrink-0 text-[#E84520]" />
            <span>+92-21-34549977</span>
          </a>
        </div>
      </div>

      {/* Nav + Social */}
      <div className="border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-6 sm:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map((name, i) => (
              <Link key={name} href={navHrefs[i]} className="text-[13px] text-[#4c505b] hover:text-[#E84520] transition-colors">{name}</Link>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <a href="https://www.facebook.com/share/1JTZMjDaEW/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded border border-gray-300 flex items-center justify-center text-[#4c505b] hover:text-[#E84520] hover:border-[#E84520] transition-colors text-xs" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/amgysinteriors?igsh=MXQ5NjByemR6NG9naQ==" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded border border-gray-300 flex items-center justify-center text-[#4c505b] hover:text-[#E84520] hover:border-[#E84520] transition-colors text-xs" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-6 sm:px-10 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-gray-400">&copy; 2026 AMGYS Interiors. All Rights Reserved</p>
          <div className="flex-shrink-0">
            <img src="/images/amgys-logo-dark.png" alt="AMGYS Interiors" className="h-10 w-auto object-contain" />
          </div>
          <div className="flex gap-4">
            <a href="#" className="text-[11px] text-gray-400 hover:text-[#E84520] transition-colors">Terms and Conditions</a>
            <a href="#" className="text-[11px] text-gray-400 hover:text-[#E84520] transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
