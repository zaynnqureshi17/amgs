"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppWidget() {
  return (
    <a
      href="https://wa.me/923001234567"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-lg whatsapp-glow hover:scale-110 transition-transform duration-300"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="text-2xl md:text-3xl" />
    </a>
  );
}
