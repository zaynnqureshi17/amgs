"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const ReactCompareSlider = dynamic(
  () => import("react-compare-slider").then((mod) => mod.ReactCompareSlider),
  { ssr: false }
);
const ReactCompareSliderImage = dynamic(
  () =>
    import("react-compare-slider").then((mod) => mod.ReactCompareSliderImage),
  { ssr: false }
);

const tabs = [
  {
    id: "office",
    label: "CEO Office",
    tagline: "A bare shell transformed into a premium executive office with warm wood panelling and custom furniture.",
    before: "/images/before-after/before-1.jpeg",
    after: "/images/before-after/after-1.jpeg",
  },
  {
    id: "meeting",
    label: "Meeting Room",
    tagline: "Raw concrete walls converted into a modern branded meeting room for Al-Ameen Funds.",
    before: "/images/before-after/before-2.jpeg",
    after: "/images/before-after/after-2.jpeg",
  },
  {
    id: "reception",
    label: "Reception",
    tagline: "An empty space turned into a welcoming reception lounge with bold accent walls and designer seating.",
    before: "/images/before-after/before-3.jpeg",
    after: "/images/before-after/after-3.jpeg",
  },
];

function SliderHandle() {
  return (
    <div className="flex flex-col items-center h-full">
      <div className="w-[2px] flex-1 bg-white/70" />
      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-[0_2px_16px_rgba(0,0,0,0.25)] flex items-center justify-center flex-shrink-0 cursor-ew-resize">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="sm:w-6 sm:h-6">
          <path
            d="M6 10L3 7M3 7L6 4M3 7H9M14 10L17 7M17 7L14 4M17 7H11"
            stroke="#E84520"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            transform="translate(0, 3)"
          />
        </svg>
      </div>
      <div className="w-[2px] flex-1 bg-white/70" />
    </div>
  );
}

export default function TransformSpace() {
  const [active, setActive] = useState(0);
  const [mounted, setMounted] = useState(false);
  const current = tabs[active];

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="py-16 sm:py-20 md:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-6 sm:px-10">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8" data-aos="fade-up">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#080708]"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Transform Your Space
          </h2>
          <p className="text-[#4c505b] text-[13px] sm:text-sm mt-2 max-w-md mx-auto">
            See the before and after magic of our design transformations
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-2 sm:gap-3 mb-4 sm:mb-5">
          {tabs.map((tab, i) => (
            <button
              key={tab.id}
              onClick={() => setActive(i)}
              className={`px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-medium tracking-[1px] transition-all duration-300 border ${
                active === i
                  ? "bg-[#1a1a2e] text-white border-[#1a1a2e]"
                  : "bg-white text-[#4c505b] border-gray-300 hover:border-gray-500"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tagline */}
        <p className="text-center text-[#E84520] text-[11px] sm:text-xs mb-6 sm:mb-8 max-w-md mx-auto">
          {current.tagline}
        </p>

        {/* Before/After Slider */}
        <div className="rounded-lg overflow-hidden shadow-md mx-auto max-w-4xl h-[220px] sm:h-[320px] md:h-[400px] lg:h-[460px] bg-gray-100">
          {mounted && (
            <ReactCompareSlider
              handle={<SliderHandle />}
              itemOne={
                <ReactCompareSliderImage
                  src={current.before}
                  alt="Before"
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                />
              }
              itemTwo={
                <ReactCompareSliderImage
                  src={current.after}
                  alt="After"
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                />
              }
              style={{ width: "100%", height: "100%" }}
            />
          )}
        </div>

        {/* CTA */}
        <div className="text-center mt-8 sm:mt-10">
          <p className="text-[#4c505b] text-[13px] sm:text-sm mb-4">
            Ready to transform your space?
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#E84520] text-white px-7 sm:px-8 py-2.5 sm:py-3 rounded-full text-[11px] sm:text-xs font-semibold tracking-[2px] uppercase hover:bg-[#C83A15] transition-colors"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
}
