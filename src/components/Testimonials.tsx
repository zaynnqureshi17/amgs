"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Naveed Ahmed",
    role: "UBL Fund Managers",
    text: "AMGYS delivered an outstanding interior for our office. Their 50 years of experience truly shows in every detail. Professional, on-time, and within budget.",
    rating: 5,
  },
  {
    name: "Dr. Nadir Shah",
    role: "Med Life Clinic",
    text: "From design consultation to final handover, AMGYS handled our clinic renovation with exceptional care. The quality of workmanship is second to none.",
    rating: 5,
  },
  {
    name: "Farhan Malik",
    role: "OPTICO Opticians",
    text: "We trusted AMGYS with our flagship store interior and they exceeded every expectation. The retail space is now a showstopper that our customers love.",
    rating: 5,
  },
  {
    name: "Tahir Minhas",
    role: "iVolve Technologies",
    text: "AMGYS executed our complete turnkey office project flawlessly. Their team managed everything from civil work to furniture — a truly one-stop solution.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div data-aos="fade-right">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/images/projects/commercial/prolog_2024_interior.jpg"
                alt="AMGYS Interiors project"
                className="w-full h-[280px] sm:h-[360px] lg:h-[440px] object-cover"
              />
            </div>
          </div>

          <div data-aos="fade-left">
            <span className="text-[#E84520] text-[11px] sm:text-xs font-semibold tracking-[3px] uppercase">
              Testimonials
            </span>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#080708] mt-3 mb-8 leading-snug"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              What Our Clients<br />Say About Us
            </h2>

            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              loop
              spaceBetween={30}
              className="testimonial-swiper pb-12"
            >
              {testimonials.map((t, i) => (
                <SwiperSlide key={i}>
                  <div>
                    <FaQuoteLeft className="text-[#E84520]/20 text-2xl sm:text-3xl mb-4" />
                    <p className="text-[#4c505b] text-sm sm:text-[15px] leading-[1.8] mb-5">
                      &ldquo;{t.text}&rdquo;
                    </p>
                    <div className="flex items-center gap-1 mb-3">
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <FaStar key={j} className="text-amber-400 text-xs" />
                      ))}
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-[#E84520] flex items-center justify-center text-white font-bold text-xs">
                        {t.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-[#080708] text-sm" style={{ fontFamily: "var(--font-playfair), serif" }}>{t.name}</p>
                        <p className="text-[#E84520] text-xs">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
