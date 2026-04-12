"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

const slides = [
  {
    image: "/images/projects/commercial/optico_2023_interior.jpg",
    title: "Interior Excellence",
    subtitle: "50+ Years of Crafting Premium Spaces",
  },
  {
    image: "/images/projects/commercial/pak_vitae_2023_interior.jpg",
    title: "Corporate Interiors",
    subtitle: "Turnkey Solutions for Modern Offices",
  },
  {
    image: "/images/projects/commercial/swiss_ligna_gloss_2024_interior.jpg",
    title: "Retail & Commercial",
    subtitle: "Transforming Brands Through Design",
  },
  {
    image: "/images/projects/furniture/eleganz_luxury_2019_f.jpg",
    title: "Custom Furniture",
    subtitle: "Crafted With Precision & Passion",
  },
];

export default function HeroSlider() {
  return (
    <section className="relative h-screen w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        speed={1200}
        className="hero-swiper h-full w-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="relative h-screen w-full overflow-hidden">
              <div
                className="ken-burns absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
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
                  className="hero-btn mt-8 sm:mt-10 bg-white text-[#080708] px-10 sm:px-14 py-3.5 sm:py-4 rounded-full text-[11px] sm:text-xs md:text-sm font-semibold tracking-[3px] uppercase hover:bg-[#006A90] hover:text-white transition-all duration-400 shadow-[0_4px_20px_rgba(0,0,0,0.15)]"
                >
                  Explore Our Work
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
