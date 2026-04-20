"use client";

import { useState } from "react";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";

const faqs = [
  {
    q: "How your interior process works?",
    a: "Our process begins with an initial consultation to understand your vision, followed by concept development, 3D visualization, and finally execution. We keep you involved at every step to ensure the final result exceeds your expectations.",
  },
  {
    q: "How does AMGYS Interiors work?",
    a: "We generate revenue through design consultation fees, turnkey project execution, and custom furniture manufacturing. With 50+ years of experience, our pricing is transparent and competitive.",
  },
  {
    q: "What is the cost interior project",
    a: "Project costs vary based on scope, materials, and complexity. We offer free initial consultations and provide detailed estimates before starting any work. Our projects range from budget-friendly to luxury tier.",
  },
  {
    q: "Where can I see the AMGYS portfolio?",
    a: "You can view our complete portfolio on our website's Portfolio page. We showcase corporate interiors, retail kiosks, turnkey projects, and custom furniture across 60+ completed projects.",
  },
  {
    q: "What types of projects does AMGYS handle?",
    a: "We specialize in turnkey interior renovation, corporate offices, retail outlets, cafes & restaurants, kiosk design, and customized furniture manufacturing for both residential and commercial clients.",
  },
  {
    q: "Does AMGYS do residential projects?",
    a: "Yes! Along with our corporate and commercial specialization, we also provide complete residential interior solutions including custom furniture, renovations, and end-to-end interior design.",
  },
];

export default function FaqsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="pt-32 sm:pt-36 pb-16 sm:pb-20 bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-6 sm:px-10">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#080708]"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Frequently Asked Question
          </h1>
          <p className="text-[#4c505b] text-sm mt-3 max-w-lg mx-auto">
            Everything you need to know about AMGYS Interiors. If you can&apos;t find what you are
            looking for, please feel free to contact our friendly team
          </p>
        </div>

        {/* FAQ Items */}
        <div className="divide-y divide-gray-200">
          {faqs.map((faq, i) => (
            <div key={i} className="py-5">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between text-left gap-4"
              >
                <span className="text-sm sm:text-[15px] font-medium text-[#080708]">
                  {faq.q}
                </span>
                {openIndex === i ? (
                  <FaMinusCircle className="text-[#E84520] text-lg flex-shrink-0" />
                ) : (
                  <FaPlusCircle className="text-[#E84520] text-lg flex-shrink-0" />
                )}
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? "max-h-40 mt-3" : "max-h-0"
                }`}
              >
                <p className="text-[#4c505b] text-sm leading-[1.8]">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions */}
        <div className="bg-[#f7f7f7] rounded-xl p-8 sm:p-10 text-center mt-12">
          <div className="flex justify-center -space-x-2 mb-4">
            {["https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80",
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80",
              "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&q=80",
            ].map((src, i) => (
              <img
                key={i}
                src={src}
                alt="Team member"
                className="w-9 h-9 rounded-full border-2 border-white object-cover"
              />
            ))}
          </div>
          <h3 className="font-semibold text-[#080708] text-base mb-1">
            Still have questions?
          </h3>
          <p className="text-[#4c505b] text-sm mb-4">
            Can&apos;t find the answer you&apos;re looking for? Please chat to our friendly team.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#080708] text-white px-6 py-2.5 rounded text-xs font-semibold tracking-[1px] hover:bg-[#333] transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
