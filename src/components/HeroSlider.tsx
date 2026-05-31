"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
  {
    image: "/images/projects/corporate/ubl_it/1.jpeg",
    title: "Interior Excellence",
    subtitle: "50+ Years of Crafting Premium Spaces",
  },
  {
    image: "/images/hero-corporate.jpg",
    title: "Corporate Interiors",
    subtitle: "Turnkey Solutions for Modern Offices",
  },
  {
    image: "/images/projects/retail/swiss_ligna/1.jpg",
    title: "Retail & Commercial",
    subtitle: "Transforming Brands Through Design",
  },
  {
    image: "/images/projects/furniture/residential/1.jpg",
    title: "Custom Furniture",
    subtitle: "Crafted With Precision & Passion",
  },
];

export default function HeroSlider() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="relative h-screen w-full">
      <Swiper
        modules={[Pagination, Autoplay, EffectFade]}
        effect="fade"
        onSwiper={(s) => (swiperRef.current = s)}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        speed={1200}
        className="hero-swiper h-full w-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="relative h-screen w-full overflow-hidden">
              <img
                src={slide.image}
                alt={slide.title}
                fetchPriority={i === 0 ? "high" : "auto"}
                loading={i === 0 ? "eager" : "lazy"}
                decoding="async"
                className="ken-burns absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50" />

              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-10 sm:px-20 md:px-28 lg:px-36">
                <h1
                  className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold italic leading-[1.1]"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  {slide.title}
                </h1>
                <p className="hero-sub mt-5 sm:mt-7 text-[11px] sm:text-xs md:text-sm lg:text-base font-normal tracking-[4px] sm:tracking-[6px] uppercase opacity-80">
                  {slide.subtitle}
                </p>
                <div className="hero-line h-[2px] bg-white/40 mt-6 sm:mt-8" style={{ width: 80 }} />
                <a
                  href="/projects"
                  className="hero-btn mt-8 sm:mt-10 bg-white text-[#080708] px-10 sm:px-14 py-3.5 sm:py-4 rounded-full text-[11px] sm:text-xs md:text-sm font-semibold tracking-[3px] uppercase hover:bg-[#E84520] hover:text-white transition-all duration-400 shadow-[0_4px_20px_rgba(0,0,0,0.15)]"
                >
                  Explore Our Work
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom navigation arrows */}
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        aria-label="Previous slide"
        className="hidden md:flex absolute left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 items-center justify-center rounded-full text-white border border-white/40 bg-black/20 backdrop-blur-sm hover:bg-[#E84520] hover:border-[#E84520] transition-all duration-300"
      >
        <FaChevronLeft className="text-sm" />
      </button>
      <button
        onClick={() => swiperRef.current?.slideNext()}
        aria-label="Next slide"
        className="hidden md:flex absolute right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 items-center justify-center rounded-full text-white border border-white/40 bg-black/20 backdrop-blur-sm hover:bg-[#E84520] hover:border-[#E84520] transition-all duration-300"
      >
        <FaChevronRight className="text-sm" />
      </button>
    </section>
  );
}
